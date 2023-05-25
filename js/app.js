// variables

const btnScroll = document.querySelector(".btn-position");
const formulario = document.querySelector('#formulario');



const btnvisibilidad = () => {
  if (window.scrollY > 200) {
    btnScroll.style.visibility = 'visible';
  }else{
    btnScroll.style.visibility = 'hidden';
  }
};

// Event Listeners
document.addEventListener("scroll", () => {
  btnvisibilidad();
});
btnScroll.addEventListener('click', ()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"});
})
formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    const nombre = document.querySelector('#nombre').value;
    const apellido = document.querySelector('#apellido').value;
    const email = document.querySelector('#email').value;
    const telefono = document.querySelector('#telefono').value;

    const datosInput = {
        nombre,
        apellido,
        email,
        telefono
    }
    if(validar(datosInput)){
        mostrarAlerta('Todos los campos son obligatorios','error');
        return;
    }
    enviarFormulario();
}
function validar(obj) {
    return !Object.values(obj).every(element => element !== '') ;
}
function enviarFormulario(){
    setTimeout(() => {
        mostrarAlerta('Formulario Enviado')
    }, 3000);
}

function mostrarAlerta(mensaje, tipo) {
    const alerta = document.querySelector('.alerta');
    if(!alerta) {
        if(tipo === 'error'){
            const alerta = document.createElement('p');
            alerta.innerHTML = `
                <span class="alerta">${mensaje}</span>
            `;
        
            formulario.appendChild(alerta);
        
            setTimeout(() => {
                alerta.remove();
            }, 3000);
        }else{
            const alerta = document.createElement('p');
            alerta.innerHTML = `
                <span class="alertaSucces">${mensaje}</span>
            `;
        
            formulario.appendChild(alerta);
        
            setTimeout(() => {
                alerta.remove();
            }, 3000);
        }
    }
}