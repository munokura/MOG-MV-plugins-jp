/*
 * --------------------------------------------------
 * MOG_BattleHudFixPatch
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
	if (this.subject().isActor() && String(Moghunter.bhud_face_animated) === "true") {
		this.subject()._bhud_face_data = [0, 70, 2, 70];
	};
};

//==============================
// * Update Face Zoom
//==============================
Battle_Hud.prototype.update_face_zoom = function () {
	if (this._bhud_face_animated) {
		if (this._battler._bhud_face_data[1] > 0) {
			this._battler._bhud_face_data[1] -= 1;
			if (this._battler._bhud_face_data[1] == 0) {
				this._face.scale.x = 1.00
			}
			else if (this._battler._bhud_face_data[1] < 35) {
				this._face.scale.x -= 0.005;
				if (this._face.scale.x < 1.00) {
					this._face.scale.x = 1.00;
				};
			}
			else if (this._battler._bhud_face_data[1] < 70) {
				this._face.scale.x += 0.005;
				if (this._face.scale.x > 1.25) {
					this._face.scale.x = 1.25;
				};
			};
			this._face.scale.y = this._face.scale.x;
		}
	}
};

})();
