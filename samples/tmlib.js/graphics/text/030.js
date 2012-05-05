/**
 * 最大幅を指定してテキストを描画しよう
 */

// canvas インスタンス生成
var canvas = tm.graphics.Canvas("#world");

// サイズをウィンドウに合わせる
canvas.resizeWindow();


// フォントを設定
canvas.font = "25px 'Consolas', 'Monaco', 'ＭＳ ゴシック'";

// 第四引数に幅を指定することでその幅に収まるように描画してくれます
canvas.fillText("Time is money.", 150, 100, 70);
