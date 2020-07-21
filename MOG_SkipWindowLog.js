//===========================================================================
// MOG_SkipWindowLog.js
// Translate to Japanese : fungamemake.com
//===========================================================================

/*:
 * @plugindesc (v1.2) Desativa a janela de Log.
 * @author Moghunter
 *
 * @param Lag Time
 * @desc Definição do tempo de espera após a ação.
 * @default 10
 *
 * @param Display Start Message
 * @desc Apresentar a menssagem inicial com os nomes dos inimigos.
 * @default false
 *
 * @param Display Preemptive Message
 * @desc Apresentar a menssagem de ataque preventivo.
 * @default true
 *
 * @help
 * ===========================================================================
 * +++ MOG - Skip Window Log (v1.2) +++
 * By Moghunter
 * https://atelierrgss.wordpress.com/
 * ===========================================================================
 * Desativa a janela de Log.
 *
 * ===========================================================================
 * HISTÓRICO
 * ===========================================================================
 * v1.2 - Opção de desativar as menssagens iniciais de batalha.
 * v1.1 - Compatibilidade com MOG Flash Damage.
 *
 */

/*:ja
 * @plugindesc (v1.2) 戦闘ログウィンドウを非表示にします。
 * @author Moghunter
 *
 * @param Lag Time
 * @text 行動後のタイムアウト時間
 * @type number
 * @max 9007
 * @default 10
 *
 * @param Display Start Message
 * @text 戦闘開始メッセージの表示
 * @type boolean
 * @on 表示
 * @off 非表示
 * @default false
 *
 * @param Display Preemptive Message
 * @text 先制攻撃メッセージの表示
 * @type boolean
 * @on 表示
 * @off 非表示
 * @default true
 *
 * @help
 * 翻訳:ムノクラ
 * https://fungamemake.com/
 * https://twitter.com/munokura/
 *
 * ===========================================================================
 * +++ MOG - Skip Window Log (v1.2) +++
 * By Moghunter
 * https://atelierrgss.wordpress.com/
 * ===========================================================================
 * 戦闘ログウィンドウを非表示にします。
 *
 * ===========================================================================
 * 更新履歴
 * ===========================================================================
 * v1.2 - 戦闘開始メッセージを無効にするオプション追加
 * v1.1 - MOG Flash Damageとの互換性
 *
 */

//===========================================================================
// ** PLUGIN PARAMETERS
//===========================================================================
var Imported = Imported || {};
Imported.MOG_SkipWindowLog = true;
var Moghunter = Moghunter || {};

Moghunter.parameters = PluginManager.parameters('MOG_SkipWindowLog');
Moghunter.winLogSpeed = Number(Moghunter.parameters['Lag Time'] || 10);
Moghunter.battleStartMessage = String(Moghunter.parameters['Display Start Message'] || "false");
Moghunter.battlePreemptiveMessage = String(Moghunter.parameters['Display Preemptive Message'] || "true");
//===========================================================================
// ** Window BattleLog
//===========================================================================

//==============================
// * Refresh
//==============================
Window_BattleLog.prototype.refresh = function (text) {
    this.visible = false;
};

//==============================
// * Message Speed
//==============================
Window_BattleLog.prototype.messageSpeed = function () {
    if (Imported.MOG_FlashDamage) { if ($gameTemp._flashDamage) { return 0 } };
    return Moghunter.winLogSpeed;
};


//===========================================================================
// ** Battle Manager
//===========================================================================

//==============================
// * Refresh
//==============================
BattleManager.displayStartMessages = function () {
    if (String(Moghunter.battleStartMessage) === "true") {
        $gameTroop.enemyNames().forEach(function (name) {
            $gameMessage.add(TextManager.emerge.format(name));
        });
    };
    if (String(Moghunter.battlePreemptiveMessage) === "true") {
        if (this._preemptive) {
            $gameMessage.add(TextManager.preemptive.format($gameParty.name()));
        } else if (this._surprise) {
            $gameMessage.add(TextManager.surprise.format($gameParty.name()));
        }
    };
};