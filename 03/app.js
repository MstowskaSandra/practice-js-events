const btnElements = document.querySelectorAll('button');

const handleClick = function(e) {
    e.preventDefault();
    e.target.textContent = 'Clicked';
    console.log('Clicked');
    e.target.removeEventListener('click', handleClick);
}

btnElements.forEach( function(item) {
        item.addEventListener('click', handleClick);
});