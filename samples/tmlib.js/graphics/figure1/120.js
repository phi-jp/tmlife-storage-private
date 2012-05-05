/**
 * クリッピングしてみよう
 */

// canvas インスタンス生成
var canvas = tm.graphics.Canvas("#world");

// サイズをウィンドウに合わせる
canvas.resizeWindow();

// クリップする領域パスを作成
canvas.rect(60, 60, 200, 200);
canvas.clip();

// 四角形を描画
canvas.fillCircle(200, 200, 150);
