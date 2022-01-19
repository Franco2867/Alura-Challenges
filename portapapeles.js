var copy = document.querySelector("#copiador");
copy.addEventListener("click", function(event){
    event.preventDefault();
    copiarPortapapeles();
})
function copiarPortapapeles(){
    var texto = document.getElementById("decodificado");
    texto.select();
    texto.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("copiado al portapapeles");
}