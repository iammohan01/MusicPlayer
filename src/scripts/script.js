
fetch("/src/scripts/songs.json")
  .then(response => response.json())
  .then(json => save(json));

let v ;
function save(le){
   v = le ;
  //  let x = [];
   (Object.entries(v)).forEach(ele=>{
    console.log(ele);
    // x.push(ele)
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


