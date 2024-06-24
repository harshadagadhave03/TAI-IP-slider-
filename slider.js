document.addEventListener('DOMContentLoaded',function(){
    let nextBtn = document.querySelector('.next')
    let prevBtn = document.querySelector('.prev')
    let slider = document.querySelector('.slider')
    let sliderList = slider.querySelector('.list')
    let thumbnail = slider.querySelector('.thumbnail')
    let thumbnailItems = thumbnail.querySelector('.item')

    nextBtn.addEventListener('click',function(){
        moveSlider('next');
    });
    prevBtn.addEventListener('click',function(){
        moveSlider('prev');
    });
    function moveSlider(direction){
        let sliderItems = slider.querySelectorAll('.list .item')
        let firstItem = sliderItems[0];
        let lastItem = sliderItems[sliderItems.length - 1];

        if (direction === 'next') {
            sliderList.appendChild(firstItem);
            slider.classList.add('next');
            slider.classList.remove('prev');
        } else if (direction === 'prev') {
            sliderList.insertBefore(lastItem, firstItem);
            slider.classList.add('prev');
            slider.classList.remove('next');
        }
        slider.addEventListener('animationend',function(){
            slider.classList.remove('next');
            slider.classList.remove('prev');
        },{once: true});

    }
    

});