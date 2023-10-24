var choice = localStorage.getItem("AppsLayoutMobile");


function ShowDs(){
    setTimeout(() => {
        document.getElementById("myblank").style.visibility = 'hidden';
        document.getElementById("myblank").style.opacity = '0';

        if (choice === "A2") {
            document.getElementById('tiles').style.display= 'block'; 
                document.getElementById('grid').style.display= 'none';
                document.getElementById('tile-trayBtn').classList.add('trayActive')
                document.getElementById('grid-trayBtn').classList.remove('trayActive')
          } else {
            document.getElementById('tiles').style.display= 'none'; 
            document.getElementById('grid').style.display= 'block';
            document.getElementById('grid-trayBtn').classList.add('trayActive')
            document.getElementById('tile-trayBtn').classList.remove('trayActive')
          }
    }, 750);
}

const popup = document.querySelector(".popup"),
wifiIcon = document.querySelector(".icon i"),
popupTitle = document.querySelector(".popup .title"),
popupDesc = document.querySelector(".desc"),
reconnectBtn = document.querySelector(".reconnect");

let isOnline = true, intervalId, timer = 10;

const checkConnection = async () => {
    try {
        // Try to fetch random data from the API. If the status code is between 
        // 200 and 300, the network connection is considered online 
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        isOnline = response.status >= 200 && response.status < 300;
    } catch (error) {
        isOnline = false; // If there is an error, the connection is considered offline
    }
    timer = 10;
    clearInterval(intervalId);
    handlePopup(isOnline);
}

const handlePopup = (status) => {
    if(status) { // If the status is true (online), update icon, title, and description accordingly
        wifiIcon.className = "uil uil-wifi";
        popupTitle.innerText = "Restored Connection";
        popupDesc.innerHTML = "Your device is now successfully connected to the internet.";
        popup.classList.add("online");
        document.getElementById("myblank").style.visibility = 'hidden';
        document.getElementById("myblank").style.opacity = '0';
        return setTimeout(() => popup.classList.remove("show"), 2000);
    }
    // If the status is false (offline), update the icon, title, and description accordingly
    wifiIcon.className = "uil uil-wifi-slash";
    popupTitle.innerText = "Lost Connection";
    popupDesc.innerHTML = "Your network is unavailable. We will attempt to check your network in <b>10</b> seconds.";
    popup.className = "popup show";
    document.getElementById("myblank").style.visibility = 'visible';
    document.getElementById("myblank").style.opacity = '1';
    intervalId = setInterval(() => { // Set an interval to decrease the timer by 1 every second
        timer--;
        if(timer === 0) checkConnection(); // If the timer reaches 0, check the connection again
        popup.querySelector(".desc b").innerText = timer;
    }, 1000);
}

// Only if isOnline is true, check the connection status every 3 seconds
setInterval(() => isOnline && checkConnection(), 3000);
reconnectBtn.addEventListener("click", checkConnection);

let startbutton = document.getElementById('sb');
let startmenu = document.getElementById('startMenu');
let taskbar = document.getElementById('tb');
let dockApps = document.getElementById('dockApps')
let desktop = document.getElementById('desktop')

function showStart(){
	if(startmenu.style.bottom == "0%"){
        startmenu.style.bottom = "-100%";
        startbutton.style.width = "44px";

        taskbar.style.background = 'rgba(0, 0, 0, 0.65)';
        taskbar.style.backdropFilter = 'blur(35px)';
        taskbar.style.webkitBackdropFilter = 'blur(35px)';
        taskbar.style.border = '0.5px solid #f1f1f123';
        taskbar.style.boxShadow = '0px 0px 5px rgba(0, 0, 0, 1)';
        taskbar.style.bottom = "1.25%";
        desktop.style.filter = 'blur(0px) brightness(100%)';
        desktop.style.scale = '1';
        dockApps.style.top = "50%";
	}
	else{
        startmenu.style.bottom = "0%";
        startbutton.style.width = "140px";

        taskbar.style.background = 'rgba(0, 0, 0, 0)';
        taskbar.style.backdropFilter = 'blur(0px)';
        taskbar.style.webkitBackdropFilter = 'blur(0px)';
        taskbar.style.border = '0.5px solid #f1f1f100';
        taskbar.style.boxShadow = '0px 0px 5px rgba(0, 0, 0, 0)';
        taskbar.style.bottom = "1%";
        desktop.style.filter = 'blur(15px) brightness(65%)';
        desktop.style.scale = '0.95';
        dockApps.style.top = "150%";
    }
}

function ShowContrlsPanel(){
    let cnt = document.getElementById('controls');
    let cntM = document.getElementById('controls-menu');
    let cntM1 = document.getElementById('controls-menu1');
    let cntM2 = document.getElementById('controls-menu2');
    let cntM3 = document.getElementById('controls-menu3');

    if(cnt.style.top=='0px'){
        cntM.style.top= '6%';
        cntM1.style.marginTop = "2.5%"
        cntM2.style.marginTop = "2.5%"
        cntM3.style.marginTop = "2.5%"

        setTimeout(() => {
            cnt.style.top= '-100%';
            cnt.style.visibility= 'hidden';
            cnt.style.opacity= '0';
            cnt.style.borderRadius= '0 0 20px 20px';
        }, 350);
    }
    else{
        cnt.style.top= '0px';
        cnt.style.visibility= 'visible';
        cnt.style.opacity= '1';
        cnt.style.borderRadius= '0';
        setTimeout(() => {
            cntM.style.top= '4%';
            cntM1.style.marginTop = "0%"
            cntM2.style.marginTop = "0%"
            cntM3.style.marginTop = "0%"
        }, 500);
    }
}

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    m = checkTime(m);
    
    document.getElementById('timeDesktop').innerHTML =  h + ":" + m;
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

    var weekday = ['Sunday', 'Monday', 'Tuesday',
    'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ];

    document.getElementById('txtdty').innerHTML = weekday[myDay] + ' ' + dt +  ', ' + dToday.getFullYear() + '  • 33° C';
    setTimeout(startTime, 1000);
}

function startTimeS() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    m = checkTimeS(m);
    
    document.getElementById('timeS').innerHTML =  h + ":" + m;
    setTimeout(startTime, 1000);
}

function checkTimeS(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

var div2 = document.getElementById("status2");
if (navigator.getBattery) {
    navigator.getBattery().then(function(battery) {
      display2(battery);
    });
} 
else if (navigator.battery) {
    display2(navigator.battery);
} 
else {
    div2.innerHTML = "70%";
}

function display2(battery) {
    var status2 = "";
    status2 += (battery.level * 100).toFixed(0) + "%";
    let batteryLevel = `${parseInt(battery.level * 100)}%`;
    div2.innerHTML = status2;
    document.getElementById('flyWB').style.width = batteryLevel;
}
document.getElementById('grid-trayBtn').classList.add('trayActive');

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
}
else{
  document.getElementById('startPfp').src = '../../Ripenos/Assets/UI/icons8-male-user-96.png';
}

function showRecents(){
    let tb = document.getElementById('tb');
    let cl = document.getElementsByClassName('recentsClose')[0]
    let startbutton = document.getElementById('sb');
    startbutton.style.width = "44px";
    desktop.style.filter = 'blur(0px) brightness(100%)';
    startmenu.style.bottom = "-100%";
    desktop.style.scale= '0.65'
    desktop.style.transform = 'translateY(-35px)'
    desktop.style.borderRadius= '20px'
    desktop.style.pointerEvents = "none"
        setTimeout(() => {
            desktop.style.scale= '0.70'
        tb.style.bottom= '-62px'
        cl.style.bottom = '2.5%'
        }, 200);
}
function HideRecents(){
    let tb = document.getElementById('tb');
    let cl = document.getElementsByClassName('recentsClose')[0]

    desktop.style.scale= '0.65'
        setTimeout(() => {
            desktop.style.scale= '1'
            desktop.style.borderRadius= '0'
            desktop.style.transform = 'translateY(0px)'
            desktop.style.pointerEvents = "all"
            tb.style.bottom= '1.25%'
        tb.style.background = 'rgba(0, 0, 0, 0.65)';
        tb.style.backdropFilter = 'blur(35px)';
        tb.style.webkitBackdropFilter = 'blur(35px)';
        tb.style.border = '0.5px solid #f1f1f123';
        tb.style.boxShadow = '0px 0px 5px rgba(0, 0, 0, 1)';
        tb.style.bottom = "1.25%";
        dockApps.style.top = "50%";
        }, 200);
        cl.style.bottom = '-72px'       
}