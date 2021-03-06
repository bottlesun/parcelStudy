const landing = () => {
    /* 마우스 모션 */

    let x = 0,
        y = 0,
        mx = 0,
        my = 0,
        speed = 0.03,
        lendingDisplay = true

    let TextMoving = document.getElementById('parallax_2'),
        CircleContent = document.getElementsByClassName('circle_content')[0],
        nav = document.getElementsByTagName('header')[0];

    let landingWrap;

    function TextAnimation() {
        landingWrap = document.querySelector('.landingWrap');

        window.addEventListener('mousemove', mouseMove);

        CircleContent.addEventListener('mouseover', MouseHover);
        CircleContent.addEventListener('mouseout', MouseHover);
        landingWrap.addEventListener('click', ClickMove);
        loadEvent()


        loop()
    }


    function loop() { // 자연스러운 움직임 무한 루프를 줘서 모션의 움직임을 자연스럽게 할때 사용

        // 마우스의 가속도 조절
        mx += (x - mx) * speed;
        my += (y - my) * speed;
        TextMoving.style.transform = `translate(${-mx / 40}px,${-my / 40}px)`

        window.requestAnimationFrame(loop);
    }

    function mouseMove(e) {
        // e.clientX,Y (마우스 무브 기준 위치 = 브라우저 안쪽 넓이 , 높이 / 2) = 가운데 값
        x = (e.clientX - window.innerWidth / 2);
        y = (e.clientY - window.innerHeight / 2);
    }


    function MouseHover(e) {

        if (e.type === 'mouseover') {
            let tl = gsap.timeline();

            tl.to(".circle_content", {
                scale: 1.2
            })
        } else if (e.type === 'mouseout') {
            let tl = gsap.timeline();
            tl.to(CircleContent, {
                scale: 1,
            })
        }
    }


    function ClickMove(e) {
        if (e.type === 'click') {
            let tl = gsap.timeline();
            tl.to('.landingWrap', {
                scale: 2.5,
                display: "none",
            }).to('.landings', {
                display: 'none'
            }).from(nav,{
                y : -100,
                duration : 1
            }, ">1")
        }
        landingWrap = document.querySelector('.landingWrap');
        landingWrap.dataset.set = 'false';

        if(landingWrap.dataset.set === 'false'){
            let tl = gsap.timeline();
            tl.from('.mainContent .content-1 span',{
                scale : 2,
                duration: 1
            }, ">1").from('.mainContent .content-1 ul li',{
                autoAlpha : 0,
                stagger : 0.1,
                duration : 1
            }," >1")

            document.body.classList.remove('scrollHidden')
        }




    }

    const loadEvent = () => {
        let tl = gsap.timeline();
        tl.from('.circle', {
            autoAlpha: 0,
            scale: 0.3,
            stagger: 5,
        }).from(TextMoving, {
            autoAlpha: 0,
            stagger: 5,
        })
    }


    window.onload = () => {
        TextAnimation()
        document.body.classList.add('scrollHidden');
    }

}

export default landing;