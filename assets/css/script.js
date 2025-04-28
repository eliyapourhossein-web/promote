const menuIcon = document.querySelector('.menu')
const xIcon = document.querySelector('.x')
const list = document.querySelector('.list')
const btn = document.querySelector('.btn')





// add event
menuIcon.addEventListener('click', showMenu)
xIcon.addEventListener('click', hideMenu)



function showMenu() {
    menuIcon.classList.add('hidden')
    xIcon.classList.remove('hidden')
    // menu show
    list.classList.remove('hidden')
}

function hideMenu() {
    menuIcon.classList.remove('hidden')
    xIcon.classList.add('hidden')
    // menu hide
    list.classList.add('hidden')
    list.style.width = '0'
}

btn.addEventListener('click', () => {
    document.body.classList.toggle('darkmode')

    if (btn.innerText === '🌜') {
        btn.innerText = '🌝'

    } else {
        btn.innerText = '🌜'
    }
})


let swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });