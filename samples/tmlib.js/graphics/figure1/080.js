/**
 * 三角形を描画しよう(塗りつぶし描画)
 */

// canvas インスタンス生成
var canvas = tm.graphics.Canvas("#world");

// サイズをウィンドウに合わせる
canvas.resizeWindow();

// 三角形を塗りつぶし描画
canvas.fillTriangle(200, 100, 100, 200, 300, 200);
