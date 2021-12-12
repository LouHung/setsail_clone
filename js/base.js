const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const navBtn = $('.header-nav-lookup_btn-nav')
const searchBtn = $('.header-nav-lookup_btn-lookup')
const searchInput = $('.header-nav__search-input')
const closeNavBtn = $('.header-nav-aside_closeBtn')
const btnMoveTop = $('.btn-movetop')
const blackSlide = $('.header-nav-aside__black-slide')

searchBtn.onclick = function(){
    searchInput.classList.toggle('active')
}
navBtn.onclick = function(){
  openNavAside()
}
closeNavBtn.onclick = function(){
  closeNavAside()
}
blackSlide.onclick = function(){
  closeNavAside()
}

function openNavAside(){
  $('.header-nav-aside_container').classList.add('active')
  blackSlide.classList.add('active')
}
function closeNavAside(){
  $('.header-nav-aside_container').classList.remove('active')
  blackSlide.classList.remove('active')
}
// navbar
function changeUnderlineNav(){
  let currPage = $('.app').id;
  let listNavItem = Array.from($$('.header-nav-list__item > a'))
  let listNavItemAside = Array.from($$('.header-nav-aside_item > a'))
   listNavItem.forEach((a)=>{
    if(a.innerHTML == currPage){
      a.parentElement.classList.add('active')
    }
  })

  listNavItemAside.forEach((a)=>{
    if(a.innerHTML.toUpperCase() == currPage){
      a.parentElement.classList.add('active')
    }
  })
}
changeUnderlineNav()



// nav move
function runNavbar() {
  if ( document.documentElement.scrollTop > 30) {
    $('.header-nav-container').classList.add('active');
    $('.header-nav-wrap').style.padding = '25px'
  }else{
    $('.header-nav-container').classList.remove('active');
    $('.header-nav-wrap').style.padding = '25px 25px 40px 25px'
  }
  
}
if( window.matchMedia("(max-width: 478px)").matches){
    $('.header-nav-wrap').style.padding = '5px 25px'

  }else{
    $('.header-nav-wrap').style.padding = '25px 25px 40px 25px'

    window.onscroll = function() {
      runNavbar()
  hideBtnScrollTop();
    
    };

  }

window.addEventListener('resize', function(){
    let width = document.body.clientWidth
    if(width > 478){
    $('.header-nav-wrap').style.padding = '25px 25px 40px 25px'

        window.onscroll = function() {
          runNavbar()
          hideBtnScrollTop();
        }
    }else{
        $('.header-nav-wrap').style.padding = '5px 25px'

        window.onscroll = function() {
            $('.header-nav-wrap').style.padding = '5px 25px'
            hideBtnScrollTop()
        };
    }
})


function hideBtnScrollTop() {
  if ( document.documentElement.scrollTop > 30) {
  
    btnMoveTop.style.display='flex'
  }else{
    btnMoveTop.style.display='none'

  }
}

function scrollTop(){
    window.scrollTo({top: 0, behavior: 'smooth'});
}
btnMoveTop.onclick =function(){
    scrollTop()
}