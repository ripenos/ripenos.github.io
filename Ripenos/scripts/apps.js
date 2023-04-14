var dockApps = document.body.getElementsByClassName("dockApps")[0];

// APPS - Files
function minFiles(){
    document.getElementById("files").style.transform= "translate(-50%, -50%) scale(0)";
    document.getElementById("files").style.visibility= "hidden";
    document.getElementById("files").style.opacity= "0";
    document.getElementById("files").style.top= "100%";
    document.getElementById("files").style.left= "50%";

    setTimeout(() => {
        document.getElementById("files").style.display= "none";
    }, 150);

    actionbarDown();
}

function maxFiles(){
    if(document.getElementById("files").style.width == "100%"){
    document.getElementById("files").style.top= "50%";
    document.getElementById("files").style.left= "50%";
    document.getElementById("files").style.width= "80%";
    document.getElementById("files").style.height= "80%";
    document.getElementById("files").style.borderRadius= "10px";
    document.getElementById("files").style.transform= "translate(-50%, -50%) scale(1)";
    }
    else{
        document.getElementById("files").style.top= "50%";
        document.getElementById("files").style.left= "50%";
        document.getElementById("files").style.width= "100%";
        document.getElementById("files").style.height= "100%";
        document.getElementById("files").style.borderRadius= "0px";
        document.getElementById("files").style.transform= "translate(-50%, -50%) scale(1)";
    }
}

function closeFiles(){
    document.getElementById("files").style.transform= "translate(-50%, -50%) scale(0)";
    document.getElementById("files").style.visibility= "hidden";
    document.getElementById("files").style.opacity= "0";
    document.getElementById("files").style.top= "50%";
    document.getElementById("files").style.left= "50%";
    document.getElementById("myripebarM").style.left= "1%";
    document.getElementById("myripebarM").style.borderRadius= "5px 5px  0 0";
    document.getElementById("myripebarM").style.width= "98%";
    setTimeout(() => {
        document.getElementById("files").style.display= "none";

    }, 150);

    actionbarDown();
}

function openFiles(){
    document.getElementById("files").style.display= "block";
    document.getElementById("maxApp").style.display= "block";

    setTimeout(() => {
    document.getElementById("files").style.top= "50%";
    document.getElementById("files").style.left= "50%";
    document.getElementById("files").style.transform= "translate(-50%, -50%) scale(1)";
    document.getElementById("files").style.visibility= "visible";
    document.getElementById("files").style.opacity= "1";
    document.getElementById("myripebarM").style.left= "0";
    document.getElementById("myripebarM").style.borderRadius= "0";
    document.getElementById("myripebarM").style.width= "100%";
    dockZoomOut();
    }, 1);

    actionbarDown();
}

// APPS - Tic Tac Toes
function minTic(){
    document.getElementById("ticTacToe").style.transform= "translate(-50%, -50%) scale(0)";
    document.getElementById("ticTacToe").style.visibility= "hidden";
    document.getElementById("ticTacToe").style.opacity= "0";
    document.getElementById("ticTacToe").style.top= "100%";
    document.getElementById("ticTacToe").style.left= "50%";

    setTimeout(() => {
        document.getElementById("ticTacToe").style.display= "none";
    }, 150);

    actionbarDown();
}

function closeTic(){
    document.getElementById("ticTacToe").style.transform= "translate(-50%, -50%) scale(0)";
    document.getElementById("ticTacToe").style.visibility= "hidden";
    document.getElementById("ticTacToe").style.opacity= "0";
    document.getElementById("ticTacToe").style.top= "50%";
    document.getElementById("ticTacToe").style.left= "50%";
    document.getElementById("myripebarM").style.left= "1%";
    document.getElementById("myripebarM").style.borderRadius= "5px 5px  0 0";
    document.getElementById("myripebarM").style.width= "98%";
    setTimeout(() => {
        document.getElementById("ticTacToe").style.display= "none";

    }, 150);

    actionbarDown();
}

function openTic(){
    document.getElementById("ticTacToe").style.display= "block";
    document.getElementById("maxApp").style.display= "block";

    setTimeout(() => {
    document.getElementById("ticTacToe").style.top= "50%";
    document.getElementById("ticTacToe").style.left= "50%";
    document.getElementById("ticTacToe").style.transform= "translate(-50%, -50%) scale(1)";
    document.getElementById("ticTacToe").style.visibility= "visible";
    document.getElementById("ticTacToe").style.opacity= "1";
    document.getElementById("myripebarM").style.left= "0";
    document.getElementById("myripebarM").style.borderRadius= "0";
    document.getElementById("myripebarM").style.width= "100%";
    dockZoomOut();
    }, 1);

    actionbarDown();
}

// APPS - Calculator
function minCalc(){
    document.getElementById("calculator").style.transform= "translate(-50%, -50%) scale(0)";
    document.getElementById("calculator").style.visibility= "hidden";
    document.getElementById("calculator").style.opacity= "0";
    document.getElementById("calculator").style.top= "100%";
    document.getElementById("calculator").style.left= "50%";

    setTimeout(() => {
        document.getElementById("calculator").style.display= "none";
    }, 150);

    actionbarDown();
}

function closeCalc(){
    document.getElementById("calculator").style.transform= "translate(-50%, -50%) scale(0)";
    document.getElementById("calculator").style.visibility= "hidden";
    document.getElementById("calculator").style.opacity= "0";
    document.getElementById("calculator").style.top= "50%";
    document.getElementById("calculator").style.left= "50%";
    document.getElementById("myripebarM").style.left= "1%";
    document.getElementById("myripebarM").style.borderRadius= "5px 5px  0 0";
    document.getElementById("myripebarM").style.width= "98%";
    setTimeout(() => {
        document.getElementById("calculator").style.display= "none";

    }, 150);

    actionbarDown();
}

function openCalc(){
    document.getElementById("calculator").style.display= "block";
    document.getElementById("maxApp").style.display= "block";

    setTimeout(() => {
    document.getElementById("calculator").style.top= "50%";
    document.getElementById("calculator").style.left= "50%";
    document.getElementById("calculator").style.transform= "translate(-50%, -50%) scale(1)";
    document.getElementById("calculator").style.visibility= "visible";
    document.getElementById("calculator").style.opacity= "1";
    document.getElementById("myripebarM").style.left= "0";
    document.getElementById("myripebarM").style.borderRadius= "0";
    document.getElementById("myripebarM").style.width= "100%";
    dockZoomOut();
    }, 1);

    actionbarDown();
}

// APPS - Qr Code Generator
function minQr(){
    document.getElementById("QrApp").style.transform= "translate(-50%, -50%) scale(0)";
    document.getElementById("QrApp").style.visibility= "hidden";
    document.getElementById("QrApp").style.opacity= "0";
    document.getElementById("QrApp").style.top= "100%";
    document.getElementById("QrApp").style.left= "50%";

    setTimeout(() => {
        document.getElementById("QrApp").style.display= "none";
    }, 150);

    actionbarDown();
}

function closeQr(){
    document.getElementById("QrApp").style.transform= "translate(-50%, -50%) scale(0)";
    document.getElementById("QrApp").style.visibility= "hidden";
    document.getElementById("QrApp").style.opacity= "0";
    document.getElementById("QrApp").style.top= "50%";
    document.getElementById("QrApp").style.left= "50%";
    document.getElementById("myripebarM").style.left= "1%";
    document.getElementById("myripebarM").style.borderRadius= "5px 5px  0 0";
    document.getElementById("myripebarM").style.width= "98%";
    setTimeout(() => {
        document.getElementById("QrApp").style.display= "none";

    }, 150);

    actionbarDown();
}

function openQr(){
    document.getElementById("QrApp").style.display= "block";
    document.getElementById("maxApp").style.display= "block";

    setTimeout(() => {
    document.getElementById("QrApp").style.top= "50%";
    document.getElementById("QrApp").style.left= "50%";
    document.getElementById("QrApp").style.transform= "translate(-50%, -50%) scale(1)";
    document.getElementById("QrApp").style.visibility= "visible";
    document.getElementById("QrApp").style.opacity= "1";
    document.getElementById("myripebarM").style.left= "0";
    document.getElementById("myripebarM").style.borderRadius= "0";
    document.getElementById("myripebarM").style.width= "100%";
    }, 1);

    actionbarDown();
}


// APPS - calendar
function minCal(){
    document.getElementById("calendar").style.transform= "translate(-50%, -50%) scale(0)";
    document.getElementById("calendar").style.visibility= "hidden";
    document.getElementById("calendar").style.opacity= "0";
    document.getElementById("calendar").style.top= "100%";
    document.getElementById("calendar").style.left= "50%";

    setTimeout(() => {
        document.getElementById("calendar").style.display= "none";
    }, 150);

    actionbarDown();
}

function closeCal(){
    document.getElementById("calendar").style.transform= "translate(-50%, -50%) scale(0)";
    document.getElementById("calendar").style.visibility= "hidden";
    document.getElementById("calendar").style.opacity= "0";
    document.getElementById("calendar").style.top= "50%";
    document.getElementById("calendar").style.left= "50%";
    document.getElementById("myripebarM").style.left= "1%";
    document.getElementById("myripebarM").style.borderRadius= "5px 5px  0 0";
    document.getElementById("myripebarM").style.width= "98%";
    setTimeout(() => {
        document.getElementById("calendar").style.display= "none";

    }, 150);

    actionbarDown();
}

function openCal(){
    document.getElementById("calendar").style.display= "block";
    document.getElementById("maxApp").style.display= "block";

    setTimeout(() => {
    document.getElementById("calendar").style.top= "50%";
    document.getElementById("calendar").style.left= "50%";
    document.getElementById("calendar").style.transform= "translate(-50%, -50%) scale(1)";
    document.getElementById("calendar").style.visibility= "visible";
    document.getElementById("calendar").style.opacity= "1";
    document.getElementById("myripebarM").style.left= "0";
    document.getElementById("myripebarM").style.borderRadius= "0";
    document.getElementById("myripebarM").style.width= "100%";
    }, 1);

    actionbarDown();
}

// APPS - Paint
function minPaint(){
    document.getElementById("paint").style.transform= "translate(-50%, -50%) scale(0)";
    document.getElementById("paint").style.visibility= "hidden";
    document.getElementById("paint").style.opacity= "0";
    document.getElementById("paint").style.top= "100%";
    document.getElementById("paint").style.left= "50%";

    setTimeout(() => {
        document.getElementById("paint").style.display= "none";
    }, 150);

    actionbarDown();
}

function maxPaint(){
    if(document.getElementById("paint").style.width == "100%"){
    document.getElementById("paint").style.top= "50%";
    document.getElementById("paint").style.left= "50%";
    document.getElementById("paint").style.width= "80%";
    document.getElementById("paint").style.height= "80%";
    document.getElementById("paint").style.borderRadius= "10px";
    document.getElementById("paint").style.transform= "translate(-50%, -50%) scale(1)";
    }
    else{
        document.getElementById("paint").style.top= "50%";
        document.getElementById("paint").style.left= "50%";
        document.getElementById("paint").style.width= "100%";
        document.getElementById("paint").style.height= "100%";
        document.getElementById("paint").style.borderRadius= "0px";
        document.getElementById("paint").style.transform= "translate(-50%, -50%) scale(1)";
    }
}

function closePaint(){
    document.getElementById("paint").style.transform= "translate(-50%, -50%) scale(0)";
    document.getElementById("paint").style.visibility= "hidden";
    document.getElementById("paint").style.opacity= "0";
    document.getElementById("paint").style.top= "50%";
    document.getElementById("paint").style.left= "50%";
    document.getElementById("myripebarM").style.left= "1%";
    document.getElementById("myripebarM").style.borderRadius= "5px 5px  0 0";
    document.getElementById("myripebarM").style.width= "98%";
    setTimeout(() => {
        document.getElementById("paint").style.display= "none";

    }, 150);

    actionbarDown();
}

function openPaint(){
    document.getElementById("paint").style.display= "block";
    document.getElementById("maxApp").style.display= "block";

    setTimeout(() => {
    document.getElementById("paint").style.top= "50%";
    document.getElementById("paint").style.left= "50%";
    document.getElementById("paint").style.transform= "translate(-50%, -50%) scale(1)";
    document.getElementById("paint").style.visibility= "visible";
    document.getElementById("paint").style.opacity= "1";
    document.getElementById("myripebarM").style.left= "0";
    document.getElementById("myripebarM").style.borderRadius= "0";
    document.getElementById("myripebarM").style.width= "100%";
    }, 1);

    actionbarDown();
}

// APPS - Notes
function minNotes(){
    document.getElementById("notes").style.transform= "translate(-50%, -50%) scale(0)";
    document.getElementById("notes").style.visibility= "hidden";
    document.getElementById("notes").style.opacity= "0";
    document.getElementById("notes").style.top= "100%";
    document.getElementById("notes").style.left= "50%";

    setTimeout(() => {
        document.getElementById("notes").style.display= "none";
    }, 150);

    actionbarDown();
}

function maxNotes(){
    if(document.getElementById("notes").style.width == "100%"){
    document.getElementById("notes").style.top= "50%";
    document.getElementById("notes").style.left= "50%";
    document.getElementById("notes").style.width= "40%";
    document.getElementById("notes").style.height= "80%";
    document.getElementById("notes").style.borderRadius= "10px";
    document.getElementById("notes").style.transform= "translate(-50%, -50%) scale(1)";
    }
    else{
        document.getElementById("notes").style.top= "50%";
        document.getElementById("notes").style.left= "50%";
        document.getElementById("notes").style.width= "100%";
        document.getElementById("notes").style.height= "100%";
        document.getElementById("notes").style.borderRadius= "0px";
        document.getElementById("notes").style.transform= "translate(-50%, -50%) scale(1)";
    }
}

function closeNotes(){
    document.getElementById("notes").style.transform= "translate(-50%, -50%) scale(0)";
    document.getElementById("notes").style.visibility= "hidden";
    document.getElementById("notes").style.opacity= "0";
    document.getElementById("notes").style.top= "50%";
    document.getElementById("notes").style.left= "50%";
    document.getElementById("myripebarM").style.left= "1%";
    document.getElementById("myripebarM").style.borderRadius= "5px 5px  0 0";
    document.getElementById("myripebarM").style.width= "98%";
    setTimeout(() => {
        document.getElementById("notes").style.display= "none";

    }, 150);

    actionbarDown();
}


function openNotes(){
    document.getElementById("notes").style.display= "block";
    document.getElementById("maxApp").style.display= "block";

    setTimeout(() => {
    document.getElementById("notes").style.top= "50%";
    document.getElementById("notes").style.left= "50%";
    document.getElementById("notes").style.transform= "translate(-50%, -50%) scale(1)";
    document.getElementById("notes").style.visibility= "visible";
    document.getElementById("notes").style.opacity= "1";
    document.getElementById("myripebarM").style.left= "0";
    document.getElementById("myripebarM").style.borderRadius= "0";
    document.getElementById("myripebarM").style.width= "100%";
    dockZoomOut();
    }, 1);

    actionbarDown();
}

// APPS - Snake Game
function minSnake(){
    document.getElementById("snake").style.transform= "translate(-50%, -50%) scale(0)";
    document.getElementById("snake").style.visibility= "hidden";
    document.getElementById("snake").style.opacity= "0";
    document.getElementById("snake").style.top= "100%";
    document.getElementById("snake").style.left= "50%";

    setTimeout(() => {
        document.getElementById("snake").style.display= "none";
    }, 150);

    actionbarDown();
}

function maxSnake(){
    if(document.getElementById("snake").style.width == "100%"){
    document.getElementById("snake").style.top= "50%";
    document.getElementById("snake").style.left= "50%";
    document.getElementById("snake").style.width= "52.25%";
    document.getElementById("snake").style.height= "80%";
    document.getElementById("snake").style.borderRadius= "10px";
    document.getElementById("snake").style.transform= "translate(-50%, -50%) scale(1)";
    }
    else{
        document.getElementById("snake").style.top= "50%";
        document.getElementById("snake").style.left= "50%";
        document.getElementById("snake").style.width= "100%";
        document.getElementById("snake").style.height= "100%";
        document.getElementById("snake").style.borderRadius= "0px";
        document.getElementById("snake").style.transform= "translate(-50%, -50%) scale(1)";
    }
}

function closeSnake(){
    document.getElementById("snake").style.transform= "translate(-50%, -50%) scale(0)";
    document.getElementById("snake").style.visibility= "hidden";
    document.getElementById("snake").style.opacity= "0";
    document.getElementById("snake").style.top= "50%";
    document.getElementById("snake").style.left= "50%";
    document.getElementById("myripebarM").style.left= "1%";
    document.getElementById("myripebarM").style.borderRadius= "5px 5px  0 0";
    document.getElementById("myripebarM").style.width= "98%";
    setTimeout(() => {
        document.getElementById("snake").style.display= "none";

    }, 150);

    actionbarDown();
}

function openSnake(){
    document.getElementById("snake").style.display= "block";
    document.getElementById("maxApp").style.display= "block";

    setTimeout(() => {
    document.getElementById("snake").style.top= "50%";
    document.getElementById("snake").style.left= "50%";
    document.getElementById("snake").style.transform= "translate(-50%, -50%) scale(1)";
    document.getElementById("snake").style.visibility= "visible";
    document.getElementById("snake").style.opacity= "1";
    document.getElementById("myripebarM").style.left= "0";
    document.getElementById("myripebarM").style.borderRadius= "0";
    document.getElementById("myripebarM").style.width= "100%";
    dockZoomOut();
    }, 1);

    actionbarDown();
}


// APPS - piano Game
function minPiano(){
    document.getElementById("piano").style.transform= "translate(-50%, -50%) scale(0)";
    document.getElementById("piano").style.visibility= "hidden";
    document.getElementById("piano").style.opacity= "0";
    document.getElementById("piano").style.top= "100%";
    document.getElementById("piano").style.left= "50%";

    setTimeout(() => {
        document.getElementById("piano").style.display= "none";
    }, 150);

    actionbarDown();
}

function maxPiano(){
    if(document.getElementById("piano").style.width == "100%"){
    document.getElementById("piano").style.top= "50%";
    document.getElementById("piano").style.left= "50%";
    document.getElementById("piano").style.width= "60%";
    document.getElementById("piano").style.height= "80%";
    document.getElementById("piano").style.borderRadius= "10px";
    document.getElementById("piano").style.transform= "translate(-50%, -50%) scale(1)";
    }
    else{
        document.getElementById("piano").style.top= "50%";
        document.getElementById("piano").style.left= "50%";
        document.getElementById("piano").style.width= "100%";
        document.getElementById("piano").style.height= "100%";
        document.getElementById("piano").style.borderRadius= "0px";
        document.getElementById("piano").style.transform= "translate(-50%, -50%) scale(1)";
    }
}

function closePiano(){
    document.getElementById("piano").style.transform= "translate(-50%, -50%) scale(0)";
    document.getElementById("piano").style.visibility= "hidden";
    document.getElementById("piano").style.opacity= "0";
    document.getElementById("piano").style.top= "50%";
    document.getElementById("piano").style.left= "50%";
    document.getElementById("myripebarM").style.left= "1%";
    document.getElementById("myripebarM").style.borderRadius= "5px 5px  0 0";
    document.getElementById("myripebarM").style.width= "98%";
    setTimeout(() => {
        document.getElementById("piano").style.display= "none";

    }, 150);

    actionbarDown();
}

function openPiano(){
    document.getElementById("piano").style.display= "block";
    document.getElementById("maxApp").style.display= "block";

    setTimeout(() => {
    document.getElementById("piano").style.top= "50%";
    document.getElementById("piano").style.left= "50%";
    document.getElementById("piano").style.transform= "translate(-50%, -50%) scale(1)";
    document.getElementById("piano").style.visibility= "visible";
    document.getElementById("piano").style.opacity= "1";
    document.getElementById("myripebarM").style.left= "0";
    document.getElementById("myripebarM").style.borderRadius= "0";
    document.getElementById("myripebarM").style.width= "100%";
    dockZoomOut();
    }, 1);

    actionbarDown();
}


// APPS - Windows
function minWindows(){
    document.getElementById("Windows").style.transform= "translate(-50%, -50%) scale(0)";
    document.getElementById("Windows").style.visibility= "hidden";
    document.getElementById("Windows").style.opacity= "0";
    document.getElementById("Windows").style.top= "100%";
    document.getElementById("Windows").style.left= "50%";

    setTimeout(() => {
        document.getElementById("Windows").style.display= "none";
    }, 150);

    actionbarDown();
}

function maxWindows(){
    if(document.getElementById("Windows").style.width == "100%"){
    document.getElementById("Windows").style.top= "50%";
    document.getElementById("Windows").style.left= "50%";
    document.getElementById("Windows").style.width= "95%";
    document.getElementById("Windows").style.height= "95%";
    document.getElementById("Windows").style.borderRadius= "10px";
    document.getElementById("Windows").style.transform= "translate(-50%, -50%) scale(1)";
    }
    else{
        document.getElementById("Windows").style.top= "50%";
        document.getElementById("Windows").style.left= "50%";
        document.getElementById("Windows").style.width= "100%";
        document.getElementById("Windows").style.height= "100%";
        document.getElementById("Windows").style.borderRadius= "0px";
        document.getElementById("Windows").style.transform= "translate(-50%, -50%) scale(1)";
    }
}

function closeWindows(){
    document.getElementById("Windows").style.transform= "translate(-50%, -50%) scale(0)";
    document.getElementById("Windows").style.visibility= "hidden";
    document.getElementById("Windows").style.opacity= "0";
    document.getElementById("Windows").style.top= "50%";
    document.getElementById("Windows").style.left= "50%";
    document.getElementById("myripebarM").style.left= "1%";
    document.getElementById("myripebarM").style.borderRadius= "5px 5px  0 0";
    document.getElementById("myripebarM").style.width= "98%";
    setTimeout(() => {
        document.getElementById("Windows").style.display= "none";

    }, 150);

    actionbarDown();
}

function openWindows(){
    document.getElementById("Windows").style.display= "block";
    document.getElementById("maxApp").style.display= "block";

    setTimeout(() => {
    document.getElementById("Windows").style.top= "50%";
    document.getElementById("Windows").style.left= "50%";
    document.getElementById("Windows").style.transform= "translate(-50%, -50%) scale(1)";
    document.getElementById("Windows").style.visibility= "visible";
    document.getElementById("Windows").style.opacity= "1";
    document.getElementById("myripebarM").style.left= "0";
    document.getElementById("myripebarM").style.borderRadius= "0";
    document.getElementById("myripebarM").style.width= "100%";
    }, 1);

    actionbarDown();
}

// APPS - Browser
function minBwr(){
    document.getElementById("Browser").style.transform= "translate(-50%, -50%) scale(0)";
    document.getElementById("Browser").style.visibility= "hidden";
    document.getElementById("Browser").style.opacity= "0";
    document.getElementById("Browser").style.top= "100%";
    document.getElementById("Browser").style.left= "50%";

    setTimeout(() => {
        document.getElementById("Browser").style.display= "none";
    }, 150);

    actionbarDown();
}

function maxBwr(){
    if(document.getElementById("Browser").style.width == "100%"){
    document.getElementById("Browser").style.top= "50%";
    document.getElementById("Browser").style.left= "50%";
    document.getElementById("Browser").style.width= "95%";
    document.getElementById("Browser").style.height= "95%";
    document.getElementById("Browser").style.borderRadius= "10px";
    document.getElementById("Browser").style.transform= "translate(-50%, -50%) scale(1)";
    }
    else{
        document.getElementById("Browser").style.top= "50%";
        document.getElementById("Browser").style.left= "50%";
        document.getElementById("Browser").style.width= "100%";
        document.getElementById("Browser").style.height= "100%";
        document.getElementById("Browser").style.borderRadius= "0px";
        document.getElementById("Browser").style.transform= "translate(-50%, -50%) scale(1)";
    }
}

function closeBwr(){
    document.getElementById("Browser").style.transform= "translate(-50%, -50%) scale(0)";
    document.getElementById("Browser").style.visibility= "hidden";
    document.getElementById("Browser").style.opacity= "0";
    document.getElementById("Browser").style.top= "50%";
    document.getElementById("Browser").style.left= "50%";
    document.getElementById("myripebarM").style.left= "1%";
    document.getElementById("myripebarM").style.borderRadius= "5px 5px  0 0";
    document.getElementById("myripebarM").style.width= "98%";
    setTimeout(() => {
        document.getElementById("Browser").style.display= "none";

    }, 150);

    actionbarDown();
}

function openBwr(){
    document.getElementById("Browser").style.display= "block";
    document.getElementById("maxApp").style.display= "block";

    setTimeout(() => {
    document.getElementById("Browser").style.top= "50%";
    document.getElementById("Browser").style.left= "50%";
    document.getElementById("Browser").style.transform= "translate(-50%, -50%) scale(1)";
    document.getElementById("Browser").style.visibility= "visible";
    document.getElementById("Browser").style.opacity= "1";
    document.getElementById("myripebarM").style.left= "0";
    document.getElementById("myripebarM").style.borderRadius= "0";
    document.getElementById("myripebarM").style.width= "100%";
    dockZoomOut();
    }, 1);

    actionbarDown();
}

// APPS - Image Ediotor
function minIed(){
    document.getElementById("IEditor").style.transform= "translate(-50%, -50%) scale(0)";
    document.getElementById("IEditor").style.visibility= "hidden";
    document.getElementById("IEditor").style.opacity= "0";
    document.getElementById("IEditor").style.top= "100%";
    document.getElementById("IEditor").style.left= "50%";

    setTimeout(() => {
        document.getElementById("IEditor").style.display= "none";
    }, 150);

    actionbarDown();
}

function maxIed(){
    if(document.getElementById("IEditor").style.width == "100%"){
    document.getElementById("IEditor").style.top= "50%";
    document.getElementById("IEditor").style.left= "50%";
    document.getElementById("IEditor").style.width= "95%";
    document.getElementById("IEditor").style.height= "95%";
    document.getElementById("IEditor").style.borderRadius= "10px";
    document.getElementById("IEditor").style.transform= "translate(-50%, -50%) scale(1)";
    }
    else{
        document.getElementById("IEditor").style.top= "50%";
        document.getElementById("IEditor").style.left= "50%";
        document.getElementById("IEditor").style.width= "100%";
        document.getElementById("IEditor").style.height= "100%";
        document.getElementById("IEditor").style.borderRadius= "0px";
        document.getElementById("IEditor").style.transform= "translate(-50%, -50%) scale(1)";
    }
}

function closeIed(){
    document.getElementById("IEditor").style.transform= "translate(-50%, -50%) scale(0)";
    document.getElementById("IEditor").style.visibility= "hidden";
    document.getElementById("IEditor").style.opacity= "0";
    document.getElementById("IEditor").style.top= "50%";
    document.getElementById("IEditor").style.left= "50%";
    document.getElementById("myripebarM").style.left= "1%";
    document.getElementById("myripebarM").style.borderRadius= "5px 5px  0 0";
    document.getElementById("myripebarM").style.width= "98%";
    setTimeout(() => {
        document.getElementById("IEditor").style.display= "none";

    }, 150);

    actionbarDown();
}

function openIed(){
    document.getElementById("IEditor").style.display= "block";
    document.getElementById("maxApp").style.display= "block";

    setTimeout(() => {
    document.getElementById("IEditor").style.top= "50%";
    document.getElementById("IEditor").style.left= "50%";
    document.getElementById("IEditor").style.transform= "translate(-50%, -50%) scale(1)";
    document.getElementById("IEditor").style.visibility= "visible";
    document.getElementById("IEditor").style.opacity= "1";
    document.getElementById("myripebarM").style.left= "0";
    document.getElementById("myripebarM").style.borderRadius= "0";
    document.getElementById("myripebarM").style.width= "100%";
    }, 1);

    actionbarDown();
}

// APPS - Scramble
function minScr(){
    document.getElementById("Scramble").style.transform= "translate(-50%, -50%) scale(0)";
    document.getElementById("Scramble").style.visibility= "hidden";
    document.getElementById("Scramble").style.opacity= "0";
    document.getElementById("Scramble").style.top= "100%";
    document.getElementById("Scramble").style.left= "50%";

    setTimeout(() => {
        document.getElementById("Scramble").style.display= "none";
    }, 150);

    actionbarDown();
}

function maxScr(){
    if(document.getElementById("Scramble").style.width == "100%"){
    document.getElementById("Scramble").style.top= "50%";
    document.getElementById("Scramble").style.left= "50%";
    document.getElementById("Scramble").style.width= "95%";
    document.getElementById("Scramble").style.height= "95%";
    document.getElementById("Scramble").style.borderRadius= "10px";
    document.getElementById("Scramble").style.transform= "translate(-50%, -50%) scale(1)";
    }
    else{
        document.getElementById("Scramble").style.top= "50%";
        document.getElementById("Scramble").style.left= "50%";
        document.getElementById("Scramble").style.width= "100%";
        document.getElementById("Scramble").style.height= "100%";
        document.getElementById("Scramble").style.borderRadius= "0px";
        document.getElementById("Scramble").style.transform= "translate(-50%, -50%) scale(1)";
    }
}

function closeScr(){
    document.getElementById("Scramble").style.transform= "translate(-50%, -50%) scale(0)";
    document.getElementById("Scramble").style.visibility= "hidden";
    document.getElementById("Scramble").style.opacity= "0";
    document.getElementById("Scramble").style.top= "50%";
    document.getElementById("Scramble").style.left= "50%";
    document.getElementById("myripebarM").style.left= "1%";
    document.getElementById("myripebarM").style.borderRadius= "5px 5px  0 0";
    document.getElementById("myripebarM").style.width= "98%";
    setTimeout(() => {
        document.getElementById("Scramble").style.display= "none";

    }, 150);

    actionbarDown();
}

function openScr(){
    document.getElementById("Scramble").style.display= "block";
    document.getElementById("maxApp").style.display= "block";

    setTimeout(() => {
    document.getElementById("Scramble").style.top= "50%";
    document.getElementById("Scramble").style.left= "50%";
    document.getElementById("Scramble").style.transform= "translate(-50%, -50%) scale(1)";
    document.getElementById("Scramble").style.visibility= "visible";
    document.getElementById("Scramble").style.opacity= "1";
    document.getElementById("myripebarM").style.left= "0";
    document.getElementById("myripebarM").style.borderRadius= "0";
    document.getElementById("myripebarM").style.width= "100%";
    dockZoomOut();
    }, 1);

    actionbarDown();
}

// APPS - games
function closeGames(){
    document.getElementById("games").style.transform= "translate(-50%, -50%) scale(0)";
    document.getElementById("games").style.visibility= "hidden";
    document.getElementById("games").style.opacity= "0";
    document.getElementById("games").style.top= "50%";
    document.getElementById("games").style.left= "50%";
    document.getElementById("myripebarM").style.left= "1%";
    document.getElementById("myripebarM").style.borderRadius= "5px 5px  0 0";
    document.getElementById("myripebarM").style.width= "98%";
    setTimeout(() => {
        document.getElementById("games").style.display= "none";

    }, 150);

    actionbarDown();
}

function openGames(){
    document.getElementById("games").style.display= "block";
    document.getElementById("maxApp").style.display= "block";

    setTimeout(() => {
    document.getElementById("games").style.top= "50%";
    document.getElementById("games").style.left= "50%";
    document.getElementById("games").style.transform= "translate(-50%, -50%) scale(1)";
    document.getElementById("games").style.visibility= "visible";
    document.getElementById("games").style.opacity= "1";
    document.getElementById("myripebarM").style.left= "0";
    document.getElementById("myripebarM").style.borderRadius= "0";
    document.getElementById("myripebarM").style.width= "100%";
    }, 1);

    actionbarDown();
}

// APPS - About
function closeAbout(){
    document.getElementById("AboutApp").style.transform= "translate(-50%, -50%) scale(0)";
    document.getElementById("AboutApp").style.visibility= "hidden";
    document.getElementById("AboutApp").style.opacity= "0";
    document.getElementById("AboutApp").style.top= "50%";
    document.getElementById("AboutApp").style.left= "50%";
    document.getElementById("myripebarM").style.left= "1%";
    document.getElementById("myripebarM").style.borderRadius= "5px 5px  0 0";
    document.getElementById("myripebarM").style.width= "98%";
    setTimeout(() => {
        document.getElementById("AboutApp").style.display= "none";

    }, 150);

    actionbarDown();
}

function openAbout(){
    document.getElementById("AboutApp").style.display= "block";
    document.getElementById("maxApp").style.display= "block";

    setTimeout(() => {
    document.getElementById("AboutApp").style.top= "50%";
    document.getElementById("AboutApp").style.left= "50%";
    document.getElementById("AboutApp").style.transform= "translate(-50%, -50%) scale(1)";
    document.getElementById("AboutApp").style.visibility= "visible";
    document.getElementById("AboutApp").style.opacity= "1";
    document.getElementById("myripebarM").style.left= "0";
    document.getElementById("myripebarM").style.borderRadius= "0";
    document.getElementById("myripebarM").style.width= "100%";
    }, 1);

    actionbarDown();
}

// APPS - Updates
function closeUpdates(){
    document.getElementById("UpdateApp").style.transform= "translate(-50%, -50%) scale(0)";
    document.getElementById("UpdateApp").style.visibility= "hidden";
    document.getElementById("UpdateApp").style.opacity= "0";
    document.getElementById("UpdateApp").style.top= "50%";
    document.getElementById("UpdateApp").style.left= "50%";
    document.getElementById("myripebarM").style.left= "1%";
    document.getElementById("myripebarM").style.borderRadius= "5px 5px  0 0";
    document.getElementById("myripebarM").style.width= "98%";
    setTimeout(() => {
        document.getElementById("UpdateApp").style.display= "none";

    }, 150);

    actionbarDown();
}

function openUpdates(){
    document.getElementById("UpdateApp").style.display= "block";
    document.getElementById("maxApp").style.display= "block";

    setTimeout(() => {
    document.getElementById("UpdateApp").style.top= "50%";
    document.getElementById("UpdateApp").style.left= "50%";
    document.getElementById("UpdateApp").style.transform= "translate(-50%, -50%) scale(1)";
    document.getElementById("UpdateApp").style.visibility= "visible";
    document.getElementById("UpdateApp").style.opacity= "1";
    document.getElementById("myripebarM").style.left= "0";
    document.getElementById("myripebarM").style.borderRadius= "0";
    document.getElementById("myripebarM").style.width= "100%";
    }, 1);

    actionbarDown();
}