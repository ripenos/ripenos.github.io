// APPS - Files
function minFiles() {
  document.getElementById("files").style.transition =
    "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s,  height 0.2s, left 0.2s";
  document.getElementById("files").style.transform =
    "translate(-50%, 100%) scale(0)";
  document.getElementById("files").style.visibility = "hidden";
  document.getElementById("files").style.opacity = "0";
  document.getElementById("files").style.left = "50%";
  document.getElementById("filDockAppIco").classList.remove('taskbarbuttonActive');

  setTimeout(() => {
    document.getElementById("files").style.display = "none";
    document.getElementById("files").style.transition =
      "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s,  height 0.2s";
  }, 150);
}

function maxFiles() {
  if (document.getElementById("files").style.width == "100%") {
    document.getElementById("files").style.transition =
      "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s,  height 0.2s, left 0.2s, top 0.2s";
    document.getElementById("files").style.width = "80%";
    document.getElementById("files").style.height = "80%";
    document.getElementById("files").style.borderRadius = "10px";
    setTimeout(() => {
      document.getElementById("files").style.transition =
        "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s";
    }, 250);
  } else {
    document.getElementById("files").style.transition =
      "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s,  height 0.2s, left 0.2s, top 0.2s";
    document.getElementById("files").style.top = "50%";
    document.getElementById("files").style.left = "50%";
    document.getElementById("files").style.width = "100%";
    document.getElementById("files").style.height = "100%";
    document.getElementById("files").style.borderRadius = "0px";
    setTimeout(() => {
      document.getElementById("files").style.transition =
        "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s";
    }, 250);
  }
}

function closeFiles() {
  document.getElementById("files").style.transform =
    "translate(-50%, -50%) scale(0)";
  document.getElementById("files").style.visibility = "hidden";
  document.getElementById("files").style.opacity = "0";
  document.getElementById("filDockAppIco").classList.remove('taskbarbuttonActive');
  setTimeout(() => {
    document.getElementById("files").style.display = "none";
    document.getElementById("files").style.top = "50%";
    document.getElementById("files").style.left = "50%";
  }, 150);
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
    document.getElementById("filDockAppIco").classList.add('taskbarbuttonActive');
  }, 1);

  document.getElementById("files").click();
  moveToFront(document.getElementById("files"));
}

// APPS - Clock
function minClock() {
  document.getElementById("Clock").style.transition =
    "transform 0.5s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s, left 0.3s";
  document.getElementById("Clock").style.transform =
    "translate(-50%, 100%) scale(0)";
  document.getElementById("Clock").style.left = "50%";

  setTimeout(() => {
    document.getElementById("Clock").style.display = "none";
    document.getElementById("clockDockAppIco").classList.remove('taskbarbuttonActive');
    document.getElementById("Clock").style.transition =
      "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s";
  }, 150);
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
    document.getElementById("clockDockAppIco").classList.remove('taskbarbuttonActive');
  }, 150);
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
      document.getElementById("clockDockAppIco").classList.add('taskbarbuttonActive');
  }, 150);
  document.getElementById("Clock").click();
  moveToFront(document.getElementById("Clock"));
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
    document.getElementById("tasksDockAppIco").classList.remove('taskbarbuttonActive');
    document.getElementById("Tasks").style.transition =
      "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s";
  }, 150);
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
    document.getElementById("tasksDockAppIco").classList.remove('taskbarbuttonActive');
    document.getElementById("tasksDockAppIco").style.display = "none";
  }, 150);
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
      document.getElementById("tasksDockAppIco").classList.add('taskbarbuttonActive');
  }, 150);
  document.getElementById("Tasks").click();
  moveToFront(document.getElementById("Tasks"));
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
    document.getElementById("SheetDockAppIco").classList.remove('taskbarbuttonActive');
    document.getElementById("Spreadsheet").style.transition =
      "transform 0.3s, opacity 0.3s , visibility 0.3s, border-radius 0.3s,  width 0.3s,  height 0.3s";
  }, 150);
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
    document.getElementById("SheetDockAppIco").classList.remove('taskbarbuttonActive');
    document.getElementById("SheetDockAppIco").style.display = "none";
  }, 150);
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
      document.getElementById("SheetDockAppIco").classList.add('taskbarbuttonActive');
  }, 150);

  document.getElementById("Spreadsheet").click();
  moveToFront(document.getElementById("Spreadsheet"));
}

// APPS - CMD

function openCmd() {
  document.getElementById("cmd").style.display = "block";
  document.getElementById("maxApp").style.display = "block";
  setTimeout(() => {
    document.getElementById("cmd").style.top = "50%";
    document.getElementById("cmd").style.left = "50%";
    document.getElementById("cmd").style.transform =
      "translate(-50%, -50%) scale(1)";
    document.getElementById("cmd").style.visibility = "visible";
    document.getElementById("cmd").style.opacity = "1";
  }, 1);

  document.getElementById("cmd").click();
  moveToFront(document.getElementById("cmd"));
}

function closeCmd() {
  document.getElementById("cmd").style.transform =
    "translate(-50%, -50%) scale(0)";
  document.getElementById("cmd").style.visibility = "hidden";
  document.getElementById("cmd").style.opacity = "0";
  setTimeout(() => {
    document.getElementById("cmd").style.display = "none";
    document.getElementById("cmd").style.top = "50%";
    document.getElementById("cmd").style.left = "50%";
  }, 150);
}

// APPS - Tic Tac Toes
function minTic() {
  document.getElementById("ticTacToe").style.transition =
    "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s,  height 0.2s, left 0.2s";
  document.getElementById("ticTacToe").style.transform =
    "translate(-50%, 100%) scale(0)";
  document.getElementById("ticTacToe").style.visibility = "hidden";
  document.getElementById("ticTacToe").style.opacity = "0";
  document.getElementById("ticTacToe").style.left = "50%";
  document.getElementById("TicDockAppIco").classList.remove('taskbarbuttonActive');

  setTimeout(() => {
    document.getElementById("ticTacToe").style.display = "none";
    document.getElementById("ticTacToe").style.transition =
      "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s,  height 0.2s";
  }, 150);
}

function closeTic() {
  document.getElementById("ticTacToe").style.transform =
    "translate(-50%, -50%) scale(0)";
  document.getElementById("ticTacToe").style.visibility = "hidden";
  document.getElementById("ticTacToe").style.opacity = "0";
  document.getElementById("TicDockAppIco").style.transform = "translateY(45px)";
  document.getElementById("TicDockAppIco").classList.remove('taskbarbuttonActive');
  setTimeout(() => {
    document.getElementById("ticTacToe").style.display = "none";
    document.getElementById("ticTacToe").style.top = "50%";
    document.getElementById("ticTacToe").style.left = "50%";
    document.getElementById("TicDockAppIco").style.display = "none";
  }, 150);

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
    document.getElementById("TicDockAppIco").classList.add('taskbarbuttonActive');

  }, 1);
  setTimeout(() => {
    document.getElementById("TicDockAppIco").style.transform =
      "translateY(0px)";
  }, 150);
  document.getElementById("ticTacToe").click();
  moveToFront(document.getElementById("ticTacToe"));
}

// APPS - Calculator
function minCalc() {
  document.getElementById("calculator").style.transition =
    "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s,  height 0.2s, left 0.2s";
  document.getElementById("calculator").style.transform =
    "translate(-50%, 100%) scale(0)";
  document.getElementById("calculator").style.visibility = "hidden";
  document.getElementById("calculator").style.opacity = "0";
  document.getElementById("calculator").style.left = "50%";
  document.getElementById("calcDockAppIco").classList.remove('taskbarbuttonActive');
  setTimeout(() => {
    document.getElementById("calculator").style.display = "none";
    document.getElementById("calculator").style.transition =
      "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s,  height 0.2s";
  }, 150);

}

function closeCalc() {
  document.getElementById("calculator").style.transform =
    "translate(-50%, -50%) scale(0)";
  document.getElementById("calculator").style.visibility = "hidden";
  document.getElementById("calculator").style.opacity = "0";
  setTimeout(() => {
    document.getElementById("calculator").style.display = "none";
    document.getElementById("calculator").style.top = "50%";
    document.getElementById("calculator").style.left = "50%";
    document.getElementById("calcDockAppIco").classList.remove('taskbarbuttonActive');
  }, 150);

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
    document.getElementById("calcDockAppIco").classList.add('taskbarbuttonActive');

  }, 1);
  document.getElementById("calculator").click();
  moveToFront(document.getElementById("calculator"));
}

// APPS - calendar
function minCal() {
  document.getElementById("calendar").style.transition =
    "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s,  height 0.2s, left 0.2s";
  document.getElementById("calendar").style.transform =
    "translate(-50%, 100%) scale(0)";
  document.getElementById("calendar").style.visibility = "hidden";
  document.getElementById("calendar").style.opacity = "0";
  document.getElementById("calendar").style.left = "50%";
  document.getElementById("CalDockAppIco").classList.remove('taskbarbuttonActive');
  setTimeout(() => {
    document.getElementById("calendar").style.display = "none";
    document.getElementById("calendar").style.transition =
      "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s,  height 0.2s";
  }, 150);

}

function closeCal() {
  document.getElementById("calendar").style.transform =
    "translate(-50%, -50%) scale(0)";
  document.getElementById("calendar").style.visibility = "hidden";
  document.getElementById("calendar").style.opacity = "0";
  document.getElementById("CalDockAppIco").style.transform = "translateY(45px)";
  setTimeout(() => {
    document.getElementById("calendar").style.display = "none";
    document.getElementById("calendar").style.top = "50%";
    document.getElementById("calendar").style.left = "50%";
    document.getElementById("CalDockAppIco").style.display = "none";
    document.getElementById("calDockAppIco").classList.remove('taskbarbuttonActive');
  }, 150);

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
    document.getElementById("CalDockAppIco").classList.add('taskbarbuttonActive');

  }, 1);
  setTimeout(() => {
    document.getElementById("CalDockAppIco").style.transform =
      "translateY(0px)";
  }, 150);

  document.getElementById("calendar").click();
  moveToFront(document.getElementById("calendar"));
}

// APPS - Paint
function minPaint() {
  document.getElementById("paint").style.transition =
    "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s,  height 0.2s, left 0.2s";
  document.getElementById("paint").style.transform =
    "translate(-50%, 100%) scale(0)";
  document.getElementById("paint").style.visibility = "hidden";
  document.getElementById("paint").style.opacity = "0";
  document.getElementById("paint").style.left = "50%";
  document.getElementById("PaintDockAppIco").classList.remove('taskbarbuttonActive');
  setTimeout(() => {
    document.getElementById("paint").style.display = "none";
    document.getElementById("paint").style.transition =
      "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s,  height 0.2s";
  }, 150);

}

function maxPaint() {
  if (document.getElementById("paint").style.width == "100%") {
    document.getElementById("paint").style.transition =
      "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s,  height 0.2s, left 0.2s, top 0.2s";
    document.getElementById("paint").style.width = "80%";
    document.getElementById("paint").style.height = "80%";
    document.getElementById("paint").style.borderRadius = "10px";
    setTimeout(() => {
      document.getElementById("paint").style.transition =
        "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s";
    }, 250);
  } else {
    document.getElementById("paint").style.transition =
      "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s,  height 0.2s, left 0.2s, top 0.2s";
    document.getElementById("paint").style.top = "50%";
    document.getElementById("paint").style.left = "50%";
    document.getElementById("paint").style.width = "100%";
    document.getElementById("paint").style.height = "100%";
    document.getElementById("paint").style.borderRadius = "0px";
    document.getElementById("paint").style.transform =
      "translate(-50%, -50%) scale(1)";
    setTimeout(() => {
      document.getElementById("paint").style.transition =
        "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s";
    }, 250);
  }
}

function closePaint() {
  document.getElementById("paint").style.transform =
    "translate(-50%, -50%) scale(0)";
  document.getElementById("paint").style.visibility = "hidden";
  document.getElementById("paint").style.opacity = "0";
  document.getElementById("PaintDockAppIco").style.transform =
    "translateY(45px)";
    document.getElementById("PaintDockAppIco").classList.remove('taskbarbuttonActive');

  setTimeout(() => {
    document.getElementById("paint").style.display = "none";
    document.getElementById("paint").style.top = "50%";
    document.getElementById("paint").style.left = "50%";
    document.getElementById("PaintDockAppIco").style.display = "none";
  }, 150);

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
    document.getElementById("PaintDockAppIco").classList.add('taskbarbuttonActive');
    alert('If the canvas is not showing, click the reload button to fix it.')
  }, 1);
  setTimeout(() => {
    document.getElementById("PaintDockAppIco").style.transform =
      "translateY(0px)";
  }, 150);
  document.getElementById("paint").click();
  moveToFront(document.getElementById("paint"));
}

// APPS - Notes
function minNotes() {
  document.getElementById("notes").style.transition =
    "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s,  height 0.2s, left 0.2s";
  document.getElementById("notes").style.transform =
    "translate(-50%, 100%) scale(0)";
  document.getElementById("notes").style.visibility = "hidden";
  document.getElementById("notes").style.opacity = "0";
  document.getElementById("notes").style.left = "50%";
  document.getElementById("notDockAppIco").classList.remove('taskbarbuttonActive');
  setTimeout(() => {
    document.getElementById("notes").style.display = "none";
    document.getElementById("notes").style.transition =
      "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s,  height 0.2s";
  }, 250);

}

function closeNotes() {
  document.getElementById("notes").style.transform =
    "translate(-50%, -50%) scale(0)";
  document.getElementById("notes").style.visibility = "hidden";
  document.getElementById("notes").style.opacity = "0";
  document.getElementById("notDockAppIco").classList.remove('taskbarbuttonActive');
  setTimeout(() => {
    document.getElementById("notes").style.display = "none";
    document.getElementById("notes").style.top = "50%";
    document.getElementById("notes").style.left = "50%";
  }, 250);
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
    document.getElementById("notDockAppIco").classList.add('taskbarbuttonActive');
  }, 1);

  document.getElementById("notes").click();
  moveToFront(document.getElementById("notes"));
}

// APPS - Snake Game
function minSnake() {
  document.getElementById("snake").style.transition =
    "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s,  height 0.2s, left 0.2s";
  document.getElementById("snake").style.transform =
    "translate(-50%, 100%) scale(0)";
  document.getElementById("snake").style.visibility = "hidden";
  document.getElementById("snake").style.opacity = "0";
  document.getElementById("snake").style.left = "50%";
  document.getElementById("snaDockAppIco").classList.remove('taskbarbuttonActive');
  setTimeout(() => {
    document.getElementById("snake").style.display = "none";
    document.getElementById("snake").style.transition =
      "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s,  height 0.2s";
  }, 150);

}

function maxSnake() {
  if (document.getElementById("snake").style.width == "100%") {
    document.getElementById("snake").style.transition =
      "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s,  height 0.2s, left 0.2s, top 0.2s";

    document.getElementById("snake").style.width = "52.25%";
    document.getElementById("snake").style.height = "80%";
    document.getElementById("snake").style.borderRadius = "10px";
    setTimeout(() => {
      document.getElementById("snake").style.transition =
        "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s";
    }, 250);
  } else {
    document.getElementById("snake").style.transition =
      "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s,  height 0.2s, left 0.2s, top 0.2s";
    document.getElementById("snake").style.top = "50%";
    document.getElementById("snake").style.left = "50%";
    document.getElementById("snake").style.width = "100%";
    document.getElementById("snake").style.height = "100%";
    document.getElementById("snake").style.borderRadius = "0px";
    setTimeout(() => {
      document.getElementById("snake").style.transition =
        "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s";
    }, 250);
  }
}

function closeSnake() {
  document.getElementById("snake").style.transform =
    "translate(-50%, -50%) scale(0)";
  document.getElementById("snake").style.visibility = "hidden";
  document.getElementById("snake").style.opacity = "0";
  document.getElementById("snaDockAppIco").classList.remove('taskbarbuttonActive');
  setTimeout(() => {
    document.getElementById("snake").style.display = "none";
    document.getElementById("snake").style.top = "50%";
    document.getElementById("snake").style.left = "50%";
  }, 150);

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
    document.getElementById("snaDockAppIco").classList.add('taskbarbuttonActive');

  }, 1);
  document.getElementById("snake").click();
  moveToFront(document.getElementById("snake"));
}

// APPS - piano Game
function minPiano() {
  document.getElementById("piano").style.transition =
    "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s,  height 0.2s, left 0.2s";
  document.getElementById("piano").style.transform =
    "translate(-50%, 100%) scale(0)";
  document.getElementById("piano").style.visibility = "hidden";
  document.getElementById("piano").style.opacity = "0";
  document.getElementById("piano").style.left = "50%";
  document.getElementById("pinDockAppIco").classList.remove('taskbarbuttonActive');
  setTimeout(() => {
    document.getElementById("piano").style.display = "none";
    document.getElementById("piano").style.transition =
      "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s,  height 0.2s";
  }, 150);

}

function closePiano() {
  document.getElementById("piano").style.transform =
    "translate(-50%, -50%) scale(0)";
  document.getElementById("piano").style.visibility = "hidden";
  document.getElementById("piano").style.opacity = "0";
  document.getElementById("pinDockAppIco").classList.remove('taskbarbuttonActive');
  setTimeout(() => {
    document.getElementById("piano").style.display = "none";
    document.getElementById("piano").style.top = "50%";
    document.getElementById("piano").style.left = "50%";
  }, 150);

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
    document.getElementById("pinDockAppIco").classList.add('taskbarbuttonActive');

  }, 1);

  document.getElementById("piano").click();
  moveToFront(document.getElementById("piano"));
}

// APPS - Browser
function minBwr() {
  document.getElementById("Browser").style.transition =
    "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s,  height 0.2s, left 0.2s";
  document.getElementById("Browser").style.transform =
    "translate(-50%, 100%) scale(0)";
  document.getElementById("Browser").style.visibility = "hidden";
  document.getElementById("Browser").style.opacity = "0";
  document.getElementById("Browser").style.left = "50%";
  document.getElementById("broDockAppIco").classList.remove('taskbarbuttonActive');
  setTimeout(() => {
    document.getElementById("Browser").style.display = "none";
    document.getElementById("Browser").style.transition =
      "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s,  height 0.2s";
  }, 150);

}

function maxBwr() {
  if (document.getElementById("Browser").style.width == "100%") {
    document.getElementById("Browser").style.transition =
      "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s,  height 0.2s, left 0.2s, top 0.2s";
    document.getElementById("Browser").style.width = "95%";
    document.getElementById("Browser").style.height = "95%";
    document.getElementById("Browser").style.borderRadius = "10px";
    setTimeout(() => {
      document.getElementById("Browser").style.transition =
        "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s";
    }, 250);
  } else {
    document.getElementById("Browser").style.transition =
      "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s,  height 0.2s, left 0.2s, top 0.2s";
    document.getElementById("Browser").style.top = "50%";
    document.getElementById("Browser").style.left = "50%";
    document.getElementById("Browser").style.width = "100%";
    document.getElementById("Browser").style.height = "100%";
    document.getElementById("Browser").style.borderRadius = "0px";
    setTimeout(() => {
      document.getElementById("Browser").style.transition =
        "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s";
    }, 250);
  }
}

function closeBwr() {
  document.getElementById("Browser").style.transform =
    "translate(-50%, -50%) scale(0)";
  document.getElementById("Browser").style.visibility = "hidden";
  document.getElementById("Browser").style.opacity = "0";
  document.getElementById("browIframe").src = void 0;
  document.getElementById("broDockAppIco").classList.remove('taskbarbuttonActive');
  setTimeout(() => {
    document.getElementById("Browser").style.display = "none";
    document.getElementById("Browser").style.top = "50%";
    document.getElementById("Browser").style.left = "50%";
  }, 150);
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
    document.getElementById("broDockAppIco").classList.add('taskbarbuttonActive');
    document.getElementById("browIframe").src =
      "../Global/Apps/Browser/index.html";
  }, 1);

  document.getElementById("Browser").click();
  moveToFront(document.getElementById("Browser"));
}

// APPS - Gallery
function minGal() {
  document.getElementById("Gallery").style.transition =
    "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s,  height 0.2s, left 0.2s";
  document.getElementById("Gallery").style.transform =
    "translate(-50%, 100%) scale(0)";
  document.getElementById("Gallery").style.visibility = "hidden";
  document.getElementById("Gallery").style.opacity = "0";
  document.getElementById("Gallery").style.left = "50%";
  document.getElementById("galDockAppIco").classList.remove('taskbarbuttonActive');
  setTimeout(() => {
    document.getElementById("Gallery").style.display = "none";
    document.getElementById("Gallery").style.transition =
      "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s,  height 0.2s";
  }, 150);

}

function maxGal() {
  if (document.getElementById("Gallery").style.width == "100%") {
    document.getElementById("Gallery").style.transition =
      "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s,  height 0.2s, left 0.2s, top 0.2s";
    document.getElementById("Gallery").style.width = "95%";
    document.getElementById("Gallery").style.height = "95%";
    document.getElementById("Gallery").style.borderRadius = "10px";
    setTimeout(() => {
      document.getElementById("Gallery").style.transition =
        "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s";
    }, 250);
  } else {
    document.getElementById("Gallery").style.transition =
      "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s,  height 0.2s, left 0.2s, top 0.2s";
    document.getElementById("Gallery").style.top = "50%";
    document.getElementById("Gallery").style.left = "50%";
    document.getElementById("Gallery").style.width = "100%";
    document.getElementById("Gallery").style.height = "100%";
    document.getElementById("Gallery").style.borderRadius = "0px";
    setTimeout(() => {
      document.getElementById("Gallery").style.transition =
        "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s";
    }, 250);
  }
}

function closeGal() {
  document.getElementById("Gallery").style.transform =
    "translate(-50%, -50%) scale(0)";
  document.getElementById("Gallery").style.visibility = "hidden";
  document.getElementById("Gallery").style.opacity = "0";
  document.getElementById("galDockAppIco").style.transform = "translateY(45px)";
  document.getElementById("galDockAppIco").classList.remove('taskbarbuttonActive');
  setTimeout(() => {
    document.getElementById("Gallery").style.display = "none";
    document.getElementById("Gallery").style.top = "50%";
    document.getElementById("Gallery").style.left = "50%";
    document.getElementById("galDockAppIco").style.display = "none";
  }, 150);
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
    document.getElementById("galDockAppIco").classList.add('taskbarbuttonActive');
  }, 1);
  setTimeout(() => {
    document.getElementById("galDockAppIco").style.transform =
      "translateY(0px)";
  }, 150);
  document.getElementById("Gallery").click();
  moveToFront(document.getElementById("Gallery"));
}

// APPS - Camera
function minCam() {
  document.getElementById("Camera").style.transition =
    "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s,  height 0.2s, left 0.2s";
  document.getElementById("Camera").style.transform =
    "translate(-50%, 100%) scale(0)";
  document.getElementById("Camera").style.visibility = "hidden";
  document.getElementById("Camera").style.opacity = "0";
  document.getElementById("Camera").style.left = "50%";
  document.getElementById("CamDockAppIco").classList.remove('taskbarbuttonActive');
  setTimeout(() => {
    document.getElementById("Camera").style.display = "none";
    document.getElementById("Camera").style.transition =
      "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s,  height 0.2s";
  }, 150);

}

function maxCam() {
  if (document.getElementById("Camera").style.width == "100%") {
    document.getElementById("Camera").style.transition =
      "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s,  height 0.2s, left 0.2s, top 0.2s";
    document.getElementById("Camera").style.width = "95%";
    document.getElementById("Camera").style.height = "95%";
    document.getElementById("Camera").style.borderRadius = "10px";
    setTimeout(() => {
      document.getElementById("Camera").style.transition =
        "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s";
    }, 250);
  } else {
    document.getElementById("Camera").style.transition =
      "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s,  height 0.2s, left 0.2s, top 0.2s";
    document.getElementById("Camera").style.top = "50%";
    document.getElementById("Camera").style.left = "50%";
    document.getElementById("Camera").style.width = "100%";
    document.getElementById("Camera").style.height = "100%";
    document.getElementById("Camera").style.borderRadius = "0px";
    setTimeout(() => {
      document.getElementById("Camera").style.transition =
        "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s";
    }, 250);
  }
}

function closeCam() {
  document.getElementById("Camera").style.transform =
    "translate(-50%, -50%) scale(0)";
  document.getElementById("Camera").style.visibility = "hidden";
  document.getElementById("Camera").style.opacity = "0";
  document.getElementById("CamIframe").src = void 0;
  document.getElementById("CamDockAppIco").style.transform = "translateY(45px)";
  document.getElementById("CamDockAppIco").classList.remove('taskbarbuttonActive');
  setTimeout(() => {
    document.getElementById("Camera").style.display = "none";
    document.getElementById("Camera").style.top = "50%";
    document.getElementById("Camera").style.left = "50%";
    document.getElementById("CamDockAppIco").style.display = "none";
  }, 150);

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
    document.getElementById("CamDockAppIco").classList.add('taskbarbuttonActive');
    document.getElementById("CamIframe").src =
      "../Global/Apps/Camera/index.html";
  }, 1);
  setTimeout(() => {
    document.getElementById("CamDockAppIco").style.transform =
      "translateY(0px)";
  }, 150);

  document.getElementById("Camera").click();
  moveToFront(document.getElementById("Camera"));
}

// APPS - Document
function minDoc() {
  document.getElementById("Document").style.transition =
    "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s,  height 0.2s, left 0.2s";
  document.getElementById("Document").style.transform =
    "translate(-50%, 100%) scale(0)";
  document.getElementById("Document").style.visibility = "hidden";
  document.getElementById("Document").style.opacity = "0";
  document.getElementById("Document").style.left = "50%";
  document.getElementById("DocDockAppIco").classList.remove('taskbarbuttonActive');
  setTimeout(() => {
    document.getElementById("Document").style.display = "none";
    document.getElementById("Document").style.transition =
      "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s,  height 0.2s";
  }, 150);

}

function maxDoc() {
  if (document.getElementById("Document").style.width == "100%") {
    document.getElementById("Document").style.transition =
      "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s,  height 0.2s, left 0.2s, top 0.2s";
    document.getElementById("Document").style.width = "95%";
    document.getElementById("Document").style.height = "95%";
    document.getElementById("Document").style.borderRadius = "10px";
    setTimeout(() => {
      document.getElementById("Document").style.transition =
        "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s";
    }, 250);
  } else {
    document.getElementById("Document").style.transition =
      "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s,  height 0.2s, left 0.2s, top 0.2s";
    document.getElementById("Document").style.top = "50%";
    document.getElementById("Document").style.left = "50%";
    document.getElementById("Document").style.width = "100%";
    document.getElementById("Document").style.height = "100%";
    document.getElementById("Document").style.borderRadius = "0px";
    setTimeout(() => {
      document.getElementById("Document").style.transition =
        "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s";
    }, 250);
  }
}

function closeDoc() {
  document.getElementById("Document").style.transform =
    "translate(-50%, -50%) scale(0)";
  document.getElementById("Document").style.visibility = "hidden";
  document.getElementById("Document").style.opacity = "0";
  document.getElementById("DocDockAppIco").style.transform = "translateY(45px)";
  document.getElementById("DocDockAppIco").classList.remove('taskbarbuttonActive');
  setTimeout(() => {
    document.getElementById("Document").style.display = "none";
    document.getElementById("Document").style.top = "50%";
    document.getElementById("Document").style.left = "50%";
    document.getElementById("DocDockAppIco").style.display = "none";
  }, 150);

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
    document.getElementById("DocDockAppIco").classList.add('taskbarbuttonActive');
  }, 1);
  setTimeout(() => {
    document.getElementById("DocDockAppIco").style.transform =
      "translateY(0px)";
  }, 150);

  document.getElementById("Document").click();
  moveToFront(document.getElementById("Document"));
}

// APPS - Image Ediotor
function minIed() {
  document.getElementById("IEditor").style.transition =
    "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s,  height 0.2s, left 0.2s";
  document.getElementById("IEditor").style.transform =
    "translate(-50%, 100%) scale(0)";
  document.getElementById("IEditor").style.visibility = "hidden";
  document.getElementById("IEditor").style.opacity = "0";
  document.getElementById("IEditor").style.left = "50%";
  document.getElementById("EIeditDockAppIco").classList.remove('taskbarbuttonActive');
  setTimeout(() => {
    document.getElementById("IEditor").style.display = "none";
    document.getElementById("IEditor").style.transition =
      "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s,  height 0.2s";
  }, 150);

}

function maxIed() {
  if (document.getElementById("IEditor").style.width == "100%") {
    document.getElementById("IEditor").style.transition =
      "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s,  height 0.2s, left 0.2s, top 0.2s";
    document.getElementById("IEditor").style.width = "95%";
    document.getElementById("IEditor").style.height = "95%";
    document.getElementById("IEditor").style.borderRadius = "10px";
    setTimeout(() => {
      document.getElementById("IEditor").style.transition =
        "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s";
    }, 250);
  } else {
    document.getElementById("IEditor").style.transition =
      "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s,  height 0.2s, left 0.2s, top 0.2s";
    document.getElementById("IEditor").style.top = "50%";
    document.getElementById("IEditor").style.left = "50%";
    document.getElementById("IEditor").style.width = "100%";
    document.getElementById("IEditor").style.height = "100%";
    document.getElementById("IEditor").style.borderRadius = "0px";
    setTimeout(() => {
      document.getElementById("IEditor").style.transition =
        "transform 0.2s, opacity 0.2s , visibility 0.2s, border-radius 0.2s,  width 0.2s";
    }, 250);
  }
}

function closeIed() {
  document.getElementById("IEditor").style.transform =
    "translate(-50%, -50%) scale(0)";
  document.getElementById("IEditor").style.visibility = "hidden";
  document.getElementById("IEditor").style.opacity = "0";
  document.getElementById("EIeditDockAppIco").style.transform =
    "translateY(45px)";
    document.getElementById("EIeditDockAppIco").classList.remove('taskbarbuttonActive');
  setTimeout(() => {
    document.getElementById("IEditor").style.display = "none";
    document.getElementById("IEditor").style.top = "50%";
    document.getElementById("IEditor").style.left = "50%";
    document.getElementById("EIeditDockAppIco").style.display = "none";
  }, 150);

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
    document.getElementById("EIeditDockAppIco").classList.add('taskbarbuttonActive');
  }, 1);
  setTimeout(() => {
    document.getElementById("EIeditDockAppIco").style.transform =
      "translateY(0px)";
  }, 150);

  document.getElementById("IEditor").click();
  moveToFront(document.getElementById("IEditor"));
}