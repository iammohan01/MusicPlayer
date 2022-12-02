fetch("/src/scripts/songs.json")
  .then(response => response.json())
  .then(json => console.log(json));
