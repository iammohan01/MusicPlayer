function createQueue(){
    const QUEUE = document.getElementById("queue");

    let box = document.createElement("div");
    box.classList.add("flx","queueList");
    let songNumber = document.createElement("div");
    songNumber.classList.add("songNumber","flxCenter");
    let songImage = document.createElement("div");
    songImage.classList.add("songImage", "flxCenter")
    let songTitle = document.createElement("div");
    songTitle.classList.add("songTitle","flxCenter","flxColumn");


    let songName = document.createElement("div");
    songName.classList.add("songName");
    songName.innerText = "On My Way";
    let songAuthor = document.createElement("div");
    songAuthor.classList.add("songAuthor")
    songAuthor.innerText = "Cartoon";

    songTitle.appendChild(songName);
    songTitle.appendChild(songAuthor);

    let songPlayButton = document.createElement("div");
    songPlayButton.classList.add("songPlayButton","flxCenter")
    let pauseBtn = document.createElement("i");
    pauseBtn.classList.add("bi","bi-play-circle-fill","pauseBtn")
    songPlayButton.appendChild(pauseBtn);

    box.appendChild(songNumber);
    box.appendChild(songImage);
    box.appendChild(songTitle);
    box.appendChild(songPlayButton)

    QUEUE.appendChild(box)

}
