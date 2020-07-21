//===========================================================================
// MOG_CharSelect.js
// Translate to Japanese : fungamemake.com
//===========================================================================

/*:
 * @plugindesc (v1.1) Cena de seleção de personagens.
 * @author Moghunter
 *
 * @param Initial Party Size
 * @desc Número de personagens iniciais no jogo.
 * @default 4
 *
 * @param Hide Actor IDs
 * @desc Permite ocultar as IDs de determinados personagens
 * Eg - 1,4,7,14
 * @default 101,102,105,106
 *
 * @param Ring Size
 * @desc Definição do tamanho círculo.
 * @default 200
 *
 * @param Face X-Axis
 * @desc Definição X-Axis da Face de seleção.
 * @default 30
 *
 * @param Face Y-Axis
 * @desc Definição Y-Axis da Face de seleção.
 * @default 0
 *
 * @param Face 2 X-Axis
 * @desc Definição X-Axis da Face dos selecionados.
 * @default 690
 *
 * @param Face Y X-Axis
 * @desc Definição Y-Axis da Face dos selecionados.
 * @default 150
 *
 * @param Face Face 2 Space
 * @desc Definição do espaço entre os battlers.
 * @default 90
 *
 * @param Picture X-Axis
 * @desc Definição X-Axis das imagens dos personagens.
 * @default 70
 *
 * @param Picture Y-Axis
 * @desc Definição Y-Axis das imagens dos personagens.
 * @default 0
 *
 * @param Cursor X-Axis
 * @desc Definição X-Axis do cursor.
 * @default 0
 *
 * @param Cursor Y-Axis
 * @desc Definição Y-Axis do cursor.
 * @default 0
 *
 * @param Cursor Rotation
 * @desc Definição da velocidade de rotação do cursor.
 * @default 0.02
 *
 * @param Name X-Axis
 * @desc Definição X-axis do nome.
 * @default 20
 *
 * @param Name Y-Axis
 * @desc Definição X-axis do nome.
 * @default 525
 *
 * @param Par X-Axis
 * @desc Definição X-axis dos parâmetros.
 * @default 270
 *
 * @param Par Y-Axis
 * @desc Definição X-axis dos parâmetros.
 * @default 200
 *
 * @param Par Font Size
 * @desc Definição do tamanho da fonte dos parâmetros.
 * @default 22
 *
 * @help
 * ===========================================================================
 * +++ MOG - Character Select (v1.1) +++
 * By Moghunter
 * https://atelierrgss.wordpress.com/
 * ===========================================================================
 * Cena de seleção de personagens.
 *
 * ===========================================================================
 * UTILIZAÇÃO
 * ===========================================================================
 * Grave as imagens das faces e do sistema na pasta.
 *
 * /img/charselect/
 * /img/charselect/faces_a/
 * /img/charselect/faces_b/
 *
 * E as pictures na pasta.
 *
 * /img/pictures/
 *
 * Nomeie os arquivos da seguinte forma.
 *
 * Actor_ ID.png
 *
 * Exemplo
 *
 * Actor_1.png
 * Actor_2.png
 * Actor_3.png
 * Actor_4.png
 *...
 *
 * ===========================================================================
 * PLUGIN COMMAND
 * ===========================================================================
 * Use o código abaixo através do plugin command.
 *
 * character_select
 *
 * ===========================================================================
 * HISTÓRICO
 * ===========================================================================
 * (v1.1) - Adição da opção de definir o tamanho do círculo.
 *
 */

/*:ja
 * @plugindesc (v1.1) アクター選択シーンを追加します。
 * @author Moghunter
 *
 * @param Initial Party Size
 * @text 選択するパーティメンバーの人数
 * @type number
 * @min 1
 * @max 9007
 * @default 4
 *
 * @param Hide Actor IDs
 * @text 隠すアクターID
 * @desc 例:1,4,7,14
 * @default 101,102,105,106
 *
 * @param Ring Size
 * @text 選択リングのサイズ
 * @type number
 * @min 1
 * @max 9007
 * @default 200
 *
 * @param Face X-Axis
 * @text 選択肢画像のX軸位置
 * @desc 正:右 / 負:左
 * @type number
 * @min -9007
 * @max 9007
 * @default 30
 *
 * @param Face Y-Axis
 * @text 選択肢画像のY軸位置
 * @desc 正:下 / 負:上
 * @type number
 * @min -9007
 * @max 9007
 * @default 0
 *
 * @param Face 2 X-Axis
 * @text 選択された画像のX軸位置
 * @desc 正:右 / 負:左
 * @type number
 * @min -9007
 * @max 9007
 * @default 690
 *
 * @param Face 2 Y-Axis
 * @text 選択された画像のY軸位置
 * @desc 正:下 / 負:上
 * @type number
 * @min -9007
 * @max 9007
 * @default 150
 *
 * @param Face Face 2 Space
 * @text 画像間の間隔
 * @default 90
 *
 * @param Picture X-Axis
 * @text アクター画像のX軸位置
 * @desc 正:右 / 負:左
 * @type number
 * @min -9007
 * @max 9007
 * @default 70
 *
 * @param Picture Y-Axis
 * @text アクター画像のY軸位置
 * @desc 正:下 / 負:上
 * @type number
 * @min -9007
 * @max 9007
 * @default 0
 *
 * @param Cursor X-Axis
 * @text カーソルのX軸位置
 * @desc 正:右 / 負:左
 * @type number
 * @min -9007
 * @max 9007
 * @default 0
 *
 * @param Cursor Y-Axis
 * @text カーソルのY軸位置
 * @desc 正:下 / 負:上
 * @type number
 * @min -9007
 * @max 9007
 * @default 0
 *
 * @param Cursor Rotation
 * @text カーソルの回転速度
 * @desc 正:時計回り / 負:反時計回り。絶対値が大きいほど高速。例:0.02
 * @type number
 * @min -9007
 * @max 9007
 * @decimals 2
 * @default 0.02
 *
 * @param Name X-Axis
 * @text 名前のX軸位置
 * @desc 正:右 / 負:左
 * @type number
 * @min -9007
 * @max 9007
 * @default 20
 *
 * @param Name Y-Axis
 * @text 名前のY軸位置
 * @desc 正:下 / 負:上
 * @type number
 * @min -9007
 * @max 9007
 * @default 525
 *
 * @param Par X-Axis
 * @text 能力値のX軸位置
 * @desc 正:右 / 負:左
 * @type number
 * @min -9007
 * @max 9007
 * @default 270
 *
 * @param Par Y-Axis
 * @text 能力値のY軸位置
 * @desc 正:下 / 負:上
 * @type number
 * @min -9007
 * @max 9007
 * @default 200
 *
 * @param Par Font Size
 * @text 能力値のフォントサイズ
 * @type number
 * @min 1
 * @max 9007
 * @default 22
 *
 * @help
 * 翻訳:ムノクラ
 * https://fungamemake.com/
 * https://twitter.com/munokura/
 *
 * ===========================================================================
 * +++ MOG - Character Select (v1.1) +++
 * By Moghunter
 * https://atelierrgss.wordpress.com/
 * ===========================================================================
 * アクター選択シーンを追加します。
 *
 * ===========================================================================
 * 必要画像ファイル
 * ===========================================================================
 * 必要な画像ファイルを各フォルダーに保存してください。
 *
 * /img/charselect/
 *   Background.png
 *   Cursor.png
 *   Layout.png
 *
 * /img/charselect/faces_a/
 *   Actor_ ID.png
 *
 *     例
 *
 *     Actor_1.png
 *     Actor_2.png
 *     Actor_3.png
 *     Actor_4.png
 *     ...
 *
 * /img/charselect/faces_b/
 *   Actor_ ID.png
 *
 * /img/pictures/
 *   Actor_ ID.png
 *
 * ===========================================================================
 * プラグインコマンド
 * ===========================================================================
 * 以下のプラグインコマンドでシーンを呼び出します。
 *
 * character_select
 *
 * ===========================================================================
 * 更新履歴
 * ===========================================================================
 * (v1.1) - リングのサイズを設定するオプションを追加
 *
 */

//===========================================================================
// ** PLUGIN PARAMETERS
//===========================================================================
var Imported = Imported || {};
Imported.MOG_CharSelect = true;
var Moghunter = Moghunter || {};

Moghunter.parameters = PluginManager.parameters('MOG_CharSelect');
Moghunter.skipActorIDs = Object(Moghunter.parameters['Hide Actor IDs'] || 0);
Moghunter.charSel_FaceX = Number(Moghunter.parameters['Face X-Axis'] || 30);
Moghunter.charSel_FaceY = Number(Moghunter.parameters['Face Y-Axis'] || 0);

Moghunter.charSel_Face2X = Number(Moghunter.parameters['Face 2 X-Axis'] || 690);
Moghunter.charSel_Face2Y = Number(Moghunter.parameters['Face 2 Y-Axis'] || 150);
Moghunter.charSel_Face2S = Number(Moghunter.parameters['Face 2 Space'] || 90);

Moghunter.charSel_PictureX = Number(Moghunter.parameters['Picture X-Axis'] || 70);
Moghunter.charSel_PictureY = Number(Moghunter.parameters['Picture Y-Axis'] || 0);
Moghunter.charSel_CursorX = Number(Moghunter.parameters['Cursor X-Axis'] || 0);
Moghunter.charSel_CursorY = Number(Moghunter.parameters['Cursor Y-Axis'] || 0);
Moghunter.charSel_CursorR = Number(Moghunter.parameters['Cursor Rotation'] || 0.02);
Moghunter.charSel_NameX = Number(Moghunter.parameters['Name X-Axis'] || 20);
Moghunter.charSel_NameY = Number(Moghunter.parameters['Name Y-Axis'] || 525);
Moghunter.charSel_parX = Number(Moghunter.parameters['Par X-Axis'] || 270);
Moghunter.charSel_parY = Number(Moghunter.parameters['Par Y-Axis'] || 200);
Moghunter.charSel_parFontSize = Number(Moghunter.parameters['Par Font Size'] || 22);
Moghunter.charSel_initPartySize = Number(Moghunter.parameters['Initial Party Size'] || 4);
Moghunter.charSel_rolRange = Number(Moghunter.parameters['Ring Size'] || 200);

//===========================================================================
// ** ImageManager
//===========================================================================

//==============================
// * Char Select
//==============================
ImageManager.loadACharSelect = function (filename) {
	return this.loadBitmap('img/charselect/', filename, 0, true);
};

//==============================
// * Char Select Faces
//==============================
ImageManager.loadACharSelectFaces = function (filename) {
	return this.loadBitmap('img/charselect/faces_a/', filename, 0, true);
};

//==============================
// * Char Select Faces Selected
//==============================
ImageManager.loadACharSelectFacesS = function (filename) {
	return this.loadBitmap('img/charselect/faces_b/', filename, 0, true);
};

//===========================================================================
// ** Game_Interpreter
//===========================================================================

//==============================
// * PluginCommand
//==============================
var _alias_mog_charSelect_pluginCommand = Game_Interpreter.prototype.pluginCommand
Game_Interpreter.prototype.pluginCommand = function (command, args) {
	_alias_mog_charSelect_pluginCommand.call(this, command, args)
	if (command === "character_select") {
		SceneManager.push(Scene_CharSelect)
		this.wait(10);
	};
	return true;
};

//===========================================================================
// ** Scene Character Select
//===========================================================================
function Scene_CharSelect() {
	this.initialize.apply(this, arguments);
};

Scene_CharSelect.prototype = Object.create(Scene_MenuBase.prototype);
Scene_CharSelect.prototype.constructor = Scene_CharSelect;

//==============================
// * Initialize
//==============================
Scene_CharSelect.prototype.initialize = function () {
	Scene_Base.prototype.initialize.call(this);
	this._index = 0;
	this._ActorIndex = -1;
	this._party = [];
	this._partyIndex = 0;
	this._partySel = [];
	this._actors = [];
	this._pi = 2.0 * Math.PI;
	this._np = [0, 0];
	this._rol_range = Moghunter.charSel_rolRange;
	this._phase = [0, 0];
	this.loadFiles();
	this.createSprites();
};

//==============================
// * Set Var
//==============================
Scene_CharSelect.prototype.setvar = function (object, value) {
	var s = value.split(',');
	for (var i = 0; i < s.length; i++) { object.push(Number(s[i])); };
};

//==============================
// * Load Files
//==============================
Scene_CharSelect.prototype.loadFiles = function () {
	this._faceBitmaps = [];
	this._faceBitmaps_S = [];
	this._pictureBitmaps = [];
	this._skipID = [];
	this.setvar(this._skipID, Moghunter.skipActorIDs);
	$gameParty._actors = [];
	for (var i = 1; i < $dataActors.length; i++) { $gameParty.addActor(i) };
	var membersTemp = $gameParty.members();
	$gameParty._actors = [];
	for (var i = 0; i < membersTemp.length; i++) {
		var enable = true;
		var actor = membersTemp[i];
		for (var s = 0; s < this._skipID.length; s++) {
			if (actor._actorId === this._skipID[s]) { enable = false };
		};
		if (enable) {
			this._actors.push(actor)
			var fileName = String("Actor_" + actor._actorId)
			this._faceBitmaps.push(ImageManager.loadACharSelectFaces(fileName));
			this._faceBitmaps_S.push(ImageManager.loadACharSelectFacesS(fileName));
			this._pictureBitmaps.push(ImageManager.loadPicture(fileName));
		};
	};
	this._maxPartySize = Math.min(Math.max(Moghunter.charSel_initPartySize, 1), this._actors.length);
};

//==============================
// * max Actors
//==============================
Scene_CharSelect.prototype.maxActors = function () {
	return this._actors.length;
};

//==============================
// * Actor
//==============================
Scene_CharSelect.prototype.actor = function () {
	return this._actors[this._ActorIndex];
};

//==============================
// * Next Index
//==============================
Scene_CharSelect.prototype.nextIndex = function (value) {
	if (this._phase[0] != 1) { return };
	SoundManager.playCursor();
	this._index += value;
	if (this._index >= this.maxActors()) { this._index = 0 };
	if (this._index < 0) { this._index = this.maxActors() - 1 };
};

//==============================
// * update Commands
//==============================
Scene_CharSelect.prototype.updateCommands = function () {
	if (Input.isRepeated("right")) { this.nextIndex(-1) }
	else if (Input.isRepeated("left")) { this.nextIndex(1) }
	else if (Input.isRepeated("down")) { this.nextIndex(-1) }
	else if (Input.isRepeated("up")) { this.nextIndex(1) }
	else if (Input.isTriggered("ok")) { this.selectCharacter(true) }
	else if (Input.isTriggered("cancel") || TouchInput.isCancelled()) { this.cancelCharacter() };
	if (TouchInput.isTriggered()) { this.checkTouchOnFace() };
};

//==============================
// * check Touch On Face
//==============================
Scene_CharSelect.prototype.checkTouchOnFace = function () {
	for (i = 0; i < this._facesSprites.length; i++) {
		if (this.isOnFace(this._facesSprites[i])) {
			this._index = i;
			this.selectCharacter(false);
		};
	};
};

//==============================
// * On Picture Com
//==============================
Scene_CharSelect.prototype.isOnFace = function (sprite) {
	var cw = sprite.bitmap.width / 2;
	var ch = sprite.bitmap.height / 2;
	if (TouchInput.x < sprite.x - cw) { return false };
	if (TouchInput.x > sprite.x + cw) { return false };
	if (TouchInput.y < sprite.y - ch) { return false };
	if (TouchInput.y > sprite.y + ch) { return false };
	return true;
};

//==============================
// * updatePhase
//==============================
Scene_CharSelect.prototype.updatePhase = function () {
	if (this._phase[0] === 0) {
		this._field.opacity += 3;
		if (this._field.opacity >= 255) { this._phase[0] = 1 };
	} else {
		this._field.opacity -= 2;
		if (this._field.opacity <= 0) { this.executeEnd() };
	};
};

//==============================
// * create Sprites
//==============================
Scene_CharSelect.prototype.createSprites = function () {
	this._field = new Sprite();
	this._field.opacity = 0;
	this.addChild(this._field);
	this.createBackgroundS();
	this.createPicture();
	this.createCursor();
	this.createFaces();
	this.createLayout();
	this.createName();
	this.createParameters();
	this.createMembers();
};

//==============================
// * create Background S
//==============================
Scene_CharSelect.prototype.createBackgroundS = function () {
	this._background = new Sprite(ImageManager.loadACharSelect("Background"));
	this._field.addChild(this._background);
	if (Imported.MOG_MenuParticles) { this.create_mparticles() };
};

//==============================
// * create Background
//==============================
Scene_CharSelect.prototype.createBackground = function () {
};

//==============================
// * Create Particles
//==============================
Scene_CharSelect.prototype.create_mparticles = function () {
	this._self_par = false;
	SceneManager._mpart = true;
	if (String(Moghunter.mpart_selfpart) === "true") { this._self_par = true };
	this._sprite_particles = [];
	this._sprite_particles_data = [];
	this._nw = [0, 0];
	if (Moghunter.mpart_ox > 0) { this._nw[0] = -(Graphics.boxWidth / 3) };
	if (Moghunter.mpart_ox < 0) { this._nw[0] = (Graphics.boxWidth / 3) };
	this._nw[1] = Math.abs(this._nw[0]);
	for (i = 0; i < Moghunter.mpart_number; i++) {
		this._sprite_particles.push(new Sprite(ImageManager.loadMenus(this.set_particle_img())));
		this._field.addChild(this._sprite_particles[i]);
		this._sprite_particles_data[i] = []
		this.reset_particles(i);
		this._sprite_particles[i].x = Math.randomInt(Graphics.boxWidth);
		this._sprite_particles[i].y = Math.randomInt(Graphics.boxHeight);
		this._sprite_particles[i].opacity = 0;
		this._sprite_particles[i].blendMode = Moghunter.mpart_blendMode;
	};
};

//==============================
// * create Layout
//==============================
Scene_CharSelect.prototype.createLayout = function () {
	this._layout = new Sprite(ImageManager.loadACharSelect("Layout"));
	this._field.addChild(this._layout);
};

//==============================
// * create Members
//==============================
Scene_CharSelect.prototype.createMembers = function () {
	this._members = [];
	for (var i = 0; i < this._maxPartySize; i++) {
		this._members[i] = new Sprite();
		this._members[i].x = Moghunter.charSel_Face2X;
		this._members[i].y = Moghunter.charSel_Face2Y + (Moghunter.charSel_Face2S * i);
		this._field.addChild(this._members[i]);
	};
};

//==============================
// * selectCharacter
//==============================
Scene_CharSelect.prototype.selectCharacter = function (next) {
	if (this._partyIndex >= this._maxPartySize) { return };
	var enable = true;
	for (var i = 0; i < this._partySel.length; i++) {
		if (this._partySel[i] === this._index) { enable = false };
	};
	if (enable) {
		this.addCharacter(next)
	} else {
		SoundManager.playBuzzer()
	};

};

//==============================
// * selectCharacter
//==============================
Scene_CharSelect.prototype.addCharacter = function (next) {
	SoundManager.playOk();
	this._partySel.push(this._index);
	this.refreshFaceOpacity();
	this.refreshMembers(this._partyIndex, this._index);
	this._partyIndex++;
	if (this._partyIndex >= this._maxPartySize) { this._phase[0] = 2 };
};

//==============================
// * refresh Face Opacity
//==============================
Scene_CharSelect.prototype.refreshFaceOpacity = function () {
	for (var i = 0; i < this._facesSprites.length; i++) {
		var sel = true;
		for (var f = 0; f < this._partySel.length; f++) {
			if (this._partySel[f] === i) { sel = false };
		};
		if (sel) {
			this._facesSprites[i].opacity = 255;
		} else {
			this._facesSprites[i].opacity = 125;
		};
	};
};

//==============================
// * cancel Character
//==============================
Scene_CharSelect.prototype.cancelCharacter = function () {
	if (this._partyIndex <= 0) { return };
	SoundManager.playCancel()
	this._partyIndex--;
	this.clearMembers(this._partyIndex);
	this._partySel.pop();
	this.refreshFaceOpacity();
	if (this._partyIndex < 0) { this._partyIndex = 0 };
};

//==============================
// * execute End
//==============================
Scene_CharSelect.prototype.executeEnd = function () {
	for (var i = 0; i < this._partySel.length; i++) {
		var actor = this._actors[this._partySel[i]];
		if (actor) { $gameParty.addActor(actor._actorId) };
	};
	SceneManager.pop();
};

//==============================
// * refresh Members
//==============================
Scene_CharSelect.prototype.refreshMembers = function (i, actor_id) {
	this._members[i].bitmap = this._faceBitmaps_S[actor_id];
	this._members[i].x = Moghunter.charSel_Face2X + 50;
	this._members[i].opacity = 0;
};

//==============================
// * clear Members
//==============================
Scene_CharSelect.prototype.clearMembers = function (i) {
	if (!this._members[i]) { return };
	this._members[i].bitmap = null;
};

//==============================
// * updateMembers
//==============================
Scene_CharSelect.prototype.updateMembers = function (i) {
	for (var i = 0; i < this._members.length; i++) {
		if (this._members[i].x > Moghunter.charSel_Face2X) {
			this._members[i].x -= 5;
			this._members[i].opacity += 25;
			if (this._members[i].x <= Moghunter.charSel_Face2X) {
				this._members[i].x = Moghunter.charSel_Face2X;
				this._members[i].opacity = 255;
			};
		};
	};
};

//==============================
// * create Name
//==============================
Scene_CharSelect.prototype.createName = function () {
	this._name = new Sprite(new Bitmap(200, 36));
	this._name.bitmap.fontItalic = true;
	this._field.addChild(this._name);
};

//==============================
// * refresh Name
//==============================
Scene_CharSelect.prototype.refreshName = function () {
	this._name.bitmap.clear();
	this._name.bitmap.drawText(this.actor().name(), 0, 0, 190, 32, "left");
};

//==============================
// * create Parameters
//==============================
Scene_CharSelect.prototype.createParameters = function () {
	this._parameters = new Sprite(new Bitmap(Graphics.boxWidth, Graphics.boxHeight));
	this._parameters.bitmap.fontSize = Moghunter.charSel_parFontSize;
	this._field.addChild(this._parameters);
};
//==============================
// * refresh Parameters
//==============================
Scene_CharSelect.prototype.refreshParameters = function () {
	this._parameters.bitmap.clear();
	var xr = Moghunter.charSel_parX;
	var yr = Moghunter.charSel_parY;
	this.drawPar(this.actor().currentClass().name, xr + 130, yr + 5);
	this.drawPar(this.actor().hp, xr + 10, yr + 50);
	this.drawPar(this.actor().mp, xr + 130, yr + 50);
	this.drawPar(this.actor().atk, xr + 10, yr + 95);
	this.drawPar(this.actor().def, xr + 130, yr + 95);
	this.drawPar(this.actor().mat, xr + 10, yr + 140);
	this.drawPar(this.actor().mdf, xr + 130, yr + 140);
	this.drawPar(this.actor().agi, xr + 10, yr + 185);
	this.drawPar(this.actor().luk, xr + 130, yr + 185);
};

//==============================
// * refresh Parameters
//==============================
Scene_CharSelect.prototype.drawPar = function (par, x, y) {
	this._parameters.bitmap.drawText(String(par), x, y, 150, 32, "right");
};

//==============================
// * update Name
//==============================
Scene_CharSelect.prototype.updateName = function () {
	this._name.x = Moghunter.charSel_NameX;
	this._name.y = Moghunter.charSel_NameY;
};

//==============================
// * create Cursor
//==============================
Scene_CharSelect.prototype.createCursor = function () {
	this._cursor = new Sprite(ImageManager.loadACharSelect("Cursor"));
	this._cursor.anchor.x = 0.5;
	this._cursor.anchor.y = 0.5;
	this._field.addChild(this._cursor);
};

//==============================
// * update Cursor
//==============================
Scene_CharSelect.prototype.updateCursor = function () {
	this._cursor.rotation += Moghunter.charSel_CursorR;
	this._cursor.x = this._facesSprites[this._index].x + Moghunter.charSel_CursorX;
	this._cursor.y = this._facesSprites[this._index].y + Moghunter.charSel_CursorY;
	if (this._phase[0] != 1) {
		this._cursor.opacity -= 10;
	} else {
		this._cursor.opacity += 10;
	};
};

//==============================
// * create Faces
//==============================
Scene_CharSelect.prototype.createFaces = function () {
	this._facesSprites = [];
	for (var i = 0; i < this._faceBitmaps.length; i++) {
		this._facesSprites[i] = new Sprite(this._faceBitmaps[i]);
		this._facesSprites[i].x = (Graphics.boxWidth / 2) + Moghunter.charSel_FaceX;
		this._facesSprites[i].y = (Graphics.boxHeight / 2) + Moghunter.charSel_FaceY;
		this._facesSprites[i].anchor.x = 0.5;
		this._facesSprites[i].anchor.y = 0.5;
		this._field.addChild(this._facesSprites[i]);
	};
};

//==============================
// * Update Face Pos
//==============================
Scene_CharSelect.prototype.updateFacePos = function (i) {
	var rol_index = 1 / this.maxActors();
	var now_p = rol_index * i;
	var r_p = this._pi * -now_p;
	this._np[0] = Math.floor(this._rol_range * Math.sin(r_p));
	this._np[1] = -Math.floor(this._rol_range * Math.cos(r_p));
};

//==============================
// * update Faces
//==============================
Scene_CharSelect.prototype.updateFaces = function () {
	for (var i = 0; i < this._facesSprites.length; i++) {
		this.updateFacePos(i);
		var px = this._np[0] + (Graphics.boxWidth / 2) + Moghunter.charSel_FaceX;
		var py = this._np[1] + (Graphics.boxHeight / 2) + Moghunter.charSel_FaceY;
		this._facesSprites[i].x = this.faceMoveTo(this._facesSprites[i].x, px);
		this._facesSprites[i].y = this.faceMoveTo(this._facesSprites[i].y, py);;
	};
};

//==============================
// * cursor Move toSVD
//==============================
Scene_CharSelect.prototype.faceMoveTo = function (value, real_value) {
	if (value == real_value) { return value };
	var dnspeed = 2 + (Math.abs(value - real_value) / 30);
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
// * create Picture
//==============================
Scene_CharSelect.prototype.createPicture = function () {
	this._picture = new Sprite();
	this._picture.anchor.x = 0.5;
	this._field.addChild(this._picture);
};

//==============================
// * refresh Picture
//==============================
Scene_CharSelect.prototype.refreshPicture = function () {
	this._picture.bitmap = this._pictureBitmaps[this._ActorIndex];
	this._picture.x = Moghunter.charSel_PictureX - 100;
	this._picture.opacity = 0;
};

//==============================
// * update Picture
//==============================
Scene_CharSelect.prototype.updatePicture = function () {
	if (this._phase[0] === 0) { return };
	if (this._picture.x < Moghunter.charSel_PictureX) {
		this._picture.x += 5;
		this._picture.opacity += 13;
		if (this._picture.x >= Moghunter.charSel_PictureX) {
			this._picture.x = Moghunter.charSel_PictureX;
			this._picture.opacity = 255;
		};
	};
	this._picture.y = (Graphics.boxHeight - this._picture.bitmap.height) + Moghunter.charSel_PictureY;
};

//==============================
// * refresh Index
//==============================
Scene_CharSelect.prototype.refreshIndex = function () {
	this._ActorIndex = this._index;
	this.refreshPicture();
	this.refreshName();
	this.refreshParameters();
};

//==============================
// * Update
//==============================
Scene_CharSelect.prototype.update = function () {
	Scene_MenuBase.prototype.update.call(this);
	if (this._phase[0] === 1) {
		this.updateCommands();
	} else {
		this.updatePhase();
	};
	this.updateFaces();
	this.updateCursor();
	this.updateName();
	this.updateMembers();
	if (this._picture && this._picture.bitmap) this.updatePicture();
	if (this._index != this._ActorIndex) { this.refreshIndex() };
};