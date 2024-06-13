function minPurApps(InstalledApp) {
  document.getElementById(InstalledApp).style.transition =
    "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s,  height 0.2s, left 0.2s";
  document.getElementById(InstalledApp).style.transform =
    "translate(-50%, 100%) scale(0)";
  document.getElementById(InstalledApp).style.visibility = "hidden";
  document.getElementById(InstalledApp).style.opacity = "0";
  document.getElementById(InstalledApp).style.left = "50%";

  setTimeout(() => {
    document.getElementById(InstalledApp).style.display = "none";
    document.getElementById(InstalledApp).style.transition =
      "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s,  height 0.2s";
      let docICO = InstalledApp + 'DockAppIco'
      document.getElementById(docICO).style.opacity = "0.5";
  }, 150);
}

function maxPurApps(InstalledApp) {
  if (document.getElementById(InstalledApp).style.width == "100%") {
    document.getElementById(InstalledApp).style.transition =
      "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s,  height 0.2s, left 0.2s, top 0.2s";
    document.getElementById(InstalledApp).style.width = "80%";
    document.getElementById(InstalledApp).style.height = "80%";
    document.getElementById(InstalledApp).style.borderRadius = "10px";
    setTimeout(() => {
      document.getElementById(InstalledApp).style.transition =
        "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s";
    }, 250);
  } else {
    document.getElementById(InstalledApp).style.transition =
      "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s,  height 0.2s, left 0.2s, top 0.2s";
    document.getElementById(InstalledApp).style.top = "50%";
    document.getElementById(InstalledApp).style.left = "50%";
    document.getElementById(InstalledApp).style.width = "100%";
    document.getElementById(InstalledApp).style.height = "100%";
    document.getElementById(InstalledApp).style.borderRadius = "0px";
    setTimeout(() => {
      document.getElementById(InstalledApp).style.transition =
        "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s";
    }, 250);
  }
}

function closePurApps(InstalledApp) {
  document.getElementById(InstalledApp).style.transform =
    "translate(-50%, -50%) scale(0)";
  document.getElementById(InstalledApp).style.visibility = "hidden";
  document.getElementById(InstalledApp).style.opacity = "0";

  let docICO = InstalledApp + 'DockAppIco'
  document.getElementById(docICO).style.transform = "translateY(45px)";
  setTimeout(() => {
    document.getElementById(InstalledApp).style.display = "none";
    document.getElementById(InstalledApp).style.top = "50%";
    document.getElementById(InstalledApp).style.left = "50%";
    document.getElementById(docICO).style.display = "none";
  }, 150);
}

function openPurApps(InstalledApp) {
  document.getElementById(InstalledApp).style.display = "block";
  document.getElementById("maxApp").style.display = "block";

  let docICO = InstalledApp + 'DockAppIco'
  document.getElementById(docICO).style.display = "block";

  setTimeout(() => {
    document.getElementById(InstalledApp).style.top = "50%";
    document.getElementById(InstalledApp).style.left = "50%";
    document.getElementById(InstalledApp).style.transform =
      "translate(-50%, -50%) scale(1)";
    document.getElementById(InstalledApp).style.visibility = "visible";
    document.getElementById(InstalledApp).style.opacity = "1";

    document.getElementById("Desktop").style.scale = "1";
    document.getElementById("Desktop").style.filter = "blur(0px)";
    document.getElementById("bgM").style.filter = "blur(0px)";
    let docICO = InstalledApp + 'DockAppIco'
    document.getElementById(docICO).style.opacity = "1";
  }, 1);
  setTimeout(() => {
    document.getElementById(docICO).style.transform = "translateY(0px)";
  }, 150);

  document.getElementById(InstalledApp).click();
  moveToFront(document.getElementById(InstalledApp));

  dragElement(InstalledApp)
}


function dragElement(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    if (document.getElementById(elmnt.id + "topbar")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(elmnt.id + "topbar").onmousedown = dragMouseDown;
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
        elmnt.style.top = elmnt.offsetTop - pos2 + "px";
        elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function moveToFront(element) {
    var elements = document.getElementsByClassName("apps");
    var highestZIndex = 0;

    for (var i = 0; i < elements.length; i++) {
        var zIndex = parseInt(elements[i].style.zIndex);
        if (zIndex > highestZIndex) {
            highestZIndex = zIndex;
        }
    }

    element.style.zIndex = highestZIndex + 1;
}
