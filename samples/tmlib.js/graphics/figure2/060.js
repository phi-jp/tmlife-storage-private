/**
 * ラインズを描画しよう(塗りつぶし描画)
 */

// canvas インスタンス生成
var canvas = tm.graphics.Canvas("#world");

// サイズをウィンドウに合わせる
canvas.resizeWindow();

// ラインズの塗りつぶし描画
canvas.fillLines(
    315, 169, 108, 158, 311, 299, 190, 304, 246, 32,
    232, 114, 244, 290, 20, 259, 180, 247, 175, 148,
    181, 146, 268, 174, 233, 288, 266, 113, 64, 141,
    85, 90
);
