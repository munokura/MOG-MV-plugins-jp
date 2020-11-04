/*
 * --------------------------------------------------
 * MOG_BattleHudFixPatch Ver.1.1.2
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
 * ステート表示の更新処理が適切に行われない問題を修正。
 * ステート表示のターン数等を表示するプラグインで起こる問題の解消。
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

})();
