const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const nav6 = document.getElementById('nav-6');
const navItems = [nav1, nav2, nav3, nav4, nav5, nav6];
const home = document.getElementById('home');
const pingPong = document.getElementById('ping-pong');
const simonGame = document.getElementById('simon-game');
const rockPaperScissor = document.getElementById('rock-paper-scissor');
const practiceTables = document.getElementById('practice-tables');
const paint = document.getElementById('paint');
const sections = [home, pingPong, simonGame, rockPaperScissor, practiceTables, paint];

// Hiding sections
sections.forEach((sec)=> sec.style.display = "none");
sections[0].style.display = "flex";

// Control Navigation Animation
function navAnimation(direction1, direction2) {
  navItems.forEach((nav, i) => {
    nav.classList.replace(`slide-${direction1}-${i + 1}`, `slide-${direction2}-${i + 1}`);
  });
}

function toggleNav() {
  // Toggle: Menu Bars Open/Closed
  menuBars.classList.toggle('change');
  // Toggle: Menu Active
  overlay.classList.toggle('overlay-active');
  if (overlay.classList.contains('overlay-active')) {
    // Animate In - Overlay
    overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
    // Animate In - Nav Items
    navAnimation('out', 'in');
  } else {
    // Animate Out - Overlay
    overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
    // Animate Out - Nav Items
    navAnimation('in', 'out');
  }
}
// Event Listeners
menuBars.addEventListener('click', toggleNav);

navItems.forEach((nav, index) => {
  nav.addEventListener('click', function(){
    //Hiding All Sections
    sections.forEach((sec)=>{
      sec.style.display = "none";
    });
    //Displaying clicked section
    sections[index].style.display = "flex";
    toggleNav();
  });
});
