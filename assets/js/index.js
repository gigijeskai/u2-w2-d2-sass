
function cambiaColore(){
    let element = document.body;
    element.classList.toggle('dark-mode');
}

function aggiungiImmagine(){
let image = document.querySelector('img')
image.classList.toggle('show-image');
}



let immaginiRandomiche;
immaginiRandomiche = ['https://picsum.photos/200/300','https://picsum.photos/200/300','https://picsum.photos/200/300']

function randomImage(){
   let randomNumber = Math.floor(Math.random()*immaginiRandomiche.length)
   document.querySelector('#immagini-random').innerHTML += '<img src="'+randomImage[randomNumber]+'" />'; 
}