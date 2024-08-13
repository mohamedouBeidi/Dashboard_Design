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
    // return ele
    })
        })
})
let change = document.querySelector('#change')
let email = document.querySelector('#email')

change.addEventListener('click', function () {
    email.removeAttribute('disabled');
})

let list = document.querySelectorAll('#blue')

list.forEach(function (li) {
    li.addEventListener('click', function(e) {
        list.forEach(function (li) {
            li.classList.remove('blue')
        })
        e.currentTarget.classList.add('blue')
    })
})

// let input = document.querySelectorAll('#input');
// let brand = document.querySelectorAll('.icon');

// input.forEach(function (element) {
//     element.addEventListener('focus', function () {
//         input.forEach(function () {
//             brand[1].style.cssText = 'color: red;'
//         })
//     })
// })
