// document.addEventListener("DOMContentLoaded", function () {
//     var mostrarPlaylist = document.getElementById("mostrarPlaylist");
//     var playlist = document.getElementById("playlist");

//     mostrarPlaylist.addEventListener("click", function () {
//         playlist.classList.toggle("hidden");
    
//     });

// });

var contenedor = document.getElementById("abrir");

    // Agrega un manejador de eventos de clic al elemento
    contenedor.addEventListener("click", function(event) {
        event.preventDefault();
        document.body.classList.add("salida");
        setTimeout(function() {
        window.location.href = './html/carta.html';
    }, 500);

});




        