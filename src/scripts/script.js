
fetch("/MusicPlayer/src/scripts/songs.json")
  .then(response => response.json())
  .then(json => save(json));

let loadedSongsJSON= [] ;
function save(le){
    loadedSongsJSON.push(le);
   (Object.entries(le)).forEach(ele=>{
    // console.log(ele);
    createQueue(ele);
   })
}
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}


