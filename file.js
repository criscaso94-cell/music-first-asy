//creare una funzione che fa la fetch dell'API
//creare una funzione che cicla i risultati facendo un array di canzoni
//creare una funzione che dato un parametro creai una cadrn in html
const searchBox= document.getElementById("searchResults")
function getSongs(){
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem")
.then(result=>result.json())
.then(songs=>listSongs(songs.data))
.catch(error=>console.log(error));
}
getSongs()

function listSongs(songs){
for(const song of songs){
    const card=cardSongs(song) 
    console.log(card)
    searchBox.appendChild(card)
}

}

function cardSongs(song){
    /*
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
*/
const col=document.createElement("div")
col.classList.add("col-3")
const card=document.createElement("div")
card.classList.add("card")
col.appendChild(card)
const img=document.createElement("img")
img.classList.add("card-img-top")
img.src=song.album.cover_small
card.appendChild(img)
const cardBody=document.createElement("div")
cardBody.classList.add("card-body")
card.appendChild(cardBody)
const h5= document.createElement("h5")
h5.classList.add("card-title","text-dark")
h5.innerText=song.title
cardBody.appendChild(h5)
const p=document.createElement("p")
p.classList.add("card-text","text-dark")
p.innerText=song.artist.name
cardBody.appendChild(p)
const a=document.createElement("a")
a.classList.add("btn","btn-primary")
a.innerText="Link"
a.href=song.link
cardBody.appendChild(a)
return col
}