const swiper = new Swiper('.swiper', {
    
    pagination:{
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoHeight:true,
    autoplay:{
        delay: 1500,
    }, 
    breakpoints:{
        600:{
            slidesPerView: 3 ,
            navigation: {
                nextEl:'.swiper-button-next',
                prevEl:'.swiper-button-prev'
            },
        }
    }
});


const menu = document.querySelector('.menu__body');
const menuBtn = document.querySelector('.menu__icon');

const body = document.body; 

if (menu && menuBtn){
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('_active');
        menuBtn.classList.toggle('_active')
        body.classList.toggle('_lock')
    })  
}