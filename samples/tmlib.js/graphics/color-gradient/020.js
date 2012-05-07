/**
 * ストロークスタイルを指定してみよう
 */

// canvas インスタンス生成
var canvas = tm.graphics.Canvas("#world");

// サイズをウィンドウに合わせる
canvas.resizeWindow();


// rgb 値で塗りつぶしスタイルを指定
canvas.strokeStyle = "rgb(255, 0, 0)";
canvas.strokeRect(10, 10, 100, 100);

// rgba 値で塗りつぶしスタイルを指定
canvas.strokeStyle = "rgb(0, 255, 0)";
canvas.strokeRect(120, 10, 100, 100);

// hex 値で塗りつぶしスタイルを指定
canvas.strokeStyle = "#0000ff";
canvas.strokeRect(230, 10, 100, 100);

// hsl 値で塗りつぶしスタイル指定
canvas.strokeStyle = "hsl(0, 75%, 50%)";
canvas.strokeRect(10, 120, 100, 100);
canvas.strokeStyle = "hsl(120, 75%, 50%)";
canvas.strokeRect(120, 120, 100, 100);
canvas.strokeStyle = "hsl(240, 75%, 50%)";
canvas.strokeRect(230, 120, 100, 100);
