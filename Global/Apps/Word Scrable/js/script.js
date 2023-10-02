const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span"),
timeText = document.querySelector(".time b"),
inputField = document.querySelector("input"),
refreshBtn = document.querySelector(".refresh-word"),
checkBtn = document.querySelector(".check-word");
header = document.getElementById("Header");
start = document.getElementById("start-btn");
details = document.getElementsByClassName("details")[0];
let correctWord, timer;

function onload(){
    checkBtn.style.display = "none";
    refreshBtn.style.display = "none";
    inputField.style.display = "none";
    details.style.display = "none";
    header.style.display = "none";

    start.addEventListener("click", ()=>{
        initGame();
        start.style.display = "none";
        checkBtn.style.display = "block";
        refreshBtn.style.display = "block";
        inputField.style.display = "block";
        details.style.display = "block";
        header.style.display = "block";
    })

}

const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(() => {
        if(maxTime > 0) {
            maxTime--;
            return timeText.innerText = maxTime;
        }
        header.innerHTML = `Time off! ${correctWord.toUpperCase()} was the correct word`
        
        setTimeout(() => {
            header.innerHTML = "Unscramble the word";
        }, 3000)

        initGame();

    }, 1000);
}

const initGame = () => {
    initTimer(30);
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerText = wordArray.join("");
    hintText.innerText = randomObj.hint;
    correctWord = randomObj.word.toLowerCase();;
    inputField.value = "";
    inputField.setAttribute("maxlength", correctWord.length);
}

const checkWord = () => {
    let userWord = inputField.value.toLowerCase();
    if(!userWord) return header.innerHTML = "Please enter the word to check!";
    if(userWord !== correctWord) return header.innerHTML = `Oops! ${userWord} is not a correct word`;
    header.innerHTML = `Congrats! ${correctWord.toUpperCase()} is the correct word`;
    initGame();
}

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);