/**
 * 星型多角形を描画しよう(ストローク描画)
 */

// canvas インスタンス生成
var canvas = tm.graphics.Canvas("#world");

// サイズをウィンドウに合わせる
canvas.resizeWindow();

// 塗りつぶしスター描画
canvas.strokeStar(100, 100, 50, 5);
canvas.strokeStar(200, 100, 50, 5, 0.8);
canvas.strokeStar(100, 250, 100, 8, 0.4);
canvas.strokeStar(250, 250, 25, 3, 0.1);
