/*
 * --------------------------------------------------
 * MOG_BattleHudFixPatch.js
 *   Ver.1.3.0
 * Copyright (c) 2020 Munokura
 * This software is released under the MIT license.
 * http://opensource.org/licenses/mit-license.php
 * --------------------------------------------------
 */

/*:
 * @plugindesc MOG Battle Hud (v5.04)で見つかったバグを修正するパッチプラグイン
 * @author munokura
 *
 * @help
 * MOG Battle Hud (v5.04) のバグを修正するパッチプラグインです。
 * プラグイン管理でMOG_BattleHudの下側に配置してください。
 *
 * 修正箇所
 * 
 * Face Frame Animation を有効にし、Face Zoom Animation を無効にした場合、
 * Face Frame Animation が一部正常に動作しない問題を解消。
 * 
 * States Mode が Line Mode の時、
 * ステート表示の更新処理が適切に行われない問題の解消。
 * ステート表示のターン数等を表示するプラグインで起こる問題の解消。
 * 
 * HP,MPの最大値が戦闘中に上がった時、
 * メーターの表示が適切に行われない問題の解消。
 * 
 * v1.2.0
 * フロントビュー戦闘で全体アニメーションの位置が正しく表示されない問題を解消。
 * ※nekoma otobuki
 * 
 * v1.3.0
 * 戦闘を行った後のセーブデータに、
 * 変更したプラグインパラメーターが反映されない問題を解消。
 *
 */

(function () {
	'use strict';

	//==============================
	// * Prepare
	//==============================
	var _alias_mog_bmhud_action_prepare = Game_Action.prototype.prepare
	Game_Action.prototype.prepare = function () {
		_alias_mog_bmhud_action_prepare.call(this);
		if (this.subject().isActor() && (String(Moghunter.bhud_face_animated) === "true" || String(Moghunter.bhud_face_zoom) === "true")) {
			this.subject()._bhud_face_data = [0, 70, 2, 70];
		};
	};

	//==============================
	// * Update Face
	//==============================
	Battle_Hud.prototype.update_face = function () {
		if (!this._face) { return; }
		if (!this._face.bitmap.isReady()) { return; }
		if (this._face_data[4] && this._face_data[5] != this._battler._bhud_face_data[2]) {
			this.refresh_face();
		}
		if (String(Moghunter.bhud_face_animated) === "true") {
			this.update_face_animation();
		}
		if (String(Moghunter.bhud_face_shake) === "true") {
			this.update_face_shake();
		}
		if (String(Moghunter.bhud_face_zoom) === "true") {
			this.update_face_zoom();
		}
		if (this._face.breathEffect) {
			this.updateFaceEffects();
		}
	};

	//==============================
	// * Create States 2
	//==============================
	const _Battle_Hud_create_states2 = Battle_Hud.prototype.create_states2;
	Battle_Hud.prototype.create_states2 = function () {
		this._states_data[2] = 0;
		_Battle_Hud_create_states2.call(this);
	};

	//==============================
	// * Update States 2
	//==============================
	const _Battle_Hud_update_states2 = Battle_Hud.prototype.update_states2;
	Battle_Hud.prototype.update_states2 = function () {
		this._states_data[2] += 1;
		_Battle_Hud_update_states2.call(this);
	};

	//==============================
	// * Need Refresh States 2
	//==============================
	const _Battle_Hud_need_refresh_states2 = Battle_Hud.prototype.need_refresh_states2;
	Battle_Hud.prototype.need_refresh_states2 = function () {
		if (this._states_data[2] > 60) {
			return true;
		}
		_Battle_Hud_need_refresh_states2.call(this);
	};

	//==============================
	// * Update HP
	//==============================
	Battle_Hud.prototype.update_hp = function () {
		if (this._hp_meter_blue) {
			if (this._hp_flow[0]) {
				this.refresh_meter_flow(this._hp_meter_blue, this._battler.hp, this._battler.mhp, 0, this._hp_flow[1]);
				var dif_meter = this.update_dif(this._hp_old_ani[0], this._battler.hp, 160);
				if (this._hp_old_ani[0] != dif_meter) {
					this._hp_old_ani[0] = dif_meter;
				}
				if (this._battler.mhp < this._hp_old_ani[0]) {
					this.refresh_meter_flow(this._hp_meter_red, this._battler.mhp, this._battler.mhp, 1, this._hp_flow[1]);
				} else {
					this.refresh_meter_flow(this._hp_meter_red, this._hp_old_ani[0], this._battler.mhp, 1, this._hp_flow[1]);
				}
				this._hp_flow[1] += 1.5;
				if (this._hp_flow[1] > this._hp_flow[3]) {
					this._hp_flow[1] = 0;
				}
			} else {
				if (this.need_refresh_parameter(0)) {
					this.refresh_meter(this._hp_meter_blue, this._battler.hp, this._battler.mhp, 0);
					this._hp_old = [this._battler.hp, this._battler.mhp];
				}
				var dif_meter = this.update_dif(this._hp_old_ani[0], this._battler.hp, 160);
				if (this._hp_old_ani[0] != dif_meter) {
					this._hp_old_ani[0] = dif_meter;
				}
				if (this._battler.mhp < this._hp_old_ani[0]) {
					this.refresh_meter(this._hp_meter_red, this._battler.mhp, this._battler.mhp, 1);
				} else {
					this.refresh_meter(this._hp_meter_red, this._hp_old_ani[0], this._battler.mhp, 1);
				}
			}
		}
		if (this._hp_number) {
			var dif_number = this.update_dif(this._hp_number_old, this._battler.hp, 30);
			if (this._hp_number_old != dif_number) {
				this._hp_number_old = dif_number;
				this.refresh_number(this._hp_number, this._hp_number_old, this._hp_img_data, this._hp_img_data[4], this._hp_img_data[5], 0);
			}
		}
		if (this._maxhp_number) {
			if (this._maxhp_number_old != this._battler.mhp) {
				this._maxhp_number_old = this._battler.mhp;
				this.refresh_number(this._maxhp_number, this._maxhp_number_old, this._maxhp_img_data, this._maxhp_img_data[4], this._maxhp_img_data[5], 0);
			}
		}
	};

	//==============================
	// * Update MP
	//==============================
	Battle_Hud.prototype.update_mp = function () {
		if (this._mp_meter_blue) {
			if (this._mp_flow[0]) {
				this.refresh_meter_flow(this._mp_meter_blue, this._battler.mp, this._battler.mmp, 0, this._mp_flow[1]);
				var dif_meter = this.update_dif(this._mp_old_ani[0], this._battler.mp, 160)
				if (this._mp_old_ani[0] != dif_meter) {
					this._mp_old_ani[0] = dif_meter;
				}
				if (this._battler.mmp < this._mp_old_ani[0]) {
					this.refresh_meter_flow(this._mp_meter_red, this._battler.mmp, this._battler.mmp, 1, this._mp_flow[1]);
				} else {
					this.refresh_meter_flow(this._mp_meter_red, this._mp_old_ani[0], this._battler.mmp, 1, this._mp_flow[1]);
				}
				this._mp_flow[1] += 1.5;
				if (this._mp_flow[1] > this._mp_flow[3]) {
					this._mp_flow[1] = 0
				}
			} else {
				if (this.need_refresh_parameter(1)) {
					this.refresh_meter(this._mp_meter_blue, this._battler.mp, this._battler.mmp, 0);
					this._mp_old = [this._battler.mp, this._battler.mmp];
				}
				var dif_meter = this.update_dif(this._mp_old_ani[0], this._battler.mp, 160);
				if (this._mp_old_ani[0] != dif_meter) {
					this._mp_old_ani[0] = dif_meter;
				}
				if (this._battler.mmp < this._mp_old_ani[0]) {
					this.refresh_meter(this._mp_meter_red, this._battler.mmp, this._battler.mmp, 1);
				} else {
					this.refresh_meter(this._mp_meter_red, this._mp_old_ani[0], this._battler.mmp, 1);
				}
			}
			if (this._mp_number) {
				var dif_number = this.update_dif(this._mp_number_old, this._battler.mp, 30)
				if (this._mp_number_old != dif_number) {
					this._mp_number_old = dif_number;
					this.refresh_number(this._mp_number, this._mp_number_old, this._mp_img_data, this._mp_img_data[4], this._mp_img_data[5], 1);
				};
			};
			if (this._maxmp_number) {
				if (this._maxmp_number_old != this._battler.mmp) {
					this._maxmp_number_old = this._battler.mmp;
					this.refresh_number(this._maxmp_number, this._maxmp_number_old, this._maxmp_img_data, this._maxmp_img_data[4], this._maxmp_img_data[5], 1);
				}
			}
		}
	};

	//==============================
	// ** create Hud Field ** fixed by nekoma otobuki
	//==============================
	Scene_Base.prototype.createHudField = function () {
		var width = Graphics.boxWidth;
		var height = Graphics.boxHeight;
		var x = (Graphics.width - width) / 2;
		var y = (Graphics.height - height) / 2;
		this._hudField = new Sprite();
		this._hudField.setFrame(x, y, width, height);
		this._hudField.z = 10;
		this.addChild(this._hudField);
	};

	//==============================
	// ** update Battle Commands
	//==============================
	Window_ActorCommand.prototype.updateBattleCommands = function () {
		if ($gameTemp._bhud_position_active) {
			this.visible = this.active;
			// if ($gameSystem._bhud_auto_com) { // セーブ対策
			if ($gameTemp._bhud_auto_com) {
				this.x = $gameTemp._bhud_position_active[0] + Moghunter.bhud_com_x;
				if (this._com_mode === 0) {
					this.y = $gameTemp._bhud_position_active[1] + Moghunter.bhud_com_y - this.height;
				} else {
					this.y = $gameTemp._bhud_position_active[1] + Moghunter.bhud_com_y
				};
			} else {
				this.x = Moghunter.bhud_com_x;
				this.y = Moghunter.bhud_com_y;
			};
		};
	};

	//==============================
	// ** update Position S
	//==============================
	Window_ActorCommand.prototype.updatePosS = function () {
		if ($gameTemp._bhud_position_active) {
			this.visible = this.active;
			// if ($gameSystem._bhud_auto_com) { // セーブ対策
			if ($gameTemp._bhud_auto_com) {
				if (this.xp != $gameTemp._bhud_position_active[0] || this.yp != $gameTemp._bhud_position_active[1]) {
					this.xp = $gameTemp._bhud_position_active[0];
					this.yp = $gameTemp._bhud_position_active[1];
					this.org[0] = $gameTemp._bhud_position_active[0] + Moghunter.bhud_com_x;
					if (this._com_mode === 0) {
						this.org[1] = $gameTemp._bhud_position_active[1] + Moghunter.bhud_com_y - this.height;
					} else {
						this.org[1] = $gameTemp._bhud_position_active[1] + Moghunter.bhud_com_y;
					};
					this.org2 = [
						this.org[0] + Moghunter.bhud_com_slideX,
						this.org[1] + Moghunter.bhud_com_slideY
					];
					if (this._actorVis != this._actor) {
						this.x = this.org2[0];
						this.y = this.org2[1];
						this._actorVis = this._actor;
					};
				};
				this.slideWindow(this, false);
			} else {
				this.slideWindow(this, false);
			};
		};
	};

	//==============================
	// ** update Position N
	//==============================
	Window_ActorCommand.prototype.updatePosN = function () {
		if ($gameTemp._bhud_position_active) {
			this.visible = this.active;
			// if ($gameSystem._bhud_auto_com) { // セーブ対策
			if ($gameTemp._bhud_auto_com) {
				this.x = $gameTemp._bhud_position_active[0] + Moghunter.bhud_com_x;
				if (this._com_mode === 0) {
					this.y = $gameTemp._bhud_position_active[1] + Moghunter.bhud_com_y - this.height;
				} else { this.y = $gameTemp._bhud_position_active[1] + Moghunter.bhud_com_y };
			} else {
				this.x = Moghunter.bhud_com_x;
				this.y = Moghunter.bhud_com_y;
			};
		};
	};

	//==============================
	// * Is Busy
	//==============================
	Spriteset_Battle.prototype.isBusy = function () {
		// if ($gameSystem._bhudFaceBattler) { // セーブ対策
		if ($gameTemp._bhudFaceBattler) {
			return this.isAnimationPlaying() || this.isAnyoneMoving() || $gameTemp._bhudFaceAnime > 0;
		};
		if (Imported.YEP_BattleEngineCore) { return false };
		return this.isAnimationPlaying() || this.isAnyoneMoving();
	};

	//==============================
	// ** create Battle Hud
	//==============================
	Scene_Base.prototype.createBattleHud = function () {
		if (String(Moghunter.bhud_screen_layout) === "true") { this.createBattleHudScreenLayout(); };
		$gameTemp.refresh_Bhud = false;
		$gameTemp._battleEnd = false;
		// this._com_mode = Number($gameSystem._bhud_pos_mode) // セーブ対策
		this._com_mode = Number($gameTemp._bhud_pos_mode)
		this._battle_hud = [];
		for (var i = 0; i < $gameParty.maxBattleMembers(); i++) {
			this._battle_hud[i] = new Battle_Hud(i);
			this._battle_hud[i].mz = 110;
			this._hudField.addChild(this._battle_hud[i]);
		};
	};

	// セーブ対策

	//===========================================================================
	// ** Game_System
	//===========================================================================

	//==============================
	// * Initialize
	//==============================
	var _alias_mog_bhud_sys_initialize = Game_System.prototype.initialize;
	Game_System.prototype.initialize = function () {
		_alias_mog_bhud_sys_initialize.call(this);
		// this._bhud_position = [];
		// for (var i = 0; i < 8; i++) {
		// 	this._bhud_position[i] = this.set_hudcp(Moghunter.bhud_custom_pos[i]);
		// };
		// this._bhud_auto_com = false;
		// this._bhud_pos_mode = 0;
		this._bhud_visible = true;
		// this._bhudFaceBattler = String(Moghunter.bhud_face_visible) == "true" && !$dataSystem.optSideView ? true : false;
		// if (String(Moghunter.bhud_pos_mode) == "true") { this._bhud_pos_mode = 1 };
		// if (Number(Moghunter.bhud_auto_pos) == 0) { this._bhud_auto_com = true };
	};

	//===========================================================================
	// ** Game_Temp
	//===========================================================================

	//==============================
	// * Initialize
	//==============================
	var _alias_mog_bhud_temp_initialize = Game_Temp.prototype.initialize;
	Game_Temp.prototype.initialize = function () {
		_alias_mog_bhud_temp_initialize.call(this);
		this._bhud_position = [];
		this._bhud_position_active = null;
		this._bhudFaceAnime = false;
		this._battleEnd = false;
		this._bhud_dp = false;
		this._refreshBhud = false;
		this._forceCreateBattleHud = false;
		this._forceRemoveBattleHud = false;

		this._bhud_position = [];
		for (var i = 0; i < 8; i++) {
			this._bhud_position[i] = this.set_hudcp(Moghunter.bhud_custom_pos[i]);
		};
		this._bhud_auto_com = false;
		this._bhud_pos_mode = 0;
		this._bhud_visible = true;
		this._bhudFaceBattler = String(Moghunter.bhud_face_visible) == "true" && !$dataSystem.optSideView ? true : false;
		if (String(Moghunter.bhud_pos_mode) == "true") { this._bhud_pos_mode = 1 };
		if (Number(Moghunter.bhud_auto_pos) == 0) { this._bhud_auto_com = true };
	};

	//==============================
	// * set Hudcp
	//==============================
	Game_Temp.prototype.set_hudcp = function (value) {
		if (!value) { return null };
		var s = value.split(',');
		if (!s[0] || !s[1]) { return null };
		return [Number(s[0]), Number(s[1])];
	}

	//===========================================================================
	// ** Window Actor Command
	//===========================================================================

	//==============================
	// * initialize
	//==============================
	var _alias_mog_bhud_wActCom_initialize = Window_ActorCommand.prototype.initialize;
	Window_ActorCommand.prototype.initialize = function () {
		_alias_mog_bhud_wActCom_initialize.call(this);
		// this._com_mode = Number($gameSystem._bhud_pos_mode);
		this._com_mode = Number($gameTemp._bhud_pos_mode);
		this._force_hide_duration = 0;
		this.org = [Moghunter.bhud_com_x, Moghunter.bhud_com_y];
		this.org2 = [
			this.org[0] + Moghunter.bhud_com_slideX,
			this.org[1] + Moghunter.bhud_com_slideY
		];
		this.slide = Moghunter.bhud_com_slideX === 0 && Moghunter.bhud_com_slideY === 0 ? false : true;
		this._actorVis != this._actor;
		this.xp = -1;
		this.yp = -1;
	};

	// ==============================
	// * Set Hud Position
	// 	==============================
	Battle_Hud.prototype.set_hud_position = function () {
		this._hud_size = [this._layout.bitmap.width, this._layout.bitmap.height];
		this._members_max = $gameParty.battleMembers().length;
		var ps = [Number(Moghunter.bhud_space_x) * this._hud_id,
		Number(Moghunter.bhud_space_y) * this._hud_id];
		// if ($gameSystem._bhud_position[this._hud_id]) {
		if ($gameTemp._bhud_position[this._hud_id]) {
			// this._pos_x = $gameSystem._bhud_position[this._hud_id][0];
			// this._pos_y = $gameSystem._bhud_position[this._hud_id][1];
			this._pos_x = $gameTemp._bhud_position[this._hud_id][0];
			this._pos_y = $gameTemp._bhud_position[this._hud_id][1];
		} else {
			if (Number($gameTemp._bhud_pos_mode) === 0) {
				var spc = ((Graphics.boxWidth - 14) / this._members_max);
				var px = (spc / 2) + (spc * this._hud_id);
				this._pos_x = Moghunter.bhud_pos_x + px + ps[0];
				this._pos_y = Moghunter.bhud_pos_y + ps[1];
			} else {
				var py = (this._hud_size[1] + 5) * this._hud_id;
				this._pos_x = Moghunter.bhud_pos_x + ps[0];
				this._pos_y = Moghunter.bhud_pos_y + py + ps[1];
			};
		};
		$gameTemp._bhud_position[this._hud_id] = [this._pos_x, this._pos_y];
	};

})();
