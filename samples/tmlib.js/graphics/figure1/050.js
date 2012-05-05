/**
 * 円を描画しよう(ストローク描画)
 */

// canvas インスタンス生成
var canvas = tm.graphics.Canvas("#world");

// サイズをウィンドウに合わせる
canvas.resizeWindow();

// 円をストローク描画
canvas.strokeCircle(200, 200, 150);
