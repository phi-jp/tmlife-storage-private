/**
 * ラインの接続部分のスタイルを設定してみよう
 */

// canvas インスタンス生成
var canvas = tm.graphics.Canvas("#world");

// サイズをウィンドウに合わせる
canvas.resizeWindow();



// 幅を設定
canvas.lineWidth = 8;

// デフォルト
canvas.strokeLines(75, 200, 100, 150, 125, 200);

// round
canvas.lineJoin = "round";
canvas.strokeLines(150, 200, 175, 150, 200, 200);

// bevel
canvas.lineJoin = "bevel";
canvas.strokeLines(225, 200, 250, 150, 275, 200);

// miter
canvas.lineJoin = "miter";
canvas.strokeLines(300, 200, 325, 150, 350, 200);


// ガイドラインを描画
canvas.lineWidth = 1;
canvas.strokeStyle = "rgba(255, 0, 0, 0.75)";
canvas.drawLine(50, 150, 375, 150);






