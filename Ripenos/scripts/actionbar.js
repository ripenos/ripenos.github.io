var dockApps = document.body.getElementsByClassName("dockApps")[0];
var ripebar = document.body.getElementsByClassName("ripebar")[0];
var dockbar = document.body.getElementsByClassName("actionbarC")[0];
var Feedbar = document.body.getElementsByClassName("actionbarR")[0];

// Ripe Panel
document.getElementById("ripeBtn").addEventListener("click", () => {
  if (document.getElementById("myripebar").style.height == "520px") {
    document.getElementById("myripebar").style.height = "45px";
    document.getElementById("RipenPanel").style.visibility = "hidden";
    document.getElementById("RipenPanel").style.opacity = "0";

    document.getElementsByClassName("searchT")[0].style.marginBottom = "1px";
    document.getElementsByClassName("logo")[0].style.bottom = "5px";

    document.getElementsByClassName("tabcontent")[0].style.marginLeft = "0px";
    document.getElementsByClassName("tabcontent")[0].style.opacity = "0";
    document.getElementsByClassName("tabcontent")[0].style.pointerEvents =
      "none";
    document.getElementsByClassName("tabcontent")[1].style.opacity = "0";
    document.getElementsByClassName("tabcontent")[1].style.pointerEvents =
      "none";

    document.getElementById("searchmenu").style.opacity = "1";
    document.getElementById("RipeLogoM").src = "Assets/General/ripenOs.jpg";
    document.getElementById("RipeLogoM").style.width = "31px";
    document.getElementById("RipeLogoM").style.marginLeft = "0px";
  } else {
    document.getElementById("myripebar").style.height = "520px";

    document.getElementById("RipenPanel").style.visibility = "visible";
    document.getElementById("RipenPanel").style.opacity = "1";

    document.getElementsByClassName("tabcontent")[0].style.opacity = "1";
    document.getElementsByClassName("tabcontent")[0].style.pointerEvents =
      "all";
    document.getElementsByClassName("tabcontent")[1].style.opacity = "0";
    document.getElementsByClassName("tabcontent")[1].style.pointerEvents =
      "none";
    document.getElementsByClassName("tabcontent")[2].style.opacity = "0";
    document.getElementsByClassName("tabcontent")[2].style.pointerEvents =
      "none";

    document.getElementsByClassName("searchT")[0].style.marginBottom = "3px";
    document.getElementsByClassName("logo")[0].style.bottom = "7.5px";

    document.getElementById("RipeTogglesL").style.display = "block";
    document.getElementsByClassName("tabcontent")[0].style.marginLeft = "55px";

    document.getElementById("searchmenu").style.opacity = "1";
    document.getElementById("RipeLogoM").src = "Assets/General/ripenOs.jpg";
    document.getElementById("RipeLogoM").style.width = "31px";
    document.getElementById("RipeLogoM").style.marginLeft = "0px";
  }
  document.getElementById("defaultOpen").classList.add("active");
  document.getElementById("searchmenu").classList.remove("active");
  document.getElementById("profileTabLink").classList.remove("active");
});

function RipenBarMOpen() {
  document.getElementById("myripebarM").style.height = "99%";
  document.getElementById("RipenPanelM").style.visibility = "visible";
  document.getElementById("RipenPanelM").style.opacity = "1";
  document.getElementById("RipenPanelM").style.pointerEvents = "all";
  document.getElementById("Desktop").style.scale = "0.95";
  document.getElementById("Desktop").style.filter = "blur(15px)";
  document.getElementById("bgM").style.filter = "blur(15px)";
}
function RipenBarMClose() {
  document.getElementById("myripebarM").style.height = "55px";
  document.getElementById("RipenPanelM").style.visibility = "hidden";
  document.getElementById("RipenPanelM").style.opacity = "0";
  document.getElementById("RipenPanelM").style.pointerEvents = "none";
  document.getElementById("Desktop").style.scale = "1";
  document.getElementById("Desktop").style.filter = "blur(0px)";
  document.getElementById("bgM").style.filter = "blur(0px)";
}

document.getElementById("ripeBtnM").addEventListener("click", () => {
  if (document.getElementById("myripebarM").style.height == "99%") {
      RipenBarMClose();
  } else {
      RipenBarMOpen();
  }
});

function PowerOptions() {
  if (
    document.getElementById("RipenTogglesSingleClicks").style.opacity == "0"
  ) {
    document.getElementById("RipenTogglesSingleClicks").style.opacity = "1";
    document.getElementById("powerOptions").style.opacity = "0";
    document.getElementById("powerOptions").style.pointerEvents = "none";
    document.getElementById("powerOptions").style.transform =
      "translateY(10px)";
    document.getElementsByClassName("MenuTxt6")[0].style.fontSize = "13.5px";
    document.getElementsByClassName("MenuTxt6")[0].style.paddingLeft = "7.5px";
    document
      .getElementsByClassName("shutDownIconR")[0]
      .classList.remove("active");
    document.getElementById("PowerButtonImg").style.widows = "17px";
    document.getElementById("PowerButtonImg").style.paddingBottom = "0px";
    document.getElementById("PowerButtonImg").style.paddingLeft = "0px";
    document.getElementById("PowerButtonImg").style.scale = "1";
    setTimeout(() => {
      document.getElementById("powerOptions").style.display = "none";
    }, 300);
  } else {
    document.getElementById("powerOptions").style.display = "block";
    document.getElementById("RipenTogglesSingleClicks").style.opacity = "0";
    setTimeout(() => {
      document.getElementById("powerOptions").style.opacity = "1";
      document.getElementById("powerOptions").style.pointerEvents = "all";
      document.getElementById("powerOptions").style.transform =
        "translateY(0px)";
      document.getElementsByClassName("MenuTxt6")[0].style.fontSize = "12.5px";
      document.getElementsByClassName("MenuTxt6")[0].style.paddingLeft = "5px";
      document
        .getElementsByClassName("shutDownIconR")[0]
        .classList.add("active");
      document.getElementById("PowerButtonImg").style.widows = "13px";
      document.getElementById("PowerButtonImg").style.paddingBottom = "1px";
      document.getElementById("PowerButtonImg").style.paddingLeft = "1px";
      document.getElementById("PowerButtonImg").style.scale = "0.9";
    }, 300);
  }
}

function ReExpandMenuR() {
  document.getElementsByClassName("tabcontent")[0].style.transform = "scale(1)";
  document.getElementsByClassName("tabcontent")[1].style.transform = "scale(1)";
  document.getElementsByClassName("tabcontent")[2].style.transform = "scale(1)";
  document.getElementsByClassName("tabcontent")[0].style.filter =
    "blur(0px)  brightness(100%)";
  document.getElementsByClassName("tabcontent")[1].style.filter =
    "blur(0px) brightness(100%)";
  document.getElementsByClassName("tabcontent")[2].style.filter =
    "blur(0px) brightness(100%)";
  document.getElementsByClassName("tablinks")[0].style.width = "40px";
  document.getElementsByClassName("tab")[0].classList.remove('active');
  document.getElementById("searchmenu").style.width = "40px";
  document.getElementById("profileTabLink").style.width = "40px";
  document.getElementsByClassName("MenuTxt")[0].style.visibility = "hidden";
  document.getElementsByClassName("MenuTxt")[0].style.opacity = "0";
  document.getElementsByClassName("MenuTxt2")[0].style.visibility = "hidden";
  document.getElementsByClassName("MenuTxt2")[0].style.opacity = "0";
  document.getElementsByClassName("MenuTxtP")[0].style.visibility = "hidden";
  document.getElementsByClassName("MenuTxtP")[0].style.opacity = "0";
  document.getElementsByClassName("MenuTxt4")[0].style.visibility = "hidden";
  document.getElementsByClassName("MenuTxt4")[0].style.opacity = "0";
  document.getElementsByClassName("MenuTxt5")[0].style.visibility = "hidden";
  document.getElementsByClassName("MenuTxt5")[0].style.opacity = "0";
  document.getElementsByClassName("MenuTxt6")[0].style.visibility = "hidden";
  document.getElementsByClassName("MenuTxt6")[0].style.opacity = "0";

  document.getElementById("RipenTogglesSingleClicks").style.opacity = "1";
  document.getElementById("powerOptions").style.opacity = "0";
  document.getElementById("powerOptions").style.pointerEvents = "none";
  document.getElementById("powerOptions").style.transform = "translateY(10px)";
  document.getElementsByClassName("MenuTxt6")[0].style.fontSize = "13.5px";
  document.getElementsByClassName("MenuTxt6")[0].style.paddingLeft = "7.5px";
  document
    .getElementsByClassName("shutDownIconR")[0]
    .classList.remove("active");
  document.getElementById("PowerButtonImg").style.widows = "17px";
  document.getElementById("PowerButtonImg").style.paddingBottom = "0px";
  document.getElementById("PowerButtonImg").style.paddingLeft = "0px";
  document.getElementById("PowerButtonImg").style.scale = "1";
  setTimeout(() => {
    document.getElementById("powerOptions").style.display = "none";
  }, 300);
}

function ExpandMenuR() {
  document.getElementsByClassName("tabcontent")[0].style.transform =
    "scale(0.95)";
  document.getElementsByClassName("tabcontent")[1].style.transform =
    "scale(0.95)";
  document.getElementsByClassName("tabcontent")[2].style.transform =
    "scale(0.95)";
  document.getElementsByClassName("tabcontent")[0].style.filter =
    "blur(20px) brightness(50%)";
  document.getElementsByClassName("tabcontent")[1].style.filter =
    "blur(20px)  brightness(50%)";
  document.getElementsByClassName("tabcontent")[2].style.filter =
    "blur(20px)  brightness(50%)";
  document.getElementsByClassName("tablinks")[0].style.width = "100px";
  document.getElementsByClassName("tab")[0].classList.add('active');
  document.getElementById("searchmenu").style.width = "100px";
  document.getElementById("profileTabLink").style.width = "100px";
  document.getElementsByClassName("MenuTxt")[0].style.visibility = "visible";
  document.getElementsByClassName("MenuTxt")[0].style.opacity = "1";
  document.getElementsByClassName("MenuTxt2")[0].style.visibility = "visible";
  document.getElementsByClassName("MenuTxt2")[0].style.opacity = "1";
  document.getElementsByClassName("MenuTxtP")[0].style.visibility = "visible";
  document.getElementsByClassName("MenuTxtP")[0].style.opacity = "1";
  document.getElementsByClassName("MenuTxt4")[0].style.visibility = "visible";
  document.getElementsByClassName("MenuTxt4")[0].style.opacity = "1";
  document.getElementsByClassName("MenuTxt5")[0].style.visibility = "visible";
  document.getElementsByClassName("MenuTxt5")[0].style.opacity = "1";
  document.getElementsByClassName("MenuTxt6")[0].style.visibility = "visible";
  document.getElementsByClassName("MenuTxt6")[0].style.opacity = "1";
}

// Search Panel
document.getElementById("adrsbr").addEventListener("click", () => {
  document.getElementById("myripebar").style.height = "520px";
  document.getElementById("RipenPanel").style.visibility = "visible";
  document.getElementById("RipenPanel").style.opacity = "1";

  document.getElementsByClassName("searchT")[0].style.marginBottom = "3px";
  document.getElementsByClassName("logo")[0].style.bottom = "7.5px";

  document.getElementById("RipeTogglesL").style.display = "block";
  document.getElementsByClassName("tabcontent")[0].style.marginLeft = "55px";

  document.getElementById("searchmenu").style.opacity = "1";
  document.getElementById("RipeLogoM").src = "Assets/General/ripenOs.jpg";
  document.getElementById("RipeLogoM").style.width = "31px";
  document.getElementById("RipeLogoM").style.marginLeft = "0px";

  document.getElementsByClassName("tabcontent")[0].style.opacity = "0";
  document.getElementsByClassName("tabcontent")[0].style.pointerEvents = "none";
  document.getElementsByClassName("tabcontent")[1].style.opacity = "1";
  document.getElementsByClassName("tabcontent")[1].style.pointerEvents = "all";
  document.getElementsByClassName("tabcontent")[2].style.opacity = "0";
  document.getElementsByClassName("tabcontent")[2].style.pointerEvents = "none";

  document.getElementById("defaultOpen").classList.remove("active");
  document.getElementById("searchmenu").classList.add("active");
  document.getElementById("profileTabLink").classList.remove("active");
});

function disp_prompt() {
  var sitename = document.getElementById("adrsbr");
  sitename.addEventListener("keydown", function (e) {
    document.getElementById("msg").style.opacity = "1";
    if (e.keyCode === 13) {
      validate(e);
    }
  });
  function validate(e) {
    document.getElementById("msg").src = "https://" + sitename.value;
  }
}

function opacityM() {
  document.getElementById("msg").src =
    "https://www.bing.com/search?q=" + document.getElementById("adrsbr").value;
}

// All Apps Panel
document.getElementById("AllApps").addEventListener("click", () => {
  if (document.getElementById("dock").style.height == "600px") {
    document.getElementById("dock").style.height = "45px";
    document.getElementById("SearchApps").style.visibility = "hidden";
    document.getElementById("SearchApps").style.opacity = "0";
   dockApps.style.transform = "translateX(-50%) scale(0.95)";
   dockApps.style.bottom = "-1.5px"
   document.getElementById("dock").style.padding = "10px";
   document.getElementById("AllApps").style.transform = " scale(0.95) translateX(-2px)"
  } else {
    document.getElementById("dock").style.height = "600px";

    document.getElementById("AllApps").style.transform = "scale(1.05) translateY(3.5px) translateX(-1.5px)"
    document.getElementById("SearchApps").style.visibility = "visible";
    document.getElementById("SearchApps").style.opacity = "1";
    dockApps.style.transform = "translateX(-50%) scale(1)";
    dockApps.style.bottom = "3px"
    document.getElementById("dock").style.padding = "10px";
  }
});

//Pinned Apps
function TogglePinnedApps() {
  if (document.getElementById("AllAppsListM").style.height == "325px") {
    document.getElementById("myPinnedApps").style.opacity = "0";
    setTimeout(() => {
      document.getElementById("myPinnedApps").style.display = "none";
      document.getElementById("AllAppsListM").style.height = "450px";
      document.getElementById("PinnedAppsBtnSpan").style.transform =
        " translateY(6.5px) rotate(0deg)";
    }, 350);
  } else {
    document.getElementById("myPinnedApps").style.display = "block";
    document.getElementById("AllAppsListM").style.height = "325px";
    setTimeout(() => {
      document.getElementById("myPinnedApps").style.opacity = "1";
      document.getElementById("PinnedAppsBtnSpan").style.transform =
        " translateY(6.5px) rotate(180deg)";
    }, 350);
  }
}

// Controls Panel
document.getElementById("controlShowBtn").addEventListener("click", () => {
  if (document.getElementById("feedbar").style.height == "172px") {
    document.getElementById("feedbar").style.height = "45px";
    document.getElementById("ControlToggles").style.visibility = "hidden";
    document.getElementById("ControlToggles").style.opacity = "0";
    document.getElementById("controlShowBtn").classList.remove("active");
  } else {
    document.getElementById("feedbar").style.height = "172px";
    document.getElementById("ControlToggles").style.visibility = "visible";
    document.getElementById("ControlToggles").style.opacity = "1";

    document.getElementById("wifiPanel").style.visibility = "hidden";
    document.getElementById("wifiPanel").style.opacity = "0";
    document.getElementById("MoreCntrlPanel").style.visibility = "hidden";
    document.getElementById("MoreCntrlPanel").style.opacity = "0";
    document.getElementById("CalPanel").style.visibility = "hidden";
    document.getElementById("CalPanel").style.opacity = "0";
    document.getElementById("batteryPanel").style.visibility = "hidden";
    document.getElementById("batteryPanel").style.opacity = "0";
    document.getElementById("NotyPanel").style.visibility = "hidden";
    document.getElementById("NotyPanel").style.opacity = "0";
    document.getElementById("controlShowBtn").classList.add("active");
    document.getElementById("Calbtn").classList.remove("active");
  }
});

// MoreCntrlPanel Panel
document.getElementById("MoreCntrlBtn").addEventListener("click", () => {
  if (document.getElementById("feedbar").style.height == "460px") {
    document.getElementById("feedbar").style.height = "172px";
    document.getElementById("MoreCntrlPanel").style.visibility = "hidden";
    document.getElementById("MoreCntrlPanel").style.opacity = "0";
  } else {
    document.getElementById("feedbar").style.height = "460px";

    document.getElementById("MoreCntrlPanel").style.visibility = "visible";
    document.getElementById("MoreCntrlPanel").style.opacity = "1";
    document.getElementById("wifiPanel").style.visibility = "hidden";
    document.getElementById("wifiPanel").style.opacity = "0";
    document.getElementById("CalPanel").style.visibility = "hidden";
    document.getElementById("CalPanel").style.opacity = "0";
    document.getElementById("batteryPanel").style.visibility = "hidden";
    document.getElementById("batteryPanel").style.opacity = "0";
    document.getElementById("NotyPanel").style.visibility = "hidden";
    document.getElementById("NotyPanel").style.opacity = "0";
  }
});

// Wifi Panel
document.getElementById("wifiBtn").addEventListener("click", () => {
  if (document.getElementById("feedbar").style.height == "617px") {
    document.getElementById("feedbar").style.height = "172px";
    document.getElementById("wifiPanel").style.visibility = "hidden";
    document.getElementById("wifiPanel").style.opacity = "0";
  } else {
    document.getElementById("feedbar").style.height = "617px";

    document.getElementById("wifiPanel").style.visibility = "visible";
    document.getElementById("wifiPanel").style.opacity = "1";
    document.getElementById("MoreCntrlPanel").style.visibility = "hidden";
    document.getElementById("MoreCntrlPanel").style.opacity = "0";
    document.getElementById("CalPanel").style.visibility = "hidden";
    document.getElementById("CalPanel").style.opacity = "0";
    document.getElementById("batteryPanel").style.visibility = "hidden";
    document.getElementById("batteryPanel").style.opacity = "0";
    document.getElementById("NotyPanel").style.visibility = "hidden";
    document.getElementById("NotyPanel").style.opacity = "0";
  }
});

// Battery Panel
document.getElementById("batteryBtn").addEventListener("click", () => {
  if (document.getElementById("feedbar").style.height == "360px") {
    document.getElementById("feedbar").style.height = "172px";
    document.getElementById("batteryPanel").style.visibility = "hidden";
    document.getElementById("batteryPanel").style.opacity = "0";
  } else {
    document.getElementById("feedbar").style.height = "360px";

    document.getElementById("wifiPanel").style.visibility = "hidden";
    document.getElementById("wifiPanel").style.opacity = "0";
    document.getElementById("CalPanel").style.visibility = "hidden";
    document.getElementById("CalPanel").style.opacity = "0";
    document.getElementById("MoreCntrlPanel").style.visibility = "hidden";
    document.getElementById("MoreCntrlPanel").style.opacity = "0";
    document.getElementById("batteryPanel").style.visibility = "visible";
    document.getElementById("batteryPanel").style.opacity = "1";
    document.getElementById("NotyPanel").style.visibility = "hidden";
    document.getElementById("NotyPanel").style.opacity = "0";
  }
});

// Calendar Panel
function calendarSH() {
  if (document.getElementById("feedbar").style.height == "440px") {
    document.getElementById("feedbar").style.height = "45px";
    document.getElementById("CalPanel").style.visibility = "hidden";
    document.getElementById("CalPanel").style.opacity = "0";
    document.getElementById("Calbtn").classList.remove("active");
  } else {
    document.getElementById("feedbar").style.height = "440px";

    document.getElementById("CalPanel").style.visibility = "visible";
    document.getElementById("CalPanel").style.opacity = "1";

    document.getElementById("wifiPanel").style.visibility = "hidden";
    document.getElementById("wifiPanel").style.opacity = "0";
    document.getElementById("MoreCntrlPanel").style.visibility = "hidden";
    document.getElementById("MoreCntrlPanel").style.opacity = "0";
    document.getElementById("batteryPanel").style.visibility = "hidden";
    document.getElementById("batteryPanel").style.opacity = "0";
    document.getElementById("NotyPanel").style.visibility = "hidden";
    document.getElementById("NotyPanel").style.opacity = "0";
    document.getElementById("ControlToggles").style.visibility = "hidden";
    document.getElementById("ControlToggles").style.opacity = "0";
    document.getElementById("controlShowBtn").classList.remove("active");
    document.getElementById("Calbtn").classList.add("active");
  }
}

//Notification Panel
function noty_Panel() {
  if (document.getElementById("feedbar").style.height == "500px") {
    document.getElementById("feedbar").style.height = "45px";
    document.getElementById("NotyPanel").style.visibility = "hidden";
    document.getElementById("NotyPanel").style.opacity = "0";
  } else {
    document.getElementById("feedbar").style.height = "500px";

    document.getElementById("NotyPanel").style.visibility = "visible";
    document.getElementById("NotyPanel").style.opacity = "1";

    document.getElementById("CalPanel").style.visibility = "hidden";
    document.getElementById("CalPanel").style.opacity = "0";
    document.getElementById("MoreCntrlPanel").style.visibility = "hidden";
    document.getElementById("MoreCntrlPanel").style.opacity = "0";
    document.getElementById("wifiPanel").style.visibility = "hidden";
    document.getElementById("wifiPanel").style.opacity = "0";
    document.getElementById("batteryPanel").style.visibility = "hidden";
    document.getElementById("batteryPanel").style.opacity = "0";
    document.getElementById("ControlToggles").style.visibility = "hidden";
    document.getElementById("ControlToggles").style.opacity = "0";
    document.getElementById("controlShowBtn").classList.remove("active");
    document.getElementById("Calbtn").classList.remove("active");
  }
}

document.getElementById("blurBtn").addEventListener("click", () => {
  if (document.getElementById("blur-backup").style.height == "20px") {
    document.getElementById("blur-backup").style.height = "10px";
    document.getElementById("feedbar").style.backgroundColor = "var(--primary-bg)";
    document.getElementById("dock").style.backgroundColor = "var(--primary-bg)";
    document.getElementById("myripebar").style.backgroundColor = "var(--primary-bg)";
    document.getElementById("feedbar").style.backdropFilter =
      "blur(55px) contrast(100%)";
    document.getElementById("dock").style.backdropFilter =
      "blur(55px) contrast(100%)";
    document.getElementById("myripebar").style.backdropFilter =
      "blur(55px) contrast(100%)";
  } else {
    document.getElementById("blur-backup").style.height = "20px";
    document.getElementById("feedbar").style.backgroundColor = "#1c1c1c";
    document.getElementById("dock").style.backgroundColor = "#1c1c1c";
    document.getElementById("myripebar").style.backgroundColor = "#1c1c1c";
    document.getElementById("feedbar").style.backdropFilter =
      "blur(0) contrast(0%)";
    document.getElementById("dock").style.backdropFilter =
      "blur(0) contrast(0%)";
    document.getElementById("myripebar").style.backdropFilter =
      "blur(0) contrast(0%)";
  }
});

function startTimeH() {
  const today2 = new Date();
  let h2 = today2.getHours();
  let m2 = today2.getMinutes();
  m2 = checkTime2(m2);
  document.getElementById("txtHh").innerHTML = h2;
  document.getElementById("txtHm").innerHTML = m2;
  document.getElementById('timeDesktop').innerHTML = h2 + ":" + m2
  setTimeout(startTimeH, 1000);
}

function checkTime2(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}

function StartDateH() {
  const dToday2 = new Date();
  let dt2 = dToday2.getDate();

  var myDate2 = new Date();
  var myDate2M = new Date();

  var myDay2 = myDate2.getDay();
  var myMonth2 = myDate2M.getMonth();

  // Array of days.
  var weekday2 = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Array of Months.
  var Months2 = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.getElementById("txtdtyH").innerHTML =
    weekday2[myDay2] + ", " + Months2[myMonth2] + " " + dt2;
  setTimeout(startTimeH, 1000);
  
  document.getElementById("txtdtyHM").innerHTML =
    weekday2[myDay2] + ", " + Months2[myMonth2] + " " + dt2;
  setTimeout(startTimeH, 1000);

  document.getElementById('txtdtyM2').innerHTML = 
  weekday2[myDay2] + ' ' + dt2 +  ', ' + dToday2.getFullYear() + '  • 33° C';
}

const daysTag = document.querySelector(".days"),
  currentDate = document.querySelector(".current-date"),
  prevNextIcon = document.querySelectorAll(".icons span");
// getting new date, current year and month
let date = new Date(),
  currYear = date.getFullYear(),
  currMonth = date.getMonth();
// storing full name of all months in array
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const renderCalendar = () => {
  let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
  let liTag = "";

  for (let i = firstDayofMonth; i > 0; i--) {
    // creating li of previous month last days
    liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
  }

  for (let i = 1; i <= lastDateofMonth; i++) {
    // creating li of all days of current month
    // adding active class to li if the current day, month, and year matched
    let isToday =
      i === date.getDate() &&
      currMonth === new Date().getMonth() &&
      currYear === new Date().getFullYear()
        ? "active"
        : "";
    liTag += `<li class="${isToday}">${i}</li>`;
  }

  for (let i = lastDayofMonth; i < 6; i++) {
    // creating li of next month first days
    liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
  }
  currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
  daysTag.innerHTML = liTag;
};
renderCalendar();

prevNextIcon.forEach((icon) => {
  // getting prev and next icons
  icon.addEventListener("click", () => {
    // adding click event on both icons
    // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
    currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

    if (currMonth < 0 || currMonth > 11) {
      // if current month is less than 0 or greater than 11
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

document.getElementById("readBtn").addEventListener("click", () => {
  if (document.getElementById("OverRead").style.display == "block") {
    document.getElementById("OverRead").style.display = "none";
  } else {
    document.getElementById("OverRead").style.display = "block";
  }
});

function fun(e) {
  var container = document.getElementById("myoverlay-brightness");
  var val = e.value;
  container.setAttribute("style", "opacity: " + val + "%;");
}

document.getElementById("RGOSUpdatesNotyC").addEventListener("click", () => {
  document.getElementById("RGOSUpdatesNoty").style.opacity = "0";
  setTimeout(() => {
    document.getElementById("brForNoty1").style.display = "none";
    document.getElementById("RGOSUpdatesNoty").style.display = "none";
  }, 300);
});

document.getElementById("TipsNotyC").addEventListener("click", () => {
  document.getElementById("TipsNoty").style.opacity = "0";
  setTimeout(() => {
    document.getElementById("brForNoty1").style.display = "none";
    document.getElementById("TipsNotyC").style.display = "none";
  }, 300);

  if (
    document.getElementById("RGOSUpdatesNoty").style.display == "none" &&
    document.getElementById("TipsNotyC").style.display == "none"
  ) {
    document.getElementById("noNoties").style.display = "none";
  } else {
    document.getElementById("noNoties").style.display = "block";
  }
});

document.getElementById("clearNoties").addEventListener("click", () => {
  document.getElementById("TipsNoty").style.opacity = "0";
  document.getElementById("RGOSUpdatesNoty").style.opacity = "0";
  setTimeout(() => {
    document.getElementById("brForNoty1").style.display = "none";
    document.getElementById("TipsNotyC").style.display = "none";
    document.getElementById("RGOSUpdatesNoty").style.display = "none";
    document.getElementById("noNoties").style.display = "block";
    document.getElementById("clearNoties").style.opacity = "0";
  }, 300);
});
