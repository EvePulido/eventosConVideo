let video = document.querySelector('.botonVideo');
// console.log(video);

video.addEventListener('play', function() {
    console.log('Di play en el video');
    // setTimeout(function (){
    //     ponerColorBody();
    // }, 3000);
});

video.addEventListener('seeking', function() {
    console.log('Se está viendo una parte del video', this.currentTime); //propiedad 
});

video.addEventListener('ended', function() {
    console.log('Terminó el video');
    alert('Se terminó el video');
    let decision = confirm('¿Deseas ver de nuevo el video?');
    console.log(decision);
    if (decision) {
        video.play();
    } else {
        window.location = "https://www.google.com.mx/?hl=es";
    }
});

video.addEventListener('pause', function() {
    console.log('Le dió pausa el video');
});

// Temporizadores o timer

// setInterval
// setTimeout

let temporizador = setInterval(function (){
    console.log('El fondo cambió de color');
    ponerColorBody();
}, 2000);

setTimeout(function (){
    ponerColorBody();
}, 3000);

function ponerColorBody(){
    let pantalla = document.body;
    pantalla.style.background = pantalla.style.background == "blue" ? "green" : "blue";
}


// Arreglos, Vectores, Arrays

//               Posiciones
// let array = ['uno','dos','tres'];

// let array2 = ['cuatro','cinco','seis'];

// array2[1];

// let multidimensional = [array, array2];


// multidimensional[0][1]; // = 'dos';
