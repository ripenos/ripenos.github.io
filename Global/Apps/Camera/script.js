var constraints = { video: { facingMode: "environment" }, audio: false };
var track = null;
const cameraView = document.querySelector("#camera--view"),
    cameraOutput = document.querySelector("#camera--output"),
    cameraSensor = document.querySelector("#camera--sensor"),
    cameraTrigger = document.querySelector("#camera--trigger");
function cameraStart() {
    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function(stream) {
            track = stream.getTracks()[0];
            cameraView.srcObject = stream;
        })
        .catch(function(error) {
            console.error("Oops. Something is broken.", error);
        });
}
cameraTrigger.onclick = function() {
    cameraSensor.width = cameraView.videoWidth;
    cameraSensor.height = cameraView.videoHeight;
    cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
    cameraOutput.src = cameraSensor.toDataURL("image/webp");
    save2();
    document.getElementById('camIcon').classList.add('refreshImg');
    setTimeout(() => {
     document.getElementById('camIcon').classList.remove('refreshImg');
    }, 450);
};

function save2() {
     var gh = cameraOutput.src;
 
     var a  = document.createElement('a');
     a.href = gh;
     a.download = 'Captured-image-rgos.png';
 
     a.click()
     
 }

window.addEventListener("load", cameraStart, false);