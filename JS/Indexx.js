/******************************************************************************
* filename: index.js
* Include Modul Scripting


*******************************************************************************/
SKIN_PATH = "/Skins/default/";

function resrt(str) {

    str = str.toLocaleString().replace("", "");
    str = str.toLocaleString().replace("& ", "&amp; ");
    str = str.toLocaleString().replace(" ' ", "&#39; ");
    str = str.toLocaleString().replace("alert", "&#34; ");
    str = str.toLocaleString().replace("script", "&#34; ");
    str = str.toLocaleString().replace(" < ", "&lt");
    str = str.toLocaleString().replace("> ", "&gt");
    str = str.toLocaleString().replace("where", "$1h&#101;re ");
    str = str.toLocaleString().replace("select", "$1el&#101;ct ");
    str = str.toLocaleString().replace("insert", "$1ns&#101;rt ");
    str = str.toLocaleString().replace("create", "$1r&#101;ate ");
    str = str.toLocaleString().replace("drop", "$1ro&#112; ");
    str = str.toLocaleString().replace("alter", "$1lt&#101;r ");
    str = str.toLocaleString().replace("delete", "$1el&#101;te ");
    str = str.toLocaleString().replace("update", "$1p&#100;ate ");
    str = str.toLocaleString().replace("and", "$1h&#101;nd ");
    str = str.toLocaleString().replace("</title>", "$1h&#101;nd ");
    str = str.toLocaleString().replace("</head>", "$1h&#101;nd ");
    str = str.toLocaleString().replace("</body>", "$1h&#101;nd ");

}

/********************
* 根据key获取 ajax对象节点值getAjaxVal
* xMsg : xml对象
* key : 节点的属性key
********************/
function gav(xMsg, key) {
    var jMsg = $(xMsg);
    var s = $(jMsg.find("node[key=" + key + "]")).text();
    return s;
}
//是否显示在线客服
function showIM(res) {
    if ($("#bodd").html() != "") {
        if (res == "True") {
            $("#bodd").show();
            $("#kefubtn").hide();
            $("#divOranIm").show();
        }
        else {
            $("#bodd").hide();
            $("#kefubtn").show();
            $("#divOranIm").hide();
        }
    }
}


function $j(elmId) { return $("#" + elmId); }
function $v(elmId, val) {
    if (val == null) {
        var o = $j(elmId).attr("value");
        if (o == null || o == undefined)
            return "";
        return o;
    } else {
        return $j(elmId).attr("value", val);
    }
}
function $tv(elmId) { return $.trim($v(elmId)); }


//邮件订阅
function subscription(src, elmId) {
    if (elmId == null) {
        elmId = "txtSubscriptionEmail";
    }
    var _email = $.trim($j(elmId).val());
    var ptn = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    if (_email.length == 0) {
        $a("E-Mail 不可为空");
        $j(elmId).focus();
        return false;
    }
    if (!ptn.test(_email)) {
        $a("E-Mail 格式错误。");
        $j(elmId).focus();
        return false;
    }
    showProc(src);
    $.post("/ajax.ashx?action=subscription&t=" + Math.random(), {
        email: _email
    }, function (msg) {
        var sta = gav(msg, "state");
        var sMsg = gav(msg, "msg");
        if (sta == "1") {
            $a(sMsg, 1);
        } else {
            $a(sMsg);
        }
        showProc(src, false);
    });
}

function showProc(src, show) {
    var oImg = $j("imgProc");
    if (show == null)
        show = true;
    if (show) {
        $(src).hide();
        if (oImg.length > 0) {
            oImg.remove();
        }
        $("<img src='" + SKIN_PATH + "img/processing.gif' id='imgProc' alt='正在处理' />").insertAfter(src);
    } else {
        $(src).show();
        oImg.remove();
    }
}
function hideDdl(cntrId) {
    var arrTags = ["select", "iframe", "applet", "object"];
    var jCntr;
    if (cntrId != null) {
        jCntr = $j(cntrId);
    } else {
        jCntr = $(document.body);
    }
    for (var i = 0; i < arrTags.length; ++i) {
        jCntr.find(arrTags[i]).css("visibility", "hidden");
    }

}
/********************
* 显示一个全屏灰度背景
* elmId : 元素ID或元素
********************/

function setCM(elmId, speed) {
    var jElm;
    if (typeof (elmId).toString().toLowerCase() == "string") {
        jElm = $j(elmId);
    } else {
        jElm = $(elmId);
    }
    if (speed == null) {
        speed = 80;
    }
    var h = jElm.height() / 2;
    var w = jElm.width() / 2;
    var $w = $(window);
    var top = $w.height() / 2 + $w.scrollTop();
    //jElm.css({ "top": top+"px", "margin-top" : "0px !important", "left": "50%", "margin-left": "-" + w + "px" });
    jElm.css({ top: top + "px", marginTop: "0px", left: "50%", marginLeft: (-w) + "px" });
    var isIE = navigator.userAgent.toUpperCase().indexOf("MSIE") == -1 ? false : true;

    $w.scroll(function () {
        var top = $w.height() / 2 + $w.scrollTop();
        jElm.css({ 'top': top + 'px' });
    });
    //if(isIE){
    jElm.css({ "position": "absolute", "z-index": "999" });
    //    }else{
    //        jElm.css({ "position": "fixed", "z-index": "999"});
    //    }
    jElm.fadeIn(speed);
}

function setCMS(elmId, speed) {
    var jElm;
    if (typeof (elmId).toString().toLowerCase() == "string") {
        jElm = $j(elmId);
    } else {
        jElm = $(elmId);
    }
    if (speed == null) {
        speed = 80;
    }
    var h = jElm.height() / 2;
    var w = jElm.width() / 2;
    var height = document.documentElement.scrollTop;
    if (height > 100) {
        jElm.css({ "top": "50%", "margin-top": "-" + h + "px", "left": "50%", "margin-left": "-" + w + "px" });
    }
    else {
        h = 200;
        jElm.css({ "margin-top": "-" + h + "px", "left": "50%", "margin-left": "-" + w + "px" });
    }

    jElm.css({ "position": "absolute", "z-index": "999" });
    jElm.fadeIn(speed);
}
/********************
* 重置一个层为绝对居中于窗口的位置
* elmId : 元素ID或元素
********************/
function relocation(elmId) {
    var jElm;
    if (typeof (elmId).toString().toLowerCase() == "string") {
        jElm = $j(elmId);
    } else {
        jElm = $(elmId);
    }
    if (jElm.length == 0) {
        return;
    }

    var dd = document.documentElement;
    var t = (dd.scrollTop - (jElm.height() / 2) + "px");
    jElm.css({ "margin-top": t/*, "left": l */ });
}

/********************
* 隐藏下拉框函数
********************/
function showDdl() {
    var arrTags = ["select", "iframe", "applet", "object"];
    for (var i = 0; i < arrTags.length; ++i) {
        $(arrTags[i]).css("visibility", "visible");
    }
}


//用户登陆
function LoginCheck(_username, _password) {
    if (_username == undefined || _username.length == 0) {
        $a("请输入用户名", "错误提示", "txtUsername");
        return;
    }
    if (_password == undefined || _password.length == 0) {
        $a("请输入密码", "错误提示", "txtPassword");
        return;
    }
    $.post("/ajax.ashx?action=logincheck&t=" + Math.random(), {
        username: _username,
        password: _password
    },
       function (msg) {
           if (gav(msg, "state") == "1") {
               $a(gav(msg, "msg"), null, null, null, null, function () {
                   window.location.href = location.href + "?t=" + Math.random();
               });
               //window.location.href = url;
           }
           else {
               $a(gav(msg, "msg"));
           };
       });
}


function SearchObjectByGet(FieldList, url, getUrlOnly) {
    if (getUrlOnly == null) {
        getUrlOnly = false;
    }
    var newUrl = GetSearchURL(FieldList, url);
    if (getUrlOnly) {
        return newUrl;
    }
    window.location.href = newUrl;
}

//根据字段列表获取查询页面路径字符串
//FieldList格式：控件ID名称,查询字段名称|控件ID名称1,查询字段名称1|.. 
function GetSearchURL(FieldList, URL) {
    //1\定义变量
    if (URL == null) {
        URL = getIntactRawUrl();
    }

    //2\循环把变量列表取出来,组合成URL
    var TempFieldList = FieldList.split("|");
    for (var i = 0; i < TempFieldList.length; i++) {
        //1>寻找控件
        var control1 = TempFieldList[i].split(",");
        var controlname;
        var control = document.getElementById(control1[0]);
        if (control1.length == 2) { controlname = control1[1]; } else { controlname = control1[0]; }
        if (control != null) {
            //2>取出控件的值
            var controlvalue = control.value;
            //3>设置URL
            if (controlvalue != null) {
                URL += "&" + controlname + "=" + encodeURIComponent(controlvalue);
            }
        }
    }
    return URL;
}
function getIntactRawUrl() {
    var path = location.href;
    var pos;
    pos = path.lastIndexOf('#');
    path = path.substring(0, pos);
    return path;
}

/********************
* 增加书签
* url : URL
* title : 收藏项目的标题
********************/
function addBookmark(url, title) {
    if (window.sidebar) {
        window.sidebar.addPanel(title, url, "");
    } else if (document.all) {
        window.external.AddFavorite(url, title);
    } else if (window.opera && window.print) {
        return true;
    }
}

//加入收藏
function addBookmark() {
    var title = document.title;
    var url = document.URL;
    try {
        window.external.addFavorite(url, title);
    }
    catch (e) {
        try {
            window.sidebar.addPanel(title, url, "");
        }
        catch (e) {
            alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加");
        }
    }
}

$(function () {
    document.onkeydown = keyDown;
    function keyDown(e) {
        enterHandler(e);
    }
    function enterHandler(event) {
        var keynum;
        if (window.event) // IE  
        {
            keynum = window.event.keyCode
        }
        else if (event.which) // Netscape/Firefox/Opera  
        {
            keynum = event.which
        }
        if (keynum == 13) {
            xuanze();
            if (window.event) {
                window.event.returnValue = false;
            }
            else {
                event.preventDefault();  //for firefox  
            }
        }
    }
});


   jQuery(document).ready(function ($) {
       action();
   });