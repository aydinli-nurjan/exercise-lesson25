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

