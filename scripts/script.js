var dockApps = document.body.getElementsByClassName("dockApps")[0];
var ripebar = document.body.getElementsByClassName("ripebar")[0];
var dockbar = document.body.getElementsByClassName("actionbarC")[0];
var Feedbar = document.body.getElementsByClassName("actionbarR")[0];

function showDesktop(){
    setTimeout(() => {
        document.getElementById("Blank").style.opacity= "0";
    }, 50);

    setTimeout(() => {
        document.getElementById("Blank").style.opacity= "0";
        ripebar.style.transition= "all 0.5s";
        dockbar.style.transition= "all 0.5s";
        Feedbar.style.transition= "all 0.5s";
        ripebar.style.bottom= "0";
        document.body.getElementsByClassName("ripebarMobile")[0].style.bottom= "0";
        dockbar.style.bottom= "0";
        Feedbar.style.bottom= "0";
        document.getElementById("Desktop-items").style.opacity= "1";

        document.getElementById("welcome-page").style.display = "block";

        setTimeout(() => {
            document.getElementById("welcome-page").style.transform = "translate(-50%, -50%) scale(1.1)";
        }, 500);
        setTimeout(() => {
            document.getElementById("welcome-page").style.transform = "translate(-50%, -50%) scale(1)";
        }, 1000);

        Feedbar.style.bottom= "0";
    }, 500);

    ripebar.style.transition= "all 0.3s";
    dockbar.style.transition= "all 0.3s";
    Feedbar.style.transition= "all 0.3s";

    setTimeout(() => {
        document.getElementById("Blank").style.display= "none";
    }, 500);
}

// global.js wld help integration with different files around the directory

// Closing Actionbar Panels Function
function actionbarDown(){
    document.getElementById("feedbar").style.height = "45px";
    document.getElementById("dock").style.height = "45px";
    document.getElementById("myripebar").style.height = "45px";
    document.getElementById("myripebarM").style.height = "45px";
    document.getElementById("dock").style.paddingTop = "10px";
    document.getElementById("dock").style.paddingLeft = "10px";
    document.getElementById("AllApps").style.marginTop= "-2.5px";
    document.getElementsByClassName("searchT")[0].style.marginBottom = "1px";
    document.getElementsByClassName("logo")[0].style.bottom = "5px";
    document.getElementById("myripebar").style.width = "27vw";
    document.getElementById("dock").style.transition = "all 0.3s";
    document.getElementById("defaultOpen").click();
    document.getElementById("defaultOpen").style.transform= "translateY(0px)";
    document.getElementById("defaultOpen").style.opacity= "1";
    document.getElementById("msg").style.opacity= "0";
    document.getElementById("RipeLogoM").src= "Assets/General/ripenOs.jpg";
    document.getElementById("RipeLogoM").style.width= "31px";
    document.getElementById("RipeLogoM").style.marginLeft= "0px";
    document.getElementById("RipenPanel").style.visibility = "hidden";
    document.getElementById("RipenPanel").style.opacity = "0";
    document.getElementById("RipenPanelM").style.visibility = "hidden";
    document.getElementById("RipenPanelM").style.opacity = "0";
    document.getElementById("ControlToggles").style.visibility = "hidden";
    document.getElementById("ControlToggles").style.opacity = "0";
    document.getElementById("personalizePanel").style.visibility = "hidden";
    document.getElementById("personalizePanel").style.opacity = "0";
    document.getElementById("wifiPanel").style.visibility = "hidden";
    document.getElementById("wifiPanel").style.opacity = "0";
    document.getElementById("MoreCntrlPanel").style.visibility = "hidden";
    document.getElementById("MoreCntrlPanel").style.opacity = "0";
    document.getElementById("CalPanel").style.visibility = "hidden";
    document.getElementById("CalPanel").style.opacity = "0";
    document.getElementById("batteryPanel").style.visibility = "hidden";
    document.getElementById("batteryPanel").style.opacity = "0";
    document.getElementById("SearchApps").style.visibility = "hidden";
    document.getElementById("SearchApps").style.opacity = "0";
    document.getElementById("NotyPanel").style.visibility = "hidden";
    document.getElementById("NotyPanel").style.opacity = "0";
}

// Time-Date Function
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
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function StartDate(){
    const dToday = new Date();
    let dt = dToday.getDate();
    var myDate = new Date();
    var myDay = myDate.getDay();

    // Array of days.
    var weekday = ['Sunday', 'Monday', 'Tuesday',
        'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ];
    document.getElementById('txtdty').innerHTML =  dt + '/' + (dToday.getMonth() + 1) + '/' + dToday.getFullYear();
    setTimeout(startTime, 1000);
}

function startTimeM() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    var ampm = "";
    m = checkTimeM(m);

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

    document.getElementById('txtM').innerHTML =  h + ":" + m+ampm;
    setTimeout(startTime, 1000);
}

function checkTimeM(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function StartDateM(){
    const dToday = new Date();
    let dt = dToday.getDate();
    var myDate = new Date();
    var myDay = myDate.getDay();

    // Array of days.
    var weekday = ['Sunday', 'Monday', 'Tuesday',
        'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ];
    document.getElementById('txtdtyM').innerHTML =  dt + '/' + dToday.getMonth() + '/' + dToday.getFullYear();
    setTimeout(startTime, 1000);
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

document.getElementById('greetings').innerHTML ='<b>' + greet + ', Admin' + '</b>';

var GreetDate = new Date();
var hrs = GreetDate.getHours();
var greet;
if (hrs < 12)
greet = 'Good Morning';
else if (hrs >= 12 && hrs <= 17)
greet = 'Good Afternoon';
else if (hrs >= 17 && hrs <= 24)
greet = 'Good Evening';

document.getElementById('greetings').innerHTML ='<b>' + greet + ',  Admin' + '</b>';

var GreetDate2 = new Date();
var hrs2 = GreetDate2.getHours();
var greet2;
if (hrs2 < 12)
greet2 = 'Good Morning';
else if (hrs2 >= 12 && hrs2 <= 17)
greet2 = 'Good Afternoon';
else if (hrs2 >= 17 && hrs2 <= 24)
greet2 = 'Good Evening';

document.getElementById('greetingsM').innerHTML ='<b>' + greet2 + ',  Admin' + '</b>';

// Personalization Actions
// Theme
document.getElementById("Darktheme").addEventListener("click", ()=>{
    document.getElementById("myripebar").style.backgroundColor= "rgba(0, 0, 0, 0.65)";
    document.getElementById("myripebar").style.backdropFilter= "blur(35px) contrast(100%)";
    document.getElementById("feedbar").style.backgroundColor= "rgba(0, 0, 0, 0.65)";
    document.getElementById("feedbar").style.backdropFilter= "blur(35px) contrast(100%)";
    document.getElementById("dock").style.backgroundColor= "rgba(0, 0, 0, 0.65)";
    document.getElementById("dock").style.backdropFilter= "blur(35px) contrast(100%)";
    document.getElementsByClassName("desk-widget-info")[0].style.backgroundColor= "rgba(0, 0, 0, 0.55)";
    document.getElementsByClassName("desk-widget-info")[0].style.backdropFilter= "blur(25px)";
    document.body.style.color= "white";
})

document.getElementById("LightTheme").addEventListener("click", ()=>{
    document.getElementById("myripebar").style.backgroundColor= "rgba(240, 240, 240, 0.15)";
    document.getElementById("myripebar").style.backdropFilter= "blur(35px)";
    document.getElementById("feedbar").style.backgroundColor= "rgba(240, 240, 240, 0.15)";
    document.getElementById("feedbar").style.backdropFilter= "blur(35px)";
    document.getElementById("dock").style.backgroundColor= "rgba(240, 240, 240, 0.15)";
    document.getElementById("dock").style.backdropFilter= "blur(35px)";
    document.getElementsByClassName("desk-widget-info")[0].style.backgroundColor= "rgba(240, 240, 240, 0.15)";
    document.getElementsByClassName("desk-widget-info")[0].style.backdropFilter= "blur(35px)";
})

// Actionbar Behaviour
document.getElementById("Acbars").addEventListener("click", ()=>{
    ripebar.style.bottom= "0";
    dockbar.style.bottom= "0";
    Feedbar.style.bottom= "0";
    document.getElementById("AcDocks").style.width = "45%";
    document.getElementById("Desktop").style.height= "calc(100vh - 45px)";
    document.getElementById("Desktop").style.height= "calc(100dvh - 45px)";
})

document.getElementById("AcDocks").addEventListener("click", ()=>{
    document.getElementById("AcDocks").style.width = "44.9%";
    actionbarDown();
    document.getElementById("Desktop").style.height= "100dvh";
    document.getElementById("Desktop").style.height= "100vh";
})

function HoverDock(){
    ripebar.style.bottom= "0";
    dockbar.style.bottom= "0";
    Feedbar.style.bottom= "0";
}

function HoverDockDown(){
    if(document.getElementById("AcDocks").style.width == "44.9%"){
        setTimeout(() => {
            ripebar.style.bottom= "-43px";
            dockbar.style.bottom= "-35px";
            Feedbar.style.bottom= "-43px";
            actionbarDown();
        }, 1000);
    }
}

// Wallpapers
document.getElementById("RipenWaves").addEventListener("click", ()=>{
    document.getElementById("sunset-bg").style.display = 'none';
    document.getElementById("sunset-bg").style.visibility = 'hidden';
    document.body.style.backgroundImage= "url('Assets/General/RipenWaves2.png')";
})

document.getElementById("Ventura").addEventListener("click", ()=>{
    document.getElementById("sunset-bg").style.display = 'block';
    document.getElementById("sunset-bg").style.visibility = 'visible';
})

document.getElementById("VenturaDark").addEventListener("click", ()=>{
    document.getElementById("sunset-bg").style.display = 'none';
    document.getElementById("sunset-bg").style.visibility = 'hidden';
    document.body.style.backgroundImage= "url('https://wallpapercave.com/wp/wp11233324.jpg')"
    document.body.style.backgroundPosition= "center";
})

const fileDataURL = file => new Promise((resolve,reject) => {
    let fr = new FileReader();
    fr.onload = () => resolve( fr.result);
    fr.onerror = reject;
    fr.readAsDataURL( file)
});

function showResult(file) {
    document.getElementById("sunset-bg").style.display = 'none';
    document.getElementById("sunset-bg").style.visibility = 'hidden';
    fileDataURL( file)
    .then( data => {
        document.body.style.backgroundImage = `url(${data})`;
    })
}

// Desktop on click
window.onclick = function(event) {
    if (event.target == document.getElementById("Desktop")) {
        actionbarDown();
        HoverDockDown();
    }
}

// Context Menu on desktop
const contextMenu = document.getElementById("context-menu");
const scope = document.querySelector("#desktop");
const normalizePozition = (mouseX, mouseY) => {
  // ? compute what is the mouse position relative to the container element (scope)
  let { left: scopeOffsetX, top: scopeOffsetY, } = scope.getBoundingClientRect();
  
  scopeOffsetX = scopeOffsetX < 0 ? 0 : scopeOffsetX;
  scopeOffsetY = scopeOffsetY < 0 ? 0 : scopeOffsetY;
  
  const scopeX = mouseX - scopeOffsetX;
  const scopeY = mouseY - scopeOffsetY;

  // ? check if the element will go out of bounds
  const outOfBoundsOnX = scopeX + contextMenu.clientWidth > scope.clientWidth;

  const outOfBoundsOnY = scopeY + contextMenu.clientHeight > scope.clientHeight;

  let normalizedX = mouseX;
  let normalizedY = mouseY;

  // ? normalize on X
  if (outOfBoundsOnX) {
    normalizedX = scopeOffsetX + scope.clientWidth - contextMenu.clientWidth;
  }

  // ? normalize on Y
  if (outOfBoundsOnY) {
    normalizedY = scopeOffsetY  + scope.clientHeight - contextMenu.clientHeight ;
  }

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

scope.addEventListener("click", (e) => {
  // ? close the menu if the user clicks outside of it
  if (e.target.offsetParent != contextMenu) {
    contextMenu.classList.remove("visible");
  }
});

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

    setTimeout(() => {
        document.getElementById("tempLockScreen").style.opacity= "1";
    }, 1);
}

function tempLockHide(){
    document.getElementById("tempLockScreen").style.opacity= "0";

    setTimeout(() => {
        document.getElementById("tempLockScreen").style.display= "none";
    }, 300);
}

function winRipenGo(){
    window.open('https://ripenos.github.io/WinRipen/', '_blank');
}

console.log("%cRipen OS is a project developed by Navaneet and marketed by Shafi. If you wish to help out with this project, visit https://github.com/ripenos/ripenos.github.io", "color: rgb(255, 123, 0); font-size: x-large")

function closeWelcome(){
    document.getElementById("welcome-page").style.transform = "translate(-50%, -50%) scale(0)";

    setTimeout(() => {
        document.getElementById("welcome-page").style.display = "none";
    }, 500);
}
