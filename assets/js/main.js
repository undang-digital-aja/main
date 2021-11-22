// ===== SHOW MENU ===== //
const navMenu = document.getElementById('nav-menu'),
		navToggle = document.getElementById('nav-toggle'),
		navClose = document.getElementById('nav-close');

// Menu Show //
/* Validate if constant exists */
if(navToggle){
	navToggle.addEventListener('click', () =>{
		navMenu.classList.add('show-menu')
	})
}

// Menu Hidden //
/* Validate if constant exists */
if(navClose){
	navClose.addEventListener('click', () =>{
		navMenu.classList.remove('show-menu')
	})
}
// ===== end show menu ===== //

// ===== REMOVE MENU MOBILE ===== //
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
	const navMenu = document.getElementById('nav-menu')

	// When we click on each nav__link, we remove the show-menu class
	navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction));
// ===== end remove menu mobile ===== //

/* ===== SCROLL SECTIONS ACTIVE LINK ===== */
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight
		const sectionTop = current.offsetTop - 50;
		sectionId = current.getAttribute('id')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
		}else{
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
		}
	})
}
window.addEventListener('scroll', scrollActive);
// ===== end scroll sections active link ===== //

/* ===== CHANGE BACKGROUND HEADER ===== */
function scrollHeader(){
	const nav = document.getElementById('header')

	if (this.scrollY >= 200) {
		nav.classList.add('scroll-header');
	}else{
		nav.classList.remove('scroll-header');
	}
}
window.addEventListener('scroll', scrollHeader);
// ===== end change background header ===== //

// ===== HOME SLIDES - SWIPER ===== //
var homeSwiper = new Swiper(".home__slides", {
	spaceBetween: 30,
	effect: "fade",

	autoplay: {
		delay: 4500,
		disableOnInteraction: false,
	},

	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});
// ===== end home slider - swiper ===== //

// ===== FITUR ===== //
let fiturSwiper = new Swiper(".fitur__slides", {
	loop: 'true',
	spaceBetween: 24,

	autoplay: {
		delay: 4500,
		disableOnInteraction: false,
	},
	
	breakpoints: {
		420: {
			slidesPerView: 2,
		},

		676: {
			slidesPerView: 3,
		},
	},

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});
// ===== end fitur ===== //

// ===== PAKET ===== //
const paketSwiper = new Swiper('.paket__cards', {
	spaceBetween: 16,
	loop: true,
	grabCursor: true,

	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	breakpoints: {
		640: {
			slidesPerView: 1,
		},
		1024: {
			slidesPerView: 2,
		},
	}
})
// ===== end paket ===== //

// ===== MIXITUP FILTER KATALOG ===== //
const mixer = mixitup(".katalog__container", {
	selectors: {
		target: '.katalog__content'
	},
	animation: {
		duration: 400
	}
});

/* Link active portfolio */ 
const linkKatalog = document.querySelectorAll('.katalog__item');

function activeKatalog(){
	if(linkKatalog){
		linkKatalog.forEach(l=> l.classList.remove('active-katalog'))
		this.classList.add('active-katalog')
	}
}
linkKatalog.forEach(l=> l.addEventListener('click', activeKatalog));
// ===== end mixitup filter katalog ===== //

// ===== TESTIMONIAL ===== //
let testimonialSwiper = new Swiper(".testimonial-swiper", {
	spaceBetween: 30,
	loop: 'true',

	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});
// ===== end testimonial ===== //

// ===== QUESTIONS ACCORDION ===== //
const accordionItems = document.querySelectorAll('.questions__item');

accordionItems.forEach((item) =>{
	const accordionHeader = item.querySelector('.questions__header');

	accordionHeader.addEventListener('click', () =>{
		const openItem = document.querySelector('.accordion-open');

		toggleItem(item)

		if(openItem && openItem !== item){
			toggleItem(openItem)
		}
	})
})

const toggleItem = (item) =>{
	const accordionContent = item.querySelector('.questions__content')

	if(item.classList.contains('accordion-open')){
		accordionContent.removeAttribute('style')
		item.classList.remove('accordion-open')
	}else{
		accordionContent.style.height = accordionContent.scrollHeight + 'px'
		item.classList.add('accordion-open')
	}
}
// ===== end questions accordion ===== //

// ===== POPUP ===== //
// const closePopup = document.getElementById('popup-close');
// const popup = document.getElementById('popup');

// closePopup.addEventListener('click', ()=>{
// 	popup.style.display = 'none';
// });
// ===== end popup ===== //

// ===== SCROLL UP ===== //
function scrollUp(){
	const scrollUp = document.getElementById('scroll-up');

	// When the scroll is higher than 400 viewport height, add the show-scroll class to the a tag with the scroll-top class
	if(this.scrollY >= 400) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);
// ===== end scroll up ===== //

// ===== AOS ANIMATE ===== //
// 1. home -> .home__content

// 2. about -> .about__img, .about__data

// 3. section title -> .section-title
const sectionTitle = document.querySelectorAll('.section-title');
sectionTitle.forEach((n, i) => {
	n.dataset.aos = 'fade-down';
});

// 4. section line -> .section-line
const sectionLine = document.querySelectorAll('.section-line');
sectionLine.forEach((n, i) => {
	n.dataset.aos = 'fade-down';
	n.dataset.aosDelay = i * 50;
});

// 5. fitur -> .fitur__container

// 6. paket -> .paket__container

// 7. katalog -> .katalog__content // .katalog__container
// const katalogContent = document.querySelectorAll('.katalog__content');
// katalogContent.forEach((n, i) => {
// 	n.dataset.aos = 'zoom-in-down';
// 	n.dataset.aosDelay = i * 100;
// });

// 8. testimonial -> .testimonial-swiper, .testimonial__images

// 9. faqs -> .questions__item
const questionsItem = document.querySelectorAll('.questions__item');
questionsItem.forEach((n, i) => {
	n.dataset.aos = 'fade-down';
	n.dataset.aosDelay = i * 100;
});

// 10. order -> .order__images, .order__data

// 11. banner -> .banner__container

// 12. footer -> .footer__container, .footer__copy

AOS.init({
	duration: 1500,
	once: true,  
});
// ===== end aos animate ===== //


