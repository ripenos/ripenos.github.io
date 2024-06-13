
// APPS - Files
  function closeFiles() {
    document.getElementById("files").style.transform =
      "translate(-50%, -50%) scale(0)";
    document.getElementById("files").style.visibility = "hidden";
    document.getElementById("files").style.opacity = "0";
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
    }, 1);
  
    document.getElementById("files").click();
    moveToFront(document.getElementById("files"));
  }

  function closeSpr() {
    document.getElementById("Spreadsheet").style.transform =
      "translate(-50%, -50%) scale(0.75)";
    document.getElementById("Spreadsheet").style.visibility = "hidden";
    document.getElementById("Spreadsheet").style.opacity = "0";
    setTimeout(() => {
      document.getElementById("Spreadsheet").style.display = "none";
      document.getElementById("Spreadsheet").style.top = "50%";
      document.getElementById("Spreadsheet").style.left = "50%";
    }, 150);
  }

  function openSpr() {
    document.getElementById("Spreadsheet").style.display = "block";
    document.getElementById("maxApp").style.display = "block";
  
    setTimeout(() => {
      document.getElementById("Spreadsheet").style.top = "50%";
      document.getElementById("Spreadsheet").style.left = "50%";
      document.getElementById("Spreadsheet").style.transform =
        "translate(-50%, -50%) scale(1)";
      document.getElementById("Spreadsheet").style.visibility = "visible";
      document.getElementById("Spreadsheet").style.opacity = "1";
    }, 1);
  
    document.getElementById("Spreadsheet").click();
    moveToFront(document.getElementById("Spreadsheet"));
  }

  function closeTasks() {
  document.getElementById("Tasks").style.transform =
    "translate(-50%, -50%) scale(0.75)";
  document.getElementById("Tasks").style.visibility = "hidden";
  document.getElementById("Tasks").style.opacity = "0";
  setTimeout(() => {
    document.getElementById("Tasks").style.display = "none";
    document.getElementById("Tasks").style.top = "50%";
    document.getElementById("Tasks").style.left = "50%";
  }, 150);
}

function openTasks() {
  document.getElementById("Tasks").style.display = "block";
  document.getElementById("maxApp").style.display = "block";

  setTimeout(() => {
    document.getElementById("Tasks").style.top = "50%";
    document.getElementById("Tasks").style.left = "50%";
    document.getElementById("Tasks").style.transform =
      "translate(-50%, -50%) scale(1)";
    document.getElementById("Tasks").style.visibility = "visible";
    document.getElementById("Tasks").style.opacity = "1";
  }, 1);
  document.getElementById("Tasks").click();
  moveToFront(document.getElementById("Tasks"));
}

function closeClock() {
  document.getElementById("Clock").style.transform =
    "translate(-50%, -50%) scale(0.75)";
  document.getElementById("Clock").style.visibility = "hidden";
  document.getElementById("Clock").style.opacity = "0";
  setTimeout(() => {
    document.getElementById("Clock").style.display = "none";
    document.getElementById("Clock").style.top = "50%";
    document.getElementById("Clock").style.left = "50%";
  }, 150);
}

function openClock() {
  document.getElementById("Clock").style.display = "block";
  document.getElementById("maxApp").style.display = "block";

  setTimeout(() => {
    document.getElementById("Clock").style.top = "50%";
    document.getElementById("Clock").style.left = "50%";
    document.getElementById("Clock").style.transform =
      "translate(-50%, -50%) scale(1)";
    document.getElementById("Clock").style.visibility = "visible";
    document.getElementById("Clock").style.opacity = "1";
  }, 1);
  document.getElementById("Clock").click();
  moveToFront(document.getElementById("Clock"));
}
    
  // APPS - Tic Tac Toes 
  function closeTic() {
    document.getElementById("ticTacToe").style.transform =
      "translate(-50%, -50%) scale(0)";
    document.getElementById("ticTacToe").style.visibility = "hidden";
    document.getElementById("ticTacToe").style.opacity = "0";
    setTimeout(() => {
      document.getElementById("ticTacToe").style.display = "none";
      document.getElementById("ticTacToe").style.top = "50%";
      document.getElementById("ticTacToe").style.left = "50%";
    }, 150);
  
  }
  
  function openTic() {
    document.getElementById("ticTacToe").style.display = "block";
    document.getElementById("maxApp").style.display = "block";
  
    setTimeout(() => {
      document.getElementById("ticTacToe").style.top = "50%";
      document.getElementById("ticTacToe").style.left = "50%";
      document.getElementById("ticTacToe").style.transform =
        "translate(-50%, -50%) scale(1)";
      document.getElementById("ticTacToe").style.visibility = "visible";
      document.getElementById("ticTacToe").style.opacity = "1";
  
    }, 1);
    document.getElementById("ticTacToe").click();
    moveToFront(document.getElementById("ticTacToe"));
  }
  
  // APPS - Calculator
  function closeCalc() {
    document.getElementById("calculator").style.transform =
      "translate(-50%, -50%) scale(0)";
    document.getElementById("calculator").style.visibility = "hidden";
    document.getElementById("calculator").style.opacity = "0";
    setTimeout(() => {
      document.getElementById("calculator").style.display = "none";
      document.getElementById("calculator").style.top = "50%";
      document.getElementById("calculator").style.left = "50%";
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
  
    }, 1);
    document.getElementById("calculator").click();
    moveToFront(document.getElementById("calculator"));
  }
  
  // APPS - calendar
  function closeCal() {
    document.getElementById("calendar").style.transform =
      "translate(-50%, -50%) scale(0)";
    document.getElementById("calendar").style.visibility = "hidden";
    document.getElementById("calendar").style.opacity = "0";
    setTimeout(() => {
      document.getElementById("calendar").style.display = "none";
      document.getElementById("calendar").style.top = "50%";
      document.getElementById("calendar").style.left = "50%";
    }, 150);
  
  }
  
  function openCal() {
    document.getElementById("calendar").style.display = "block";
    document.getElementById("maxApp").style.display = "block";
  
    setTimeout(() => {
      document.getElementById("calendar").style.top = "50%";
      document.getElementById("calendar").style.left = "50%";
      document.getElementById("calendar").style.transform =
        "translate(-50%, -50%) scale(1)";
      document.getElementById("calendar").style.visibility = "visible";
      document.getElementById("calendar").style.opacity = "1";
  
    }, 1);
  
    document.getElementById("calendar").click();
    moveToFront(document.getElementById("calendar"));
  }
  
  // APPS - Paint
  function closePaint() {
    document.getElementById("paint").style.transform =
      "translate(-50%, -50%) scale(0)";
    document.getElementById("paint").style.visibility = "hidden";
    document.getElementById("paint").style.opacity = "0";
  
    setTimeout(() => {
      document.getElementById("paint").style.display = "none";
      document.getElementById("paint").style.top = "50%";
      document.getElementById("paint").style.left = "50%";
    }, 150);
  }
  
  function openPaint() {
    document.getElementById("paint").style.display = "block";
    document.getElementById("maxApp").style.display = "block";
    setTimeout(() => {
      document.getElementById("paint").style.top = "50%";
      document.getElementById("paint").style.left = "50%";
      document.getElementById("paint").style.transform =
        "translate(-50%, -50%) scale(1)";
      document.getElementById("paint").style.visibility = "visible";
      document.getElementById("paint").style.opacity = "1";
      alert('If the canvas is not showing, click the reload button to fix it.')
    }, 1);
    document.getElementById("paint").click();
    moveToFront(document.getElementById("paint"));
  }
  
  // APPS - Notes
  function closeNotes() {
    document.getElementById("notes").style.transform =
      "translate(-50%, -50%) scale(0)";
    document.getElementById("notes").style.visibility = "hidden";
    document.getElementById("notes").style.opacity = "0";
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
    }, 1);
  
    document.getElementById("notes").click();
    moveToFront(document.getElementById("notes"));
  }
  
  // APPS - Snake Game  
  function closeSnake() {
    document.getElementById("snake").style.transform =
      "translate(-50%, -50%) scale(0)";
    document.getElementById("snake").style.visibility = "hidden";
    document.getElementById("snake").style.opacity = "0";
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
  
    }, 1);
    document.getElementById("snake").click();
    moveToFront(document.getElementById("snake"));
  }
  
  // APPS - piano Game
  function closePiano() {
    document.getElementById("piano").style.transform =
      "translate(-50%, -50%) scale(0)";
    document.getElementById("piano").style.visibility = "hidden";
    document.getElementById("piano").style.opacity = "0";
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
  
    }, 1);
  
    document.getElementById("piano").click();
    moveToFront(document.getElementById("piano"));
  }
  
  // APPS - Browser
  function closeBwr() {
    document.getElementById("Browser").style.transform =
      "translate(-50%, -50%) scale(0)";
    document.getElementById("Browser").style.visibility = "hidden";
    document.getElementById("Browser").style.opacity = "0";
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
    }, 1);
  
    document.getElementById("Browser").click();
    moveToFront(document.getElementById("Browser"));
  }
  
  // APPS - Gallery
  function closeGal() {
    document.getElementById("Gallery").style.transform =
      "translate(-50%, -50%) scale(0)";
    document.getElementById("Gallery").style.visibility = "hidden";
    document.getElementById("Gallery").style.opacity = "0";
    setTimeout(() => {
      document.getElementById("Gallery").style.display = "none";
      document.getElementById("Gallery").style.top = "50%";
      document.getElementById("Gallery").style.left = "50%";
    }, 150);
  }
  
  function openGal() {
    document.getElementById("Gallery").style.display = "block";
    document.getElementById("maxApp").style.display = "block";
  
    setTimeout(() => {
      document.getElementById("Gallery").style.top = "50%";
      document.getElementById("Gallery").style.left = "50%";
      document.getElementById("Gallery").style.transform =
        "translate(-50%, -50%) scale(1)";
      document.getElementById("Gallery").style.visibility = "visible";
      document.getElementById("Gallery").style.opacity = "1";
    }, 1);
    document.getElementById("Gallery").click();
    moveToFront(document.getElementById("Gallery"));
  }
  
  // APPS - Camera
  function closeCam() {
    document.getElementById("Camera").style.transform =
      "translate(-50%, -50%) scale(0)";
    document.getElementById("Camera").style.visibility = "hidden";
    document.getElementById("Camera").style.opacity = "0";
    setTimeout(() => {
      document.getElementById("Camera").style.display = "none";
      document.getElementById("Camera").style.top = "50%";
      document.getElementById("Camera").style.left = "50%";
    }, 150);
  
  }
  
  function openCam() {
    document.getElementById("Camera").style.display = "block";
    document.getElementById("maxApp").style.display = "block";
  
    setTimeout(() => {
      document.getElementById("Camera").style.top = "50%";
      document.getElementById("Camera").style.left = "50%";
      document.getElementById("Camera").style.transform =
        "translate(-50%, -50%) scale(1)";
      document.getElementById("Camera").style.visibility = "visible";
      document.getElementById("Camera").style.opacity = "1";
      document.getElementById("CamIframe").src =
        "../../Global/Apps/Camera/index.html";
    }, 1);
  
    document.getElementById("Camera").click();
    moveToFront(document.getElementById("Camera"));
  }
  
  // APPS - Document
  function closeDoc() {
    document.getElementById("Document").style.transform =
      "translate(-50%, -50%) scale(0)";
    document.getElementById("Document").style.visibility = "hidden";
    document.getElementById("Document").style.opacity = "0";
    setTimeout(() => {
      document.getElementById("Document").style.display = "none";
      document.getElementById("Document").style.top = "50%";
      document.getElementById("Document").style.left = "50%";
    }, 150);
  
  }
  
  function openDoc() {
    document.getElementById("Document").style.display = "block";
    document.getElementById("maxApp").style.display = "block";
  
    setTimeout(() => {
      document.getElementById("Document").style.top = "50%";
      document.getElementById("Document").style.left = "50%";
      document.getElementById("Document").style.transform =
        "translate(-50%, -50%) scale(1)";
      document.getElementById("Document").style.visibility = "visible";
      document.getElementById("Document").style.opacity = "1";
    }, 1);
  
    document.getElementById("Document").click();
    moveToFront(document.getElementById("Document"));
  }
  
  // APPS - Image Ediotor
  function closeIed() {
    document.getElementById("IEditor").style.transform =
      "translate(-50%, -50%) scale(0)";
    document.getElementById("IEditor").style.visibility = "hidden";
    document.getElementById("IEditor").style.opacity = "0";
    setTimeout(() => {
      document.getElementById("IEditor").style.display = "none";
      document.getElementById("IEditor").style.top = "50%";
      document.getElementById("IEditor").style.left = "50%";
    }, 150);
  
  }
  
  function openIed() {
    document.getElementById("IEditor").style.display = "block";
    document.getElementById("maxApp").style.display = "block";
  
    setTimeout(() => {
      document.getElementById("IEditor").style.top = "50%";
      document.getElementById("IEditor").style.left = "50%";
      document.getElementById("IEditor").style.transform =
        "translate(-50%, -50%) scale(1)";
      document.getElementById("IEditor").style.visibility = "visible";
      document.getElementById("IEditor").style.opacity = "1";
    }, 1);
  
    document.getElementById("IEditor").click();
    moveToFront(document.getElementById("IEditor"));
  }
