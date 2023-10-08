document.querySelector('.toggle-menu').addEventListener('click', handleMenu)
document.querySelector('.menu-mobile span').addEventListener('click', handleMenu)

function handleMenu() {
  document.querySelector('.all-screen').classList.toggle('active')
}

document.querySelector('.all-screen').addEventListener('click', item => {
  if (item.target.id !== 'menu-mobile')
    document.querySelector('.all-screen').classList.remove('active')
})

window.addEventListener('scroll', () => {
  const header = document.querySelector('header')
  scrollReveal()
  
  if (window.scrollY >= 8) header.classList.add('scroll')

  else header.classList.remove('scroll')
})

function scrollReveal() {
  let container = document.querySelectorAll('.news div')

  container.forEach(news => {
    const showContainer = window.innerHeight - 100,
          showTop = news.getBoundingClientRect().top

    if (showTop < showContainer) {
      if (!news.classList.contains("active"))
        news.classList.add('active')
    }
  })
}

const buttonNews = document.querySelector('.more-news'),
      news = document.querySelector('.news')

buttonNews.addEventListener('click', () => {
  news.classList.add('active')
  buttonNews.style.display = 'none'
})

//slide
let slideIndex = 0;
showSlides(slideIndex)

function plusSlides(n) {
  showSlides(slideIndex += n)
}

function showSlides(n) {
    const slides = document.querySelectorAll(".slide figure")

    if (n >= slides.length) {
        slideIndex = 0
    }
    if (n < 0) {
        slideIndex = slides.length - 1
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }

    slides[slideIndex].style.display = "block"
}

setInterval(function() {
    plusSlides(1)
}, 4000)

const prev = document.querySelector('.seta.esquerda'),
      next = document.querySelector('.seta.direita')

prev.addEventListener('click', () => plusSlides(-1))

next.addEventListener('click', () => plusSlides(1))
