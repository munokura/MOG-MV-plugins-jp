//============================================================================
// MOG_BattleCursor.js
// Translate to Japanese : fungamemake.com
//============================================================================

/*:ja
 * @plugindesc (v2.4.4 *) 対象選択にカーソルを追加します。
 * @author Moghunter
 *
 * @param X-Axis
 * @text カーソルのX軸位置
 * @desc 正:右 / 負:左
 * @type number
 * @min -9007
 * @max 9007
 * @default 0
 *
 * @param Y-Axis
 * @text カーソルのY軸位置
 * @desc 正:下 / 負:上
 * @type number
 * @min -9007
 * @max 9007
 * @default 0
 *
 * @param Name Visible
 * @text 対象の名前表示の有効化
 * @type boolean
 * @on 有効
 * @off 無効
 * @default true
 *
 * @param Name X-Axis
 * @text 名前のX軸位置
 * @desc 正:右 / 負:左
 * @type number
 * @min -9007
 * @max 9007
 * @default 0
 *
 * @param Name Y-Axis
 * @text 名前のY軸位置
 * @desc 正:下 / 負:上
 * @type number
 * @min -9007
 * @max 9007
 * @default 0
 *
 * @param Font Size
 * @text 名前のフォントサイズ
 * @type number
 * @max 9007
 * @default 18
 *
 * @param Float Effect
 * @text カーソルのフロートエフェクト有効化
 * @type boolean
 * @on 有効
 * @off 無効
 * @default true
 *
 * @param Sort X-Axis
 * @text 敵の順番基準をX軸に有効化(要パッチ)
 * @type boolean
 * @on 有効
 * @off 無効
 * @desc MOG Battle Cursor Fix Sort (トリアコンタン様作)が必要です。
 * @default true
 *
 * @param Window Visible
 * @text 対象ウィンドウ表示の有効化
 * @type boolean
 * @on 有効
 * @off 無効
 * @default false
 *
 * @param Touch Selection
 * @text クリック対象選択の有効化
 * @type boolean
 * @on 有効
 * @off 無効
 * @default true
 *
 * @param  Help All Allies
 * @text 全味方対象での表示テキスト
 * @default 全ての仲間
 *
 * @param  Help All Enemies
 * @text 全敵対象での表示テキスト
 * @default 全ての敵
 *
 * @param Face Hud X-Axis
 * @text アクターカーソルのX軸位置
 * @desc 正:右 / 負:左
 * @type number
 * @min -9007
 * @max 9007
 * @default 0
 *
 * @param Face Hud Y-Axis
 * @text アクターカーソルのY軸位置
 * @desc 正:下 / 負:上
 * @type number
 * @min -9007
 * @max 9007
 * @default 0
 *
 * @requiredAssets img/system/BattleCursor_A
 * @requiredAssets img/system/BattleCursor_B
 * 
 * @help
 * 翻訳:ムノクラ
 * https://fungamemake.com/
 * https://twitter.com/munokura/
 *
 * ===========================================================================
 * +++ MOG - Battle Cursor (v2.4.4) +++
 * By Moghunter
 * https://atelierrgss.wordpress.com/
 * ===========================================================================
 * 対象選択にカーソルを追加します。
 *
 * カーソルの画像が必要です。
 * 下記フォルダに保存してください。
 * /img/system/
 *
 * BattleCursor_A.png
 * BattleCursor_B.png
 *
 * ===========================================================================
 * 特定の敵に対してカーソル位置を調整したい場合、
 * 下記のメモタグを敵のメモ欄に記入して下さい。
 *
 * Arrow Offset: X:Y
 *
 * 例
 *
 * Arrow Offset: 25:30
 *
 * ===========================================================================
 * - パラメータ「Sort X-Axis(敵の順番基準をX軸に有効化)」が機能しない問題
 * ===========================================================================
 *
 * 本プラグインにはバグがあり、これを修正するパッチプラグインがあります。
 * 下記よりダウンロードし、
 * プラグイン管理でこのプラグインの下側に配置してください。
 *
 * https://raw.githubusercontent.com/triacontane/RPGMakerMV/master/MOG_BattleCursorFixSort.js
 *
 * ===========================================================================
 * - 更新履歴 (version 2.4.4)
 * ===========================================================================
 * (BUG FIX) - アイテムでのクリック対象選択のバグ修正
 *             by トリアコンタン氏
 * (NEW) - デプロイメント時に必要画像が削除されないように@requiredAssetsを追加
 * (NEW) - アクターのカーソル位置を調整できるパラメータを追加
 *         by トリアコンタン氏
 * (BUG FIX) - クリック対象選択が動作しないバグ修正
 *             by 奏ねこま氏,トリアコンタン氏
 * (NEW) - RPG Maker MV 1.5以降のバージョン用のプラグインパラメータ更新
 * (NEW) - Frontal Battle Camera プラグインとの互換性
 * (BUG FIX) - バトラーのインデックスを整理するバグ修正
 *
 */

/*:
* @plugindesc (v2.4.4 *)Adiciona flechas de indicação nos alvos selecionados.
* @author Moghunter
*
* @param X-Axis
* @desc Definição X-axis do cursor.
* @default 0
*
* @param Y-Axis
* @desc Definição Y-axis do cursor.
* @default 0
*
* @param Name Visible
* @desc Apresentar o nome do alvo.
* @type boolean
* @default true
*
* @param Name X-Axis
* @desc Definição X-axis do nome.
* @default 0
*
* @param Name Y-Axis
* @desc Definição Y-axis do nome.
* @default 0
*
* @param Font Size
* @desc Definição Y-axis do nome.
* @type number
* @default 18
*
* @param Float Effect
* @desc Ativar o efeito flutuar no cursor.
* @type boolean
* @default true
*
* @param Sort X-Axis
* @desc Ordenar a ordem dos inimigos baseado no X-axis.
* @type boolean
* @default true
*
* @param Window Visible
* @desc Apresentar a janela dos alvos.
* @type boolean
* @default false
*
* @param Touch Selection
* @desc Selecionar os alvos ao "clicar" nos alvos.
* @type boolean
* @default true
*
* @param  Help All Allies
* @desc Definição do texto no modo todos os alvos.
* @default All Allies
*
* @param  Help All Enemies
* @desc Definição do texto no modo todos os alvos.
* @default All Enemies
*
* @param Face Hud X-Axis
* @desc Posição do eixo X do cursor do ator
* @default 0
*
* @param Face Hud Y-Axis
* @desc Posição do eixo Y do cursor do ator
* @default 0
*
* @requiredAssets img/system/BattleCursor_A
* @requiredAssets img/system/BattleCursor_B
* 
*
* @help
* ===========================================================================
* +++ MOG - Battle Cursor (v2.4.4) +++
* By Moghunter
* https://atelierrgss.wordpress.com/
* ===========================================================================
* Adiciona flechas de indicação nos alvos selecionados.
*
* ===========================================================================
* As imagens dos cursores deverão ser gravados na pasta /img/system/
*
* BattleCursor_A.png
* BattleCursor_B.png
*
* ===========================================================================
* Se desejar ajustar a posição do cursor baseado no inimigo, coloque este
* comentário na caixa de notas do inimigo.
*
* Arrow Offset: X:Y
*
* Exemplo
*
* Arrow Offset: 25:30
*
* ===========================================================================
* - WHAT'S  NEW (version 2.4.4)
* ===========================================================================
* (NEW) - Adicionado parâmetro para ajustar a posição do cursor do ator.
*         by triacontane
* (BUG FIX) - Corrigido o erro em que a seleção de destino de cliques não
*             funciona. by Otobuki Nekoma, triacontane.
* (NEW) - Reformulação dos plugins Parameters para a versão do
*         RPG Maker MV 1.5+
* (NEW) - Compatibilidade com Frontal Battle Camera plugin.
* (BUG FIX) - Correção do bug de desorganizar as Indexs do battlers.
*
*/

//============================================================================
// MOG_BattleCursor.js
// Translate to Japanese : fungamemake.com
//============================================================================

/*:
 * @plugindesc (v2.4.4 *)Adiciona flechas de indicação nos alvos selecionados.
 * @author Moghunter
 *
 * @param X-Axis
 * @desc Definição X-axis do cursor.
 * @default 0
 *
 * @param Y-Axis
 * @desc Definição Y-axis do cursor.
 * @default 0
 *
 * @param Name Visible
 * @desc Apresentar o nome do alvo.
 * @type boolean
 * @default true
 *
 * @param Name X-Axis
 * @desc Definição X-axis do nome.
 * @default 0
 *
 * @param Name Y-Axis
 * @desc Definição Y-axis do nome.
 * @default 0
 *
 * @param Font Size
 * @desc Definição Y-axis do nome.
 * @type number
 * @default 18
 *
 * @param Float Effect
 * @desc Ativar o efeito flutuar no cursor.
 * @type boolean
 * @default true
 *
 * @param Sort X-Axis
 * @desc Ordenar a ordem dos inimigos baseado no X-axis.
 * @type boolean
 * @default true
 *
 * @param Window Visible
 * @desc Apresentar a janela dos alvos.
 * @type boolean
 * @default false
 *
 * @param Touch Selection
 * @desc Selecionar os alvos ao "clicar" nos alvos.
 * @type boolean
 * @default true
 *
 * @param  Help All Allies
 * @desc Definição do texto no modo todos os alvos.
 * @default All Allies
 *
 * @param  Help All Enemies
 * @desc Definição do texto no modo todos os alvos.
 * @default All Enemies
 *
 * @param Face Hud X-Axis
 * @desc Posição do eixo X do cursor do ator
 * @default 0
 *
 * @param Face Hud Y-Axis
 * @desc Posição do eixo Y do cursor do ator
 * @default 0
 *
 *
 * @requiredAssets img/system/BattleCursor_A
 * @requiredAssets img/system/BattleCursor_B
 * 
 * @help
 * ===========================================================================
 * +++ MOG - Battle Cursor (v2.4.4) +++
 * By Moghunter
 * https://atelierrgss.wordpress.com/
 * ===========================================================================
 * Adiciona flechas de indicação nos alvos selecionados.
 *
 * ===========================================================================
 * As imagens dos cursores deverão ser gravados na pasta /img/system/
 *
 * BattleCursor_A.png
 * BattleCursor_B.png
 *
 * ===========================================================================
 * Se desejar ajustar a posição do cursor baseado no inimigo, coloque este
 * comentário na caixa de notas do inimigo.
 *
 * Arrow Offset: X:Y
 *
 * Exemplo
 *
 * Arrow Offset: 25:30
 *
 * ===========================================================================
 * - WHAT'S  NEW (version 2.4.4)
 * ===========================================================================
 * (NEW) - Adicionado parâmetro para ajustar a posição do cursor do ator.
 *         by triacontane
 * (BUG FIX) - Corrigido o erro em que a seleção de destino de cliques não
 *             funciona. by Otobuki Nekoma, triacontane.
 * (NEW) - Reformulação dos plugins Parameters para a versão do
 *         RPG Maker MV 1.5+
 * (NEW) - Compatibilidade com Frontal Battle Camera plugin.
 * (BUG FIX) - Correção do bug de desorganizar as Indexs do battlers.
 *
 */


//============================================================================
// ** PLUGIN PARAMETERS
//============================================================================
var Imported = Imported || {};
Imported.MOG_BattleCursor = true;
var Moghunter = Moghunter || {};

Moghunter.parameters = PluginManager.parameters('MOG_BattleCursor');
Moghunter.bcursor_x = Number(Moghunter.parameters['X-Axis'] || 0);
Moghunter.bcursor_y = Number(Moghunter.parameters['Y-Axis'] || 0);
Moghunter.bcursor_float = String(Moghunter.parameters['Float Effect'] || "true");
Moghunter.bcursor_name_visible = String(Moghunter.parameters['Name Visible'] || "true");
Moghunter.bcursor_name_x = Number(Moghunter.parameters['Name X-Axis'] || 0);
Moghunter.bcursor_name_y = Number(Moghunter.parameters['Name Y-Axis'] || 0);
Moghunter.bcursor_fontSize = Number(Moghunter.parameters['Font Size'] || 18);
Moghunter.bcursor_sort_x = String(Moghunter.parameters['Sort X-Axis'] || "true");
Moghunter.bcursor_window = String(Moghunter.parameters['Window Visible'] || "false");
Moghunter.bcursor_touch_selection = String(Moghunter.parameters['Touch Selection'] || "true");
Moghunter.bcursor_helpAllAllies = String(Moghunter.parameters['Help All Allies'] || "All Allies");
Moghunter.bcursor_helpAllEnemies = String(Moghunter.parameters['Help All Enemies'] || "All Enemies");

Moghunter.actorCursor_x = Number(Moghunter.parameters['Face Hud X-Axis'] || 0);
Moghunter.actorCursor_y = Number(Moghunter.parameters['Face Hud Y-Axis'] || 0);

//============================================================================
// ** Game_Temp
//============================================================================

//==============================
// * Initialize
//==============================
var _alias_mog_battlecursor_temp_initialize = Game_Temp.prototype.initialize
Game_Temp.prototype.initialize = function () {
	_alias_mog_battlecursor_temp_initialize.call(this);
	this._arrowAllTargets = [false, false];
	this._arrow_need_refresh = false;
	this._arrowTarget = [null, null];
	this._needRefreshBattleCursor = false;
};

//============================================================================
// ** Game_Interpreter
//============================================================================

//==============================
// * Command129
//==============================
var _alias_mog_battlecursor_command129 = Game_Interpreter.prototype.command129;
Game_Interpreter.prototype.command129 = function () {
	_alias_mog_battlecursor_command129.call(this);
	$gameTemp._arrow_need_refresh = true;
	return true;
};

//============================================================================
// ** Game_Action
//============================================================================

//==============================
// * NeedsSelection
//==============================
Game_Action.prototype.needsSelection = function () {
	return this.checkItemScope([1, 2, 7, 8, 9, 10]);
};

//============================================================================
// ** Game_Enemy
//============================================================================

//==============================
// * Transform
//==============================
var _alias_mog_bcursor_transform = Game_Enemy.prototype.transform
Game_Enemy.prototype.transform = function (enemyId) {
	_alias_mog_bcursor_transform.call(this, enemyId)
	this._refCursor = true;
};

//============================================================================
// ** Scene Battle
//============================================================================

//==============================
// * onSelectAction
//==============================
var _alias_mog_battle_cursor_onSelectAction = Scene_Battle.prototype.onSelectAction;
Scene_Battle.prototype.onSelectAction = function () {
	this.check_arrowforAllTagets();
	_alias_mog_battle_cursor_onSelectAction.call(this);
};

//==============================
// * Check Arrow For All Targets
//==============================
Scene_Battle.prototype.check_arrowforAllTagets = function () {
	var action = BattleManager.inputtingAction();
	if (action.isForOpponent()) {
		$gameTemp._arrowAllTargets[0] = action.isForAll();
	} else {
		$gameTemp._arrowAllTargets[1] = action.isForAll();
	};
};

//============================================================================
// ** Game Battler
//============================================================================

//==============================
// * initMembers
//==============================
var _alias_mog_btcursor_gbat_initMembers = Game_Battler.prototype.initMembers;
Game_Battler.prototype.initMembers = function () {
	_alias_mog_btcursor_gbat_initMembers.call(this);
	this._arrowVisible = false;
	this._arrowX = this.getDefaultArrowX();
	this._arrowY = this.getDefaultArrowY();
	this._refCursor = false;
	this._bhfaceSize = [-1, -1];
};

Game_Battler.prototype.getDefaultArrowX = function () {
	return 0;
};

Game_Battler.prototype.getDefaultArrowY = function () {
	return 0;
};

Game_Actor.prototype.getDefaultArrowX = function () {
	return Moghunter.actorCursor_x;
};

Game_Actor.prototype.getDefaultArrowY = function () {
	return Moghunter.actorCursor_y;
};

//==============================
// * Notetags
//==============================
Game_Battler.prototype.notetags = function () {
	if (this.isEnemy()) { return this.enemy().note.split(/[\r\n]+/) };
	if (this.isActor()) { return this.actor().note.split(/[\r\n]+/) };
};

//==============================
// * Setup
//==============================
var _alias_mog_btcursor_setup = Game_Enemy.prototype.setup;
Game_Enemy.prototype.setup = function (enemyId, x, y) {
	_alias_mog_btcursor_setup.call(this, enemyId, x, y);
	this.notetags().forEach(function (note) {
		var note_data = note.split(': ')
		if (note_data[0].toLowerCase() == "arrow offset") {
			var par = note_data[1].split(':');
			this._arrowX = Number(par[0]);
			this._arrowY = Number(par[1]);
		}
	}, this);
};


if (Imported.MOG_BattleHud) {
	//==============================
	// * Update Face
	//==============================
	var _mog_bcursor_bhud_update_face = Battle_Hud.prototype.update_face;
	Battle_Hud.prototype.update_face = function () {
		_mog_bcursor_bhud_update_face.call(this);
		if (this._battler._bhfaceSize[0] === -1 && this._face && this._face.bitmap.isReady()) {
			this._battler._bhfaceSize[0] = this._face.bitmap.width;
			this._battler._bhfaceSize[1] = this._face.bitmap.height;
		};
	};

	//==============================
	// * Refresh Face
	//==============================
	var _mog_bcursor_bhud_refresh_face = Battle_Hud.prototype.refresh_face;
	Battle_Hud.prototype.refresh_face = function () {
		_mog_bcursor_bhud_refresh_face.call(this);
		this._battler._bhfaceSize[0] = this._face.bitmap.width / 5;
		this._battler._bhfaceSize[1] = this._face.bitmap.height;
	};
};

//============================================================================
// ** Scene Base
//============================================================================

//==============================
// ** create Hud Field
//==============================
Scene_Base.prototype.createHudField = function () {
	this._hudField = new Sprite();
	this._hudField.z = 10;
	this.addChild(this._hudField);
};

//==============================
// ** sort MZ
//==============================
Scene_Base.prototype.sortMz = function () {
	this._hudField.children.sort(function (a, b) { return a.mz - b.mz });
};

//============================================================================
// ** Scene Battle
//============================================================================

//==============================
// * create Spriteset
//==============================
// var _mog_bcursor_sbattle_createSpriteset = Scene_Battle.prototype.createSpriteset;
// Scene_Battle.prototype.createSpriteset = function () {
// 	_mog_bcursor_sbattle_createSpriteset.call(this);
// 	if (!this._hudField) { this.createHudField() };
// };

//==============================
// * create Display Objects
//==============================
var _mog_bcursor_sbat_createDisplayObjects = Scene_Battle.prototype.createDisplayObjects;
Scene_Battle.prototype.createDisplayObjects = function () {
	_mog_bcursor_sbat_createDisplayObjects.call(this);
	this.createBattleCursor();
	this.sortMz();
};

//==============================
// * create Battle Cursor
//==============================
Scene_Battle.prototype.createBattleCursor = function () {
	this._battleCursor = new BattleCursor(this._spriteset, this._actorSprites);
	this._battleCursor.mz = 120;
	this._hudField.addChild(this._battleCursor);
	this._spriteset.updateActors();
};

//==============================
// * remove Battle Cursor
//==============================
Scene_Battle.prototype.removeBattleCursor = function () {
	this._hudField.removeChild(this._battleCursor);
};

//==============================
// * Update
//==============================
var _mog_batCursor_sBat_update = Scene_Battle.prototype.update;
Scene_Battle.prototype.update = function () {
	_mog_batCursor_sBat_update.call(this);
	this.updateBattleCursorSB();
};

//==============================
// * update Battle Cursor SB
//==============================
Scene_Battle.prototype.updateBattleCursorSB = function () {
	if ($gameTemp._needRefreshBattleCursor) { this.refreshBattlerCursor() };
};

//==============================
// * refresh Battle Cursor
//==============================
Scene_Battle.prototype.refreshBattlerCursor = function () {
	$gameTemp._needRefreshBattleCursor = false;
	this.removeBattleCursor();
	this.createBattleCursor();
	this.sortMz();
};

//============================================================================
// * Battle Cursor
//============================================================================
function BattleCursor() {
	this.initialize.apply(this, arguments);
};

BattleCursor.prototype = Object.create(Sprite.prototype);
BattleCursor.prototype.constructor = BattleCursor;

//==============================
// * Initialize
//==============================
BattleCursor.prototype.initialize = function (spriteset, actorsprites) {
	Sprite.prototype.initialize.call(this);
	this.setup(spriteset, actorsprites);
	this.createSprites();
};

//==============================
// * Setup
//==============================
BattleCursor.prototype.setup = function (spriteset, actorsprites) {
	this._spriteset = BattleManager._spriteset;
	this._actorSprites = actorsprites;
	$gameTemp._arrowAllTargets = [false, false];
	this._actor_arrow = [];
	this._actor_name = [];
	this._enemy_arrow = [];
	this._enemy_name = [];
	this._arrow_pos = [[], []];
	this._arrow_s = [0, 0, 0, 0, 0];
	this._arrow_float_effect = false;
	this._arrow_name_visible = false;
	this._touch_selection = false;
	if (String(Moghunter.bcursor_touch_selection) === "true") { this._touch_selection = true };
	if (String(Moghunter.bcursor_name_visible) === "true") { this._arrow_name_visible = true };
	if (String(Moghunter.bcursor_float) === "true") { this._arrow_float_effect = true };
};

//==============================
// * Field
//==============================
BattleCursor.prototype.field = function () {
	return this._spriteset._battleField;
};

//==============================
// * Enemies
//==============================
BattleCursor.prototype.enemies = function () {
	return this._spriteset._enemySprites;
};

//==============================
// * Actors
//==============================
BattleCursor.prototype.actors = function () {
	if (this._actorSprites) { return this._actorSprites };
	return this._spriteset._actorSprites;
};

//==============================
// * Create Sprites
//==============================
BattleCursor.prototype.createSprites = function () {
	this.createArrowActor();
	this.createArrowEnemy();
};

//==============================
// * Create Arrow Actor
//==============================
BattleCursor.prototype.createArrowActor = function () {
	this._actor_arrowVisible = (!$gameSystem.isSideView() && !Imported.MOG_BattleHud) ? false : true;
	for (var i = 0; i < $gameParty.maxBattleMembers(); i++) {
		this._actor_arrow[i] = new Sprite(ImageManager.loadSystem("BattleCursor_A"));
		this._actor_arrow[i].anchor.x = 0.5;
		this._actor_arrow[i].anchor.y = 0.5;
		this._actor_arrow[i].opacity = 0;
		this._arrow_pos[1] = [0, 0];
		this.addChild(this._actor_arrow[i]);
		if (this._arrow_name_visible) {
			this._actor_name[i] = new Sprite(new Bitmap(120, 32));
			this._actor_name[i].anchor.x = 0.5;
			this._actor_name[i].anchor.y = 0.5;
			this._actor_name[i].opacity = 100;
			this._actor_name[i].bitmap.fontSize = Moghunter.bcursor_fontSize;
			this.addChild(this._actor_name[i]);
		};
	};
};

//==============================
// * Create Arrow Enemy
//==============================
BattleCursor.prototype.createArrowEnemy = function () {
	for (var i = 0; i < this.enemies().length; i++) {
		this._enemy_arrow[i] = new Sprite(ImageManager.loadSystem("BattleCursor_B"));
		this._enemy_arrow[i].anchor.x = 0.5;
		this._enemy_arrow[i].anchor.y = 0.5;
		this._enemy_arrow[i].opacity = 0;
		this._arrow_pos[0] = [0, 0];
		this.addChild(this._enemy_arrow[i]);
		if (this._arrow_name_visible) {
			this._enemy_name[i] = new Sprite(new Bitmap(120, 32));
			this._enemy_name[i].anchor.x = 0.5;
			this._enemy_name[i].anchor.y = 0.5;
			this._enemy_name[i].opacity = 100;
			this._enemy_name[i].bitmap.fontSize = Moghunter.bcursor_fontSize;
			this.addChild(this._enemy_name[i]);
		};
	};
};

//==============================
// * Refresh Arrow Name
//==============================
BattleCursor.prototype.refresh_arrow_name = function (battler, sprite) {
	battler._refCursor = false;
	sprite.opacity = 255;
	sprite.bitmap.clear();
	sprite.bitmap.drawText(battler.name(), 0, 0, 120, 32, "center");
};

//==============================
// * Update Battle Cursor
//==============================
BattleCursor.prototype.update = function () {
	Sprite.prototype.update.call(this);
	if (Imported.MOG_ConsecutiveBattles && $gameSystem._consBatime > 0) { return };
	this.x = this.field().x;
	this.y = this.field().y;
	for (var i = 0; i < this.enemies().length; i++) {
		var battler = this.enemies()[i]._battler;
		var sprite = this._enemy_arrow[i];
		this.update_arrow(sprite, this.enemies()[i], battler, 0);
		if (this._arrow_name_visible) { this.update_arrow_name(this._enemy_name[i], sprite, battler, 0) };
	};
	if (this._actor_arrowVisible) {
		for (var i = 0; i < $gameParty.maxBattleMembers(); i++) {
			var battler = this.actors()[i]._battler;
			var sprite = this._actor_arrow[i];
			this.update_arrow(sprite, this.actors()[i], battler, 1);
			if (this._arrow_name_visible) { this.update_arrow_name(this._actor_name[i], sprite, battler, 1) };
		};
	};
	if (this._arrow_float_effect) { this.update_arrow_slide() };
	if (this._touch_selection) { this.updateTouchSelection() };
	$gameTemp._arrow_need_refresh = false;
	this.updateVisible();
};

//==============================
// * Is Visible
//==============================
BattleCursor.prototype.isVisible = function () {
	if (Imported.MOG_ATB) {
		if ($gameSystem._atbEventPhase[3]) { return false };
	}
	return true;
};

//==============================
// * Update Visible
//==============================
BattleCursor.prototype.updateVisible = function () {
	this.visible = this.isVisible();
};

//==============================
// * Update Touch Selection (fix by トリアコンタン)
//==============================
BattleCursor.prototype.updateTouchSelection = function () {
	if (TouchInput.isTriggered() && !SceneManager._scene._actorCommandWindow.active &&
		!SceneManager._scene._skillWindow.active && !SceneManager._scene._itemWindow.active) {
		for (var i = 0; i < this.enemies().length; i++) {
			if (this.isTouchOnTarget(this.enemies()[i], this.enemies()[i]._battler, 0)) {
				$gameTemp._arrowTarget[0] = this.enemies()[i]._battler
			};
		};
		for (var i = 0; i < this.actors().length; i++) {
			if (this.isTouchOnTarget(this.actors()[i], this.actors()[i]._battler, 1)) { $gameTemp._arrowTarget[1] = this.actors()[i]._battler };
			if (Imported.MOG_BattleHud && this.isTouchOnTargetFace(this.actors()[i], this.actors()[i]._battler, 1)) { $gameTemp._arrowTarget[1] = this.actors()[i]._battler };
		};
	};
};

// BattleCursor.prototype.updateTouchSelection = function () {
// 	if (TouchInput.isTriggered()) {
// 		for (var i = 0; i < this.enemies().length; i++) {
// 			if (this.isTouchOnTarget(this.enemies()[i], this.enemies()[i]._battler, 0)) { $gameTemp._arrowTarget[0] = this.enemies()[i]._battler };
// 		};
// 		for (var i = 0; i < this.actors().length; i++) {
// 			if (this.isTouchOnTarget(this.actors()[i], this.actors()[i]._battler, 1)) { $gameTemp._arrowTarget[1] = this.actors()[i]._battler };
// 			if (Imported.MOG_BattleHud && this.isTouchOnTargetFace(this.actors()[i], this.actors()[i]._battler, 1)) { $gameTemp._arrowTarget[1] = this.actors()[i]._battler };
// 		};
// 	};
// };

//==============================
// * is Touch On Target Face
//==============================
BattleCursor.prototype.isTouchOnTargetFace = function (sprite, battler, type) {
	if (!battler) { return false };
	if (type === 0 && !battler.isAlive()) { return false };
	if (type === 0 && battler.isDead()) { return false };
	if (battler._bhfaceSize[0] < 0) { return };
	var cw = battler._bhfaceSize[0] / 2;
	var ch = battler._bhfaceSize[1] / 2;
	if (sprite) {
		if (TouchInput.x < this.field().x + sprite.x - cw) { return false };
		if (TouchInput.x > this.field().x + sprite.x + cw) { return false };
		if (TouchInput.y > this.field().y + sprite.y + ch) { return false };
		if (TouchInput.y < this.field().y + sprite.y - ch) { return false };
		return true;
	};
	return false;
};

//==============================
// * Is TouchOnTarget
//==============================
BattleCursor.prototype.isTouchOnTarget = function (sprite, battler, type) {
	if (!battler) { return false };
	if (Imported.MOG_BattleCameraFrontal) { return false };
	if (type === 0 && !battler.isAlive()) { return false };
	if (type === 0 && battler.isDead()) { return false };
	if (sprite.bitmap) {
		var sw = sprite.bitmap.width;
		if (battler.isEnemy() && Imported.MOG_EnemyPoses) {
			if (battler._batPoses[0]) { sw = Math.floor(sw / 4) };
		};
		if (TouchInput.x < this.field().x + sprite.x - (sw / 2)) { return false };
		if (TouchInput.x > this.field().x + sprite.x + (sw / 2)) { return false };
		if (TouchInput.y > this.field().y + sprite.y) { return false };
		if (TouchInput.y < this.field().y + sprite.y - (sprite.bitmap.height)) { return false };
		return true;
	} else if (sprite._mainSprite) {
		if (TouchInput.x < this.field().x + sprite.x - (sprite._mainSprite.width / 2)) { return false };
		if (TouchInput.x > this.field().x + sprite.x + (sprite._mainSprite.width / 2)) { return false };
		if (TouchInput.y > this.field().y + sprite.y) { return false };
		if (TouchInput.y < this.field().y + sprite.y - (sprite._mainSprite.height)) { return false };
		return true;
	};
	return false;
};

//==============================
// * Update Arrow Name
//==============================
BattleCursor.prototype.update_arrow_name = function (sprite, target, battler, type) {
	if (!battler) { return };
	if (sprite.opacity === 100 || $gameTemp._arrow_need_refresh) { this.refresh_arrow_name(battler, sprite) };
	if (battler._refCursor) { this.refresh_arrow_name(battler, sprite) };
	sprite.x = target.x + Moghunter.bcursor_name_x;
	sprite.y = target.y - target.height + Moghunter.bcursor_name_y;
	sprite.visible = target.visible;
	sprite.opacity = target.opacity;
};

//==============================
// * Update Arrow
//==============================
BattleCursor.prototype.update_arrow = function (sprite, target, battler, type) {
	if (!this.isArrowVisible(sprite, target, battler, type)) { this.hide_arrow(sprite, type); return };
	sprite.opacity = 255;
	sprite.visible = true;
	if (type === 0) { var yf = target.height / 2 } else {
		if (target._mainSprite) { var yf = target._mainSprite.height } else { var yf = 0 };
	};
	this._arrow_pos[type] = [
		target.x + Moghunter.bcursor_x + battler._arrowX,
		target.y - yf + this._arrow_s[2] + Moghunter.bcursor_y + battler._arrowY
	];
	if (Imported.MOG_BattleCameraFrontal && $gameSystem._bcam.enable) {
		this.updateArrowCamera(sprite, target, battler, type);
	} else {
		this.updateArrowNormal(sprite, target, battler, type);
	};
};

//==============================
// * Update Arrow
//==============================
BattleCursor.prototype.updateArrowCamera = function (sprite, target, battler, type) {
	if (battler.isEnemy()) {
		this.updateArrowCameraEnemy(sprite, target, battler, type);
	} else {
		this.updateArrowCameraActor(sprite, target, battler, type);
	};
};

//==============================
// * Update Arrow Actor
//==============================
BattleCursor.prototype.updateArrowCameraActor = function (sprite, target, battler, type) {
	if (Imported.MOG_BattleHud && !$gameSystem.isSideView()) {
		this.x = 0;
		this.y = 0;
		var x = target.x + battler._arrowX;
		var y = target.y + this._arrow_s[2] + battler._arrowY;
		if (this.arrow_all_targets(type)) {
			sprite.x = x;
			sprite.y = y;
		} else {
			sprite.x = this.sprite_move_to(sprite.x, x, 10);
			sprite.y = this.sprite_move_to(sprite.y, y, 10);
		};
	} else {
		var perc = ((($gameTemp._bcam.scale / 1.00) * 100) - 100);
		var hr = this.arrow_all_targets(type) ? 150 : 150 - (220 * perc / 100);
		var h = (hr / 2) + (hr / 2) * perc / 100;
		var x = target.x + (target.x * perc / 100);;
		var y = target.y - h + (target.y * perc / 100) + this._arrow_s[2];
		sprite.x = x
		sprite.y = y;
	};

};

//==============================
// * Update Arrow Enemy
//==============================
BattleCursor.prototype.updateArrowCameraEnemy = function (sprite, target, battler, type) {
	var perc = ((($gameTemp._bcam.scale / 1.00) * 100) - 100);
	var h1 = target.height / 2;
	var h2 = h1 + (h1 * perc / 100);
	var y2 = target.y * perc / 100;
	var x = target.x + (target.x * perc / 100) + sprite.width / 4;
	var y = target.y + y2 - h2;
	sprite.x = x + Moghunter.bcursor_x;
	sprite.y = y + Moghunter.bcursor_y;
};

//==============================
// * Update Arrow Normal
//==============================
BattleCursor.prototype.updateArrowNormal = function (sprite, target, battler, type) {
	if (this.arrow_all_targets(type)) {
		sprite.x = this._arrow_pos[type][0];
		sprite.y = this._arrow_pos[type][1];
	} else {
		sprite.x = this.sprite_move_to(sprite.x, this._arrow_pos[type][0], 10);
		sprite.y = this.sprite_move_to(sprite.y, this._arrow_pos[type][1], 10);
	};
};

//==============================
// * Arrow All Targets
//==============================
BattleCursor.prototype.arrow_all_targets = function (type) {
	return $gameTemp._arrowAllTargets[type];
};

//==============================
// * Hide Arrow
//==============================
BattleCursor.prototype.hide_arrow = function (sprite, type) {
	sprite.visible = false;
	sprite.x = this._arrow_pos[type][0];
	sprite.y = this._arrow_pos[type][1];
};

//==============================
// * Update Cursor Actor
//==============================
BattleCursor.prototype.isArrowVisible = function (sprite, target, battler, type) {
	if (!battler) { return false };
	if (type === 0 && !battler.isAlive()) { return false };
	if (type === 0 && battler.isDead()) { return false };
	if (this.arrow_all_targets(type)) { return true };
	if (!battler._arrowVisible) { return false };
	return true
};

//==============================
// * Sprite Move To
//==============================
BattleCursor.prototype.sprite_move_to = function (value, real_value, speed) {
	if (value == real_value) { return value };
	var dnspeed = 5 + (Math.abs(value - real_value) / speed);
	if (value > real_value) {
		value -= dnspeed;
		if (value < real_value) { value = real_value };
	}
	else if (value < real_value) {
		value += dnspeed;
		if (value > real_value) { value = real_value };
	};
	return Math.floor(value);
};

//==============================
// * Update Arrow Slide
//==============================
BattleCursor.prototype.update_arrow_slide = function () {
	this._arrow_s[4] += 1;
	if (this._arrow_s[4] < 2) { return };
	this._arrow_s[4] = 0;
	this._arrow_s[3] += 1;
	if (this._arrow_s[3] < 10) { this._arrow_s[2] += 1 }
	else if (this._arrow_s[3] < 20) { this._arrow_s[2] -= 1 }
	else { this._arrow_s[2] = 0; this._arrow_s[3] = 0 };
};

//============================================================================
// ** Sprite Enemy
//============================================================================

//==============================
// * Set Battler
//==============================
var _mog_bcursor_comp_sprenemy_setBattler = Sprite_Enemy.prototype.setBattler;
Sprite_Enemy.prototype.setBattler = function (battler) {
	_mog_bcursor_comp_sprenemy_setBattler.call(this, battler)
	if (this._visualSelectWindow) { this._visualSelectWindow.visible = false };
};

//============================================================================
// ** Game Party
//============================================================================

//==============================
// * Select
//==============================
var _mog_bat_cursor_gparty_select = Game_Party.prototype.select;
Game_Party.prototype.select = function (activeMember) {
	if ($gameTemp._arrowAllTargets[1]) {
		this.members().forEach(function (member) {
			member.select();
		});
		return;
	};
	_mog_bat_cursor_gparty_select.call(this, activeMember);
};

//============================================================================
// ** Window Help
//============================================================================

//==============================
// * Refresh
//==============================
var _mog_bcursor_whelp_refresh = Window_Help.prototype.drawText;
Window_Help.prototype.drawText = function (text, x, y, maxWidth, align) {
	if ($gameTemp._arrowAllTargets[0]) { text = String(Moghunter.bcursor_helpAllEnemies) };
	if ($gameTemp._arrowAllTargets[1]) { text = String(Moghunter.bcursor_helpAllAllies) };
	_mog_bcursor_whelp_refresh.call(this, text, x, y, maxWidth, align);
};

//============================================================================
// ** Window BattleActor
//============================================================================

//==============================
// * Initialize Actor
//==============================
var _alias_mog_bcursor_wbca_initialize = Window_BattleActor.prototype.initialize;
Window_BattleActor.prototype.initialize = function (x, y) {
	_alias_mog_bcursor_wbca_initialize.call(this, x, y)
	this._window_mode = false;
	if (String(Moghunter.bcursor_window) === "true" || (!$gameSystem.isSideView() && !Imported.MOG_BattleHud)) { this._window_mode = true };
};

//==============================
// * Select Actor
//==============================
var _mog_alias_batcursor_wba_select = Window_BattleActor.prototype.select;
Window_BattleActor.prototype.select = function (index) {
	_mog_alias_batcursor_wba_select.call(this, index);
	if (this.actor()) { this.enableArrow(index) };
};

//==============================
// * Enable Arrow Actor
//==============================
Window_BattleActor.prototype.enableArrow = function (index) {
	this.arrow_clear();
	this.actor()._arrowVisible = true;
	this.setCursorAll($gameTemp._arrowAllTargets[1]);
};

//==============================
// * Arrow Clear Actor
//==============================
Window_BattleActor.prototype.arrow_clear = function (index) {
	for (var i = 0; i < $gameParty.members().length; i++) {
		$gameParty.members()[i]._arrowVisible = false;
	};
};

//==============================
// * Hide Actor
//==============================
var _alias_mog_wba_hide = Window_BattleActor.prototype.hide;
Window_BattleActor.prototype.hide = function () {
	$gameTemp._arrowAllTargets[1] = false;
	_alias_mog_wba_hide.call(this);
	this.arrow_clear();
};

//==============================
// * Refresh Touch Selection Actor
//==============================
Window_BattleActor.prototype.refresh_touch_selection = function () {
	if (this.isCursorMovable()) {
		for (var i = 0; i < $gameParty.members().length; i++) {
			if ($gameParty.members()[i] === $gameTemp._arrowTarget[1]) {
				if (i === this._index) {
					this.processOk();
				} else {
					this._index = i;
					this.select(this._index);
				};
			};
		};
	};
	$gameTemp._arrowTarget[1] = null;
};

//==============================
// * Process Cursor Move Actor
//==============================
var _alias_mog_bcursor_wbac_processCursorMove = Window_BattleActor.prototype.processCursorMove;
Window_BattleActor.prototype.processCursorMove = function () {
	if (!this._window_mode && this.isCursorMovable()) {
		var lastIndex = this.index();
		if (Input.isRepeated('down')) { this.addIndex(1) };
		if (Input.isRepeated('up')) { this.addIndex(-1) };
		if (Input.isRepeated('right')) { this.addIndex(1) };
		if (Input.isRepeated('left')) { this.addIndex(-1) };
		if (this.index() !== lastIndex) { SoundManager.playCursor(); };
		return;
	};
	_alias_mog_bcursor_wbac_processCursorMove.call(this);
};

//==============================
// * Add Index Actor
//==============================
Window_BattleActor.prototype.addIndex = function (value) {
	this._index += value;
	if (this._index > (this.maxItems() - 1)) { this._index = 0 };
	if (this._index < 0) { this._index = (this.maxItems() - 1) };
	this.select(this._index);
};

//==============================
// * Update Actor
//==============================
var _alias_mog_bcursor_wactor_update = Window_BattleActor.prototype.update;
Window_BattleActor.prototype.update = function () {
	_alias_mog_bcursor_wactor_update.call(this);
	if (!this._window_mode) { this.visible = false };
	if ($gameTemp._arrowTarget[1] != null) { this.refresh_touch_selection() };
};

//==============================
// * Process Touch Actor
//==============================
var _alias_mog_bcursor_wactor_processTouch = Window_BattleActor.prototype.processTouch;
Window_BattleActor.prototype.processTouch = function () {
	if (!this._window_mode && this.active) {
		if (TouchInput.isTriggered() && $gameTemp._arrowAllTargets[1]) { this.processOk(); };
		if (Input.isTriggered("ok") && $gameTemp._arrowAllTargets[1]) { this.processOk(); };
		if (TouchInput.isCancelled()) { this.processCancel() };
		return;
	};
	_alias_mog_bcursor_wactor_processTouch.call(this);
};

//============================================================================
// ** Game Troop
//============================================================================

//==============================
// * Select Troop
//==============================
var _mog_bat_cursor_gtroop_select = Game_Troop.prototype.select;
Game_Troop.prototype.select = function (activeMember) {
	if ($gameTemp._arrowAllTargets[0]) {
		this.members().forEach(function (member) {
			if (!member.isDead() && !member.isHidden()) { member.select() };
		});
		return;
	};
	_mog_bat_cursor_gtroop_select.call(this, activeMember);
};

//============================================================================
// ** Window BattleEnemy
//============================================================================

//==============================
// * Initialize Enemy
//==============================
var _alias_mog_bcursor_wbeny_initialize = Window_BattleEnemy.prototype.initialize;
Window_BattleEnemy.prototype.initialize = function (x, y) {
	_alias_mog_bcursor_wbeny_initialize.call(this, x, y)
	this._window_mode = false;
	if (String(Moghunter.bcursor_window) === "true") { this._window_mode = true };
};

//==============================
// * Select Enemy
//==============================
var _mog_alias_batcursor_wbe_select = Window_BattleEnemy.prototype.select;
Window_BattleEnemy.prototype.select = function (index) {
	_mog_alias_batcursor_wbe_select.call(this, index)
	if (this.enemy()) { this.enableArrow(index) };
};

//==============================
// * refresh Enemy
//==============================
var _mog_batCursor_wbatEnemy_refresh = Window_BattleEnemy.prototype.refresh;
Window_BattleEnemy.prototype.refresh = function () {
	_mog_batCursor_wbatEnemy_refresh.call(this);
	if (this._enemies) { this._enemies.sort(function (a, b) { return a._screenX - b._screenX }) };
};

//==============================
// * Enable Arrow Enemy
//==============================
Window_BattleEnemy.prototype.enableArrow = function (index) {
	this.arrow_clear();
	this.enemy()._arrowVisible = true;
	this.setCursorAll($gameTemp._arrowAllTargets[0]);
};

//==============================
// * Arrow Clear Enemy
//==============================
Window_BattleEnemy.prototype.arrow_clear = function (index) {
	for (var i = 0; i < $gameTroop.members().length; i++) {
		$gameTroop.members()[i]._arrowVisible = false;
	};
};

//==============================
// * Hide Enemy
//==============================
var _alias_mog_wbe_hide = Window_BattleEnemy.prototype.hide;
Window_BattleEnemy.prototype.hide = function () {
	$gameTemp._arrowAllTargets[0] = false;
	_alias_mog_wbe_hide.call(this);
	this.arrow_clear();
};

//==============================
// * Add Index Enemy
//==============================
Window_BattleEnemy.prototype.addIndex = function (value) {
	this._index += value;
	if (this._index > (this.maxItems() - 1)) { this._index = 0 };
	if (this._index < 0) { this._index = (this.maxItems() - 1) };
	this.select(this._index);
};

//==============================
// * Refresh Touch Selection Enemy
//==============================

// bug fix by Nekoma Otobuki
Window_BattleEnemy.prototype.refresh_touch_selection = function () {
	if (this.isCursorMovable()) {
		for (var i = 0; i < $gameTroop.aliveMembers().length; i++) {
			if ($gameTroop.aliveMembers()[i] === $gameTemp._arrowTarget[0]) {
				var _i = this._enemies.indexOf($gameTemp._arrowTarget[0]);
				if (_i === this._index) {
					this.processOk();
				} else {
					this._index = _i;
					this.select(this._index);
				};
			};
		};
	};
	$gameTemp._arrowTarget[0] = null;
};

// Window_BattleActor.prototype.refresh_touch_selection = function () {
// 	if (this.isCursorMovable()) {
// 		for (var i = 0; i < $gameParty.members().length; i++) {
// 			if ($gameParty.members()[i] === $gameTemp._arrowTarget[1]) {
// 				if (i === this._index) {
// 					this.processOk();
// 				} else {
// 					this._index = i;
// 					this.select(this._index);
// 				};
// 			};
// 		};
// 	};
// 	$gameTemp._arrowTarget[1] = null;
// };

//==============================
// * Process Cursor Move Enemy
//==============================
var _alias_mog_bcursor_wbeny_processCursorMove = Window_BattleEnemy.prototype.processCursorMove;
Window_BattleEnemy.prototype.processCursorMove = function () {
	if (!this._window_mode && this.isCursorMovable()) {
		var lastIndex = this.index();
		if (Input.isRepeated('down')) { this.addIndex(1) };
		if (Input.isRepeated('up')) { this.addIndex(-1) };
		if (Input.isRepeated('right')) { this.addIndex(1) };
		if (Input.isRepeated('left')) { this.addIndex(-1) };
		if (this.index() !== lastIndex) { SoundManager.playCursor(); };
		return;
	};
	_alias_mog_bcursor_wbeny_processCursorMove.call(this);
};

//==============================
// * Update Enemy
//==============================
var _alias_mog_bcursor_wenmy_update = Window_BattleEnemy.prototype.update;
Window_BattleEnemy.prototype.update = function () {
	_alias_mog_bcursor_wenmy_update.call(this);
	if (!this._window_mode) { this.visible = false };
	if ($gameTemp._arrowTarget[0] != null) { this.refresh_touch_selection() };
};

//==============================
// * Process Touch Enemy
//==============================
var _alias_mog_bcursor_wenmy_processTouch = Window_BattleEnemy.prototype.processTouch;
Window_BattleEnemy.prototype.processTouch = function () {
	if (!this._window_mode && this.active) {
		if (TouchInput.isTriggered() && $gameTemp._arrowAllTargets[0]) { this.processOk(); };
		if (Input.isTriggered("ok") && $gameTemp._arrowAllTargets[0]) { this.processOk(); };
		if (TouchInput.isCancelled()) { this.processCancel() };
		return;
	};
	_alias_mog_bcursor_wenmy_processTouch.call(this);
};
