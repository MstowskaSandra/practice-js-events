const elements = document.querySelectorAll('div');

const addClass = function(e) {
    e.stopPropagation();
    const clickedDiv = e.currentTarget;
    const childDivs = clickedDiv.querySelectorAll('div');
    
    if(childDivs.length === 0) {
        const allDivs = Array.from(elements);
        allDivs.forEach((div, index) => {
            setTimeout(() => {
                div.classList.add('clicked');
            }, 2000 * index);
        });
    } else {
        setTimeout(() => {
            clickedDiv.classList.add('clicked');
        }, 2000);
    }
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



