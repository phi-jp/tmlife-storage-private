/**
 * 矩形を描画しよう(塗りつぶし描画)
 */

// canvas インスタンス生成
var canvas = tm.graphics.Canvas("#world");

// サイズをウィンドウに合わせる
canvas.resizeWindow();

// 四角形を塗りつぶし描画
canvas.fillRect(100, 100, 200, 100);
