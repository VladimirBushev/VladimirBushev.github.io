function burgerActive() {
    burger.classList.toggle('active')
    headerMenu.classList.toggle('active')
}

let burger = document.querySelector('.header-menu__icon')
burger.addEventListener('click', burgerActive);

let headerTop = document.querySelector('.header-top')
let headerBottomColumnFirst = document.querySelector('.header-bottom-column__first')
let headerBottomColumnLast = document.querySelector('.header-bottom-column__last')
let headerTopLang = document.querySelector('.header-top-lang')
let headerBottomMenu1 = document.querySelector('.header-bottom-menu')
let headerBottomMenu2 = document.querySelector('.header-bottom-menu--right')
let headerMenu = document.querySelector('.header-menu')

let okno = document.querySelector('body')

let w = okno.offsetWidth
let size = 'pc'
if (w < 751) {
    headerMenu.append(headerTopLang)
    headerMenu.append(headerBottomMenu1)
    headerMenu.append(headerBottomMenu2)
    size = 'mobile'
}

window.addEventListener('resize',removal)

function removal(){
    w = okno.offsetWidth
    if ((w < 751) && (size = 'pc')) {
        headerMenu.append(headerTopLang)
        headerMenu.append(headerBottomMenu1)
        headerMenu.append(headerBottomMenu2)       
        size = 'mobile'
    }
    else {
        size = 'pc'
        headerTop.prepend(headerTopLang)
        headerBottomColumnFirst.append(headerBottomMenu1)
        headerBottomColumnLast.append(headerBottomMenu2)
    }
    
}
function remooveLang1() {
    item1.classList.add('active')
    item2.classList.remove('active')
    item3.classList.remove('active')
}
function remooveLang2() {
    item2.classList.add('active')
    item1.classList.remove('active')
    item3.classList.remove('active')
}
function remooveLang3() {
    item3.classList.add('active')
    item2.classList.remove('active')
    item1.classList.remove('active')
}

let item1 = document.querySelector('.header-top-lang__item1')
let item2 = document.querySelector('.header-top-lang__item2')
let item3 = document.querySelector('.header-top-lang__item3')

item1.addEventListener('click', remooveLang1)
item2.addEventListener('click', remooveLang2)
item3.addEventListener('click', remooveLang3)

let ibg = document.querySelectorAll('.ibg')
console.log(ibg)
for (let i = 0; i < ibg.length; i++) {
    ibg[i].children[0].style.display = 'none';    
    let imageSrc = ibg[i].children[0].src
    if (imageSrc != '') ibg[i].style.backgroundImage = `url(${imageSrc})`
}
// ibg.children[0].style.display = 'none'
// let imageSrc = ibg.children[0].src
// if (imageSrc != '') ibg.style.backgroundImage = `url(${imageSrc})`