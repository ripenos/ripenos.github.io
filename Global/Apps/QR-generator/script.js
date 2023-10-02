const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generateBtn = document.getElementById("GenerateBtn"),
downloadBtn = document.getElementById("downloadBtn"),
qrImg = wrapper.querySelector(".qr-code img");
let preValue;

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim();
    if (!qrValue || preValue === qrValue) return;
    preValue = qrValue;
    generateBtn.innerText = "Generating...";
    const qrDataURL = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    qrImg.src = qrDataURL;
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate";
        downloadBtn.style.pointerEvents = "all";
        
        // Create a Blob from the data URL
        fetch(qrDataURL)
            .then((response) => response.blob())
            .then((blob) => {
                // Create a Blob URL and set it as the href
                const blobURL = window.URL.createObjectURL(blob);
                downloadBtn.href = blobURL;
                downloadBtn.download = `RGOS-QR.png`;
                
                // Add a short delay to update the download link
                setTimeout(() => {
                    downloadBtn.target = "_blank"; // Open in a new tab/window
                }, 100);
            });
    });
});


qrInput.addEventListener("keyup", () => {
    if(!qrInput.value.trim()) {
        wrapper.classList.remove("active");
        preValue = "";
    }
});