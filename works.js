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