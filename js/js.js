let isDown = false
let startX
let scrollLeft
const slider = document.querySelector(".proyectos")

const end = () => {
	isDown = false;
}

const start = (e) => {
    isDown = true;
    startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;	
  }

  const move = (e) => {
	if(!isDown) return;

  e.preventDefault();
  const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  const dist = (x - startX);
  slider.scrollLeft = scrollLeft - dist;
}
(() => {
	slider.addEventListener('mousedown', start);
	slider.addEventListener('touchstart', start);

	slider.addEventListener('mousemove', move);
	slider.addEventListener('touchmove', move);

	slider.addEventListener('mouseleave', end);
	slider.addEventListener('mouseup', end);
	slider.addEventListener('touchend', end);
})();