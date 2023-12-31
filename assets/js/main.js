/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SWIPER POPULAR ===============*/
var swiperPopular = new Swiper('.popular__container', {
    spaceBetween:32,
    grabCursor:true,
    centeredSlides:true,
    slidesPerView:'auto',
    loop:true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

/*=============== value ACCORDION ===============*/
const accordianItems = document.querySelectorAll('.value__accordian-item')

accordianItems.forEach(item=>{
    const accordianHeader = item.querySelector('.value__accordian-header')

    accordianHeader.addEventListener('click',()=>{
        const openItem = document.querySelector('.accordian-open')

        toggleitem(item)

        if(openItem && openItem!== item){
            toggleitem(openItem)
        }
    })
})

const toggleitem = (item) =>{
    const accordianContent = item.querySelector('.value__accordian-content')
    if(item.classList.contains('accordian-open')){
        accordianContent.removeAttribute('style')
        item.classList.remove('accordian-open')
    }
    else{
        accordianContent.style.height = accordianContent.scrollHeight  + 'px'
        item.classList.add('accordian-open')
    }
}
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
