/*
 * const
 */
var DAY = 60*60*60;

/*
 * 一日の残り時間を取得
 */
var getDailyLimit = function() {
    var now     = new Date();
    
    var hours   = now.getHours() * 3600;        // 時→秒
    var minutes = now.getMinutes() * 60;        // 分→秒
    var seconds = now.getSeconds();　                            // 秒
    var elapsed_time = (hours+minutes+seconds); // 経過時間
    var limit_time   = DAY - elapsed_time;      // 明日までのリミット
    
    return limit_time;
};


/*
 * main
 */
tm.main(function() {
    // 表示更新
    var eTime = tm.dom.Element("#main .time");  // 要素取得
    eTime.html = getDailyLimit();               // 残り時間をセット
    
    // ループ処理をセット
    tm.setLoop(function() {
        // 表示更新
        eTime.html = getDailyLimit();
        // チェック
        if (eTime.html == 0) {
            alert("Congratulations see you tomorrow.");
        }
    }, 1000)
});
