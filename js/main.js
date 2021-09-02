
const sr = ScrollReveal({
    origin: 'left',
    distance: '100px',
    duration: 1500,
    reset: false
    
});


sr.reveal(`.img-one, .Content`, {
    interval: 150
})

const sr2 = ScrollReveal({
    origin: 'right',
    distance: '100px',
    duration: 1500,
    reset: false
});

sr2.reveal(`.img-two, .Image`, {
    interval: 150
})


const sr3 = ScrollReveal({
    origin: 'left',
    distance: '150px',
    duration: 2000,
    reset: false
    
});


sr3.reveal(`.h2.one`, {
    interval: 150
})



const sr4 = ScrollReveal({
    origin: 'right',
    distance: '150px',
    duration: 2000,
    reset: false
});

sr4.reveal(`.h2.two`, {
    interval: 150
})

const sr5 = ScrollReveal({
    origin: 'bottom',
    distance: '200px',
    duration: 1500,
    reset: false
});

sr5.reveal(`.offering .col`, {
    interval: 150
})


const sr6 = ScrollReveal({
    origin: 'top',
    distance: '100px',
    duration: 2000,
    reset: false
});

sr6.reveal(`.inder-img span`, {
    interval: 150
})



