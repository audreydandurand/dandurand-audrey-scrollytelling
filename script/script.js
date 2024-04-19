gsap.to(".icone", { 
    duration: 4,
    y: '40',
    repeat: -1,
  });

const bodySpriteSheets = document.querySelector(".body-sprite-sheets");

let delai;

window.addEventListener("scroll", function (e) {
  bodySpriteSheets.classList.add('is-scrolling');
  window.clearTimeout(delai)
  delai =  setTimeout(function() {
    bodySpriteSheets.classList.remove('is-scrolling')
  }, 100); 
})

