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

document.getElementById('greetings').innerHTML ='<b>' + greet + ', ' + '</b>';
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
var r = document.querySelector(':root');
document.getElementById("Darktheme").addEventListener("click", ()=>{
  r.style.setProperty('--primary-bg', 'rgba(0, 0, 0, 0.65)');
  r.style.setProperty('--secondary-bg', 'rgba(241, 241, 241, 0.09)');
    document.body.style.color= "white";
})

document.getElementById("LightTheme").addEventListener("click", ()=>{
  r.style.setProperty('--primary-bg', 'rgba(240, 240, 240, 0.20)');
  r.style.setProperty('--secondary-bg', 'rgba(241, 241, 241, 0.2)');
    document.getElementById("myripebar").style.backdropFilter= "blur(35px) contrast(125%)";
    document.getElementById("feedbar").style.backdropFilter= "blur(35px) contrast(125%)";
    document.getElementById("dock").style.backdropFilter= "blur(35px) contrast(125%)";
    document.getElementsByClassName("apps").style.backdropFilter= "blur(35px) contrast(125%)";
    document.getElementsByClassName("desk-widget-info")[0].style.backdropFilter= "blur(35px) contrast(125%)";
})

// Wallpapers
document.getElementById("RipenWaves").addEventListener("click", ()=>{
    document.getElementById("sunset-bg").style.display = 'none';
    document.getElementById("sunset-bg").style.visibility = 'hidden';
    document.getElementById('Desktop').style.backgroundImage= "url('Assets/General/RipenWaves2.png')";
    document.getElementById('bgM').style.backgroundImage= "url('Assets/General/RipenWaves2.png')";
    document.getElementById('dstp1Img').src= "Assets/General/RipenWaves2.png";
})

document.getElementById("sunset").addEventListener("click", ()=>{
    alert('You’re about to choose an interactive wallpaper. Therefore, Desktop edit mode and other such features may not work and if on constant use will take more internal resources and battery. You may encounter bugs, if so please create an issue in our repository (Check All apps).')
    document.getElementById("sunset-bg").style.display = 'block';
    document.getElementById("sunset-bg").style.visibility = 'visible';
})

document.getElementById("dream").addEventListener("click", ()=>{
    document.getElementById("sunset-bg").style.display = 'none';
    document.getElementById("sunset-bg").style.visibility = 'hidden';
    document.getElementById('Desktop').style.backgroundImage= "url('Assets/General/dream.jpg')"
    document.getElementById('bgM').style.backgroundImage= "url('Assets/General/dream.jpg')";
    document.getElementById('dstp1Img').src= "Assets/General/dream.jpg";
})

document.getElementById("dreamDark").addEventListener("click", ()=>{
    document.getElementById("sunset-bg").style.display = 'none';
    document.getElementById("sunset-bg").style.visibility = 'hidden';
    document.getElementById('Desktop').style.backgroundImage= "url('Assets/General/dream-dark.jpg')"
    document.getElementById('bgM').style.backgroundImage= "url('Assets/General/dream-dark.jpg')";
    document.getElementById('dstp1Img').src= "Assets/General/dream-dark.jpg";

})

// Function to set the background image
function setBackgroundImage(imageUrl) {
    document.getElementById('Desktop').style.backgroundImage = `url('${imageUrl}')`;
    document.getElementById('bgM').style.backgroundImage = `url('${imageUrl}')`;
    document.getElementById('dstp1Img').src = `${imageUrl}`;

    localStorage.setItem('backgroundImage', imageUrl);
  }

  // Check if there is a previously set background image
  const savedBackgroundImage = localStorage.getItem('backgroundImage');
  if (savedBackgroundImage) {
    setBackgroundImage(savedBackgroundImage);
  }

  // Add event listener to the image element
  const imageElement = document.getElementById('dream');
  imageElement.addEventListener('click', function() {
    const imageUrl = imageElement.getAttribute('src');
    setBackgroundImage(imageUrl);
  });
  const imageElement2 = document.getElementById('dreamDark');
  imageElement2.addEventListener('click', function() {
    const imageUrl = imageElement2.getAttribute('src');
    setBackgroundImage(imageUrl);
  });
  
  const imageUpload = document.getElementById('WallIn');
    imageUpload.addEventListener('change', function() {
        document.getElementById("sunset-bg").style.display = 'none';
        document.getElementById("sunset-bg").style.visibility = 'hidden';
      const file = imageUpload.files[0];
      const reader = new FileReader();
      reader.onload = function(event) {
        const imageUrl = event.target.result;
        setBackgroundImage(imageUrl);
      };
      reader.readAsDataURL(file);
    });

    function setTextValue(textValue) {
        localStorage.setItem('textValue', textValue);
        document.getElementsByClassName('MenuTxt3')[0].innerHTML = textValue;
        document.getElementById('calWRP').innerHTML = textValue;
        document.getElementById('onLoadUserN').innerHTML = textValue + "'s";
        }

    // Check if there is a previously set text value
    const savedTextValue = localStorage.getItem('textValue');
    if (savedTextValue) {
      document.getElementById('userName').value = savedTextValue;
      document.getElementsByClassName('MenuTxt3')[0].innerHTML = savedTextValue;
        document.getElementById('calWRP').innerHTML = savedTextValue;
        document.getElementById('onLoadUserN').innerHTML = savedTextValue  + "'s";
    }

    const textInput = document.getElementById('userName');
     function getVal() {
      const textValue = textInput.value;
      setTextValue(textValue);
    };

    
// Desktop on click
window.onclick = function(event) {
    if (event.target == document.getElementById("Desktop")) {
        actionbarDown();
    }
}
  
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

console.log("%cRipen OS Official v3.0, is an opens-sourced project developed by the RGOS team. If you wish to help out with this project, visit https://github.com/ripenos/ripenos.github.io", "color: rgb(255, 123, 0); font-size: x-large")

function closeWelcome(){
    document.getElementById("welcome-page").style.transform = "translate(-50%, -50%) scale(0)";

    setTimeout(() => {
        document.getElementById("welcome-page").style.display = "none";
    }, 500);
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
        return setTimeout(() => popup.classList.remove("show"), 2000);
    }
    // If the status is false (offline), update the icon, title, and description accordingly
    wifiIcon.className = "uil uil-wifi-slash";
    popupTitle.innerText = "Lost Connection";
    popupDesc.innerHTML = "Your network is unavailable. We will attempt to check your network in <b>10</b> seconds.";
    popup.className = "popup show";

    intervalId = setInterval(() => { // Set an interval to decrease the timer by 1 every second
        timer--;
        if(timer === 0) checkConnection(); // If the timer reaches 0, check the connection again
        popup.querySelector(".desc b").innerText = timer;
    }, 1000);
}

// Only if isOnline is true, check the connection status every 3 seconds
setInterval(() => isOnline && checkConnection(), 3000);
reconnectBtn.addEventListener("click", checkConnection);

document.getElementById('welcome-fam').addEventListener("click", ()=>{
    document.getElementById('welcome-cont').style.display = "block"
    document.getElementById('RGOS-cont').style.display = "none"
  })
  document.getElementById('rgos-fam').addEventListener("click", ()=>{
    document.getElementById('welcome-cont').style.display = "none"
    document.getElementById('RGOS-cont').style.display = "block"
  })
  
  document.getElementById('WinRipen').addEventListener("click", ()=>{
    window.open(
      "https://ripenos.github.io/WinRipen", "_blank");
  })
  document.getElementById('dynamica').addEventListener("click", ()=>{
    alert("Hey! Ripenos Dynamica is coming soon!!");
  })
  
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
    if(document.getElementById('DeskIcons').style.display == 'none'){
      document.getElementById('DeskIcons').style.display = 'block';
      document.getElementById('DeskIcons').style.visibility = 'visible';
      document.getElementById('ToggleDeskIcoDisplay').classList.remove('activeCnt');
    }
    else{
      document.getElementById('DeskIcons').style.display = 'none';
      document.getElementById('DeskIcons').style.visibility = 'hidden';
      document.getElementById('ToggleDeskIcoDisplay').classList.add('activeCnt');
    }
  }
  
  function ShowDeskWidgetCtx(){
    if(document.getElementById('desk-widget').style.display == 'none'){
      document.getElementById('desk-widget').style.display = 'block';
      document.getElementById('desk-widget').style.visibility = 'visible';
      document.getElementById('ToggleDeskWidDisplay').classList.remove('activeCnt');
    }
    else{
      document.getElementById('desk-widget').style.display = 'none';
      document.getElementById('desk-widget').style.visibility = 'hidden';
      document.getElementById('ToggleDeskWidDisplay').classList.add('activeCnt');
    }
  }


  document.getElementById('Desktop').oncontextmenu =   function DesktopEdit(){
    document.getElementById('Desktop').style.scale = '0.785';
    document.getElementById('Desktop').style.top = '2.25%';
    document.getElementById('Desktop').style.borderRadius = '15px';
    document.getElementById('Desktop').style.pointerEvents = 'none';
    document.getElementById('Desktop').style.boxShadow = '0px 0px 50px black ';
    document.getElementById('Desktop').style.border = '1px solid #777777';
    ripebar.style.bottom= "-45px";
    document.body.getElementsByClassName("ripebarMobile")[0].style.bottom= "-45px";
    dockbar.style.bottom= "-45px";
    Feedbar.style.bottom= "-45px";
    document.getElementById('bgM').style.boxShadow = '0px 0px 200px black inset'
    document.getElementById('bgM').style.filter= "blur(35px) brightness(50%) saturate(175%)";
    actionbarDown();
    setTimeout(() => {
        document.getElementById('Desktop').style.scale = '0.8';
        document.getElementById('deskEdit').style.opacity = '1';
        document.getElementById('deskEdit').style.pointerEvents = 'all';
        document.getElementById('recentsClose').style.opacity = '1';
        document.getElementById('recentsClose').style.pointerEvents = 'all';
    }, 400);

    return false;
  }

  function ExitDesktopEdit(){
    document.getElementById('Desktop').style.scale = '0.785';
    document.getElementById('deskEdit').style.opacity = '0';
    document.getElementById('deskEdit').style.pointerEvents = 'none';
    document.getElementById('pg').style.left = '-25%'
    
    document.getElementById('recentsClose').style.opacity = '0';
    document.getElementById('recentsClose').style.pointerEvents = 'none';
    setTimeout(() => {
        document.getElementById('Desktop').style.scale = '1';
        document.getElementById('Desktop').style.top = '0';
        document.getElementById('Desktop').style.borderRadius = '0px';
        document.getElementById('Desktop').style.pointerEvents = 'all';
        document.getElementById('Desktop').style.border = '0px solid #777777';
        document.getElementById('Desktop').style.boxShadow = '0px 0px 25px transparent ';
        document.getElementById('bgM').style.boxShadow = '0px 0px 200px transparent inset'
        document.getElementById('bgM').style.filter= "blur(0px)  brightness(100%) saturate(100%)";
        ripebar.style.bottom= "0";
        document.body.getElementsByClassName("ripebarMobile")[0].style.bottom= "0";
        dockbar.style.bottom= "0";
        Feedbar.style.bottom= "0";
    }, 400);
  }
