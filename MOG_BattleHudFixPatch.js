/*
 * --------------------------------------------------
 * MOG_BattleHudFixPatch Ver.1.0.1
 * Copyright (c) 2020 Munokura
 * This software is released under the MIT license.
 * http://opensource.org/licenses/mit-license.php
 * --------------------------------------------------
 */

/*:
 * @plugindesc MOG Battle Hud (v5.04f)の顔画像のフレーム機能とズーム機能でのバグを修正するパッチプラグイン
 * @author munokura
 *
 * @help
 * MOG Battle Hud (v5.04f) のフレーム機能とズーム機能での
 * バグを修正するパッチプラグインです。
 *
 * Face Frame Animation を有効にし、Face Zoom Animation を無効にした場合、
 * Face Frame Animation が一部正常に動作しない問題を解消します。
 *
 * プラグイン管理でMOG_BattleHudの下側に配置してください。
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
		if (!this._face) { return };
		if (!this._face.bitmap.isReady()) { return };
		if (this._face_data[4] && this._face_data[5] != this._battler._bhud_face_data[2]) {
			this.refresh_face();
		};
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
			this.updateFaceEffects()
		};
	};

})();
