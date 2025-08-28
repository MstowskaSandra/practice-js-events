const stats = {
    paragraphs: {
        'p1': 0,
    },
    links: {
        '/dolor.html': 0,
    }
};

/* tutaj umieść swój kod */
const elements = document.querySelectorAll('p.text');

const counter = function(e) {
    
    const pId = e.currentTarget.dataset.id;
    if(stats.paragraphs[pId] !== undefined) {
        stats.paragraphs[pId]++;
    } else {
        stats.paragraphs[pId] = 1;
    }
    
    if(e.target.tagName === 'A' && e.target.classList.contains('link')) {
        e.preventDefault();
        const href = e.target.getAttribute('href');

        if(stats.links[href] !== undefined) {
            stats.links[href]++;
        } else {
            stats.links[href] = 1;
        }
    }

    fireCustomEvent(statsElement, 'render');

}

elements.forEach(p => p.addEventListener('click', counter));

/* nie modyfikuj kodu poniżej, ale przeanalizuj go */

const statsElement = document.querySelector('.stats');
const fireCustomEvent = function(element, name) {
    console.log(element, '=>', name);

    const event = new CustomEvent(name, {
        bubbles: true,
    });

    element.dispatchEvent( event );
}

const renderStats = function(data, element) {
    let html = '';
    for(let elementType in data) {
        html += '<ul>';

        for(let key in data[elementType]) {
            
            html += '<li>';
            html += key + ' -> ' + data[elementType][key];
            html += '</li>';
        }

        html += '</ul>'
    }

    element.innerHTML = html;
}


document.addEventListener('click', function(e) {
    const tagName = e.target.tagName;
    if(tagName.includes('P') || tagName.includes('A')) {
        fireCustomEvent(statsElement, 'render');
    }
});
statsElement.addEventListener('render', renderStats.bind(this, stats, statsElement));
document.addEventListener('DOMContentLoaded', fireCustomEvent.bind(null, statsElement, 'render'));

