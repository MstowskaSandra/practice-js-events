const handleClick = function() {
    console.log('Clicked');
}

const btn = document.querySelector('button');
if(btn) {
    btn.addEventListener('click', handleClick);
}