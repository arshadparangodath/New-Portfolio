(function scrollReveal() {
    window.sr = ScrollReveal();

    sr.reveal('.mH ', {
        duration: 900,
        distance: '200px',
        easing: 'ease-out',
        origin: 'bottom',
        reset: true,
        scale: 1,
        viewFactor: 1,
        afterReveal: revealChildren,
    }, 250);

    var revealChildren = sr.reveal('.sH', {
        duration: 1500,
        scale: 1,
        distance: '100px',
        origin: 'bottom',
        reset: true,
        easing: 'ease-out',
        afterReveal: secondChildren,
        viewFactor: 0,
    }, 375);


    var secondChildren = sr.reveal('.tH ', {
        duration: 1500,
        scale: 1,
        distance: '100px',
        origin: 'bottom',
        reset: true,
        easing: 'ease-out',
        viewFactor: 1,
    }, 375);

})();