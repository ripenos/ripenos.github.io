var audio = document.getElementById("audioPlayer");
var playPauseButton = document.getElementById("playPauseButton");
var playPauseButton2 = document.getElementById("playPauseButtonS");
var progressSlider = document.getElementById("WidgetM-slider");

var SongTime = document.querySelector("#musicW-start-no2");
var SongisDragging = false;
var currentSongIndex = 0;
var playlist = document.getElementsByClassName("playlist");
var loopButton = document.getElementById("MW-repeat");
var shuffleButton = document.getElementById("MW-shuffle");
var isLoopEnabled = false;
var isShuffleEnabled = false;
var shuffledPlaylist = [];
function togglePlayPause() {
  if (audio.paused) {
    audio.play();
    playPauseButton.src = "https://img.icons8.com/fluency-systems-regular/452/pause--v1.png";
    playPauseButton2.src = "https://img.icons8.com/fluency-systems-regular/452/pause--v1.png";
  } else {
    audio.pause();
    playPauseButton.src = "https://img.icons8.com/fluency-systems-regular/452/play--v1.png";
    playPauseButton2.src = "https://img.icons8.com/fluency-systems-regular/452/play--v1.png";
  }
}

function playSong(index) {
if (isShuffleEnabled) {
currentSongIndex = index;
} else {
if (currentSongIndex === index && !audio.paused) {
  return;
}

currentSongIndex = index;
}

updateActiveSong();

var songPath = "../../Global/Assets/Musics/music" + (index + 1) + ".m4a";
audio.src = songPath;

audio.play();
playPauseButton.src = "https://img.icons8.com/fluency-systems-regular/452/pause--v1.png";
playPauseButton2.src = "https://img.icons8.com/fluency-systems-regular/452/pause--v1.png";
}

function updateActiveSong() {
for (var i = 0; i < playlist.length; i++) {
if (i === currentSongIndex) {
  playlist[i].classList.add("active");
} else {
  playlist[i].classList.remove("active");
}
}
}

function updateProgressBar() {
var progress = (audio.currentTime / audio.duration) * 100;
progressSlider.value = progress;
}

function updateTime() {
var currentTime = formatTime(audio.currentTime);
var duration = formatTime(audio.duration);
SongTime.textContent = currentTime + " / " + duration;
}

function formatTime(time) {
var minutes = Math.floor(time / 60);
var seconds = Math.floor(time % 60);
return padZero(minutes) + ":" + padZero(seconds);
}

function padZero(value) {
return value < 10 ? "0" + value : value;
}

function seekSong() {
var progressPercentage = progressSlider.value;
audio.currentTime = audio.duration * (progressPercentage / 100);
updateTime();
}

function toggleLoop() {
isLoopEnabled = !isLoopEnabled;
audio.loop = isLoopEnabled;
}

function toggleShuffle() {
isShuffleEnabled = !isShuffleEnabled;

if (isShuffleEnabled) {
shuffledPlaylist = shuffleArray(Array.from(playlist));
}
}

function shuffleArray(array) {
var currentIndex = array.length;
var temporaryValue, randomIndex;

while (currentIndex !== 0) {
randomIndex = Math.floor(Math.random() * currentIndex);
currentIndex -= 1;

temporaryValue = array[currentIndex];
array[currentIndex] = array[randomIndex];
array[randomIndex] = temporaryValue;
}

return array;
}

audio.addEventListener("timeupdate", function() {
if (!SongisDragging) {
updateProgressBar();
updateTime();
}
});

progressSlider.addEventListener("mousedown", function() {
SongisDragging = true;
});

progressSlider.addEventListener("mouseup", function() {
if (SongisDragging) {
SongisDragging = false;
seekSong();
}
});
let volumeslider = document.getElementById('volumeslider');
let volImgFly = document.getElementById('volImgFly')
volumeslider.addEventListener("mousemove", setvolume);

function setvolume(){
  audio.volume = volumeslider.value / 100;
}

//function volImg(){
  //if(volumeslider.value = "100"){
    //volImgFly.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD3ElEQVR4nO3YS2gTQRgH8FFRqvhAa8lMmiYzKVjrxSqePCkoipdSaFNEEZG2vtqoVE16kKJY0IMkVVFKtmY29YEpgkdRDwU96EnEXsQHqOBFxVd7aHbtyMxOJMYk3U2bbVf6wUImh+z/l3nszgAwW7NVmsIYrwVOLYxxDyFEJ4TsBg4Nz+TlLITP56uTodMAhjHWMMbNwClFCGnioTMRjusJUkJEOBprB05EnDivLAlHYrfCUYUBu4pMESLUq6wLRZVXPLytgKlAhCL9e0IRZTQd3nZAsQg+ZEJR5WZm8GkDWEWcjMRqw1FlOFf4iQCMgTl6HAVZ3FcGpgORa8hYAWgq7NFVxHQVDXKMbYiamtp94agSKxTcDGAs7q7TKBoRCIpKs+TmQvj91eM7DxxlxQJ0Co+zhIuIz6q7mQM0Ff1gSpXbPkR1NTOD+Cd8HO2Sw2aYKeVLJOi+gYC9RYdsaOnwBFqDg4G2jh+BtiDLvrbUNzK/38+sIrLvw5IVi3UVPpeBz/HvUircoFE0rlH0kyU9C4sL39bxJVfwzGvX4U7LCBGagTkaRZd16grw9tgAWi8Cq3CUDaxERi+gJxK1wzLA+OcLh+cXD2QVwX9fi8PtMtxXprrLjcDwrhxKHaKtwlNyLlyxDsgzbHIBrCLS99ApfCACUnT6r7lA4T3eTiXcGyXoaRGAicNnAqwg0vfQKGowAsJnvM2uQ5/slfeiPVDpMYDwgy0As4j0PVjchWUPjIh2cs0CY+LCMT5HWB+Yb8wLlLL8UCsWYAbxB5BwETnGvxkgX5nsgVHR7kOLMtu2ASZCpO+hJ2CTfOI+EYFpRbUEvclqv7YMaGoNfp8MQCDaj+dE8Hcn1g3m6ip8LAFdAkRRi2wneVtLoK1yUj8qBnBnsoB8CP7udKml6rycoJ9Y3/JlAqDChyJwwrVXACi6IOfIWcuA5pbDqwKtwc+TBRRCDJ1yD2rUtVmEjbs2/QENrFhqAOBL/h1fTi0DRC/sP1YZaAveLjSczAAKIQgfTjfQSo2it3JJ7RThVVQv//2PLAnmgVIVf/8PR2Mjk0FcO+jp5culTtEQXzp5YP5iJ+dDCJS6ui72rQ5FYi/MInLtJ24d8Vxl/bCC/55OYbccTu/4UgrsqGMXkgvNbmgIIY35dnYaRQ3y4fVLU9E2YHeZ3VLmQ9zprOw3hhPsBtNVZjf1JA+iZ3fVGTDdZfZYhRQYTmAmlJmDLTLjESaOFslMR5g53CUzHWHmeJ04ATFRkf8BgTFuzkZgjFNer9cPHNoT44SQQ8BpRQxEypHh0+X1esWZ6WzNFpj6+g0CY+vPOFK2iwAAAABJRU5ErkJggg=="
 // }
  //else if(volumeslider.value <= "50"){
   // volImgFly.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABeklEQVR4nO2ZP0vDQBiHA/oFRKt3nf0mCqKbJvkKTpq1b7PEP7MmHeySlN4JOnQVEfFD6OQH0L0VxMU7OalepBSLgp7te94DWTL9HpIfl/eN5zkcDofVhJ3OVC0rGh5GoNmcgSy/gqxQHjbgIF+ErLjth0cnAIetZUiLbhkelQA08k1Ii+fB8CgEQl3W4eAoBGCgrOgEYKisqATgk7KiEYARZZ0IgY0I1oIovg+iWI26vht8LALBF+F/IiA43VEtUjEtoEwJSE6V4KQn2sTHKcDo+bsEfZHHJEQnoCXqWuJBtSsEnYCWONMS+ygFRLu61BeQjNygFFC8OqsL/YRbgNFHlAKC05W3V4iTa5QCkpNL/QT20AkIRnfLA02dzi+gEpCcXpQHmWAk+PXwfyCgBCNdwei6kfCmP+YkI4k6oXOeSfyteNXfrt+ZLPHYgUkeaP7FSGnFUG/FWsWKxZYVq0VrlrtWrNet+MFRkiTJdC3Njz5uOBwOh1W8AgUh/xRUwWlgAAAAAElFTkSuQmCC"
  //}
  //else{
   // volImgFly.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACiUlEQVR4nO2ZzWsTQRjGhx1vehFbMpPGj0P/EwU/8KLJYndij4qHNB67zSV+nDWpYClkdWfS+kHwVkXEP0JPnjzpQRCMmt2AdqaO7FeaCJLAJmV22Qfm8l7y/PK+T+YjAGTKlClTqqV3OnC1aa2DJMrc2DhqNltvzaYlQdJk3mstmk3rg2c+cQDm/UdnzIbVjcwnCsBcb103G9busPlEAOhhWP81nggAcyis4wAEwy8ExRVpHc8DFcM6AYD0FqfoN2fosaSFBaXCOh4gf4UztO0BiACkK9pIVyask2ZAMnxCUNwJIPAfwdCNqZm7XDUvlKq1z6VqTf5vTWp8XIgFxRUPwF82Kk4FYJz5OACOAW/1dDA/AsHwit8Jhr7JrYXCNADkrABcAqVrwO89A4582/vjhCylARyivfIgHAPuOQTqw5ngDO964Y7dhVkCeHKJtuZ3gsAfrg5QVOcUPfN/Zm1cVRrAk2NoO2En7kY1YeNyuE+8VB+gDE8HANr7qCbbhcUgzPij8gA/l8GxsAP9fYDc4XBfcBMD4BLoDAA680fCDvSUB3ANeDYcoXeJHCHH0N74AATeiWqCoqt+iCneURrAIfB2tKE5SyAX1TlFz0OAirIADtFeRxtZrwxLUV3auVOcYs4Z+hX7iD3zowSB3X4ZXhr+TP+iE8z/Zizzsz7MuUSr9wwwN2Ke4puh+a9yaw7HBihWaueLK2ufZhnigXkbV/2jNMN7nOUugsRcaLbRycHYUCwEQ8sHZj7WlbKdX+IMPfVOniIYmy/cRucO3HzsSz1DfU7RA/kEj+RB/WeV4OJyTQnjqXnYSsXTYmoed1PxvJ6KPzgi1ev1Q6uN1sNBIVOmTJlSpb+dqca1CVeIRgAAAABJRU5ErkJggg=="
  //}
//}

function functionVolMute(){
  if( volumeslider.value == "100"){
    volumeslider.value = "0"
    audio.volume = 0;
    volImgFly.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD3ElEQVR4nO3YS2gTQRgH8FFRqvhAa8lMmiYzKVjrxSqePCkoipdSaFNEEZG2vtqoVE16kKJY0IMkVVFKtmY29YEpgkdRDwU96EnEXsQHqOBFxVd7aHbtyMxOJMYk3U2bbVf6wUImh+z/l3nszgAwW7NVmsIYrwVOLYxxDyFEJ4TsBg4Nz+TlLITP56uTodMAhjHWMMbNwClFCGnioTMRjusJUkJEOBprB05EnDivLAlHYrfCUYUBu4pMESLUq6wLRZVXPLytgKlAhCL9e0IRZTQd3nZAsQg+ZEJR5WZm8GkDWEWcjMRqw1FlOFf4iQCMgTl6HAVZ3FcGpgORa8hYAWgq7NFVxHQVDXKMbYiamtp94agSKxTcDGAs7q7TKBoRCIpKs+TmQvj91eM7DxxlxQJ0Co+zhIuIz6q7mQM0Ff1gSpXbPkR1NTOD+Cd8HO2Sw2aYKeVLJOi+gYC9RYdsaOnwBFqDg4G2jh+BtiDLvrbUNzK/38+sIrLvw5IVi3UVPpeBz/HvUircoFE0rlH0kyU9C4sL39bxJVfwzGvX4U7LCBGagTkaRZd16grw9tgAWi8Cq3CUDaxERi+gJxK1wzLA+OcLh+cXD2QVwX9fi8PtMtxXprrLjcDwrhxKHaKtwlNyLlyxDsgzbHIBrCLS99ApfCACUnT6r7lA4T3eTiXcGyXoaRGAicNnAqwg0vfQKGowAsJnvM2uQ5/slfeiPVDpMYDwgy0As4j0PVjchWUPjIh2cs0CY+LCMT5HWB+Yb8wLlLL8UCsWYAbxB5BwETnGvxkgX5nsgVHR7kOLMtu2ASZCpO+hJ2CTfOI+EYFpRbUEvclqv7YMaGoNfp8MQCDaj+dE8Hcn1g3m6ip8LAFdAkRRi2wneVtLoK1yUj8qBnBnsoB8CP7udKml6rycoJ9Y3/JlAqDChyJwwrVXACi6IOfIWcuA5pbDqwKtwc+TBRRCDJ1yD2rUtVmEjbs2/QENrFhqAOBL/h1fTi0DRC/sP1YZaAveLjSczAAKIQgfTjfQSo2it3JJ7RThVVQv//2PLAnmgVIVf/8PR2Mjk0FcO+jp5culTtEQXzp5YP5iJ+dDCJS6ui72rQ5FYi/MInLtJ24d8Vxl/bCC/55OYbccTu/4UgrsqGMXkgvNbmgIIY35dnYaRQ3y4fVLU9E2YHeZ3VLmQ9zprOw3hhPsBtNVZjf1JA+iZ3fVGTDdZfZYhRQYTmAmlJmDLTLjESaOFslMR5g53CUzHWHmeJ04ATFRkf8BgTFuzkZgjFNer9cPHNoT44SQQ8BpRQxEypHh0+X1esWZ6WzNFpj6+g0CY+vPOFK2iwAAAABJRU5ErkJggg=="
  }
  else{
    volumeslider.value = "100"
    audio.volume = volumeslider.value / 100;
    volImgFly.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACiUlEQVR4nO2ZzWsTQRjGhx1vehFbMpPGj0P/EwU/8KLJYndij4qHNB67zSV+nDWpYClkdWfS+kHwVkXEP0JPnjzpQRCMmt2AdqaO7FeaCJLAJmV22Qfm8l7y/PK+T+YjAGTKlClTqqV3OnC1aa2DJMrc2DhqNltvzaYlQdJk3mstmk3rg2c+cQDm/UdnzIbVjcwnCsBcb103G9busPlEAOhhWP81nggAcyis4wAEwy8ExRVpHc8DFcM6AYD0FqfoN2fosaSFBaXCOh4gf4UztO0BiACkK9pIVyask2ZAMnxCUNwJIPAfwdCNqZm7XDUvlKq1z6VqTf5vTWp8XIgFxRUPwF82Kk4FYJz5OACOAW/1dDA/AsHwit8Jhr7JrYXCNADkrABcAqVrwO89A4582/vjhCylARyivfIgHAPuOQTqw5ngDO964Y7dhVkCeHKJtuZ3gsAfrg5QVOcUPfN/Zm1cVRrAk2NoO2En7kY1YeNyuE+8VB+gDE8HANr7qCbbhcUgzPij8gA/l8GxsAP9fYDc4XBfcBMD4BLoDAA680fCDvSUB3ANeDYcoXeJHCHH0N74AATeiWqCoqt+iCneURrAIfB2tKE5SyAX1TlFz0OAirIADtFeRxtZrwxLUV3auVOcYs4Z+hX7iD3zowSB3X4ZXhr+TP+iE8z/Zizzsz7MuUSr9wwwN2Ke4puh+a9yaw7HBihWaueLK2ufZhnigXkbV/2jNMN7nOUugsRcaLbRycHYUCwEQ8sHZj7WlbKdX+IMPfVOniIYmy/cRucO3HzsSz1DfU7RA/kEj+RB/WeV4OJyTQnjqXnYSsXTYmoed1PxvJ6KPzgi1ev1Q6uN1sNBIVOmTJlSpb+dqca1CVeIRgAAAABJRU5ErkJggg=="
  }
}
