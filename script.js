const burger = document.getElementById('burger')
const header = document.getElementById('header')

burger.addEventListener('click', function(){
    burger.classList.toggle('active')
    header.classList.toggle('active')
})