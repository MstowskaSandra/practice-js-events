const elements = document.querySelectorAll('div');

const addClass = function(e) {
    e.stopPropagation();
    e.currentTarget.classList.add('clicked');
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