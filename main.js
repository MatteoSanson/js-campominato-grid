// 'use strict';

// function elementoCella(tag, className, content){
//     const element = document.createElement(tag);
//     element.classList.add(className);
//     element.append(content);
//     return element;
// }

// const griglia = document.querySelector('.griglia');
// console.log(griglia);

// for (let i=1; i<=100; i++) {
//     const mioElemento = elementoCella('div', 'cell', i);
//     griglia.append(mioElemento);
// }

'use strict';

function elementoCella(tag, className, content) {
    const element = document.createElement(tag);
    element.classList.add(className);
    element.append(content);
    return element;
}

const griglia = document.querySelector('.griglia');
const playButton = document.querySelector('.play');
const startMessage = document.querySelector('.start-message');

playButton.addEventListener('click', function() {
    startMessage.style.display = 'none';

    for (let i = 1; i <= 100; i++) {
        const mioElemento = elementoCella('div', 'cell', i);
        griglia.append(mioElemento);
    }

    playButton.disabled = true;
});