//===========================================================================
// MOG_FastTravel.js
// Translate to Japanese : fungamemake.com
//===========================================================================
/*:
 * @plugindesc (v1.1) Sistema de mapa de teleporte rápido.
 * @author Moghunter
 *
 * @param Remember Last MapID
 * @desc Lembrar da último mapa teleportado.
 * @default true
 *
 * @param Play Bgm
 * @desc Ativar música.
 * @default false
 *
 * @param Bgm File Name
 * @desc Definição do nome da música.
 * @default Theme2
 *
 * @param Fade Bgm
 * @desc Ativar fade na música durante a transição.
 * @default true
 *
 * @param Map Move Speed
 * @desc Definição da velocidade de movimento do mapa.
 * @default 30
 *
 * @param Center X-axis
 * @desc Definição do centro do tela (Para ajustes).
 * @default 0
 *
 * @param Center Y-axis
 * @desc Definição do centro do tela (Para ajustes).
 * @default 0
 *
 * @param Fade Speed
 * @desc Definição da velocidade da transição.
 * @default 30
 *
 * @param Zoom Animation
 * @desc Ativar o efeito de zoom.
 * @default true
 *
 * @param Rotation Animation
 * @desc Ativar o efeito de rotação.
 * @default true
 *
 * @param New Map Color
 * @desc Definição da cor dos mapas novos.
 * @default 6
 *
 * @param Turn Back After Cancel
 * @desc Virar para traz após cancelar a cena.
 * @default true
 *
 * @param List Width
 * @desc Definição da largura da janela da lista.
 * @default 300
 *
 * @param List Height
 * @desc Definição da altura da janela da lista.
 * @default 290
 *
 * @param List X-axis
 * @desc Definição X-axis da janela da lista.
 * @default 516
 *
 * @param List Y-axis
 * @desc Definição Y-axis da janela da lista.
 * @default 145
 *
 * @param Slide List
 * @desc Ativar o efeito de animação de deslize.
 * @default true
 *
 * @param List Layout X-axis
 * @desc Definição X-axis do layout da janela da lista.
 * @default 0
 *
 * @param List Layout Y-axis
 * @desc Definição Y-axis do layout da lista.
 * @default -53
 *
 * @param Description X-axis
 * @desc Definição X-axis da descrição.
 * @default 160
 *
 * @param Description Y-axis
 * @desc Definição Y-axis da descrição.
 * @default 300
 *
 * @param Slide Description
 * @desc Ativar o efeito de animação de deslize.
 * @default true
 *
 * @param Com Town X-axis
 * @desc Definição X-axis do comando Town.
 * @default 470
 *
 * @param Com Town Y-axis
 * @desc Definição Y-axis do comando Town.
 * @default 7
 *
 * @param Com Dungeon X-axis
 * @desc Definição X-axis do comando Dungeon.
 * @default 575
 *
 * @param Com Dungeon Y-axis
 * @desc Definição Y-axis do comando Dungeon.
 * @default 7
 *
 * @param Com Other X-axis
 * @desc Definição X-axis do comando Other.
 * @default 710
 *
 * @param Com Other Y-axis
 * @desc Definição Y-axis do comando Other.
 * @default 7
 *
 * @param Com Cursor X-axis
 * @desc Definição X-axis do cursor Command.
 * @default 0
 *
 * @param Com Cursor Y-axis
 * @desc Definição Y-axis do cursor Command.
 * @default 0
 *
 * @param Com Cursor Animation
 * @desc Ativar animação no cursor.
 * @default true
 *
 * @param Next Cursor X-axis
 * @desc Definição X-axis do cursor Next.
 * @default 0
 *
 * @param Next Cursor Y-axis
 * @desc Definição Y-axis do cursor Next.
 * @default 0
 *
 * @param Next Cursor Animation
 * @desc Ativar animação no cursor.
 * @default true
 *
 * @param Show Completion
 * @desc Apresentar a porcentagem de mapas descobertos.
 * @default true
 *
 * @param Completion X-axis
 * @desc Definição X-axis do Completion.
 * @default 590
 *
 * @param Completion Y-axis
 * @desc Definição Y-axis do Completion.
 * @default 513
 *
 * @param Completion Font Size
 * @desc Definição do tamanho da fonte.
 * @default 22
 *
 * @help
 * ===========================================================================
 * +++ MOG - Fast Travel (v1.1) +++
 * By Moghunter
 * https://atelierrgss.wordpress.com/
 * ===========================================================================
 * Sistema de mapa de teleporte rápido.
 *
 * ===========================================================================
 * UTILIZAÇÃO
 * ===========================================================================
 * Grave as imagens do sistema na pasta.
 *
 * /img/fasttravel/
 *
 * As imagens das descrições dos mapas deverão ser gravadas na pasta
 *
 * /img/fasttravel/stages/
 *
 * Os nomes dos arquivos deverão ter o mesmo nome do mapa definido através do
 * plugin.
 *
 * ===========================================================================
 * PLUGIN COMMAND
 * ===========================================================================
 * Para ativar a cena do Fast Travel use o comando abaixo.
 *
 * fast_travel
 *
 * Para ativar ou desativar um mapa utilize um dos códigos abaixo.
 *
 * enable_town : ID
 * disable_town : ID
 *
 * enable_dungeon : ID
 * disbale_dungeon : ID
 *
 * enable_other : ID
 * disable_other : ID
 *
 * ===========================================================================
 * HISTÓRICO
 * ===========================================================================
 * (v1.1) - Correção de não ativar o sistema quando o plugin é usado stand-alone.
 *
 */

/*:ja
 * @plugindesc (v1.1) クイックテレポートマップシステムを追加します。
 * @author Moghunter
 *
 * @param Remember Last MapID
 * @text 最終マップを記憶の有効化
 * @type boolean
 * @on 有効
 * @off 無効
 * @default true
 *
 * @param Play Bgm
 * @text BGMの有効化
 * @type boolean
 * @on 有効
 * @off 無効
 * @default false
 *
 * @param Bgm File Name
 * @text BGMのファイル名
 * @type file
 * @dir audio/bgm/
 * @default Theme2
 *
 * @param Fade Bgm
 * @text 移行中BGMフェードインの有効化
 * @type boolean
 * @on 有効
 * @off 無効
 * @default true
 *
 * @param Map Move Speed
 * @text マップの移動速度
 * @default 30
 *
 * @param Center X-axis
 * @text 画面X軸中央値(調整用)
 * @desc 正:右 / 負:左
 * @type number
 * @min -9007
 * @max 9007
 * @default 0
 *
 * @param Center Y-axis
 * @text 画面Y軸中央値(調整用)
 * @desc 正:下 / 負:上
 * @type number
 * @min -9007
 * @max 9007
 * @default 0
 *
 * @param Fade Speed
 * @text フェード速度
 * @default 30
 *
 * @param Zoom Animation
 * @text ズーム効果の有効化
 * @type boolean
 * @on 有効
 * @off 無効
 * @default true
 *
 * @param Rotation Animation
 * @text 回転効果の有効化
 * @type boolean
 * @on 有効
 * @off 無効
 * @default true
 *
 * @param New Map Color
 * @text 新しいマップの色
 * @default 6
 *
 * @param Turn Back After Cancel
 * @text シーン中キャンセルの有効化
 * @type boolean
 * @on 有効
 * @off 無効
 * @default true
 *
 * @param List Width
 * @text リストウィンドウの幅
 * @default 300
 *
 * @param List Height
 * @text リストウィンドウの高さ
 * @default 290
 *
 * @param List X-axis
 * @text リストウィンドウのX軸位置
 * @desc 正:右 / 負:左
 * @type number
 * @min -9007
 * @max 9007
 * @default 516
 *
 * @param List Y-axis
 * @text リストウィンドウのY軸位置
 * @desc 正:下 / 負:上
 * @type number
 * @min -9007
 * @max 9007
 * @default 145
 *
 * @param Slide List
 * @text スライドアニメの有効化
 * @type boolean
 * @on 有効
 * @off 無効
 * @default true
 *
 * @param List Layout X-axis
 * @text リストレイアウトのX軸位置
 * @desc 正:右 / 負:左
 * @type number
 * @min -9007
 * @max 9007
 * @default 0
 *
 * @param List Layout Y-axis
 * @text リストレイアウトのY軸位置
 * @desc 正:下 / 負:上
 * @type number
 * @min -9007
 * @max 9007
 * @default -53
 *
 * @param Description X-axis
 * @text 説明のX軸位置
 * @desc 正:右 / 負:左
 * @type number
 * @min -9007
 * @max 9007
 * @default 160
 *
 * @param Description Y-axis
 * @text 説明のY軸位置
 * @desc 正:下 / 負:上
 * @type number
 * @min -9007
 * @max 9007
 * @default 300
 *
 * @param Slide Description
 * @text スライドアニメの有効化
 * @type boolean
 * @on 有効
 * @off 無効
 * @default true
 *
 * @param Com Town X-axis
 * @text TownコマンドのX軸位置
 * @desc 正:右 / 負:左
 * @type number
 * @min -9007
 * @max 9007
 * @default 470
 *
 * @param Com Town Y-axis
 * @text TownコマンドのY軸位置
 * @desc 正:下 / 負:上
 * @type number
 * @min -9007
 * @max 9007
 * @default 7
 *
 * @param Com Dungeon X-axis
 * @text DungeonコマンドのX軸位置
 * @desc 正:右 / 負:左
 * @type number
 * @min -9007
 * @max 9007
 * @default 575
 *
 * @param Com Dungeon Y-axis
 * @text DungeonコマンドのY軸位置
 * @desc 正:下 / 負:上
 * @type number
 * @min -9007
 * @max 9007
 * @default 7
 *
 * @param Com Other X-axis
 * @text OtherコマンドのX軸位置
 * @desc 正:右 / 負:左
 * @type number
 * @min -9007
 * @max 9007
 * @default 710
 *
 * @param Com Other Y-axis
 * @text OtherコマンドのY軸位置
 * @desc 正:下 / 負:上
 * @type number
 * @min -9007
 * @max 9007
 * @default 7
 *
 * @param Com Cursor X-axis
 * @text コマンドカーソルのX軸位置
 * @desc 正:右 / 負:左
 * @type number
 * @min -9007
 * @max 9007
 * @default 0
 *
 * @param Com Cursor Y-axis
 * @text コマンドカーソルのY軸位置
 * @desc 正:下 / 負:上
 * @type number
 * @min -9007
 * @max 9007
 * @default 0
 *
 * @param Com Cursor Animation
 * @text カーソルアニメの有効化
 * @type boolean
 * @on 有効
 * @off 無効
 * @default true
 *
 * @param Next Cursor X-axis
 * @text 次のカーソルのX軸位置
 * @desc 正:右 / 負:左
 * @type number
 * @min -9007
 * @max 9007
 * @default 0
 *
 * @param Next Cursor Y-axis
 * @text 次のカーソルのY軸位置
 * @desc 正:下 / 負:上
 * @type number
 * @min -9007
 * @max 9007
 * @default 0
 *
 * @param Next Cursor Animation
 * @text 次のカーソルアニメの有効化
 * @on 有効
 * @off 無効
 * @type boolean
 * @default true
 *
 * @param Show Completion
 * @text 到達マップの割合表示の有効化
 * @type boolean
 * @on 有効
 * @off 無効
 * @default true
 *
 * @param Completion X-axis
 * @text 到達マップのX軸位置
 * @desc 正:右 / 負:左
 * @type number
 * @min -9007
 * @max 9007
 * @default 590
 *
 * @param Completion Y-axis
 * @text 到達マップのY軸位置
 * @desc 正:下 / 負:上
 * @type number
 * @min -9007
 * @max 9007
 * @default 513
 *
 * @param Completion Font Size
 * @text フォントサイズ
 * @type number
 * @max 9007
 * @default 22
 *
 * @help
 * 翻訳:ムノクラ
 * https://fungamemake.com/
 * https://twitter.com/munokura/
 *
 * ===========================================================================
 * +++ MOG - Fast Travel (v1.1) +++
 * By Moghunter
 * https://atelierrgss.wordpress.com/
 * ===========================================================================
 * クイックテレポートマップシステムを追加します。
 *
 * ===========================================================================
 * 必要画像ファイル
 * ===========================================================================
 * システム画像ファイルを以下のフォルダーに保存してください。
 *
 * /img/fasttravel/
 *   Cursor_A.png
 *   Cursor_B.png
 *   Layout.png
 *   ListLayout.png
 *   ListName_A.png
 *   ListName_B.png
 *   ListName_C.png
 *   Map.png
 *   Parallax.png
 *   Points.png
 *
 *
 * マップ説明の画像ファイルはフォルダーに保存してください。
 *
 * /img/fasttravel/stages/
 *
 * プラグイン内部で定義したマップ名とファイル名は同じにする必要があります。
 *
 * ===========================================================================
 * プラグインコマンド
 * ===========================================================================
 * 以下のプラグインコマンドでFast Travelシーンを有効にします。
 *
 * fast_travel
 *
 * 以下のプラグインコマンドでマップを有効/無効にします。
 *
 * enable_town : ID
 * disable_town : ID
 *
 * enable_dungeon : ID
 * disbale_dungeon : ID
 *
 * enable_other : ID
 * disable_other : ID
 *
 * ===========================================================================
 * マップの定義(追記)
 * ===========================================================================
 * プラグイン内の SETUP 間のリスト(TOWNS/DUNGEONS/OTHER)を編集します。
 *
 * 例
 *   Moghunter.fastTravel_Towns[1] = {name:"Marksburg",x:265,y:235,mapID:13,mapX:12,mapY:18,direction:8};
 *
 * ===========================================================================
 * 更新履歴
 * ===========================================================================
 * (v1.1) - プラグインがスタンドアロンで使用されている場合、
 *          システムが有効にならない問題を修正
 *
 */

// ☢CAUTION!!☢ Don't Touch.^_^ ----------------------------------------
var Imported = Imported || {};
Imported.MOG_FastTravel = true;
var Moghunter = Moghunter || {};
Moghunter.fastTravel_Towns = [];
Moghunter.fastTravelDungeons = [];
Moghunter.fastTravelOther = [];
// ☢CAUTION!!☢ Don't Touch.^_^ ----------------------------------------


//*****************************************************************************
// ** SETUP *******************************************************************
//*****************************************************************************
// Para configurar um mapa siga o seguinte exemplo.
// マップを設定するには、次の例に従ってください。
//
// Moghunter.fastTravel_Towns[A] = {B,C,D,E,F,G,H};
//
// A - ID do ponto
// B - Nome do Mapa
// C - X-axis do ponto do mapa.
// D - Y-axis do ponto do mapa.
// E - ID do mapa para ser telepotado.
// F - X-axis do mapa a ser teleportado.
// G - Y-axis do mapa a ser teleportado.
// H - Direção. (2 - Down / 4 - Left / 6 - Right / 8 - Up)
//
// A - ポイントID
// B - マップ名
// C - マップポイントのX軸
// D - マップポイントのY軸
// E - テレポットされるマップID
// F - テレポートされるマップのX軸
// G - テレポートされるマップのY軸
// H - 方向 (2 - 下 / 4 - 左 / 6 - 右 / 8 - 上)
//
//*****************************************************************************



//===========================================================================
// ** TOWNS
//===========================================================================
Moghunter.fastTravel_Towns[1] = { name: "Marksburg", x: 265, y: 235, mapID: 13, mapX: 12, mapY: 18, direction: 8 };
Moghunter.fastTravel_Towns[2] = { name: "Hamil", x: 444, y: 900, mapID: 14, mapX: 11, mapY: 2, direction: 2 };
Moghunter.fastTravel_Towns[3] = { name: "Nia Khera", x: 1160, y: 300, mapID: 15, mapX: 2, mapY: 1, direction: 2 };
Moghunter.fastTravel_Towns[4] = { name: "Duval", x: 1360, y: 510, mapID: 16, mapX: 23, mapY: 5, direction: 4 };

//===========================================================================
// ** DUNGEONS
//===========================================================================
Moghunter.fastTravelDungeons[1] = { name: "Taitalian", x: 300, y: 900, mapID: 5, mapX: 23, mapY: 16, direction: 4 };
Moghunter.fastTravelDungeons[2] = { name: "Gandara", x: 1430, y: 590, mapID: 6, mapX: 23, mapY: 4, direction: 4 };
Moghunter.fastTravelDungeons[3] = { name: "Kakhar Ice Caverns", x: 1120, y: 240, mapID: 9, mapX: 3, mapY: 18, direction: 8 };
Moghunter.fastTravelDungeons[4] = { name: "Lobari Hollows", x: 210, y: 740, mapID: 10, mapX: 7, mapY: 7, direction: 2 };
Moghunter.fastTravelDungeons[5] = { name: "Jaia", x: 1180, y: 910, mapID: 11, mapX: 3, mapY: 1, direction: 2 };
Moghunter.fastTravelDungeons[6] = { name: "Fezebel Marsh", x: 580, y: 315, mapID: 12, mapX: 1, mapY: 7, direction: 6 };

//===========================================================================
// ** OTHER
//===========================================================================
Moghunter.fastTravelOther[1] = { name: "Alice's Magic Shop", x: 1110, y: 690, mapID: 17, mapX: 8, mapY: 11, direction: 8 };
Moghunter.fastTravelOther[2] = { name: "Gengi's Blacksmith Shop", x: 450, y: 320, mapID: 18, mapX: 15, mapY: 7, direction: 4 };
Moghunter.fastTravelOther[3] = { name: "Battle Arena", x: 825, y: 560, mapID: 19, mapX: 7, mapY: 11, direction: 8 };


//*****************************************************************************
// ** SETUP *******************************************************************
//*****************************************************************************


//===========================================================================
// ** PLUGIN PARAMETERS
//===========================================================================

Moghunter.parameters = PluginManager.parameters('MOG_FastTravel');
Moghunter.fastTravel_lastIndex = String(Moghunter.parameters['Remember Last MapID'] || "true");
Moghunter.fastTravel_playBgm = String(Moghunter.parameters['Play Bgm'] || "false");
Moghunter.fastTravel_BgmFileName = String(Moghunter.parameters['Bgm File Name'] || "Theme2");
Moghunter.fastTravel_fadeBgm = String(Moghunter.parameters['Fade Bgm'] || "true");
Moghunter.fastTravel_MapMoveSpeed = Number(Moghunter.parameters['Map Move Speed'] || 30);
Moghunter.fastTravel_fadeSpeed = Number(Moghunter.parameters['Fade Speed'] || 30);
Moghunter.fastTravel_zoomAnime = String(Moghunter.parameters['Zoom Animation'] || "true");
Moghunter.fastTravel_rotationAnime = String(Moghunter.parameters['Rotation Animation'] || "true");
Moghunter.fastTravel_CenterX = Number(Moghunter.parameters['Center X-axis'] || 0);
Moghunter.fastTravel_CenterY = Number(Moghunter.parameters['Center Y-axis'] || 0);
Moghunter.fastTravel_ListWidth = Number(Moghunter.parameters['List Width'] || 300);
Moghunter.fastTravel_ListHeight = Number(Moghunter.parameters['List Height'] || 290);
Moghunter.fastTravel_ListX = Number(Moghunter.parameters['List X-axis'] || 516);
Moghunter.fastTravel_ListY = Number(Moghunter.parameters['List Y-axis'] || 145);
Moghunter.fastTravel_ListSlide = String(Moghunter.parameters['Slide List'] || "true");
Moghunter.fastTravel_ListLayoutX = Number(Moghunter.parameters['List Layout X-axis'] || 0);
Moghunter.fastTravel_ListLayoutY = Number(Moghunter.parameters['List Layout Y-axis'] || -53);
Moghunter.fastTravel_prevSlide = String(Moghunter.parameters['Slide Description'] || "true");
Moghunter.fastTravel_Prev_X = Number(Moghunter.parameters['Description X-axis'] || 160);
Moghunter.fastTravel_Prev_Y = Number(Moghunter.parameters['Description Y-axis'] || 300);
Moghunter.fastTravel_ComA_X = Number(Moghunter.parameters['Com Town X-axis'] || 470);
Moghunter.fastTravel_ComA_Y = Number(Moghunter.parameters['Com Town Y-axis'] || 7);
Moghunter.fastTravel_ComB_X = Number(Moghunter.parameters['Com Dungeon X-axis'] || 575);
Moghunter.fastTravel_ComB_Y = Number(Moghunter.parameters['Com Dungeon Y-axis'] || 7);
Moghunter.fastTravel_ComC_X = Number(Moghunter.parameters['Com Other X-axis'] || 710);
Moghunter.fastTravel_ComC_Y = Number(Moghunter.parameters['Com Other Y-axis'] || 7);
Moghunter.fastTravel_CursorX = Number(Moghunter.parameters['Com Cursor X-Axis'] || 0);
Moghunter.fastTravel_CursorY = Number(Moghunter.parameters['Com Cursor Y-Axis'] || 0);
Moghunter.fastTravel_CursorFloat = String(Moghunter.parameters['Com Cursor Animation'] || "true");
Moghunter.fastTravel_CursorBX = Number(Moghunter.parameters['Next Cursor X-Axis'] || 0);
Moghunter.fastTravel_CursorBY = Number(Moghunter.parameters['Next Cursor Y-Axis'] || 0);
Moghunter.fastTravel_CursorBFloat = String(Moghunter.parameters['Next Cursor Animation'] || "true");
Moghunter.fastTravel_Comp_Show = String(Moghunter.parameters['Show Completion'] || "true");
Moghunter.fastTravel_Comp_X = Number(Moghunter.parameters['Completion X-Axis'] || 590);
Moghunter.fastTravel_Comp_Y = Number(Moghunter.parameters['Completion Y-Axis'] || 513);
Moghunter.fastTravel_Comp_FontSize = Number(Moghunter.parameters['Completion Font Size'] || 22);
Moghunter.fastTravelNewColor = Number(Moghunter.parameters['New Map Color'] || 6);
Moghunter.fastTravel_directionCancel = String(Moghunter.parameters['Turn Back After Cancel'] || "true");
//===========================================================================
// ** ImageManager
//===========================================================================

//==============================
// * Fast Travel
//==============================
ImageManager.loadfasttravel = function (filename) {
	return this.loadBitmap('img/fasttravel/', filename, 0, true);
};

//==============================
// * Stages
//==============================
ImageManager.loadfasttravelstages = function (filename) {
	return this.loadBitmap('img/fasttravel/stages/', filename, 0, true);
};

//===========================================================================
// ** Game_Interpreter
//===========================================================================

//==============================
// * PluginCommand
//==============================
var _mog_fastravel_pluginCommand = Game_Interpreter.prototype.pluginCommand
Game_Interpreter.prototype.pluginCommand = function (command, args) {
	_mog_fastravel_pluginCommand.call(this, command, args)
	if (command === "fast_travel") {
		SceneManager.push(SceneFastTravel);
		this.wait(10);
	} else if (command === "enable_town") {
		if ($gameSystem._fastTravelTowns[Number(args[1])]) {
			$gameSystem._fastTravelTowns[Number(args[1])][0] = true;
		};
	} else if (command === "disable_town") {
		if ($gameSystem._fastTravelTowns[Number(args[1])]) {
			$gameSystem._fastTravelTowns[Number(args[1])][0] = false;
		};
	} else if (command === "enable_dungeon") {
		if ($gameSystem._fastTravelDungeons[Number(args[1])]) {
			$gameSystem._fastTravelDungeons[Number(args[1])][0] = true;
		};
	} else if (command === "disable_dungeon") {
		if ($gameSystem._fastTravelDungeons[Number(args[1])]) {
			$gameSystem._fastTravelDungeons[Number(args[1])][0] = false;
		};
	} else if (command === "enable_other") {
		if ($gameSystem._fastTravelOther[Number(args[1])]) {
			$gameSystem._fastTravelOther[Number(args[1])][0] = true;
		};
	} else if (command === "disable_other") {
		if ($gameSystem._fastTravelOther[Number(args[1])]) {
			$gameSystem._fastTravelOther[Number(args[1])][0] = false;
		};
	};
	return true;
};

//===========================================================================
// ** Game_System
//===========================================================================

//==============================
// * Initialize
//==============================
var _mog_fastravel_gsys_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function () {
	_mog_fastravel_gsys_initialize.call(this);
	this._fastTravelTowns = [];
	this._fastTravelDungeons = [];
	this._fastTravelOther = [];
	this._fastTravelData = null;
	this._fastTravelSelection = [-1, ""];
	this._fastTravelSelected = false;
	for (var i = 0; i < Moghunter.fastTravel_Towns.length; i++) {
		this._fastTravelTowns[i] = [false, Moghunter.fastTravel_Towns[i], false];
	};
	for (var i = 0; i < Moghunter.fastTravelDungeons.length; i++) {
		this._fastTravelDungeons[i] = [false, Moghunter.fastTravelDungeons[i], false];
	};
	for (var i = 0; i < Moghunter.fastTravelOther.length; i++) {
		this._fastTravelOther[i] = [false, Moghunter.fastTravelOther[i], false];
	};
	this._fastTravelComp = (Moghunter.fastTravel_Towns.length + Moghunter.fastTravelDungeons.length + Moghunter.fastTravelOther.length) - 3;
};

//===========================================================================
// ** Window Travel List
//===========================================================================
function Window_TravelList() {
	this.initialize.apply(this, arguments);
};

Window_TravelList.prototype = Object.create(Window_Selectable.prototype);
Window_TravelList.prototype.constructor = Window_TravelList;

//==============================
// * Initialize
//==============================
Window_TravelList.prototype.initialize = function (x, y, width, height) {
	Window_Selectable.prototype.initialize.call(this, x, y, width, height);
	this._infoID = 0;
	this.activate();
	this.select(0);
	this.opacity = 0;
	this.refresh();
};

//==============================
// * data Is Avaliable
//==============================
Window_TravelList.prototype.dataIsAvailable = function (data) {
	if (!data) { return false };
	if (!data[0] || (data[0] && data[0] === false)) { return false };
	if (!data[1]) { return false };
	return true;
};

//==============================
// * data Is Avaliable
//==============================
Window_TravelList.prototype.setID = function (id) {
	this._infoID = id;
	this.select(0);
	this.refresh();
};

//==============================
// * Make Data
//==============================
Window_TravelList.prototype.makeData = function () {
	this._data = [];
	if (this._infoID === 0) {
		var dataInfo = $gameSystem._fastTravelTowns;
	} else if (this._infoID === 1) {
		var dataInfo = $gameSystem._fastTravelDungeons;
	} else {
		var dataInfo = $gameSystem._fastTravelOther;
	};
	for (var i = 0; i < dataInfo.length; i++) {
		var data = dataInfo[i + 1];
		if (this.dataIsAvailable(data)) { this._data.push(data) };
	};
};

//==============================
// * MaxCols
//==============================
Window_TravelList.prototype.maxCols = function () {
	return 1;
};

//==============================
// * MaxItems
//==============================
Window_TravelList.prototype.maxItems = function () {
	return this._data ? this._data.length : 1;
};

//==============================
// * IsCurrentItemEnabled
//==============================
Window_TravelList.prototype.item = function (i) {
	return this._data[i + 1];
};

//==============================
// * Refresh
//==============================
Window_TravelList.prototype.refresh = function () {
	this.makeData();
	this.contents.clear();
	this.createContents();
	this.contents.fontItalic = true;
	this.drawAllItems();
};

//==============================
// * DrawItem
//==============================
Window_TravelList.prototype.drawItem = function (i) {
	var rect = this.itemRect(i);
	rect.width -= this.textPadding();
	this.changeTextColor(this.normalColor());
	if (!this._data[i][2]) { this.changeTextColor(this.textColor(Moghunter.fastTravelNewColor)) }
	this.drawText(this._data[i][1].name, rect.x, rect.y, rect.width, "center");
};

//==============================
// * Process OK
//==============================
Window_TravelList.prototype.processOk = function () {
	if (this._data.length === 0) { return }
	$gameSystem._fastTravelSelected = true;
	this.deactivate();
	this.visible = false;
	if (String(Moghunter.fastTravel_fadeBgm) === "true") { AudioManager.fadeOutBgm(2); };
	SoundManager.playOk();
	this.enableMapColor();
};

//==============================
// * enable Map Color
//==============================
Window_TravelList.prototype.enableMapColor = function () {
	var dataMap = [];
	if (this._infoID === 0) {
		var dataInfo = $gameSystem._fastTravelTowns;
	} else if (this._infoID === 1) {
		var dataInfo = $gameSystem._fastTravelDungeons;
	} else {
		var dataInfo = $gameSystem._fastTravelOther;
	};
	for (var i = 0; i < dataInfo.length; i++) {
		var data = dataInfo[i];
		if (data && data[1]) {
			if (data[1].name === this._data[this._index][1].name) {
				if (this._infoID === 0) {
					$gameSystem._fastTravelTowns[i][2] = true;
				} else if (this._infoID === 1) {
					$gameSystem._fastTravelDungeons[i][2] = true;
				} else {
					$gameSystem._fastTravelOther[i][2] = true;
				};
			};
		};
	};
};

//==============================
// * isOKEnable
//==============================
Window_TravelList.prototype.isOkEnabled = function () {
	return true;
};

//===========================================================================
// ** Scene Fast Travel
//===========================================================================
function SceneFastTravel() {
	this.initialize.apply(this, arguments);
};

SceneFastTravel.prototype = Object.create(Scene_Base.prototype);
SceneFastTravel.prototype.constructor = SceneFastTravel;

//==============================
// * Initialize
//==============================
SceneFastTravel.prototype.initialize = function () {
	Scene_Base.prototype.initialize.call(this);
	this._Dataindex = 0;
	this._DataindexOld = -1;
	this._WidowindexOld = 0;
	this._np = [-1, -1];
	this._name = "";
	this._mapPos = [];
	this._needCenter = true;
	this._mapMoving = false;
	this._currentData = null;
	this._fadeTime = Math.min(Math.max(Moghunter.fastTravel_fadeSpeed, 1), 255);
	this._zoomFade = String(Moghunter.fastTravel_zoomAnime) === "true" ? true : false;
	this._rotationFade = String(Moghunter.fastTravel_rotationAnime) === "true" ? true : false;
	$gameSystem._fastTravelData = null;
	$gameSystem._fastTravelSelected = false;
	this._phase = 0;
	this._mapPos[0] = (Graphics.boxWidth / 2) + Moghunter.fastTravel_CenterX;
	this._mapPos[1] = (Graphics.boxHeight / 2) + Moghunter.fastTravel_CenterY;
	this._DataTown = this.makeData(0);
	this._DataDungeon = this.makeData(1);
	this._DataOther = this.makeData(2);
	if (String(Moghunter.fastTravel_playBgm) === "true") { this.playBgm() };
};

//==============================
// * Play Bgm
//==============================
SceneFastTravel.prototype.playBgm = function () {
	BattleManager.saveBgmAndBgs();
	var bgm = {};
	bgm.name = String(Moghunter.fastTravel_BgmFileName);
	bgm.pitch = 100;
	bgm.volume = 100;
	AudioManager.playBgm(bgm, 0);
};

//==============================
// * Create
//==============================
SceneFastTravel.prototype.create = function () {
	this._field = new Sprite();
	this.addChild(this._field);
	this.createParallax();
	this._Mapfield = new Sprite();
	this._field.addChild(this._Mapfield);
	this._field.opacity = 0
	this.createMap();
	this.createStage();
	this.createPoints();
	this.createCursorNext();
	this.createLayout();
	this.createListLayout();
	this.createListName();
	this.createCursor();
	this.createWindowList();
	this.createCompleted();
	if (String(Moghunter.fastTravel_lastIndex) === "true") {
		if ($gameSystem._fastTravelSelection[0] >= 0) { this.checkLastSelection() };
	};
};

//==============================
// * check Last Selection
//==============================
SceneFastTravel.prototype.checkLastSelection = function () {
	if ($gameSystem._fastTravelSelection[0] === 0) {
		var dataInfo = this._DataTown;
	} else if ($gameSystem._fastTravelSelection[0] === 1) {
		var dataInfo = this._DataDungeon;
	} else {
		var dataInfo = this._DataOther;
	};
	var index = -1;
	for (var i = 0; i < dataInfo.length; i++) {
		var data = dataInfo[i][1];
		if (data.name === $gameSystem._fastTravelSelection[1].name) { index = i };
	};
	if (index >= 0) {
		this._Dataindex = $gameSystem._fastTravelSelection[0];
		this._windowList.setID(this._Dataindex)
		if (index >= this._windowList.maxItems()) { index = 0 };
		this._windowList.select(index);
		this.refreshPointData();
	};
};

//==============================
// * update Fade In
//==============================
SceneFastTravel.prototype.updateFadeIn = function () {
	this._fadeTime--;
	if (this._sprite_mcursor) { this._sprite_mcursor.visible = false };
	if ($gameSystem._fastTravelSelected) {
		if (this._zoomFade && !this._snapShot) { this.createSnapShot() };
		if (this._fadeTime <= 0) { this._field.opacity -= 4 };
		if (this._snapShot) {
			this._snapShot.scale.x += 0.005;
			this._snapShot.scale.y = this._snapShot.scale.x;
			if (this._rotationFade) { this._snapShot.rotation += 0.01 };
			this._snapShot.opacity = this._field.opacity;
		};
		if (this._field.opacity <= 0) {
			$gameSystem._fastTravelSelected = false;
			this.selectMap();
		};
	} else {
		this._field.opacity -= 8;
		if (this._field.opacity <= 0) {
			SceneManager.pop();
		};
	};
	this._parallax.opacity = this._field.opacity;
};

//==============================
// * Create Snap Shot
//==============================
SceneFastTravel.prototype.createSnapShot = function () {
	this._stageprev.visible = false;
	this._windowList.deactivate();
	this._windowList.visible = false;
	this._windowList.update();
	this._snapShot = new Sprite();
	this._snapShot.bitmap = SceneManager.snap();
	this._snapShot.anchor.x = 0.5;
	this._snapShot.anchor.y = 0.5;
	this._snapShot.x = this._snapShot.bitmap.width / 2;
	this._snapShot.y = this._snapShot.bitmap.height / 2;
	this.addChild(this._snapShot);
	this._field.visible = false;
};


//==============================
// * update Fade Out
//==============================
SceneFastTravel.prototype.updateFadeOut = function () {
	this._field.opacity += 8;
	if (this._field.opacity >= 255) {
		this._phase = 1;
		this._windowList.activate();
	}
	this._parallax.opacity = this._field.opacity;
};

//==============================
// * set Center Start
//==============================
SceneFastTravel.prototype.setCenterStart = function () {
	this._needCenter = false;
	this._Mapfield.x = -this._mapPos[0];
	this._Mapfield.y = -this._mapPos[1];
	if (!this._currentData) {
		this._np = [this._map.bitmap.width / 2, this._map.bitmap.height / 2];
	} else {
		this._Mapfield.x = -this._np[0] + this._mapPos[0];
		this._Mapfield.y = -this._np[1] + this._mapPos[1];
	};
};

//==============================
// * Make Data
//==============================
SceneFastTravel.prototype.makeData = function (index) {
	var dataMap = [];
	if (index === 0) {
		var dataInfo = $gameSystem._fastTravelTowns;
	} else if (index === 1) {
		var dataInfo = $gameSystem._fastTravelDungeons;
	} else {
		var dataInfo = $gameSystem._fastTravelOther;
	};
	for (var i = 0; i < dataInfo.length; i++) {
		var data = dataInfo[i + 1];
		if (this.dataIsAvailable(data)) { dataMap.push(data) };
	};
	return dataMap;
};

//==============================
// * data Is Avaliable
//==============================
SceneFastTravel.prototype.dataIsAvailable = function (data) {
	if (!data) { return false };
	if (!data[0]) { return false };
	if (!data[1]) { return false };
	return true;
};

//==============================
// * Create Parallax
//==============================
SceneFastTravel.prototype.createParallax = function () {
	this._parallax = new TilingSprite(ImageManager.loadfasttravel("Parallax"));
	this._parallax.move(0, 0, Graphics.boxWidth, Graphics.boxHeight);
	this._field.addChild(this._parallax);
};

//==============================
// * Create Map
//==============================
SceneFastTravel.prototype.createMap = function () {
	this._map = new Sprite(ImageManager.loadfasttravel("Map"));
	this._Mapfield.addChild(this._map);
};

//==============================
// * Create Layout
//==============================
SceneFastTravel.prototype.createLayout = function () {
	this._layout = new Sprite(ImageManager.loadfasttravel("Layout"));
	this._field.addChild(this._layout);
};

//==============================
// * Create Stage
//==============================
SceneFastTravel.prototype.createStage = function () {
	this._stageprev = new Sprite();
	this._stageprev.bitmap = new Bitmap(32, 32);
	this._stageprev.x = Moghunter.fastTravel_Prev_X;
	this._stageprev.y = Moghunter.fastTravel_Prev_Y;
	this._stageprev.opacity = 255;
	this._stageprev.anchor.x = 0.5;
	this._stageprev.anchor.y = 0.5;
	this._field.addChild(this._stageprev);
};

//==============================
// * refresh Stage
//==============================
SceneFastTravel.prototype.refreshStage = function () {
	var name = String(this._currentData.name);
	this._stageprev.bitmap = ImageManager.loadfasttravelstages(name);
	if (String(Moghunter.fastTravel_prevSlide) === "true") {
		this._stageprev.x = Moghunter.fastTravel_Prev_X - 100;
		this._stageprev.opacity = 0;
	};
};

//==============================
// * update Stage
//==============================
SceneFastTravel.prototype.updateStage = function () {
	if (this._mapMoving) { return };
	if (this._stageprev.x < Moghunter.fastTravel_Prev_X) {
		this._stageprev.x += 5;
		this._stageprev.opacity += 15;
		if (this._stageprev.x >= Moghunter.fastTravel_Prev_X) {
			this._stageprev.x = Moghunter.fastTravel_Prev_X;
			this._stageprev.opacity = 255;
		};
	};
	this._stageprev.visible = !this._currentData ? false : true;
};

//==============================
// * Create Completed
//==============================
SceneFastTravel.prototype.createCompleted = function () {
	this._comp = new Sprite(new Bitmap(200, 32));
	this._comp.x = Moghunter.fastTravel_Comp_X
	this._comp.y = Moghunter.fastTravel_Comp_Y
	this._comp.bitmap.fontSize = Moghunter.fastTravel_Comp_FontSize;
	var ct = this._DataTown.length + this._DataDungeon.length + this._DataOther.length;
	var perc = Math.floor(ct / $gameSystem._fastTravelComp * 100)
	var total = ct + " / " + $gameSystem._fastTravelComp
	this._comp.bitmap.drawText(total + " (" + perc + "%" + ")", 0, 0, 200, 32, "center");
	this._field.addChild(this._comp);
	this._comp.visible = String(Moghunter.fastTravel_Comp_Show) === "true" ? true : false;
};

//==============================
// * Create List Name
//==============================
SceneFastTravel.prototype.createListName = function () {
	this._listName = [];
	this._listName[0] = new Sprite(ImageManager.loadfasttravel("ListName_A"))
	this._listName[0].x = Moghunter.fastTravel_ComA_X;
	this._listName[0].y = Moghunter.fastTravel_ComA_Y;
	this._field.addChild(this._listName[0]);
	this._listName[1] = new Sprite(ImageManager.loadfasttravel("ListName_B"))
	this._listName[1].x = Moghunter.fastTravel_ComB_X;
	this._listName[1].y = Moghunter.fastTravel_ComB_Y;
	this._field.addChild(this._listName[1]);
	this._listName[2] = new Sprite(ImageManager.loadfasttravel("ListName_C"))
	this._listName[2].x = Moghunter.fastTravel_ComC_X;
	this._listName[2].y = Moghunter.fastTravel_ComC_Y;
	this._field.addChild(this._listName[2]);
};

//==============================
// * update List Name
//==============================
SceneFastTravel.prototype.updateListName = function () {
	this.slideDown(this._listName[0], 0, Moghunter.fastTravel_ComA_Y);
	this.slideDown(this._listName[1], 1, Moghunter.fastTravel_ComB_Y);
	this.slideDown(this._listName[2], 2, Moghunter.fastTravel_ComC_Y);
};

//==============================
// * update List Name
//==============================
SceneFastTravel.prototype.slideDown = function (sprite, index, y) {
	if (this._Dataindex === index) {
		if (sprite.y < y + 20) {
			sprite.y += 4;
			if (sprite.y > y + 20) { sprite.y = y + 20 };
		};
	} else {
		if (sprite.y > y) {
			sprite.y -= 4;
			if (sprite.y < y) { sprite.y = y };
		};
	};
};

//==============================
// * Create Cursor
//==============================
SceneFastTravel.prototype.createCursor = function () {
	this._cursor = new Sprite(ImageManager.loadfasttravel("Cursor_A"));
	this._cursor.anchor.x = 0.5;
	this._cursorAni = [0, 0, 0];
	this._cursorFloat = String(Moghunter.fastTravel_CursorFloat) === "true" ? true : false;
	this._field.addChild(this._cursor);
};

//==============================
// * Update Cursor
//==============================
SceneFastTravel.prototype.updateCursor = function () {
	if (this._cursorFloat) { this.updateCursorFloat() };
	if (this._Dataindex === 0) {
		this._cursor.x = this._listName[0].x + (this._listName[0].bitmap.width / 2) + Moghunter.fastTravel_CursorX;
		this._cursor.y = this._listName[0].y + this._listName[0].bitmap.height + this._cursorAni[1] + Moghunter.fastTravel_CursorY;
	} else if (this._Dataindex === 1) {
		this._cursor.x = this._listName[1].x + (this._listName[1].bitmap.width / 2) + Moghunter.fastTravel_CursorX;
		this._cursor.y = this._listName[1].y + this._listName[1].bitmap.height + this._cursorAni[1] + Moghunter.fastTravel_CursorY;
	} else {
		this._cursor.x = this._listName[2].x + (this._listName[2].bitmap.width / 2) + Moghunter.fastTravel_CursorX;
		this._cursor.y = this._listName[2].y + this._listName[2].bitmap.height + this._cursorAni[1] + Moghunter.fastTravel_CursorY;
	};
};

//==============================
// * Update Cursor Float
//==============================
SceneFastTravel.prototype.updateCursorFloat = function () {
	this._cursorAni[3]++;
	if (this._cursorAni[3] < 3) { return };
	this._cursorAni[3] = 0;
	this._cursorAni[0]++
	if (this._cursorAni[0] < 10) {
		this._cursorAni[1]--;
	} else if (this._cursorAni[0] < 20) {
		this._cursorAni[1]++;
	} else {
		this._cursorAni[0] = 0;
		this._cursorAni[1] = 0;
	};
};

//==============================
// * Create Cursor Next
//==============================
SceneFastTravel.prototype.createCursorNext = function () {
	this._cursorB = new Sprite(ImageManager.loadfasttravel("Cursor_B"));
	this._cursorB.anchor.x = 0.5;
	this._cursorB.anchor.y = 1.0;
	this._cursorBAni = [0, 0, 0];
	this._cursorBFloat = String(Moghunter.fastTravel_CursorBFloat) === "true" ? true : false;
	this._Mapfield.addChild(this._cursorB);
};

//==============================
// * Update CursorB
//==============================
SceneFastTravel.prototype.updateCursorB = function () {
	if (this._cursorBFloat) { this.updateCursorBFloat() };
	this._cursorB.x = this._np[0] + Moghunter.fastTravel_CursorBX;
	this._cursorB.y = this._np[1] + this._cursorBAni[1] + Moghunter.fastTravel_CursorBY - 10;
	this._cursorB.visible = !this._currentData ? false : true;
};

//==============================
// * Update Cursor B Float
//==============================
SceneFastTravel.prototype.updateCursorBFloat = function () {
	this._cursorBAni[3]++;
	if (this._cursorBAni[3] < 3) { return };
	this._cursorBAni[3] = 0;
	this._cursorBAni[0]++
	if (this._cursorBAni[0] < 10) {
		this._cursorBAni[1]++;
	} else if (this._cursorBAni[0] < 20) {
		this._cursorBAni[1]--;
	} else {
		this._cursorBAni[0] = 0;
		this._cursorBAni[1] = 0;
	};
};

//==============================
// * Create Points
//==============================
SceneFastTravel.prototype.createPoints = function () {
	this._pointTown = [];
	this._pointDungeon = [];
	this._pointOther = [];
	this._pointImg = ImageManager.loadfasttravel("Points");
	this._pointNeedRefresh = true;
	for (var i = 0; i < this._DataTown.length; i++) {
		this._pointTown[i] = new Sprite(this._pointImg);
		this._pointTown[i].x = this._DataTown[i][1].x;
		this._pointTown[i].y = this._DataTown[i][1].y;
		this._pointTown[i].anchor.x = 0.5;
		this._pointTown[i].anchor.y = 0.5;
		this._Mapfield.addChild(this._pointTown[i]);
	};
	for (var i = 0; i < this._DataDungeon.length; i++) {
		this._pointDungeon[i] = new Sprite(this._pointImg);
		this._pointDungeon[i].x = this._DataDungeon[i][1].x;
		this._pointDungeon[i].y = this._DataDungeon[i][1].y;
		this._pointDungeon[i].anchor.x = 0.5;
		this._pointDungeon[i].anchor.y = 0.5;
		this._Mapfield.addChild(this._pointDungeon[i]);
	};
	for (var i = 0; i < this._DataOther.length; i++) {
		this._pointOther[i] = new Sprite(this._pointImg);
		this._pointOther[i].x = this._DataOther[i][1].x;
		this._pointOther[i].y = this._DataOther[i][1].y;
		this._pointOther[i].anchor.x = 0.5;
		this._pointOther[i].anchor.y = 0.5;
		this._Mapfield.addChild(this._pointOther[i]);
	};
};

//==============================
// * refresh Points
//==============================
SceneFastTravel.prototype.refreshPoint = function () {
	this._pointNeedRefresh = false;
	this.setFramePoint(this._pointTown, 0);
	this.setFramePoint(this._pointDungeon, 1);
	this.setFramePoint(this._pointOther, 2);
};

//==============================
// * set Frame Point
//==============================
SceneFastTravel.prototype.setFramePoint = function (sprites, index) {
	var cw = this._pointImg.width / 3;
	var ch = this._pointImg.height;
	var rg = cw * index;
	for (var i = 0; i < sprites.length; i++) {
		sprites[i].setFrame(rg, 0, cw, ch);
	};

};

//==============================
// * update Points
//==============================
SceneFastTravel.prototype.updatePoints = function () {
	if (this._pointNeedRefresh && this._pointImg.isReady()) { this.refreshPoint() };
};

//==============================
// * Create  List Layout
//==============================
SceneFastTravel.prototype.createListLayout = function () {
	this._listLayout = new Sprite(ImageManager.loadfasttravel("ListLayout"));
	this._field.addChild(this._listLayout);
};

//==============================
// * update  List Layout
//==============================
SceneFastTravel.prototype.updateListLayout = function () {
	this._listLayout.x = this._windowList.x + Moghunter.fastTravel_ListLayoutX;
	this._listLayout.y = this._windowList.y + Moghunter.fastTravel_ListLayoutY;
	this._listLayout.opacity = this._windowList.contentsOpacity;
	this._listLayout.visible = this._windowList.visible;
};

//==============================
// * Create Window List
//==============================
SceneFastTravel.prototype.createWindowList = function () {
	var w = Moghunter.fastTravel_ListWidth;
	var h = Moghunter.fastTravel_ListHeight;
	var x = Moghunter.fastTravel_ListX;
	var y = Moghunter.fastTravel_ListY;
	this._windowList = new Window_TravelList(x, y, w, h);
	this._windowList.deactivate();
	if (String(Moghunter.fastTravel_ListSlide) === "true") {
		this._windowList.x = Moghunter.fastTravel_ListX + 100;
		this._windowList.contentsOpacity = 0;
	};
	this._field.addChild(this._windowList);
	this.updateListLayout();
};

//==============================
// * update Window List
//==============================
SceneFastTravel.prototype.updateWindowList = function () {
	if (this._windowList.x > Moghunter.fastTravel_ListX) {
		this._windowList.x -= 5;
		this._windowList.contentsOpacity += 15;
		if (this._windowList.x <= Moghunter.fastTravel_ListX) {
			this._windowList.x = Moghunter.fastTravel_ListX;
			this._windowList.contentsOpacity = 255;
		};
	};
};

//==============================
// * Need Refresh Point DAta
//==============================
SceneFastTravel.prototype.needRefreshPointData = function () {
	if (this._DataindexOld != this._Dataindex) { return true };
	if (this._WidowindexOld != this._windowList._index) { return true };
	return false;
};

//==============================
// * refresh Point Data
//==============================
SceneFastTravel.prototype.refreshPointData = function () {
	this._currentData = null;
	$gameSystem._fastTravelData = null;
	this._DataindexOld = this._Dataindex;
	this._WidowindexOld = this._windowList._index;
	if (this._Dataindex === 0) {
		var data = this._DataTown;
	} else if (this._Dataindex === 1) {
		var data = this._DataDungeon;
	} else {
		var data = this._DataOther;
	};
	if (!data || (data && data.length === 0) || !data[this._WidowindexOld]) {
		return
	};
	this._name = data[this._WidowindexOld][1].name;
	this._currentData = data[this._WidowindexOld][1];
	$gameSystem._fastTravelData = data[this._WidowindexOld][1];
	this._np = [data[this._WidowindexOld][1].x, data[this._WidowindexOld][1].y];
	this.refreshStage();
};

//==============================
// * update Command
//==============================
SceneFastTravel.prototype.updateCommand = function () {
	if (Input.isRepeated('left') || Input.isRepeated('pagedown')) {
		this.nextData(-1);
	} else if (Input.isRepeated('right') || Input.isRepeated('pageup')) {
		this.nextData(1);
	} else if (Input.isTriggered('ok')) {
		if (this._currentData) {
			this._windowList.visible = false;
			this._windowList.deactivate();
			$gameSystem._fastTravelSelection = [this._Dataindex, this._currentData];
		} else {
			SoundManager.playBuzzer();
		};
	} else if (Input.isTriggered('cancel') || TouchInput.isCancelled()) {
		this.executeCancel();
	} else if (TouchInput.isTriggered()) {
		this.checkTouchOnListCom()
	};
};

//==============================
// * check Touch On List Com
//==============================
SceneFastTravel.prototype.checkTouchOnListCom = function () {
	if (this.isOnSprite(this._listName[0])) {
		this._Dataindex = 0;
		this.nextData(0);
	} else if (this.isOnSprite(this._listName[1])) {
		this._Dataindex = 1;
		this.nextData(0);
	} else if (this.isOnSprite(this._listName[2])) {
		this._Dataindex = 2;
		this.nextData(0);
	};
};

//==============================
// * is On Sprite
//==============================
SceneFastTravel.prototype.isOnSprite = function (sprite) {
	var cw = sprite.bitmap.width;
	var ch = sprite.bitmap.height;
	if (TouchInput.x < sprite.x) { return false };
	if (TouchInput.x > sprite.x + cw) { return false };
	if (TouchInput.y < sprite.y) { return false };
	if (TouchInput.y > sprite.y + ch) { return false };
	return true;
};

//==============================
// * Select Stage
//==============================
SceneFastTravel.prototype.executeCancel = function () {
	SoundManager.playCancel();
	if (String(Moghunter.fastTravel_playBgm) === "true") {
		AudioManager.stopBgm();
		BattleManager.replayBgmAndBgs();
	};
	this._phase = 2;
	this._windowList.deactivate();
	if (String(Moghunter.fastTravel_directionCancel) === "true") { this.setPlayerDirectionforCancel() };
};

//==============================
// * Set Player Direction for
//==============================
SceneFastTravel.prototype.setPlayerDirectionforCancel = function () {
	if ($gamePlayer._direction === 2) {
		$gamePlayer.setDirection(8)
	} else if ($gamePlayer._direction === 4) {
		$gamePlayer.setDirection(6)
	} else if ($gamePlayer._direction === 6) {
		$gamePlayer.setDirection(4)
	} else {
		$gamePlayer.setDirection(2)
	};
};

//==============================
// * Select Map
//==============================
SceneFastTravel.prototype.selectMap = function () {
	if (this._currentData) {
		$gameSystem._fastTravelSelection = [this._Dataindex, this._currentData];
	};
	$gameSystem._fastTravelSelected = false;
	var dir = this.setDirection(this._currentData.direction);
	$gamePlayer.reserveTransfer(this._currentData.mapID, this._currentData.mapX, this._currentData.mapY, dir, false);
	SceneManager.goto(Scene_Map);
};

//==============================
// * set Direction
//==============================
SceneFastTravel.prototype.setDirection = function (dir) {
	if (dir === 4 || dir === 6 || dir === 8) { return dir };
	return 2;
};

//==============================
// * next Data
//==============================
SceneFastTravel.prototype.nextData = function (value) {
	this._Dataindex += value;
	if (this._Dataindex > 2) { this._Dataindex = 0 };
	if (this._Dataindex < 0) { this._Dataindex = 2 };
	SoundManager.playCursor();
	this._windowList.setID(this._Dataindex);
	if (String(Moghunter.fastTravel_ListSlide) === "true") {
		this._windowList.x = Moghunter.fastTravel_ListX + 100;
		this._windowList.contentsOpacity = 0;
	};
};

//==============================
// * Update Parallax
//==============================
SceneFastTravel.prototype.updateParallax = function () {
	this._parallax.origin.x += 1;
	this._parallax.origin.y += 1;
};

//==============================
// * Update Parallax
//==============================
SceneFastTravel.prototype.updateMapPosition = function () {
	if (this.needRefreshPointData()) { this.refreshPointData() };
	this._Mapfield.x = this.mapMoveTo(this._Mapfield.x, -this._np[0] + this._mapPos[0]);
	this._Mapfield.y = this.mapMoveTo(this._Mapfield.y, -this._np[1] + this._mapPos[1]);
	if (this._Mapfield.x === (-this._np[0] + this._mapPos[0]) && this._Mapfield.y === (-this._np[1] + this._mapPos[1])) {
		this._mapMoving = false;
	} else {
		this._mapMoving = true;
	};
};

//==============================
// * Map Move To
//==============================
SceneFastTravel.prototype.mapMoveTo = function (value, real_value) {
	if (value == real_value) { return value };
	var dnspeed = 3 + (Math.abs(value - real_value) / Moghunter.fastTravel_MapMoveSpeed);
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
// * Update
//==============================
SceneFastTravel.prototype.update = function () {
	Scene_Base.prototype.update.call(this);
	if (this._needCenter) {
		if (this._map.bitmap.isReady()) { this.setCenterStart() };
		return;
	};
	if (this._phase === 1 && !$gameSystem._fastTravelSelected) { this.updateCommand() };
	if (this._phase > 0) {
		this.updateMapPosition();
		this.updateWindowList();
		this.updateListLayout();
	};
	this.updateParallax();
	this.updatePoints();
	this.updateCursor();
	this.updateCursorB();
	this.updateStage();
	this.updateListName();
	if (this._phase === 0) {
		this.updateFadeOut()
	} else if ((!this._mapMoving && $gameSystem._fastTravelSelected) || this._phase === 2) { this.updateFadeIn() };
};
