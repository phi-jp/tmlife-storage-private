/**
 * 円を描画しよう(塗りつぶし描画)
 */

// canvas インスタンス生成
var canvas = tm.graphics.Canvas("#world");

// サイズをウィンドウに合わせる
canvas.resizeWindow();

// 円を塗りつぶし描画
canvas.fillCircle(200, 200, 150);
