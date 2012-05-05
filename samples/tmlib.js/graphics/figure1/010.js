/**
 * 直線を描画しよう
 */

// canvas インスタンス生成
var canvas = tm.graphics.Canvas("#world");


// サイズをウィンドウに合わせる
canvas.resizeWindow();


// ラインを描画
canvas.drawLine(100, 100, 300, 200);
