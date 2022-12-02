const menuMobile = document.querySelector('#menu-mobile');
const overlay = document.querySelector('#overlay');
// const showMenu = document.querySelector('#show-menu');
// const hideMenu = document.querySelector('#hide-menu');

// const classList = {
//     visible = 'visible',
//     hidden = 'hidden',
//     block = 'block',
//     none= 'none'
// }

const show = (elem) => {
    return function () {
        elem.classList.add('visible');
        elem.classList.remove('hidden');
    }
}


const hide = (elem) => {
    return function () {
        elem.classList.add('hidden');
        elem.classList.remove('visible');
    }
}


document.querySelector('#toggle-mobile').addEventListener('click', show(overlay));
document.querySelector('#toggle-mobile').addEventListener('click', show(menuMobile));

document.querySelector('#hide-menu').addEventListener('click', hide(overlay));
document.querySelector('#hide-menu').addEventListener('click', hide(menuMobile));

// const toggleElement = (element, addClass, removeClass) => {
//     element.classList.add(addClass);
//     element.classList.remove(removeClass);
// }

// showMenu.addEventListener('click', () => {
//     toggleElement(overlay, classList.visible, classList.hidden);
//     toggleElement(menuMobile, classList.visible, classList.hidden);
//     toggleElement(hideMenu, classList.visible, classList.none);
//     toggleElement(showMenu, classList.none, classList.block);
// });

// hideMenu.addEventListener('click', () => {
//     toggleElement(overlay, classList.hidden, classList.visible);
//     toggleElement(menuMobile, classList.hidden, classList.visible);
//     toggleElement(hideMenu, classList.none, classList.block);
//     toggleElement(showMenu, classList.block, classList.none);
// });