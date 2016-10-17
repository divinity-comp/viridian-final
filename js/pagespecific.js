function loginMainSetup() {
    if( window.localStorage.getItem("data")) {
        idc("adjustsignUp").style.display = "block";
        idc("adjustsign").style.display = "none";
        idc("signUp").style.display = "none";
        idc("signIn").style.display = "block";
    }
}
function checkForgetPassword() {
    if(hasInternet() == true) { 
        pageChange("pages/loading.html", "popup", function() {
                var messageArray = ["Just making everything secure","Server sending email","please wait"]; 
                               loadingScreenStart(messageArray);
        });
        ajaxPost(
        "http://www.network-divinity.com/viridian/resetPassword.php", 
        function (responseView) {
            if(responseView == "success") {
                alert("Password reset link has been sent to your email - it will only last 24 hours");
                pageChange("pages/login.html", "fade", function() {
                });
            }
            else {
                alert("Password could not be reset " + responseView);
            }
            closePopup();
        },
       'password=' + document.getElementById("newPass").value + "&email=" + document.getElementById("email").value );
       
    }
    else {
        alert("please connect to the internet");
    }
}
function loginMenu() {
                   
    displayMenu("", false, "",function() {
    });
    displayBotMenu("", false);
}
function selectionScreen() {
    updateToServer();
    var tl = new TimelineMax();
    window.localStorage.setItem("logged", "true");
    
    var allabout = window.localStorage.getItem("allabout");
    var setupstate = window.localStorage.getItem("setupstate");
    if(allabout == 8) {
        allabout = "true";
    }
    if(setupstate == 8) {
        setupstate = "true";
    }
    displayBotMenu("", false);
    displayMenu("", true, "login.html",function() {
        loginMenu();loginMainSetup();
    },"false");
    if(allabout == "true" && setupstate == "true") {
        tl.fromTo(document.getElementsByClassName("bluecirc")[0], 1.5, {y:1000,zIndex:2,scale:0}, {scale:1,y:0, ease: Circ.easeOut},0.5)
        .fromTo(document.getElementsByClassName("bluecirc")[0], 0.5, {scale:1}, {opacity:0.5,scale:1, ease: SlowMo.ease.config(0.1, 0.7, true)},1)
        .fromTo(document.getElementsByClassName("bluecirc")[0], 0.5, {opacity:0.5}, {opacity:1, ease: Circ.easeOut},1)
        .fromTo(document.getElementsByClassName("bluecirc")[1], 0.5, {scale:0,zIndex:1}, {scale:1, ease: Back.easeOut.config(1.7)},1.4)
        .fromTo(document.getElementsByClassName("bluecirc")[1], 0.5, {opacity:0,y:-100}, {y:0,opacity:1, ease: Circ.easeOut},1.4)
        .fromTo(document.getElementsByClassName("bluecirc")[2], 0.5, {scale:0,zIndex:0}, {scale:1, ease: Back.easeOut.config(1.7)},1.9)
        .fromTo(document.getElementsByClassName("bluecirc")[2], 0.5, {opacity:0,y:-100}, {y:0,opacity:1, ease: Circ.easeOut},1.9);
    }
    else if(allabout == "true") {
        tl.fromTo(document.getElementsByClassName("bluecirc")[0], 1.5, {y:1000,zIndex:2,scale:0}, {scale:1,y:0, ease: Circ.easeOut},0.5)
        .fromTo(document.getElementsByClassName("bluecirc")[0], 0.5, {scale:1}, {opacity:0.5,scale:1, ease: SlowMo.ease.config(0.1, 0.7, true)},1)
        .fromTo(document.getElementsByClassName("bluecirc")[0], 0.5, {opacity:0.5}, {opacity:1, ease: Circ.easeOut},1)
        .fromTo(document.getElementsByClassName("bluecirc")[1], 0.5, {scale:0,zIndex:1}, {scale:1, ease: Back.easeOut.config(1.7)},1.4)
        .fromTo(document.getElementsByClassName("bluecirc")[1], 0.5, {opacity:0,y:-100}, {y:0,opacity:1, ease: Circ.easeOut},1.4)
        .fromTo(document.getElementsByClassName("bluecirc")[2], 0.5, {scale:0,zIndex:0}, {scale:1, ease: Back.easeOut.config(1.7)},1.9)
        .fromTo(document.getElementsByClassName("bluecirc")[2], 0.5, {opacity:0,y:-100}, {y:0,opacity:0.5, ease: Circ.easeOut},1.9);
    }
    else {
        tl.fromTo(document.getElementsByClassName("bluecirc")[0], 1.5, {y:1000,zIndex:2,scale:0}, {scale:1,y:0, ease: Circ.easeOut},0.5)
        .fromTo(document.getElementsByClassName("bluecirc")[0], 0.5, {scale:1}, {opacity:0.5,scale:1.2, ease: SlowMo.ease.config(0.1, 0.7, true)},1)
        .fromTo(document.getElementsByClassName("bluecirc")[0], 0.5, {opacity:0.5}, {opacity:1, ease: Circ.easeOut},1)
        .fromTo(document.getElementsByClassName("bluecirc")[1], 0.5, {scale:0,zIndex:1}, {scale:1, ease: Back.easeOut.config(1.7)},1.4)
        .fromTo(document.getElementsByClassName("bluecirc")[1], 0.5, {opacity:0,y:-100}, {y:0,opacity:0.5, ease: Circ.easeOut},1.4)
        .fromTo(document.getElementsByClassName("bluecirc")[2], 0.5, {scale:0,zIndex:0}, {scale:1, ease: Back.easeOut.config(1.7)},1.9)
        .fromTo(document.getElementsByClassName("bluecirc")[2], 0.5, {opacity:0,y:-100}, {y:0,opacity:0.5, ease: Circ.easeOut},1.9);
    }
}
function sugarHides() {
    var eyes = document.getElementsByClassName("eye");
    var tl = new TimelineMax({repeat:-1});
        tl
        .set(eyes[0].children[1],  {x:"0%"})
        .set(eyes[1].children[1], {x:"0%"})
            .fromTo(eyes[0].children[0], 1, {scaleY:1}, {scaleY:0.2, ease: Circ.easeOut},0.5)
        .fromTo(eyes[1].children[0], 1, {scaleY:1}, {scaleY:0.2, ease: Circ.easeOut},0.5)
        .fromTo(eyes[0].children[1], 0.5, {x:"0%"}, {x:"100%", ease: Power0.easeNone},1.4)
        .fromTo(eyes[1].children[1], 0.5, {x:"0%"}, {x:"100%", ease: Power0.easeNone},1.4)
        .fromTo(eyes[0].children[1], 1, {x:"100%"}, {x:"-100%", ease: Power0.easeNone},1.9)
        .fromTo(eyes[1].children[1], 1, {x:"100%"}, {x:"-100%", ease: Power0.easeNone},1.9)
        .fromTo(eyes[0].children[0], 0.2, {scaleY:0.2}, {scaleY:1, ease:SlowMo.ease.config(0.1, 0.1, true)},1.9)
        .fromTo(eyes[1].children[0], 0.2, {scaleY:0.2}, {scaleY:1, ease:SlowMo.ease.config(0.1, 0.1, true)},1.9)
        .fromTo(eyes[0].children[0], 0.2, {scaleY:0.2}, {scaleY:1, ease:SlowMo.ease.config(0.1, 0.1, true)},2.3)
        .fromTo(eyes[1].children[0], 0.2, {scaleY:0.2}, {scaleY:1, ease:SlowMo.ease.config(0.1, 0.1, true)},2.3)
        .fromTo(eyes[0].children[1], 0.5, {x:"-100%"}, {x:"0%", ease: Power0.easeNone},2.9)
        .fromTo(eyes[1].children[1],0.5, {x:"-100%"}, {x:"0%", ease: Power0.easeNone},2.9)
        .fromTo(eyes[0].children[0], 0.2, {scaleY:0.2}, {scaleY:1, ease:Circ.easeOut},3.3)
        .fromTo(eyes[1].children[0], 0.2, {scaleY:0.2}, {scaleY:1, ease:Circ.easeOut},3.3)
        ;

}
function allAboutInitial() {
    
    displayBotMenu("", true);
    displayMenu("", true, "walkthrough.html",function() {
        selectionScreen();
    });
    var greencircles = document.getElementsByClassName("greencircle");
     TweenMax.to(greencircles, 0.2, {opacity:0, ease: Circ.easeOut});
    
    var allabout = window.localStorage.getItem("allabout");
    setTimeout(function(){
        if(allabout == "8") {
            idc("goFinish").style.visibility = "visible";
                 TweenMax.fromTo(idc("goFinish"), 1, {scale:0}, {scale:1, ease: Back.easeOut.config(1.7)});

        }
        }, 1800);
    setTimeout(function(){
     TweenMax.fromTo(greencircles, 0.2, {opacity:1}, {opacity:0.5, ease: Circ.easeOut});
     TweenMax.staggerFromTo(greencircles, 0.4, {scale:0,cycle:{transformOrigin:["100% 100%","0% 100%","0% 50%","0% 0%","50% 0%","100% 0%","100% 50%","100% 100%"]}}, {scale:1, ease: Back.easeOut},0.2);

    for(i = 0; i < parseInt(allabout) + 1;i++) {
     TweenMax.fromTo(greencircles[i], 0.2, {opacity:0.5}, {opacity:1, ease: Circ.easeOut});
    }
         TweenMax.fromTo(greencircles[0], 0.2, {opacity:0.5}, {opacity:1, ease: Circ.easeOut});

        }, 600);
}
function allaboutComplete(num) {
    var allabout = window.localStorage.getItem("allabout");
    if(allabout == null) {
        allabout = 0;
        window.localStorage.setItem("allabout",1);
    }
    if(parseInt(allabout) < num) {
        window.localStorage.setItem("allabout", num);
    }
}
function setupCheck() {
   var allabout = window.localStorage.getItem("allabout");
    if(allabout == 8) {
        pageChange("pages/setup/getting-started.html", "fade", function() {
            setupPage();           

        });
    }
}
var slideDoneabout2 = false;
function allabout2Next() {
    if(!slideDoneabout2) {
        
    var initialItem = idc("onesecond");
    var activeI = initialItem.getElementsByClassName("active")[0];
    
             var tla = new TimelineMax();    
    var slideMenu = document.getElementsByClassName("slideMenu")[0];
        if(initialItem.children[0].className = "slide active") {
    tla.fromTo(initialItem.parentNode.children[1], 0.3, {scale:"0"}, {scale:"1"}).fromTo(initialItem.parentNode.children[0], 0.3, {scale:"1"}, {scale:"0"})
          .to(initialItem.children[0], 1,  {x:"-100%", ease: Circ.easeOut,onComplete:function() {
              initialItem.children[0].className = "slide";
              initialItem.children[1].className = "slide active";
              slideMenu.children[0].className = "vw2 vwh2";
              slideMenu.children[1].className = "vw2 vwh2 active";
              initialItem.parentNode.children[0].className = "vhmt9 vhmb1 fontv6 maintitle";
              initialItem.parentNode.children[1].className = "vhmt9 vhmb1 fontv6 maintitle active";
             var tl = new TimelineMax();    
             tl.fromTo(initialItem.children[1], 1, {x:"100%"}, {x:"0%", ease: Circ.easeIn})
             .fromTo(initialItem.parentNode.children[1], 1, {opacity:"0"}, {opacity:"1", ease: Circ.easeOut})
             .staggerFromTo(initialItem.children[1].children, 1, {scale:"0"}, {scale:"1", ease: Circ.easeOut},0.2);
          }});
            
        }
        slideDoneabout2 = true;
    }
    else {
        pageChange("pages/allabout/allabout3.html", "fade", function() {
         allaboutComplete(3);  
            sugarHides();
              
     displayMenu("", true, "all-about.html",function() {
     allaboutComplete(3);       
            allAboutInitial();
    });
        });
    }
}
function setupComplete(num) {
    var setupstate = window.localStorage.getItem("setupstate");
    if(setupstate == null) {
        setupstate = 0;
        window.localStorage.setItem("setupstate",1);
    }
    if(parseInt(setupstate) < num) {
        window.localStorage.setItem("setupstate", num);
    }
    displayMenu("", true, "walkthrough.html",function() {
        selectionScreen();
    });
}
function finishCheck() {
    
    var setupNum = window.localStorage.getItem("setupstate");
    if(setupNum == "8" && 
       window.localStorage.getItem("startday") != null && 
       window.localStorage.getItem("reminder1hour") != null) {
        pageChange("pages/start/start1.html", "fade", function() {
                                  startPlan();
        });
    }
    else {
        alert("please finish setting up your detox");
    }
}
function setupPage() {
    var setupNum = window.localStorage.getItem("setupstate");
    
    setTimeout(function(){
        if(setupNum == "8") {
            idc("goFinish").style.visibility = "visible";
                 TweenMax.fromTo(idc("goFinish"), 1, {scale:0}, {scale:1, ease: Back.easeOut.config(1.7)});

        }
        }, 1800);
    displayMenu("", true, "walkthrough.html",function() {
        selectionScreen();
    });
    displayBotMenu("", true);
    
    var greencircles = document.getElementsByClassName("greencircle");
     TweenMax.to(greencircles, 0.2, {opacity:0, ease: Circ.easeOut});
    
    setTimeout(function(){
     TweenMax.fromTo(greencircles, 0.2, {opacity:1}, {opacity:0.5, ease: Circ.easeOut});
     TweenMax.staggerFromTo(greencircles, 0.4, {scale:0,cycle:{transformOrigin:["100% 100%","0% 100%","0% 50%","0% 0%","50% 0%","100% 0%","100% 50%","100% 100%"]}}, {scale:1, ease: Back.easeOut},0.2);

    for(i = 0; i < parseInt(setupNum) + 1;i++) {
     TweenMax.fromTo(greencircles[i], 0.2, {opacity:0.5}, {opacity:1, ease: Circ.easeOut});
    }
         TweenMax.fromTo(greencircles[0], 0.2, {opacity:0.5}, {opacity:1, ease: Circ.easeOut});

        }, 600);
}

function initialLoadTut() {
    var initialItem = idc("initial");
    var activeI = initialItem.getElementsByClassName("active")[0];
    
    TweenMax.fromTo(initialItem, 1.4, {y:300,scale:0}, {scale:activeI.getAttribute("scale"),y:0, ease: Back.easeOut});
    var initialItemHamn = new Hammer(initialItem);
    initialItemHamn.on('swipeleft', function(ev) {
        if(!disableTouch)
        initialnext();
    });
    initialItemHamn.on('swiperight', function(ev) {
        if(!disableTouch)
        initialback();
    });
}
function initialnext() {
    disableTouch = true;
    var initialItem = idc("initial");
    
    var activeI = initialItem.getElementsByClassName("active")[0];
    
    var numFound = parseInt(activeI.getAttribute("num")) + 1;
    TweenMax.to(initialItem, 0.4,  {scale:initialItem.children[parseInt(activeI.getAttribute("num")) + 1].getAttribute("scale"), ease: Circ.easeOut});
    for(i = 0; i < initialItem.children.length;i++) {
        if(i == numFound) {
        document.getElementsByClassName("slideMenu")[0].children[i].className = "vw2 vwh2 active";
        }
        else {
        document.getElementsByClassName("slideMenu")[0].children[i].className = "vw2 vwh2";
        }
    }
    
    if(numFound == 1) {
          TweenMax.to(activeI, 1,  {x:"-100%", ease: Circ.easeOut,onComplete:function() {
    disableTouch = false;
              activeI.className = "slide";
              initialItem.children[numFound].className = "slide active";
             
             var tl = new TimelineMax();    
             tl.fromTo(initialItem.children[numFound], 1, {x:"100%"}, {x:"0%", ease: Circ.easeOut})
                 .fromTo(initialItem.children[numFound].children[0].children[0].children[0], 0.8, {opacity:0}, {opacity:1, ease: Circ.easeOut})
             .fromTo(initialItem.children[numFound].children[2], 1, {scaleY:0,transformOrigin:"50% 0%"}, {scaleY:1, ease: Circ.easeOut})
             .fromTo(initialItem.children[numFound].children[3], 1, {scale:0,transformOrigin:"50% 100%"}, {scale:1, ease: Circ.easeOut}, "-=0.4");
          }});
    }
    else if(numFound == 2) {
          TweenMax.to(activeI, 1,  {x:"-100%", ease: Circ.easeOut,onComplete:function() {
              activeI.className = "slide";
    disableTouch = false;
              initialItem.children[numFound].className = "slide active";
             
             var tl = new TimelineMax();    
             tl.fromTo(initialItem.children[numFound], 1, {x:"100%"}, {x:"0%", ease: Circ.easeOut})
                 .fromTo(initialItem.children[numFound].children[0].children[0], 0.8, {y:30,opacity:0}, {y:0,opacity:1, ease: Circ.easeOut})
              .fromTo(initialItem.children[numFound].children[1], 0.8, {y:30,scale:0}, {y:0,scale:1, ease: Back.easeOut.config(1.7)});
          }});
    }
    else if(numFound == 3) {
          TweenMax.to(activeI, 1,  {x:"-100%", ease: Circ.easeOut,onComplete:function() {
              activeI.className = "slide";
    disableTouch = false;
              initialItem.children[numFound].className = "slide active";
             
             var tl = new TimelineMax();    
             tl.fromTo(initialItem.children[numFound], 1, {x:"100%"}, {x:"0%", ease: Circ.easeOut})
                 .fromTo(initialItem.children[numFound].children[0].children[0], 0.8, {y:30,opacity:0}, {y:0,opacity:1, ease: Circ.easeOut})
              .fromTo(initialItem.children[numFound].getElementsByTagName("img"), 0.8, {scale:0}, {scale:1, ease: Back.easeOut.config(1.7)})
              .fromTo(initialItem.children[numFound].getElementsByTagName("img")[1], 2, {rotation:"0"}, {rotation:"15", ease: SlowMo.ease.config(0.1, 0.7, true)})
              .fromTo(initialItem.children[numFound].getElementsByTagName("img")[0], 2, {rotation:"0"}, {rotation:"-15", ease: SlowMo.ease.config(0.1, 0.7, true)},"-=2");
          }});
    }
    else if(numFound == 4) {
          TweenMax.to(activeI, 1,  {x:"-100%", ease: Circ.easeOut,onComplete:function() {
              activeI.className = "slide";
    disableTouch = false;
              initialItem.children[numFound].className = "slide active";
             
             var tl = new TimelineMax();    
             tl.fromTo(initialItem.children[numFound], 1, {x:"100%"}, {x:"0%", ease: Circ.easeOut})
                 .fromTo(initialItem.children[numFound].children[0].children[0], 0.8, {y:30,opacity:0}, {y:0,opacity:1, ease: Circ.easeOut})
              .fromTo(initialItem.children[numFound].children[1], 0.8, {y:30,scale:0}, {y:0,scale:1, ease: Back.easeOut.config(1.7)});
          }});
    }
    else if(numFound == 5) {
          TweenMax.to(activeI, 1,  {x:"-100%", ease: Circ.easeOut,onComplete:function() {
              activeI.className = "slide";
              disableTouch = false;
              initialItem.children[numFound].className = "slide active";
             
             var tl = new TimelineMax();    
             tl.fromTo(initialItem.children[numFound], 1, {x:"100%"}, {x:"0%", ease: Circ.easeOut})
                 .fromTo(initialItem.children[numFound].children[0].children[0], 0.8, {y:30,opacity:0}, {y:0,opacity:1, ease: Circ.easeOut});
          }});
    }
    else if(numFound == 6) {
          TweenMax.to(activeI, 1,  {x:"-100%", ease: Circ.easeOut,onComplete:function() {
              activeI.className = "slide";
    disableTouch = false;
              initialItem.children[numFound].className = "slide active";
             idc("registerSlide").style.visibility = "visible";
             var tl = new TimelineMax();    
             tl.fromTo(initialItem.children[numFound], 1, {x:"100%"}, {x:"0%", ease: Circ.easeOut})
                 .fromTo(initialItem.children[numFound].children[0].children[0], 0.8, {y:30,opacity:0}, {y:0,opacity:1, ease: Circ.easeOut})
              .fromTo(initialItem.children[numFound].children[0].children[1], 0.8, {y:30,scale:0}, {y:0,scale:1, ease: Back.easeOut.config(1.7)})
              .fromTo(initialItem.children[numFound].children[1], 0.8, {y:30,scale:0}, {y:0,scale:1, ease: Back.easeOut.config(1.7)})
              .fromTo(idc("registerSlide"), 0.8, {opacity:0,y:100}, {opacity:1,y:0, ease: Back.easeOut.config(1.7)});
          }});
    }
    else {
        
    disableTouch = false;
    }
}
var disableTouch = false;
function initialback() {
    var initialItem = idc("initial");
    disableTouch = true;
    
    var activeI = initialItem.getElementsByClassName("active")[0];
    
    var numFound = parseInt(activeI.getAttribute("num")) - 1;
    TweenMax.to(initialItem, 0.4,  {scale:initialItem.children[parseInt(activeI.getAttribute("num")) - 1].getAttribute("scale"), ease: Circ.easeOut});
    for(i = 0; i < initialItem.children.length;i++) {
        if(i == numFound) {
        document.getElementsByClassName("slideMenu")[0].children[i].className = "vw2 vwh2 active";
        }
        else {
        document.getElementsByClassName("slideMenu")[0].children[i].className = "vw2 vwh2";
        }
    }
    
    if(numFound == 0) {
          TweenMax.to(activeI, 1,  {x:"100%", ease: Circ.easeOut,onComplete:function() {
              activeI.className = "slide";
    disableTouch = false;
              initialItem.children[numFound].className = "slide active";
             
             var tl = new TimelineMax();    
             tl.fromTo(initialItem.children[numFound], 1, {x:"-100%"}, {x:"0%", ease: Circ.easeOut});
          }});
    }
    else if(numFound == 1) {
          TweenMax.to(activeI, 1,  {x:"100%", ease: Circ.easeOut,onComplete:function() {
              activeI.className = "slide";
    disableTouch = false;
              initialItem.children[numFound].className = "slide active";
             
             var tl = new TimelineMax();    
             tl.fromTo(initialItem.children[numFound], 1, {x:"-100%"}, {x:"0%", ease: Circ.easeOut})
                 .fromTo(initialItem.children[numFound].children[0].children[0].children[0], 0.8, {opacity:0}, {opacity:1, ease: Circ.easeOut})
             .fromTo(initialItem.children[numFound].children[2], 1, {scaleY:0,transformOrigin:"50% 0%"}, {scaleY:1, ease: Circ.easeOut})
             .fromTo(initialItem.children[numFound].children[3], 1, {scale:0,transformOrigin:"50% 100%"}, {scale:1, ease: Circ.easeOut}, "-=0.4");
          }});
    }
    else if(numFound == 2) {
          TweenMax.to(activeI, 1,  {x:"100%", ease: Circ.easeOut,onComplete:function() {
              activeI.className = "slide";
    disableTouch = false;
              initialItem.children[numFound].className = "slide active";
             
             var tl = new TimelineMax();    
             tl.fromTo(initialItem.children[numFound], 1, {x:"-100%"}, {x:"0%", ease: Circ.easeOut})
                 .fromTo(initialItem.children[numFound].children[0].children[0], 0.8, {y:30,opacity:0}, {y:0,opacity:1, ease: Circ.easeOut})
              .fromTo(initialItem.children[numFound].children[1], 0.8, {y:30,scale:0}, {y:0,scale:1, ease: Back.easeOut.config(1.7)});
          }});
    }
    else if(numFound == 3) {
          TweenMax.to(activeI, 1,  {x:"100%", ease: Circ.easeOut,onComplete:function() {
              activeI.className = "slide";
    disableTouch = false;
              initialItem.children[numFound].className = "slide active";
             
             var tl = new TimelineMax();    
             tl.fromTo(initialItem.children[numFound], 1, {x:"-100%"}, {x:"0%", ease: Circ.easeOut})
                 .fromTo(initialItem.children[numFound].children[0].children[0], 0.8, {y:30,opacity:0}, {y:0,opacity:1, ease: Circ.easeOut})
              .fromTo(initialItem.children[numFound].getElementsByTagName("img"), 0.8, {scale:0}, {scale:1, ease: Back.easeOut.config(1.7)})
              .fromTo(initialItem.children[numFound].getElementsByTagName("img")[1], 2, {rotation:"0"}, {rotation:"15", ease: SlowMo.ease.config(0.1, 0.7, true)})
              .fromTo(initialItem.children[numFound].getElementsByTagName("img")[0], 2, {rotation:"0"}, {rotation:"-15", ease: SlowMo.ease.config(0.1, 0.7, true)},"-=2");
          }});
    }
    else if(numFound == 4) {
          TweenMax.to(activeI, 1,  {x:"100%", ease: Circ.easeOut,onComplete:function() {
              activeI.className = "slide";
    disableTouch = false;
              initialItem.children[numFound].className = "slide active";
             
             var tl = new TimelineMax();    
             tl.fromTo(initialItem.children[numFound], 1, {x:"-100%"}, {x:"0%", ease: Circ.easeOut})
                 .fromTo(initialItem.children[numFound].children[0].children[0], 0.8, {y:30,opacity:0}, {y:0,opacity:1, ease: Circ.easeOut})
              .fromTo(initialItem.children[numFound].children[1], 0.8, {y:30,scale:0}, {y:0,scale:1, ease: Back.easeOut.config(1.7)});
          }});
    }
    else if(numFound == 5) {
          TweenMax.to(activeI, 1,  {x:"100%", ease: Circ.easeOut,onComplete:function() {
              activeI.className = "slide";
    disableTouch = false;
              initialItem.children[numFound].className = "slide active";
             
             var tl = new TimelineMax();    
             tl.fromTo(initialItem.children[numFound], 1, {x:"-100%"}, {x:"0%", ease: Circ.easeOut})
                 .fromTo(initialItem.children[numFound].children[0].children[0], 0.8, {y:30,opacity:0}, {y:0,opacity:1, ease: Circ.easeOut});
          }});
    }
    else {
        
    disableTouch = false;
    }
}
function termsYes() {
    window.localStorage.setItem("tac","true");
    pageChange("pages/walkthrough.html", "fade", function() {
                selectionScreen();
    });
}

function onesecond() {
    var initialItem = idc("onesecond");
    var activeI = initialItem.getElementsByClassName("active")[0];
    
             var tla = new TimelineMax();    
    var slideMenu = document.getElementsByClassName("slideMenu")[0];
             TweenMax.staggerFromTo(initialItem.children[0].children, 1, {scale:"0"}, {scale:"1", ease: Circ.easeOut},0.2);
    var initialItemHamn = new Hammer(initialItem);
    initialItemHamn.on('swipeleft', function(ev) {
        if(initialItem.children[0].className = "slide active") {
    tla.fromTo(initialItem.parentNode.children[1], 0.3, {scale:"0"}, {scale:"1"}).fromTo(initialItem.parentNode.children[0], 0.3, {scale:"1"}, {scale:"0"})
          .to(initialItem.children[0], 1,  {x:"-100%", ease: Circ.easeOut,onComplete:function() {
              initialItem.children[0].className = "slide";
              initialItem.children[1].className = "slide active";
              slideMenu.children[0].className = "vw2 vwh2";
              slideMenu.children[1].className = "vw2 vwh2 active";
              initialItem.parentNode.children[0].className = "vhmt9 vhmb1 fontv6 maintitle";
              initialItem.parentNode.children[1].className = "vhmt9 vhmb1 fontv6 maintitle active";
             var tl = new TimelineMax();    
             tl.fromTo(initialItem.children[1], 1, {x:"100%"}, {x:"0%", ease: Circ.easeIn})
             .fromTo(initialItem.parentNode.children[1], 1, {opacity:"0"}, {opacity:"1", ease: Circ.easeOut})
             .staggerFromTo(initialItem.children[1].children, 1, {scale:"0"}, {scale:"1", ease: Circ.easeOut},0.2);
          }});
            
        }
    });
    initialItemHamn.on('swiperight', function(ev) {
        if(initialItem.children[1].className = "slide active") {
    tla.fromTo(initialItem.parentNode.children[0], 0.3, {scale:"0"}, {scale:"1"}).fromTo(initialItem.parentNode.children[1], 0.3, {scale:"1"}, {scale:"0"})
          .to(initialItem.children[1], 1,  {x:"100%", ease: Circ.easeOut,onComplete:function() {
              initialItem.children[1].className = "slide";
              initialItem.children[0].className = "slide active";
              slideMenu.children[0].className = "vw2 vwh2 active";
              slideMenu.children[1].className = "vw2 vwh2 ";
              initialItem.parentNode.children[0].className = "vhmt9 vhmb1 fontv6 maintitle active";
              initialItem.parentNode.children[1].className = "vhmt9 vhmb1 fontv6 maintitle ";

             var tl = new TimelineMax();    
             tl.fromTo(initialItem.children[0], 1, {x:"-100%"}, {x:"0%", ease: Circ.easeIn})
             .fromTo(initialItem.parentNode.children[0], 1, {opacity:"0"}, {opacity:"1", ease: Circ.easeOut})
             .staggerFromTo(initialItem.children[0].children, 1, {scale:"0"}, {scale:"1", ease: Circ.easeOut},0.2);
          }});
        }
    });
}
function oneseven() {
    var initialItem = idc("oneseven");
    var activeI = initialItem.getElementsByClassName("active")[0];
    
    var  slideMenu = document.getElementsByClassName("slideMenu")[0];
    
    var initialItemHamn = new Hammer(initialItem);
    initialItemHamn.on('swipeleft', function(ev) {
        if(initialItem.children[0].className = "slide active") {
          TweenMax.to(initialItem.children[0], 1,  {x:"-100%", ease: Circ.easeOut,onComplete:function() {
              initialItem.children[0].className = "slide";
              initialItem.children[1].className = "slide active";
              slideMenu.children[0].className = "vw2 vwh2";
              slideMenu.children[1].className = "vw2 vwh2 active";
             var tl = new TimelineMax();    
             tl.fromTo(initialItem.children[1], 1, {x:"100%"}, {x:"0%", ease: Circ.easeOut});
          }});
            
        }
    });
    initialItemHamn.on('swiperight', function(ev) {
        if(initialItem.children[1].className = "slide active") {
          TweenMax.to(initialItem.children[1], 1,  {x:"100%", ease: Circ.easeOut,onComplete:function() {
              initialItem.children[1].className = "slide";
              initialItem.children[0].className = "slide active";
              slideMenu.children[0].className = "vw2 vwh2 active";
              slideMenu.children[1].className = "vw2 vwh2 ";

             var tl = new TimelineMax();    
             tl.fromTo(initialItem.children[0], 1, {x:"-100%"}, {x:"0%", ease: Circ.easeOut});
          }});
        }
    });
}
function rulesPop() {
    var initialItem = idc("rules");
    var initialItems = initialItem.getElementsByClassName("slide");
    
    var initialItemHamn = new Hammer(initialItem);
    initialItemHamn.on('swipeleft', function(ev) {
        rulesLeft();
    });
    initialItemHamn.on('swiperight', function(ev) {
        rulesRight();
    });
}
function rulesLeft() {
    var initialItem = idc("rules");
    var initialItems = initialItem.getElementsByClassName("slide");
       var activeI = initialItem.getElementsByClassName("active")[0];
    var numFound = parseInt(activeI.getAttribute("num"));
    var  slideMenu = document.getElementsByClassName("slideMenu")[0];
        if(numFound + 1 < initialItem.getElementsByClassName("slide").length) {
        for(i = 0; i < initialItems.length;i++) {
            if(i == numFound + 1) {
            document.getElementsByClassName("slideMenu")[0].children[i].className = "vw2 vwh2 active";
            }
            else {
            document.getElementsByClassName("slideMenu")[0].children[i].className = "vw2 vwh2";
            }
        }
          TweenMax.to(initialItems[numFound], 1,  {x:"-100%", ease: Circ.easeOut,onComplete:function() {
              activeI.className = "slide";
              initialItems[numFound + 1].className = "slide active";
             var tl = new TimelineMax();    
             tl.fromTo(initialItems[numFound + 1], 1, {x:"100%"}, {x:"0%", ease: Circ.easeOut});
          }});
        }
    if(numFound > 4) {
        TweenMax.to(document.getElementsByClassName("right")[0], 0.5,  {opacity:0, ease: Circ.easeOut});
    }
    if(numFound < 6) {
        TweenMax.to(document.getElementsByClassName("left")[0], 0.5,  {opacity:1, ease: Circ.easeOut});
    }
}
function rulesRight() {
    var initialItem = idc("rules");
    var initialItems = initialItem.getElementsByClassName("slide");

    var activeI = initialItem.getElementsByClassName("active")[0];
    var numFound = parseInt(activeI.getAttribute("num"));
    var  slideMenu = document.getElementsByClassName("slideMenu")[0];
        if(numFound > 0) {
            for(i = 0; i < initialItems.length;i++) {

                if(i == numFound - 1) {
                document.getElementsByClassName("slideMenu")[0].children[i].className = "vw2 vwh2 active";
                }
                else {
                document.getElementsByClassName("slideMenu")[0].children[i].className = "vw2 vwh2";
                }
            }
          TweenMax.to(initialItems[numFound], 1,  {x:"100%", ease: Circ.easeOut,onComplete:function() {
              activeI.className = "slide";
              initialItems[numFound - 1].className = "slide active";

             var tl = new TimelineMax();    
             tl.fromTo(initialItems[numFound -1], 1, {x:"-100%"}, {x:"0%", ease: Circ.easeOut});
          }});
            }
    if(numFound < 2) {
        TweenMax.to(document.getElementsByClassName("left")[0], 0.5,  {opacity:0, ease: Circ.easeOut});
    }
    if(numFound > 0) {
        TweenMax.to(document.getElementsByClassName("right")[0], 0.5,  {opacity:1, ease: Circ.easeOut});
    }
}
var pandisable = false;
function dateSelection() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth(); //January is 0!
    var yyyy = today.getFullYear();
    
    var days = [31,28,31,30,31,30,31,31,30,31,30,31];
    var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    
    var rulesmain = document.getElementById("rules");
    var greenCirc = document.getElementsByClassName("dates")[0].children;
    greenCirc[0].children[0].innerHTML = dd;
    greenCirc[1].children[0].innerHTML = months[mm];
    greenCirc[2].children[0].innerHTML = yyyy;
       window.localStorage.setItem("startday",dd);
        window.localStorage.setItem("startmonth",mm);
        window.localStorage.setItem("startyear",yyyy);
    
    var daye = new Hammer.Manager(greenCirc[0]);
    daye.add( new Hammer.Pan({ direction: Hammer.DIRECTION_ALL, threshold:2 }) );

    daye.on('panup', function(ev) {
        if(!pandisable) {
        pandisable = true;
            
        dd++;
        
        if(days[mm] < dd) {
            dd = 0;
        }
        var startday = window.localStorage.setItem("startday",dd);
        TweenMax.to(greenCirc[0].children[0], 0.3,  {y:"-100%",opacity:0, ease: Circ.easeOut,onComplete:function() {
            greenCirc[0].children[0].innerHTML = dd;
            pandisable = false;
            TweenMax.fromTo(greenCirc[0].children[0], 0.3,{y:"100%"} , {y:"0%",opacity:1, ease: Circ.easeOut});
        }});
        }

    });
    daye.on('pandown', function(ev) {
        if(!pandisable) {
        pandisable = true;
            dd--;
            if(dd < 0) {
                dd = days[mm];
            }
            var startday = window.localStorage.setItem("startday",dd);

            TweenMax.to(greenCirc[0].children[0], 0.3,  {y:"100%",opacity:0, ease: Circ.easeOut,onComplete:function() {
                greenCirc[0].children[0].innerHTML = dd;
                pandisable = false;
                TweenMax.fromTo(greenCirc[0].children[0], 0.3,{y:"-100%"} , {y:"0%",opacity:1, ease: Circ.easeOut});
            }});
        }
    });
    var monthe = new Hammer.Manager(greenCirc[1]);
    monthe.add( new Hammer.Pan({ direction: Hammer.DIRECTION_ALL, threshold:2 }) );
    monthe.on('panup', function(ev) {
        if(!pandisable) {
        pandisable = true;
        mm++;
        if(mm > 11) {
            mm = 0;
        }
        var startday = window.localStorage.setItem("startmonth",dd);
        
        TweenMax.to(greenCirc[1].children[0], 0.3,  {y:"-100%",opacity:0, ease: Circ.easeOut,onComplete:function() {
            greenCirc[1].children[0].innerHTML = months[mm];
            pandisable = false;
            TweenMax.fromTo(greenCirc[1].children[0], 0.3,{y:"100%"} , {y:"0%",opacity:1, ease: Circ.easeOut});
        }});
        }
        
    });
    monthe.on('pandown', function(ev) {
        
        if(!pandisable) {
        pandisable = true;
            mm--;
            if(mm < 0) {
                mm = 11;
            }
            var startday = window.localStorage.setItem("startmonth",dd);

            TweenMax.to(greenCirc[1].children[0], 0.3,  {y:"100%",opacity:0, ease: Circ.easeOut,onComplete:function() {
                greenCirc[1].children[0].innerHTML = months[mm];
            pandisable = false;
                TweenMax.fromTo(greenCirc[1].children[0], 0.3,{y:"-100%"} , {y:"0%",opacity:1, ease: Circ.easeOut});
            }});
        }
    });
    var yeare = new Hammer.Manager(greenCirc[2]);
    yeare.add( new Hammer.Pan({ direction: Hammer.DIRECTION_ALL, threshold:2 }) );
    yeare.on('panup', function(ev) {
        
        if(!pandisable) {
        pandisable = true;
            yyyy++;
            var startyear = window.localStorage.setItem("startyear",yyyy);

            TweenMax.to(greenCirc[2].children[0], 0.3,  {y:"-100%",opacity:0, ease: Circ.easeOut,onComplete:function() {
                greenCirc[2].children[0].innerHTML = yyyy;
            pandisable = false;
                TweenMax.fromTo(greenCirc[2].children[0], 0.3,{y:"100%"} , {y:"0%",opacity:1, ease: Circ.easeOut});
            }});
        }
    });
    yeare.on('pandown', function(ev) {
        if(!pandisable) {
        pandisable = true;
            yyyy--;
            var startyear = window.localStorage.setItem("startyear",yyyy);

            TweenMax.to(greenCirc[2].children[0], 0.3,  {y:"100%",opacity:0, ease: Circ.easeOut,onComplete:function() {
                greenCirc[2].children[0].innerHTML = yyyy;
            pandisable = false;
                TweenMax.fromTo(greenCirc[2].children[0], 0.3,{y:"-100%"} , {y:"0%",opacity:1, ease: Circ.easeOut});
            }});
        }
    });
}
function timeSelection() {
    
    var rulesmain = document.getElementById("times");
    var greenCirc = document.getElementsByClassName("times")[0].children;
    
    var reminder1hour = new Hammer.Manager(greenCirc[0].getElementsByTagName("span")[0]);
    
    reminder1hour.add( new Hammer.Pan({ direction: Hammer.DIRECTION_ALL, threshold:2 }) );
    var oneHour = 7;
    reminder1hour.on('panup', function(ev) {
        if(!pandisable) {
        pandisable = true;
            
        oneHour++;
        
        if(oneHour > 11) {
            oneHour = 0;
        }
        window.localStorage.setItem("reminder1hour",oneHour);
        TweenMax.to(greenCirc[0].getElementsByTagName("span")[0], 0.3,  {y:"-100%",opacity:0, ease: Circ.easeOut,onComplete:function() {
             if(oneHour < 10) {
                    greenCirc[0].getElementsByTagName("span")[0].innerHTML = "0" + oneHour;
                }
            else
            greenCirc[0].getElementsByTagName("span")[0].innerHTML = oneHour;
            pandisable = false;
            TweenMax.fromTo(greenCirc[0].getElementsByTagName("span")[0], 0.3,{y:"100%"} , {y:"0%",opacity:1, ease: Circ.easeOut});
        }});
        }

    });
    reminder1hour.on('pandown', function(ev) {
        if(!pandisable) {
            pandisable = true;

            oneHour--;

            if(oneHour < 0) {
                oneHour = 11;
            }
            window.localStorage.setItem("reminder1hour",oneHour);
            TweenMax.to(greenCirc[0].getElementsByTagName("span")[0], 0.3,  {y:"100%",opacity:0, ease: Circ.easeOut,onComplete:function() {
                if(oneHour < 10) {
                    greenCirc[0].getElementsByTagName("span")[0].innerHTML = "0" + oneHour;
                }
                else
            greenCirc[0].getElementsByTagName("span")[0].innerHTML = oneHour;
                pandisable = false;
                TweenMax.fromTo(greenCirc[0].getElementsByTagName("span")[0], 0.3,{y:"-100%"} , {y:"0%",opacity:1, ease: Circ.easeOut});
            }});
        }

    });
    var reminder1minute = new Hammer.Manager(greenCirc[0].getElementsByTagName("span")[1]);
    reminder1minute.add( new Hammer.Pan({ direction: Hammer.DIRECTION_ALL, threshold:2 }) );
    
    var oneMinute = 30;
    reminder1minute.on('panup', function(ev) {
        if(!pandisable) {
        pandisable = true;
            
        oneMinute++;
        
        if(oneMinute > 59) {
            oneMinute = 0;
        }
        window.localStorage.setItem("reminder1minute",oneMinute);
        TweenMax.to(greenCirc[0].getElementsByTagName("span")[1], 0.3,  {y:"-100%",opacity:0, ease: Circ.easeOut,onComplete:function() {
                if(oneMinute < 10) {
                    greenCirc[0].getElementsByTagName("span")[1].innerHTML = 0 + "" + oneMinute;
                }
                else 
                    greenCirc[0].getElementsByTagName("span")[1].innerHTML = oneMinute;
            pandisable = false;
            TweenMax.fromTo(greenCirc[0].getElementsByTagName("span")[1], 0.3,{y:"100%"} , {y:"0%",opacity:1, ease: Circ.easeOut});
        }});
        }

    });
    reminder1minute.on('pandown', function(ev) {
        if(!pandisable) {
            pandisable = true;

            oneMinute--;

            if(oneMinute < 0) {
                oneMinute = 59;
            }
            window.localStorage.setItem("reminder1minute",oneMinute);
            TweenMax.to(greenCirc[0].getElementsByTagName("span")[1], 0.3,  {y:"100%",opacity:0, ease: Circ.easeOut,onComplete:function() {
                if(oneMinute < 10) {
                    greenCirc[0].getElementsByTagName("span")[1].innerHTML = 0 + "" + oneMinute;
                }
                else 
                    greenCirc[0].getElementsByTagName("span")[1].innerHTML = oneMinute;
                pandisable = false;
                TweenMax.fromTo(greenCirc[0].getElementsByTagName("span")[1], 0.3,{y:"-100%"} , {y:"0%",opacity:1, ease: Circ.easeOut});
            }});
        }

    });
    
    
    var reminder2hour = new Hammer.Manager(greenCirc[1].getElementsByTagName("span")[0]);
        reminder2hour.add( new Hammer.Pan({ direction: Hammer.DIRECTION_ALL, threshold:2 }) );

    var twoHour = 18;
    reminder2hour.on('panup', function(ev) {
        if(!pandisable) {
            pandisable = true;
            
        twoHour++;
        
        if(twoHour > 23) {
            twoHour = 12;
        }
        window.localStorage.setItem("reminder2hour",twoHour);
        TweenMax.to(greenCirc[1].getElementsByTagName("span")[0], 0.3,  {y:"-100%",opacity:0, ease: Circ.easeOut,onComplete:function() {
           
            greenCirc[1].getElementsByTagName("span")[0].innerHTML = twoHour;
            pandisable = false;
            TweenMax.fromTo(greenCirc[1].getElementsByTagName("span")[0], 0.3,{y:"100%"} , {y:"0%",opacity:1, ease: Circ.easeOut});
        }});
        }

    });
    reminder2hour.on('pandown', function(ev) {
        if(!pandisable) {
            pandisable = true;

            twoHour--;

            if(twoHour < 12) {
                twoHour = 23;
            }
            window.localStorage.setItem("reminder2hour",twoHour);
            TweenMax.to(greenCirc[1].getElementsByTagName("span")[0], 0.3,  {y:"100%",opacity:0, ease: Circ.easeOut,onComplete:function() {
                greenCirc[1].getElementsByTagName("span")[0].innerHTML = twoHour;
                pandisable = false;
                TweenMax.fromTo(greenCirc[1].getElementsByTagName("span")[0], 0.3,{y:"-100%"} , {y:"0%",opacity:1, ease: Circ.easeOut});
            }});
        }

    });
    var reminder2minute = new Hammer.Manager(greenCirc[1].getElementsByTagName("span")[1]);
            reminder2minute.add( new Hammer.Pan({ direction: Hammer.DIRECTION_ALL, threshold:2 }) );

    var twoMinute = 30;
    reminder2minute.on('panup', function(ev) {
        if(!pandisable) {
        pandisable = true;
            
        twoMinute++;
        
        if(twoMinute > 59) {
            twoMinute = 0;
        }
        window.localStorage.setItem("reminder2minute",twoMinute);
        TweenMax.to(greenCirc[1].getElementsByTagName("span")[1], 0.3,  {y:"-100%",opacity:0, ease: Circ.easeOut,onComplete:function() {
                if(twoMinute < 10) {
                    greenCirc[1].getElementsByTagName("span")[1].innerHTML = 0 + "" + twoMinute;
                }
                else 
                    greenCirc[1].getElementsByTagName("span")[1].innerHTML = twoMinute;
            pandisable = false;
            TweenMax.fromTo(greenCirc[1].getElementsByTagName("span")[1], 0.3,{y:"100%"} , {y:"0%",opacity:1, ease: Circ.easeOut});
        }});
        }

    });
    reminder2minute.on('pandown', function(ev) {
        if(!pandisable) {
            pandisable = true;

            twoMinute--;

            if(twoMinute < 0) {
                twoMinute = 59;
            }
            window.localStorage.setItem("reminder2minute",twoMinute);
            TweenMax.to(greenCirc[1].getElementsByTagName("span")[1], 0.3,  {y:"100%",opacity:0, ease: Circ.easeOut,onComplete:function() {
                if(twoMinute < 10) {
                    greenCirc[1].getElementsByTagName("span")[1].innerHTML = 0 + "" + twoMinute;
                }
                else 
                    greenCirc[1].getElementsByTagName("span")[1].innerHTML = twoMinute;
                pandisable = false;
                TweenMax.fromTo(greenCirc[1].getElementsByTagName("span")[1], 0.3,{y:"-100%"} , {y:"0%",opacity:1, ease: Circ.easeOut});
            }});
        }

    });
}
function setReminders() {
    
    var greenCirc = document.getElementsByClassName("times")[0].children;
    
    window.localStorage.setItem("reminder1hour",parseInt(greenCirc[0].getElementsByTagName("span")[0].innerHTML));
    window.localStorage.setItem("reminder2hour",parseInt(greenCirc[1].getElementsByTagName("span")[0].innerHTML));
    window.localStorage.setItem("reminder1minute",parseInt(greenCirc[0].getElementsByTagName("span")[1].innerHTML));
    window.localStorage.setItem("reminder2minute",parseInt(greenCirc[1].getElementsByTagName("span")[1].innerHTML));
    profileAccept();
}
function intakeInitial(intakeNew) {
    var sugarmenu = idc("sugarmenu");
    if(intakeNew == 0) {
        sugarmenu.children[0].ontouchstart = function() {
            intake(0);
            pageChange("pages/setup/setprofile.html", "fade", function() {
                profileSetup();    profileAccept();
            });
        }
        sugarmenu.children[1].ontouchstart = function() {
            intake(1);
            pageChange("pages/setup/setprofile.html", "fade", function() {
                profileSetup();    profileAccept();
            });
        }
        sugarmenu.children[2].ontouchstart = function() {
            intake(2);
            pageChange("pages/setup/setprofile.html", "fade", function() {
                profileSetup();    profileAccept();
            });
        }
        sugarmenu.children[3].ontouchstart = function() {
            intake(3);
            pageChange("pages/setup/setprofile.html", "fade", function() {
                profileSetup();    profileAccept();
            });
        }
    }
}
function intake(num) {
    if(num == 0) {
        TweenMax.fromTo(idc("sugarAmount"), 0.3,{opacity:1} , {opacity:0, ease: Circ.easeOut,onComplete:function(){
            idc("sugarAmount").innerHTML = "007";
            
            var savedsugar = window.localStorage.setItem("savedsugar", 7);
            var sugarintake = window.localStorage.setItem("sugarintake", "light");
            TweenMax.fromTo(idc("sugarAmount"), 0.3,{opacity:0} , {opacity:1, ease: Circ.easeOut});
        }});
    }
    else if(num == 1) {
        TweenMax.fromTo(idc("sugarAmount"), 0.3,{opacity:1} , {opacity:0, ease: Circ.easeOut,onComplete:function(){
            idc("sugarAmount").innerHTML = "025";
    var savedsugar = window.localStorage.setItem("savedsugar", 25);
            var sugarintake = window.localStorage.setItem("sugarintake", "Medium");
            TweenMax.fromTo(idc("sugarAmount"), 0.3,{opacity:0} , {opacity:1, ease: Circ.easeOut});
        }});
    }
    else if(num == 2) {
        TweenMax.fromTo(idc("sugarAmount"), 0.3,{opacity:1} , {opacity:0, ease: Circ.easeOut,onComplete:function(){
            idc("sugarAmount").innerHTML = "060";
    var savedsugar = window.localStorage.setItem("savedsugar", 60);
            var sugarintake = window.localStorage.setItem("sugarintake", "Heavy User");
            TweenMax.fromTo(idc("sugarAmount"), 0.3,{opacity:0} , {opacity:1, ease: Circ.easeOut});
        }});
    }
    else if(num == 3) {
        TweenMax.fromTo(idc("sugarAmount"), 0.3,{opacity:1} , {opacity:0, ease: Circ.easeOut,onComplete:function(){
            idc("sugarAmount").innerHTML = "120";
    var savedsugar = window.localStorage.setItem("savedsugar", 120);
            var sugarintake = window.localStorage.setItem("sugarintake", "Very heavy user");
            TweenMax.fromTo(idc("sugarAmount"), 0.3,{opacity:0} , {opacity:1, ease: Circ.easeOut});
        }});
    }
}
function openMotivator() {
    var mot= document.getElementsByClassName("mot")[0];
    if(window.localStorage.getItem("motivator0") == "true") {
        mot.children[0].setAttribute("active", true);
    }
    if(window.localStorage.getItem("motivator1") == "true") {
        mot.children[1].setAttribute("active", true);
    }
    if(window.localStorage.getItem("motivator2") == "true") {
        mot.children[2].setAttribute("active", true);
    }
    if(window.localStorage.getItem("motivator3") == "true") {
        mot.children[3].setAttribute("active", true);
    }
    
}
function motivation(num, ele) {
    if(ele.getAttribute("active") == "false") {
        ele.setAttribute("active", true);
        window.localStorage.setItem("motivator" + num, "true");
    }
    else {
        ele.setAttribute("active", false);
        window.localStorage.setItem("motivator" + num, "false");
    }
        profileAccept();
}


function ageChange() {
     var ageItem = new Hammer.Manager(idc("ageswipe"));
    ageItem.add( new Hammer.Pan({ direction: Hammer.DIRECTION_ALL, threshold:2 }) );
    
    var age = 25;
        window.localStorage.setItem("age",25);
    ageItem.on('panup', function(ev) {
        if(!pandisable) {
        pandisable = true;
            age++;
        window.localStorage.setItem("age",age);
        TweenMax.to(idc("ageswipe").getElementsByTagName("span")[0], 0.3,  {y:"-100%",opacity:0, ease: Circ.easeOut,onComplete:function() {
               
                   idc("ageswipe").getElementsByTagName("span")[0].innerHTML = age;
            pandisable = false;
            TweenMax.fromTo(idc("ageswipe").getElementsByTagName("span")[0], 0.3,{y:"100%"} , {y:"0%",opacity:1, ease: Circ.easeOut});
        }});
        }
profileAccept();
    });
    ageItem.on('pandown', function(ev) {
        if(!pandisable) {
            pandisable = true;

            age--;

            if(age < 1) {
                age = 1;
            }
        window.localStorage.setItem("age",age);
            TweenMax.to(idc("ageswipe").getElementsByTagName("span")[0], 0.3,  {y:"100%",opacity:0, ease: Circ.easeOut,onComplete:function() {
               idc("ageswipe").getElementsByTagName("span")[0].innerHTML = age;
                pandisable = false;
                TweenMax.fromTo(idc("ageswipe").getElementsByTagName("span")[0], 0.3,{y:"-100%"} , {y:"0%",opacity:1, ease: Circ.easeOut});
            }});
        }
        profileAccept();

    });
}
function weightChange() {
     var ageItem = new Hammer.Manager(idc("weight"));
    ageItem.add( new Hammer.Pan({ direction: Hammer.DIRECTION_ALL, threshold:2 }) );
    
    var weight = 75;
        window.localStorage.setItem("weight",75);
    ageItem.on('panup', function(ev) {
        if(!pandisable) {
        pandisable = true;
            weight++;
        window.localStorage.setItem("weight",weight);
        TweenMax.to(idc("weight").getElementsByTagName("span")[0], 0.3,  {y:"-100%",opacity:0, ease: Circ.easeOut,onComplete:function() {
               
                   idc("weight").getElementsByTagName("span")[0].innerHTML = weight + "kg";
            pandisable = false;
            TweenMax.fromTo(idc("weight").getElementsByTagName("span")[0], 0.3,{y:"100%"} , {y:"0%",opacity:1, ease: Circ.easeOut});
        }});
        }
profileAccept();
    });
    ageItem.on('pandown', function(ev) {
        if(!pandisable) {
            pandisable = true;

            weight--;

            if(weight < 1) {
                weight = 1;
            }
        window.localStorage.setItem("weight",weight);
            TweenMax.to(idc("weight").getElementsByTagName("span")[0], 0.3,  {y:"100%",opacity:0, ease: Circ.easeOut,onComplete:function() {
               idc("weight").getElementsByTagName("span")[0].innerHTML = weight + "kg";
                pandisable = false;
                TweenMax.fromTo(idc("weight").getElementsByTagName("span")[0], 0.3,{y:"-100%"} , {y:"0%",opacity:1, ease: Circ.easeOut});
            }});
        }
        profileAccept();

    });
}
function changeGender(ele) {
    var ptag = ele.getElementsByTagName("p")[1];
    if(ptag.innerHTML == "" || ptag.innerHTML == "Male") {
        ptag.innerHTML = "Female";
        personalJSON["personalData"]["gender"] = "Female";
    }
    else {
        ptag.innerHTML = "Male";
        personalJSON["personalData"]["gender"] = "Male";
    }
        profileAccept();
}
function sevenDayPlan(numAuto) {
    var initialItem = idc("plan");
    var initialItems = initialItem.getElementsByClassName("slide");
    disableTouch = true;
    
    if(numAuto) {
         for(i = 0; i < initialItems.length;i++) {
            if(i == numAuto) {
                initialItems[i].className = "slide active";
                document.getElementsByClassName("slideMenu")[0].children[i].className = "vw2 vwh2 active";
              idc("dayMount").getElementsByTagName("span")[0].innerHTML = i + 1;
            }
            else {
                initialItems[i].className = "slide";
                document.getElementsByClassName("slideMenu")[0].children[i].className = "vw2 vwh2";
            }
        }
    }
    
    var activeI = initialItem.getElementsByClassName("active")[0];
    
    var numFound = parseInt(activeI.getAttribute("num")) - 1;
    
    var initialItemHamn = new Hammer(initialItem);
    initialItemHamn.on('swipeleft', function(ev) {
        sevendayleft();
    });
    initialItemHamn.on('swiperight', function(ev) {
        sevendayright();
    });
}
function sevendayleft() {
    var initialItem = idc("plan");
    var activeI = initialItem.getElementsByClassName("active")[0];
    var numFound = parseInt(activeI.getAttribute("num"));
    if(numFound < 6) {
        
    var initialItems = initialItem.getElementsByClassName("slide");

          TweenMax.to(idc("dayMount").getElementsByTagName("span")[0], 0.4,  {opacity:0, ease: Circ.easeOut,onComplete:function() {
              idc("dayMount").getElementsByTagName("span")[0].innerHTML = numFound + 2;
             TweenMax.to(idc("dayMount").getElementsByTagName("span")[0], 0.4,  {opacity:1, ease: Circ.easeOut});
          }});
    var  slideMenu = document.getElementsByClassName("slideMenu")[0];
        if(numFound + 1 < initialItem.getElementsByClassName("slide").length) {
        for(i = 0; i < initialItems.length;i++) {
            if(i == numFound + 1) {
            document.getElementsByClassName("slideMenu")[0].children[i].className = "vw2 vwh2 active";
            }
            else {
            document.getElementsByClassName("slideMenu")[0].children[i].className = "vw2 vwh2";
            }
        }
          TweenMax.to(initialItems[numFound], 1,  {x:"-100%", ease: Circ.easeOut,onComplete:function() {
              activeI.className = "slide";
              initialItems[numFound + 1].className = "slide active";
             var tl = new TimelineMax();    
             tl.fromTo(initialItems[numFound + 1], 1, {x:"100%"}, {x:"0%", ease: Circ.easeOut});
          }});
        }
    }
    if(numFound > 4) {
        TweenMax.to(document.getElementsByClassName("right")[0], 0.5,  {opacity:0, ease: Circ.easeOut});
    }
    if(numFound < 6) {
        TweenMax.to(document.getElementsByClassName("left")[0], 0.5,  {opacity:1, ease: Circ.easeOut});
    }
    
}
function sevendayright() {

    var initialItem = idc("plan");
    var initialItems = initialItem.getElementsByClassName("slide");
    var activeI = initialItem.getElementsByClassName("active")[0];
    var numFound = parseInt(activeI.getAttribute("num"));
    var  slideMenu = document.getElementsByClassName("slideMenu")[0];
        if(numFound > 0) {
          TweenMax.to(idc("dayMount").getElementsByTagName("span")[0], 0.4,  {opacity:0, ease: Circ.easeOut,onComplete:function() {
              idc("dayMount").getElementsByTagName("span")[0].innerHTML = numFound;
             TweenMax.to(idc("dayMount").getElementsByTagName("span")[0], 0.4,  {opacity:1, ease: Circ.easeOut});
          }});
            for(i = 0; i < initialItems.length;i++) {

                if(i == numFound - 1) {
                document.getElementsByClassName("slideMenu")[0].children[i].className = "vw2 vwh2 active";
                }
                else {
                document.getElementsByClassName("slideMenu")[0].children[i].className = "vw2 vwh2";
                }
            }
          TweenMax.to(initialItems[numFound], 1,  {x:"100%", ease: Circ.easeOut,onComplete:function() {
              activeI.className = "slide";
              initialItems[numFound - 1].className = "slide active";

             var tl = new TimelineMax();    
             tl.fromTo(initialItems[numFound -1], 1, {x:"-100%"}, {x:"0%", ease: Circ.easeOut});
          }});
            }
    if(numFound < 2) {
        TweenMax.to(document.getElementsByClassName("left")[0], 0.5,  {opacity:0, ease: Circ.easeOut});
    }
    if(numFound > 0) {
        TweenMax.to(document.getElementsByClassName("right")[0], 0.5,  {opacity:1, ease: Circ.easeOut});
    }
}
function startPlan() {
    
    displayMenu("", true, "walkthrough.html",function() {
        selectionScreen();
    },"true");
    var initialItem = idc("initial");
    var initialItems = initialItem.getElementsByClassName("slide");
    disableTouch = true;
    
    var activeI = initialItem.getElementsByClassName("active")[0];
    
    var numFound = parseInt(activeI.getAttribute("num")) - 1;
    
    var initialItemHamn = new Hammer(initialItem);
    initialItemHamn.on('swipeleft', function(ev) {
        
    var activeI = initialItem.getElementsByClassName("active")[0];
    var numFound = parseInt(activeI.getAttribute("num"));
    var  slideMenu = document.getElementsByClassName("slideMenu")[0];
        if(numFound + 1 < initialItem.getElementsByClassName("slide").length) {
        for(i = 0; i < initialItems.length;i++) {
            if(i == numFound + 1) {
            document.getElementsByClassName("slideMenu")[0].children[i].className = "vw2 vwh2 active";
            }
            else {
            document.getElementsByClassName("slideMenu")[0].children[i].className = "vw2 vwh2";
            }
        }
          TweenMax.to(initialItems[numFound], 1,  {x:"-100%", ease: Circ.easeOut,onComplete:function() {
              activeI.className = "slide";
              initialItems[numFound + 1].className = "slide active";
             var tl = new TimelineMax();    
             tl.fromTo(initialItems[numFound + 1], 1, {x:"100%"}, {x:"0%", ease: Circ.easeOut});
          }});
        }
    });
    initialItemHamn.on('swiperight', function(ev) {
    var activeI = initialItem.getElementsByClassName("active")[0];
    var numFound = parseInt(activeI.getAttribute("num"));
    var  slideMenu = document.getElementsByClassName("slideMenu")[0];
        if(numFound > 0) {
            for(i = 0; i < initialItems.length;i++) {

                if(i == numFound - 1) {
                document.getElementsByClassName("slideMenu")[0].children[i].className = "vw2 vwh2 active";
                }
                else {
                document.getElementsByClassName("slideMenu")[0].children[i].className = "vw2 vwh2";
                }
            }
          TweenMax.to(initialItems[numFound], 1,  {x:"100%", ease: Circ.easeOut,onComplete:function() {
              activeI.className = "slide";
              initialItems[numFound - 1].className = "slide active";

             var tl = new TimelineMax();    
             tl.fromTo(initialItems[numFound -1], 1, {x:"-100%"}, {x:"0%", ease: Circ.easeOut});
          }});
            }
    });
}
function profileSetup() {
    var maintable = idc("maintable");
    var mainrow = maintable.getElementsByClassName("row");
    personalJSON = JSON.parse(window.localStorage.getItem("data"));
    mainrow[0].children[1].children[0].innerHTML = personalJSON["personalData"]["firstname"];
    mainrow[1].children[1].children[0].innerHTML = personalJSON["personalData"]["age"];
    mainrow[2].children[1].children[0].innerHTML = personalJSON["personalData"]["gender"];
    mainrow[3].children[1].children[0].innerHTML = personalJSON["personalData"]["email"];
    
    var startday = window.localStorage.getItem("startday");
    startday += "/" + (parseInt(window.localStorage.getItem("startmonth")) +1);
    startday += "/" + window.localStorage.getItem("startyear");
    mainrow[4].children[1].children[0].innerHTML = startday;
    var reminder =     window.localStorage.getItem("reminder1hour");
    reminder += ":" + window.localStorage.getItem("reminder1minute");
    reminder +=    " and " + window.localStorage.getItem("reminder2hour");
    reminder += ":" + window.localStorage.getItem("reminder2minute");
    mainrow[5].children[1].children[0].innerHTML = reminder;

    var sugarintake = window.localStorage.getItem("sugarintake");
    mainrow[6].children[1].children[0].innerHTML = sugarintake;
    var motivators1 = personalJSON["personalData"]["motivators1"];
    var motivators2 = personalJSON["personalData"]["motivators2"];
    var motivators3 = personalJSON["personalData"]["motivators3"];
    var motivators4 = personalJSON["personalData"]["motivators4"];
    mainrow[7].children[1].children[0].innerHTML = "";
    if(motivators1 == "true")
        mainrow[7].children[1].children[0].innerHTML += "Weight<br>";
    if(motivators2 == "true")
        mainrow[7].children[1].children[0].innerHTML += "Health<br>";
    if(motivators3 == "true")
        mainrow[7].children[1].children[0].innerHTML += "Energy levels & sleep<br>";
    if(motivators4 == "true")
        mainrow[7].children[1].children[0].innerHTML += "Mood";
    
    
    if(mainrow[7].children[1].children[0].innerHTML == "")
        mainrow[7].children[1].children[0].innerHTML = "No motivators";
    
    if(personalJSON["personalData"]["weight"] != null) 
    mainrow[8].children[1].children[0].innerHTML = personalJSON["personalData"]["weight"] + " kg";
    else
    mainrow[8].children[1].children[0].innerHTML = "Enter weight";
}
function addprofileChange(functiontorun) {
    document.getElementsByClassName("close")[0].ontouchstart = function() {
         functiontorun();profileSetup();           closePopup();
    }
    document.getElementsByClassName("setButton")[0].ontouchstart = function() {
        functiontorun(); profileSetup();           closePopup();
    }
}
function dailyTimer() {
    
    document.getElementsByClassName("close")[0].ontouchstart = function() {
           closePopup();
        setReminders();
    personalJSON["personalData"]["reminder1hour"] = window.localStorage.getItem("reminder1hour" );
    personalJSON["personalData"]["reminder2hour"] = window.localStorage.getItem("reminder2hour" );
    personalJSON["personalData"]["reminder1minute"] = window.localStorage.getItem("reminder1minute" );
    personalJSON["personalData"]["reminder2minute"] = window.localStorage.getItem("reminder2minute" );
                    daily();
    }
    document.getElementsByClassName("setButton")[0].ontouchstart = function() {
        closePopup();
        setReminders();
    personalJSON["personalData"]["reminder1hour"] = window.localStorage.getItem("reminder1hour" );
    personalJSON["personalData"]["reminder2hour"] = window.localStorage.getItem("reminder2hour" );
    personalJSON["personalData"]["reminder1minute"] = window.localStorage.getItem("reminder1minute" );
    personalJSON["personalData"]["reminder2minute"] = window.localStorage.getItem("reminder2minute" );
        daily();
    }
}
function profileAccept() {
    personalJSON["personalData"]["age"] = window.localStorage.getItem("age" );
    personalJSON["personalData"]["startday"] = window.localStorage.getItem("startday" );
    personalJSON["personalData"]["startmonth"] = window.localStorage.getItem("startmonth" );
    personalJSON["personalData"]["startyear"] = window.localStorage.getItem("startyear" );
    personalJSON["personalData"]["reminder1hour"] = window.localStorage.getItem("reminder1hour" );
    personalJSON["personalData"]["reminder2hour"] = window.localStorage.getItem("reminder2hour" );
    personalJSON["personalData"]["reminder1minute"] = window.localStorage.getItem("reminder1minute" );
    personalJSON["personalData"]["reminder2minute"] = window.localStorage.getItem("reminder2minute" );
    personalJSON["personalData"]["motivators1"] = window.localStorage.getItem("motivator0" );
    personalJSON["personalData"]["motivators2"] = window.localStorage.getItem("motivator1" );
    personalJSON["personalData"]["motivators3"] = window.localStorage.getItem("motivator2" );
    personalJSON["personalData"]["motivators4"] = window.localStorage.getItem("motivator3" );
    personalJSON["personalData"]["weight"] = window.localStorage.getItem("weight" );
    window.localStorage.setItem("data", JSON.stringify(personalJSON));
    updateToServer();
}
function updateToServer() {
    if(hasInternet() == true && personalJSON["personalData"]["email"]) {

        ajaxPost(
        "http://www.network-divinity.com/viridian/updateuser.php", 
        function (responseView) {
            if(responseView == "success") {

            }
        },
       'factualid=' + fbId + "&data=" + JSON.stringify(personalJSON) + "&registerPush=" + window.localStorage.getItem("regID")  + "&platform=" + window.localStorage.getItem("platform") + "&usertype=" + window.localStorage.getItem("usertype") + "&email=" + personalJSON["personalData"]["email"] );
    }
}
function methodswap(num, dnum) {
    var docFind = document.getElementsByClassName("ingrd")[dnum];
    var docFindtypes = document.getElementsByClassName("ingrd")[dnum].getElementsByClassName("types")[0];
    if(num == 0) {
        docFind.getElementsByClassName("overMark")[0].setAttribute("active","true");
        docFind.getElementsByClassName("overMark")[1].setAttribute("active","false");
        docFindtypes.children[0].setAttribute("active","true");
        docFindtypes.children[1].setAttribute("active","false");
    }
    else {
        docFind.getElementsByClassName("overMark")[1].setAttribute("active","true");
        docFind.getElementsByClassName("overMark")[0].setAttribute("active","false");
        docFindtypes.children[1].setAttribute("active","true");
        docFindtypes.children[0].setAttribute("active","false");
    }
}
function recipeTime(num) {
    var docFind = document.getElementsByClassName("ingrd");
    var docFindbutton = document.getElementsByClassName("recipe")[0].getElementsByTagName("div");

    for(i = 0; i < docFind.length;i++) {
        docFind[i].setAttribute("active", false);
        if(num == i) {
            docFind[i].setAttribute("active", true);
        }
    }
    for(i = 0; i < docFindbutton.length;i++) {
        docFindbutton[i].setAttribute("active", false);
        if(num == i) {
            docFindbutton[i].setAttribute("active", true);
        }
    }
}

var homepageLink = "";
function seerecipes() {
    var planItem = idc("plan");
    
   var singleItem = planItem.getElementsByClassName("active")[0];
    pageChange("pages/recipes/day" + (parseInt(singleItem.getAttribute("num")) + 1 ) + ".html", "fade", function() {
        displayMenu("", true, "setup/7dayplan.html",function() {  
            sevenDayPlan(parseInt(singleItem.getAttribute("num") ));
            displayMenu("", true, "set-up.html",function() {
             setupComplete(7); 
            });   
        });
    });
}
var diffDays;
function daily() {
    updateToServer();
                window.localStorage.setItem("logged", "true");
                displayBotMenu("", true);
                displayMenu("", true, "login.html",function() {loginMenu();
                },"true");
   // var startday = window.localStorage.setItem("startday", 15);
    var startday = window.localStorage.getItem("startday");
    var startmonth = window.localStorage.getItem("startmonth");
    var startyear = window.localStorage.getItem("startyear");
    var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
    var firstDate = new Date(startyear,startmonth,startday);
    var secondDate = new Date();
         diffDays = Math.floor(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay))) + 1;
    if (firstDate > secondDate) {
        idc("dailynum").innerHTML = diffDays + " days away";
        
        document.getElementsByClassName("noday")[0].style.display ="block";
        document.getElementById("mealplantoday").ontouchstart = function() {
            pageChange("pages/setup/7dayplan.html", "fade", function() { 
                sevenDayPlan();
                displayMenu("", true, "daily.html",function() {  
                    daily();
                });
            });
        }
    }
    else if(diffDays < 8) {
        idc("dailynum").innerHTML = "Day " + diffDays;
        document.getElementsByClassName("daily" + diffDays)[0].style.display = "block";
        var gramsSaved = parseInt(window.localStorage.getItem("savedsugar")) * diffDays;
        var sugarsaved = {amount:0};
        TweenLite.to(sugarsaved, 1, {amount:gramsSaved, roundProps:"amount",onUpdate:function(){
            if(sugarsaved.amount < 100) {
                if(sugarsaved.amount < 10) {
  idc("gramSaved").innerHTML = "00" +sugarsaved.amount;
            }
                else {
  idc("gramSaved").innerHTML = "0" +sugarsaved.amount;

                }
            }
                else {
  idc("gramSaved").innerHTML =sugarsaved.amount;

                }
}, ease:Circ.easeOut});
    personalJSON["personalData"]["reminder1hour"] = window.localStorage.getItem("reminder1hour" );
    personalJSON["personalData"]["reminder2hour"] = window.localStorage.getItem("reminder2hour" );
    personalJSON["personalData"]["reminder1minute"] = window.localStorage.getItem("reminder1minute" );
    personalJSON["personalData"]["reminder2minute"] = window.localStorage.getItem("reminder2minute" );
        document.getElementsByClassName("time1")[0].innerHTML = window.localStorage.getItem("reminder1hour" ) + ":" + window.localStorage.getItem("reminder1minute" ) + " am";
        document.getElementsByClassName("time2")[0].innerHTML = window.localStorage.getItem("reminder2hour" ) + ":" + window.localStorage.getItem("reminder2minute" ) + " pm";
        document.getElementById("mealplantoday").ontouchstart = function() {
            pageChange("pages/recipes/day" + diffDays + ".html", "fade", function() {
                displayMenu("", true, "daily.html",function() {  
                    daily();
                });
            });
        }
    }
    else {
            pageChange("pages/finished.html", "fade", function() { 
               
            });
    }
    
}
function moodClick(ele,num) {
    var addstring = "";
    if(window.localStorage.getItem("mood") != null) {
        addstring = window.localStorage.getItem("mood");
    }         
                
    if(ele.getAttribute("active") == "false") {
        ele.setAttribute("active", "true");
        TweenMax.to(ele.children[0], 0.2,  {scale:"0", ease: Circ.easeOut,onComplete:function() {
            
            window.localStorage.setItem("mood", addstring + "," + num + ";" + Date() + ";active");
            ele.children[0].src = "img/emoji/" + ele.children[0].getAttribute("url") + ".png";
            TweenMax.to(ele.children[0], 0.2,  {scale:"1", ease: Circ.easeOut});
        }});

    }
    else {
        ele.setAttribute("active", "false");
        TweenMax.to(ele.children[0], 0.2,  {scale:"0", ease: Circ.easeOut,onComplete:function() {
            window.localStorage.setItem("mood", addstring + "," + num + ";" + Date() + ";inactive");
            
            ele.children[0].src = "img/emoji/" + ele.children[0].getAttribute("url") + "-grey.png";
            TweenMax.to(ele.children[0], 0.2,  {scale:"1", ease: Circ.easeOut});
        }});
    }
}
function openFeeling(ele) {
}
var shoppingList = {list:[]};
function openShopping() {
    displayBotMenu("", true);
    if(window.localStorage.getItem("shoppingList"))
    shoppingList = JSON.parse(window.localStorage.getItem("shoppingList"));
    var scrollIngred = document.getElementsByClassName("scrollIngred")[0].getElementsByTagName("button");
   
    for(i = 0; i < shoppingList.list.length;i++) {
        if(shoppingList.list[i].active == "true") {
            scrollIngred[parseInt(shoppingList.list[i].name)].setAttribute("active","true");
        }
    }
}
function gotShopping(ele) {
    var savedInt = 0;
    var scrollIngred = document.getElementsByClassName("scrollIngred")[0];
    for(i = 0; i < scrollIngred.getElementsByTagName("button").length;i++) {
        if(ele.parentNode == scrollIngred.getElementsByTagName("button")[i]) {
            savedInt = i;
        }
    }
    if(ele.parentNode.getAttribute("active") == "false") {
        ele.parentNode.setAttribute("active", "true");
        var numAmount = false;
    var listpos = 0;
        if(shoppingList.list.length != 0) {
          
        for(i = 0; i < shoppingList.list.length;i++) {
            if(shoppingList.list[i].name == savedInt) {
               numAmount  = true;
                listpos = i;
    break;
            }
        }  
        }
        if(numAmount) {
            shoppingList.list[listpos].active = "true";
        }
        else {
            shoppingList.list.push({name:savedInt,active:"true"});
        }
        
    }
    else {
        ele.parentNode.setAttribute("active", "false");
        var listpos = 0;
        for(i = 0; i < shoppingList.list.length;i++) {
            if(shoppingList.list[i].name == savedInt) {
               numAmount  = true;
                listpos = i;
                break;
            }
        }
        shoppingList.list[listpos].active = "false";

    }
    window.localStorage.setItem("shoppingList", JSON.stringify(shoppingList));
}

function shareToggle(toggleType,placeholder,successType) {
    if(toggleType == "true") {
        if(successType == "daily") {
            placeholder = "I'm on day " + diffDays + " of the viridian 7 day detox";
        }
        shareNow(placeholder,"Viridian 7 day detox","http://www.network-divinity.com/viridian/logo.png");
    }
}
function shareNow(captionTitle,descriptionTitle,picturelink) {
    facebookConnectPlugin.showDialog({method:"feed",href:"http://www.viridian-nutrition.com/",caption:captionTitle,description:descriptionTitle,picture:picturelink}, 
        function(result) {
            alert("Added to your news feed " + JSON.stringify(result));
        }, 
        function(e) {
            alert("Not added to your news feed " );
    });
}
function setName() {
    personalJSON["personalData"]["firstname"] = idc("name").value;
    window.localStorage.setItem("data", JSON.stringify(personalJSON));
}

function nextCheck() {
    if(homepageLink == "pages/daily.html") {
        document.getElementsByClassName("nextButton")[0].style.display = "none";
           
         displayMenu("", true, "daily.html",function() {
         daily();
        },"true");
    }
}
function settingsSetup() {
    var maintable = idc("maintable");
    
    if(window.localStorage.getItem("notification") == "no") {
        maintable.children[0].children[1].children[0].innerHTML = "Disallowed";
    }
}
function adjustNotifications(ele) {
    if(window.localStorage.getItem("notification") == "yes") {
    window.localStorage.setItem("notification", "no");
        ele.children[1].children[0].innerHTML = "Disallowed";
        
    }
    else {
    window.localStorage.setItem("notification", "yes");
        ele.children[1].children[0].innerHTML = "Allowed";
        
    }
    
}
function closeSideButtons() {
    idc("backbutton").style.opacity = "0";
    if(document.getElementsByClassName("nextButton")[0])
        document.getElementsByClassName("nextButton")[0].style.display = "none";
}
function openSideButtons() {
    idc("backbutton").style.opacity = "1";
}
    var currentMessageId = 0;   

function loadingScreenStart(messagesForLoad) {
    setTimeout(function(){ if(document.getElementById("popup").style.display == "block") {
         alert("Sign in Timeout");
                closePopup(); 
    } }, 15000);
     var loadingMessage = idc("loadingMessage");
      for (i= 0; i < messagesForLoad.length; i++) {
        var newmessageadd = document.createElement("span");
          newmessageadd.innerHTML = messagesForLoad[i];
          loadingMessage.appendChild(newmessageadd);
      }
    var tlMain = new TimelineMax({onRepeat:updateReps,repeat:-1});
    tlMain.staggerFromTo(loadingMessage.children, 0.5, {y:20,opacity:0}, {y:0,opacity:1, ease: Circ.easeOut},2,0)
    .staggerTo(loadingMessage.children, 0.01, {display:"block", ease: Circ.easeOut},2,0)
        .staggerFromTo(loadingMessage.children, 0.5, {y:0,opacity:1}, {opacity:0,y:-20,onComplete:function() {
        if(loadingMessage.children[currentMessageId])
        loadingMessage.children[currentMessageId].style.display = "none";
            currentMessageId++;
        }, ease: Circ.easeOut},2,1.49);
    var tlSugar = new TimelineMax({repeat:-1});
    tlSugar.fromTo(document.getElementsByClassName("sugarline")[0], 2, {scaleY:0,transformOrigin:"50% 0%"}, {scaleY:1, ease: Power0.easeNone})
    .fromTo(document.getElementsByClassName("sugar")[0], 1, {scaleY:0,transformOrigin:"50% 100%"}, {scaleY:1, ease:Circ.easeOut},"-=0.1");
    
}
function updateReps() {
    currentMessageId = 0;
}