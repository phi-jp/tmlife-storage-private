function setAngle(e, angle, skew, duration) {
    e.style
        .set('transition-duration', duration+'s')
        .set('-o-transition-duration', duration+'s')
        .set('-ms-transition-duration', duration+'s')
        .set('-moz-transition-duration', duration+'s')
        .set('-webkit-transition-duration', duration+'s');
    e.style
        .set('transform', 'rotateX('+angle+'deg) skewX('+skew+'deg)')
        .set('-o-transform', 'rotateX('+angle+'deg) skewX('+skew+'deg)')
        .set('-ms-transform', 'rotateX('+angle+'deg) skewX('+skew+'deg)')
        .set('-moz-transform', 'rotateX('+angle+'deg) skewX('+skew+'deg)')
        .set('-webkit-transform', 'rotateX('+angle+'deg) skewX('+skew+'deg)');
}

var du = 100;
function show_digit(e, c1, c2) {
    setAngle(e.query('.sbox1'), 0, 0, 0);
    setAngle(e.query('.sbox2'),90, -20, 0);

    e.query('.sbox1 .halfbox' ).text = c1;
    e.query('.box1  .halfbox' ).text = c2;
    e.query('.sbox2 .halfbox' ).text = c2;
    e.query('.box2  .halfbox' ).text = c1;

    setTimeout(function() {
    setAngle(e.query('.sbox1'), 90, 20, du / 1000);
    }, 0);
    setTimeout(function() {
    setAngle(e.query('.sbox2'), 0, 0, du / 1000);
    }, du);
}


function random4() {
    var n1 = Math.floor(Math.random () * 10);
    var n2 = Math.floor(Math.random () * 10);
    var n3 = Math.floor(Math.random () * 10);
    var n4 = Math.floor(Math.random () * 10);
    var n5 = Math.floor(Math.random () * 10);
    var n6 = Math.floor(Math.random () * 10);
    var r4 = [n1, n2, n3, n4, n5, n6];
    return r4;
}

function chain(a1, a2) {
    var a = a1;
    var c = [a];
    
    if (a1 == 0 && a2 == 9 || a1 == 9 && a2 == 0) {
        c.push(a2)
    }
    else if (a1 < a2) {
        while (a != a2) {
            a = (a + 1) % 10;
            c.push(a);
        }
    }
    else {
        while (a != a2) {
            a = (a - 1) % 10;
            c.push(a);
        }
    }
    return c;
}

function show1(e, c) {
    var j = 0;
    function show_one() {
        if (j < c.length - 1) {
            show_digit(e, c[j], c[j+1]);
            j++;
            setTimeout(show_one, 300);   
        }
    }
    show_one();
}


/*
 * preload
 */
tm.preload(function() {
    tm.sound.SoundManager.add("goal", "se/goal.wav", 1);
    tm.sound.SoundManager.add("clap", "se/clap.wav", 1);
});


/*
 * main
 */
tm.main(function() {
    setupBackground();
    
    update();
    tm.setLoop(update, 1000)
});

var getLimitTime = function() {
    
    var now = new Date();
    var hours = now.getHours()*3600;
    var minutes = now.getMinutes()*60;
    var seconds = now.getSeconds();
    var limit = 86400 - (hours+minutes+seconds);
    
    return limit;
};

var secondsToHours = function(s) {
    return s/3600|0;
};

var secondsToMinuts = function(s) {
    return s/60|0;
};


var prevTime = [0, 0, 0, 0, 0, 0];
var update = function() {
    var eDigitList = tm.dom.Element().queryAll(".digit");
    var limit = getLimitTime();
    var hours = secondsToHours(limit);
    var minutes = secondsToMinuts(limit) - (60*hours);
    var seconds = limit - (hours*3600 + minutes*60);
    
    var time = [
        hours/10|0,
        hours%10,
        minutes/10|0,
        minutes%10,
        seconds/10|0,
        seconds%10,
    ];
    
    
    for (var i=0; i<6; ++i) {
        if (prevTime[i] != time[i]) {
            // var c = chain(prevTime[i], time[i])
            var c = [ prevTime[i], time[i] ];
            show1(eDigitList[i], c);
        }
    }
    
    prevTime = time;
    
    // 終了チェック
    //console.log(limit);
    if (limit == 0) {
        goal();
    }
}


var circleList = [];
var setupBackground = function() {
    var eBG = tm.dom.Element("#background");
    
    
    
    var intervalID = setInterval(function() {
        var eCircle = eBG.create("div");
        eCircle.getElement().setAttribute("class", "circle");
        
        var size = tm.util.Random.randint(20, 60);
        var x = tm.util.Random.randint(0, innerWidth-60);
        var y = tm.util.Random.randint(0, innerHeight-60);
        eCircle.absolute(x, y, size, size);
        
        var color = "hsla({0}, {1}%, {2}%, 0.85)".format(tm.util.Random.randint(0, 360), "100%", "65%");
        eCircle.backgroundColor = color;
        
        circleList.push(eCircle);
        
        
        // 半分は隠しておく
        if (circleList.length > 256) {
            // 隠す
            eCircle.visible = false;
            eCircle.style.set("opacity", 0.0);
        }
         
        if (circleList.length > 512) {
            clearInterval(intervalID);
        }
    }, 1);
};

var goal = function() {
    // main
    var main = tm.dom.Element("#main");
    main.style.set("opacity", 0.0);
    
    // main2
    var main2 = tm.dom.Element("#main2");
    main2.getElement().setAttribute("class", "open");
    
    // background
    var centerX = innerWidth/2;
    var centerY = innerHeight/2;
    
    for (var i=0,len=circleList.length; i<len; ++i) {
        var eCircle = circleList[i];
        var v = tm.geom.Vector2(eCircle.x - centerX, eCircle.y - centerY);
        //v.normalize();
        //v.mul(tm.util.Random.randint(200, 500));
        eCircle.x += v.x;
        eCircle.y += v.y;
        
        // 隠していたやつも表示する
        eCircle.visible = true;
        eCircle.style.set("opacity", 1.0);
    }
    
    //se 
    tm.sound.SoundManager.get("goal").play();
    tm.sound.SoundManager.get("clap").play();
};









