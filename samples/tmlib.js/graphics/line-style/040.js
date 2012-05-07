/**
 * ラインのマイター限界比率を設定してみよう
 */

// canvas インスタンス生成
var canvas = tm.graphics.Canvas("#world");

// サイズをウィンドウに合わせる
canvas.resizeWindow();



// 幅を設定
canvas.lineWidth = 8;
canvas.lineJoin = "miter";

// デフォルト(10)
canvas.strokeLines(75, 200, 100, 150, 125, 200);

// 4
canvas.miterLimit = 4;
canvas.strokeLines(150, 200, 175, 150, 200, 200);

// 2
canvas.miterLimit = 2;
canvas.strokeLines(225, 200, 250, 150, 275, 200);

// 1
canvas.miterLimit = 1;
canvas.strokeLines(300, 200, 325, 150, 350, 200);


// ガイドラインを描画
canvas.lineWidth = 1;
canvas.strokeStyle = "rgba(255, 0, 0, 0.75)";
canvas.drawLine(50, 150, 375, 150);
