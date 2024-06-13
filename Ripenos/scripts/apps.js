// APPS - Files
function minFiles() {
  document.getElementById("files").style.transition =
    "transform 0.5s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s, left 0.3s";
  document.getElementById("files").style.transform =
    "translate(-50%, 100%) scaleX(0)";
  document.getElementById("files").style.left = "50%";

  setTimeout(() => {
    document.getElementById("files").style.display = "none";
    document.getElementById("fileDockAppIco").style.opacity = "0.5";
    document.getElementById("files").style.transition =
      "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s";
  }, 150);

  actionbarDown();
}

function maxFiles() {
  if (document.getElementById("files").style.width == "100%") {
    document.getElementById("files").style.transition =
      "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s, left 0.3s, top 0.3s";
    document.getElementById("files").style.width = "80%";
    document.getElementById("files").style.height = "80%";
    document.getElementById("files").style.borderRadius = "10px";
    setTimeout(() => {
      document.getElementById("files").style.transition =
        "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s";
    }, 250);
  } else {
    document.getElementById("files").style.transition =
      "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s, left 0.3s, top 0.3s";
    document.getElementById("files").style.top = "50%";
    document.getElementById("files").style.left = "50%";
    document.getElementById("files").style.width = "100%";
    document.getElementById("files").style.height = "100%";
    document.getElementById("files").style.borderRadius = "0px";
    setTimeout(() => {
      document.getElementById("files").style.transition =
        "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s";
    }, 250);
  }
}

function closeFiles() {
  document.getElementById("files").style.transform =
    "translate(-50%, -50%) scale(0.75)";
  document.getElementById("files").style.visibility = "hidden";
  document.getElementById("files").style.opacity = "0";
  setTimeout(() => {
    document.getElementById("files").style.display = "none";
    document.getElementById("files").style.top = "50%";
    document.getElementById("files").style.left = "50%";
  }, 150);
  actionbarDown();
}

function openFiles() {
  document.getElementById("files").style.display = "block";
  document.getElementById("maxApp").style.display = "block";
  setTimeout(() => {
    document.getElementById("files").style.top = "50%";
    document.getElementById("files").style.left = "50%";
    document.getElementById("files").style.transform =
      "translate(-50%, -50%) scale(1)";
    document.getElementById("files").style.visibility = "visible";
    document.getElementById("files").style.opacity = "1";

    document.getElementById("Desktop").style.scale = "1";
    document.getElementById("Desktop").style.filter = "blur(0px)";
    document.getElementById("bgM").style.filter = "blur(0px)";
    document.getElementById("fileDockAppIco").style.opacity = "1";
  }, 1);

  document.getElementById("files").click();
  moveToFront(document.getElementById("files"));
  actionbarDown();
}

// APPS - Settings
function openSet(){
  actionbarDown();
  document.getElementById("settings").click();
  moveToFront(document.getElementById("settings"));

  document.getElementById("settings").style.display = "block";
  document.getElementById("maxApp").style.display = "block";
  document.getElementById("setDockAppIco").style.display = "block";
  setTimeout(() => {
    document.getElementById("settings").style.visibility = "visible";
    document.getElementById("settings").style.opacity = "1";
    document.getElementById("settings").style.top = "50%";
    document.getElementById("settings").style.left = "50%";
    document.getElementById("settings").style.transform =
      "translate(-50%, -50%) scale(1)";

    document.getElementById("Desktop").style.scale = "1";
    document.getElementById("Desktop").style.filter = "blur(0px)";
    document.getElementById("bgM").style.filter = "blur(0px)";
  }, 1);
  setTimeout(() => {
    document.getElementById("setDockAppIco").style.opacity = "1";
    document.getElementById("setDockAppIco").style.transform =
      "translateY(0px)";
  }, 150);
}

function closeSet(){
  document.getElementById("settings").style.transform =
    "translate(-50%, -50%) scale(0.75)";
  document.getElementById("settings").style.visibility = "hidden";
  document.getElementById("settings").style.opacity = "0";
  document.getElementById("setDockAppIco").style.transform = "translateY(45px)";
  setTimeout(() => {
    document.getElementById("settings").style.display = "none";
    document.getElementById("setDockAppIco").style.display = "none";
    document.getElementById("settings").style.top = "50%";
    document.getElementById("settings").style.left = "50%";
  }, 150);
  actionbarDown();
}

function minSet(){
  document.getElementById("settings").style.transition =
    "transform 0.5s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s, left 0.3s";
  document.getElementById("settings").style.transform =
    "translate(-50%, 100%) scaleX(0)";
  document.getElementById("settings").style.left = "50%";

setTimeout(() => {
  document.getElementById("settings").style.display = "none";
  document.getElementById("setDockAppIco").style.opacity = "0.5";
  document.getElementById("settings").style.transition =
    "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s";
}, 150);
actionbarDown();
}

// APPS - Tic Tac Toes
function minTic() {
  document.getElementById("ticTacToe").style.transition =
    "transform 0.5s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s, left 0.3s";
  document.getElementById("ticTacToe").style.transform =
    "translate(-50%, 100%) scaleX(0)";
  document.getElementById("ticTacToe").style.left = "50%";

  setTimeout(() => {
    document.getElementById("ticTacToe").style.display = "none";
    document.getElementById("TicDockAppIco").style.opacity = "0.5";
    document.getElementById("ticTacToe").style.transition =
      "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s";
  }, 150);
  actionbarDown();
}

function closeTic() {
  document.getElementById("ticTacToe").style.transform =
    "translate(-50%, -50%) scale(0.75)";
  document.getElementById("ticTacToe").style.visibility = "hidden";
  document.getElementById("ticTacToe").style.opacity = "0";
  document.getElementById("TicDockAppIco").style.transform = "translateY(45px)";
  setTimeout(() => {
    document.getElementById("ticTacToe").style.display = "none";
    document.getElementById("ticTacToe").style.top = "50%";
    document.getElementById("ticTacToe").style.left = "50%";
    document.getElementById("TicDockAppIco").style.display = "none";
  }, 150);

  actionbarDown();
}

function openTic() {
  document.getElementById("ticTacToe").style.display = "block";
  document.getElementById("maxApp").style.display = "block";
  document.getElementById("TicDockAppIco").style.display = "block";

  setTimeout(() => {
    document.getElementById("ticTacToe").style.top = "50%";
    document.getElementById("ticTacToe").style.left = "50%";
    document.getElementById("ticTacToe").style.transform =
      "translate(-50%, -50%) scale(1)";
    document.getElementById("ticTacToe").style.visibility = "visible";
    document.getElementById("ticTacToe").style.opacity = "1";

    document.getElementById("Desktop").style.scale = "1";
    document.getElementById("Desktop").style.filter = "blur(0px)";
    document.getElementById("bgM").style.filter = "blur(0px)";
    document.getElementById("TicDockAppIco").style.opacity = "1";
  }, 1);
  setTimeout(() => {
    document.getElementById("TicDockAppIco").style.transform =
      "translateY(0px)";
  }, 150);
  document.getElementById("ticTacToe").click();
  moveToFront(document.getElementById("ticTacToe"));
  actionbarDown();
}

// APPS - WinRipenEmu
function closeWinEmu() {
  document.getElementById("WinRipenEmu").style.visibility = "hidden";
  document.getElementById("WinRipenEmu").style.opacity = "0";
  setTimeout(() => {
    document.getElementById("WinRipenEmu").style.display = "none";
    document.getElementById("WinRipenEmu").style.top = "50%";
    document.getElementById("WinRipenEmu").style.left = "50%";
  }, 150);

  actionbarDown();
}

function openWinRipenEmu() {
  document.getElementById("WinRipenEmu").style.display = "block";
  document.getElementById("maxApp").style.display = "block";

  setTimeout(() => {
    document.getElementById("WinRipenEmu").style.top = "50%";
    document.getElementById("WinRipenEmu").style.left = "50%";
    document.getElementById("WinRipenEmu").style.visibility = "visible";
    document.getElementById("WinRipenEmu").style.opacity = "1";

    document.getElementById("Desktop").style.scale = "1";
    document.getElementById("Desktop").style.filter = "blur(0px)";
    document.getElementById("bgM").style.filter = "blur(0px)";

    document.getElementById('WinEmuframe').src = ' ../WinRipen/index.html'
  }, 1);
  document.getElementById("WinRipenEmu").click();
  moveToFront(document.getElementById("WinRipenEmu"));
  actionbarDown();
}

// APPS - Calculator
function minCalc() {
  document.getElementById("calculator").style.transition =
    "transform 0.5s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s, left 0.3s";
  document.getElementById("calculator").style.transform =
    "translate(-50%, 100%) scaleX(0)";
  document.getElementById("calculator").style.left = "50%";

  setTimeout(() => {
    document.getElementById("calculator").style.display = "none";
    document.getElementById("calcDockAppIco").style.opacity = "0.5";
    document.getElementById("calculator").style.transition =
      "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s";
  }, 150);

  actionbarDown();
}

function closeCalc() {
  document.getElementById("calculator").style.transform =
    "translate(-50%, -50%) scale(0.75)";
  document.getElementById("calculator").style.visibility = "hidden";
  document.getElementById("calculator").style.opacity = "0";
  setTimeout(() => {
    document.getElementById("calculator").style.display = "none";
    document.getElementById("calculator").style.top = "50%";
    document.getElementById("calculator").style.left = "50%";
  }, 150);

  actionbarDown();
}

function openCalc() {
  document.getElementById("calculator").style.display = "block";
  document.getElementById("maxApp").style.display = "block";

  setTimeout(() => {
    document.getElementById("calculator").style.top = "50%";
    document.getElementById("calculator").style.left = "50%";
    document.getElementById("calculator").style.transform =
      "translate(-50%, -50%) scale(1)";
    document.getElementById("calculator").style.visibility = "visible";
    document.getElementById("calculator").style.opacity = "1";

    document.getElementById("Desktop").style.scale = "1";
    document.getElementById("Desktop").style.filter = "blur(0px)";
    document.getElementById("bgM").style.filter = "blur(0px)";
    document.getElementById("calcDockAppIco").style.opacity = "1";
  }, 1);
  document.getElementById("calculator").click();
  moveToFront(document.getElementById("calculator"));
  actionbarDown();
}

// APPS - Tasks
function minTasks() {
  document.getElementById("Tasks").style.transition =
    "transform 0.5s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s, left 0.3s";
  document.getElementById("Tasks").style.transform =
    "translate(-50%, 100%) scaleX(0)";
  document.getElementById("Tasks").style.left = "50%";

  setTimeout(() => {
    document.getElementById("Tasks").style.display = "none";
    document.getElementById("tasksDockAppIco").style.opacity = "0.5";
    document.getElementById("Tasks").style.transition =
      "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s";
  }, 150);

  actionbarDown();
}

function closeTasks() {
  document.getElementById("Tasks").style.transform =
    "translate(-50%, -50%) scale(0.75)";
  document.getElementById("Tasks").style.visibility = "hidden";
  document.getElementById("Tasks").style.opacity = "0";
  document.getElementById("tasksDockAppIco").style.transform = "translateY(45px)";
  setTimeout(() => {
    document.getElementById("Tasks").style.display = "none";
    document.getElementById("Tasks").style.top = "50%";
    document.getElementById("Tasks").style.left = "50%";
    document.getElementById("tasksDockAppIco").style.display = "none";
  }, 150);

  actionbarDown();
}

function openTasks() {
  document.getElementById("Tasks").style.display = "block";
  document.getElementById("maxApp").style.display = "block";
  document.getElementById("tasksDockAppIco").style.display = "block";

  setTimeout(() => {
    document.getElementById("Tasks").style.top = "50%";
    document.getElementById("Tasks").style.left = "50%";
    document.getElementById("Tasks").style.transform =
      "translate(-50%, -50%) scale(1)";
    document.getElementById("Tasks").style.visibility = "visible";
    document.getElementById("Tasks").style.opacity = "1";
    document.getElementById("tasksDockAppIco").style.opacity = "1";

    document.getElementById("Desktop").style.scale = "1";
    document.getElementById("Desktop").style.filter = "blur(0px)";
    document.getElementById("bgM").style.filter = "blur(0px)";
  }, 1);
  setTimeout(() => {
    document.getElementById("tasksDockAppIco").style.transform =
      "translateY(0px)";
  }, 150);
  document.getElementById("Tasks").click();
  moveToFront(document.getElementById("Tasks"));
  actionbarDown();
}

// APPS - Clock
function minClock() {
  document.getElementById("Clock").style.transition =
    "transform 0.5s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s, left 0.3s";
  document.getElementById("Clock").style.transform =
    "translate(-50%, 100%) scaleX(0)";
  document.getElementById("Clock").style.left = "50%";

  setTimeout(() => {
    document.getElementById("Clock").style.display = "none";
    document.getElementById("clockDockAppIco").style.opacity = "0.5";
    document.getElementById("Clock").style.transition =
      "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s";
  }, 150);

  actionbarDown();
}

function closeClock() {
  document.getElementById("Clock").style.transform =
    "translate(-50%, -50%) scale(0.75)";
  document.getElementById("Clock").style.visibility = "hidden";
  document.getElementById("Clock").style.opacity = "0";
  document.getElementById("clockDockAppIco").style.transform = "translateY(45px)";
  setTimeout(() => {
    document.getElementById("Clock").style.display = "none";
    document.getElementById("Clock").style.top = "50%";
    document.getElementById("Clock").style.left = "50%";
    document.getElementById("clockDockAppIco").style.display = "none";
  }, 150);

  actionbarDown();
}

function openClock() {
  document.getElementById("Clock").style.display = "block";
  document.getElementById("maxApp").style.display = "block";
  document.getElementById("clockDockAppIco").style.display = "block";

  setTimeout(() => {
    document.getElementById("Clock").style.top = "50%";
    document.getElementById("Clock").style.left = "50%";
    document.getElementById("Clock").style.transform =
      "translate(-50%, -50%) scale(1)";
    document.getElementById("Clock").style.visibility = "visible";
    document.getElementById("Clock").style.opacity = "1";
    document.getElementById("clockDockAppIco").style.opacity = "1";

    document.getElementById("Desktop").style.scale = "1";
    document.getElementById("Desktop").style.filter = "blur(0px)";
    document.getElementById("bgM").style.filter = "blur(0px)";
  }, 1);
  setTimeout(() => {
    document.getElementById("clockDockAppIco").style.transform =
      "translateY(0px)";
  }, 150);
  document.getElementById("Clock").click();
  moveToFront(document.getElementById("Clock"));
  actionbarDown();
}

// APPS - Qr Code Generator
function closeQr() {
  document.getElementById("QrApp").style.transform =
    "translate(-50%, -50%) scale(0.75)";
  document.getElementById("QrApp").style.visibility = "hidden";
  document.getElementById("QrApp").style.opacity = "0";

  setTimeout(() => {
    document.getElementById("QrApp").style.display = "none";
    document.getElementById("QrApp").style.top = "50%";
    document.getElementById("QrApp").style.left = "50%";
  }, 150);

  actionbarDown();
}

function openQr() {
  document.getElementById("QrApp").style.display = "block";
  document.getElementById("maxApp").style.display = "block";

  setTimeout(() => {
    document.getElementById("QrApp").style.top = "50%";
    document.getElementById("QrApp").style.left = "50%";
    document.getElementById("QrApp").style.transform =
      "translate(-50%, -50%) scale(1)";
    document.getElementById("QrApp").style.visibility = "visible";
    document.getElementById("QrApp").style.opacity = "1";

    document.getElementById("Desktop").style.scale = "1";
    document.getElementById("Desktop").style.filter = "blur(0px)";
    document.getElementById("bgM").style.filter = "blur(0px)";
  }, 1);

  document.getElementById("QrApp").click();
  moveToFront(document.getElementById("QrApp"));
  actionbarDown();
}

// APPS - calendar
function minCal() {
  document.getElementById("calendar").style.transition =
    "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s, left 0.3s";
  document.getElementById("calendar").style.transform =
    "translate(-50%, 100%) scaleX(0)";
  document.getElementById("calendar").style.visibility = "hidden";
  document.getElementById("calendar").style.opacity = "0";
  document.getElementById("calendar").style.left = "50%";

  setTimeout(() => {
    document.getElementById("calendar").style.display = "none";
    document.getElementById("calendar").style.transition =
    document.getElementById("CalDockAppIco").style.opacity = "0.5";
      "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s";
  }, 150);

  actionbarDown();
}

function closeCal() {
  document.getElementById("calendar").style.transform =
    "translate(-50%, -50%) scale(0.75)";
  document.getElementById("calendar").style.visibility = "hidden";
  document.getElementById("calendar").style.opacity = "0";
  document.getElementById("CalDockAppIco").style.transform = "translateY(45px)";
  setTimeout(() => {
    document.getElementById("calendar").style.display = "none";
    document.getElementById("calendar").style.top = "50%";
    document.getElementById("calendar").style.left = "50%";
    document.getElementById("CalDockAppIco").style.display = "none";
  }, 150);

  actionbarDown();
}

function openCal() {
  document.getElementById("calendar").style.display = "block";
  document.getElementById("maxApp").style.display = "block";
  document.getElementById("CalDockAppIco").style.display = "block";

  setTimeout(() => {
    document.getElementById("calendar").style.top = "50%";
    document.getElementById("calendar").style.left = "50%";
    document.getElementById("calendar").style.transform =
      "translate(-50%, -50%) scale(1)";
    document.getElementById("calendar").style.visibility = "visible";
    document.getElementById("calendar").style.opacity = "1";
    document.getElementById("CalDockAppIco").style.opacity = "1";

    document.getElementById("Desktop").style.scale = "1";
    document.getElementById("Desktop").style.filter = "blur(0px)";
    document.getElementById("bgM").style.filter = "blur(0px)";
  }, 1);
  setTimeout(() => {
    document.getElementById("CalDockAppIco").style.transform =
      "translateY(0px)";
  }, 150);

  document.getElementById("calendar").click();
  moveToFront(document.getElementById("calendar"));
  actionbarDown();
}

// APPS - Paint
function minPaint() {
  document.getElementById("paint").style.transition =
    "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s, left 0.3s";
  document.getElementById("paint").style.transform =
    "translate(-50%, 100%) scaleX(0)";
  document.getElementById("paint").style.visibility = "hidden";
  document.getElementById("paint").style.opacity = "0";
  document.getElementById("paint").style.left = "50%";
  document.getElementById("PaintDockAppIco").style.opacity = "0.5";

  setTimeout(() => {
    document.getElementById("paint").style.display = "none";
    document.getElementById("paint").style.transition =
      "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s";
  }, 150);

  actionbarDown();
}

function maxPaint() {
  if (document.getElementById("paint").style.width == "100%") {
    document.getElementById("paint").style.transition =
      "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s, left 0.3s, top 0.3s";
    document.getElementById("paint").style.width = "80%";
    document.getElementById("paint").style.height = "80%";
    document.getElementById("paint").style.borderRadius = "10px";
    setTimeout(() => {
      document.getElementById("paint").style.transition =
        "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s";
    }, 250);
  } else {
    document.getElementById("paint").style.transition =
      "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s, left 0.3s, top 0.3s";
    document.getElementById("paint").style.top = "50%";
    document.getElementById("paint").style.left = "50%";
    document.getElementById("paint").style.width = "100%";
    document.getElementById("paint").style.height = "100%";
    document.getElementById("paint").style.borderRadius = "0px";
    document.getElementById("paint").style.transform =
      "translate(-50%, -50%) scale(1)";
    setTimeout(() => {
      document.getElementById("paint").style.transition =
        "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s";
    }, 250);
  }
}

function closePaint() {
  document.getElementById("paint").style.transform =
    "translate(-50%, -50%) scale(0.75)";
  document.getElementById("paint").style.visibility = "hidden";
  document.getElementById("paint").style.opacity = "0";
  document.getElementById("PaintDockAppIco").style.transform =
    "translateY(45px)";

  setTimeout(() => {
    document.getElementById("paint").style.display = "none";
    document.getElementById("paint").style.top = "50%";
    document.getElementById("paint").style.left = "50%";
    document.getElementById("PaintDockAppIco").style.display = "none";
  }, 150);

  actionbarDown();
}

function openPaint() {
  document.getElementById("paint").style.display = "block";
  document.getElementById("maxApp").style.display = "block";
  document.getElementById("PaintDockAppIco").style.display = "block";
  setTimeout(() => {
    document.getElementById("paint").style.top = "50%";
    document.getElementById("paint").style.left = "50%";
    document.getElementById("paint").style.transform =
      "translate(-50%, -50%) scale(1)";
    document.getElementById("paint").style.visibility = "visible";
    document.getElementById("paint").style.opacity = "1";
    document.getElementById("PaintDockAppIco").style.opacity = "1";

    document.getElementById("Desktop").style.scale = "1";
    document.getElementById("Desktop").style.filter = "blur(0px)";
    document.getElementById("bgM").style.filter = "blur(0px)";
    alert('If the canvas is not showing, click the reload button to fix it.')
  }, 1);
  setTimeout(() => {
    document.getElementById("PaintDockAppIco").style.transform =
      "translateY(0px)";
  }, 150);
  document.getElementById("paint").click();
  moveToFront(document.getElementById("paint"));
  actionbarDown();
}

// APPS - Notes
function minNotes() {
  document.getElementById("notes").style.transition =
    "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s, left 0.3s";
  document.getElementById("notes").style.transform =
    "translate(-50%, 100%) scaleX(0)";
  document.getElementById("notes").style.visibility = "hidden";
  document.getElementById("notes").style.opacity = "0";
  document.getElementById("notes").style.left = "50%";

  setTimeout(() => {
    document.getElementById("notes").style.display = "none";
    document.getElementById("noteDockAppIco").style.opacity = "0.5";
    document.getElementById("notes").style.transition =
      "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s";
  }, 250);

  actionbarDown();
}

function closeNotes() {
  document.getElementById("notes").style.transform =
    "translate(-50%, -50%) scale(0.75)";
  document.getElementById("notes").style.visibility = "hidden";
  document.getElementById("notes").style.opacity = "0";
  setTimeout(() => {
    document.getElementById("notes").style.display = "none";
    document.getElementById("notes").style.top = "50%";
    document.getElementById("notes").style.left = "50%";
  }, 250);

  actionbarDown();
}

function openNotes() {
  document.getElementById("notes").style.display = "block";
  document.getElementById("maxApp").style.display = "block";

  setTimeout(() => {
    document.getElementById("notes").style.top = "50%";
    document.getElementById("notes").style.left = "50%";
    document.getElementById("notes").style.transform =
      "translate(-50%, -50%) scale(1)";
    document.getElementById("notes").style.visibility = "visible";
    document.getElementById("notes").style.opacity = "1";
    document.getElementById("noteDockAppIco").style.opacity = "1";

    document.getElementById("Desktop").style.scale = "1";
    document.getElementById("Desktop").style.filter = "blur(0px)";
    document.getElementById("bgM").style.filter = "blur(0px)";
  }, 1);

  document.getElementById("notes").click();
  moveToFront(document.getElementById("notes"));
  actionbarDown();
}

// APPS - Snake Game
function minSnake() {
  document.getElementById("snake").style.transition =
    "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s, left 0.3s";
  document.getElementById("snake").style.transform =
    "translate(-50%, 100%) scaleX(0)";
  document.getElementById("snake").style.visibility = "hidden";
  document.getElementById("snake").style.opacity = "0";
  document.getElementById("snake").style.left = "50%";

  setTimeout(() => {
    document.getElementById("snake").style.display = "none";
    document.getElementById("snakeDockAppIco").style.opacity = "0.5";
    document.getElementById("snake").style.transition =
      "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s";
  }, 150);

  actionbarDown();
}

function maxSnake() {
  if (document.getElementById("snake").style.width == "100%") {
    document.getElementById("snake").style.transition =
      "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s, left 0.3s, top 0.3s";

    document.getElementById("snake").style.width = "52.25%";
    document.getElementById("snake").style.height = "80%";
    document.getElementById("snake").style.borderRadius = "10px";
    setTimeout(() => {
      document.getElementById("snake").style.transition =
        "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s";
    }, 250);
  } else {
    document.getElementById("snake").style.transition =
      "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s, left 0.3s, top 0.3s";
    document.getElementById("snake").style.top = "50%";
    document.getElementById("snake").style.left = "50%";
    document.getElementById("snake").style.width = "100%";
    document.getElementById("snake").style.height = "100%";
    document.getElementById("snake").style.borderRadius = "0px";
    setTimeout(() => {
      document.getElementById("snake").style.transition =
        "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s";
    }, 250);
  }
}

function closeSnake() {
  document.getElementById("snake").style.transform =
    "translate(-50%, -50%) scale(0.75)";
  document.getElementById("snake").style.visibility = "hidden";
  document.getElementById("snake").style.opacity = "0";
  setTimeout(() => {
    document.getElementById("snake").style.display = "none";
    document.getElementById("snake").style.top = "50%";
    document.getElementById("snake").style.left = "50%";
  }, 150);

  actionbarDown();
}

function openSnake() {
  document.getElementById("snake").style.display = "block";
  document.getElementById("maxApp").style.display = "block";

  setTimeout(() => {
    document.getElementById("snake").style.top = "50%";
    document.getElementById("snake").style.left = "50%";
    document.getElementById("snake").style.transform =
      "translate(-50%, -50%) scale(1)";
    document.getElementById("snake").style.visibility = "visible";
    document.getElementById("snake").style.opacity = "1";
    document.getElementById("snakeDockAppIco").style.opacity = "1";

    document.getElementById("Desktop").style.scale = "1";
    document.getElementById("Desktop").style.filter = "blur(0px)";
    document.getElementById("bgM").style.filter = "blur(0px)";
  }, 1);
  document.getElementById("snake").click();
  moveToFront(document.getElementById("snake"));
  actionbarDown();
}

// APPS - piano Game
function minPiano() {
  document.getElementById("piano").style.transition =
    "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s, left 0.3s";
  document.getElementById("piano").style.transform =
    "translate(-50%, 100%) scaleX(0)";
  document.getElementById("piano").style.visibility = "hidden";
  document.getElementById("piano").style.opacity = "0";
  document.getElementById("piano").style.left = "50%";

  setTimeout(() => {
    document.getElementById("piano").style.display = "none";
    document.getElementById("pianoockAppIco").style.opacity = "0.5";
    document.getElementById("piano").style.transition =
      "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s";
  }, 150);

  actionbarDown();
}

function closePiano() {
  document.getElementById("piano").style.transform =
    "translate(-50%, -50%) scale(0.75)";
  document.getElementById("piano").style.visibility = "hidden";
  document.getElementById("piano").style.opacity = "0";
  setTimeout(() => {
    document.getElementById("piano").style.display = "none";
    document.getElementById("piano").style.top = "50%";
    document.getElementById("piano").style.left = "50%";
  }, 150);

  actionbarDown();
}

function openPiano() {
  document.getElementById("piano").style.display = "block";
  document.getElementById("maxApp").style.display = "block";

  setTimeout(() => {
    document.getElementById("piano").style.top = "50%";
    document.getElementById("piano").style.left = "50%";
    document.getElementById("piano").style.transform =
      "translate(-50%, -50%) scale(1)";
    document.getElementById("piano").style.visibility = "visible";
    document.getElementById("piano").style.opacity = "1";
    document.getElementById("pianoockAppIco").style.opacity = "1";

    document.getElementById("Desktop").style.scale = "1";
    document.getElementById("Desktop").style.filter = "blur(0px)";
    document.getElementById("bgM").style.filter = "blur(0px)";
  }, 1);

  document.getElementById("piano").click();
  moveToFront(document.getElementById("piano"));
  actionbarDown();
}

// APPS - PDF
function minPdf() {
  document.getElementById("pdf").style.transition =
    "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s, left 0.3s";
  document.getElementById("pdf").style.transform =
    "translate(-50%, 100%) scaleX(0)";
  document.getElementById("pdf").style.visibility = "hidden";
  document.getElementById("pdf").style.opacity = "0";
  document.getElementById("pdf").style.left = "50%";

  setTimeout(() => {
    document.getElementById("pdf").style.display = "none";
    document.getElementById("pdfDockAppIco").style.opacity = "0.5";
    document.getElementById("pdf").style.transition =
      "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s";
  }, 150);

  actionbarDown();
}

function maxPdf() {
  if (document.getElementById("pdf").style.width == "100%") {
    document.getElementById("pdf").style.transition =
      "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s, left 0.3s, top 0.3s";
    document.getElementById("pdf").style.width = "95%";
    document.getElementById("pdf").style.height = "95%";
    document.getElementById("pdf").style.borderRadius = "10px";
    setTimeout(() => {
      document.getElementById("pdf").style.transition =
        "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s";
    }, 250);
  } else {
    document.getElementById("pdf").style.transition =
      "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s, left 0.3s, top 0.3s";
    document.getElementById("pdf").style.top = "50%";
    document.getElementById("pdf").style.left = "50%";
    document.getElementById("pdf").style.width = "100%";
    document.getElementById("pdf").style.height = "100%";
    document.getElementById("pdf").style.borderRadius = "0px";
    setTimeout(() => {
      document.getElementById("pdf").style.transition =
        "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s";
    }, 250);
  }
}

function closePdf() {
  document.getElementById("pdf").style.transform =
    "translate(-50%, -50%) scale(0.75)";
  document.getElementById("pdf").style.visibility = "hidden";
  document.getElementById("pdf").style.opacity = "0";
  document.getElementById("pdfDockAppIco").style.transform = "translateY(45px)";
  setTimeout(() => {
    document.getElementById("pdf").style.display = "none";
    document.getElementById("pdf").style.top = "50%";
    document.getElementById("pdf").style.left = "50%";
    document.getElementById("pdfDockAppIco").style.display = "none";
  }, 150);

  actionbarDown();
}

function openPdf() {
  document.getElementById("pdf").style.display = "block";
  document.getElementById("maxApp").style.display = "block";
  document.getElementById("pdfDockAppIco").style.display = "block";

  setTimeout(() => {
    document.getElementById("pdf").style.top = "50%";
    document.getElementById("pdf").style.left = "50%";
    document.getElementById("pdf").style.transform =
      "translate(-50%, -50%) scale(1)";
    document.getElementById("pdf").style.visibility = "visible";
    document.getElementById("pdf").style.opacity = "1";
    document.getElementById("pdfDockAppIco").style.opacity = "1";

    document.getElementById("Desktop").style.scale = "1";
    document.getElementById("Desktop").style.filter = "blur(0px)";
    document.getElementById("bgM").style.filter = "blur(0px)";
  }, 1);
  setTimeout(() => {
    document.getElementById("pdfDockAppIco").style.transform =
      "translateY(0px)";
  }, 150);
  document.getElementById("pdf").click();
  moveToFront(document.getElementById("pdf"));
  actionbarDown();
}

// APPS - Browser
function minBwr() {
  document.getElementById("Browser").style.transition =
    "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s, left 0.3s";
  document.getElementById("Browser").style.transform =
    "translate(-50%, 100%) scaleX(0)";
  document.getElementById("Browser").style.visibility = "hidden";
  document.getElementById("Browser").style.opacity = "0";
  document.getElementById("Browser").style.left = "50%";

  setTimeout(() => {
    document.getElementById("Browser").style.display = "none";
    document.getElementById("bwrDockAppIco").style.opacity = "0.5";
    document.getElementById("Browser").style.transition =
      "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s";
  }, 150);

  actionbarDown();
}

function maxBwr() {
  if (document.getElementById("Browser").style.width == "100%") {
    document.getElementById("Browser").style.transition =
      "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s, left 0.3s, top 0.3s";
    document.getElementById("Browser").style.width = "95%";
    document.getElementById("Browser").style.height = "95%";
    document.getElementById("Browser").style.borderRadius = "10px";
    setTimeout(() => {
      document.getElementById("Browser").style.transition =
        "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s";
    }, 250);
  } else {
    document.getElementById("Browser").style.transition =
      "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s, left 0.3s, top 0.3s";
    document.getElementById("Browser").style.top = "50%";
    document.getElementById("Browser").style.left = "50%";
    document.getElementById("Browser").style.width = "100%";
    document.getElementById("Browser").style.height = "100%";
    document.getElementById("Browser").style.borderRadius = "0px";
    setTimeout(() => {
      document.getElementById("Browser").style.transition =
        "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s";
    }, 250);
  }
}

function closeBwr() {
  document.getElementById("Browser").style.transform =
    "translate(-50%, -50%) scale(0.75)";
  document.getElementById("Browser").style.visibility = "hidden";
  document.getElementById("Browser").style.opacity = "0";
  setTimeout(() => {
    document.getElementById("Browser").style.display = "none";
    document.getElementById("Browser").style.top = "50%";
    document.getElementById("Browser").style.left = "50%";
  }, 150);
  actionbarDown();
}

function openBwr() {
  document.getElementById("Browser").style.display = "block";
  document.getElementById("maxApp").style.display = "block";

  setTimeout(() => {
    document.getElementById("Browser").style.top = "50%";
    document.getElementById("Browser").style.left = "50%";
    document.getElementById("Browser").style.transform =
      "translate(-50%, -50%) scale(1)";
    document.getElementById("Browser").style.visibility = "visible";
    document.getElementById("Browser").style.opacity = "1";
    document.getElementById("bwrDockAppIco").style.opacity = "1";

    document.getElementById("Desktop").style.scale = "1";
    document.getElementById("Desktop").style.filter = "blur(0px)";
    document.getElementById("bgM").style.filter = "blur(0px)";
  }, 1);

  document.getElementById("Browser").click();
  moveToFront(document.getElementById("Browser"));
  actionbarDown();
}


// APPS - Spreadsheet
function minSpr() {
  document.getElementById("Spreadsheet").style.transition =
    "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s, left 0.3s";
  document.getElementById("Spreadsheet").style.transform =
    "translate(-50%, 100%) scaleX(0)";
  document.getElementById("Spreadsheet").style.visibility = "hidden";
  document.getElementById("Spreadsheet").style.opacity = "0";
  document.getElementById("Spreadsheet").style.left = "50%";

  setTimeout(() => {
    document.getElementById("Spreadsheet").style.display = "none";
    document.getElementById("SheetDockAppIco").style.opacity = "0.5";
    document.getElementById("Spreadsheet").style.transition =
      "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s";
  }, 150);

  actionbarDown();
}

function maxSpr() {
  if (document.getElementById("Spreadsheet").style.width == "100%") {
    document.getElementById("Spreadsheet").style.transition =
      "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s, left 0.3s, top 0.3s";
    document.getElementById("Spreadsheet").style.width = "95%";
    document.getElementById("Spreadsheet").style.height = "95%";
    document.getElementById("Spreadsheet").style.borderRadius = "10px";
    setTimeout(() => {
      document.getElementById("Spreadsheet").style.transition =
        "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s";
    }, 250);
  } else {
    document.getElementById("Spreadsheet").style.transition =
      "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s, left 0.3s, top 0.3s";
    document.getElementById("Spreadsheet").style.top = "50%";
    document.getElementById("Spreadsheet").style.left = "50%";
    document.getElementById("Spreadsheet").style.width = "100%";
    document.getElementById("Spreadsheet").style.height = "100%";
    document.getElementById("Spreadsheet").style.borderRadius = "0px";
    setTimeout(() => {
      document.getElementById("Spreadsheet").style.transition =
        "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s";
    }, 250);
  }
}

function closeSpr() {
  document.getElementById("Spreadsheet").style.transform =
    "translate(-50%, -50%) scale(0.75)";
  document.getElementById("Spreadsheet").style.visibility = "hidden";
  document.getElementById("Spreadsheet").style.opacity = "0";
  document.getElementById("SheetDockAppIco").style.transform = "translateY(45px)";
  setTimeout(() => {
    document.getElementById("Spreadsheet").style.display = "none";
    document.getElementById("Spreadsheet").style.top = "50%";
    document.getElementById("Spreadsheet").style.left = "50%";
    document.getElementById("SheetDockAppIco").style.display = "none";
  }, 150);
  actionbarDown();
}

function openSpr() {
  document.getElementById("Spreadsheet").style.display = "block";
  document.getElementById("SheetDockAppIco").style.display = "block";
  document.getElementById("maxApp").style.display = "block";

  setTimeout(() => {
    document.getElementById("Spreadsheet").style.top = "50%";
    document.getElementById("Spreadsheet").style.left = "50%";
    document.getElementById("Spreadsheet").style.transform =
      "translate(-50%, -50%) scale(1)";
    document.getElementById("Spreadsheet").style.visibility = "visible";
    document.getElementById("Spreadsheet").style.opacity = "1";
    document.getElementById("SheetDockAppIco").style.opacity = "1";

    document.getElementById("Desktop").style.scale = "1";
    document.getElementById("Desktop").style.filter = "blur(0px)";
    document.getElementById("bgM").style.filter = "blur(0px)";
  }, 1);
  setTimeout(() => {
    document.getElementById("SheetDockAppIco").style.transform =
      "translateY(0px)";
  }, 150);

  document.getElementById("Spreadsheet").click();
  moveToFront(document.getElementById("Spreadsheet"));
  actionbarDown();
}

// APPS - Store
function minStore() {
  document.getElementById("Store").style.transition =
    "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s, left 0.3s";
  document.getElementById("Store").style.transform =
    "translate(-50%, 100%) scaleX(0)";
  document.getElementById("Store").style.visibility = "hidden";
  document.getElementById("Store").style.opacity = "0";
  document.getElementById("Store").style.left = "50%";

  setTimeout(() => {
    document.getElementById("Store").style.display = "none";
    document.getElementById("StoreDockAppIco").style.opacity = "0.5";
    document.getElementById("Store").style.transition =
      "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s";
  }, 150);

  actionbarDown();
}

function maxStore() {
  if (document.getElementById("Store").style.width == "100%") {
    document.getElementById("Store").style.transition =
      "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s, left 0.3s, top 0.3s";
    document.getElementById("Store").style.width = "95%";
    document.getElementById("Store").style.height = "95%";
    document.getElementById("Store").style.borderRadius = "10px";
    setTimeout(() => {
      document.getElementById("Store").style.transition =
        "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s";
    }, 250);
  } else {
    document.getElementById("Store").style.transition =
      "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s, left 0.3s, top 0.3s";
    document.getElementById("Store").style.top = "50%";
    document.getElementById("Store").style.left = "50%";
    document.getElementById("Store").style.width = "100%";
    document.getElementById("Store").style.height = "100%";
    document.getElementById("Store").style.borderRadius = "0px";
    setTimeout(() => {
      document.getElementById("Store").style.transition =
        "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s";
    }, 250);
  }
}

function closeStore() {
  document.getElementById("Store").style.transform =
    "translate(-50%, -50%) scale(0.75)";
  document.getElementById("Store").style.visibility = "hidden";
  document.getElementById("Store").style.opacity = "0";
  document.getElementById("StoreDockAppIco").style.transform = "translateY(45px)";
  setTimeout(() => {
    document.getElementById("Store").style.display = "none";
    document.getElementById("Store").style.top = "50%";
    document.getElementById("Store").style.left = "50%";
    document.getElementById("StoreDockAppIco").style.display = "none";
  }, 150);
  actionbarDown();
}

function openStore() {
  document.getElementById("Store").style.display = "block";
  document.getElementById("maxApp").style.display = "block";
  document.getElementById("StoreDockAppIco").style.display = "block";

  setTimeout(() => {
    document.getElementById("Store").style.top = "50%";
    document.getElementById("Store").style.left = "50%";
    document.getElementById("Store").style.transform =
      "translate(-50%, -50%) scale(1)";
    document.getElementById("Store").style.visibility = "visible";
    document.getElementById("Store").style.opacity = "1";
    document.getElementById("StoreDockAppIco").style.opacity = "1";

    document.getElementById("Desktop").style.scale = "1";
    document.getElementById("Desktop").style.filter = "blur(0px)";
    document.getElementById("bgM").style.filter = "blur(0px)";
  }, 1);
  setTimeout(() => {
    document.getElementById("StoreDockAppIco").style.transform =
      "translateY(0px)";
  }, 150);
  document.getElementById("Store").click();
  moveToFront(document.getElementById("Store"));
  actionbarDown();
}

// APPS - Player
function minPla() {
  document.getElementById("Player").style.transition =
    "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s, left 0.3s";
  document.getElementById("Player").style.transform =
    "translate(-50%, 100%) scaleX(0)";
  document.getElementById("Player").style.visibility = "hidden";
  document.getElementById("Player").style.opacity = "0";
  document.getElementById("Player").style.left = "50%";

  setTimeout(() => {

    document.getElementById("Player").style.display = "none";
    document.getElementById("playerDockAppIco").style.opacity = "0.5";
    document.getElementById("Player").style.transition =
      "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s";
  }, 150);

  actionbarDown();
}

function maxPla() {
  if (document.getElementById("Player").style.width == "100%") {
    document.getElementById("Player").style.transition =
      "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s, left 0.3s, top 0.3s";
    document.getElementById("Player").style.width = "95%";
    document.getElementById("Player").style.height = "95%";
    document.getElementById("Player").style.borderRadius = "10px";
    setTimeout(() => {
      document.getElementById("Player").style.transition =
        "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s";
    }, 250);
  } else {
    document.getElementById("Player").style.transition =
      "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s, left 0.3s, top 0.3s";
    document.getElementById("Player").style.top = "50%";
    document.getElementById("Player").style.left = "50%";
    document.getElementById("Player").style.width = "100%";
    document.getElementById("Player").style.height = "100%";
    document.getElementById("Player").style.borderRadius = "0px";
    setTimeout(() => {
      document.getElementById("Player").style.transition =
        "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s";
    }, 250);
  }
}

function closePla() {
  document.getElementById("Player").style.transform =
    "translate(-50%, -50%) scale(0.75)";
  document.getElementById("Player").style.visibility = "hidden";
  document.getElementById("Player").style.opacity = "0";
  document.getElementById("playerDockAppIco").style.transform = "translateY(45px)";
  setTimeout(() => {
    document.getElementById("Player").style.display = "none";
    document.getElementById("Player").style.top = "50%";
    document.getElementById("Player").style.left = "50%";
    document.getElementById("playerDockAppIco").style.display = "none";
  }, 150);
  actionbarDown();
}

function openPla() {
  document.getElementById("Player").style.display = "block";
  document.getElementById("maxApp").style.display = "block";
  document.getElementById("playerDockAppIco").style.display = "block";

  setTimeout(() => {
    document.getElementById("Player").style.top = "50%";
    document.getElementById("Player").style.left = "50%";
    document.getElementById("Player").style.transform =
      "translate(-50%, -50%) scale(1)";
    document.getElementById("Player").style.visibility = "visible";
    document.getElementById("Player").style.opacity = "1";
    document.getElementById("playerDockAppIco").style.opacity = "1";

    document.getElementById("Desktop").style.scale = "1";
    document.getElementById("Desktop").style.filter = "blur(0px)";
    document.getElementById("bgM").style.filter = "blur(0px)";
  }, 1);
  setTimeout(() => {
    document.getElementById("playerDockAppIco").style.transform =
      "translateY(0px)";
  }, 150);
  document.getElementById("Player").click();
  moveToFront(document.getElementById("Player"));
  actionbarDown();
}

// APPS - Gallery
function minGal() {
  document.getElementById("Gallery").style.transition =
    "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s, left 0.3s";
  document.getElementById("Gallery").style.transform =
    "translate(-50%, 100%) scaleX(0)";
  document.getElementById("Gallery").style.visibility = "hidden";
  document.getElementById("Gallery").style.opacity = "0";
  document.getElementById("Gallery").style.left = "50%";

  setTimeout(() => {
    document.getElementById("Gallery").style.display = "none";
    document.getElementById("galDockAppIco").style.opacity = "0.5";
    document.getElementById("Gallery").style.transition =
      "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s";
  }, 150);

  actionbarDown();
}

function maxGal() {
  if (document.getElementById("Gallery").style.width == "100%") {
    document.getElementById("Gallery").style.transition =
      "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s, left 0.3s, top 0.3s";
    document.getElementById("Gallery").style.width = "95%";
    document.getElementById("Gallery").style.height = "95%";
    document.getElementById("Gallery").style.borderRadius = "10px";
    setTimeout(() => {
      document.getElementById("Gallery").style.transition =
        "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s";
    }, 250);
  } else {
    document.getElementById("Gallery").style.transition =
      "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s, left 0.3s, top 0.3s";
    document.getElementById("Gallery").style.top = "50%";
    document.getElementById("Gallery").style.left = "50%";
    document.getElementById("Gallery").style.width = "100%";
    document.getElementById("Gallery").style.height = "100%";
    document.getElementById("Gallery").style.borderRadius = "0px";
    setTimeout(() => {
      document.getElementById("Gallery").style.transition =
        "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s";
    }, 250);
  }
}

function closeGal() {
  document.getElementById("Gallery").style.transform =
    "translate(-50%, -50%) scale(0.75)";
  document.getElementById("Gallery").style.visibility = "hidden";
  document.getElementById("Gallery").style.opacity = "0";
  document.getElementById("galDockAppIco").style.transform = "translateY(45px)";
  setTimeout(() => {
    document.getElementById("Gallery").style.display = "none";
    document.getElementById("Gallery").style.top = "50%";
    document.getElementById("Gallery").style.left = "50%";
    document.getElementById("galDockAppIco").style.display = "none";
  }, 150);
  actionbarDown();
}

function openGal() {
  document.getElementById("Gallery").style.display = "block";
  document.getElementById("maxApp").style.display = "block";
  document.getElementById("galDockAppIco").style.display = "block";

  setTimeout(() => {
    document.getElementById("Gallery").style.top = "50%";
    document.getElementById("Gallery").style.left = "50%";
    document.getElementById("Gallery").style.transform =
      "translate(-50%, -50%) scale(1)";
    document.getElementById("Gallery").style.visibility = "visible";
    document.getElementById("Gallery").style.opacity = "1";
    document.getElementById("galDockAppIco").style.opacity = "1";

    document.getElementById("Desktop").style.scale = "1";
    document.getElementById("Desktop").style.filter = "blur(0px)";
    document.getElementById("bgM").style.filter = "blur(0px)";
  }, 1);
  setTimeout(() => {
    document.getElementById("galDockAppIco").style.transform =
      "translateY(0px)";
  }, 150);
  document.getElementById("Gallery").click();
  moveToFront(document.getElementById("Gallery"));
  actionbarDown();
}

// APPS - Camera
function minCam() {
  document.getElementById("Camera").style.transition =
    "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s, left 0.3s";
  document.getElementById("Camera").style.transform =
    "translate(-50%, 100%) scaleX(0)";
  document.getElementById("Camera").style.visibility = "hidden";
  document.getElementById("Camera").style.opacity = "0";
  document.getElementById("Camera").style.left = "50%";

  setTimeout(() => {
    document.getElementById("Camera").style.display = "none";
    document.getElementById("CamDockAppIco").style.opacity = "0.5";
    document.getElementById("Camera").style.transition =
      "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s";
  }, 150);

  actionbarDown();
}

function maxCam() {
  if (document.getElementById("Camera").style.width == "100%") {
    document.getElementById("Camera").style.transition =
      "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s, left 0.3s, top 0.3s";
    document.getElementById("Camera").style.width = "95%";
    document.getElementById("Camera").style.height = "95%";
    document.getElementById("Camera").style.borderRadius = "10px";
    setTimeout(() => {
      document.getElementById("Camera").style.transition =
        "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s";
    }, 250);
  } else {
    document.getElementById("Camera").style.transition =
      "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s, left 0.3s, top 0.3s";
    document.getElementById("Camera").style.top = "50%";
    document.getElementById("Camera").style.left = "50%";
    document.getElementById("Camera").style.width = "100%";
    document.getElementById("Camera").style.height = "100%";
    document.getElementById("Camera").style.borderRadius = "0px";
    setTimeout(() => {
      document.getElementById("Camera").style.transition =
        "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s";
    }, 250);
  }
}

function closeCam() {
  document.getElementById("Camera").style.transform =
    "translate(-50%, -50%) scale(0.75)";
  document.getElementById("Camera").style.visibility = "hidden";
  document.getElementById("Camera").style.opacity = "0";
  document.getElementById("CamIframe").src = void 0;
  document.getElementById("CamDockAppIco").style.transform = "translateY(45px)";
  setTimeout(() => {
    document.getElementById("Camera").style.display = "none";
    document.getElementById("Camera").style.top = "50%";
    document.getElementById("Camera").style.left = "50%";
    document.getElementById("CamDockAppIco").style.display = "none";
  }, 150);

  actionbarDown();
}

function openCam() {
  document.getElementById("Camera").style.display = "block";
  document.getElementById("maxApp").style.display = "block";
  document.getElementById("CamDockAppIco").style.display = "block";

  setTimeout(() => {
    document.getElementById("Camera").style.top = "50%";
    document.getElementById("Camera").style.left = "50%";
    document.getElementById("Camera").style.transform =
      "translate(-50%, -50%) scale(1)";
    document.getElementById("Camera").style.visibility = "visible";
    document.getElementById("Camera").style.opacity = "1";
    document.getElementById("CamDockAppIco").style.opacity = "1";

    document.getElementById("Desktop").style.scale = "1";
    document.getElementById("Desktop").style.filter = "blur(0px)";
    document.getElementById("bgM").style.filter = "blur(0px)";
    document.getElementById("CamIframe").src =
      "../Global/Apps/Camera/index.html";
  }, 1);
  setTimeout(() => {
    document.getElementById("CamDockAppIco").style.transform =
      "translateY(0px)";
  }, 150);

  document.getElementById("Camera").click();
  moveToFront(document.getElementById("Camera"));
  actionbarDown();
}

// APPS - Document
function minDoc() {
  document.getElementById("Document").style.transition =
    "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s, left 0.3s";
  document.getElementById("Document").style.transform =
    "translate(-50%, 100%) scaleX(0)";
  document.getElementById("Document").style.visibility = "hidden";
  document.getElementById("Document").style.opacity = "0";
  document.getElementById("Document").style.left = "50%";

  setTimeout(() => {
    document.getElementById("Document").style.display = "none";
    document.getElementById("DocDockAppIco").style.opacity = "0.5";
    document.getElementById("Document").style.transition =
      "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s";
  }, 150);

  actionbarDown();
}

function maxDoc() {
  if (document.getElementById("Document").style.width == "100%") {
    document.getElementById("Document").style.transition =
      "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s, left 0.3s, top 0.3s";
    document.getElementById("Document").style.width = "95%";
    document.getElementById("Document").style.height = "95%";
    document.getElementById("Document").style.borderRadius = "10px";
    setTimeout(() => {
      document.getElementById("Document").style.transition =
        "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s";
    }, 250);
  } else {
    document.getElementById("Document").style.transition =
      "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s, left 0.3s, top 0.3s";
    document.getElementById("Document").style.top = "50%";
    document.getElementById("Document").style.left = "50%";
    document.getElementById("Document").style.width = "100%";
    document.getElementById("Document").style.height = "100%";
    document.getElementById("Document").style.borderRadius = "0px";
    setTimeout(() => {
      document.getElementById("Document").style.transition =
        "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s";
    }, 250);
  }
}

function closeDoc() {
  document.getElementById("Document").style.transform =
    "translate(-50%, -50%) scale(0.75)";
  document.getElementById("Document").style.visibility = "hidden";
  document.getElementById("Document").style.opacity = "0";
  document.getElementById("DocDockAppIco").style.transform = "translateY(45px)";
  setTimeout(() => {
    document.getElementById("Document").style.display = "none";

    document.getElementById("Document").style.top = "50%";
    document.getElementById("Document").style.left = "50%";
    document.getElementById("DocDockAppIco").style.display = "none";
  }, 150);

  actionbarDown();
}

function openDoc() {
  document.getElementById("Document").style.display = "block";
  document.getElementById("maxApp").style.display = "block";
  document.getElementById("DocDockAppIco").style.display = "block";

  setTimeout(() => {
    document.getElementById("Document").style.top = "50%";
    document.getElementById("Document").style.left = "50%";
    document.getElementById("Document").style.transform =
      "translate(-50%, -50%) scale(1)";
    document.getElementById("Document").style.visibility = "visible";
    document.getElementById("Document").style.opacity = "1";
    document.getElementById("DocDockAppIco").style.opacity = "1";

    document.getElementById("Desktop").style.scale = "1";
    document.getElementById("Desktop").style.filter = "blur(0px)";
    document.getElementById("bgM").style.filter = "blur(0px)";
  }, 1);
  setTimeout(() => {
    document.getElementById("DocDockAppIco").style.transform =
      "translateY(0px)";
  }, 150);

  document.getElementById("Document").click();
  moveToFront(document.getElementById("Document"));
  actionbarDown();
}

// APPS - Image Ediotor
function minIed() {
  document.getElementById("IEditor").style.transition =
    "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s, left 0.3s";
  document.getElementById("IEditor").style.transform =
    "translate(-50%, 100%) scaleX(0)";
  document.getElementById("IEditor").style.visibility = "hidden";
  document.getElementById("IEditor").style.opacity = "0";
  document.getElementById("IEditor").style.left = "50%";

  setTimeout(() => {
    document.getElementById("IEditor").style.display = "none";
    document.getElementById("EIeditDockAppIco").style.opacity = "0.5";
    document.getElementById("IEditor").style.transition =
      "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s";
  }, 150);

  actionbarDown();
}

function maxIed() {
  if (document.getElementById("IEditor").style.width == "100%") {
    document.getElementById("IEditor").style.transition =
      "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s, left 0.3s, top 0.3s";
    document.getElementById("IEditor").style.width = "95%";
    document.getElementById("IEditor").style.height = "95%";
    document.getElementById("IEditor").style.borderRadius = "10px";
    setTimeout(() => {
      document.getElementById("IEditor").style.transition =
        "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s";
    }, 250);
  } else {
    document.getElementById("IEditor").style.transition =
      "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s, left 0.3s, top 0.3s";
    document.getElementById("IEditor").style.top = "50%";
    document.getElementById("IEditor").style.left = "50%";
    document.getElementById("IEditor").style.width = "100%";
    document.getElementById("IEditor").style.height = "100%";
    document.getElementById("IEditor").style.borderRadius = "0px";
    setTimeout(() => {
      document.getElementById("IEditor").style.transition =
        "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s";
    }, 250);
  }
}

function closeIed() {
  document.getElementById("IEditor").style.transform =
    "translate(-50%, -50%) scale(0.75)";
  document.getElementById("IEditor").style.visibility = "hidden";
  document.getElementById("IEditor").style.opacity = "0";
  document.getElementById("EIeditDockAppIco").style.transform =
    "translateY(45px)";

  setTimeout(() => {
    document.getElementById("IEditor").style.display = "none";
    document.getElementById("IEditor").style.top = "50%";
    document.getElementById("IEditor").style.left = "50%";
    document.getElementById("EIeditDockAppIco").style.display = "none";
  }, 150);

  actionbarDown();
}

function openIed() {
  document.getElementById("IEditor").style.display = "block";
  document.getElementById("maxApp").style.display = "block";
  document.getElementById("EIeditDockAppIco").style.display = "block";

  setTimeout(() => {
    document.getElementById("IEditor").style.top = "50%";
    document.getElementById("IEditor").style.left = "50%";
    document.getElementById("IEditor").style.transform =
      "translate(-50%, -50%) scale(1)";
    document.getElementById("IEditor").style.visibility = "visible";
    document.getElementById("IEditor").style.opacity = "1";
    document.getElementById("EIeditDockAppIco").style.opacity = "1";

    document.getElementById("Desktop").style.scale = "1";
    document.getElementById("Desktop").style.filter = "blur(0px)";
    document.getElementById("bgM").style.filter = "blur(0px)";
  }, 1);
  setTimeout(() => {
    document.getElementById("EIeditDockAppIco").style.transform =
      "translateY(0px)";
  }, 150);

  document.getElementById("IEditor").click();
  moveToFront(document.getElementById("IEditor"));
  actionbarDown();
}

// APPS - Scramble
function minScr() {
  document.getElementById("Scramble").style.transition =
    "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s, left 0.3s";
  document.getElementById("Scramble").style.transform =
    "translate(-50%, 100%) scaleX(0)";
  document.getElementById("Scramble").style.visibility = "hidden";
  document.getElementById("Scramble").style.opacity = "0";
  document.getElementById("Scramble").style.left = "50%";

  setTimeout(() => {
    document.getElementById("Scramble").style.display = "none";
    document.getElementById("ScrDockAppIco").style.opacity = "0.5";
    document.getElementById("Scramble").style.transition =
      "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s";
  }, 150);

  actionbarDown();
}

function closeScr() {
  document.getElementById("Scramble").style.transform =
    "translate(-50%, -50%) scale(0.75)";
  document.getElementById("Scramble").style.visibility = "hidden";
  document.getElementById("Scramble").style.opacity = "0";
  document.getElementById("ScrDockAppIco").style.transform = "translateY(45px)";

  setTimeout(() => {
    document.getElementById("Scramble").style.display = "none";
    document.getElementById("Scramble").style.top = "50%";
    document.getElementById("Scramble").style.left = "50%";
    document.getElementById("ScrDockAppIco").style.display = "none";
  }, 150);

  actionbarDown();
}

function openScr() {
  document.getElementById("Scramble").style.display = "block";
  document.getElementById("maxApp").style.display = "block";
  document.getElementById("ScrDockAppIco").style.display = "block";

  setTimeout(() => {
    document.getElementById("Scramble").style.top = "50%";
    document.getElementById("Scramble").style.left = "50%";
    document.getElementById("Scramble").style.transform =
      "translate(-50%, -50%) scale(1)";
    document.getElementById("Scramble").style.visibility = "visible";
    document.getElementById("Scramble").style.opacity = "1";
    document.getElementById("ScrDockAppIco").style.opacity = "1";

    document.getElementById("Desktop").style.scale = "1";
    document.getElementById("Desktop").style.filter = "blur(0px)";
    document.getElementById("bgM").style.filter = "blur(0px)";
  }, 1);
  setTimeout(() => {
    document.getElementById("ScrDockAppIco").style.transform =
      "translateY(0px)";
  }, 150);

  document.getElementById("Scramble").click();
  moveToFront(document.getElementById("Scramble"));
  actionbarDown();
}

// APPS - games
function closeGames() {
  document.getElementById("games").style.transform =
    "translate(-50%, -50%) scale(0.75)";
  document.getElementById("games").style.visibility = "hidden";
  document.getElementById("games").style.opacity = "0";
  setTimeout(() => {
    document.getElementById("games").style.display = "none";
    document.getElementById("games").style.top = "50%";
    document.getElementById("games").style.left = "50%";
  }, 150);

  actionbarDown();
}

function openGames() {
  document.getElementById("games").style.display = "block";
  document.getElementById("maxApp").style.display = "block";

  setTimeout(() => {
    document.getElementById("games").style.top = "50%";
    document.getElementById("games").style.left = "50%";
    document.getElementById("games").style.transform =
      "translate(-50%, -50%) scale(1)";
    document.getElementById("games").style.visibility = "visible";
    document.getElementById("games").style.opacity = "1";

    document.getElementById("Desktop").style.scale = "1";
    document.getElementById("Desktop").style.filter = "blur(0px)";
    document.getElementById("bgM").style.filter = "blur(0px)";
  }, 1);

  actionbarDown();
}

// APPS - About
function closeAbout() {
  document.getElementById("AboutApp").style.transform =
    "translate(-50%, -50%) scale(0.75)";
  document.getElementById("AboutApp").style.visibility = "hidden";
  document.getElementById("AboutApp").style.opacity = "0";
  document.getElementById("aboutDockAppIco").style.transform =
    "translateY(45px)";
  setTimeout(() => {
    document.getElementById("AboutApp").style.display = "none";
    document.getElementById("AboutApp").style.top = "50%";
    document.getElementById("AboutApp").style.left = "50%";
    document.getElementById("aboutDockAppIco").style.display = "none";
  }, 150);

  actionbarDown();
}

function openAbout() {
  document.getElementById("AboutApp").style.display = "block";
  document.getElementById("maxApp").style.display = "block";
  document.getElementById("aboutDockAppIco").style.display = "block";

  setTimeout(() => {
    document.getElementById("AboutApp").style.top = "50%";
    document.getElementById("AboutApp").style.left = "50%";
    document.getElementById("AboutApp").style.transform =
      "translate(-50%, -50%) scale(1)";
    document.getElementById("AboutApp").style.visibility = "visible";
    document.getElementById("AboutApp").style.opacity = "1";

    document.getElementById("Desktop").style.scale = "1";
    document.getElementById("Desktop").style.filter = "blur(0px)";
    document.getElementById("bgM").style.filter = "blur(0px)";
  }, 1);
  setTimeout(() => {
    document.getElementById("aboutDockAppIco").style.transform =
      "translateY(0px)";
  }, 150);

  document.getElementById("AboutApp").click();
  moveToFront(document.getElementById("AboutApp"));
  actionbarDown();
}

// APPS - Updates
function closeUpdates() {
  document.getElementById("UpdateApp").style.transform =
    "translate(-50%, -50%) scale(0.75)";
  document.getElementById("UpdateApp").style.visibility = "hidden";
  document.getElementById("UpdateApp").style.opacity = "0";
  document.getElementById("ChangeDockAppIco").style.transform =
    "translateY(45px)";

  setTimeout(() => {
    document.getElementById("UpdateApp").style.display = "none";
    document.getElementById("UpdateApp").style.top = "50%";
    document.getElementById("UpdateApp").style.left = "50%";
    document.getElementById("ChangeDockAppIco").style.display = "none";
  }, 150);

  actionbarDown();
}

function openUpdates() {
  document.getElementById("UpdateApp").style.display = "block";
  document.getElementById("maxApp").style.display = "block";
  document.getElementById("ChangeDockAppIco").style.display = "block";

  setTimeout(() => {
    document.getElementById("UpdateApp").style.top = "50%";
    document.getElementById("UpdateApp").style.left = "50%";
    document.getElementById("UpdateApp").style.transform =
      "translate(-50%, -50%) scale(1)";
    document.getElementById("UpdateApp").style.visibility = "visible";
    document.getElementById("UpdateApp").style.opacity = "1";

    document.getElementById("Desktop").style.scale = "1";
    document.getElementById("Desktop").style.filter = "blur(0px)";
    document.getElementById("bgM").style.filter = "blur(0px)";
  }, 1);
  setTimeout(() => {
    document.getElementById("ChangeDockAppIco").style.transform =
      "translateY(0px)";
  }, 150);

  document.getElementById("UpdateApp").click();
  moveToFront(document.getElementById("UpdateApp"));
  actionbarDown();
}


dragElement(document.getElementById("files"));
dragElement(document.getElementById("Gallery"));
dragElement(document.getElementById("Player"));
dragElement(document.getElementById("AboutApp"));
dragElement(document.getElementById("UpdateApp"));
dragElement(document.getElementById("calculator"));
dragElement(document.getElementById("Tasks"));
dragElement(document.getElementById("Clock"));
dragElement(document.getElementById("calendar"));
dragElement(document.getElementById("paint"));
dragElement(document.getElementById("notes"));
dragElement(document.getElementById("pdf"));
dragElement(document.getElementById("QrApp"));
dragElement(document.getElementById("snake"));
dragElement(document.getElementById("piano"));
dragElement(document.getElementById("Scramble"));
dragElement(document.getElementById("IEditor"));
dragElement(document.getElementById("Browser"));
dragElement(document.getElementById("Spreadsheet"));
dragElement(document.getElementById("Store"));
dragElement(document.getElementById("Camera"));
dragElement(document.getElementById("Document"));
dragElement(document.getElementById("games"));
dragElement(document.getElementById("ticTacToe"));
dragElement(document.getElementById("myUserSecurity"));

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

document.getElementById("files").classList.add("apps");
document.getElementById("AboutApp").classList.add("apps");
document.getElementById("UpdateApp").classList.add("apps");
document.getElementById("Tasks").classList.add("apps");
document.getElementById("Clock").classList.add("apps");
document.getElementById("calculator").classList.add("apps");
document.getElementById("calendar").classList.add("apps");
document.getElementById("paint").classList.add("apps");
document.getElementById("notes").classList.add("apps");
document.getElementById("pdf").classList.add("apps");
document.getElementById("QrApp").classList.add("apps");
document.getElementById("snake").classList.add("apps");
document.getElementById("piano").classList.add("apps");
document.getElementById("Scramble").classList.add("apps");
document.getElementById("IEditor").classList.add("apps");
document.getElementById("Browser").classList.add("apps");
document.getElementById("Spreadsheet").classList.add("apps");
document.getElementById("Store").classList.add("apps");
document.getElementById("Camera").classList.add("apps");
document.getElementById("Document").classList.add("apps");
document.getElementById("Gallery").classList.add("apps");
document.getElementById("Player").classList.add("apps");
document.getElementById("games").classList.add("apps");

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

const webAppStr = localStorage.getItem('webApps');

if (webAppStr) {
  const webApps = JSON.parse(webAppStr);

  if (webApps.photopea) {
   document.getElementById('photopeaAppListM').style.display = 'block'
   document.getElementById("photopeaIframe").src = "https://www.photopea.com/"
  } else {
    document.getElementById('photopeaAppListM').style.display = 'none'
    document.getElementById("photopeaIframe").src = null
  }

  if (webApps.copilot) {
    document.getElementById('copilotAppListM').style.display = 'block'
    document.getElementById("coplotIframe").src = "https://www.bing.com/search?q=Bing+AI&showconv=1&FORM=hpcodx"
   } else {
     document.getElementById('copilotAppListM').style.display = 'none'
     document.getElementById("coplotIframe").src = null
   }

   if (webApps.spotify) {
    document.getElementById('spotifyAppListM').style.display = 'block'
    document.getElementById("spotifyIframe").src = "https://next13-spotify.vercel.app/"
   } else {
     document.getElementById('spotifyAppListM').style.display = 'none'
     document.getElementById("spotifyIframe").src = null
   }
   if (webApps.wiki) {
    document.getElementById('wikipediaAppListM').style.display = 'block'
    document.getElementById("wikipediaIframe").src = "https://www.wikipedia.org/"
   } else {
     document.getElementById('wikipediaAppListM').style.display = 'none'
     document.getElementById("wikipediaIframe").src = null
   }
   if (webApps.winR) {
    document.getElementById('winReplicasAppListM').style.display = 'block'
    document.getElementById("winReplicasIframe").src = "https://navaneet239.github.io/Windows-replica/index-rgos.html"
   } else {
     document.getElementById('winReplicasAppListM').style.display = 'none'
     document.getElementById("winReplicasIframe").src = null
   }
   if (webApps.EvIo) {
    document.getElementById('evIOAppListM').style.display = 'block'
    document.getElementById("evIOIframe").src = "https://ev.io/"
   } else {
     document.getElementById('evIOAppListM').style.display = 'none'
     document.getElementById("evIOIframe").src = null
   }
   if (webApps.Bird) {
    document.getElementById('flappyBirdAppListM').style.display = 'block'
    document.getElementById("flappyBirdIframe").src = "https://flappybird.io/"
   } else {
     document.getElementById('flappyBirdAppListM').style.display = 'none'
     document.getElementById("flappyBirdIframe").src = null
   }
   if (webApps.Mario) {
    document.getElementById('marioAppListM').style.display = 'block'
    document.getElementById("marioIframe").src = "https://supermario-game.com/"
   } else {
     document.getElementById('marioAppListM').style.display = 'none'
     document.getElementById("marioIframe").src = null
   }
   if (webApps.MC) {
    document.getElementById('minecraftAppListM').style.display = 'block'
    document.getElementById("minecraftIframe").src = "../Global/Apps/Minecraft/EaglercraftX_1.8_u32_Offline_Signed.html"
   } else {
     document.getElementById('minecraftAppListM').style.display = 'none'
     document.getElementById("minecraftIframe").src = null
   }
   if (webApps.Solt) {
    document.getElementById('solitaireAppListM').style.display = 'block'
    document.getElementById("solitaireIframe").src = "https://solitaire.online/"
   } else {
     document.getElementById('solitaireAppListM').style.display = 'none'
     document.getElementById("solitaireIframe").src = null
   }
   if (webApps.PaperIo) {
    document.getElementById('paperIoAppListM').style.display = 'block'
    document.getElementById("paperIoIframe").src = "https://paper-io.com/"
   } else {
     document.getElementById('paperIoAppListM').style.display = 'none'
     document.getElementById("paperIoIframe").src = null
   }
}