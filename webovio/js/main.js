// top menu animation =============================================
const topMenu = document.querySelector('.top-menu')
const burger = document.querySelector('.burger')
const body = document.querySelector('.page__body')
const page = document.querySelector('.page')
const topMenuItems = document.querySelectorAll('.top-menu__item')

burger.addEventListener('click', handleClick)
topMenu.addEventListener('click', handleClick)

function handleClick(e) {
  topMenu.classList.toggle('hide')
  body.classList.toggle('overlay')
  page.classList.toggle('dis-scroll')
  setTimeout(() => {
    topMenuItems.forEach(item => {
      item.classList.toggle('popup')
    })
  }, 200)
  e.stopPropagation()
}

document.addEventListener('click', e => {
  if (page.classList.contains('dis-scroll')) {
    handleClick(e)
  }
  e.stopPropagation()
})

// header title animation =============================================
const headerTitle = document.querySelector('.header__title')

setTimeout(() => {
  headerTitle.classList.add('anim')
}, 500)