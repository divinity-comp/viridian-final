Storage.prototype.setObject = function(key, value) { this.setItem(key, JSON.stringify(value)); }
Storage.prototype.getObject = function(key) { var value = this.getItem(key);return value && JSON.parse(value); }

 function setCookie(c_name,value,exdays)
{
  var exdate=new Date();
  exdate.setDate(exdate.getDate() + exdays);
  var c_value=encodeURIComponent(value) + 
    ((exdays==null) ? "" : ("; expires="+exdate.toUTCString()));
  document.cookie=c_name + "=" + c_value;
}

function getCookie(c_name)
{
 var i,x,y,ARRcookies=document.cookie.split(";");
 for (i=0;i<ARRcookies.length;i++)
 {
  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
  y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
  x=x.replace(/^\s+|\s+$/g,"");
  if (x==c_name)
  {
   return decodeURIComponent(y);
  }
 }
}
var delete_cookie = function(name) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};
function ajaxPost (url, callback,data) {
    var callback = (typeof callback == 'function' ? callback : false), xhr = null;
    try {
      xhr = new XMLHttpRequest();
    } catch (e) {
      try {
        ajxhrax = new ActiveXObject("Msxml2.XMLHTTP");
      } catch (e) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
      }
    }
    if (!xhr)
           return null;
    xhr.open("POST", url);
    xhr.onreadystatechange=function() {
      if (xhr.readyState==4 && callback) {
        callback(xhr.responseText);
      }
    }
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send(data);
    return xhr;
}
function ajaxGet (url, callback) {
    var callback = (typeof callback == 'function' ? callback : false), xhr = null;
    try {
      xhr = new XMLHttpRequest();
    } catch (e) {
      try {
        ajxhrax = new ActiveXObject("Msxml2.XMLHTTP");
      } catch (e) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
      }
    }
    if (!xhr)
           return null;
    xhr.open("POST", url);
    xhr.onreadystatechange=function() {
      if (xhr.readyState==4 && callback) {
        callback(xhr.responseText);
      }
    }
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send();
    return xhr;
}
function getWidth() {
    var body = document.body,
    html = document.documentElement;
    return Math.max( body.offsetWidth, 
                       html.clientWidth, html.offsetWidth,window.outerWidth);
}
function getHeight() {
    var body = document.body,
    html = document.documentElement;

    return Math.max(html.clientHeight);
}
function pageChange(url, pageAnimation, runScript) {
    ajaxGet(url,
        function(response) {
            var divContent = document.createElement("div");
            divContent.innerHTML = response;
            divContent.innerHTML = divContent.getElementsByClassName("app")[0].innerHTML;
        
            switch (pageAnimation) {
              case "fade":
                TweenMax.to(document.getElementsByClassName("app")[0].children, 0.5, {opacity:0, ease: Circ.easeOut,onComplete:function() {
                    document.getElementsByClassName("app")[0].innerHTML = divContent.innerHTML;
                    runScript();
                    
                    TweenMax.fromTo(document.getElementsByClassName("app")[0].children, 0.5, {opacity:0}, {opacity:1, ease: Circ.easeIn});
                }});
                break;
              case "popup":
                    document.getElementById("popup").innerHTML = divContent.innerHTML;
                    document.getElementById("popup").style.display = "block";
                    TweenMax.fromTo(document.getElementById("popup"), 0.5, {opacity:0}, {opacity:1, ease: Circ.easeIn});
                    runScript();

                break;
              default:
                TweenMax.to(document.getElementsByClassName("app")[0].children, 1, {opacity:0, ease: Circ.easeOut,onComplete:function() {
                    document.getElementsByClassName("app")[0].innerHTML = divContent.innerHTML;
                    runScript();
                    TweenMax.fromTo(document.getElementsByClassName("app")[0].children, 1, {opacity:0}, {opacity:1, ease: Circ.easeIn});
                }});
            }
        }
    );
}
function closePopup() {
    TweenMax.fromTo(document.getElementById("popup"), 0.5, {opacity:1}, {opacity:0, ease: Circ.easeIn,onComplete:function() {
        document.getElementById("popup").style.display = "none";
        document.getElementById("popup").innerHTML = "";
    }});
}
function openBotMenu() {
    var mainBotButton = idc("mainBotButton");
    var botMenu = idc("botMenu");
    if(mainBotButton.getAttribute("open") == "true") {
        mainBotButton.setAttribute("open", "false");
        TweenMax.fromTo(botMenu, 0.5, {opacity:1}, {opacity:0, ease: Circ.easeIn,onComplete:function() {
            botMenu.style.display = "none";
        }});
    }
    else {
        botMenu.style.display = "block";
        mainBotButton.setAttribute("open", "true");
        TweenMax.fromTo(botMenu, 0.5, {opacity:0}, {opacity:1, ease: Circ.easeIn,onComplete:function() {
        }});
    }
}