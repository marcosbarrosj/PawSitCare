document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");

    menuToggle.addEventListener("click", function() {
        sidebar.classList.toggle("active");
    });
});



///////////////////////////////////
function mostrarSelectores() {
    document.getElementById("selectores").style.display = "block";
}

function mostrarIntervalo() {
    var dataInicial = document.getElementById("dataInicial").value;
    var dataFinal = document.getElementById("dataFinal").value;
    if(dataInicial && dataFinal) {
        document.getElementById("intervalo").innerHTML = "Intervalo de Data: " + dataInicial + " a " + dataFinal;
    } else {
        document.getElementById("intervalo").innerHTML = "Por favor, selecione ambas as datas.";
    }
}