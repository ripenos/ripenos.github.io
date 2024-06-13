var dockApps = document.body.getElementsByClassName("dockApps")[0];
var ripebar = document.body.getElementsByClassName("ripebar")[0];
var dockbar = document.body.getElementsByClassName("actionbarC")[0];
var Feedbar = document.body.getElementsByClassName("actionbarR")[0];
function setPw(pw) {
  localStorage.setItem('pw', pw);
  document.getElementById('pwIn').value = pw;
  }

const Spw = localStorage.getItem('pw');
if (Spw) {
  document.getElementById('pwIn').value = Spw;
}

function showDesktop(){
  if(document.getElementById('pwIn').value == Spw){
    document.getElementById('mySignInForUserSecurityPanel').style.display = "block"
    document.getElementById('myUserSecurityContentMain').classList.add('UserSecurityContentBlur')
    document.getElementById('mySignInForRGOS').style.display = "block"
    document.getElementById('ROS-loading').style.opacity = "0"
    document.getElementById('tempLockSignIn').style.display = "block"
    document.getElementById('UnlockBtnTempLock').style.display = "none"
  }
  else{
    document.getElementById('mySignInForUserSecurityPanel').style.display = "none"
    document.getElementById('myUserSecurityContentMain').classList.remove('UserSecurityContentBlur')
    document.getElementById('mySignInForRGOS').style.display = "none"
    document.getElementById('ROS-loading').style.opacity = "1"
    document.getElementById('tempLockSignIn').style.display = "none"
    document.getElementById('UnlockBtnTempLock').style.display = "block"

    setTimeout(() => {document.getElementById("Blank").style.opacity= "0"; document.getElementById("Desktop").style.scale = "1"  }, 50);

    setTimeout(() => {
        document.getElementById("Blank").style.display= "none";
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
  }

  document.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      LoginROS();
    }
  });
}

function LoginROS(){
  if(document.getElementById('pwInLR1').value == Spw && document.getElementById('pwInLR1').value !== ""){
    document.getElementById('passkeyLParaR1').innerHTML = "Verified"
    setTimeout(() => {
      document.getElementById('mySignInForRGOS').style.display = "none"
      document.getElementById('pwInLR1').value = ""
    }, 300);
    setTimeout(() => {
      document.getElementById("Blank").style.opacity= "0";
      document.getElementById("Desktop").style.scale = "1"
    }, 500);
    setTimeout(() => {
        document.getElementById("Blank").style.display= "none";
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
    }, 950);

    ripebar.style.transition= "all 0.3s";
    dockbar.style.transition= "all 0.3s";
    Feedbar.style.transition= "all 0.3s";
  }
  else{
    document.getElementById('passkeyLParaR1').innerHTML = "not verified..try again:"
    document.getElementById('pwInLR1').value = ""
  }
}

// Closing Actionbar Panels Function
function actionbarDown(){
    document.getElementById("feedbar").style.height = "45px";
    document.getElementById("dock").style.height = "45px";
    document.getElementById("myripebar").style.height = "45px";
    document.getElementById("myripebarM").style.height = "55px";
    document.getElementById("myripebarM").style.width = "98%";
    document.getElementById("myripebarM").style.left = "1%";
    document.getElementById("myripebarM").style.borderTop = " var(--primary-border)";
    document.getElementById("myripebarM").style.borderLeft = " var(--primary-border)";
    document.getElementById("myripebarM").style.borderRight = " var(--primary-border)";
    document.getElementsByClassName("searchT")[0].style.marginBottom = "1px";
    document.getElementsByClassName("logo")[0].style.bottom = "5px";
   dockApps.style.transform = "translateX(-50%) scale(0.95)";
   dockApps.style.bottom = "-1.5px"
   document.getElementById("AllApps").style.transform = " scale(0.95) translateX(-2px)"
    document.getElementById("msg").style.opacity= "0";
    document.getElementById("RipeLogoM").style.marginLeft= "0px";
    document.getElementById("RipenPanel").style.visibility = "hidden";
    document.getElementById("RipenPanel").style.opacity = "0";
    document.getElementById("RipenPanelM").style.visibility = "hidden";
    document.getElementById("RipenPanelM").style.opacity = "0";
    document.getElementById("ControlToggles").style.visibility = "hidden";
    document.getElementById("ControlToggles").style.opacity = "0";
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
    document.getElementById("controlShowBtn").classList.remove('active')
    document.getElementById("Calbtn").classList.remove('active')
    document.getElementById("adrsbr").value = '';
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


// Personalization Actions
// Theme

function applyTheme(theme) {
  if (theme === "dark") {
    document.documentElement.style.setProperty("--primary-bg", "rgba(14, 14, 14, 0.65)");
    document.getElementById("glassytheme").classList.remove('active');
    document.getElementById("darktheme").classList.add('active');
    document.getElementById("lighttheme").classList.remove('active');
  }
  else if (theme == "glassy"){
    document.documentElement.style.setProperty("--primary-bg", "rgba(225, 225, 225, 0.03)");
    document.getElementById("glassytheme").classList.add('active');
    document.getElementById("darktheme").classList.remove('active');
    document.getElementById("lighttheme").classList.remove('active');
  }
   else {
    document.documentElement.style.setProperty("--primary-bg", "rgba(130, 130, 130, 0.25)");
    document.getElementById("glassytheme").classList.remove('active');
    document.getElementById("darktheme").classList.remove('active');
    document.getElementById("lighttheme").classList.add('active');
  }
  localStorage.setItem("selectedThemeROS", theme);
}

  document.getElementById("glassytheme").addEventListener("click", ()=>{applyTheme("glassy");})
  document.getElementById("darktheme").addEventListener("click", ()=>{applyTheme("dark");})
  document.getElementById("lighttheme").addEventListener("click", ()=>{applyTheme("light");})
  const selectedTheme = localStorage.getItem("selectedThemeROS");
  if (selectedTheme) {
    applyTheme(selectedTheme);
  }

  document.addEventListener("DOMContentLoaded", function() {
    const colorPicker = document.getElementById("AccentColorROS");

    colorPicker.addEventListener("change", function(event) {
      const selectedColor = event.target.value;
      document.documentElement.style.setProperty("--accent-color", selectedColor);
      localStorage.setItem("accentColorROS", selectedColor);
    });

    const storedAccentColor = localStorage.getItem("accentColorROS");
    if (storedAccentColor) {
      document.documentElement.style.setProperty("--accent-color", storedAccentColor);
      colorPicker.value = storedAccentColor;
    }
  });

// Wallpapers
document.getElementById("RipenWaves").addEventListener("click", ()=>{
    document.getElementById('Desktop').style.backgroundImage= "url('../../Global/Assets/Images/backgrounds/RipenWaves2.png')";
    document.getElementById('bgM').style.backgroundImage= "url('../../Global/Assets/Images/backgrounds/RipenWaves2.png')";
    document.getElementById('dstp1Img').src= "../../Global/Assets/Images/backgrounds/RipenWaves2.png";
    document.getElementById('setWelROSimg').src = "../../Global/Assets/Images/backgrounds/RipenWaves2.png";
})

document.getElementById("dream").addEventListener("click", ()=>{
    document.getElementById('Desktop').style.backgroundImage= "url('../../Global/Assets/Images/backgrounds/dream.jpg')"
    document.getElementById('bgM').style.backgroundImage= "url('../../Global/Assets/Images/backgrounds/dream.jpg')";
    document.getElementById('dstp1Img').src= "../../Global/Assets/Images/backgrounds/dream.jpg";
    document.getElementById('setWelROSimg').src =  "../../Global/Assets/Images/backgrounds/dream.jpg";
})

document.getElementById("dreamDark").addEventListener("click", ()=>{
    document.getElementById('Desktop').style.backgroundImage= "url('../../Global/Assets/Images/backgrounds/dream-dark.jpg')"
    document.getElementById('bgM').style.backgroundImage= "url('../../Global/Assets/Images/backgrounds/dream-dark.jpg')";
    document.getElementById('dstp1Img').src= "../../Global/Assets/Images/backgrounds/dream-dark.jpg";
    document.getElementById('setWelROSimg').src =  "../../Global/Assets/Images/backgrounds/dream-dark.jpg";
})
document.getElementById("dreamDarkAlt").addEventListener("click", ()=>{
  document.getElementById('Desktop').style.backgroundImage= "url('../../Global/Assets/Images/backgrounds/dream-dark-alt.jpg')"
  document.getElementById('bgM').style.backgroundImage= "url('../../Global/Assets/Images/backgrounds/dream-dark-alt.jpg')";
  document.getElementById('dstp1Img').src= "../../Global/Assets/Images/backgrounds/dream-dark-alt.jpg";
  document.getElementById('setWelROSimg').src = "../../Global/Assets/Images/backgrounds/dream-dark-alt.jpg";
})

// Function to set the background image
function setBackgroundImage(imageUrl) {
    document.getElementById('Desktop').style.backgroundImage = `url('${imageUrl}')`;
    document.getElementById('bgM').style.backgroundImage = `url('${imageUrl}')`;
    document.getElementById('dstp1Img').src = `${imageUrl}`;
    document.getElementById('setWelROSimg').src = `${imageUrl}`;
    localStorage.setItem('backgroundImage', imageUrl);
  }

  // Check if there is a previously set background image
  const savedBackgroundImage = localStorage.getItem('backgroundImage');
  if (savedBackgroundImage) {
    setBackgroundImage(savedBackgroundImage);
  }

  const backgroundImageWin = localStorage.getItem('backgroundImageWin');
  if (backgroundImageWin) {
    document.getElementById('setWelWRimg').src = backgroundImageWin;
  }
  else{
    document.getElementById('setWelWRimg').src = '../Global/Assets/Images/backgrounds/dream-dark-alt.jpg';
  }

  // Add event listener to the image element
  const imageElementM = document.getElementById('RipenWaves');
  imageElementM.addEventListener('click', function() {
    const imageUrl = imageElementM.getAttribute('src');
    setBackgroundImage(imageUrl);
  });
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
  const imageElement3 = document.getElementById('dreamDarkAlt');
  imageElement3.addEventListener('click', function() {
    const imageUrl = imageElement3.getAttribute('src');
    setBackgroundImage(imageUrl);
  });
  
  const imageUpload = document.getElementById('WallIn');
    imageUpload.addEventListener('change', function() {
      const file = imageUpload.files[0];
      const reader = new FileReader();
      reader.onload = function(event) {
        const imageUrl = event.target.result;
        setBackgroundImage(imageUrl);
      };
      reader.readAsDataURL(file);
    });

    const userPfpImg = document.getElementById('userPfp');
    userPfpImg.addEventListener('change', function() {
      const file = userPfpImg.files[0];
      const reader = new FileReader();
      reader.onload = function(event) {
        const imageUrl = event.target.result;
        ChangeUserPic(imageUrl);
      };
      reader.readAsDataURL(file);
    });

    function ChangeUserPic(imageUrl){
      document.getElementById('userPfpImg').src = `${imageUrl}`;
      document.getElementById('RipenPanelUserPfp').src = `${imageUrl}`;
      document.getElementById('RipenPanelUserPfpM').src = `${imageUrl}`;
      document.getElementById('TempLockPfp').src = `${imageUrl}`;
      document.getElementById('LockPfp').src = `${imageUrl}`;
      document.getElementById('setWelIco').src = `${imageUrl}`;
      document.getElementById('userImgPlayer').src = `${imageUrl}`;
      localStorage.setItem('UserPfp', imageUrl);
    }
    const savedUserpfp = localStorage.getItem('UserPfp');
    if (savedUserpfp) {
      ChangeUserPic(savedUserpfp);
    }
  
    let UserPreviewNameM = "Admin"

    function setUserPreviewName(UserPreviewName) {
        localStorage.setItem('UserPreviewName', UserPreviewName);
        document.getElementsByClassName('MenuTxt3')[0].innerHTML = UserPreviewName;
        document.getElementById('onLoadUserN').innerHTML = UserPreviewName + "'s";
        document.getElementById('userName').value = UserPreviewName;
        document.getElementById('userImgPlayer').title = UserPreviewName;
        document.getElementById('greetingsMUserName').innerHTML = UserPreviewName;
        document.getElementById('LockUserName').innerHTML = UserPreviewName;
        document.getElementById('setWelName').innerHTML = UserPreviewName;
        UserPreviewNameM = UserPreviewName;
        }

    const savedUserPreviewName = localStorage.getItem('UserPreviewName');
    if (savedUserPreviewName) {
      document.getElementById('userShowName').value = savedUserPreviewName;
      document.getElementsByClassName('MenuTxt3')[0].innerHTML = savedUserPreviewName;
        document.getElementById('calWRP').innerHTML = savedUserPreviewName;
        document.getElementById('onLoadUserN').innerHTML = savedUserPreviewName  + "'s";
        document.getElementById('greetingsMUserName').innerHTML = savedUserPreviewName;
        document.getElementById('LockUserName').innerHTML = savedUserPreviewName;
        document.getElementById('userName').value = savedUserPreviewName;
        document.getElementById('userImgPlayer').title = savedUserPreviewName;
        document.getElementById('setWelName').innerHTML = savedUserPreviewName;
        UserPreviewNameM = savedUserPreviewName;
    }

    const textInput = document.getElementById('userShowName');
     function getVal() {
      const UserPreviewName = textInput.value;
      setUserPreviewName(UserPreviewName);
    };
    
function setUserName(UserName) {
  localStorage.setItem('UserName', UserName);
  document.getElementById('user-Name').value = UserName;
  document.getElementById('calWRP').innerHTML = UserName;
  document.getElementById('UserNameM').innerHTML = UserName;
  document.getElementById('LockUserNameM').innerHTML = UserName;
  }

const savedUserName = localStorage.getItem('UserName');
if (savedUserName) {
document.getElementById('user-Name').value = savedUserName;
document.getElementById('calWRP').innerHTML = savedUserName;
document.getElementById('UserNameM').innerHTML = savedUserName;
document.getElementById('LockUserNameM').innerHTML = savedUserName;
}

const textInput2 = document.getElementById('user-Name');
function getVal2() {
const UserName = textInput2.value;
setUserName(UserName);
};

function setUserBio(UserBio) {
  localStorage.setItem('UserBio', UserBio);
  document.getElementById('userBio').value = UserBio;
  document.getElementById('BioAccountpanel').innerHTML = UserBio;
  }

const savedUserBio = localStorage.getItem('UserBio');
if (savedUserBio) {
document.getElementById('userBio').value = savedUserBio;
document.getElementById('BioAccountpanel').innerHTML = savedUserBio;
}

const textInput3 = document.getElementById('userBio');
function getVal3() {
const UserName = textInput3.value;
setUserBio(UserName);
};
    
// Desktop on click
window.onclick = function(event) {
    if (event.target == document.getElementById("desktopIconsPc") || event.target == document.getElementById("Desktop")) {
        actionbarDown();
    }
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

document.getElementById('greetingsM').innerHTML ='<b>' + greet2 + ',  ' + '</b>';

  
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

console.log("%cRipen OS Official v4.0, is an opens-sourced project developed by the RGOS team. If you wish to help out with this project, visit https://github.com/ripenos/ripenos.github.io", "color: rgb(255, 123, 0); font-size: x-large")

function closeWelcome(){
    document.getElementById("welcome-page").style.transform = "translate(-50%, -50%) scale(0)";
    setTimeout(() => {document.getElementById("welcome-page").style.display = "none";}, 500);
}

document.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    closeWelcome();
  }
});

const popup = document.querySelector(".wifiPopup"),
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
    document.getElementById('Desktop').style.scale = '0.9';
    document.getElementById('Desktop').style.top = '27.5%';
    document.getElementById('Desktop').style.borderRadius = '15px';
    document.getElementById('Desktop').style.pointerEvents = 'none';
    document.getElementById('Desktop').style.boxShadow = '0px 0px 50px black ';
    document.getElementById('Desktop').style.border = '1px solid #777777';
    ripebar.style.bottom= "-45px";
    document.body.getElementsByClassName("ripebarMobile")[0].style.bottom= "-55px";
    dockbar.style.bottom= "-45px";
    Feedbar.style.bottom= "-45px";
    document.getElementById('bgM').style.boxShadow = '0px 0px 200px black inset'
    document.getElementById('bgM').style.filter= "blur(35px) brightness(50%) saturate(175%)";
    actionbarDown();
    setTimeout(() => {
      document.getElementById('Desktop').style.top = '25%';
        document.getElementById('deskEdit').style.opacity = '1';
        document.getElementById('deskEdit').style.pointerEvents = 'all';
        document.getElementById('recentsClose').style.opacity = '1';
        document.getElementById('recentsClose').style.pointerEvents = 'all';
    }, 400);

    return false;
  }

  function ExitDesktopEdit(){
    document.getElementById('Desktop').style.top = '27.5%';
    document.getElementById('deskEdit').style.opacity = '0';
    document.getElementById('deskEdit').style.pointerEvents = 'none';
    document.getElementById('pg').style.left = '-25%'
    
    document.getElementById('recentsClose').style.opacity = '0';
    document.getElementById('recentsClose').style.pointerEvents = 'none';
    setTimeout(() => {
      document.getElementById('Desktop').style.top = '0';
        document.getElementById('Desktop').style.scale = '1';
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

   function ShowSecurity(){
    actionbarDown();
    document.getElementById('myUserSecurity').style.display = 'block'
   setTimeout(() => {
    document.getElementById('myUserSecurity').style.transform = 'translate(-50%, -50%) scale(1)'
    document.getElementById('myUserSecurity').style.opacity = '1'
   }, 1);
  }

  function closeSecurity(){
    document.getElementById('myUserSecurity').style.transform = 'translate(-50%, -50%) scale(0)'
    document.getElementById('myUserSecurity').style.opacity = '0'
   setTimeout(() => {
    document.getElementById('myUserSecurity').style.display = 'none'
    document.getElementById('mySignInForUserSecurityPanel').style.display = "block"
        document.getElementById('myUserSecurityContentMain').classList.add('UserSecurityContentBlur')
        document.getElementById('passkeyLPara').innerHTML = "To verify, Please enter your password"
        
   }, 300);  
  }
  
  const pwIn = document.getElementById('pwIn');
  function validatePw() {
  const pw = pwIn.value;
  setPw(pw);
  closeSecurity();
  document.getElementById('mySignInForUserSecurityPanel').style.display = "block"
  document.getElementById('myUserSecurityContentMain').classList.add('UserSecurityContentBlur')
  document.getElementById('passkeyLPara').innerHTML = "To verify, Please enter your password:"
  document.getElementById('CaptchaForPw').style.display = 'none'
  generateCaptcha()
  };

  function LoginIntoSecPanel(){
    if(document.getElementById('pwInLP').value == Spw && document.getElementById('pwInLP').value !== ""){
      document.getElementById('passkeyLPara').innerHTML = "Verified"
      setTimeout(() => {
        document.getElementById('mySignInForUserSecurityPanel').style.display = "none"
        document.getElementById('myUserSecurityContentMain').classList.remove('UserSecurityContentBlur')
        document.getElementById('pwInLP').value = ""
      }, 300);
    }
    else{
      document.getElementById('passkeyLPara').innerHTML = "not verified..try again:"
      document.getElementById('pwInLP').value = ""
    }
  }

  function tempLockShow(){
    document.getElementById("tempLockScreen").style.display= "block";
    setTimeout(() => {document.getElementById("tempLockScreen").style.opacity= "1";}, 300);

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
    var x3 = document.getElementById("pwInLP");
    if (x3.type === "password") {
      x3.type = "text";
      document.getElementById('pwVisIn').innerHTML = "visibility_off"
    } else {
      x3.type = "password";
      document.getElementById('pwVisIn').innerHTML = "visibility"
    }
    var x4 = document.getElementById("pwIn");
    if (x4.type === "password") {
      x4.type = "text";
      document.getElementById('pwVisInUns').innerHTML = "visibility_off"
    } else {
      x4.type = "password";
      document.getElementById('pwVisInUns').innerHTML = "visibility"
    }
    
  }
function ExitTempLock(){
  if(document.getElementById('pwInLR1L').value == Spw && document.getElementById('pwInLR1L').value !== ""){
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
function ExitTempHide(){
  document.getElementById("tempLockScreen").style.opacity= "0";
  setTimeout(() => {document.getElementById("tempLockScreen").style.display= "none";}, 300);
}

// Selecting necessary DOM elements
const captchaTextBox = document.querySelector(".captch_box input");
const refreshButton = document.querySelector(".refresh_button");
const captchaInputBox = document.querySelector(".captch_input input");
const message = document.querySelector(".message");
const submitButton = document.querySelector(".button");

// Variable to store generated captcha
let captchaText = null;

// Function to generate captcha
const generateCaptcha = () => {
  const randomString = Math.random().toString(36).substring(2, 7);
  const randomStringArray = randomString.split("");
  const changeString = randomStringArray.map((char) => (Math.random() > 0.5 ? char.toUpperCase() : char));
  captchaText = changeString.join("   ");
  captchaTextBox.value = captchaText;
};

const refreshBtnClick = () => {
  generateCaptcha();
  captchaInputBox.value = "";
  captchaKeyUpValidate();
};

const captchaKeyUpValidate = () => {
  //Toggle submit button disable class based on captcha input field.
  submitButton.classList.toggle("disabled", !captchaInputBox.value);

  if (!captchaInputBox.value) message.classList.remove("active");
};

// Function to validate the entered captcha
const submitBtnClick = () => {
  captchaText = captchaText
    .split("")
    .filter((char) => char !== " ")
    .join("");
  message.classList.add("active");
  // Check if the entered captcha text is correct or not
  if (captchaInputBox.value === captchaText) {
    message.innerText = "Entered captcha is correct";
    message.style.color = "var(--accent-color)";
    setTimeout(() => {
      validatePw();
    }, 1500);
  } else {
    message.innerText = "Entered captcha is incorrect";
    message.style.color = "#FF2525";
    captchaInputBox.value = "";
  }
};

// Add event listeners for the refresh button, captchaInputBox, submit button
refreshButton.addEventListener("click", refreshBtnClick);
captchaInputBox.addEventListener("keyup", captchaKeyUpValidate);
submitButton.addEventListener("click", submitBtnClick);

// Generate a captcha when the page loads
generateCaptcha();

document.addEventListener("DOMContentLoaded", function () {
  // Function to set the values of event1 and event2
  function setEventValues() {
      const storedEvents = localStorage.getItem('events');
      const eventsArray = storedEvents ? JSON.parse(storedEvents) : [];

      document.getElementById('event1').value = eventsArray[0] || '';
      document.getElementById('event2').value = eventsArray[1] || '';
  }

  setEventValues();

  window.addEventListener('storage', function (e) {
      if (e.key === 'events') {
          setEventValues();
      }
  });
});

var divClasses = Array.from({length: 90}, (_, i) => `.div${i + 1}`);

// Function to retrieve a range of CSS class names
function getClassRange(startIndex, endIndex) {
    // Adjust the indices to match array index (0-based)
    startIndex--;
    endIndex--;

    // Extract the specified range from the array
    var range = divClasses.slice(startIndex, endIndex + 1);

    // Return the range
    return range;
}

function allowDrop(ev) {
  ev.preventDefault();
  divClasses.forEach(function(className) {
    // Select the elements with the current class name
    var elements = document.querySelectorAll(className);
    // Loop through each selected element and remove the "deskIconDropActive" class
    elements.forEach(function(element) {
        element.classList.add('deskIconDropActive');
    });
  });
  document.getElementById('DesktopWidgetsMain').style.opacity  = "0"
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

function dragR(){
  divClasses.forEach(function(className) {
    // Select the elements with the current class name
    var elements = document.querySelectorAll(className);
    // Loop through each selected element and remove the "deskIconDropActive" class
    elements.forEach(function(element) {
        element.classList.remove('deskIconDropActive');
    });
  });
  document.getElementById('DesktopWidgetsMain').style.opacity  = "1"
}