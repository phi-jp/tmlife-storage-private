/**
 * 多角形を描画しよう(塗りつぶし描画)
 */

// canvas インスタンス生成
var canvas = tm.graphics.Canvas("#world");

// サイズをウィンドウに合わせる
canvas.resizeWindow();

// 塗りつぶし多角形描画
canvas.fillPolygon(100, 100, 50, 5);
canvas.fillPolygon(200, 100, 50, 5, 20);
canvas.fillPolygon(100, 250, 100, 8);
canvas.fillPolygon(250, 250, 25, 3);
