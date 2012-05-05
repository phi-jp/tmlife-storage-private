/**
 * テキストを描画しよう(ストローク描画)
 */

// canvas インスタンス生成
var canvas = tm.graphics.Canvas("#world");

// サイズをウィンドウに合わせる
canvas.resizeWindow();

// フォントを設定
canvas.font = "25px 'Consolas', 'Monaco', 'ＭＳ ゴシック'";

// テキストを塗りつぶし描画
canvas.strokeText("Time is money.", 150, 100);
