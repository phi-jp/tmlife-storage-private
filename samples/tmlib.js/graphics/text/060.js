/**
 * テキストを右揃えにしてみよう(end version)
 */

// canvas インスタンス生成
var canvas = tm.graphics.Canvas("#world");

// サイズをウィンドウに合わせる
canvas.resizeWindow();


// 基準点を描画
var baseX = 200;
var baseY = 100;
canvas.fillStyle = "red";
canvas.fillCircle(baseX, baseY, 4);


// フォントを設定
canvas.font = "25px 'Consolas', 'Monaco', 'ＭＳ ゴシック'";

// テキストを塗りつぶし描画
canvas.fillStyle = "black";
canvas.textAlign = "end";
canvas.fillText("Time is money", baseX, baseY);
