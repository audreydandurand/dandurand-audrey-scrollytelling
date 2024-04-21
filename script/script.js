gsap.to(".icone", { 
    duration: 4,
    y: '40',
    repeat: -1,
  });

gsap.timeline({repeat: 5})
  .from("#chapitre-01 .planete", { duration: 10, scale: 0})
  .to("#chapitre-01 .planete", { duration: 5, x:-1000, y: 500,  scale: 1.2});

gsap.timeline({repeat: 5})
  .from("#chapitre-01 .chat-orange", { duration: 10, x: 220, y: 200})
  .to("#chapitre-01 .chat-orange", { duration: 5, x: -220, y: -220, scale: 1.4});

gsap.timeline({repeat: 5})
  .from("#chapitre-01 .cercle-grand", { scale: 0.7, duration: 2.5})
  .from("#chapitre-01 .cercle-petit", { scale: 0, duration: 3.75})
  .from("#chapitre-01 .cercle-moyen", { scale: 0.5, duration: 3.75} )
  .to("#chapitre-01 .cercle-morphing", { scale: 1.5, duration: 5});



const bodySpriteSheets = document.querySelector(".body-sprite-sheets");

let delai;

window.addEventListener("scroll", function (e) {
  bodySpriteSheets.classList.add('is-scrolling');
  window.clearTimeout(delai)
  delai =  setTimeout(function() {
    bodySpriteSheets.classList.remove('is-scrolling')
  }, 100); 
})

