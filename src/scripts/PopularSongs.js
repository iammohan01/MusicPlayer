function popularSongs(){
    const popSongQueue = document.getElementById("popSongQueue");
    let song = document.createElement("div");
    song.classList.add("song");

    let popImg = document.createElement("div");
    popImg.classList.add("popImg");

    let popSongName = document.createElement("div");
    popSongName.classList.add("popSongName");
    popSongName.innerText = "Agar Tum Sath Ho";

    let popAlbumName = document.createElement("div");
    popAlbumName.classList.add("popAlbumName");
    popAlbumName.innerText = "MovieName";

    song.appendChild(popImg);
    song.appendChild(popSongName);
    song.appendChild(popAlbumName);

    popSongQueue.appendChild(song);
    
}
for(let i = 0 ; i < 20 ; i++){
    
}