const inputFormulario = document.querySelector("#formulario");
const seccionNota = document.querySelector("#seccion");
let contadorId = 0;

inputFormulario.addEventListener("submit",e => {
    e.preventDefault();
    console.log(e);
    crearNotita(e.target[0].value, e.target[1].value);
})

const crearNotita = (texto,color) => {
    contadorId++;
    console.log(contadorId);
    const elementoNuevo = document.createElement("article");
    elementoNuevo.id = contadorId;
    elementoNuevo.classList.add("notita");
    elementoNuevo.classList.add(color);
    elementoNuevo.innerHTML = `<i class="fa-solid fa-xmark" onclick="borrarNotita(${contadorId})"></i><p> ${texto} </p>`;
    seccionNota.appendChild(elementoNuevo);
}

const borrarNotita = (idX) => {
    const notitaBorrar = document.getElementById(`${idX}`);
    seccionNota.removeChild(notitaBorrar);
}
