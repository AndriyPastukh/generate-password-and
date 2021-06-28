$(document).ready(function(){

    let position = 0
    let slideToShow = 1
    let slideToScroll = 1
    const container = $('.slider-container')                
    const track = $('.slider-track')                
    const item = $('.slider-item ')
    const btnPrev =  $('.btn-prev')  
    const btnNext =  $('.btn-next')    
    const itemsCount =  item.length  
    const itemWidth = container.width() / slideToShow
    const movePosition = slideToScroll * itemWidth
    item.each(function(index, item){
        $(item).css({
            minWidth: itemWidth,
        })
    })

    btnPrev.click(function(){
         const itemsLeft = Math.abs(position) / itemWidth
         position += itemsLeft > slideToScroll ? movePosition : itemsLeft * itemWidth
        setPosition();
        checkBtns()


    })
    btnNext.click(function(){
        const itemsLeft =  itemsCount - (Math.abs(position) + slideToShow * itemWidth) / itemWidth
        
        position -= itemsLeft > slideToScroll ? movePosition : itemsLeft * itemWidth

        setPosition();
        checkBtns()
    })

   


    const setPosition = () => {
        track.css({
        transform: `translateX(${position}px)`})
    }


    const checkBtns = () => {
        btnPrev.prop('disabled', position === 0);
        btnNext.prop('disabled',  position <= -(itemsCount - slideToShow) * itemWidth);
    }
    checkBtns();
})




    






