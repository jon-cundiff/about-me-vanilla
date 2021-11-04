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
        console.log('nope')
        return;
    }
    const sh = document.scrollingElement.scrollHeight;

    // changing bottom property of footer to push down triggered additional resize calls
    // and pushed the footer up several pixels after it was sent to bottom of page.
    // changing position to relative ensures proper placement directly after the content
    const footer = document.querySelector('.footer');
    if (sh > window.innerHeight) {
        footer.style.position = 'relative';
    } else {
        footer.style.position = 'absolute';
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