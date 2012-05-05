/**
 * 円弧を描画しよう(ストローク描画)
 */

// canvas インスタンス生成
var canvas = tm.graphics.Canvas("#world");

// サイズをウィンドウに合わせる
canvas.resizeWindow();

// 円弧をストローク描画
canvas.strokeArc(200, 200, 150, 0, 225*Math.PI/180, false);
