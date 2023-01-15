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
    document.getElementById("files").style.height= "70vh";
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

    setTimeout(() => {
        document.getElementById("files").style.display= "none";
        document.getElementById("maxApp").style.display= "none";

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
    }, 1);

    actionbarDown();
}
