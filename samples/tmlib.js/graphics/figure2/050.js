/**
 * 点線を描画しよう
 */

// canvas インスタンス生成
var canvas = tm.graphics.Canvas("#world");

// サイズをウィンドウに合わせる
canvas.resizeWindow();

// 点線描画
canvas.drawDashLine(50,  50, 400, 50);
canvas.drawDashLine(50, 100, 400, 100, 0xff00);
canvas.drawDashLine(50, 150, 400, 150, 0x8f8f);
canvas.drawDashLine(50, 200, 400, 200, 0x0202);
canvas.drawDashLine(50, 250, 400, 250, 0xf000);
canvas.drawDashLine(50, 300, 400, 350, 0x1000);
