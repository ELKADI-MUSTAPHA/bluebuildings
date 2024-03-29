const sr = ScrollReveal({
  origin: "left",
  distance: "100px",
  duration: 1500,
  reset: false,
});

sr.reveal(`.Content`, {
  interval: 150,
});

const sr2 = ScrollReveal({
  origin: "right",
  distance: "100px",
  duration: 1500,
  reset: false,
});

sr2.reveal(`.image`, {
  interval: 150,
});

if (window.innerWidth > 600) {
  const sr = ScrollReveal({
    origin: "left",
    distance: "100px",
    duration: 1500,
    reset: false,
  });
  sr.reveal(`.img-one, .h2.one`, {
    interval: 150,
  });

  const sr2 = ScrollReveal({
    origin: "right",
    distance: "100px",
    duration: 1500,
    reset: false,
  });
  sr2.reveal(`.img-two, .h2.two`, {
    interval: 150,
  });
}

const sr5 = ScrollReveal({
  origin: "bottom",
  distance: "200px",
  duration: 1000,
  reset: false,
});

sr5.reveal(`.offering .col, .why-us`, {
  interval: 150,
});
const sr7 = ScrollReveal({
  origin: "bottom",
  distance: "50px",
  duration: 1000,
  reset: false,
});

sr7.reveal(`.row a`, {
  interval: 150,
});

if (window.innerWidth < 600) {
  sr5.reveal(`.img-one, .img-two, .h2.one, .h2.two`, {
    interval: 150,
  });
}

const sr6 = ScrollReveal({
  origin: "top",
  distance: "100px",
  duration: 1000,
  reset: false,
});

sr6.reveal(`.inder-img span`, {
  interval: 150,
});

