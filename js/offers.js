// const filterBtn= $('.body-filter__service-item')

// if(filterBtn.classList.contains('active')){
//     $('.body-filter__service-item--text').style.color='white'
// }
const listCards = Array.from($$('.body-filter__service-item')) 
console.log(listCards)

listCards.forEach(card => {
   
    card.onclick= function(){
        listCards.forEach((card2)=>{
            if(card2.classList.contains('active')){
                card2.classList.remove('active')
        }
        })

        card.classList.add('active')
    }
})