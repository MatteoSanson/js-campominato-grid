'use strict';

function elementoCella(tag, className, content) {
    const element = document.createElement(tag);
    element.classList.add(className);
    element.append(content);

    aggiungiEventoClick(element);

    return element;
}

function aggiungiEventoClick(element) {
    element.addEventListener('click', function() {
        element.classList.add('clicked');
        const cellNumber = element.textContent;
        console.log('Cella cliccata:', cellNumber);
    });
}

let grigliaGenerata = false;

const griglia = document.querySelector('.griglia');
const playButton = document.querySelector('.play');
const startMessage = document.querySelector('.start-message');

playButton.addEventListener('click', function() {
    startMessage.style.display = 'none';


    if (!grigliaGenerata) {
        for (let i = 1; i <= 100; i++) {
            const mioElemento = elementoCella('div', 'cell', i);
            griglia.append(mioElemento);
        }
        grigliaGenerata = true;
    }
});