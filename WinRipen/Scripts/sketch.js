let startbutton = document.getElementsByClassName("startbutton")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]
let startbuttonM = document.getElementsByClassName("startbuttonM")[0]
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
let action4 = document.getElementsByClassName("actionbutton4")[0]
let actionmenu4 = document.getElementsByClassName("actionmenu4")[0]
let actionmenu5 = document.getElementsByClassName("wrapper")[0]
let action5 = document.getElementsByClassName("Calbtn")[0]
let widgetB = document.getElementsByClassName("widgetbutton")[0]
let widgetM = document.getElementsByClassName("widgets")[0]

let se = document.getElementById("Se")
let  NSe = document.getElementById("nonSe")
let seM = document.getElementById("SeM")
let  NSeM = document.getElementById("nonSeM")
let Set = document.getElementById("set")
let NSet = document.getElementById("nonSet")

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

    document.getElementById('txtdty').innerHTML =  dt + '/' + dToday.getMonth() + '/' + dToday.getFullYear();
    setTimeout(startTime, 1000);
}

function startTimeM() {
    const todayM = new Date();
    let hM = todayM.getHours();
    let mM = todayM.getMinutes();
    var ampmM = "";
    mM = checkTime(mM);

    if (hM > 12) {
        hM = hM - 12;
        ampmM = " PM";
    } else if (hM == 12){
        hM = 12;
        ampmM = " PM";
    } else if (hM < 12){
        ampmM = " AM";
    } else {
        ampmM = "PM";
    };

    document.getElementById('txtM').innerHTML =  hM + ":" + mM+ampmM;
    setTimeout(startTime, 1000);
}

function checkTimeM(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function StartDateM(){
    const dTodayM = new Date();
    let dtM = dTodayM.getDate();

    var myDateM = new Date();
    var myDayM = myDateM.getDay();

    document.getElementById('txtdtyM').innerHTML =  dtM + '/' + dTodayM.getMonth() + '/' + dTodayM.getFullYear();
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
	if(startmenu.style.bottom == "75px"){
        startmenu.style.bottom = "-665px";
        startmenu.style.visibility = "hidden";
        startmenu.style.opacity = "0";

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

        widgetM.style.bottom = "-1665px";

        tabmenu.style.bottom = "-655px"
		  tabview.style.display = "none";
		  desktops.style.display = "none";
    }
})

startbuttonM.addEventListener("click", ()=>{
	if(startmenuM.style.bottom == "65px"){
        startmenuM.style.bottom = "-665px";
        startmenuM.style.visibility = "hidden";
        startmenuM.style.opacity = "0";

        seM.style.display = "none";
		NSeM.style.display = "block";

	}
	else{
        seM.style.display = "block";
		NSeM.style.display = "none";

        startmenuM.style.bottom = "65px";
        startmenuM.style.visibility = "visible";
        startmenuM.style.opacity = "100%";

        actionmenu5.style.bottom = "-665px";
        actionmenu5.style.visibility = "hidden";
        actionmenu5.style.opacity = "0";
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
    actionmenu4.style.bottom = "-665px";
    actionmenu4.style.visibility = "hidden";
    actionmenu4.style.opacity = "0";
		SeA4.style.display = "none";
		NSeA4.style.display = "block";
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
    actionmenu4.style.bottom = "-665px";
    actionmenu4.style.visibility = "hidden";
    actionmenu4.style.opacity = "0";
		SeA4.style.display = "none";
		NSeA4.style.display = "block";
		set.style.display = "none";
		NSet.style.display = "block";
		SeA2.style.display = "block";
		NSeA2.style.display = "none";
		SeA.style.display = "none";
		NSeA.style.display = "block";
		SeA3.style.display = "none";
		NSeA3.style.display = "block";
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
    actionmenu4.style.bottom = "-665px";
    actionmenu4.style.visibility = "hidden";
    actionmenu4.style.opacity = "0";
		SeA4.style.display = "none";
		NSeA4.style.display = "block";
		set.style.display = "none";
		NSet.style.display = "block";
		SeA3.style.display = "block";
		NSeA3.style.display = "none";
		SeA2.style.display = "none";
		NSeA2.style.display = "block";
		SeA.style.display = "none";
		NSeA.style.display = "block";
	}
})

action4.addEventListener("click", ()=>{
	if(actionmenu4.style.bottom == "65px"){
    actionmenu4.style.bottom = "-665px";
    actionmenu4.style.visibility = "hidden";
    actionmenu4.style.opacity = "0";

		SeA4.style.display = "none";
		NSeA4.style.display = "block";

	}
	else{
    actionmenu4.style.bottom = "65px";
    actionmenu4.style.visibility = "visible";
    actionmenu4.style.opacity = "100%";

    actionmenu.style.bottom = "-665px";
    actionmenu.style.visibility = "hidden";
    actionmenu.style.opacity = "0";
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

		se.style.display = "none";
		NSe.style.display = "block";
    SeA3.style.display = "none";
		NSeA3.style.display = "block"
		set.style.display = "none";
		NSet.style.display = "block";
		SeA4.style.display = "block";
		NSeA4.style.display = "none";
		SeA2.style.display = "none";
		NSeA2.style.display = "block";
		SeA.style.display = "none";
		NSeA.style.display = "block";
	}
})

function widgetShow(){
    if(widgetM.style.bottom == "68px"){
        widgetM.style.bottom = "-1665px";
        document.getElementsByClassName('widgetB')[0].style.display = "block";
        document.getElementsByClassName('widgetSearch')[0].style.display = "none";
      }
      else{
        widgetM.style.bottom = "68px";
        document.getElementsByClassName('widgetB')[0].style.display = "block";
        document.getElementsByClassName('widgetSearch')[0].style.display = "none";

        actionmenu5.style.bottom = "-665px";
        actionmenu5.style.visibility = "hidden";
        actionmenu5.style.opacity = "0";
        actionmenu.style.bottom = "-665px";
        actionmenu.style.visibility = "hidden";
        actionmenu.style.opacity = "0";
        actionmenu2.style.bottom = "-665px";
        actionmenu2.style.visibility = "hidden";
        actionmenu2.style.opacity = "0";
        actionmenu3.style.bottom = "-665px";
        actionmenu3.style.visibility = "hidden";
        actionmenu3.style.opacity = "0";
    
        
        startmenu.style.bottom = "-665px";
        startmenu.style.visibility = "hidden";
        startmenu.style.opacity = "0";
        se.style.display = "none";
        NSe.style.display = "block";

        startmenuM.style.bottom = "-665px";
        startmenuM.style.visibility = "hidden";
        startmenuM.style.opacity = "0";
        seM.style.display = "none";
        NSeM.style.display = "block";
        
        tabmenu.style.bottom = "-655px"
        tabview.style.display = "none";
        desktops.style.display = "none";
        actionmenu5.style.opacity = "1"
    
        set.style.display = "none";
        NSet.style.display = "block";
        SeA3.style.display = "none";
        NSeA3.style.display = "block";
        SeA2.style.display = "none";
        NSeA2.style.display = "block";
        SeA.style.display = "none";
        NSeA.style.display = "block";
      }
}

function inWidgetSearch(){
    document.getElementsByClassName('widgetB')[0].style.display = "none";
    document.getElementsByClassName('widgetSearch')[0].style.display = "block";
}

function inWidget(){
  document.getElementsByClassName('widgetSearch')[0].style.display = "none";
  document.getElementsByClassName('widgetB')[0].style.display = "none";

  setTimeout(() => {
    document.getElementsByClassName('widgetB')[0].style.display = "block";
  }, 250);
}

function widgetSearchShow(){
  if(widgetM.style.bottom == "68px"){
      widgetM.style.bottom = "-1665px";
      document.getElementsByClassName('widgetB')[0].style.display = "block";
      document.getElementsByClassName('widgetSearch')[0].style.display = "none";
    }
    else{
      widgetM.style.bottom = "68px";
      document.getElementsByClassName('widgetB')[0].style.display = "none";
      document.getElementsByClassName('widgetSearch')[0].style.display = "block";

      actionmenu5.style.bottom = "-665px";
      actionmenu5.style.visibility = "hidden";
      actionmenu5.style.opacity = "0";
      actionmenu.style.bottom = "-665px";
      actionmenu.style.visibility = "hidden";
      actionmenu.style.opacity = "0";
      actionmenu2.style.bottom = "-665px";
      actionmenu2.style.visibility = "hidden";
      actionmenu2.style.opacity = "0";
      actionmenu3.style.bottom = "-665px";
      actionmenu3.style.visibility = "hidden";
      actionmenu3.style.opacity = "0";
  
      
      startmenu.style.bottom = "-665px";
      startmenu.style.visibility = "hidden";
      startmenu.style.opacity = "0";
      se.style.display = "none";
      NSe.style.display = "block";

      startmenuM.style.bottom = "-665px";
      startmenuM.style.visibility = "hidden";
      startmenuM.style.opacity = "0";
      seM.style.display = "none";
      NSeM.style.display = "block";
      
      tabmenu.style.bottom = "-655px"
      tabview.style.display = "none";
      desktops.style.display = "none";
      actionmenu5.style.opacity = "1"
  
      set.style.display = "none";
      NSet.style.display = "block";
      SeA3.style.display = "none";
      NSeA3.style.display = "block";
      SeA2.style.display = "none";
      NSeA2.style.display = "block";
      SeA.style.display = "none";
      NSeA.style.display = "block";
    }
}

function opacityM() {
document.getElementById("search-feild").src = "https://www.bing.com/search?q=" + document.getElementById("widget-search").value;
}
function opacityMTb() {
  document.getElementById("search-feild").src = "https://www.bing.com/search?q=" + document.getElementById("SearchInput").value;
  }

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
    actionmenu4.style.bottom = "-665px";
    actionmenu4.style.visibility = "hidden";
    actionmenu4.style.opacity = "0";
		SeA4.style.display = "none";
		NSeA4.style.display = "block";

    startmenuM.style.bottom = "-665px";
    startmenuM.style.visibility = "hidden";
    startmenuM.style.opacity = "0";
    seM.style.display = "none";
    NSeM.style.display = "block";
    
    tabmenu.style.bottom = "-655px"
    tabview.style.display = "none";
    desktops.style.display = "none";
    actionmenu5.style.opacity = "1"
    set.style.display = "none";
    NSet.style.display = "block";
    SeA3.style.display = "none";
    NSeA3.style.display = "block";
    SeA2.style.display = "none";
    NSeA2.style.display = "block";
    SeA.style.display = "none";
    NSeA.style.display = "block";
  }

}

const contextMenu = document.getElementById("context-menu");
const scope = document.querySelector("#Desktop");
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
      
    window.onclick = function(event) {
      if (event.target == document.getElementById("Desktop")) {
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
      actionmenu4.style.bottom = "-665px";
      actionmenu4.style.visibility = "hidden";
      actionmenu4.style.opacity = "0";
      SeA4.style.display = "none";
      NSeA4.style.display = "block";
        actionmenu5.style.bottom = "-665px";
        actionmenu5.style.visibility = "hidden";
        actionmenu5.style.opacity = "0";

        widgetM.style.bottom = "-1665px";
        document.getElementsByClassName('widgetB')[0].style.display = "block";
        document.getElementsByClassName('widgetSearch')[0].style.display = "none";

        document.getElementById("Calbtn").style.backgroundColor = "transparent";

      }
    }

        var div = document.getElementById("status");
        if (navigator.getBattery) {
            navigator.getBattery().then(function(battery) {
              display(battery);
            });
        } 
        else if (navigator.battery) {
            display(navigator.battery);
        } 
        else {
            div.innerHTML = "70%";
        }
        
        function display(battery) {
            var status = "";
            status += (battery.level * 100).toFixed(0) + "%";
            div.innerHTML = status;
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
            div2.innerHTML = status2;
        }

function closeWelcome(){
    document.getElementById("welcome-page").style.webkitTransform = "translate(-50%, -50%) scale(0)";
    document.getElementById("welcome-page").style.transform = "translate(-50%, -50%) scale(0)";

    setTimeout(() => {
        document.getElementById("welcome-page").style.display = "none";
    }, 500);
}

//Make the DIV element draggagle:
dragElement(document.getElementById("bin"));
dragElement(document.getElementById("myPc"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function easterEgg1(){
  window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
}

const tabsBox = document.querySelector(".tabs-box"),
allTabs = tabsBox.querySelectorAll(".tab"),
arrowIcons = document.querySelectorAll(".icon i");

let isDragging = false;
let isDragging2 = false;

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        // if clicked icon is left, reduce 350 from tabsBox scrollLeft else add
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

document.getElementById('ripenos').addEventListener("click", ()=>{
  window.open(
    "https://ripenos.github.io/Ripenos", "_blank");
})
document.getElementById('dynamica').addEventListener("click", ()=>{
  alert("Hey! Ripenos Dynamica is coming soon!!");
})
