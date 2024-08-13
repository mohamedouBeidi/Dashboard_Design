// Code specifie To Menu
let show = document.querySelector('#show');
let nav = document.querySelector('#nav');
let skip = document.querySelector('#skip')
let content =document.querySelector('.content')
show.addEventListener('click', function () {
    nav.style.cssText = 'display: flex'
    content.style.cssText = 'display: none'

})
skip.addEventListener('click', function () {
    nav.style.cssText = 'display: none'
    content.style.cssText = 'display: flex'
})

let control = document.querySelectorAll('#control')
control.forEach(function (ele) {
    ele.addEventListener('click', function () {
        control.forEach(function (check) {
            if(check.className === 'checked') {
         check.className = "error"
        } else {
            check.className = "checked"
        }
    })
        })
})