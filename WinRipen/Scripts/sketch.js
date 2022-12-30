let startbutton = document.getElementsByClassName("startbutton")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]
let startmenuM = document.getElementsByClassName("startmenuM")[0]

let tabb = document.getElementsByClassName("tabbutton")[0]
let tabmenu = document.getElementsByClassName("tabmenu")[0]
let tabview = document.getElementsByClassName("tabview")[0]
let desktops = document.getElementsByClassName("desktops")[0]

let SeF = document.getElementById("seF")
let NSeF = document.getElementById("nonSeF")

let SeB = document.getElementById("seB")
let NSeB = document.getElementById("nonSeB")

let action = document.getElementsByClassName("actionbutton")[0]
let actionmenu = document.getElementsByClassName("actionmenu")[0]
let action2 = document.getElementsByClassName("actionbutton2")[0]
let actionmenu2 = document.getElementsByClassName("actionmenu2")[0]
let action3 = document.getElementsByClassName("actionbutton3")[0]
let actionmenu3 = document.getElementsByClassName("actionmenu3")[0]
let actionmenu5 = document.getElementsByClassName("wrapper")[0]
let action5 = document.getElementsByClassName("Calbtn")[0]

let se = document.getElementById("Se")
let  NSe = document.getElementById("nonSe")
let Set = document.getElementById("set")
let NSet = document.getElementById("nonSet")

let files = document.getElementsByClassName("FIlesbutton")[0]
let FIlesmodal = document.getElementsByClassName("FileExplr")[0]
let FHid = document.getElementsByClassName("HiddenF")[0]
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("MaxBar")[0];
var span4 = document.getElementsByClassName("MinBar")[0];

let Edge = document.getElementsByClassName("Edgebutton")[0]
let Edgemodal = document.getElementsByClassName("Browser")[0]
let BHid = document.getElementsByClassName("HiddenB")[0]
var span5 = document.getElementsByClassName("close3")[0];
var span6 = document.getElementsByClassName("MaxBar2")[0];
var span7 = document.getElementsByClassName("MinBar2")[0];

let Paintmodal = document.getElementsByClassName("Paint")[0]
let PHid = document.getElementsByClassName("HiddenP")[0]
var span8 = document.getElementsByClassName("close4")[0];
var span9 = document.getElementsByClassName("MaxBar3")[0];
var span10 = document.getElementsByClassName("MinBar3")[0];


let SeA = document.getElementById("seA")
let NSeA = document.getElementById("nonSeA")

let SeA2 = document.getElementById("seA2")
let NSeA2 = document.getElementById("nonSeA2")

let SeA3 = document.getElementById("seA3")
let NSeA3 = document.getElementById("nonSeA3")

let SeA4 = document.getElementById("seA4")
let NSeA4 = document.getElementById("nonSeA4")
function ShowDs(){
    setTimeout(() => {
        document.getElementById("myblank").style.visibility = 'hidden';
        document.getElementById("myblank").style.opacity = '0';
    }, 750);
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
    document.getElementById('txtdty').innerHTML =  dt + '/' + dToday.getMonth() + '/' + dToday.getFullYear();
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
if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
return i;
}

function StartDateH(){
const dToday2 = new Date();
let dt2 = dToday2.getDate();

var myDate2 = new Date();
var myDate2M = new Date();

var myDay2 = myDate2.getDay();
var myMonth2 = myDate2M.getMonth();


// Array of days.
var weekday2 = ['Sunday', 'Monday', 'Tuesday',
'Wednesday', 'Thursday', 'Friday', 'Saturday'
];

// Array of Months.
var Months2 = ['January', 'February', 'March',
'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
];

document.getElementById('txtdtyH').innerHTML = weekday2[myDay2] + ', ' + Months2[myMonth2] + ' ' + dt2;
setTimeout(startTimeH, 1000);
}

function mouseDown() {
	document.getElementById("myStartBtn").style.scale = "0.75";
}
  
  function mouseUp() {
	document.getElementById("myStartBtn").style.scale = "1";
  }

  function mouseDown2() {
	document.getElementById("SearchInput2").style.scale = "0.75";
  }
  
  function mouseUp2() {
	document.getElementById("SearchInput2").style.scale = "1";
  }

  function mouseDown3() {
	document.getElementById("myTabBtn").style.scale = "0.75";
  }
  
  function mouseUp3() {
	document.getElementById("myTabBtn").style.scale = "1";
  }

  function mouseDown4() {
	document.getElementById("myP4").style.scale = "0.75";
  }
  
  function mouseUp4() {
	document.getElementById("myP4").style.scale = "1";
  }

  function mouseDown5() {
	document.getElementById("myP5").style.scale = "0.75";
  }
  
  function mouseUp5() {
	document.getElementById("myP5").style.scale = "1";
  }

  function mouseDown6() {
	document.getElementById("myP6").style.scale = "0.75";
  }
  
  function mouseUp6() {
	document.getElementById("myP6").style.scale = "1";
  }

  function mouseDown7() {
	document.getElementById("myP7").style.scale = "0.75";
  }
  
  function mouseUp7() {
	document.getElementById("myP7").style.scale = "1";
  }

  function mouseDown8() {
	document.getElementById("myP8").style.scale = "0.75";
  }
  
  function mouseUp8() {
	document.getElementById("myP8").style.scale = "1";
  }

  function mouseDown9() {
	document.getElementById("myP9").style.scale = "0.75";
  }
  
  function mouseUp9() {
	document.getElementById("myP9").style.scale = "1";
  }

  function mouseDown10() {
	document.getElementById("myP10").style.scale = "0.75";
  }
  
  function mouseUp10() {
	document.getElementById("myP10").style.scale = "1";
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

  startbutton.addEventListener("click", ()=>{
	if(startmenu.style.bottom == "75px" || startmenuM.style.bottom == "65px"){
        startmenu.style.bottom = "-665px";
        startmenu.style.visibility = "hidden";
        startmenu.style.opacity = "0";

        startmenuM.style.bottom = "-665px";
        startmenuM.style.visibility = "hidden";
        startmenuM.style.opacity = "0";

        se.style.display = "none";
		NSe.style.display = "block";

	}
	else{
        se.style.display = "block";
		NSe.style.display = "none";
        set.style.display = "none";
		NSet.style.display = "block";

        startmenu.style.bottom = "75px";
        startmenu.style.visibility = "visible";
        startmenu.style.opacity = "100%";

        startmenuM.style.bottom = "65px";
        startmenuM.style.visibility = "visible";
        startmenuM.style.opacity = "100%";

        tabmenu.style.bottom = "-655px"
		tabview.style.display = "none";
		desktops.style.display = "none";
    }
})

function getVal() {
    const val = document.getElementById('SearchInput').value;
    window.open("https://www.google.com/search?q=" + val, '_blank');
}

var SearchVal = document.getElementById("SearchInput");

SearchVal.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        validate(e);
    }
});

function validate(e) {
    window.open("https://www.google.com/search?q=" + SearchVal.value, '_blank');
}

//tab menu
tabb.addEventListener("click", ()=>{
	if(tabmenu.style.bottom == "50px"){
        tabmenu.style.bottom = "-665px";
        tabmenu.style.visibility = "hidden";
        tabmenu.style.opacity = "0";

        set.style.display = "none";
		NSet.style.display = "block";

		tabview.style.display = "none";
		desktops.style.display = "none";

	}
	else{
        tabmenu.style.bottom = "50px";
        tabmenu.style.visibility = "visible";
        tabmenu.style.opacity = "100%";

        set.style.display = "block";
		NSet.style.display = "none";
		se.style.display = "none";
		NSe.style.display = "block";

		tabview.style.display = "block";
		desktops.style.display = "block";

        startmenu.style.bottom = "-665px";
        startmenu.style.visibility = "hidden";
        startmenu.style.opacity = "0";

        startmenuM.style.bottom = "-665px";
        startmenuM.style.visibility = "hidden";
        startmenuM.style.opacity = "0";
	}
})



function cBgRWaves(){
  document.body.style.backgroundImage = "url('https://pbs.twimg.com/media/FUrfhkyXsAwgIof?format=jpg&name=4096x4096')";
  document.getElementById("dstp1Img").src="https://pbs.twimg.com/media/FUrfhkyXsAwgIof?format=jpg&name=4096x4096";
}

function cBgBloom(){
  document.body.style.backgroundImage = "url('https://wallpaperaccess.com/full/6233787.jpg')";
  document.getElementById("dstp1Img").src="https://wallpaperaccess.com/full/6233787.jpg";
}

function cBgMon(){
  document.body.style.backgroundImage = "url('https://uhdwallpapers.org/uploads/converted/21/06/11/macos-monterey-1680x1050_897687-mm-90.jpg')";
  document.getElementById("dstp1Img").src="https://uhdwallpapers.org/uploads/converted/21/06/11/macos-monterey-1680x1050_897687-mm-90.jpg";
}

function cBgBls(){
  document.body.style.backgroundImage = "url('https://www.hdwallpapers.in/download/windows_xp_bliss-wide.jpg')";
  document.getElementById("dstp1Img").src="https://www.hdwallpapers.in/download/windows_xp_bliss-wide.jpg";
}

function cBgNS(){
  document.body.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/bee6c9a9-78f2-4294-ad27-6ca52060f5a5/dc6du5w-92b68c4d-c41c-44f2-9cdf-38ca4d895c99.jpg')";
  document.getElementById("dstp1Img").src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/bee6c9a9-78f2-4294-ad27-6ca52060f5a5/dc6du5w-92b68c4d-c41c-44f2-9cdf-38ca4d895c99.jpg";
}

function cBgFW(){
  document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/d8/16/94/d81694d202eb63f975af5b6b0d8e37ac.png')";
  document.getElementById("dstp1Img").src="https://i.pinimg.com/originals/d8/16/94/d81694d202eb63f975af5b6b0d8e37ac.png";
}

function cBgDN(){
  document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/0c/fd/74/0cfd744b2ef587ddb7aca744cbb3069d.jpg')";
  document.getElementById("dstp1Img").src="https://i.pinimg.com/originals/0c/fd/74/0cfd744b2ef587ddb7aca744cbb3069d.jpg";
}

function cBgAA(){
  document.body.style.backgroundImage = "url('Assets/4k_cool_2020_art_4k_hd-3840x2160.jpg')";
  document.getElementById("dstp1Img").src="Assets/4k_cool_2020_art_4k_hd-3840x2160.jpg";
}



function cbarHover() {
  document.getElementsByClassName("CLoseBar")[0].style.scale = "1.1"
  document.getElementsByClassName("CLoseBar")[0].style.boxShadow = "0px 0px 7.5px rgba(37, 37, 37, 0.65)"
  document.getElementsByClassName("CLoseBar2")[0].style.scale = "1.1"
  document.getElementsByClassName("CLoseBar2")[0].style.boxShadow = "0px 0px 7.5px rgba(37, 37, 37, 0.65)"
  document.getElementsByClassName("CLoseBar3")[0].style.scale = "1.1"
  document.getElementsByClassName("CLoseBar3")[0].style.boxShadow = "0px 0px 7.5px rgba(37, 37, 37, 0.65)"
}

function cbarHoverL() {
  document.getElementsByClassName("CLoseBar")[0].style.scale = "1"
  document.getElementsByClassName("CLoseBar")[0].style.boxShadow = "none"
  document.getElementsByClassName("CLoseBar2")[0].style.scale = "1"
  document.getElementsByClassName("CLoseBar2")[0].style.boxShadow = "none"
  document.getElementsByClassName("CLoseBar3")[0].style.scale = "1"
  document.getElementsByClassName("CLoseBar3")[0].style.boxShadow = "none"
}

function MxbarHover() {
  document.getElementsByClassName("MaxBar")[0].style.backgroundColor = "orange"
  document.getElementsByClassName("MaxBar")[0].style.scale = "1.1"
  document.getElementsByClassName("MaxBar")[0].style.boxShadow = "0px 0px 7.5px rgba(37, 37, 37, 0.65)"
  document.getElementsByClassName("MaxBar2")[0].style.backgroundColor = "orange"
  document.getElementsByClassName("MaxBar2")[0].style.scale = "1.1"
  document.getElementsByClassName("MaxBar2")[0].style.boxShadow = "0px 0px 7.5px rgba(37, 37, 37, 0.65)"
  document.getElementsByClassName("MaxBar3")[0].style.backgroundColor = "orange"
  document.getElementsByClassName("MaxBar3")[0].style.scale = "1.1"
  document.getElementsByClassName("MaxBar3")[0].style.boxShadow = "0px 0px 7.5px rgba(37, 37, 37, 0.65)"
}

function MxbarHoverL() {
  document.getElementsByClassName("MaxBar")[0].style.backgroundColor = "rgba(100, 100, 100, 0.85)"
  document.getElementsByClassName("MaxBar")[0].style.scale = "1"
  document.getElementsByClassName("MaxBar")[0].style.boxShadow = "none"
  document.getElementsByClassName("MaxBar2")[0].style.backgroundColor = "rgba(100, 100, 100, 0.85)"
  document.getElementsByClassName("MaxBar2")[0].style.scale = "1"
  document.getElementsByClassName("MaxBar2")[0].style.boxShadow = "none"
  document.getElementsByClassName("MaxBar3")[0].style.backgroundColor = "rgba(100, 100, 100, 0.85)"
  document.getElementsByClassName("MaxBar3")[0].style.scale = "1"
  document.getElementsByClassName("MaxBar3")[0].style.boxShadow = "none"
}

function MnbarHover() {
  document.getElementsByClassName("MinBar")[0].style.backgroundColor = "rgb(0, 255, 0)"
  document.getElementsByClassName("MinBar")[0].style.scale = "1.1"
  document.getElementsByClassName("MinBar")[0].style.boxShadow = "0px 0px 7.5px rgba(37, 37, 37, 0.65)"
  document.getElementsByClassName("MinBar2")[0].style.backgroundColor = "rgb(0, 255, 0)"
  document.getElementsByClassName("MinBar2")[0].style.scale = "1.1"
  document.getElementsByClassName("MinBar2")[0].style.boxShadow = "0px 0px 7.5px rgba(37, 37, 37, 0.65)"
  document.getElementsByClassName("MinBar3")[0].style.backgroundColor = "rgb(0, 255, 0)"
  document.getElementsByClassName("MinBar3")[0].style.scale = "1.1"
  document.getElementsByClassName("MinBar3")[0].style.boxShadow = "0px 0px 7.5px rgba(37, 37, 37, 0.65)"
}

function MnbarHoverL() {
  document.getElementsByClassName("MinBar")[0].style.backgroundColor = "rgba(100, 100, 100, 0.85)"
  document.getElementsByClassName("MinBar")[0].style.scale = "1"
  document.getElementsByClassName("MinBar")[0].style.boxShadow = "none"
  document.getElementsByClassName("MinBar2")[0].style.backgroundColor = "rgba(100, 100, 100, 0.85)"
  document.getElementsByClassName("MinBar2")[0].style.scale = "1"
  document.getElementsByClassName("MinBar2")[0].style.boxShadow = "none"
  document.getElementsByClassName("MinBar3")[0].style.backgroundColor = "rgba(100, 100, 100, 0.85)"
  document.getElementsByClassName("MinBar3")[0].style.scale = "1"
  document.getElementsByClassName("MinBar3")[0].style.boxShadow = "none"
}


//action menu 
action.addEventListener("click", ()=>{
	if(actionmenu.style.bottom == "65px"){
    actionmenu.style.bottom = "-665px";
    actionmenu.style.visibility = "hidden";
    actionmenu.style.opacity = "0";

		SeA.style.display = "none";
		NSeA.style.display = "block";

	}
	else{

    actionmenu.style.bottom = "65px";
    actionmenu.style.visibility = "visible";
    actionmenu.style.opacity = "100%";

    actionmenu2.style.bottom = "-665px";
    actionmenu2.style.visibility = "hidden";
    actionmenu2.style.opacity = "0";
    actionmenu3.style.bottom = "-665px";
    actionmenu3.style.visibility = "hidden";
    actionmenu3.style.opacity = "0";
    actionmenu5.style.bottom = "-665px";
    actionmenu5.style.visibility = "hidden";
    actionmenu5.style.opacity = "0";

		tabmenu.style.bottom = "-655px"
		tabview.style.display = "none";
		desktops.style.display = "none";
		actionmenu.style.opacity = "1"

		se.style.display = "none";
		NSe.style.display = "block";

		set.style.display = "none";
		NSet.style.display = "block";
		SeA.style.display = "block";
		NSeA.style.display = "none";
		SeA2.style.display = "none";
		NSeA2.style.display = "block";
		SeA3.style.display = "none";
		NSeA3.style.display = "block";
		SeA4.style.display = "none";
		NSeA4.style.display = "block";	
	}
})

action2.addEventListener("click", ()=>{
	if(actionmenu2.style.bottom == "65px"){
    actionmenu2.style.bottom = "-665px";
    actionmenu2.style.visibility = "hidden";
    actionmenu2.style.opacity = "0";

		SeA2.style.display = "none";
		NSeA2.style.display = "block";

	}
	else{
    actionmenu2.style.bottom = "65px";
    actionmenu2.style.visibility = "visible";
    actionmenu2.style.opacity = "100%";

    actionmenu.style.bottom = "-665px";
    actionmenu.style.visibility = "hidden";
    actionmenu.style.opacity = "0";
    actionmenu3.style.bottom = "-665px";
    actionmenu3.style.visibility = "hidden";
    actionmenu3.style.opacity = "0";
    actionmenu5.style.bottom = "-665px";
    actionmenu5.style.visibility = "hidden";
    actionmenu5.style.opacity = "0";


		tabmenu.style.bottom = "-655px"
		tabview.style.display = "none";
		desktops.style.display = "none";

		se.style.display = "none";
		NSe.style.display = "block";

		set.style.display = "none";
		NSet.style.display = "block";
		SeA2.style.display = "block";
		NSeA2.style.display = "none";
		SeA.style.display = "none";
		NSeA.style.display = "block";
		SeA3.style.display = "none";
		NSeA3.style.display = "block";
		SeA4.style.display = "none";
		NSeA4.style.display = "block";	
	}
})

action3.addEventListener("click", ()=>{
	if(actionmenu3.style.bottom == "65px"){
    actionmenu3.style.bottom = "-665px";
    actionmenu3.style.visibility = "hidden";
    actionmenu3.style.opacity = "0";

		SeA3.style.display = "none";
		NSeA3.style.display = "block";

	}
	else{
    actionmenu3.style.bottom = "65px";
    actionmenu3.style.visibility = "visible";
    actionmenu3.style.opacity = "100%";

    actionmenu.style.bottom = "-665px";
    actionmenu.style.visibility = "hidden";
    actionmenu.style.opacity = "0";
    actionmenu2.style.bottom = "-665px";
    actionmenu2.style.visibility = "hidden";
    actionmenu2.style.opacity = "0";
    actionmenu5.style.bottom = "-665px";
    actionmenu5.style.visibility = "hidden";
    actionmenu5.style.opacity = "0";


		tabmenu.style.bottom = "-655px"
		tabview.style.display = "none";
		desktops.style.display = "none";

		se.style.display = "none";
		NSe.style.display = "block";

		set.style.display = "none";
		NSet.style.display = "block";
		SeA3.style.display = "block";
		NSeA3.style.display = "none";
		SeA2.style.display = "none";
		NSeA2.style.display = "block";
		SeA.style.display = "none";
		NSeA.style.display = "block";
		SeA4.style.display = "none";
		NSeA4.style.display = "block";	
	}
})

function calendarSH(){
  if(actionmenu5.style.bottom == "65px"){
    actionmenu5.style.bottom = "-665px";
    actionmenu5.style.visibility = "hidden";
    actionmenu5.style.opacity = "0";


  }
  else{
    actionmenu5.style.bottom = "65px";
    actionmenu5.style.visibility = "visible";
    actionmenu5.style.opacity = "100%";

    actionmenu.style.bottom = "-665px";
    actionmenu.style.visibility = "hidden";
    actionmenu.style.opacity = "0";
    actionmenu2.style.bottom = "-665px";
    actionmenu2.style.visibility = "hidden";
    actionmenu2.style.opacity = "0";
    actionmenu3.style.bottom = "-665px";
    actionmenu3.style.visibility = "hidden";
    actionmenu3.style.opacity = "0";

    tabmenu.style.bottom = "-655px"
    tabview.style.display = "none";
    desktops.style.display = "none";
    actionmenu5.style.opacity = "1"
  }

}

const contextMenu = document.getElementById("context-menu");
const scope = document.querySelector("body");
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
 
      const daysTag = document.querySelector(".days"),
      currentDate = document.querySelector(".current-date"),
      prevNextIcon = document.querySelectorAll(".icons span");
      
      // getting new date, current year and month
      let date = new Date(),
      currYear = date.getFullYear(),
      currMonth = date.getMonth();
      
      // storing full name of all months in array
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


  
function FileExplr(){
	if(FIlesmodal.style.transform == "translate(-50%, -50%) scale(1)"){
		FIlesmodal.style.transform = "translate(-50%, -50%) scale(0.5)";
		FIlesmodal.style.opacity = "0";
		FIlesmodal.style.top = "100%";
		FHid.style.display = "block";
		SeF.style.display = "none";
		NSeF.style.display = "block";
	}
	else{
		FIlesmodal.style.transform = "translate(-50%, -50%) scale(1)";
		FIlesmodal.style.animation = "fadeEffect3 1s";
    FIlesmodal.style.opacity = "1";
		FIlesmodal.style.top = "50%";
		FHid.style.display = "none";
		startmenu.style.bottom = "-655px";
		se.style.display = "none";
		NSe.style.display = "block";
		SeF.style.display = "block";
		NSeF.style.display = "none";

		span2.onclick = function() {
			FIlesmodal.style.transform = "translate(-50%, -50%) scale(0.5)";
      FIlesmodal.style.animation = "fadeEffect3 1s";
			FIlesmodal.style.opacity = "0";
			FIlesmodal.style.top = "50%";
			FHid.style.display = "none";

			SeF.style.display = "none";
			NSeF.style.display = "block";
		}

		span3.onclick = function() {
			if (FIlesmodal.style.width == "80%"){
				FIlesmodal.style.transform = "translate(-50%, -50%)";
				FIlesmodal.style.width = "100%";
				FIlesmodal.style.borderRadius = "0";
				FIlesmodal.style.height = "100%"
			}
			else {
				FIlesmodal.style.width = "80%";
				FIlesmodal.style.borderRadius = "8px";
				FIlesmodal.style.height = "80%"

			}
		}

		span4.onclick = function() {
			FIlesmodal.style.transform = "translate(-50%, -50%) scale(0.5)";
			FIlesmodal.style.opacity = "0";
			FIlesmodal.style.top = "100%";
			FHid.style.display = "block";
			SeF.style.display = "none";
			NSeF.style.display = "block";
		}
	}
}

function EdgeB(){
	if(Edgemodal.style.transform == "translate(-50%, -50%) scale(1)"){
		Edgemodal.style.transform = "translate(-50%, -50%) scale(0.5)";
		Edgemodal.style.opacity = "0";
		Edgemodal.style.top = "100%";
		BHid.style.display = "block";
		SeB.style.display = "none";
		NSeB.style.display = "block";
	}
	else{
		Edgemodal.style.transform = "translate(-50%, -50%) scale(1)";
   Edgemodal.style.animation = "fadeEffect3 1s";

		Edgemodal.style.opacity = "1";
		Edgemodal.style.top = "50%";
		BHid.style.display = "none";
		startmenu.style.bottom = "-655px";
		se.style.display = "none";
		NSe.style.display = "block";
		SeB.style.display = "block";
		NSeB.style.display = "none";

		span5.onclick = function() {
			Edgemodal.style.transform = "translate(-50%, -50%) scale(0.5)";
			Edgemodal.style.opacity = "0";
			Edgemodal.style.top = "50%";
			BHid.style.display = "none";

			SeB.style.display = "none";
			NSeB.style.display = "block";
		}

		span6.onclick = function() {
			if (Edgemodal.style.width == "80%"){
				Edgemodal.style.transform = "translate(-50%, -50%)";
				Edgemodal.style.width = "100%";
				Edgemodal.style.borderRadius = "0";
				Edgemodal.style.height = "100%"
			}
			else {
				Edgemodal.style.width = "80%";
				Edgemodal.style.borderRadius = "8px";
				Edgemodal.style.height = "80%"

			}
		}

		span7.onclick = function() {
			Edgemodal.style.transform = "translate(-50%, -50%) scale(0.5)";
			Edgemodal.style.opacity = "0";
			Edgemodal.style.top = "100%";
			BHid.style.display = "block";
			SeB.style.display = "none";
			NSeB.style.display = "block";
		}
	}
}



function disp_prompt()
{
var sitename = document.getElementById("adrsbr")
document.getElementById("msg").src = "https://" + sitename.value;

sitename.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        validate(e);
    }
});

function validate(e) {
	document.getElementById("msg").src = "https://" + sitename.value;
}

}

function opacityM() {
	document.getElementById("msg").src = "https://www.bing.com/search?q=" + document.getElementById("adrsbr").value;

}

function Paint(){
	if(Paintmodal.style.transform == "translate(-50%, -50%) scale(1)"){
		Paintmodal.style.transform = "translate(-50%, -50%) scale(0.5)";
		Paintmodal.style.opacity = "0";
		Paintmodal.style.top = "100%";
		PHid.style.display = "block";

	}
	else{
		Paintmodal.style.transform = "translate(-50%, -50%) scale(1)";
    Paintmodal.style.animation = "fadeEffect3 1s";
		Paintmodal.style.opacity = "1";
		Paintmodal.style.top = "50%";
		startmenu.style.bottom = "-655px";
		se.style.display = "none";
		NSe.style.display = "block";
		PHid.style.display = "none";


		span8.onclick = function() {
			Paintmodal.style.transform = "translate(-50%, -50%) scale(0.5)";
			Paintmodal.style.opacity = "0";
			Paintmodal.style.top = "50%";
		}

		span9.onclick = function() {
			if (Paintmodal.style.width == "87.5%"){
				Paintmodal.style.transform = "translate(-50%, -50%)";
				Paintmodal.style.width = "100%";
				Paintmodal.style.borderRadius = "0";
				Paintmodal.style.height = "100%"
			}
			else {
				Paintmodal.style.transform = "translate(-50%, -52%)";
				Paintmodal.style.width = "87.5%";
				Paintmodal.style.borderRadius = "8px";
				Paintmodal.style.height = "80%"

			}
		}

		span10.onclick = function() {
			Paintmodal.style.transform = "translate(-50%, -50%) scale(0.5)";
			Paintmodal.style.opacity = "0";
			Paintmodal.style.top = "100%";
			PHid.style.display = "block";

		}
	}
}

function theme() {
  var element1 = document.getElementById("mytaskbar");
  var element2 = document.getElementById("themeS");
  var element3 = document.getElementById("themeCM");
  var element4 = document.getElementById("themeV");
  var element5 = document.getElementById("themeWifi");
  var element6 = document.getElementById("themeB");
  var element7 = document.getElementById("themeCl");
  var element8 = document.getElementById("themeSA");
  var element9 = document.getElementsByClassName("desktops")[0];

  element1.classList.toggle("taskbarLight");
  element2.classList.toggle("lighttheme");
  element3.classList.toggle("lighttheme");
  element4.classList.toggle("lighttheme");
  element5.classList.toggle("lighttheme");
  element6.classList.toggle("lighttheme");
  element7.classList.toggle("lighttheme");
  element8.classList.toggle("lightthemeComp");
  element9.classList.toggle("desktopsL");

  var comp1  = document.getElementsByClassName("StartPinned")[0];
  var comp2  = document.getElementsByClassName("StartPinnedApps")[0];
  var comp3  = document.getElementsByClassName("StartPinnedA")[0];
  var comp4  = document.getElementsByClassName("StartPinnedW")[0];
  var comp5  = document.getElementsByClassName("StartPinnedW2")[0];
  var comp6  = document.getElementsByClassName("StartPinnedW3")[0];
  var comp7 = document.getElementById("Recommended");
  var comp8 = document.getElementById("a1");
  var comp9 = document.getElementById("a2");
  var comp10 = document.getElementById("a3");
  var comp11 = document.getElementById("a4");
  var comp12 = document.getElementById("a5");
  var comp13 = document.getElementById("a6");
  var comp14 = document.getElementById("a7");
  var comp15 = document.getElementById("r1");
  var comp16 = document.getElementById("r2");
  var comp17 = document.getElementsByClassName("searchS")[0]
  var comp18 = document.getElementsByClassName("SearchQ")[0]
  var comp19 = document.getElementsByClassName("MoreBtn")[0]

  comp1.classList.toggle("StartPinnedL");
  comp2.classList.toggle("StartPinnedAppsL");
  comp3.classList.toggle("StartPinnedAL");
  comp4.classList.toggle("StartPinnedWL");
  comp5.classList.toggle("StartPinnedW2L");
  comp6.classList.toggle("StartPinnedW3L");
  comp7.classList.toggle("StartPinnedL");
  comp8.classList.toggle("StartPinnedAppsL");
  comp9.classList.toggle("StartPinnedAppsL");
  comp10.classList.toggle("StartPinnedAppsL");
  comp11.classList.toggle("StartPinnedAppsL");
  comp12.classList.toggle("StartPinnedAppsL");
  comp13.classList.toggle("StartPinnedAppsL");
  comp14.classList.toggle("StartPinnedAppsL");
  comp15.classList.toggle("StartPinnedAppsL");
  comp16.classList.toggle("StartPinnedAppsL");
  comp17.classList.toggle("searchSL");
  comp18.classList.toggle("SearchQL");
  comp19.classList.toggle("MoreBtnL");

  }

  function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("buttonTab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
    }

    // Get the element with id="defaultOpen" and click on it
    document.getElementById("defaultOpen").click();

    window.onclick = function(event) {
      if (event.target == document.body) {
        startmenu.style.bottom = "-665px";
        startmenu.style.visibility = "hidden";
        startmenu.style.opacity = "0";

        startmenuM.style.bottom = "-665px";
        startmenuM.style.visibility = "hidden";
        startmenuM.style.opacity = "0";

        se.style.display = "none";
		    NSe.style.display = "block";

        actionmenu.style.bottom = "-665px";
        actionmenu.style.visibility = "hidden";
        actionmenu.style.opacity = "0";
    
        SeA.style.display = "none";
        NSeA.style.display = "block";

        actionmenu2.style.bottom = "-665px";
        actionmenu2.style.visibility = "hidden";
        actionmenu2.style.opacity = "0";
    
        SeA2.style.display = "none";
        NSeA2.style.display = "block";

        actionmenu3.style.bottom = "-665px";
        actionmenu3.style.visibility = "hidden";
        actionmenu3.style.opacity = "0";
    
        SeA3.style.display = "none";
        NSeA3.style.display = "block";

        actionmenu5.style.bottom = "-665px";
        actionmenu5.style.visibility = "hidden";
        actionmenu5.style.opacity = "0";
      }
    }