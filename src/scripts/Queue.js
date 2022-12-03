let songQueueNo = 0 ;
function createQueue(songData){
    const QUEUE = document.getElementById("queue");

    let box = document.createElement("div");
    box.classList.add("flx","queueList");
    let songNumber = document.createElement("div");
    songNumber.classList.add("songNumber","flxCenter");
    songNumber.innerText = songQueueNo++ < 10 ? "0"+songQueueNo : songQueueNo ;

    let songImage = document.createElement("div");
    songImage.classList.add("songImage", "flxCenter");
    songImage.style.backgroundImage = `url(src/${songData[0]}/${songData[0]}HQ.jpg)`
    let songTitle = document.createElement("div");
    songTitle.classList.add("songTitle","flxCenter","flxColumn");


    let songName = document.createElement("div");
    songName.classList.add("songName");
    songName.innerText = songData[0];
    let songAuthor = document.createElement("div");
    songAuthor.classList.add("songAuthor")
    songAuthor.innerText = songData[1].artist;

    songTitle.appendChild(songName);
    songTitle.appendChild(songAuthor);

    let songPlayButton = document.createElement("div");
    songPlayButton.classList.add("songPlayButton","flxCenter");
    songPlayButton.dataset.song = songData[0] ;
    songPlayButton.addEventListener("click",(th)=>{
        console.log(audioPlayer.src.includes(th.target.dataset.song));
        if (!audioPlayer.src.includes(th.target.dataset.song)){
            audioPlayer.src = `src/${th.target.dataset.song}/${th.target.dataset.song}.mp3`
            console.log(audioPlayer.src);
            isPlaying = !isPlaying
        }
        if (!isPlaying){
            console.log("player");
            songPlayButton.innerHTML = `<i class="bi bi-pause-circle-fill"></i>`
            audioPlayer.play();
        }
        else{
            console.log("pauser");
            songPlayButton.innerHTML = `<i class="bi bi-play-circle-fill"></i>`
            audioPlayer.pause();
        }
        isPlaying = !isPlaying
    });

    let pauseBtn = document.createElement("i");
    pauseBtn.classList.add("bi","bi-play-circle-fill","pauseBtn")
    pauseBtn.dataset.song = songData[0];
    songPlayButton.appendChild(pauseBtn);

    box.appendChild(songNumber);
    box.appendChild(songImage);
    box.appendChild(songTitle);
    box.appendChild(songPlayButton)

    QUEUE.appendChild(box)
    if (audioPlayer.src == ""){
        audioPlayer = new Audio(`src/${songData[0]}/${songData[0]}.mp3`);
    }

}



var audioPlayer = new Audio();
let isPlaying = false ;
