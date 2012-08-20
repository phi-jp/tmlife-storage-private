
/*
 * gobal
 */
var gui             = null;
var boxState        = null;
var borderStateList = [];


/*
 * main
 */
tm.main(function() {
    
    setupGUI();
    
    refresh();

});


/*
 * GUI をセットアップ
 */
var setupGUI = function() {
    if (window.dat == undefined ) { return ; }
    
    gui = new dat.GUI();
    
    gui.add(window, "show");
    
    boxState = {
        width: 200,
        height: 100,
        backgroundColor: "#222222",
    };
    gui.add(boxState, "width", 0, 1024, 1).onChange(refresh);
    gui.add(boxState, "height", 0, 1024, 1).onChange(refresh);
    gui.addColor(boxState, "backgroundColor").onChange(refresh);
    
    var borderFolder = gui.addFolder("border");
    borderFolder.open();
    
    var nameList = ["all", "top", "right", "bottom", "left"];
    for (var i=0; i<5; ++i) {
        var border_state = BorderState(nameList[i]);
        var folder = createBorderGUI(borderFolder, border_state);
        borderStateList[i] = border_state;
    }
};


/*
 * ボーダー用 GUI 生成
 */
var createBorderGUI = function(parentFolder, border_state) {
    var folder = parentFolder.addFolder(border_state.name);
    
    folder.add(border_state, "width", 0, 64, 1).onChange(refresh);
    folder.add(border_state, "style", ["none", "hidden", "solid", "double", "groove", "ridge", "inset", "outset", "dashed", "dotted"]).onChange(refresh);
    folder.addColor(border_state, "color").onChange(refresh);
    
    return folder;
};


/*
 * 表示更新
 */
var refresh = function() {
    var borderBox = tm.dom.Element("#border-box");
    
    borderBox.style.set("width", boxState.width+"px");
    borderBox.style.set("height", boxState.height+"px");
    borderBox.backgroundColor = boxState.backgroundColor;
    
    if (this.object && this.object.name == "all") {
        borderBox.style.set("border", borderStateList[0].toString());
    }
    else {
        borderBox.style.set("borderTop", borderStateList[1].toString());
        borderBox.style.set("borderRight", borderStateList[2].toString());
        borderBox.style.set("borderBottom", borderStateList[3].toString());
        borderBox.style.set("borderLeft", borderStateList[4].toString());
    }
};


/*
 * 表示
 */
var show = function() {
    
};


/*
 * ボーダーステートクラス
 */
var BorderState = tm.createClass({
    init: function(name) {
        this.name  = name;
        
        this.style = "groove";
        this.width = 10;
        this.color = "#aaaaaa";
    },
    
    toString: function() {
        return "{style} {width}px {color}".format(this);
    }
});















