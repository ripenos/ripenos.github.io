// Upload Music

// document.addEventListener('DOMContentLoaded', loadStoredAudioFiles);
// document.getElementById('PlayerMusicupload').addEventListener('change', handleFileUpload);

// async function loadStoredAudioFiles() {
//     const db = await idb.openDB('music-player-db', 1, {
//         upgrade(db) {
//             if (!db.objectStoreNames.contains('audio-files')) {
//                 db.createObjectStore('audio-files', { keyPath: 'name' });
//             }
//         }
//     });

//     const tx = db.transaction('audio-files', 'readonly');
//     const store = tx.objectStore('audio-files');
//     const allFiles = await store.getAll();

//     allFiles.forEach(fileData => {
// 		track_list.push(fileData)
//         addToPlaylist(fileData, track_list.length - 1);
//     });
// }

// async function handleFileUpload(event) {
//     const files = event.target.files;
//     for (const file of files) {
//         if (file.type.startsWith('audio/')) {
//             const metadata = await getAudioMetadata(file);
//             await storeAudioFile(file, metadata);
// 			track_list.push(metadata);
//             addToPlaylist(metadata, track_list.length - 1);
//         }
//     }
// }

// function getAudioMetadata(file) {
//     return new Promise((resolve, reject) => {
//         const audio = document.createElement('audio');
//         audio.src = URL.createObjectURL(file);

//         audio.addEventListener('loadedmetadata', () => {
//             const metadata = {
//                 name: file.name,
//                 artist: 'Unknown Artist', // You may want to use a library to read metadata tags
//                 album: 'Unknown Album', // Same as above
//                 image: 'default-album-art.png', // You can update this if you extract cover art
//                 path: file
//             };
			
//             resolve(metadata);
//         });

//         audio.addEventListener('error', reject);
//     });
// }

// async function storeAudioFile(file, metadata) {
//     const db = await idb.openDB('music-player-db', 1, {
//         upgrade(db) {
//             if (!db.objectStoreNames.contains('audio-files')) {
//                 db.createObjectStore('audio-files', { keyPath: 'name' });
//             }
//         }
//     });

//     await db.put('audio-files', metadata);
// }

// function addToPlaylist(metadata) {
//     const playlistCont = document.querySelector('.playlist-contPlayer');
//     const playerListDiv = document.createElement('div');
//     playerListDiv.classList.add('playerList');

//     playerListDiv.innerHTML = `
//         <input type="checkbox" class="checkbox-item">
//         <img src="https://img.icons8.com/fluency-systems-regular/452/play--v1.png" width="28px" style="filter: invert(100%); cursor: pointer;" id="playerTrack${metadata.name}">
//         <div class="playerListInfo">
//             <h6 style="flex: 1;">${metadata.name}</h6>
//             <h6 style="flex: 1;text-align: center;">${metadata.artist}</h6>
//             <h6 style="flex: 1; text-align: right;">${metadata.album}</h6>
//         </div>
//     `;

// 	// document.getElementById(`playerTrack${metadata.name}`).addEventListener("click", () => {
//     //     loadTrack(index);
//     //     playTrack();
//     // });

//     playlistCont.appendChild(playerListDiv);
// }

// Select all the elements in the HTML page
// and assign them to a variable
let track_art = document.querySelector(".track-art");
let track_artRP = document.querySelector(".AlbumArtNoMusicPlayed")
let track_name = document.querySelector("#playerMusicTitle");
let track_artist = document.querySelector("#playerMusicAuthor");

let playpause_btn = document.querySelector(".playpause-trackImg");
let playpause_btn2 = document.querySelector("#playPauseRP");

let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector("#seek_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

// Specify globally used values
let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create the audio element for the player
let curr_track = document.createElement('audio');

// Define the list of tracks that have to be played
let track_list = [
{
	name: "Never Gonna Give You Up",
	artist: "Rick Astley",
	image: "../Global/Assets/Musics/AlbumArts/Whenever_You_Need_Somebody.png",
	path: "../Global/Assets/Musics/Never Gonna Give You Up.mp3",
},
{
	name: "Moving On ✘ Alone",
	artist: "Musical Medicine",
	image: "../Global/Assets/Musics/AlbumArts/musicalMedicine.png",
	path: "../Global/Assets/Musics/music1.m4a"
},
{
	name: "Cinematic ambience",
	artist: "Musical Medicine",
	image: "../Global/Assets/Musics/AlbumArts/musicalMedicine.png",
	path: "../Global/Assets/Musics/music2.m4a"
},
{
	name: "Manike Mage Hithe - lo-fi",
	artist: "Musical Medicine",
	image: "../Global/Assets/Musics/AlbumArts/musicalMedicine.png",
	path: "../Global/Assets/Musics/music3.m4a",
},
{
	name: "RETRO NOSTALGIA 🕹️!",
	artist: "Musical Medicine",
	image: "../Global/Assets/Musics/AlbumArts/musicalMedicine.png",
	path: "../Global/Assets/Musics/music4.m4a",
},
{
	name: "Lily",
	artist: "Alan Walker",
	image: "../Global/Assets/Musics/AlbumArts/Different_World.png",
	path: "../Global/Assets/Musics/Lily.mp3",
},
];

function loadTrack(track_index) {
// Clear the previous seek timer
clearInterval(updateTimer);
resetValues();

// Load a new track
curr_track.src = track_list[track_index].path;
curr_track.load();

// Update details of the track
track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
track_artRP.style.backgroundImage = "url(" + track_list[track_index].image + ")";
track_name.textContent = track_list[track_index].name;
document.getElementById('MusicWidgetTitleStart').textContent = track_list[track_index].name;

track_artist.textContent = track_list[track_index].artist;
// Set an interval of 1000 milliseconds
// for updating the seek slider
updateTimer = setInterval(seekUpdate, 1000);

// Move to the next track if the current finishes playing
// using the 'ended' event
curr_track.addEventListener("ended", nextTrack);

}

// Function to reset all values to their default
function resetValues() {
curr_time.textContent = "00:00";
total_duration.textContent = "00:00";
seek_slider.value = 0;
}

function playpauseTrack() {
// Switch between playing and pausing
// depending on the current state
if (!isPlaying) playTrack();
else pauseTrack();
}

function playTrack() {
// Play the loaded track
curr_track.play();
isPlaying = true;
track_art.classList.add('venylWheel-art')
// Replace icon with the pause icon
playpause_btn.src = 'https://img.icons8.com/fluency-systems-regular/452/pause--v1.png';
playpause_btn2.src = 'https://img.icons8.com/fluency-systems-regular/452/pause--v1.png';
}

function pauseTrack() {
// Pause the loaded track
curr_track.pause();
isPlaying = false;
track_art.classList.remove('venylWheel-art')
// Replace icon with the play icon
playpause_btn.src = 'https://img.icons8.com/fluency-systems-regular/452/play--v1.png';
playpause_btn2.src = 'https://img.icons8.com/fluency-systems-regular/452/play--v1.png';
}

function nextTrack() {
// Go back to the first track if the
// current one is the last in the track list
if (track_index < track_list.length - 1)
	track_index += 1;
else track_index = 0;

// Load and play the new track
loadTrack(track_index);
playTrack();
}

function prevTrack() {
// Go back to the last track if the
// current one is the first in the track list
if (track_index > 0)
	track_index -= 1;
else track_index = track_list.length - 1;

// Load and play the new track
loadTrack(track_index);
playTrack();
}

function seekTo() {
// Calculate the seek position by the
// percentage of the seek slider 
// and get the relative duration to the track
seekto = curr_track.duration * (seek_slider.value / 100);

// Set the current track position to the calculated seek position
curr_track.currentTime = seekto;
}

function seekUpdate() {
let seekPosition = 0;

// Check if the current track duration is a legible number
if (!isNaN(curr_track.duration)) {
	seekPosition = curr_track.currentTime * (100 / curr_track.duration);
	seek_slider.value = seekPosition;

	// Calculate the time left and the total duration
	let currentMinutes = Math.floor(curr_track.currentTime / 60);
	let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
	let durationMinutes = Math.floor(curr_track.duration / 60);
	let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

	// Add a zero to the single digit time values
	if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
	if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
	if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
	if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

	// Display the updated duration
	curr_time.textContent = currentMinutes + ":" + currentSeconds;
	total_duration.textContent = durationMinutes + ":" + durationSeconds;
}
}

document.getElementById("playerTrack1").addEventListener("click", () => {
    curr_track.src = track_list[0].path;
    curr_track.load();
    loadTrack(0);
    playTrack();
})
document.getElementById("playerTrack2").addEventListener("click", () => {
    curr_track.src = track_list[1].path;
    curr_track.load();
    loadTrack(1);
    playTrack();
})
document.getElementById("playerTrack3").addEventListener("click", () => {
    curr_track.src = track_list[2].path;
    curr_track.load();
    loadTrack(2);
    playTrack();
})
document.getElementById("playerTrack4").addEventListener("click", () => {
    curr_track.src = track_list[3].path;
    curr_track.load();
    loadTrack(3);
    playTrack();
})
document.getElementById("playerTrack5").addEventListener("click", () => {
    curr_track.src = track_list[4].path;
    curr_track.load();
    loadTrack(4);
    playTrack();
})

document.getElementById("playerTrack2P").addEventListener("click", () => {
    curr_track.src = track_list[1].path;
    curr_track.load();
    loadTrack(1);
    playTrack();
})
document.getElementById("playerTrack3P").addEventListener("click", () => {
    curr_track.src = track_list[2].path;
    curr_track.load();
    loadTrack(2);
    playTrack();
})
document.getElementById("playerTrack4P").addEventListener("click", () => {
    curr_track.src = track_list[3].path;
    curr_track.load();
    loadTrack(3);
    playTrack();
})
document.getElementById("playerTrack5P").addEventListener("click", () => {
    curr_track.src = track_list[4].path;
    curr_track.load();
    loadTrack(4);
    playTrack();
})
document.getElementById("playerTrack6").addEventListener("click", () => {
    curr_track.src = track_list[5].path;
    curr_track.load();
    loadTrack(5);
    playTrack();
})

loadTrack(track_index);

document.getElementById("playerMiniExpandDD").addEventListener("click", () => {
    let playerMini = document.getElementById('playerMini')
    let playerMain = document.querySelector('.playerMain');

    if(playerMain.style.opacity === '0'){
        playerMini.classList.remove('playerMiniExpanded')

        playerMain.style.opacity = '1'
    }else{
        playerMini.classList.add('playerMiniExpanded')

        playerMain.style.opacity = '0'

    }
})

const volumeRange = document.getElementById('volumeRange');

// Set initial volume
let globalVolume = 100; // Initial global volume
updateVolume(globalVolume);

// Update volume when range input changes
volumeRange.addEventListener('input', function() {
globalVolume = this.value;
updateVolume(globalVolume);
});

function updateVolume(volume) {

// Get all audio elements on the page
const audioElements = document.getElementsByTagName('audio');
for (let i = 0; i < audioElements.length; i++) {
	audioElements[i].volume = volume / 100;
}

// Get all video elements on the page
const videoElements = document.getElementsByTagName('video');
for (let i = 0; i < videoElements.length; i++) {
	videoElements[i].volume = volume / 100;
}
}