// initialize element references, define once loaded
let menuObj;
let menuHeader;
let menuIcon;

let menuActive = false;

const menuClick = e => { 
    menuActive = !menuActive;
    clMethod = menuActive ? 'add' : 'remove';
    menuIcon.classList[clMethod]('menu-active');
    menuHeader.classList[clMethod]('menu-active');
}

const adjustFooterToContentSize = () => {
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

window.onresize = adjustFooterToContentSize;

const loadElement = (el) => {
    return new Promise(async(resolve) => {
        const resp = await fetch(`./layout/${el}.html`)
        const rawHTML = await resp.text();
        parsed = new DOMParser().parseFromString(rawHTML, 'text/html');
        resolve(parsed.body.firstElementChild);           
    })    
}

window.onload = async() => {
    const headerEl = await loadElement('header');
    const footerEl = await loadElement('footer');
    const mainContent = document.querySelector('#main');
    mainContent.parentNode.insertBefore(headerEl, mainContent);
    mainContent.parentNode.append(footerEl);
    menuObj = document.querySelector('.menu-button');
    menuHeader = document.querySelector('.menu-header');
    menuObj.addEventListener('load', () => {
        // Need to wait until Object element loads before can grab elements in the SVG
        menuIcon = menuObj.contentDocument.querySelector('.menu-svg');
        menuIcon.addEventListener('click', menuClick);
    });

    adjustFooterToContentSize();
}