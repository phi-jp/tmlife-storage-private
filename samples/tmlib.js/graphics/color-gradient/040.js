/**
 * 円形グラデーションを指定してみよう
 */

// canvas インスタンス生成
var canvas = tm.graphics.Canvas("#world");

// サイズをウィンドウに合わせる
canvas.resizeWindow();



// 円形グラデーションクラス生成
var gradient = tm.graphics.RadialGradient(150, 150, 0, 150, 150, 100);
gradient.addColorStop(0.0, "hsl(  0, 75%, 50%)");
gradient.addColorStop(0.5, "hsl(120, 75%, 50%)");
gradient.addColorStop(1.0, "hsl(240, 75%, 50%)");
canvas.setGradient(gradient);

canvas.fillCircle(150, 150, 100);



// 円形グラデーションクラス生成
gradient = tm.graphics.RadialGradient(300, 300, 0, 300, 300, 100);
gradient.addColorStopList([
    { offset: 0.0, color: "hsla(  0, 75%, 50%, 1.0)" },
    { offset: 0.5, color: "hsla(120, 75%, 50%, 1.0)" },
    { offset: 0.8, color: "hsla(240, 75%, 50%, 0.5)" },
    { offset: 1.0, color: "hsla(240, 75%, 50%, 0.0)" },
]);
canvas.setGradient(gradient);

canvas.fillCircle(300, 300, 100);
