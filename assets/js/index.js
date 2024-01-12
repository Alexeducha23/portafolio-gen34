/* Skills */
const skillsTech = document.querySelector('.skills-tech')

const skills = [
  {
    path: 'assets/img/bash.svg',
    name: 'Bash',
  },
  {
    path: 'assets/img/vsc.svg',
    name: 'VS Code',
  },
  {
    path: 'assets/img/html.svg',
    name: 'HTML',
  },
  {
    path: 'assets/img/css.svg',
    name: 'CSS',
  },
  {
    path: 'assets/img/javascript.svg',
    name: 'JavaScript',
  }
]

let html = ''

for (const skill of skills) {
  html += `
  <div class='skill'>
    <img src='${skill.path}' alt='${skill.name}'>
    <h3>${skill.name}</h3>
  </div>
`
}

skillsTech.innerHTML = html

/* NavBar */
const navbar = document.querySelector('.nav')
const menu = document.querySelector('.nav-menu')
const links = document.querySelectorAll('.list-link')

navbar.addEventListener('click', function (e) {
  if (e.target.closest('.btn-open')) {
    menu.classList.toggle('show-menu')
  }

  if (e.target.closest('.btn-close')) {
    menu.classList.remove('show-menu')
  }

  if (e.target.closest('.list-link')) {
    menu.classList.remove('show-menu')
  }

  if (e.target.closest('.list-link')) {
    for (const link of links) {
      link.parentElement.classList.remove('active')
    }

    e.target.parentElement.classList.add('active')
  }
})

/*Texto SOY*/
document.addEventListener('DOMContentLoaded', function() {
  var typed = new Typed(".auto-type", {
      strings: ["DESARROLLADOR WEB", "COMMUNITY MANAGER", "CREADOR DE CONTENIDO"],
      typeSpeed: 95,
      backSpeed: 125,
      loop: true,
  });
});

/* Scroll Section ID */
const sections = document.querySelectorAll('section[id]')

let prevPos = window.scrollY

window.addEventListener('scroll', function () {
  const currentPos = window.scrollY

  for (const section of sections) {
    const sectionHeight = section.offsetHeight
    const sectionTop = section.offsetTop - 200
    const sectionId = section.getAttribute('id')
    const currentElement = document.querySelector(`.list-link[href*='${sectionId}']`)

    if (prevPos > sectionTop && prevPos <= sectionTop + sectionHeight) {
      currentElement.parentElement.classList.add('active')
    } else {
      currentElement.parentElement.classList.remove('active')
    }
  }

  prevPos = currentPos
})
