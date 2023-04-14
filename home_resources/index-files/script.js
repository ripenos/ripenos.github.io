function Load() {
 let load = document.getElementById("Load")
 let loadCont = document.getElementsByClassName('load-content')[0]
 let loadImg = document.getElementById("logo-load")
 let loadP = document.getElementById("p-load")
 let spinner = document.getElementsByClassName('spinner')[0]

 setTimeout(() => {
        loadCont.style.opacity= "1";
        setTimeout(() => {
            loadImg.style.width= "8.5em"
            loadImg.style.borderRadius= "25px"
            loadImg.style.transform= "translateY(-60%)";
            loadP.style.transform= "translate(-50%, -10%)";
            loadP.style.opacity= "1";
        }, 1000);
        setTimeout(() => {
            spinner.style.opacity= "1";
        }, 2000);
        setTimeout(() => {
            load.style.opacity= "0"
            setTimeout(() => {
                load.style.display= "none"
                window.location.replace("https://ripenos.webflow.io/")
            }, 1000);
        }, 4500);
    }, 500);
}