/*
 * --------------------------------------------------
 * MOG_BattleHudFixPatch Ver.1.1.7
 * Copyright (c) 2020 Munokura
 * This software is released under the MIT license.
 * http://opensource.org/licenses/mit-license.php
 * --------------------------------------------------
 */

/*:
 * @plugindesc MOG Battle Hud (v5.04f)で見つかったバグを修正するパッチプラグイン
 * @author munokura
 *
 * @help
 * MOG Battle Hud (v5.04f) のバグを修正するパッチプラグインです。
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
		if (!this._face) {
			return;
		}
		if (!this._face.bitmap.isReady()) {
			return;
		}
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

})();
