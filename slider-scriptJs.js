
    let position = 0
    let slideToShow = 2
    let slideToScroll = 2
    const container = document.querySelector('.slider-container')                
    const track = document.querySelector('.slider-track')                
    const items = document.querySelectorAll('.slider-item')
    const btnPrev =  document.querySelector('.btn-prev')  
    const btnNext =  document.querySelector('.btn-next')    
    const itemsCount = document.querySelectoraAll('.slider-item').length
    const itemWidth = container.widthClient / slideToShow
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








