/**
 * canvas のサイズを画面いっぱいにしてみよう
 */

// canvas インスタンス生成
var canvas = tm.graphics.Canvas("#world");

// 幅, 高さを指定
canvas.resizeWindow();

// 背景色を指定
canvas.clearColor("black");
