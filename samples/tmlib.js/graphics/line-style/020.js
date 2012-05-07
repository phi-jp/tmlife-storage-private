/**
 * ラインキャップスタイルを設定更してみよう
 */

// canvas インスタンス生成
var canvas = tm.graphics.Canvas("#world");

// サイズをウィンドウに合わせる
canvas.resizeWindow();


// 幅を設定
canvas.lineWidth = 16;

// デフォルト
canvas.drawLine(50, 50, 400, 50);

// ラインの幅を変更
canvas.lineCap = "butt";
canvas.drawLine(50, 100, 400, 100);

// ラインの幅を変更
canvas.lineCap = "round";
canvas.drawLine(50, 150, 400, 150);

// ラインの幅を変更
canvas.lineCap = "square";
canvas.drawLine(50, 200, 400, 200);


// ガイドラインを描画
canvas.lineWidth = 1;
canvas.strokeStyle = "rgba(255, 0, 0, 0.75)";
canvas.drawLine(50, 10, 50, 250);
canvas.strokeStyle = "rgba(255, 0, 0, 0.75)";
canvas.drawLine(400, 10, 400, 250);
