const elements = document.querySelectorAll('div');

const addClass = function(e) {
    e.currentTarget.classList.add('clicked');
}

elements.forEach( function(item) {
        item.addEventListener('click', addClass);
});