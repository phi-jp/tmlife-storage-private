/**
 * 多角形を描画しよう(ストローク描画)
 */

// canvas インスタンス生成
var canvas = tm.graphics.Canvas("#world");

// サイズをウィンドウに合わせる
canvas.resizeWindow();

// ストローク多角形描画
canvas.strokePolygon(100, 100, 50, 5);
canvas.strokePolygon(200, 100, 50, 5, 20);
canvas.strokePolygon(100, 250, 100, 8);
canvas.strokePolygon(250, 250, 25, 3);
