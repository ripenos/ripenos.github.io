function ShowDs(){
    setTimeout(() => {
        document.getElementById("myblank").style.visibility = 'hidden';
        document.getElementById("myblank").style.opacity = '0';
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

        dockApps.style.top = "150%";
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

document.getElementById('greetings').innerHTML ='<b>' + greet + ',  Admin' + '</b>';

function showRecents(){
    let desk = document.getElementById('desktop');
    let tb = document.getElementById('tb');
    let cl = document.getElementsByClassName('recentsClose')[0]
    let startbutton = document.getElementById('sb');
    startbutton.style.width = "44px";

    startmenu.style.bottom = "-100%";
        desk.style.scale= '0.70'
        desk.style.borderRadius= '20px'
        tb.style.bottom= '-62px'
        cl.style.bottom = '2.5%'
}
function HideRecents(){
    let desk = document.getElementById('desktop');
    let tb = document.getElementById('tb');
    let cl = document.getElementsByClassName('recentsClose')[0]

        desk.style.scale= '1'
        desk.style.borderRadius= '0'
        tb.style.bottom= '1.25%'
        tb.style.background = 'rgba(0, 0, 0, 0.65)';
        tb.style.backdropFilter = 'blur(35px)';
        tb.style.webkitBackdropFilter = 'blur(35px)';
        tb.style.border = '0.5px solid #f1f1f123';
        tb.style.boxShadow = '0px 0px 5px rgba(0, 0, 0, 1)';
        tb.style.bottom = "1.25%";
        dockApps.style.top = "50%";

        cl.style.bottom = '-72px'       
}
