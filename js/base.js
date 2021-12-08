const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const navBtn = $('.header-nav-lookup_btn-nav')
const searchBtn = $('.header-nav-lookup_btn-lookup')
const searchInput = $('.header-nav__search-input')
const closeNavBtn = $('.header-nav-aside_closeBtn')


searchBtn.onclick = function(){
    console.log('aa')
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