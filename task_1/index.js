// SHOW MENU

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)

    if(toggle && nav){
          toggle.addEventListener('click', () =>{
                nav.classList.toggle('show')
          });
    }
}
showMenu('nav-toggle','nav-id');
// ACTIVE & REMOVE ACTIVE
VANTA.TRUNK({
  el: "#container",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  color: 0x726468,
  scale: 1.0,
  scaleMobile: 1.0,
  spacing: 10.0,
  chaos: 0.0,
});


