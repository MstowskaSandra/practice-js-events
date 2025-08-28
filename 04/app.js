const elements = document.querySelectorAll('div');

const addClass = function(e) {
    e.stopPropagation();
    const allDivs = Array.from(elements);
    
    allDivs.forEach((div, index) => {
        setTimeout(() => {
            div.classList.add('clicked');
        }, 3000 * index);
    });
}

elements.forEach( function(item) {
        item.addEventListener('click', addClass);
});



const body = document.querySelector('body');

const removeClass = function(e) {
    elements.forEach(div => div.classList.remove('clicked'));
}

if(body) {
    body.addEventListener('click', removeClass);
}
