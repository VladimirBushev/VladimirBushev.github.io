let burg = false;
let menu = document.querySelector('.header-menu-burger')
let body = document.querySelector('body')

function burgerMenu() {
    if (burg === false) {
        burger.classList.add('activated');
        menu.classList.add('activated');
        body.classList.add('activated');
        burg = true;
    }
    else {
        burger.classList.remove('activated');
        menu.classList.remove('activated');
        body.classList.remove('activated');
        burg = false;
    }
}



let burger = document.querySelector('.header-burger')
burger.addEventListener('click', burgerMenu)

let width = screen.width
if (width < 1440) {
    if (width < 1070) {
        document.querySelector('.section-5-image-4').style.width = '350px'
    } else {
        imageWidth = `${331 - (1440 - width) / 2}px`
        if ((330 - (1440 - width) / 2) > 325) imageWidth = '325px'
        document.querySelector('.section-5-image-4').style.width = imageWidth
    }
    if (width < 777) {
        document.querySelector('.section-5-image-4-img').style.display = 'block'
        document.querySelector('.section-5-image-4').style.width = '100%'
    } else {
        document.querySelector('.section-5-image-4-img').style.display = 'none'
    }
}
else {
    document.querySelector('.section-5-image-4').style.width = '325px'
}
if (width < 1690) {
    blockWidth = `${445.5 - (1690 - width) / 2}px`
    document.querySelector('.section-7-content-block-3').style.width = blockWidth
}

window.onresize = function () {
    width = screen.width
    if (width < 1440) {
        if (width < 1070) {
            document.querySelector('.section-5-image-4').style.width = '350px'
        } else {
            imageWidth = `${331 - (1440 - width) / 2}px`
            if ((330 - (1440 - width) / 2) > 325) imageWidth = '325px'
            document.querySelector('.section-5-image-4').style.width = imageWidth
        }
        if (width < 777) {
            document.querySelector('.section-5-image-4-img').style.display = 'block'
            document.querySelector('.section-5-image-4').style.width = '100%'
        } else {
            document.querySelector('.section-5-image-4-img').style.display = 'none'
        }
    }
    else {
        document.querySelector('.section-5-image-4').style.width = '325px'
    }
    if (width < 1690) {
        blockWidth = `${445.5 - (1690 - width) / 2}px`
        document.querySelector('.section-7-content-block-3').style.width = blockWidth
    }
}

let menu1 = document.querySelector('.footer-container-menu-block-1-spaces-menu')
let menu2 = document.querySelector('.footer-container-menu-block-2-spaces-menu')
let menu3 = document.querySelector('.footer-container-menu-block-3-spaces-menu')
let menu4 = document.querySelector('.footer-container-menu-block-4-spaces-menu')

let h1 = document.querySelector('.footer-container-menu-block-1-spaces')
let flag1 = true
let h2 = document.querySelector('.footer-container-menu-block-2-spaces')
let flag2 = true
let h3 = document.querySelector('.footer-container-menu-block-3-spaces')
let flag3 = true
let h4 = document.querySelector('.footer-container-menu-block-4-spaces')
let flag4 = true

h1.addEventListener('click', () => {
    if (flag1) {
        menu1.classList.add('activated')
        h1.classList.add('activated')
        menu2.classList.remove('activated')
        menu3.classList.remove('activated')
        menu4.classList.remove('activated')
        h2.classList.remove('activated')
        h3.classList.remove('activated')
        h4.classList.remove('activated')
        flag1 = false
        flag2 = true
        flag3 = true
        flag4 = true
    } else {
        h1.classList.remove('activated')
        menu1.classList.remove('activated')
        flag1 = true
    }
})


h2.addEventListener('click', () => {
    if (flag2) {
        menu2.classList.add('activated')
        h2.classList.add('activated')
        menu1.classList.remove('activated')
        menu3.classList.remove('activated')
        menu4.classList.remove('activated')
        h4.classList.remove('activated')
        h3.classList.remove('activated')
        h1.classList.remove('activated')
        flag2 = false
        flag1 = true
        flag3 = true
        flag4 = true
    } else {
        h2.classList.remove('activated')
        menu2.classList.remove('activated')
        flag2 = true
    }
})

h3.addEventListener('click', () => {
    if (flag3) {
        menu3.classList.add('activated')
        h3.classList.add('activated')
        menu2.classList.remove('activated')
        menu1.classList.remove('activated')
        menu4.classList.remove('activated')
        h2.classList.remove('activated')
        h4.classList.remove('activated')
        h1.classList.remove('activated')
        flag3 = false
        flag2 = true
        flag1 = true
        flag4 = true
    } else {
        h3.classList.remove('activated')
        menu3.classList.remove('activated')
        flag3 = true
    }
})

h4.addEventListener('click', () => {
    if (flag4) {
        menu4.classList.add('activated')
        h4.classList.add('activated')
        menu2.classList.remove('activated')
        menu3.classList.remove('activated')
        menu1.classList.remove('activated')
        h2.classList.remove('activated')
        h3.classList.remove('activated')
        h1.classList.remove('activated')
        flag4 = false
        flag2 = true
        flag3 = true
        flag1 = true
    } else {
        h4.classList.remove('activated')
        menu4.classList.remove('activated')
        flag4 = true
    }
})

window.pageXOffset/pageYOffset

let header = document.querySelector('.header')
let headerContainer = document.querySelector('.header-container')

window.addEventListener('scroll', () => {
    if (window.pageYOffset >= 100) {
    header.style.position = 'fixed'
    headerContainer.style.marginTop='0px'
    } else {
        if (width > 776) headerContainer.style.marginTop='61px'
        header.style.position = 'static'
    }
    console.log( window.pageYOffset )
} )