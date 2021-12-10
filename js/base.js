const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const navBtn = $('.header-nav-lookup_btn-nav')
const searchBtn = $('.header-nav-lookup_btn-lookup')
const searchInput = $('.header-nav__search-input')
const closeNavBtn = $('.header-nav-aside_closeBtn')
const btnMoveTop = $('.btn-movetop')


searchBtn.onclick = function(){
    searchInput.classList.toggle('active')
}
navBtn.onclick = function(){
    $('.header-nav-aside_container').classList.add('active')
    $('.header-nav-aside__black-slide').classList.add('active')
}
closeNavBtn.onclick = function(){
    $('.header-nav-aside_container').classList.remove('active')
    $('.header-nav-aside__black-slide').classList.remove('active')

}


// nav move
function runNavbar() {
  if ( document.documentElement.scrollTop > 30) {
    console.log("Scroll")
    $('.header-nav-container').classList.add('active');
    $('.header-nav-wrap').style.padding = '25px'
    btnMoveTop.style.display='flex'
  }else{
    $('.header-nav-container').classList.remove('active');
    $('.header-nav-wrap').style.padding = '25px 25px 40px 25px'
    btnMoveTop.style.display='none'

  }
  
}
if( window.matchMedia("(max-width: 478px)").matches){
    $('.header-nav-wrap').style.padding = '5px 25px'

  }else{
    $('.header-nav-wrap').style.padding = '25px 25px 40px 25px'

    window.onscroll = function() {runNavbar()};

  }

window.addEventListener('resize', function(){
    let width = document.body.clientWidth
    if(width > 478){
    $('.header-nav-wrap').style.padding = '25px 25px 40px 25px'

        window.onscroll = function() {runNavbar()};

    }else{
        $('.header-nav-wrap').style.padding = '5px 25px'

        window.onscroll = function() {
            $('.header-nav-wrap').style.padding = '5px 25px'
        };
    }
})

// btn move top

function scrollTop(){
    window.scrollTo({top: 0, behavior: 'smooth'});
}
btnMoveTop.onclick =function(){
    scrollTop()
}