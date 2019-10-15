function agregarMensaje() {

    if (MensajeInput.value.length > 100) {
        alert("exede los 100 caracteres");
    } else {
        document.getElementById("enviar")
            .innerHTML += " <div class='card2' style='height:100px'> " +
            "<div class='card-body2'>" +
            "<h5 class='card-title'>" + nombreInput.value + "</h5>" +
            "<h5 class='card-mensaje'>" + MensajeInput.value + "</h5>" +
            "</div>" +
            " </div > "


    }

    nombreInput.value="";
    MensajeInput.value="";
}