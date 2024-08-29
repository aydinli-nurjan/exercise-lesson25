// gsap.from(".words_n", {opacity: 0, duration: 1, delay: 1, y:30 })
// gsap.from(".sm", {opacity: 0, delay: 1, y:30, })
// gsap.from(".percent", {opacity: 0, delay: 2, y:30,})
// gsap.from(".mm", {opacity: 0, delay: 3, y:30,})
// gsap.from(".n", {opacity: 0, delay: 4, y:30,})
let btnAnimation = () => {
    const tlMessageBtn = gsap.timeline({ defaults: { duration: .1 } });
    tlMessageBtn.to('button_n', { rotate: 5 })
      .to('.button_n', { rotate: -5 })
      .to('.button_n', { rotate: 5 })
      .to('.button_n', { rotate: 0 });
    return tlMessageBtn;
  }

const tl = gsap.timeline({defaults: { duration: 1 } })
tl.from(".sm", {opacity: 0, y:30, })
tl.from(".percent", {opacity: 0, y:30, })
tl.from(".mm", {opacity: 0, y:30, })
tl.from(".n", {opacity: 0, y:30, })
tl.add(btnAnimation);


const goTopBtn = document.querySelector(".go-top");

window.addEventListener("scroll", trackScroll);
goTopBtn.addEventListener("click", goTop);

function trackScroll() {
  const scrolled = window.pageYOffset;
  const coords = document.documentElement.clientHeight;

  if (scrolled > coords) {
    goTopBtn.classList.add("go-top--show");
  } else {
    goTopBtn.classList.remove("go-top--show");
  }
}

function goTop() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -100);
    setTimeout(goTop, 0);x
  }
}

function filterSelection(category) {
  var items = document.getElementsByClassName('item');
  if (category === 'all') {
      category = ''; // Show all items if 'all' is selected
  }
  
  for (var i = 0; i < items.length; i++) {
      var item = items[i];
      if (item.className.indexOf(category) > -1) {
          item.style.display = "block"; // Show matching items
      } else {
          item.style.display = "none"; // Hide non-matching items
      }
  }

  // Update active button
  var buttons = document.getElementsByClassName('filter-btn');
  for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('active');
  }
  event.currentTarget.classList.add('active');
}
