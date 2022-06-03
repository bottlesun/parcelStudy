const main = () => {
    let tl = gsap.timeline();

    let ScrollAction = gsap.timeline();

    ScrollAction.set('.content-2 > span', {
        x: "20%",
        autoAlpha : 0

    })
    ScrollAction.to('.content-2 > span', 2, {
        x: "45%",
        autoAlpha : 1,
        ease: 'expo.inout'
    })

    ScrollTrigger.create({
        animation: ScrollAction,
        trigger : ".content-2",
        scrub : 2,
        start : 'top top',
        end : 'bottom bottom',
        pin:true
    })

}

export default main;