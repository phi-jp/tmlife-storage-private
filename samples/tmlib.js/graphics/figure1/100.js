/**
 * 点を描画しよう
 */

// canvas インスタンス生成
var canvas = tm.graphics.Canvas("#world");

// サイズをウィンドウに合わせる
canvas.resizeWindow();

// 点を描画
canvas.drawPoint(100, 100);
canvas.drawPoint(320, 100);
canvas.drawPoint(320, 200);
canvas.drawPoint(200, 200);
canvas.drawPoint(200, 400);
