"use strict";

(function() {
    const information = document.querySelector('.js-default');
    const triggers = document.querySelectorAll('.js-trigger');

    triggers.forEach(element => {
        element.addEventListener('click', event => {
            const acordeon = element.parentElement;
            const isOpen = acordeon.classList.contains('c-acordeon--open');
            
            if (isOpen)
                acordeon.classList.remove('c-acordeon--open');
            else
                acordeon.classList.add('c-acordeon--open');
        })
    });
    
    window.addEventListener('resize', event => {
        const isMenor = window.innerWidth < 768;

        if (isMenor)
            information.classList.add('u-horizontally-cetralize');
        else
            information.classList.remove('u-horizontally-cetralize');
    });
})();