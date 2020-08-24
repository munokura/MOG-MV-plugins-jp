/*
 * --------------------------------------------------
 * MOG_SceneMenu_loop_patch
 * Copyright (c) 2020 Munokura
 * This software is released under the MIT license.
 * http://opensource.org/licenses/mit-license.php
 * --------------------------------------------------
 */

/*:
 * @plugindesc MOG_SceneMenu.js のメニューを左右ループするように変更します
 * @author munokura
 *
 * @help
 * MOG Scene Menu のメニューを左右ループするように変更します。
 * プラグイン管理でMOG_SceneMenuの下側に配置してください。
 */

(function () {
	'use strict';

	Window_MenuCommand.prototype.processCursorMove = function () {
		if (this.isCursorMovable()) {
			var lastIndex = this.index();
			if (Input.isRepeated('down') || Input.isRepeated('right')) {
				this.cursorDown(true);	//ecf5DTTzl6h6lJj02氏改変
			};
			if (Input.isRepeated('up') || Input.isRepeated('left')) {
				this.cursorUp(true);	//ecf5DTTzl6h6lJj02氏改変
			};
			if (this.index() !== lastIndex) {
				SoundManager.playCursor();
			};
		};
	};

})();
