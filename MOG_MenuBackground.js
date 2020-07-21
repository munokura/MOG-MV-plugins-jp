//===========================================================================
// MOG_MenuBackground.js
// Translate to Japanese : fungamemake.com
//===========================================================================
/*:
 * @plugindesc (v1.2) O plugin permite mudar a imagem de fundo do menu.
 * @author Moghunter
 *
 * @param Disable Scenes
 * @desc Definição das cenas que terão o efeito desativado.
 * Scene_Name1 , Scene_Name2 , Scene_Name3 ...
 * @default Scene_Test1,Scene_Test2,Scene_Test3
 *
 * @param Default FileName
 * @desc Definição do nome de arquivo.
 * @default Pic_1
 *
 * @param Unique Backgrounds
 * @desc Cada cena terá uma imagem diferente.
 * @default false
 *
 * @param Sufix FileName
 * @desc Definição do sufixo nos background únicos.
 * @default _back
 *
 * @param Window Opacity
 * @desc Definição da transparência da janela.
 * @default 30
 *
 * @param Scroll X-Axis
 * @desc Definição da velocidade de deslize na horizontal.
 * @default 0
 *
 * @param Scroll Y-Axis
 * @desc Definição da velocidade de deslize na vertical.
 * @default 0
 *
 * @help
 * ===========================================================================
 * +++ MOG - Menu Background (v1.2) +++
 * By Moghunter
 * https://atelierrgss.wordpress.com/
 * ===========================================================================
 * O plugin permite mudar a imagem de fundo do menu.
 * É possivel ativar uma imagem diferente para cada cena ou desativar a imagem
 * de fundo em cenas especificas.
 * ===========================================================================
 * As imagens do background deverão ficar na pasta /img/pictures/
 * ===========================================================================
 * No caso da opção Unique Backgrounds estiver ativada cada imagem de fundo
 * deverá seguir essa nomeação.
 *
 * SCENE_NAME + _back.png
 *
 * Exemplo.
 *
 * Scene_Menu_back.png
 * Scene_Item_back.png
 * Scene_Skill_back.png
 * etc...
 *
 * ===========================================================================
 * PLUGIN COMMAND
 * ===========================================================================
 * Para mudar a imagem de fundo durante o jogo use o comando abaixo.
 *
 * backgroundName : FILE_NAME
 *
 * ===========================================================================
 * HISTÓRICO
 * ===========================================================================
 * v1.2 - Compatibilidade com MOG_PictureGalery.
 * v1.1 - Melhoria na codificação.
 */

/*:ja
 * @plugindesc (v1.2) メニューの背景画像を変更できます。
 * @author Moghunter
 *
 * @param Default FileName
 * @text メニュー共通背景画像
 * @desc  シーン別背景画像を指定しない場合、共通に使用するファイル名。(大文字小文字を区別、拡張子なし)
 * @type file
 * @require 1
 * @dir img/pictures
 * @default Pic_1
 *
 * @param Unique Backgrounds
 * @text シーン別背景画像の有効化
 * @default false
 * @type boolean
 * @on 有効
 * @off 無効
 *
 * @param Disable Scenes
 * @text 無効化シーン
 * @desc 効果を無効にするシーンの指定。 Scene_Item, Scene_Skill, Scene_Equip, Scene_Status, Scene_Options, Scene_Save, Scene_GameEnd
 * @default Scene_Item,Scene_Skill,Scene_Equip,Scene_Status,Scene_Options,Scene_Save,Scene_GameEnd
 *
 * @param Sufix FileName
 * @text シーン別背景画像の接尾辞
 * @default _back
 *
 * @param Window Opacity
 * @text ウィンドウの透明度
 * @default 30
 *
 * @param Scroll X-Axis
 * @text X方向移動速度
 * @desc 正:左 / 負:右
 * @default 0
 *
 * @param Scroll Y-Axis
 * @text Y方向移動速度
 * @desc 正:上 / 負:下
 * @default 0
 *
 * @help
 * 翻訳:ムノクラ
 * https://fungamemake.com/
 * https://twitter.com/munokura/
 *
 * ===========================================================================
 * +++ MOG - Menu Background (v1.2) +++
 * By Moghunter
 * https://atelierrgss.wordpress.com/
 * ===========================================================================
 * メニューの背景画像を変更できます。
 * シーン毎に異なる背景画像を有効/無効にできます。
 * ===========================================================================
 * 背景画像は下記フォルダに保存して下さい。
 * /img/pictures/
 *
 * ===========================================================================
 * シーン別の背景が有効になっている場合、
 * 各背景画像は下記のファイルネームの法則に従う必要があります。
 *
 * Scene_Name + _back.png
 *
 * 例
 *
 * Scene_Menu_back.png
 * Scene_Item_back.png
 * Scene_Skill_back.png
 * Scene_Equip_back.png
 * Scene_Status_back.png
 * Scene_Options_back.png
 * Scene_Save_back.png
 * Scene_GameEnd_back.png
 * ...
 * ※並び替えシーンはメニューシーンと統一されています。
 *
 * ===========================================================================
 * プラグインコマンド
 * ===========================================================================
 * ゲーム中に背景画像を変更するには、以下のコマンドを使用してください。
 *
 * backgroundName : FILE_NAME
 *
 * ===========================================================================
 * 更新履歴
 * ===========================================================================
 * v1.2 - MOG_PictureGaleryとの互換性
 * v1.1 - コーディング改善
 */

//===========================================================================
// ** PLUGIN PARAMETERS
//===========================================================================
var Imported = Imported || {};
Imported.MOG_MenuBackground = true;
var Moghunter = Moghunter || {};

Moghunter.parameters = PluginManager.parameters('MOG_MenuBackground');
Moghunter.mback_fileName = String(Moghunter.parameters['Default FileName'] || "Pic_1");
Moghunter.mback_sufixName = String(Moghunter.parameters['Sufix FileName'] || "_back");
Moghunter.mback_selfback = String(Moghunter.parameters['Unique Backgrounds'] || "false");
Moghunter.mback_skipscenes = Object(Moghunter.parameters['Disable Scenes'] || []);
Moghunter.mback_ox = Number(Moghunter.parameters['Scroll X-Axis'] || 0);
Moghunter.mback_oy = Number(Moghunter.parameters['Scroll Y-Axis'] || 0);
Moghunter.mback_opacity = Number(Moghunter.parameters['Window Opacity'] || 30);
SceneManager._mback = false;

//===========================================================================
// ** Game_Interpreter
//===========================================================================

//==============================
// * PluginCommand
//==============================
var _mog_menuback_pluginCommand = Game_Interpreter.prototype.pluginCommand
Game_Interpreter.prototype.pluginCommand = function (command, args) {
	_mog_menuback_pluginCommand.call(this, command, args)
	if (command === "backgroundName") { $gameSystem._backgroundName = String(args[1]) };
	return true;
};

//===========================================================================
// ** Game System
//===========================================================================

//==============================
// * Initialize
//==============================
var _mog_picture_gsys_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function () {
	_mog_picture_gsys_initialize.call(this);
	this._backgroundName = String(Moghunter.mback_fileName)
};

//==============================
// * Get Par Array
//==============================
Game_System.prototype.get_par_array = function (object, value, type) {
	if (value.length === 0) { return };
	var s = value.split(',');
	if (type === 0) {
		for (var i = 0; i < s.length; i++) { object.push(String(s[i])); };
	} else {
		for (var i = 0; i < s.length; i++) { object.push(Number(s[i])); };
	};
};

//===========================================================================
// ** Window Base
//===========================================================================

//==============================
// * Update
//==============================
var _alias_mog_mback_wbase_update = Window_Base.prototype.update;
Window_Base.prototype.update = function () {
	_alias_mog_mback_wbase_update.call(this);
	if (this.needUpdateBackOpacity()) { this.updateBackgroundOpacity() };
};

//==============================
// * Need Update Back Opacity
//==============================
Window_Base.prototype.needUpdateBackOpacity = function () {
	if (!SceneManager._mback) { return false };
	return true;
};

//==============================
// * Update
//==============================
Window_Base.prototype.updateBackgroundOpacity = function () {
	this.opacity = Moghunter.mback_opacity;
};


if (Imported.MOG_TimeSystem) {
	//==============================
	// * Update
	//==============================
	var _alias_mog_mback_time_status_update = Window_Time_Status.prototype.update;
	Window_Time_Status.prototype.update = function () {
		_alias_mog_mback_time_status_update.call(this);
		if (SceneManager._mback) { this.contentsOpacity = 255; this.opacity = Moghunter.mback_opacity }
	};
};

//===========================================================================
// ** Scene MenuBase
//===========================================================================

//==============================
// * Skip Mbackground
//==============================
Scene_MenuBase.prototype.skip_mbackground = function () {
	if (!SceneManager._scene) { return false };
	this._mb_skip_scenes = [];
	$gameSystem.get_par_array(this._mb_skip_scenes, Moghunter.mback_skipscenes, 0);
	for (var i = 0; i < this._mb_skip_scenes.length; i++) {
		if (this._mb_skip_scenes[i] === SceneManager._scene.constructor.name) { return true };
	};
	return false;
};

//==============================
// * create Background
//==============================
var _alias_mog_mback_scbase_createBackground = Scene_MenuBase.prototype.createBackground;
Scene_MenuBase.prototype.createBackground = function () {
	_alias_mog_mback_scbase_createBackground.call(this);
	SceneManager._mback = false;
	if (!this.skip_mbackground()) { this.create_mbackground() };
};

//==============================
// * Skip Mbackground
//==============================
var _alias_mog_mback_scmb_terminate = Scene_MenuBase.prototype.terminate;
Scene_MenuBase.prototype.terminate = function () {
	_alias_mog_mback_scmb_terminate.call(this);
	SceneManager._mback = false;
};

//==============================
// * Set Background Img
//==============================
Scene_MenuBase.prototype.set_background_img = function () {
	if (this._self_background && SceneManager._scene) { return SceneManager._scene.constructor.name + String(Moghunter.mback_sufixName) }
	return $gameSystem._backgroundName;
};

//==============================
// * Create Mbackground
//==============================
Scene_MenuBase.prototype.create_mbackground = function () {
	this._self_background = false;
	SceneManager._mback = true;
	if (String(Moghunter.mback_selfback) === "true") { this._self_background = true };
	this._backgroundSpriteNew = new TilingSprite();
	this._backgroundSpriteNew.move(0, 0, Graphics.width, Graphics.height);
	this.addChild(this._backgroundSpriteNew);
	this.refreshBackgroundName();
};

//==============================
// * Update
//==============================
var _mog_mback_scbase_update = Scene_MenuBase.prototype.update;
Scene_MenuBase.prototype.update = function () {
	_mog_mback_scbase_update.call(this);
	if (this._backgroundSpriteNew) { this.update_mbackground() };
};

//==============================
// * Refresh Background Name
//==============================
Scene_MenuBase.prototype.refreshBackgroundName = function () {
	this._backGroundName = $gameSystem._backgroundName;
	this._backgroundSpriteNew.bitmap = null;
	this._backImg = ImageManager.loadPicture(this.set_background_img());
};

//==============================
// * Refresh Background Bitmap
//==============================
Scene_MenuBase.prototype.refreshBackgroundBitmap = function () {
	this._backgroundSpriteNew.bitmap = this._backImg;
	this._backgroundSpriteNew.scale.x = Graphics.boxWidth / this._backImg.width;
	this._backgroundSpriteNew.scale.y = Graphics.boxHeight / this._backImg.height;
	this._backgroundSpriteNew.move(0, 0, this._backImg.width, this._backImg.height);
};

//==============================
// * Update MBackground
//==============================
Scene_MenuBase.prototype.update_mbackground = function () {
	if ($gameSystem._backgroundName != this._backGroundName) { this.refreshBackgroundName() };
	if (!this._backgroundSpriteNew.bitmap && this._backImg.isReady()) { this.refreshBackgroundBitmap() };
	this._backgroundSpriteNew.origin.x += Moghunter.mback_ox;
	this._backgroundSpriteNew.origin.y += Moghunter.mback_oy;
	if (this._backgroundSprite) { this._backgroundSprite.opacity = 0 };
};