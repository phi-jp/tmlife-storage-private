/**
 * 矩形範囲をクリアしよう
 */

// canvas インスタンス生成
var canvas = tm.graphics.Canvas("#world");

// サイズをウィンドウに合わせる
canvas.resizeWindow();

// 円を描画
canvas.fillCircle(200, 200, 150);

// 指定した矩形範囲をクリア
canvas.clear(150, 150, 100, 100);
