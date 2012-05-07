/**
 * 線形グラデーションを指定してみよう
 */

// canvas インスタンス生成
var canvas = tm.graphics.Canvas("#world");

// サイズをウィンドウに合わせる
canvas.resizeWindow();

// 線形グラデーションクラス生成
var gradient = tm.graphics.LinearGradient(10, 10, 200, 200);
gradient.addColorStop(0.0, "hsl(  0, 75%, 50%)");
gradient.addColorStop(0.5, "hsl(120, 75%, 50%)");
gradient.addColorStop(1.0, "hsl(240, 75%, 50%)");
canvas.setGradient(gradient);

canvas.fillRect(10, 10, 200, 200);

// 線形グラデーションクラス生成
gradient = tm.graphics.LinearGradient(220, 10, 420, 200);
gradient.addColorStopList([
    { offset: 0.0, color: "hsla(  0, 75%, 50%, 1.0)" },
    { offset: 0.3, color: "hsla(120, 75%, 50%, 1.0)" },
    { offset: 0.7, color: "hsla(240, 75%, 50%, 0.5)" },
    { offset: 1.0, color: "hsla(  0, 75%, 50%, 0.0)" },
]);
canvas.setGradient(gradient);

canvas.fillRect(220, 10, 200, 200);
