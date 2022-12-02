function popularArtists(){
    const popArtists = document.getElementById("popArtists");
    let artist = document.createElement("div")
    artist.classList.add("artist");

    popArtists.appendChild(artist);
}
// for (let index = 0; index < 20; index++) {
//    popularArtists();
// }