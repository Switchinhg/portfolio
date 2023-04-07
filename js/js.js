/* new portfolio */


let openNav = document.getElementById('openNav')
let tabNav = document.getElementById('tabNav')
let closeNav = document.getElementById('closeNav')
const botonVerMas = document.getElementById('botonVerMas')
/* Pantalla de inicio Santiago Font etc */
const main = document.getElementById('main')
/* boton inicio en el navbar */
const inicioo = document.getElementById('inicioo')
const proyectosMenu = document.getElementById('proyectosMenu')
const proyectos = document.getElementById('proyectos')
const botonSobreMI = document.getElementById('botonSobreMI')
const sobreMi = document.getElementById('sobreMi')

/* Habilidades  */
const habilidades = document.getElementById("habilidades")
/* Contacto */
const contacto = document.getElementById("contacto")


const arregloSecciones = [main, proyectos, sobreMi,habilidades,contacto]
const aparecer = ['aparecer','aparecer2','aparecer3','aparecer4','aparecer5']
const desaparecer = ['desaparecer', 'desaparecer2','desaparecer3']


openNav.addEventListener('click', ()=>{
  tabNav.classList.add('navOpen')
})
closeNav.addEventListener('click', ()=>{
  tabNav.classList.remove('navOpen');
})

window.addEventListener('click', (e)=>{
  if (!tabNav.contains(e.target) && (!closeNav.contains(e.target)) && (!openNav.contains(e.target))){
    tabNav.classList.remove('navOpen');
  } 
})

/* Cerrar todas */
function cerrarTodasExcepto(noCerrar, bajar){
  if(!noCerrar.classList.contains('open')){
  arregloSecciones.forEach(seccion=>{
    if(seccion !== noCerrar){
      /* se va */
      aparecer.forEach(e=>
        seccion.classList.remove(e))
        seccion.classList.add( bajar=== 'si'?desaparecer[2]:getRandomAnimation('desaparecer'))
        seccion.classList.remove('open')
      setTimeout(() => {

        seccion.style.display = 'none'
      }, 1000);
    }else{
      /* aparece  */
      tabNav.classList.remove('navOpen');
      setTimeout(() => {
        noCerrar.style.display = 'flex'
        noCerrar.classList.add(bajar=== 'si'? aparecer[2]: getRandomAnimation('aparecer'))
        desaparecer.forEach(e=>noCerrar.classList.remove(e))

        noCerrar.classList.add('open')
      }, 1000);
    }
  })
}

}

const getRandomAnimation = (tipo) =>{
  if(tipo === 'aparecer'){
    return aparecer[Math.floor(Math.random() * aparecer.length)]
  }else{
    return desaparecer[Math.floor(Math.random() * desaparecer.length)]
  }
}


  function enviarmsg() {
    Swal.fire({
        icon: "success",
        html: `Mensaje enviado! <br> Estare en contacto pronto! `,
        confirmButtonText: "Salir",
        timer: 5000,
        timerProgressBar: true,
        allowOutsideClick: true,

    })
}