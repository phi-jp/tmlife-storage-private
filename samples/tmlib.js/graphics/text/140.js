/**
 * テキストのベースラインをemスクエアの下端にしてみよう
 */

// canvas インスタンス生成
var canvas = tm.graphics.Canvas("#world");

// サイズをウィンドウに合わせる
canvas.resizeWindow();

// 基準点を描画
var baseX = 50;
var baseY = 100;
canvas.fillStyle = "red";
canvas.fillCircle(baseX, baseY, 4);

// 基準線を描画
canvas.strokeStyle = "red";
canvas.drawLine(baseX, baseY, baseX+300, baseY);


// フォントを設定
canvas.font = "25px 'Consolas', 'Monaco', 'ＭＳ ゴシック'";

// テキストを塗りつぶし描画
canvas.fillStyle = "black";
canvas.textBaseline = "bottom";
canvas.fillText("時は金なり", baseX, baseY);
