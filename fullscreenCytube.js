$(document).ready(function(){
    $("body").css("overflow-x", "hidden") 
    $("#videowrap-header").prepend("<span class='glyphicon glyphicon-resize-full' title='Fullscreen' id='fullscreenToggle'></span>");
    $("#currenttitle").css("color","black").css("background-color","black").hover(function(){
        $(this).css("color","white").css("background-color","none")
    }, function(){
        $(this).css("color","black").css("background-color","black")
    })
    $("#fullscreenToggle").css("float","right").css("margin-left",".3%").css("margin-right",".3%").css("margin-top","1px").css("cursor","pointer").click(function(){
        var fullscreenFlag = getLocal("customFullscreen")
        setLocal("customFullscreen", !fullscreenFlag)
        toggleFullscreen()
    });
    toggleFullscreen()

});

function toggleFullscreen(){
    var fullscreenFlag = getLocal("customFullscreen")
    if(fullscreenFlag){
        loadFullscreen()
    } else{
        unloadFullscreen()
    }
}

function unloadFullscreen(){
    $("#chatwrap").detach().prependTo("#main").css("width","")
    $("#videowrap").css("width","");
    $(".navbar").css("display","")
    $("#mainpage").css("padding-top","")
    $("#resize-video-smaller").css("display","")
    $("#resize-video-larger").css("display","")
    $("#fullscreenToggle").removeClass("glyphicon-resize-small").addClass("glyphicon-resize-full")
}

function loadFullscreen(){
    $("#chatwrap").detach().appendTo("#leftpane-inner").css("width","100%");
    $("#videowrap").css("width","99vw");
    $(".navbar").css("display","none")
    $("#mainpage").css("padding-top","0")
    $("#resize-video-smaller").css("display","none")
    $("#resize-video-larger").css("display","none")
    $("#fullscreenToggle").removeClass("glyphicon-resize-full").addClass("glyphicon-resize-small")
}

function getLocal(key, initial = false) {
    let val = window.localStorage.getItem(key)
    if (val === undefined) return initial
    try {
        return JSON.parse(val)
    } catch (e) {
        return val
    }
}

function setLocal(key, value) {
    if (typeof value === "object" || Array.isArray(value)) {
        window.localStorage.setItem(key, JSON.stringify(value))
    } else {
        window.localStorage.setItem(key, value)
    }
}
