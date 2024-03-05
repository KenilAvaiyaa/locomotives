// locmotive and gsap

function init(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector(".main").style.transform
    ? "transform"
    : "fixed"*/
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
init()

// locomotive

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });

// javascrip file code

var t1 = gsap.timeline();

t1.to(".background",{
    top:"-100%",
    delay:0.5,
    duration:0.5,
    ease: "expo.Out"
})
t1.from("nav",{
    opacity:0,
    delay:0.1
})
t1.to(".loder video",{
    top:"-100%",
    delay:0.5,
    duration:1,
    ease: "power4.out"
},'a')
t1.to(".loder",{
    opacity:0,
    delay:0.5,
    duration:1,
    ease: "power4.out"
},'a')
t1.to(".menu a,.menu i",{
    color:"black",
    delay:0.5,
    duration:1,
    ease: "power4.out"
},'a')
t1.to(".logo svg",{
    fill:"black",
    delay:0.5,
    duration:1,
    ease: "power4.out"
},'a')