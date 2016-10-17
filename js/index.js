/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        // window.localStorage.clear(); //try this to clear all local storage

        this.bindEvents();
        var phoneModel = window.device.model;
        var phoneModel = device.model;
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.startApp();
        phoneModel = window.device.model;
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
    },
    startApp: function() {
                    window.localStorage.setItem("platform",device.platform);  
        /* 
        window.FirebasePlugin.getInstanceId(function(token) {
            window.localStorage.setItem("regID", token);  
        }, function(error) {
            console.error(error);
        });
        window.FirebasePlugin.onNotificationOpen(function(notification) {
            
             pageChange("pages/start/take-tablet.html", "popup", function() {
             });
        }, function(error) {
            console.error(error);
        });
        if(deviceplatform == "ios" || device.platform == "iOS"|| device.platform == "IOS") {
            window.FirebasePlugin.grantPermission();
        }*/
        var splashScreen = 2000;
        if(window.localStorage.getItem("doneintro") != "true") {
            splashScreen = 6000;
        }
        
        setTimeout(function(){
            if( window.localStorage.getItem("data")) {
                personalJSON = JSON.parse(window.localStorage.getItem("data"));
            }
            
                
            if(window.localStorage.getItem("setupdone") != "done") {
                if(window.localStorage.getItem("doneintro") != "true") {
                    window.localStorage.setItem("doneintro", "true");  

                    pageChange("pages/intro.html", "fade", function() {
                        initialLoadTut();
                    });
                }
                else {
                    if(window.localStorage.getItem("rememberAllowed") == "true" && window.localStorage.getItem("logged") == "true") {
                        pageChange("pages/walkthrough.html", "fade", function() {
                            selectionScreen();
                        }); 
                        homepageLink ="pages/walkthrough.html";
                    }
                    else {
                        
    if(hasInternet() == false) {
        alert("please connect to the internet");
    }
                        pageChange("pages/login.html", "fade", function() {
                            
        document.getElementById("facebookLogin").addEventListener("click", function() {
            register();
        });
        loginMainSetup();
                        });
                    }
                }
            }
            else {
                if(window.localStorage.getItem("rememberAllowed") == "true" && window.localStorage.getItem("logged") == "true") {
                    pageChange("pages/daily.html", "fade", function() {
                daily();
                    }); 
                        homepageLink ="pages/daily.html";
                }
                else {
    if(hasInternet() == false) {
        alert("please connect to the internet");
    }
                        pageChange("pages/login.html", "fade", function() {
                            
        document.getElementById("facebookLogin").addEventListener("click", function() {
            register();
        });
        loginMainSetup();
                        });
                    
                }
            }
        }, splashScreen);
    },
	fblogin: function() {
        
                    var fbSuccess = function (userData) {
                        fullJSON = userData;
                        fbId = fullJSON.authResponse.userID;
                    if(!initalfbCheck)
                        fbCheck();
                
                    }
                    facebookConnectPlugin.login(["public_profile","user_birthday"],
                        fbSuccess,
                        function (error) { console.log("error " + JSON.stringify(error)); }
                    );
        
		  var fbLoginSuccess = function (userData) {
				fullJSON = userData;
                fbId = fullJSON.authResponse.userID;
                if(fbId) {
                    if(!initalfbCheck)
                    fbCheck();
                }
			}

			facebookConnectPlugin.getLoginStatus(
				fbLoginSuccess,
				function (error) { alert("error " + JSON.stringify(error)); }
			);
	}
};
var push ;
var initalfbCheck = false;
function fbCheck() {
    initalfbCheck = true;
    ajaxPost(
        "http://www.network-divinity.com/viridian/hasreg.php", 
        function (response) {
        if(response == "yes") {
            
            ajaxPost(
            "http://www.network-divinity.com/viridian/fbviewprofile.php", 
            function (responseView) {
                var foundjson = JSON.parse(responseView);
                window.localStorage.setItem("data",responseView);
                window.localStorage.setItem("logged", "true");
                window.localStorage.setItem("remember", "true");
                window.localStorage.setItem("rememberAllowed", "true");       
                window.localStorage.setItem("fbid", fbId);
                personalJSON = foundjson;
                window.localStorage.setItem("usertype", 0);

                afterLogin();
            },
           'factualid=' + fbId);

        }
        else if(response == "no") {
            registerGetInfo();
            setTimeout(function(){
                registerGetInfo();
            }, 1500);
        }
        else {
            alert("fail: " + response);
        }
            initalfbCheck = false;
    },
   'fbid=' + fbId);
}
        var phoneModel;

var fbId; 
var personalJSON;
var fullJSON;
var profileJSON;

function register() {
    app.fblogin();
}
function registerGetInfo() {
    facebookConnectPlugin.api("/" + fbId + "?fields=birthday,first_name,gender,email", ["public_profile","user_birthday","email"],
    function (result) {
        profileJSON = result;
        var datesset = result.birthday.split('/');
        
        personalJSON = JSON.parse('{"personalData": { "firstname":"' + profileJSON.first_name +'","email":"' + profileJSON.email +'","age":"' + calculateAge(new Date(datesset[2],datesset[0],datesset[1],0,0,0)) +'","relationship":"' + profileJSON.relationship_status + '","description":"' + profileJSON.bio +'","gender":"'+ profileJSON.gender +'","startday":"null","startmonth":"null","startyear":"null","reminder1hour":"null","reminder2hour":"null","reminder1minute":"null","reminder2minute":"null","motivators1":"null","motivators2":"null","motivators3":"null","motivators4":"null","weight":"null"},"version":0}');
                                  
        window.localStorage.setItem("age" , calculateAge(new Date(datesset[2],datesset[0],datesset[1],0,0,0)));
        
        ajaxPost(
            "http://www.network-divinity.com/viridian/register.php", 
            function (response) {
            if(response.indexOf("success") >= 0) {
                window.localStorage.setItem("usertype", 0);
                window.localStorage.setItem("remember", response.slice(0, -7));
                window.localStorage.setItem("rememberAllowed", "true");                    window.localStorage.setItem("data",JSON.stringify(personalJSON));

                afterLogin();
            } 
            else {
                alert("fb reg failed" + response);
            }
        },
       'typeuser=' + "0" + "&fbid=" + fbId + "&data=" + JSON.stringify(personalJSON) + "&registerPush=" + window.localStorage.getItem("regID")  + "&platform=" + window.localStorage.getItem("platform"));
    },
    function (error) {
        alert("fb confused " + JSON.stringify(error));
    });
}
function loginPage() {
    pageChange("pages/login.html", "fade", function() {
        document.getElementById("facebookLogin").addEventListener("click", function() {
            register();
        });
        loginMainSetup();
    });
}
function signIn() {
    var usernameV = idc("email").value;
    var passcodeV = idc("pass").value;
    
    if(usernameV != "" && passcodeV != "") {
        pageChange("pages/loading.html", "popup", function() {
                var messageArray = ["Gathering Data","Just making everything secure","loading...","please wait"]; 
                               loadingScreenStart(messageArray);
        });
        ajaxPost(
            "http://www.network-divinity.com/viridian/login.php", 
            function (response) {
            if(response.indexOf("allowed") >= 0) {
                var parts = response.split("}");
                var newJson =response.substring(response.indexOf('allowed') + 7);
                newJson = newJson.replace("new code","" );
                window.localStorage.setItem("data", newJson);
                personalJSON = JSON.parse(newJson);
                window.localStorage.setItem("usertype", 1);
                if(personalJSON["personalData"]["age"] != "null" || personalJSON["personalData"]["age"] != null)
                    window.localStorage.setItem("age" ,personalJSON["personalData"]["age"]);
                if(personalJSON["personalData"]["startday"] != "null" || personalJSON["personalData"]["startday"] != null)
                    window.localStorage.setItem("startday",personalJSON["personalData"]["startday"] );
                if(personalJSON["personalData"]["startmonth"] != "null" || personalJSON["personalData"]["startmonth"] != null)
                    window.localStorage.setItem("startmonth" ,personalJSON["personalData"]["startmonth"]);
                if(personalJSON["personalData"]["startyear"] != "null" || personalJSON["personalData"]["startyear"] != null)
                    window.localStorage.setItem("startyear" ,personalJSON["personalData"]["startyear"]);
                if(personalJSON["personalData"]["reminder1hour"] != "null" || personalJSON["personalData"]["reminder1hour"] != null)
                    window.localStorage.setItem("reminder1hour" , personalJSON["personalData"]["reminder1hour"]);
                if(personalJSON["personalData"]["reminder2hour"] != "null" || personalJSON["personalData"]["reminder2hour"] != null)
                    window.localStorage.setItem("reminder2hour" ,personalJSON["personalData"]["reminder2hour"]);
                if(personalJSON["personalData"]["reminder1minute"] != "null" || personalJSON["personalData"]["reminder1minute"] != null)
                    window.localStorage.setItem("reminder1minute" ,personalJSON["personalData"]["reminder1minute"]);
                if(personalJSON["personalData"]["reminder2minute"] != "null" || personalJSON["personalData"]["reminder2minute"] != null)
                    window.localStorage.setItem("reminder2minute" ,personalJSON["personalData"]["reminder2minute"]);
                if(personalJSON["personalData"]["motivators1"] != "null" || personalJSON["personalData"]["motivators1"] != null)
                    window.localStorage.setItem("motivator0" ,personalJSON["personalData"]["motivators1"]);
                if(personalJSON["personalData"]["motivators2"] != "null" || personalJSON["personalData"]["motivators2"] != null)
                    window.localStorage.setItem("motivator1" ,personalJSON["personalData"]["motivators2"]);
                if(personalJSON["personalData"]["motivators3"] != "null" || personalJSON["personalData"]["motivators3"] != null)
                    window.localStorage.setItem("motivator2" , personalJSON["personalData"]["motivators3"]);
                if(personalJSON["personalData"]["motivators4"] != "null" || personalJSON["personalData"]["motivators4"] != null)
                    window.localStorage.setItem("motivator3",personalJSON["personalData"]["motivators4"]);
                if(personalJSON["personalData"]["weight"] != "null" || personalJSON["personalData"]["weight"] != null)
                    window.localStorage.setItem("weight" ,personalJSON["personalData"]["weight"]);
                if((personalJSON["personalData"]["startday"] != "null" || personalJSON["personalData"]["startday"] != null) && (personalJSON["personalData"]["reminder1minute"] != "null" || personalJSON["personalData"]["reminder1minute"] != null)) {

    var needwalk = window.localStorage.setItem("setupdone", "done");
    var acceptTaC = window.localStorage.setItem("tac", "true");
                }
                
                afterLogin();
                
            } 
            else {
                alert(response);
            }
                closePopup();
        },
       'typeuser=' + "1" + "&username=" + usernameV + "&passcode=" + passcodeV  + "&registerPush=" + window.localStorage.getItem("regID")  + "&platform=" + window.localStorage.getItem("platform") );
        
    }
}
function attemptRegisterV() {
    var usernameV = idc("email").value;
    var passcodeV = idc("pass").value;

    if(usernameV != "" && passcodeV != "") {
        personalJSON = JSON.parse('{"personalData": { "firstname":"' + usernameV +'","email":"' + usernameV +'","age":"null","relationship":"unknown","description":"unknown","gender":"unknown","startday":"null","startmonth":"null","startyear":"null","reminder1hour":"null","reminder2hour":"null","reminder1minute":"null","reminder2minute":"null","motivators1":"null","motivators2":"null","motivators3":"null","motivators4":"null","weight":"null"},"version":0}');

        pageChange("pages/loading.html", "popup", function() {
                var messageArray = ["Gathering Data","Just making everything secure","loading...","please wait"]; 
                               loadingScreenStart(messageArray);
        });
        ajaxPost(
            "http://www.network-divinity.com/viridian/register.php", 
            function (response) {
            if(response == "wrong information") {
                alert("information did not get entered correctly");
            }
            else if(response.indexOf("success") >= 0) {
                window.localStorage.setItem("usertype", 1);
                window.localStorage.setItem("remember", response.slice(0, -7));
                window.localStorage.setItem("username", usernameV);
                if(idc("remuser").getAttribute("remember") == "yes")
                window.localStorage.setItem("rememberAllowed", "true");
                window.localStorage.setItem("logged", "true");
                    window.localStorage.setItem("data",JSON.stringify(personalJSON));
                afterLogin();

            } 
            else {
                alert(response);
            }
                closePopup();
        },
       'typeuser=' + "1" + "&username=" + usernameV + "&passcode=" + passcodeV + "&data=" + JSON.stringify(personalJSON));
    }
}
function rememberAccount(ele) {
    if(ele.getAttribute("rememberAllowed") == "no") {
        ele.setAttribute("rememberAllowed", "yes");     
         window.localStorage.setItem("rememberAllowed", "true");

    }
    else {
        ele.setAttribute("rememberAllowed", "no"); 
         window.localStorage.setItem("rememberAllowed", "false");
    }
}
function afterLogin() {
    var needwalk = window.localStorage.getItem("setupdone");
    var acceptTaC = window.localStorage.getItem("tac");
    window.localStorage.setItem("logged", "true");
    if(acceptTaC != "true") {
        pageChange("pages/disclaimer.html", "fade", function() {
                        homepageLink ="pages/walkthrough.html";
        });
    }
    else {
        if(window.localStorage.getItem("setupdone") != "done") {
            pageChange("pages/walkthrough.html", "fade", function() {
                        selectionScreen();
                        homepageLink ="pages/walkthrough.html";
            });
        }
        else {
            pageChange("pages/daily.html", "fade", function() {
                daily();
                        homepageLink ="pages/daily.html";
            });
        }
    }
}
var ajaxGet = function (url, callback) {
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
    xhr.open("GET", url,true);
    xhr.onreadystatechange=function() {
      if (xhr.readyState==4 && callback) {
        callback(xhr.responseText);
      }
    }
    xhr.send(null);
    return xhr;
}
var ajaxPost = function (url, callback,data) {
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
    xhr.open("POST", url,true);
    xhr.onreadystatechange=function() {
      if (xhr.readyState==4 && callback) {
        callback(xhr.responseText);
      }
    }
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send(data);
    return xhr;
}
function calculateAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}
function viewAdjust() {
        var vw = (viewport().width/100);
        document.body.style.fontSize = vw + "px";
}
        viewAdjust();
function idc(id) {
    return document.getElementById(id);
}
function displayMenu(menuAnim, displayyes, backLink, backlinkFunction, hideBack) {
    if(displayyes == true) {
        idc("navigation").style.display = "block";
    }
    else {
        idc("navigation").style.display = "none";
    }
    if(hideBack) {
        idc("backbutton").style.visibility = "hidden";
    }
    else {
        idc("backbutton").style.visibility = "visible";
    }
    idc("backbutton").ontouchstart = function() {
        pageChange("pages/" + backLink, "fade", function() {
                    backlinkFunction();
        });
    }
}
function displayBotMenu(menuAnim, displayyes) {
    if(displayyes == true) {
        idc("botnavigation").style.display = "block";
        var botMenu = idc("botMenu");
            botMenu.style.display = "none";
    }
    else {
        idc("botnavigation").style.display = "none";
        var botMenu = idc("botMenu");
            botMenu.style.display = "none";
    }
}
function homepageFunction() {
    if(homepageLink == "pages/daily.html") {
        daily();
    }
    else {
        selectionScreen();
    }
                    
}
function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    return states[networkState];
}
function hasInternet() {
    var connectStatus = true;
    if(checkConnection() == "No network connection" || checkConnection() == "Unknown connection") {
        connectStatus = false;
    }
    return connectStatus;
}