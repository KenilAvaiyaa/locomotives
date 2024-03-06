
// javascrip file code

function lodepage() {
    var t1 = gsap.timeline();

    t1.to(".background", {
        top: "-100%",
        delay: 0.5,
        duration: 0.5,
        ease: "expo.Out"
    })
    t1.from("nav", {
        opacity: 0,
        delay: 0.1
    }, 'h')
    t1.from(".bottom", {
        opacity: 0,
        delay: 0.1
    }, 'h')
    t1.to(".loder video", {
        top: "-100%",
        delay: 0.5,
        duration: 1,
        ease: "power4.out"
    }, 'a')
    t1.to(".loder", {
        opacity: 0,
        delay: 0.5,
        duration: 1,
        ease: "power4.out"
    }, 'a')

    t1.to(".menu a,.menu i", {
        color: "black",
        delay: 0.5,
        duration: 1,
        ease: "power4.out"
    }, 'a')
    t1.to(".bottom h5,.bottom button", {
        color: "black",
        delay: 0.5,
        duration: 1,
        ease: "power4.out"
    }, 'a')
    t1.to(".logo svg", {
        fill: "black",
        delay: 0.5,
        duration: 1,
        ease: "power4.out"
    }, 'a')
    t1.to(".loder", {
        display: "none",
        ease: "power4.out"
    })
}
lodepage()

// locomotive + scrolltrigger

function locoscr() {
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

        /* pinType: document.querySelector(".mainl").style.transform
          ? "transform"
          : "fixed"*/
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}
locoscr()

// image effect in page 2

function page2img(){
    var ele = document.querySelectorAll(".elem")
    var bg = document.querySelector(".page2")
    ele.forEach(function (el) {
    el.addEventListener("mouseenter", () => {
        var images = el.getAttribute("data-img");
        bg.style.backgroundImage = `url(${images})`;
    })
})
}
page2img()

// page2 nav change

function navchange_color(){
    var t2 = gsap.timeline({
        scrollTrigger: {
          trigger: "nav",
          scroller: ".main",
        //   markers:true,
          start: "top -100%",
          scrub: 1
        }
      })
    
    t2.to(".logo svg",{
        fill:"#ffffff"
    },'time')
    
    t2.to(".menu a,.menu i",{
        color:"#ffffff"
    },'time')
    
    
    var t3 = gsap.timeline({
        scrollTrigger: {
          trigger: "nav",
          scroller: ".main",
        //   markers:true,
          start: "top -185%",
          scrub: 1
        }
      })
    
    t3.to(".logo svg",{
        fill:"#000000"
    },'time')
    
    t3.to(".menu a,.menu i",{
        color:"#000000"
    },'time')
    
}
navchange_color()
