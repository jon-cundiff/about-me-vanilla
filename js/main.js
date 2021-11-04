const menuObj = document.querySelector('.menu-button');
const menuHeader = document.querySelector('.menu-header');

let menuActive = false;

const menuClick = e => { 
    menuActive = !menuActive;
    clMethod = menuActive ? 'add' : 'remove';
    menuIcon.classList[clMethod]('menu-active');
    menuHeader.classList[clMethod]('menu-active');
}

const adjustFooterToContentSize = (e) => {
    console.log(e)
    if (e.type === 'resize' && window.innerWidth < 400) {
        return;
    }
    const sh = document.scrollingElement.scrollHeight;
    const footer = document.querySelector('.footer');
    if (sh > window.innerHeight) {
        footer.style.bottom = `${window.innerHeight - sh}px`;
    } else {
        footer.style.bottom = '0px';
    }
}

let menuIcon;
menuObj.addEventListener('load', () => {
    // Need to wait until Object element loads before can grab elements in the SVG
    menuIcon = menuObj.contentDocument.querySelector('.menu-svg');
    menuIcon.addEventListener('click', menuClick);
});

window.onload = window.onresize = adjustFooterToContentSize;

const para = document.querySelector('p');

para.addEventListener('click', () => {
    para.style.display = 'none';
    para.style.visibility = 'hidden';
})