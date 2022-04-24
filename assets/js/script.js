// ===== SHOW MENU ===== //
const navMenu = document.getElementById('nav-menu'),
		toggleNav = document.getElementById('nav-toggle'),
		closeNav = document.getElementById('nav-close');

// Show Menu
toggleNav.addEventListener('click', ()=>{
	navMenu.classList.toggle('show-menu')
});

// Hide Menu
closeNav.addEventListener('click', ()=>{
	navMenu.classList.remove('show-menu')
});
// ===== end show menu ===== //

// ===== REMOVE MENU MOBILE ===== //
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
	navMenu.classList.remove('show-menu');
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
	const nav = document.getElementById('header');

	if (this.scrollY >= 200){
		nav.classList.add('scroll-header');
	}else{
		nav.classList.remove('scroll-header');
	}
}
window.addEventListener('scroll', scrollHeader);
// ===== end change background header ===== //

// ===== HOME ===== //
const homeSwiper = new Swiper(".home__slides", {
	spaceBetween: 30,
	effect: "fade",

	autoplay: {
		delay: 4500,
		disableOnInteraction: false,
	},
});
// ===== end home slider ===== //

// ===== FITUR ===== //
const fiturSwiper = new Swiper('.fitur__container', {
	spaceBetween: 25,
	loop: true,
	grabCursor: true,

	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	autoplay: {
		delay: 4500,
		disableOnInteraction: false,
	},

	breakpoints: {
		340: {
			slidesPerView: 1,
		},
		440: {
			slidesPerView: 2,
		},
		640: {
			slidesPerView: 3,
		},
		1024: {
			slidesPerView: 3,
		},
	}
});
// ===== end fitur ===== //

// ===== PAKET ===== //
const paketSwiper = new Swiper('.paket__cards', {
	spaceBetween: 16,
	loop: true,
	grabCursor: true,

	// autoplay: {
	// 	delay: 5000,
	// 	disableOnInteraction: false,
	// },

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
const testimonialSwiper = new Swiper(".testimonial__swiper", {
	spaceBetween: 30,

	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});
// ===== end testimonial ===== //

// ===== FAQ ACCORDION ===== //
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
// ===== end faq accordion ===== //

// ===== SCROLL UP ===== //
function scrollUp(){
	const scrollUp = document.getElementById('scroll-up');

	if(this.scrollY >= 400) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp);
// ===== end scroll up ===== //