gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MorphSVGPlugin);
gsap.registerPlugin(DrawSVGPlugin);

/*----- Header -----*/

gsap.to(".icone", { 
  scrollTrigger: 'header',
  duration: 4,
  y: '40',
  repeat: -1,
});

/*----- Chapitre 01 -----*/

gsap.timeline({
  repeat: 5,
  scrollTrigger: {
    markers: true,
    toggleActions: "restart complete reverse reset",
    trigger: "#chapitre-01"}
  })
  .from("#chapitre-01 .planete", { duration: 10, scale: 0})
  .to("#chapitre-01 .planete", { duration: 5, x: "-150%", y: "120%",  scale: 1.2});

gsap.timeline({
  repeat: 5,
  
  scrollTrigger: {
    markers: true,
    toggleActions: "restart complete reverse reset",
    trigger: "#chapitre-01"}
  })
  .from("#chapitre-01 .chat-orange", { duration: 10, x: "100%", y: "100%"})
  .to("#chapitre-01 .chat-orange", { duration: 5, x: "-100%", y: "-80%", scale: 1.4});

gsap.timeline({
  repeat: 5,
  scrollTrigger: {   
    markers: true,
    toggleActions: "restart complete reverse reset",
    trigger: "#chapitre-01"}
  })
  .from("#chapitre-01 .cercle-grand", { scale: 0.7, duration: 2.5})
  .from("#chapitre-01 .cercle-petit", { scale: 0, duration: 3.75})
  .from("#chapitre-01 .cercle-moyen", { scale: 0.5, duration: 3.75} )
  .to("#chapitre-01 .cercle-morphing", { scale: 1.5, duration: 5});


  gsap.to("#chapitre-02 .parallax-eau", { 
    scrollTrigger: {
      scrub: true,
      markers: true,
      start: '20% 50%',
      end: 'bottom top',
      trigger: '#chapitre-02',
    },
    y: '-80%',
    yoyo: true,
  });

  gsap.to("#chapitre-02 .parallax-degrade", { 
    scrollTrigger: {
      scrub: true,
      markers: true,
      start: 'top 50%',
      end: 'bottom top',
      trigger: '#chapitre-02',
    },
    y: '-100%',
    yoyo: true,
  });

  gsap.to("#chapitre-02 .parallax-etoile", { 
    scrollTrigger: {
      scrub: true,
      markers: true,
      start: 'top bottom',
      end: 'bottom top',
      trigger: '#chapitre-02',
    },
    y: '-100%',
    x: '-20%',
    scaleX: 0.5,
    yoyo: true,
  });

gsap.to("#chapitre-02 .chat-orange", { 
  scrollTrigger: {
    scrub: true,
    markers: true,
    start: 'top 50%',
    end: 'bottom top',
    trigger: '#chapitre-02',
  },
  y: '600%',
  yoyo: true,
});



let circle = document.querySelector("#circle");
let anim1 = gsap.to(circle,{
  scrollTrigger: {
    scrub: 0.5,
    markers: true,
    start: 'top 60%',
    end: '40% top',
    trigger: '#chapitre-02',
  },
  morphSVG: {
    shape: "#etoile",
  },
  fill:"#FFCE51",
  yoyo: true
});
/*----- Chapitre 03 et 4 -> Bulles -----*/

gsap.to(".bulles", { 
  scrollTrigger: '#chapitre3',
  scrollTrigger: '#chapitre4',
  duration: 10,
  y: '5%',
  scale: 1.2,
  repeat: -1,
  yoyo: true,
});

gsap.to("#chapitre-03 .chat-orange", { 
  scrollTrigger: {
    scrub: true,
    markers: true,
    start: 'top 63%',
    end: '50% 50%',
    trigger: '#chapitre-03',
  },
  y: '300%',
  yoyo: true,
});

gsap.to("#chapitre-03 .sprite-sheets-plante", { 
  scrollTrigger: {
    scrub: true,
    markers: true,
    start: 'top 50%',
    end: 'bottom top',
    trigger: '#chapitre-03',
  },
  scaleY: 2,
  yoyo: true,
});

/*gsap
  .timeline({
    scrollTrigger: {
      markers: true,
      start: 'top 63%',
      end: '50% 50%',
      trigger: '#chapitre-03',
    }
  })
  .to("#chapitre-03 .chat-orange", { y: "300%" })
  .to("#chapitre-03 .chat-orange",  { x: "300%" });*/

/*gsap.from("#chapitre-03 .chat-orange", { 
  duration: 3,
  y: '-250%',
  repeat: -1,
  ease: "power4.out",
});*/



/*----- Chapitre 04 -----*/

gsap.from("#chapitre-04 .coraux-rose-mauve", { 
  scrollTrigger: '#chapitre4',
  duration: 5,
  rotate: '6',
  repeat: -1,
  yoyo: true,
  ease: "expo.out",
});

gsap.to('#chapitre-04 .sprite-sheets-poisson', {
  motionPath: {
    align: '#courbe',
    path: '#courbe',
    alignOrigin: [0.5, 0.5]
  },
  scrollTrigger: {
    scrub: true,
    markers: true,
    start: 'top 50%',
    end: 'bottom top',
    trigger: '#chapitre-04',
  },
  yoyo: true,
})

gsap.from("#chapitre-04 .chat-orange", { 
  scrollTrigger: {
    scrub: true,
    markers: true,
    start: 'top 50%',
    end: 'bottom top',
    trigger: '#chapitre-04',
  },
  x: '600%',
});


/*----- Chapitre 05 -----*/

gsap.to("#chapitre-05 .hippocampe", { 
  scrollTrigger: {
    scrub: 0.5,
    markers: true,
    start: 'top bottom',
    end: 'bottom top',
    trigger: '#chapitre-05',
  },
  y: '40%',
  yoyo: true,
});

gsap.from("#chapitre-05 .coraux-vert-rose", { 
  scrollTrigger: {
    scrub: 0.5,
    markers: true,
    start: 'top bottom',
    end: 'bottom top',
    trigger: '#chapitre-05',
  },
  rotate: '30',
  yoyo: true,
});

gsap.from("#chapitre-05 .raie", { 
  scrollTrigger: {
    scrub: 0.5,
    markers: true,
    start: '20% 50%',
    end: 'bottom 70%',
    trigger: '#chapitre-05',
  },
  x: '200%',
  yoyo: true,
});

gsap.from("#chapitre-05 .chat-orange", { 
  scrollTrigger: {
    scrub: 0.5,
    markers: true,
    start: '20% 50%',
    end: 'bottom 70%',
    trigger: '#chapitre-05',
  },
  x: '200%',
  yoyo: true,
});

/*----- Chapitre 06 -----*/

gsap.to("#chapitre-06 .personnage-mauve", { 
  scrollTrigger: '#chapitre6',
  duration: 4,
  y: '10%',
  repeat: -1,
  yoyo: true,
  delay: 10,
});

gsap.from("#chapitre-06 .personnage-mauve", { 
  scrollTrigger: '#chapitre6',
  duration: 10,
  x: '300%',
});

/*----- Chapitre 08 -----*/

gsap.timeline({
  repeat: 5,
  scrollTrigger: {
    markers: true,
    toggleActions: "restart complete reverse reset",
    trigger: "#chapitre-08"}
  })
  .from("#chapitre-08 .cercle-petit-01-morphing", { scale: 0, duration: 3.75})
  .from("#chapitre-08 .cercle-petit-03-morphing", { scale: 0, duration: 5})
  .to("#chapitre-08 .cercle-moyen-01-morphing", { scale: 0, duration: 3.75})
  .to("#chapitre-08 .cercle-petit-02-morphing", { scale: 0, duration: 10} )
  .from("#chapitre-08 .cercle-moyen-01-morphing", { scale: 0, duration: 10});

gsap.from("#chapitre-08 .cercle-grand-01-morphing", { 
  scrollTrigger: '#chapitre8',
  duration: 8,
  scale: 0.7,
  repeat: -1,
  yoyo: true,
});

gsap.from("#chapitre-08 .cercle-grand-02-morphing", { 
  scrollTrigger: '#chapitre8',
  duration: 10,
  scale: 0.5,
  repeat: -1,
  yoyo: true,
  delay: 2,
});

gsap.from("#chapitre-08 .chat-orange", { 
  scrollTrigger: {
    scrub: 0.5,
    markers: true,
    start: 'top 63%',
    end: '50% 50%',
    trigger: '#chapitre-08',
  },
  y: '-100%',
  yoyo: true,
});

gsap.set("#ligne",{drawSVG:"0% 0%"});

gsap.to(
  "#ligne",
  {
    drawSVG:"0% 100%", 
    duration: 4, 
    ease:"power1.inOut",
    scrollTrigger: {
      scrub: 0.5,
      markers: true,
      start: 'top 63%',
      end: '50% 50%',
      trigger: '#chapitre-08',
    },
  }
);


const body = document.querySelector("body");
let delai;

window.addEventListener("scroll", function () {
  body.classList.add('is-scrolling');
  window.clearTimeout(delai)
  delai =  setTimeout(function() {
    body.classList.remove('is-scrolling')
  }, 100); 
})