var btnEncriptar = document.querySelector("#encriptar");

btnEncriptar.addEventListener("click", function(event){
    event.preventDefault();
    var textoEncriptar = document.querySelector("#ingreso-texto").value;
    var lista = crearLista(textoEncriptar);
    var listaArray = encriptar(lista);
    var textoEncriptado = document.querySelector("#decodificado");
    textoEncriptado.textContent = listaArray.join("");

})
function crearLista(texto){
    var listaTexto = Array.from(texto);
    return listaTexto;
}
function encriptar(lista){
    var textoEncriptado = [];
        for (let i = 0; i < lista.length; i++) {
            var letra = lista[i];
            if (letra == "e") {
                lista[i] = "enter";
                textoEncriptado.push(lista[i]);
            } else if (letra == "i"){
                lista[i] = "imes";
                textoEncriptado.push(lista[i]);
            }else if (letra == "a"){
                lista[i] = "ai";
                textoEncriptado.push(lista[i]);
            }else if (letra == "o"){
                lista[i] = "ober";
                textoEncriptado.push(lista[i]);
            }else if (letra == "u"){
                lista[i] = "ufat";
                textoEncriptado.push(lista[i]);
            } else {
                textoEncriptado.push(lista[i]);
            }
            
        }
        return textoEncriptado;
}