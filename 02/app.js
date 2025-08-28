const mouseMove = function() {
    console.log("Poruszasz myszką po obiekcie!");
}

const mouseLeave = function() {
    console.log("Myszka opuściła obiekt!");
}

const div = document.querySelector('div');
if(div) {
    div.addEventListener('mousemove', mouseMove);
    div.addEventListener('mouseleave', mouseLeave);
}