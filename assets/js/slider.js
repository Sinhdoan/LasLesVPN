    var listSlider = document.querySelectorAll('.slider-item')
    var numberBtn = document.querySelectorAll('.slier-control-btn')
    const btnPrev = document.querySelector('.slide-control__prev')
    const btnNext = document.querySelector('.slider-control__next')


    function runSlider(){
           
            Array.from(numberBtn).forEach((btn, index)=>{
                btn.onclick =()=>{
                    document.querySelector('.slier-control-btn.checked-slider').classList.remove('checked-slider')
                   btn.classList.add('checked-slider')
                    if(listSlider[index]){
                        document.querySelector('.slider-item.checked').classList.remove('checked')
                        listSlider[index].classList.add('checked')
                        for(var i =0; i < index ;i++){
                     
                            listSlider[i].style.display = 'none'
                                             
                        }
                        for(var i = index; i <= listSlider.length ;i++){

                         listSlider[i].style.display = 'block'
                      
                        }
                    
                    }
                   
                }
            })

           

        
    }

    runSlider()