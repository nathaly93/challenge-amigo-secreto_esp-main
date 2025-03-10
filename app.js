// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos=[];


function agregarAmigo(){
    document.getElementById("resultado").innerHTML = "";  
    let nombre = document.getElementById("amigo").value;

    if (nombre==""){
        alert("Por favor, inserte un nombre.");
        return;
    }

    listaAmigos.push(nombre);
    document.getElementById("amigo").value = "";
    console.log("Lista de amigos:", listaAmigos);
    mostrarListaAmigos();
}

function mostrarListaAmigos() {
   let lista= limpiarLista();
   
    for (let amigo of listaAmigos) {
        let item = document.createElement("li");
        item.textContent = amigo; 
        lista.appendChild(item); 
    }
}

function sortearAmigo() {
    limpiarLista();
    
    if (listaAmigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceAleatorio];
    document.getElementById("resultado").innerHTML = "El amigo secreto sorteado es:"+amigoSorteado;
    listaAmigos=[];
}

function limpiarLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    return lista
}
