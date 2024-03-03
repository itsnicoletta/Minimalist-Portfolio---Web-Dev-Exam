document.addEventListener('DOMContentLoaded', function () {
    const homeBtn = document.querySelector('.home_btn');
    const projectBtn = document.querySelector('.project_btn');
    const socialsBtn = document.querySelector('.socials_btn');

    const homeSection = document.querySelector('[data-page="home"]');
    const projectSection = document.querySelector('[data-page="Projects"]');
    const socialSection = document.querySelector('[data-page="Social"]');


    homeBtn.addEventListener('click', function () {
        const isHomeVisible = homeSection.style.display !== 'none';

        if (isHomeVisible) {
            homeSection.style.display = 'none';
        } else {
            homeSection.style.display = 'block';
            projectSection.style.display = 'none';
            socialSection.style.display = 'none';
        }
    });

    projectBtn.addEventListener('click',  function () {
        const isProjectVisible = projectSection.style.display !== 'none';

        if (isProjectVisible) {
            projectSection.style.display = 'none';
        } else  {
            homeSection.style.display = 'none';
            projectSection.style.display = 'block';
            socialSection.style.display = 'none';
        }   
    })

    socialsBtn.addEventListener('click', function () {
        const isSocialVisible = socialSection.style.display !== 'none';

        if (isSocialVisible) {
            socialSection.style.display = 'none'
        } else {
            homeSection.style.display = 'none';
            projectSection.style.display = 'none';
            socialSection.style.display = 'block';
        }
    })
});


//gsap animation

gsap.from(".siteHeader_title", {x: -65, opacity: 0.5, duration: 3, ease: "power3.out"});
gsap.from(".siteHeader_label", {x: -65, opacity: 0.5, delay: 0.15, duration: 3, ease: "power3.out"});
gsap.from("#square, #squaredue", {y: -100, opacity: 0,duration: 3, ease: "power3.out"});
gsap.from("img", {scale: 0.7, duration: 3, delay: 0.3, ease: "power3.out"});


let timeLine = gsap.timeline({ ease: "power3.out", stagger: 0.3}); 

timeLine 
.from(".siteHeader_navbar li",{opacity: 0, y: 800, duration: 2})
.from(".home_aboutme span",{opacity: 0, x: 65, duration: 3}, "-=2");

