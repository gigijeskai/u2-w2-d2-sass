
function cambiaColore(){
    let element = document.body;
    element.classList.toggle('dark-mode');
}

function aggiungiImmagine(){
    let immagine = document.getElementById('immagine') 
immagine.innerHTML += `<img src="./assets/image/sample-image.jpg" ></img>`
}