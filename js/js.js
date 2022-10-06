// /* Al hacer click en el boton de Inicio, sube al tope de la pagina */
// let inicio = document.getElementById("iniciolink")
// inicio.onclick = () => {
//   window.scrollTo(0, 0)
//   document.querySelector('.active').classList.remove('active');
//   inicio.classList.add("active")
// }

// /* al bajar con la ruedita cambia de colores el navbar */
// window.onscroll = () => {
//   /* todos los links */
//   let links = document.querySelectorAll(".links")
//   /* todas las secciones */
//   let secs = document.querySelectorAll("section")
//   secs.forEach(sec => {
//     let top = window.scrollY
//     let offset = sec.offsetTop
//     let height = sec.offsetHeight
//     let id = sec.getAttribute("id")

//     if (top >= offset && top < offset + height) {
//       links.forEach(e => {
//         document.querySelector('.links .active').classList.remove('active');
//         document.querySelector(".links a[href*= " + id + " ]").classList.add("active")
//       })
//     }
//   })

// }


// /* carousel de proyectos moverlos */
// let isDown = false
// let startX
// let scrollLeft
// const slider = document.querySelector(".proyectos")

// const end = () => {
//   isDown = false;
// }

// const start = (e) => {
//   isDown = true;
//   startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
//   scrollLeft = slider.scrollLeft;
// }

// const move = (e) => {
//     if (!isDown) return;

//     e.preventDefault();
//     const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
//     const dist = (x - startX);
//     slider.scrollLeft = scrollLeft - dist;
//   }
//   (() => {
//     slider.addEventListener('mousedown', start);
//     slider.addEventListener('touchstart', start);

//     slider.addEventListener('mousemove', move);
//     slider.addEventListener('touchmove', move);

//     slider.addEventListener('mouseleave', end);
//     slider.addEventListener('mouseup', end);
//     slider.addEventListener('touchend', end);
//   })();

//   function enviarmsg() {



//     Swal.fire({
//         icon: "success",
//         html: `Mensaje enviado! <br> Estare en contacto pronto `,
//         confirmButtonText: "Salir",
//         timer: 5000,
//         timerProgressBar: true,
//         allowOutsideClick: true,

//     })
// }

// let modal = document.getElementsByClassName('modalsito')[0]
// let modal2 = document.getElementsByClassName('modaal')[0]

// modal.addEventListener('click', e =>{
//   modal.style.display = 'none';
  
// })

// modal2.addEventListener('click', e =>{
//   e.stopPropagation()
// })



// /* Seleccionamos datos del modal */

// let nombreEvento = document.getElementById('nombreProyecto')
// let pming = document.getElementById('pming')
// let linkgh = document.getElementById('linkgh')
// let iap = document.getElementById('iap')
// let tecnologias = document.getElementById('tags')
// let pDescinfo = document.getElementById('pDescinfo')
// let tags = document.getElementsByClassName('tags')[0] 
// /*   nombreEvento.firstChild.innerHTML   */

// /* Boton abrir modal syC Eventos */

// let demosyc = document.getElementById('demosyc')

// demosyc.onclick= e =>{
//   e.preventDefault()
//   modal.style.display = 'flex'
//   nombreEvento.innerHTML = 'SyC Eventos'
//   pming.src = './img/SyCEventos.png'
//   linkgh.href = 'https://github.com/Switchinhg/SycEventos'
//   iap.href = 'https://switchinhg.github.io/SycEventos'
//   pDescinfo.innerHTML = 'Sitio web creado para el proyecto final del curso de Desarrollo web, Es una pagina ficticia de una empresa de organizacion de eventos.'
//   tags.innerHTML ='HTML, CSS, Responsive, SEO'
// }

// /* boton abrir medal RequetePizza */

// let demoRquete = document.getElementById('demoRquete')

// demoRquete.onclick = e =>{
//   e.preventDefault()
//   modal.style.display = 'flex'
//   nombreEvento.innerHTML = 'RequetePizza'
//   pming.src = './img/RequetePizza.png'
//   linkgh.href = 'https://github.com/Switchinhg/pizzeria'
//   iap.href = 'https://switchinhg.github.io/pizzeria/'
//   pDescinfo.innerHTML = 'Sitio web creado para el proyecto final del curso de JavaScript, es la página Ecommerce de una pizzeria'
//   tags.innerHTML = 'HTML, CSS, JS, SweetAlert,  '
// }

// let demoMDocs = document.getElementById('demoMDocs')

// demoMDocs.onclick = e =>{
//   e.preventDefault()
//   modal.style.display = 'flex'
//   nombreEvento.innerHTML = 'MarvelDOCS'
//   pming.src = './img/MarvelDOCS.png'
//   linkgh.href = 'https://github.com/Switchinhg/marvel-api'
//   iap.href = 'https://switchinhg.github.io/marvel-api/'
//   pDescinfo.innerHTML = 'Página creada con fin de utilizar la api de Marvel, donde en el inicio te muestra personajes aleatoriamente, y por secciones todos los personajes y comics'
//   tags.innerHTML = 'HTML, CSS, JS, Fetch,  '

// }

// let demobyb = document.getElementById('demoByB')

// demobyb.onclick = e =>{
//   e.preventDefault()
//   modal.style.display = 'flex'
//   nombreEvento.innerHTML = 'Big & Bonnie'
//   pming.src = './img/ByB.png'
//   linkgh.href = 'https://github.com/Switchinhg/byb'
//   iap.href = 'https://bigandbonnie.netlify.app/'
//   pDescinfo.innerHTML = '>Pagina Web creada con el propósito de proyecto final de coder de ReactJS y ser usada para la micro empresa de mi tia de camitas de perros y gatos.'
//   tags.innerHTML = 'HTML, CSS, JS, ReactJS,  FireBase '

// }


/* new portfolio */


let openNav = document.getElementById('openNav')
let tabNav = document.getElementById('tabNav')
let closeNav = document.getElementById('closeNav')

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