
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import the ScrollTrigger plugin

// gsap.registerPlugin(ScrollTrigger);



gsap.to('.vdo',{
    scrollTrigger:{
        trigger:".home",
        pin:true,
        scrub:.5,
        start:"top top",
        end:" bottom top"

    },
    '--clip':'0%',
    ease:"power2 inOut "

})

gsap.set(".slidesm",{scale:3})

gsap.to('.slidesm',{
    scrollTrigger:{
        trigger:".home",
        pin:true,
        scrub:.5,
        start:"top top",
        end:" bottom top"

    },
    scale:1,
    ease:"power2 inOut "

})
