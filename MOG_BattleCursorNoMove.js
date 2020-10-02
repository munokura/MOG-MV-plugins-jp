/*
 * --------------------------------------------------
 * MOG_BattleCursorNoMove
 * Copyright (c) 2020 Munokura
 * This software is released under the MIT license.
 * http://opensource.org/licenses/mit-license.php
 * --------------------------------------------------
 */

/*:
 * @plugindesc MOG_BattleCursor の流れるカーソル移動を無効にします。
 * @author munokura
 * 
 * @help
 * MOG_BattleCursor (v2.4.2で動作確認)のパッチプラグインです。
 * 流れるカーソル移動を無効にします。
 * 
 * プラグイン管理で MOG_BattleCursor の下側に配置してください。
 * 
 *
 * 利用規約:
 *   MITライセンスです。
 *   https://ja.osdn.net/projects/opensource/wiki/licenses%2FMIT_license
 *   作者に無断で改変、再配布が可能で、
 *   利用形態（商用、18禁利用等）についても制限はありません。
 */

(() => {

    "use strict";

    //==============================
    // * Sprite Move To
    //==============================
    BattleCursor.prototype.sprite_move_to = function (value, real_value, speed) {
        value = real_value
        return value
    };

})();