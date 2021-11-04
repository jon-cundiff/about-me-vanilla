const menuObj = document.querySelector('#menu-button');
const menuHeader = document.querySelector('.menu-header');
let menuIcon;
menuObj.addEventListener('load', () => {
    // Need to wait until Object element loads before can grab elements in the SVG
    menuIcon = menuObj.contentDocument.querySelector('#menu-icon');
    menuIcon.addEventListener('click', menuClick);
});

let menuActive = false;

const menuClick = e => { 
    menuActive = !menuActive;
    clMethod = menuActive ? 'add' : 'remove';
    menuIcon.classList[clMethod]('menu-active');
    menuHeader.classList[clMethod]('menu-active');
}