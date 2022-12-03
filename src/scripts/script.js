fetch("/src/scripts/songs.json")
  .then(response => response.json())
  .then(json => save(json));

let v ;
function save(le){
   v = le ;
   (Object.entries(v)).forEach(ele=>{
    console.log(ele);
    createQueue(ele);
   })
}

