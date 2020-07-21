//===========================================================================
// MOG_TitleBackground.js
// Translate to Japanese : fungamemake.com
//===========================================================================

/*:
 * @plugindesc (v1.1) Ativa o efeito de deslize do background.
 * @author Moghunter
 *
 * @param Background 1 Scroll X
 * @desc Definição X-axis da imagem de fundo.
 * @default 1
 *
 * @param Background 1 Scroll Y
 * @desc Definição Y-axis da imagem de fundo.
 * @default 0
 *
 * @param Background 2 Scroll X
 * @desc Definição X-axis da imagem de fundo.
 * @default 0
 *
 * @param Background 2 Scroll Y
 * @desc Definição Y-axis da imagem de fundo.
 * @default 0
 *
 * @help
 * ===========================================================================
 * +++ MOG - Title Picture Commands (v1.1) +++
 * By Moghunter
 * https://atelierrgss.wordpress.com/
 * ===========================================================================
 * Ativa o efeito de deslize do background.
 *
 * NOTA - Se estiver usando o MOG Title Particles, deixe este plugin acima
 * do MOG Title Particles.
 * ===========================================================================
 * HISTÓRICO
 * ===========================================================================
 * (1.1) - Correção do plugin parameter não funcionar.
 */

/*:ja
 * @plugindesc (v1.1) タイトル画面の背景画像にスライド効果を追加します。
 * @author Moghunter
 *
 * @param Background 1 Scroll X
 * @text 背景画像のX軸移動速度
 * @desc 正:右 / 負:左
 * @default 1
 *
 * @param Background 1 Scroll Y
 * @text 背景画像のY軸移動速度
 * @desc 正:下 / 負:上
 * @default 0
 *
 * @help
 * 翻訳:ムノクラ
 * https://fungamemake.com/
 * https://twitter.com/munokura/
 *
 * ===========================================================================
 * +++ MOG - Title Picture Commands (v1.1) +++
 * By Moghunter
 * https://atelierrgss.wordpress.com/
 * ===========================================================================
 * タイトル画面の背景画像にスライド効果を追加します。
 * データベース＞システム＞タイトル画面＞画像
 * で指定した背景画像がタイトル画面で移動します。
 *
 * 注 - MOG Title Particlesを使用している場合、
 * プラグイン管理でこのプラグインをMOG Title Particlesの上にしてください。
 *
 * ===========================================================================
 * 更新履歴
 * ===========================================================================
 * (1.1) - プラグインパラメータが機能しない問題を修正
 */

//===========================================================================
// ** PLUGIN PARAMETERS
//===========================================================================
var Imported = Imported || {};
Imported.MOG_Picture_Command = true;
var Moghunter = Moghunter || {};

Moghunter.parameters = PluginManager.parameters('MOG_TitleBackground');
Moghunter.title_bg1_x = Number(Moghunter.parameters['Background 1 Scroll X'] || 1);
Moghunter.title_bg1_y = Number(Moghunter.parameters['Background 1 Scroll Y'] || 0);
Moghunter.title_bg2_x = Number(Moghunter.parameters['Background 2 Scroll X'] || 0);
Moghunter.title_bg2_y = Number(Moghunter.parameters['Background 2 Scroll Y'] || 0);

//===========================================================================
// ** Scene Title
//===========================================================================

//==============================
// * Create Background
//==============================
var _alias_mog_title_background_effects_createBackground = Scene_Title.prototype.createBackground
Scene_Title.prototype.createBackground = function () {
    _alias_mog_title_background_effects_createBackground.call(this);
    this.removeChild(this._backSprite1);
    this.removeChild(this._backSprite2);
    this._backSprite1 = new TilingSprite(ImageManager.loadTitle1($dataSystem.title1Name));
    this._backSprite1.move(0, 0, Graphics.width, Graphics.height);
    this._backSprite2 = new TilingSprite(ImageManager.loadTitle2($dataSystem.title2Name));
    this._backSprite2.move(0, 0, Graphics.width, Graphics.height);
    this.addChild(this._backSprite1);
    this.addChild(this._backSprite2);
};

//==============================
// * Update
//==============================
var _alias_mog_title_background_effects_update = Scene_Title.prototype.update;
Scene_Title.prototype.update = function () {
    _alias_mog_title_background_effects_update.call(this);
    this.update_background_effects();
};

//==============================
// * Update Background Effects
//==============================
Scene_Title.prototype.update_background_effects = function () {
    this._backSprite1.origin.x += Moghunter.title_bg1_x;
    this._backSprite1.origin.y += Moghunter.title_bg1_y;
    this._backSprite2.origin.x += Moghunter.title_bg2_x;
    this._backSprite2.origin.y += Moghunter.title_bg2_y;
    this._backSprite1.update;
    this._backSprite2.update;
};
