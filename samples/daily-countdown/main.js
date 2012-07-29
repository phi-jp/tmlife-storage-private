/*
 * main
 */
tm.main(function() {
    var eTime = tm.dom.Element("#main .time");
    eTime.html = getDailyLimit();
    
    tm.setLoop(function() {
        eTime.html = getDailyLimit();
        if (eTime.html == 0) {
            alert("Congratulations see you tomorrow.");
        }
    }, 1000)
});


/*
 * 一日の残り時間を取得
 */
var getDailyLimit = function() {
    var now = new Date();
    var hours = now.getHours() * 3600;
    var minutes = now.getMinutes() * 60;
    var seconds = now.getSeconds();
    var limit = 86400 - (hours+minutes+seconds);
    
    return limit;
};
