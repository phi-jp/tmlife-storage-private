/**
 * ラインの幅を設定してみよう
 */

// canvas インスタンス生成
var canvas = tm.graphics.Canvas("#world");

// サイズをウィンドウに合わせる
canvas.resizeWindow();

// デフォルト
canvas.drawLine(50, 50, 400, 50);

// ラインの幅を変更
canvas.lineWidth = 8;
canvas.drawLine(50, 100, 400, 100);

// ラインの幅を変更
canvas.lineWidth = 16;
canvas.drawLine(50, 150, 400, 150);

// ラインの幅を変更
canvas.lineWidth = 32;
canvas.drawLine(50, 200, 400, 200);


