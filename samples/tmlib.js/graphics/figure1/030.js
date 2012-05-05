/**
 * 矩形を描画しよう(ストローク描画)
 */

// canvas インスタンス生成
var canvas = tm.graphics.Canvas("#world");

// サイズをウィンドウに合わせる
canvas.resizeWindow();

// 四角形をストローク描画
canvas.strokeRect(100, 100, 200, 100);
