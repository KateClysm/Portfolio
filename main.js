window.sr = ScrollReveal();

sr.reveal('.navbar, .wrapper',{
    duration: 1000,
    origin:'bottom',
    distance: '-50px',
    reset:'true'
});

sr.reveal('.about, .proyectosContainerItems',{
    reset:'true',
    distance: '100%',
    origin: 'left',
    duration:'3000',
    opacity:'100%'
    });

sr.reveal('.containerContact',{
    reset:'true',
    distance: '100%',
    origin: 'right',
    duration:'3000'
    });
