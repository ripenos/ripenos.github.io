let startbutton = document.getElementsByClassName("startbutton")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]

let tabb = document.getElementsByClassName("tabbutton")[0]
let tabmenu = document.getElementsByClassName("tabmenu")[0]
let tabview = document.getElementsByClassName("tabview")[0]
let desktops = document.getElementsByClassName("desktops")[0]

let action = document.getElementsByClassName("actionbutton")[0]
let actionmenu = document.getElementsByClassName("actionmenu")[0]
let action2 = document.getElementsByClassName("actionbutton2")[0]
let actionmenu2 = document.getElementsByClassName("actionmenu2")[0]
let action3 = document.getElementsByClassName("actionbutton3")[0]
let actionmenu3 = document.getElementsByClassName("actionmenu3")[0]
let action4 = document.getElementsByClassName("actionbutton4")[0]
let actionmenu4 = document.getElementsByClassName("actionmenu4")[0]
let actionmenu5 = document.getElementsByClassName("wrapper")[0]
let action5 = document.getElementById("Calbtn")
let action5C = document.getElementById("CalbtnC")
let actionmenu6 = document.getElementById("notyMenu")
let action6 = document.getElementById("notyBtn")
let action6C = document.getElementById("notyBtnC")
let widgetB = document.getElementsByClassName("widgetbutton")[0]
let widgetM = document.getElementsByClassName("widgets")[0]
var choice = localStorage.getItem("BackgroundAppsLayout");
var choice2 = localStorage.getItem("TaskbarIconArrangement");

const savedPw = localStorage.getItem('pw');

function ShowDs(){
  setTimeout(() => {
    if (savedPw) {
      document.getElementById('tempLockSignIn').style.display = "block"
      document.getElementById('UnlockBtnTempLock').style.display = "none"
      document.getElementById('mySignInForRGOS').style.display = "block"
      document.getElementById('myBlackP').style.opacity = "0"
    }
    else{
      document.getElementById('tempLockSignIn').style.display = "none"
      document.getElementById('UnlockBtnTempLock').style.display = "block"
      document.getElementById('mySignInForRGOS').style.display = "none"
      document.getElementById('myBlackP').style.opacity = "1"
      setTimeout(() => {
          document.getElementById("myblank").style.visibility = 'hidden';
          document.getElementById("myblank").style.opacity = '0';
          if (choice2 === "A1") {
            TBCenteredIco()
          } else {
            TBClassicIco()
          }
        }, 750);
  
        setTimeout(() => {document.getElementById('mytaskbar').style.transform = "translateX(-50%), translateY(-85px)";}, 1500);
        
        setTimeout(() => {document.getElementById('mytaskbar').style.transition = "all 0.4s ease-out";}, 1625);
  
        setTimeout(() => {
          document.getElementById('mytaskbar').style.transform = "translateX(-50%) translateY(0px)";
          document.getElementById('welcome-page').style.webkitTransform = " translate(-50%, -52.5%) scale(1.05)";
          document.getElementById('welcome-page').style.transform = " translate(-50%, -52.5%) scale(1.05)";
          document.getElementById('DeskIcons').style.opacity = "1";
  
          if (choice === "B1") {
            document.getElementById('tiles-tray').style.display= 'none'; 
            document.getElementById('med-icon-tray').style.display= 'block';
            document.getElementById('tile-trayBtn').classList.remove('imgActive');
            document.getElementById('grid-trayBtn').classList.add('imgActive');
          } else {
            document.getElementById('tiles-tray').style.display= 'block'; 
            document.getElementById('med-icon-tray').style.display= 'none';
            document.getElementById('tile-trayBtn').classList.add('imgActive');
            document.getElementById('grid-trayBtn').classList.remove('imgActive');
          }
        }, 1750);
        
        setTimeout(() => {document.getElementById('mytaskbar').style.transition = "all 0.3s";}, 2250);
    }
  }, 6350);

  document.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      LoginWR();
    }
  });
}

function LoginWR(){
  if(document.getElementById('pwInLR1').value == savedPw && document.getElementById('pwInLR1').value !== ""){
    document.getElementById('passkeyLParaR1').innerHTML = "Verified"
    setTimeout(() => {
      document.getElementById("myblank").style.visibility = 'hidden';
      document.getElementById("myblank").style.opacity = '0';
      if (choice2 === "A1") {
        TBCenteredIco()
      } else {
        TBClassicIco()
      }
    }, 750);

    setTimeout(() => {document.getElementById('mytaskbar').style.transform = "translateX(-50%), translateY(-85px)";}, 1500);
    
    setTimeout(() => {document.getElementById('mytaskbar').style.transition = "all 0.4s ease-out";}, 1625);

    setTimeout(() => {
      document.getElementById('mytaskbar').style.transform = "translateX(-50%) translateY(0px)";
      document.getElementById('welcome-page').style.webkitTransform = " translate(-50%, -52.5%) scale(1.05)";
      document.getElementById('welcome-page').style.transform = " translate(-50%, -52.5%) scale(1.05)";
      document.getElementById('DeskIcons').style.opacity = "1";

      if (choice === "B1") {
        document.getElementById('tiles-tray').style.display= 'none'; 
        document.getElementById('med-icon-tray').style.display= 'block';
        document.getElementById('tile-trayBtn').classList.remove('imgActive');
        document.getElementById('grid-trayBtn').classList.add('imgActive');
      } else {
        document.getElementById('tiles-tray').style.display= 'block'; 
        document.getElementById('med-icon-tray').style.display= 'none';
        document.getElementById('tile-trayBtn').classList.add('imgActive');
        document.getElementById('grid-trayBtn').classList.remove('imgActive');
      }
    }, 1750);
    
    setTimeout(() => {document.getElementById('mytaskbar').style.transition = "all 0.3s";}, 2250);
    }
  else{
    document.getElementById('passkeyLParaR1').innerHTML = "not verified..try again:"
    document.getElementById('pwInLR1').value = ""
  }
}

function ShowPwTxt() {
  var x = document.getElementById("pwInLR1");
  if (x.type === "password") {
    x.type = "text";
    document.getElementById('pwVisLR1').innerHTML = "visibility_off"
  } else {
    x.type = "password";
    document.getElementById('pwVisLR1').innerHTML = "visibility"
  }
  var x2 = document.getElementById("pwInLR1L");
  if (x2.type === "password") {
    x2.type = "text";
    document.getElementById('pwVisLR1L').innerHTML = "visibility_off"
  } else {
    x2.type = "password";
    document.getElementById('pwVisLR1L').innerHTML = "visibility"
  }
}

function closeWIndow() {
  document.getElementById("myblank").style.visibility = 'visible';
  document.getElementById("myblank").style.opacity = '1';
  document.getElementById("myBlackP").style.display = 'none';
  document.getElementById('mySignInForRGOS').style.display = "none"
  document.getElementById("myBlackSP").style.display = 'block';
  setTimeout(() => {
      location.replace('https://ripenos.github.io')
  }, 3750);
}

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    var ampm = "";
    m = checkTime(m);

    if (h > 12) {
        h = h - 12;
        ampm = " PM";
    } else if (h == 12){
        h = 12;
        ampm = " PM";
    } else if (h < 12){
        ampm = " AM";
    } else {
        ampm = "PM";
    };

    document.getElementById('txt').innerHTML =  h + ":" + m+ampm;
    document.getElementById('txtC').innerHTML =  h + ":" + m+ampm;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

function StartDate(){
    const dToday = new Date();
    let dt = dToday.getDate();

    document.getElementById('txtdty').innerHTML =  dt + '/' + (dToday.getMonth() + 1) + '/' + dToday.getFullYear();
    document.getElementById('txtdtyC').innerHTML =  dt + '/' + (dToday.getMonth() + 1) + '/' + dToday.getFullYear();
    setTimeout(startTime, 1000);
}

function startTimeH() {
const today2 = new Date();
let h2 = today2.getHours();
let m2 = today2.getMinutes();
m2 = checkTime2(m2);
document.getElementById('txtH').innerHTML =  h2 + ":" + m2;
setTimeout(startTimeH, 1000);
}

function checkTime2(i) {
if (i < 10) {i = "0" + i}; 
return i;
}

function StartDateH(){
const dToday2 = new Date();
let dt2 = dToday2.getDate();
var myDate2 = new Date();
var myDate2M = new Date();
var myDate2MF = new Date();
var myDay2 = myDate2.getDay();
var myMonth2 = myDate2M.getMonth();
var myYear2 = myDate2MF.getFullYear();

var weekday2 = ['Sun', 'Mon', 'Tues',
'Wed', 'Thu', 'Fri', 'Sat'
];

var Months2 = ['January', 'February', 'March',
'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
];

document.getElementById("txtdtyH").innerHTML =
weekday2[myDay2] + ", " + Months2[myMonth2] + " " + dt2;
setTimeout(startTimeH, 1000);
}

  var GreetDate = new Date();
  var hrs = GreetDate.getHours();
  var greet;
  if (hrs < 12)
  greet = 'Good Morning';
  else if (hrs >= 12 && hrs <= 17)
  greet = 'Good Afternoon';
  else if (hrs >= 17 && hrs <= 24)
  greet = 'Good Evening';
  const savedTextValue = localStorage.getItem('UserPreviewName');

if (savedTextValue) {document.getElementById('greetings').innerHTML ='<b>' + greet + ', ' + savedTextValue + '</b>';}
else{document.getElementById('greetings').innerHTML ='<b>' + greet + ', ' + 'Admin' + '</b>';}

const savedTextValue2 = localStorage.getItem('UserName');
if (savedTextValue2) {
  document.getElementById('UsernameWindowsStart').innerHTML = savedTextValue2;
}
else{
  document.getElementById('UsernameWindowsStart').innerHTML = 'Admin6901';
}

const userPfpWin = localStorage.getItem('UserPfp');
if (userPfpWin) {
  document.getElementById('startPfp').src = userPfpWin;
  document.getElementById('TempLockPfp').src = userPfpWin;
}
else{
  document.getElementById('startPfp').src = '../Ripenos/Assets/UI/icons8-male-user-96.png';
  document.getElementById('TempLockPfp').src = '../Ripenos/Assets/UI/icons8-male-user-96.png';
}

// Startmenu
  startbutton.addEventListener("click", ()=>{
	if(startmenu.style.bottom == "65px"){
      startmenu.style.bottom = "-665px";
      startbutton.classList.remove('taskbarbuttonActive');
      setTimeout(() => {startmenu.style.display = "none";}, 500);
	}
	else{
    startmenu.style.display = "block";
    setTimeout(() => {
      startmenu.style.bottom = "65px";
      startbutton.classList.add('taskbarbuttonActive')
      tabb.classList.remove('taskbarbuttonActive')
      document.getElementById('widgetbtn').classList.remove('taskbarbuttonActive')
      widgetM.style.bottom = "-1665px";
      tabview.style.opacity = "0"
      desktops.style.opacity = "0"
    }, 350);
    setTimeout(() => {
      tabmenu.style.display = "none";
      widgetM.style.display = "none";
    }, 500);
    }
})

function ShowPowerOptStart(){
    document.getElementById('PowerOptStart').style.opacity = "1"
    document.getElementById('PowerOptStart').style.pointerEvents = "all"
}

function ShowPowerOptStartClose(){
  document.getElementById('PowerOptStart').style.opacity = "0"
  document.getElementById('PowerOptStart').style.pointerEvents = "none"
}

function getVal() {
    const val = document.getElementById('SearchInput').value;
    window.open("https://www.google.com/search?q=" + val, '_blank');
}

var SearchVal = document.getElementById("SearchInput");

SearchVal.addEventListener("keydown", function (e) {if (e.keyCode === 13) {validate(e);}});

function validate(e) {window.open("https://www.google.com/search?q=" + SearchVal.value, '_blank');}

//tab menu
tabb.addEventListener("click", ()=>{
	if(tabmenu.style.display == "block"){
    tabview.style.opacity = "0"
    desktops.style.opacity = "0"
    setTimeout(() => {tabmenu.style.display = "none";}, 450);
    tabb.classList.remove('taskbarbuttonActive')
	}
	else{
    tabmenu.style.display = "block";
    setTimeout(() => {
      tabview.style.opacity = "1"
      desktops.style.opacity = "1"
      tabb.classList.add('taskbarbuttonActive')
      startbutton.classList.remove('taskbarbuttonActive')
      document.getElementById('widgetbtn').classList.remove('taskbarbuttonActive')
      startmenu.style.bottom = "-665px";
    }, 350);
    setTimeout(() => {
      startmenu.style.display = "none";
      widgetM.style.display = "none";
    }, 450);
	}
})

//action menu 
action.addEventListener("click", ()=>{
	if(actionmenu.style.bottom == "65px"){
    actionmenu.style.bottom = "-665px";
    setTimeout(() => {actionmenu.style.display = "none";}, 450);
    action.classList.remove('taskbarbuttonActive')
	}
	else{
    actionmenu.style.display = "block";
    setTimeout(() => {
      actionmenu.style.bottom = "65px";
      actionmenu2.style.bottom = "-665px";
      actionmenu3.style.bottom = "-665px";
      actionmenu4.style.bottom = "-665px";
      actionmenu5.style.bottom = "-665px";
      actionmenu6.style.bottom = "-665px";
      tabview.style.opacity = "0"
      desktops.style.opacity = "0"
      action.classList.add('taskbarbuttonActive')
      action2.classList.remove('taskbarbuttonActive')
      action3.classList.remove('taskbarbuttonActive')
      action4.classList.remove('taskbarbuttonActive')
      action5.classList.remove('taskbarbuttonActive')
      action5C.classList.remove('taskbarbuttonActive')
      action6.classList.remove('taskbarbuttonActive')
      action6C.classList.remove('taskbarbuttonActive')
      tabb.classList.remove('taskbarbuttonActive')
      document.getElementById('glanceBtnImg').style.transform = 'rotate(0)'
    }, 450);
    setTimeout(() => {
      actionmenu2.style.display = "none";
      actionmenu3.style.display = "none";
      actionmenu4.style.display = "none";
      actionmenu5.style.display = "none";
      actionmenu6.style.display = "none";
      tabmenu.style.display = "none"
    }, 650);
	}
})

action2.addEventListener("click", ()=>{
	if(actionmenu2.style.bottom == "65px"){
    actionmenu2.style.bottom = "-665px";
    setTimeout(() => {actionmenu2.style.display = "none";}, 450);
    action2.classList.remove('taskbarbuttonActive')
	}
	else{
    actionmenu2.style.display = "block";
    setTimeout(() => {
      actionmenu2.style.bottom = "65px";
      actionmenu.style.bottom = "-665px";
      actionmenu3.style.bottom = "-665px";
      actionmenu4.style.bottom = "-665px";
      actionmenu5.style.bottom = "-665px";
      actionmenu6.style.bottom = "-665px";
      tabview.style.opacity = "0"
      desktops.style.opacity = "0"
      action.classList.remove('taskbarbuttonActive')
      action2.classList.add('taskbarbuttonActive')
      action3.classList.remove('taskbarbuttonActive')
      action4.classList.remove('taskbarbuttonActive')
      action5.classList.remove('taskbarbuttonActive')
      action5C.classList.remove('taskbarbuttonActive')
      action6.classList.remove('taskbarbuttonActive')
      action6C.classList.remove('taskbarbuttonActive')
      tabb.classList.remove('taskbarbuttonActive')
      document.getElementById('glanceBtnImg').style.transform = 'rotate(0)'
    }, 450);
    setTimeout(() => {
      actionmenu.style.display = "none";
      actionmenu3.style.display = "none";
      actionmenu4.style.display = "none";
      actionmenu5.style.display = "none";
      actionmenu6.style.display = "none";
      tabmenu.style.display = "none"
    }, 650);
	}
})

action3.addEventListener("click", ()=>{
	if(actionmenu3.style.bottom == "65px"){
    actionmenu3.style.bottom = "-665px";
    setTimeout(() => {actionmenu3.style.display = "none";}, 450);
    action3.classList.remove('taskbarbuttonActive')
	}
	else{
    actionmenu3.style.display = "block";
    setTimeout(() => {
      actionmenu3.style.bottom = "65px";
      actionmenu.style.bottom = "-665px";
      actionmenu2.style.bottom = "-665px";
      actionmenu4.style.bottom = "-665px";
      actionmenu5.style.bottom = "-665px";
      actionmenu6.style.bottom = "-665px";
      tabview.style.opacity = "0"
      desktops.style.opacity = "0"
      action.classList.remove('taskbarbuttonActive')
      action2.classList.remove('taskbarbuttonActive')
      action3.classList.add('taskbarbuttonActive')
      action4.classList.remove('taskbarbuttonActive')
      action5.classList.remove('taskbarbuttonActive')
      action5C.classList.remove('taskbarbuttonActive')
      action6.classList.remove('taskbarbuttonActive')
      action6C.classList.remove('taskbarbuttonActive')
      tabb.classList.remove('taskbarbuttonActive')
      document.getElementById('glanceBtnImg').style.transform = 'rotate(0)'
    }, 450);
    setTimeout(() => {
      actionmenu.style.display = "none";
      actionmenu2.style.display = "none";
      actionmenu4.style.display = "none";
      actionmenu5.style.display = "none";
      actionmenu6.style.display = "none";
      tabmenu.style.display = "none"
    }, 650);
	}
})

action4.addEventListener("click", ()=>{
	if(actionmenu4.style.bottom == "65px"){
    actionmenu4.style.bottom = "-665px";
    setTimeout(() => {actionmenu4.style.display = "none";}, 450);
    action4.classList.remove('taskbarbuttonActive')
    document.getElementById('glanceBtnImg').style.transform = 'rotate(0)'
	}
	else{
    actionmenu4.style.display = "block";
    setTimeout(() => {
      actionmenu4.style.bottom = "65px";
      actionmenu3.style.bottom = "-665px";
      actionmenu2.style.bottom = "-665px";
      actionmenu.style.bottom = "-665px";
      actionmenu5.style.bottom = "-665px";
      actionmenu6.style.bottom = "-665px";
      tabview.style.opacity = "0"
      desktops.style.opacity = "0"
      action.classList.remove('taskbarbuttonActive')
      action2.classList.remove('taskbarbuttonActive')
      action3.classList.remove('taskbarbuttonActive')
      action4.classList.add('taskbarbuttonActive')
      action5.classList.remove('taskbarbuttonActive')
      action5C.classList.remove('taskbarbuttonActive')
      action6.classList.remove('taskbarbuttonActive')
      action6C.classList.remove('taskbarbuttonActive')
      tabb.classList.remove('taskbarbuttonActive')
      document.getElementById('glanceBtnImg').style.transform = 'rotate(180deg)'
    }, 450);
    setTimeout(() => {
      actionmenu3.style.display = "none";
      actionmenu2.style.display = "none";
      actionmenu.style.display = "none";
      actionmenu6.style.display = "none";
      actionmenu5.style.display = "none";
      tabmenu.style.display = "none"
    }, 650);
	}
})

function calendarSH(){
  if(actionmenu5.style.bottom == "65px"){
    actionmenu5.style.bottom = "-665px";
    setTimeout(() => {actionmenu5.style.display = "none";}, 450);
    action5.classList.remove('taskbarbuttonActive')
    action5C.classList.remove('taskbarbuttonActive')
  }
  else{
    actionmenu5.style.display = "block";
    setTimeout(() => {
      actionmenu5.style.bottom = "65px";
      actionmenu3.style.bottom = "-665px";
      actionmenu6.style.bottom = "-665px";
      actionmenu2.style.bottom = "-665px";
      actionmenu.style.bottom = "-665px";
      actionmenu4.style.bottom = "-665px";
      tabview.style.opacity = "0"
      desktops.style.opacity = "0"
      action.classList.remove('taskbarbuttonActive')
      action2.classList.remove('taskbarbuttonActive')
      action3.classList.remove('taskbarbuttonActive')
      action4.classList.remove('taskbarbuttonActive')
      action5.classList.add('taskbarbuttonActive')
      action5C.classList.add('taskbarbuttonActive')
      action6.classList.remove('taskbarbuttonActive')
      action6C.classList.remove('taskbarbuttonActive')
      tabb.classList.remove('taskbarbuttonActive')
      document.getElementById('glanceBtnImg').style.transform = 'rotate(0deg)'
    }, 450);
    setTimeout(() => {
      actionmenu3.style.display = "none";
      actionmenu2.style.display = "none";
      actionmenu.style.display = "none";
      actionmenu4.style.display = "none";
      actionmenu6.style.display = "none";
      tabmenu.style.display = "none"
    }, 650);
  }
}

function NotyPanel(){
  if(actionmenu6.style.bottom == "65px"){
    actionmenu6.style.bottom = "-665px";
    setTimeout(() => {actionmenu6.style.display = "none";}, 450);
    action6.classList.remove('taskbarbuttonActive')
    action6C.classList.remove('taskbarbuttonActive')
  }
  else{
    actionmenu6.style.display = "block";
    setTimeout(() => {
      actionmenu6.style.bottom = "65px";
      actionmenu3.style.bottom = "-665px";
      actionmenu5.style.bottom = "-665px";
      actionmenu2.style.bottom = "-665px";
      actionmenu.style.bottom = "-665px";
      actionmenu4.style.bottom = "-665px";
      tabview.style.opacity = "0"
      desktops.style.opacity = "0"
      action.classList.remove('taskbarbuttonActive')
      action2.classList.remove('taskbarbuttonActive')
      action3.classList.remove('taskbarbuttonActive')
      action4.classList.remove('taskbarbuttonActive')
      action5.classList.remove('taskbarbuttonActive')
      action5C.classList.remove('taskbarbuttonActive')
      action6.classList.add('taskbarbuttonActive')
      action6C.classList.add('taskbarbuttonActive')
      tabb.classList.remove('taskbarbuttonActive')
      document.getElementById('glanceBtnImg').style.transform = 'rotate(0deg)'
    }, 450);
    setTimeout(() => {
      actionmenu3.style.display = "none";
      actionmenu2.style.display = "none";
      actionmenu5.style.display = "none";
      actionmenu.style.display = "none";
      actionmenu4.style.display = "none";
      tabmenu.style.display = "none"
    }, 650);
  }
}

function widgetShow(){
    if(widgetM.style.bottom == "62.5px"){
        widgetM.style.bottom = "-1665px";
        setTimeout(() => {widgetM.style.display = "none";}, 450);
        document.getElementsByClassName('widgetB')[0].style.display = "block";
        document.getElementsByClassName('widgetSearch')[0].style.display = "none";
        document.getElementById('widgetbtn').classList.remove('taskbarbuttonActive')
      }
      else{
        widgetM.style.display = "block";
        setTimeout(() => {
          widgetM.style.bottom = "62.5px";
          document.getElementsByClassName('widgetB')[0].style.display = "block";
          document.getElementsByClassName('widgetSearch')[0].style.display = "none";
          document.getElementById('widgetbtn').classList.add('taskbarbuttonActive');

          tabb.classList.remove('taskbarbuttonActive')
          startbutton.classList.remove('taskbarbuttonActive')
          startmenu.style.bottom = "-665px";
          tabview.style.opacity = "0"
          desktops.style.opacity = "0"
          }, 450);

        setTimeout(() => {
          tabmenu.style.display = "none"
          startmenu.style.display = "none"
        }, 650);
      }
}

function inWidgetSearch(){
    document.getElementsByClassName('widgetB')[0].style.display = "none";
    document.getElementsByClassName('widgetSearch')[0].style.display = "block";
}

function inWidget(){
  document.getElementsByClassName('widgetSearch')[0].style.display = "none";
  document.getElementsByClassName('widgetB')[0].style.display = "none";
  setTimeout(() => {document.getElementsByClassName('widgetB')[0].style.display = "block";}, 250);
}

function widgetSearchShow(){
  widgetM.style.display = "block";
  setTimeout(() => {
    widgetM.style.bottom = "65px";
    document.getElementsByClassName('widgetB')[0].style.display = "none";
    document.getElementsByClassName('widgetSearch')[0].style.display = "block";
    document.getElementById('widgetbtn').classList.add('taskbarbuttonActive');

    tabb.classList.remove('taskbarbuttonActive')
    startbutton.classList.remove('taskbarbuttonActive')
    startmenu.style.bottom = "-665px";
    tabview.style.opacity = "0"
    desktops.style.opacity = "0"
  }, 450);

  setTimeout(() => {
    tabmenu.style.display = "none"
    startmenu.style.display = "none"
  }, 650);
}

function opacityM() {document.getElementById("search-feild").src = "https://www.bing.com/search?q=" + document.getElementById("widget-search").value;}

function opacityMTb() {document.getElementById("search-feild").src = "https://www.bing.com/search?q=" + document.getElementById("SearchInput").value;}

const contextMenu = document.getElementById("context-menu");
const scope = document.querySelector("#Desktop");
const normalizePozition = (mouseX, mouseY) => {
  let { left: scopeOffsetX, top: scopeOffsetY, } = scope.getBoundingClientRect();
  
  scopeOffsetX = scopeOffsetX < 0 ? 0 : scopeOffsetX;
  scopeOffsetY = scopeOffsetY < 0 ? 0 : scopeOffsetY;
  
  const scopeX = mouseX - scopeOffsetX;
  const scopeY = mouseY - scopeOffsetY;
  const outOfBoundsOnX = scopeX + contextMenu.clientWidth > scope.clientWidth;
  const outOfBoundsOnY = scopeY + contextMenu.clientHeight > scope.clientHeight;

  let normalizedX = mouseX;
  let normalizedY = mouseY;

  if (outOfBoundsOnX) {normalizedX = scopeOffsetX + scope.clientWidth - contextMenu.clientWidth;}
  if (outOfBoundsOnY) {normalizedY = scopeOffsetY  + scope.clientHeight - contextMenu.clientHeight ;}
  return { normalizedX, normalizedY };
};

scope.addEventListener("contextmenu", (event) => {
  event.preventDefault();

  const { clientX: mouseX, clientY: mouseY } = event;
  const { normalizedX, normalizedY } = normalizePozition(mouseX, mouseY);

  contextMenu.classList.remove("visible");
  contextMenu.style.top = `${normalizedY}px`;
  contextMenu.style.left = `${normalizedX}px`;

  setTimeout(() => {contextMenu.classList.add("visible");});
  
});
scope.addEventListener("click", (e) => {if (e.target.offsetParent != contextMenu) {contextMenu.classList.remove("visible");}});
 
document.getElementById('mytaskbar').oncontextmenu = function(e) {
  var x = e.clientX
  document.getElementById('context-menuTB').style.left = x + 'px';
  document.getElementById('context-menuTB').classList.add('visible');
  
  tabview.style.opacity = "0"
  desktops.style.opacity = "0"
  setTimeout(() => {tabmenu.style.display = "none"}, 450);
  tabb.classList.remove('taskbarbuttonActive')

  return false;
}

function tbStyleCTH(){
    document.getElementById('tbStyleCT').style.opacity = '0';
    document.getElementById('tbStyleCT').style.pointerEvents = 'none';
}
function tbStyleCTS(){
    document.getElementById('tbStyleCT').style.opacity = '1';
    document.getElementById('tbStyleCT').style.pointerEvents = 'all';
}

document.getElementById('mytaskbar').onclick = function(e) {document.getElementById('context-menuTB').classList.remove('visible');}

let tb = document.getElementById('mytaskbar');
const storedState = localStorage.getItem('taskbarStyle');
const flyoutTbCheck = document.getElementById('checkFly');
const attachedTbCheck = document.getElementById('checkAtt');
const dockedTbCheck = document.getElementById('checkDocked');
const flyoutTbCheckBtn = document.getElementById('checkFlyBtn');
const attachedTbCheckBtn = document.getElementById('checkAttBtn');
const dockedTbCheckBtn = document.getElementById('checkDockedBtn');

if (storedState) {
  const { width, border, borderRadius, paddingBottom, boxShadow, bottom, activeButton} = JSON.parse(storedState);
  tb.style.width = width;
  tb.style.border = border;
  tb.style.borderRadius = borderRadius;
  tb.style.paddingBottom = paddingBottom;
  tb.style.boxShadow = boxShadow;
  tb.style.bottom = bottom;
  activateButton(activeButton);
}

function TBFlyout(){
  tb.style.width = '97%';
  tb.style.bottom = '8px';
  tb.style.border = '1px solid rgba(255, 255, 255, 0.3)';
  tb.style.borderRadius = '15px';
  tb.style.boxShadow = '0px 0px 5px rgb(0, 0, 0);';
  tb.style.paddingBottom = '0';

  const newState = { 
    width: tb.style.width, 
    border:  tb.style.border,
    borderRadius:  tb.style.borderRadius,
    paddingBottom:  tb.style.paddingBottom,
    boxShadow:  tb.style.boxShadow,
    bottom:  tb.style.bottom,
    activeButton: 'flyoutTbCheckBtn'
  };
  localStorage.setItem('taskbarStyle', JSON.stringify(newState));
  activateButton('flyoutTbCheckBtn');
}
function TBAttached(){
  tb.style.width = '100%';
  tb.style.bottom = '0px';
  tb.style.border = '1px solid rgba(255, 255, 255, 0)';
  tb.style.borderTop = '1px solid rgba(255, 255, 255, 0.3)';
  tb.style.borderRadius = '0';
  tb.style.boxShadow = '0px 0px 0px rgb(0, 0, 0);';
  tb.style.paddingBottom = '5px';
  const newState = { 
    width: tb.style.width, 
    border:  tb.style.border,
    borderRadius:  tb.style.borderRadius,
    paddingBottom:  tb.style.paddingBottom,
    boxShadow:  tb.style.boxShadow,
    bottom:  tb.style.bottom,
    activeButton: 'attachedTbCheckBtn'
  };
  localStorage.setItem('taskbarStyle', JSON.stringify(newState));
  activateButton('attachedTbCheckBtn');
}

function TBDocked(){
  tb.style.width = '97%';
  tb.style.bottom = '0px';
  tb.style.border = '1px solid rgba(255, 255, 255, 0)';
  tb.style.borderTop = '1px solid rgba(255, 255, 255, 0.3)';
  tb.style.borderLeft = '1px solid rgba(255, 255, 255, 0.3)';
  tb.style.borderRight = '1px solid rgba(255, 255, 255, 0.3)';
  tb.style.borderRadius = '0';
  tb.style.borderTopLeftRadius = '15px';
  tb.style.borderRadius = '15px 15px 0 0';
  tb.style.boxShadow = '0px 0px 0px rgb(0, 0, 0);';
  tb.style.paddingBottom = '5px';
  const newState = { 
    width: tb.style.width, 
    border:  tb.style.border,
    borderTop:  tb.style.borderTop,
    borderRadius:  tb.style.borderRadius,
    paddingBottom:  tb.style.paddingBottom,
    boxShadow:  tb.style.boxShadow,
    bottom:  tb.style.bottom,
    activeButton: 'dockedTbCheckBtn'
  };
  localStorage.setItem('taskbarStyle', JSON.stringify(newState));
  activateButton('dockedTbCheckBtn');
}

function activateButton(buttonId) {
  flyoutTbCheck.classList.toggle('active', buttonId === 'flyoutTbCheckBtn');
  attachedTbCheck.classList.toggle('active', buttonId === 'attachedTbCheckBtn');
  dockedTbCheck.classList.toggle('active', buttonId === 'dockedTbCheckBtn');
}
      const daysTag = document.querySelector(".days"),
      currentDate = document.querySelector(".current-date"),
      prevNextIcon = document.querySelectorAll(".icons span");
      
      let date = new Date(),
      currYear = date.getFullYear(),
      currMonth = date.getMonth();
      
      const months = ["January", "February", "March", "April", "May", "June", "July",
                    "August", "September", "October", "November", "December"];
      
      const renderCalendar = () => {
          let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
          lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
          lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
          lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
          let liTag = "";
      
          for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
              liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
          }
      
          for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
              // adding active class to li if the current day, month, and year matched
              let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                           && currYear === new Date().getFullYear() ? "active" : "";
              liTag += `<li class="${isToday}">${i}</li>`;
          }
      
          for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
              liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
          }
          currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
          daysTag.innerHTML = liTag;
      }
      renderCalendar();
      
      prevNextIcon.forEach(icon => { // getting prev and next icons
          icon.addEventListener("click", () => { // adding click event on both icons
              // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
              currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
      
              if(currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
                  // creating a new date of current year & month and pass it as date value
                  date = new Date(currYear, currMonth);
                  currYear = date.getFullYear(); // updating current year with new date year
                  currMonth = date.getMonth(); // updating current month with new date month
              } else {
                  date = new Date(); // pass the current date as date value
              }
              renderCalendar(); // calling renderCalendar function
          });
      });
      
    function DesktopClick() {
      document.getElementById("SearchInput").value = ""
      document.getElementById("widget-search").value = ""
      document.getElementById("search-feild").src = "https://www.bing.com/search?q="
      startmenu.style.bottom = "-665px";
      widgetM.style.bottom = "-1665px";
      document.getElementsByClassName('widgetB')[0].style.display = "block";
      document.getElementsByClassName('widgetSearch')[0].style.display = "none";
      document.getElementById('PowerOptStart').style.right = "0"
      document.getElementById('PowerOptStart').style.opacity = "0"
      document.getElementById('PowerOptStart').style.pointerEvents = "none"

      document.getElementById('widgetbtn').classList.remove('taskbarbuttonActive')
      tabb.classList.remove('taskbarbuttonActive')
      startbutton.classList.remove('taskbarbuttonActive')

          actionmenu5.style.bottom = "-665px";
          actionmenu6.style.bottom = "-665px";
          actionmenu3.style.bottom = "-665px";
          actionmenu2.style.bottom = "-665px";
          actionmenu.style.bottom = "-665px";
          actionmenu4.style.bottom = "-665px";
          tabview.style.opacity = "0"
          desktops.style.opacity = "0"
          action.classList.remove('taskbarbuttonActive')
          action2.classList.remove('taskbarbuttonActive')
          action3.classList.remove('taskbarbuttonActive')
          action4.classList.remove('taskbarbuttonActive')
          action5.classList.remove('taskbarbuttonActive')
          action5C.classList.remove('taskbarbuttonActive')
          action6.classList.remove('taskbarbuttonActive')
          action6C.classList.remove('taskbarbuttonActive')
          tabb.classList.remove('taskbarbuttonActive')
          document.getElementById('glanceBtnImg').style.transform = 'rotate(0deg)'

        setTimeout(() => {
          startmenu.style.display = "none";
          actionmenu3.style.display = "none";
          actionmenu2.style.display = "none";
          actionmenu.style.display = "none";
          actionmenu4.style.display = "none";
          tabmenu.style.display = "none";
          widgetM.style.display = "none";
        }, 450);

        let view = document.getElementById('view-contx');
        let sort = document.getElementById('sort-contx');
        let New = document.getElementById('new-contx');
      
          view.style.paddingBottom= '5px';
          document.getElementById('view-optionsCt').style.opacity= '0'
      
          setTimeout(() => {
            document.getElementById('view-optionsCt').style.display= 'none'
            view.classList.remove('activeCnt');
            document.getElementById('view-more-img').style.transform= 'rotate(0deg)'
          }, 300);

        New.style.paddingBottom= '5px';
        document.getElementById('new-optionsCt').style.opacity= '0'

        setTimeout(() => {
          document.getElementById('new-optionsCt').style.display= 'none'
          New.classList.remove('activeCnt');
          document.getElementById('new-more-img').style.transform= 'rotate(0deg)'
        }, 300);

        sort.style.paddingBottom= '5px';
        document.getElementById('sort-optionsCt').style.opacity= '0'

        setTimeout(() => {
          document.getElementById('sort-optionsCt').style.display= 'none'
          sort.classList.remove('activeCnt');
          document.getElementById('sort-more-img').style.transform= 'rotate(0deg)'
        }, 300);

        document.getElementById('context-menuTB').classList.remove('visible');
        document.getElementById('tbStyleCT').style.opacity = '0';
        document.getElementById('tbStyleCT').style.pointerEvents = 'none';
    }

        var div = document.getElementById("status");
        if (navigator.getBattery) {
            navigator.getBattery().then(function(battery) {
              display(battery);
            });
        } 
        else if (navigator.battery) {display(navigator.battery);} 
        else {div.innerHTML = "70%";}

        function display(battery) {
            var status = "";
            status += (battery.level * 100).toFixed(0) + "%";
            div.innerHTML = status;
            let batteryLevel = `${parseInt(battery.level * 100)}%`;
            document.getElementById('deskWB').style.width = batteryLevel;
            document.getElementById('tbWB').style.width = batteryLevel;
            document.getElementById('flyWB').style.width = batteryLevel;
            if (battery.charging) {
              document.getElementById('tbWB').classList.add('batteryChargingAni')
              document.getElementById('flyWB').classList.add('batteryChargingAni')
              document.getElementById('deskWB').classList.add('batteryChargingAni')
            }
            else{
              document.getElementById('tbWB').classList.remove('batteryChargingAni')
              document.getElementById('flyWB').classList.remove('batteryChargingAni')
              document.getElementById('deskWB').classList.remove('batteryChargingAni')
            }
        }
                
        const chargingTimeRef = document.getElementById("charging-time");

        navigator.getBattery().then((battery) => {
          function updateAllBatteryInfo() {updateChargingInfo();}
          updateAllBatteryInfo();
          battery.addEventListener("levelchange", () => {updateAllBatteryInfo();});
          function updateChargingInfo() {
            if (battery.charging) {chargingTimeRef.innerText = "Charging";}
            else {
              if (parseInt(battery.dischargingTime)) {
                let hr = parseInt(battery.dischargingTime / 3600);
                let min = parseInt(battery.dischargingTime / 60 - hr * 60);
                chargingTimeRef.innerText = `${hr}hr ${min}mins remaining`;
              }
            }
          }
        })
        var div2 = document.getElementById("status2");
        if (navigator.getBattery) {navigator.getBattery().then(function(battery) {display2(battery);});} 
        else if (navigator.battery) {display2(navigator.battery);} 
        else {div2.innerHTML = "70%";}
        
        function display2(battery) {
            var status2 = "";
            status2 += (battery.level * 100).toFixed(0) + "%";
            div2.innerHTML = status2;
        }

function closeWelcome(){
    document.getElementById("welcome-page").style.webkitTransform = "translate(-50%, -50%) scale(0)";
    document.getElementById("welcome-page").style.transform = "translate(-50%, -50%) scale(0)";
    setTimeout(() => {document.getElementById("welcome-page").style.display = "none";}, 750);
}

document.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      closeWelcome();
    }
});

function easterEgg1(){window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");}

const tabsBox = document.querySelector(".tabs-box"),
allTabs = tabsBox.querySelectorAll(".tab"),
arrowIcons = document.querySelectorAll(".iconP i");
let isDragging = false;
let isDragging2 = false;

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let scrollWidth = tabsBox.scrollLeft += icon.id === "left" ? -340 : 340;
        handleIcons(scrollWidth);
    });
});

const dragging = (e) => {
    if(!isDragging) return;
    tabsBox.classList.add("dragging");
    tabsBox.scrollLeft -= e.movementX;
    handleIcons(tabsBox.scrollLeft)
}

const dragStop = () => {
    isDragging = false;
    tabsBox.classList.remove("dragging");
}

tabsBox.addEventListener("mousedown", () => isDragging = true);
tabsBox.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);

document.getElementById('welcome-fam').addEventListener("click", ()=>{
  document.getElementById('welcome-cont').style.display = "block"
  document.getElementById('RGOS-cont').style.display = "none"
})
document.getElementById('rgos-fam').addEventListener("click", ()=>{
  document.getElementById('welcome-cont').style.display = "none"
  document.getElementById('RGOS-cont').style.display = "block"
})

document.getElementById('ripenos').addEventListener("click", ()=>{window.open("https://ripenos.github.io/Ripenos", "_blank");})
document.getElementById('dynamica').addEventListener("click", ()=>{alert("Hey! Ripenos Dynamica is coming soon!!");})

const popup = document.querySelector(".popup"),
wifiIcon = document.querySelector(".icon i"),
popupTitle = document.querySelector(".popup .title"),
popupDesc = document.querySelector(".desc"),
reconnectBtn = document.querySelector(".reconnect");

let isOnline = true, intervalId, timer = 10;

const checkConnection = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        isOnline = response.status >= 200 && response.status < 300;
    } 
    catch (error) {isOnline = false;}
    timer = 10;
    clearInterval(intervalId);
    handlePopup(isOnline);
}

const handlePopup = (status) => {
    if(status) {
        wifiIcon.className = "uil uil-wifi";
        popupTitle.innerText = "Restored Connection";
        popupDesc.innerHTML = "Your device is now successfully connected to the internet.";
        popup.classList.add("online");
        return setTimeout(() => popup.classList.remove("show"), 2000);
    }
    wifiIcon.className = "uil uil-wifi-slash";
    popupTitle.innerText = "Lost Connection";
    popupDesc.innerHTML = "Your network is unavailable. We will attempt to check your network in <b>10</b> seconds.";
    popup.className = "popup show";

    intervalId = setInterval(() => {
        timer--;
        if(timer === 0) checkConnection();
        popup.querySelector(".desc b").innerText = timer;
    }, 1000);
}

setInterval(() => isOnline && checkConnection(), 3000);
reconnectBtn.addEventListener("click", checkConnection);

function airplane(){
if(document.getElementById('planeMode-on').style.display == "block"){
  document.getElementById('planeMode-on').style.display= "none";
  document.getElementById('wifi-off').style.display= "none";
  document.getElementById('search-feild').style.display= "block";
  document.getElementById('searchOff').style.display= "none";
  document.getElementById('wifiBlocks').style.display= "block";
  document.getElementById('WifiMode').disabled = false;
  document.getElementById('WifiMode').checked = true;
}
else{
  document.getElementById('wifiBlocks').style.display= "none";
  document.getElementById('planeMode-on').style.display= "block";
  document.getElementById('wifi-off').style.display= "none";
  document.getElementById('search-feild').style.display= "none";
  document.getElementById('searchOff').style.display= "block";
  document.getElementById('WifiMode').disabled = true;
  document.getElementById('WifiMode').checked = false;
}
}

function wifiOff(){
if(document.getElementById('wifi-off').style.display == "block"){
  document.getElementById('wifiBlocks').style.display= "block";
  document.getElementById('wifi-off').style.display= "none";
  document.getElementById('search-feild').style.display= "block";
  document.getElementById('searchOff').style.display= "none";
}
else{
  document.getElementById('wifiBlocks').style.display= "none";
  document.getElementById('planeMode-on').style.display= "none";
  document.getElementById('wifi-off').style.display= "block";
  document.getElementById('search-feild').style.display= "none";
  document.getElementById('searchOff').style.display= "block";
}
}

function ExpandContextSort(){
  let sort = document.getElementById('sort-contx');
  let view = document.getElementById('view-contx');
  let New = document.getElementById('new-contx');

  if(sort.style.paddingBottom == '157.5px'){
    sort.style.paddingBottom= '5px';
    document.getElementById('sort-optionsCt').style.opacity= '0'

    setTimeout(() => {
      document.getElementById('sort-optionsCt').style.display= 'none'
      sort.classList.remove('activeCnt');
      document.getElementById('sort-more-img').style.transform= 'rotate(0deg)'
    }, 300);
  }
  else{
    view.style.paddingBottom= '5px';
    document.getElementById('view-optionsCt').style.opacity= '0'
    document.getElementById('view-optionsCt').style.display= 'none'
    New.style.paddingBottom= '5px';
    document.getElementById('new-optionsCt').style.opacity= '0'
    document.getElementById('new-optionsCt').style.display= 'none'
    document.getElementById('sort-optionsCt').style.display= 'grid'
    document.getElementById('view-more-img').style.transform= 'rotate(0deg)'
    document.getElementById('new-more-img').style.transform= 'rotate(0deg)'
    sort.style.paddingBottom= '157.5px';
    sort.classList.add('activeCnt');
    view.classList.remove('activeCnt');
    New.classList.remove('activeCnt');

    setTimeout(() => {
      document.getElementById('sort-optionsCt').style.opacity= '1'
      document.getElementById('sort-more-img').style.transform= 'rotate(180deg)';
    }, 300);
  }
}

function ExpandContextView(){
  let view = document.getElementById('view-contx');
  let sort = document.getElementById('sort-contx');
  let New = document.getElementById('new-contx');

  if(view.style.paddingBottom == '255px'){
    view.style.paddingBottom= '5px';
    document.getElementById('view-optionsCt').style.opacity= '0'

    setTimeout(() => {
      document.getElementById('view-optionsCt').style.display= 'none'
      view.classList.remove('activeCnt');
      document.getElementById('view-more-img').style.transform= 'rotate(0deg)'
    }, 300);
  }
  else{
    sort.style.paddingBottom= '5px';
    document.getElementById('sort-optionsCt').style.opacity= '0'
    document.getElementById('sort-optionsCt').style.display= 'none'
    New.style.paddingBottom= '5px';
    document.getElementById('new-optionsCt').style.opacity= '0'
    document.getElementById('new-optionsCt').style.display= 'none'
    document.getElementById('view-optionsCt').style.display= 'grid'
    document.getElementById('sort-more-img').style.transform= 'rotate(0deg)'
    document.getElementById('new-more-img').style.transform= 'rotate(0deg)'
    view.style.paddingBottom= '255px';
    view.classList.add('activeCnt');
    sort.classList.remove('activeCnt');
    New.classList.remove('activeCnt');

    setTimeout(() => {
      document.getElementById('view-optionsCt').style.opacity= '1'
      document.getElementById('view-more-img').style.transform= 'rotate(180deg)';
    }, 300);
  }
}

function ExpandContextNew(){
  let view = document.getElementById('view-contx');
  let sort = document.getElementById('sort-contx');
  let New = document.getElementById('new-contx');

  if(New.style.paddingBottom == '235px'){
    New.style.paddingBottom= '5px';
    document.getElementById('new-optionsCt').style.opacity= '0'

    setTimeout(() => {
      document.getElementById('new-optionsCt').style.display= 'none'
      New.classList.remove('activeCnt');
      document.getElementById('new-more-img').style.transform= 'rotate(0deg)'
    }, 300);
  }
  else{
    sort.style.paddingBottom= '5px';
    view.style.paddingBottom= '5px';
    document.getElementById('sort-optionsCt').style.opacity= '0'
    document.getElementById('sort-optionsCt').style.display= 'none'
    document.getElementById('view-optionsCt').style.opacity= '0'
    document.getElementById('view-optionsCt').style.display= 'none'
    document.getElementById('new-optionsCt').style.display= 'grid'
    document.getElementById('sort-more-img').style.transform= 'rotate(0deg)'
    document.getElementById('view-more-img').style.transform= 'rotate(0deg)'
    New.style.paddingBottom= '235px';
    New.classList.add('activeCnt');
    sort.classList.remove('activeCnt');
    view.classList.remove('activeCnt');

    setTimeout(() => {
      document.getElementById('new-optionsCt').style.opacity= '1'
      document.getElementById('new-more-img').style.transform= 'rotate(180deg)';
    }, 300);
  }
}

function ShowDeskIcoCtx(){
  if(document.getElementById('deskIcons').style.display == 'none'){
    document.getElementById('deskIcons').style.display = 'block';
    document.getElementById('HideDSK').style.display = 'none';
  }
  else{
    document.getElementById('deskIcons').style.display = 'none';
    document.getElementById('HideDSK').style.display = 'inline-block';
  }
}

function ShowDeskWidgetCtx(){
  if(document.getElementById('desk-widget').style.display == 'none'){
    document.getElementById('desk-widget').style.display = 'block';
    document.getElementById('HideDSKW').style.display = 'none';
  }
  else{
    document.getElementById('desk-widget').style.display = 'none';
    document.getElementById('HideDSKW').style.display = 'inline-block';
  }
}

    dragElementD(document.getElementById("bin"));
    dragElementD(document.getElementById("myPc"));
    dragElementD(document.getElementById("files"));
    dragElementD(document.getElementById("Gallery"));
    dragElementD(document.getElementById("calculator"));
    dragElementD(document.getElementById("calendar"));
    dragElementD(document.getElementById("paint"));
    dragElementD(document.getElementById("notes"));
    dragElementD(document.getElementById("snake"));
    dragElementD(document.getElementById("piano"));
    dragElementD(document.getElementById("IEditor"));
    dragElementD(document.getElementById("Browser"));
    dragElementD(document.getElementById("Camera"));
    dragElementD(document.getElementById("Document"));
    dragElementD(document.getElementById("ticTacToe"));
    dragElementD(document.getElementById("personalizeWindow"));

function dragElementD(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;}
  else {elmnt.onmousedown = dragMouseDown;}

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
    isSelecting = false;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

let myDockApps = document.getElementById('myDockApps')
function TBClassicIco(){
  myDockApps.style.left = "10px";
  startmenu.style.left = "0.95%";
  startmenu.style.marginLeft = "0%";
  startmenu.style.transition = "all 1s ease-in-out";
  widgetM.style.left = "2%";
  widgetM.style.transition = "all 1s ease-in-out";
  document.getElementById('classicTBICo-Lefticons').style.display = "flex"
  setTimeout(() => {
    document.getElementById('centeredTBICo-Lefticons').style.transform = "translateY(150%)"
    document.getElementById('classicTBICo-Lefticons').style.transform = "translateY(0%)"
    }, 500);
  setTimeout(() => {
    startmenu.style.transition = "all 0.5s";
    widgetM.style.transition = "all 0.9s";
    document.getElementById('centeredTBICo-Lefticons').style.display = "none"
  }, 1250);
  myDockApps.style.transform = "translateX(0%)";
  startmenu.style.transform = "translateX(0%)";
  widgetM.style.transform = "translateX(0%)";
  actionmenu5.style.right = "2.5%";
  actionmenu6.style.right = "2.5%";
  document.getElementById('checkClassicIco').classList.add('active')
  document.getElementById('checkCenteredIco').classList.remove('active')

  desktops.style.top = "10px"
  desktops.style.width = "260px"
  desktops.style.height = "calc(100% - 188px)"
  desktops.style.overflowY = "scroll"
  document.getElementsByClassName('desktop1')[0].style.transform = "translateX(-50%)"
  document.getElementsByClassName('New')[0].style.transform = 'translateX(-50%)';
  document.getElementsByClassName('New')[0].style.bottom = 'calc(145px + 50px)';
}
function TBCenteredIco(){
  myDockApps.style.left = "50%";
  startmenu.style.left = "50%";
  startmenu.style.marginLeft = "-2%";
  startmenu.style.transition = "all 1s ease-in-out";
  widgetM.style.left = "50%";
  widgetM.style.transition = "all 1s ease-in-out";
  document.getElementById('centeredTBICo-Lefticons').style.display = "flex"
  setTimeout(() => {
    startmenu.style.transition = "all 0.5s";
    widgetM.style.transition = "all 0.9s";
  }, 1250);
  setTimeout(() => {
  document.getElementById('classicTBICo-Lefticons').style.transform = "translateY(150%)"
  document.getElementById('centeredTBICo-Lefticons').style.transform = "translateY(19.5%)"
    document.getElementById('classicTBICo-Lefticons').style.display = "none"
  }, 500);
  myDockApps.style.transform = "translateX(-50%)";
  startmenu.style.transform = "translateX(-50%)";
  widgetM.style.transform = "translateX(-50%)";
  document.getElementById('classicTBICo-Lefticons').style.display = "none"
  actionmenu5.style.right = "calc(100% - 2.5% - 450px)";
  actionmenu6.style.right = "calc(100% - 2.5% - 320px)";
  document.getElementById('checkClassicIco').classList.remove('active')
  document.getElementById('checkCenteredIco').classList.add('active')

  desktops.style.top = "calc(100% - 262.5px)"
  desktops.style.width = "97.5%"
  desktops.style.height = "85px"
  desktops.style.overflowY = "hidden"
  document.getElementsByClassName('desktop1')[0].style.transform = "translateX(-103%)"
  document.getElementsByClassName('New')[0].style.transform = 'translateX(3%)';
  document.getElementsByClassName('New')[0].style.bottom = '20px';
}

function fun(e){
var container = document.getElementById('myoverlay-brightness');
var val = e.value;
container.setAttribute("style", "opacity: "+val+"%;");
}

document.getElementById("readBtn").addEventListener("click", ()=>{
  if (document.getElementById("OverRead").style.display == "block"){
      document.getElementById("OverRead").style.display = "none";
  }
  else{
      document.getElementById("OverRead").style.display = "block";
  }
})
  
function startTimeL() {
  const today3 = new Date();
  let h3 = today3.getHours();
  let m3 = today3.getMinutes();
  var ampm3= "";
  m3 = checkTime(m3);

  if (h3 > 12) {
      h3 = h3 - 12;
      ampm3 = " pm";
  } else if (h3 == 12){
      h3 = 12;
      ampm3 = " pm";
  } else if (h3 < 12){
      ampm3 = " am";
  } else {
      ampm3 = "am";
  };

  document.getElementById('txtL').innerHTML =  h3 + ":" + m3+ampm3;
  setTimeout(startTimeL, 1000);
}

function tempLockShow(){
  document.getElementById("tempLockScreen").style.display= "block";
  setTimeout(() => {document.getElementById("tempLockScreen").style.opacity= "1";}, 1);

  const onConfirmRefresh = function (event) {
    event.preventDefault();
    return event.returnValue = "Are you sure you want to leave the page?";
  };
  window.addEventListener("beforeunload", onConfirmRefresh);
  
  document.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      ExitTempLock();
    }
  })
}

function ExitTempLock(){
  if(document.getElementById('pwInLR1L').value == savedPw && document.getElementById('pwInLR1L').value !== ""){
    document.getElementById('passkeyLParaR1L').innerHTML = "Verified"
    setTimeout(() => {
      document.getElementById("tempLockScreen").style.opacity= "0";
      document.getElementById('pwInLR1L').value = ""
    }, 300);
    setTimeout(() => {document.getElementById("tempLockScreen").style.display= "none";}, 600);
  }
  else{
    document.getElementById('passkeyLParaR1L').innerHTML = "not verified..try again:"
    document.getElementById('pwInLR1L').value = ""
  }
}

function tempLockHide(){
  document.getElementById("tempLockScreen").style.opacity= "0";
  setTimeout(() => {document.getElementById("tempLockScreen").style.display= "none";}, 300);
}

  document.addEventListener("DOMContentLoaded", function() {
    const colorPicker = document.getElementById("AccentColor");

    colorPicker.addEventListener("change", function(event) {
      const selectedColor = event.target.value;
      document.documentElement.style.setProperty("--accent-color", selectedColor);
      localStorage.setItem("accentColor", selectedColor);
    });

    const storedAccentColor = localStorage.getItem("accentColor");
    if (storedAccentColor) {
      document.documentElement.style.setProperty("--accent-color", storedAccentColor);
      colorPicker.value = storedAccentColor;
    }
  });

// Wallpapers
document.getElementById("RipenWaves").addEventListener("click", ()=>{
  document.body.style.backgroundImage= "url('../../Global/Assets/Images/backgrounds/RipenWaves2.png')";
  document.getElementById('dstp1Img').src= "../../Global/Assets/Images/backgrounds/RipenWaves2.png";
})

document.getElementById("dream").addEventListener("click", ()=>{
  document.body.style.backgroundImage= "url('../../Global/Assets/Images/backgrounds/dream.jpg')"
  document.getElementById('dstp1Img').src= "../../Global/Assets/Images/backgrounds/dream.jpg";
})

document.getElementById("dreamDark").addEventListener("click", ()=>{
  document.body.style.backgroundImage= "url('../../Global/Assets/Images/backgrounds/dream-dark.jpg')"
  document.getElementById('dstp1Img').src= "../../Global/Assets/Images/backgrounds/dream-dark.jpg";
})
document.getElementById("dreamDarkAlt").addEventListener("click", ()=>{
document.body.style.backgroundImage= "url('../../Global/Assets/Images/backgrounds/dream-dark-alt.jpg')"
document.getElementById('dstp1Img').src= "../../Global/Assets/Images/backgrounds/dream-dark-alt.jpg";
})

let RGOSUploadedBg = localStorage.getItem('backgroundImage');
document.getElementById('RipenosUploadedWall').src = RGOSUploadedBg
if(RGOSUploadedBg){
  document.getElementById('RipenosUploadedWall').src = RGOSUploadedBg;
  document.getElementById('RipenosUploadedWall').title = "Background Choosen on Ripen OS";
}
else{
  document.getElementById('RipenosUploadedWall').src = 'https://cdn.vox-cdn.com/uploads/chorus_asset/file/22312759/rickroll_4k.jpg';
  document.getElementById('RipenosUploadedWall').title = "Emperor meme of the entire internet!!!!";
}

document.getElementById("RipenosUploadedWall").addEventListener("click", ()=>{
  if(RGOSUploadedBg){
    document.body.style.backgroundImage= `url(${RGOSUploadedBg})`;
    document.getElementById('dstp1Img').src= RGOSUploadedBg;
  }
  else{
    document.body.style.backgroundImage= "url('https://cdn.vox-cdn.com/uploads/chorus_asset/file/22312759/rickroll_4k.jpg')";
    document.getElementById('dstp1Img').src= 'https://cdn.vox-cdn.com/uploads/chorus_asset/file/22312759/rickroll_4k.jpg';
  }
  })

function setBackgroundImageWin(imageUrl) {
  document.getElementById('desktop1').style.backgroundImage = `url('${imageUrl}')`;
  document.getElementById('dstp1Img').src = `${imageUrl}`;

  localStorage.setItem('backgroundImageWin', imageUrl);
}

const savedBackgroundImage = localStorage.getItem('backgroundImageWin');
if (savedBackgroundImage) {
  setBackgroundImageWin(savedBackgroundImage);
}

const imageElementM = document.getElementById('RipenWaves');
imageElementM.addEventListener('click', function() {
  const imageUrl = imageElementM.getAttribute('src');
  setBackgroundImageWin(imageUrl);
});
const imageElement = document.getElementById('dream');
imageElement.addEventListener('click', function() {
  const imageUrl = imageElement.getAttribute('src');
  setBackgroundImageWin(imageUrl);
});
const imageElement2 = document.getElementById('dreamDark');
imageElement2.addEventListener('click', function() {
  const imageUrl = imageElement2.getAttribute('src');
  setBackgroundImageWin(imageUrl);
});
const imageElement3 = document.getElementById('dreamDarkAlt');
imageElement3.addEventListener('click', function() {
  const imageUrl = imageElement3.getAttribute('src');
  setBackgroundImageWin(imageUrl);
});
const imageElement4 = document.getElementById('RipenosUploadedWall');
imageElement4.addEventListener('click', function() {
  const imageUrl = imageElement4.getAttribute('src');
  setBackgroundImageWin(imageUrl);
});

function applyTheme(theme) {
  if (theme === "dark") {
    document.documentElement.style.setProperty("--bg-color", "rgba(14, 14, 14, 0.65)");
    document.getElementById("glassytheme").classList.remove('active');
    document.getElementById("darktheme").classList.add('active');
    document.getElementById("lighttheme").classList.remove('active');
  }
  else if (theme == "glassy"){
    document.documentElement.style.setProperty("--bg-color", "rgba(0, 0, 0, 0.3)");
    document.getElementById("glassytheme").classList.add('active');
    document.getElementById("darktheme").classList.remove('active');
    document.getElementById("lighttheme").classList.remove('active');
  }
   else {
    document.documentElement.style.setProperty("--bg-color", "rgba(130, 130, 130, 0.25)");
    document.getElementById("glassytheme").classList.remove('active');
    document.getElementById("darktheme").classList.remove('active');
    document.getElementById("lighttheme").classList.add('active');
  }
  localStorage.setItem("selectedTheme", theme);
}

  document.getElementById("glassytheme").addEventListener("click", ()=>{applyTheme("glassy");})
  document.getElementById("darktheme").addEventListener("click", ()=>{applyTheme("dark");})
  document.getElementById("lighttheme").addEventListener("click", ()=>{applyTheme("light");})
  const selectedTheme = localStorage.getItem("selectedTheme");
  if (selectedTheme) {
    applyTheme(selectedTheme);
  }