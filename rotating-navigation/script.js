const open = document.querySelector("#open")
const close = document.querySelector("#close")

const container = document.querySelector('.container')

open.addEventListener('click', () => {
    console.log('open click');
    container.classList.add('show-nav')
})

close.addEventListener('click', () => {
    console.log('close click')
    container.classList.remove('show-nav')
})