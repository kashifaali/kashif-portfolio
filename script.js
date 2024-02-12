/* typed animation---------------------------------*/

var typed = new Typed(".flow-text",{
    strings: ["","Bootstrap", "Tailwind Css", "Javascript",],
    typeSpeed: 100,
    backSpeed: 60,
    loop:true,
})


$(document).ready(function(){
    $('#icon').click(function(){
        $("ul").toggleClass('show');
    })
})


/* nav bar sticky-------------------------------*/

const main_section = document.querySelector("#main-container");
const navbar = document.querySelector(".nav");

const observer = new IntersectionObserver(
    (entries) => {
        const ent = entries[0];
        ent.isIntersecting == false
        ? navbar.classList.add("sticky")
        : navbar.classList.remove("sticky");
    },
    {
        root: null,
        rootMargin: "-80px",
        threshold: 0,
    }
);

observer.observe(main_section);




/* navbar active--------------------------*/


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.btn');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.btn[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

