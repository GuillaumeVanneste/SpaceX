const $content = document.querySelector('.content')
let changeSlide = 0

let animationIsActive = false

const $page = document.querySelector('.page')
const $text1 = document.querySelector('.text1')
const $text2 = document.querySelector('.text2')
const $text3 = document.querySelector('.text3')
const $text4 = document.querySelector('.text4')
const $text5 = document.querySelector('.text5')
const $main = document.querySelector('.main')
const $slide1 = document.querySelector('.first')
const $slide2 = document.querySelector('.second')
const $slide3 = document.querySelector('.third')
const $slide4 = document.querySelector('.fourth')
const $slide5 = document.querySelector('.fifth')


const $rocketReactor = document.querySelector('.rocket-reac-sup')

document.addEventListener('mousewheel', (event) =>
{
    event.preventDefault()

    if(!animationIsActive)
    {
        animationIsActive = true

        //TRANSITIONS
        if(!(event.deltaX > 0 || event.deltaX < 0))
        {
            if(changeSlide == 1 && event.deltaY < 0)
            {
                $page.classList.remove('transition')
            } else if(changeSlide >= 1 )
            {
                $page.classList.toggle('transition')
            }
    
            // changing slides in function of the transition
            if(changeSlide != 5 || event.deltaY <= 0)
            {
                if(changeSlide > 0)
                {
                    $page.classList.toggle('transition')
                }
                
                if(event.deltaY > 0)
                {
                    changeSlide++
                    setTimeout(() =>
                    {
                        if(changeSlide == 0)
                        {
                            $main.classList.remove('not-shown')
                            $slide1.classList.add('not-shown')
                            $slide2.classList.add('not-shown')
                            $slide3.classList.add('not-shown')
                            $slide4.classList.add('not-shown')
                            $slide5.classList.add('not-shown')
                            $page.classList.add('not-shown')
                        } else if(changeSlide == 1)
                        {
                            $main.classList.add('not-shown')
                            $slide1.classList.remove('not-shown')
                            $slide2.classList.add('not-shown')
                            $slide3.classList.add('not-shown')
                            $slide4.classList.add('not-shown')
                            $slide5.classList.add('not-shown')
                            $page.classList.remove('not-shown')
                            
                        } else if(changeSlide == 2)
                        {
                            $main.classList.add('not-shown')                        
                            $slide1.classList.add('not-shown')
                            $slide2.classList.remove('not-shown')
                            $slide3.classList.add('not-shown')
                            $slide4.classList.add('not-shown')
                            $slide5.classList.add('not-shown')
                            $page.classList.remove('not-shown')
                            
                        } else if(changeSlide == 3)
                        {
                            $main.classList.add('not-shown')                        
                            $slide1.classList.add('not-shown')
                            $slide2.classList.add('not-shown')
                            $slide3.classList.remove('not-shown')
                            $slide4.classList.add('not-shown')
                            $slide5.classList.add('not-shown')
                            $page.classList.remove('not-shown')
                            
                        } else if(changeSlide == 4)
                        {
                            $main.classList.add('not-shown')
                            $slide1.classList.add('not-shown')
                            $slide2.classList.add('not-shown')
                            $slide3.classList.add('not-shown')
                            $slide4.classList.remove('not-shown')
                            $slide5.classList.add('not-shown')
                            $page.classList.remove('not-shown')
                            
                        } else if(changeSlide == 5)
                        {
                            $main.classList.add('not-shown')
                            $slide1.classList.add('not-shown')
                            $slide2.classList.add('not-shown')
                            $slide3.classList.add('not-shown')
                            $slide4.classList.add('not-shown')
                            $slide5.classList.remove('not-shown')
                            $page.classList.remove('not-shown')
                            
                        }
                    }, 500)
    
                    if(changeSlide > 5)
                    {
                        changeSlide = 5
                    }
                }
            }
    
            if(changeSlide != 0 || event.deltaY >= 0)
            {
                $page.classList.toggle('transition')
                if(event.deltaY < 0)
                {
                    changeSlide--
    
                    setTimeout(() =>
                    {
                        if(changeSlide == 0)
                        {
                            $main.classList.remove('not-shown')
                            $slide1.classList.add('not-shown')
                            $slide2.classList.add('not-shown')
                            $slide3.classList.add('not-shown')
                            $slide4.classList.add('not-shown')
                            $slide5.classList.add('not-shown')
                            $page.classList.add('not-shown')
                        } else if(changeSlide == 1)
                        {
                            $main.classList.add('not-shown')
                            $slide1.classList.remove('not-shown')
                            $slide2.classList.add('not-shown')
                            $slide3.classList.add('not-shown')
                            $slide4.classList.add('not-shown')
                            $slide5.classList.add('not-shown')
                            $page.classList.remove('not-shown')                        
                        } else if(changeSlide == 2)
                        {
                            $main.classList.add('not-shown')
                            $slide1.classList.add('not-shown')
                            $slide2.classList.remove('not-shown')
                            $slide3.classList.add('not-shown')
                            $slide4.classList.add('not-shown')
                            $slide5.classList.add('not-shown')
                            $page.classList.remove('not-shown')
                        } else if(changeSlide == 3)
                        {
                            $main.classList.add('not-shown')
                            $slide1.classList.add('not-shown')
                            $slide2.classList.add('not-shown')
                            $slide3.classList.remove('not-shown')
                            $slide4.classList.add('not-shown')
                            $slide5.classList.add('not-shown')
                            $page.classList.remove('not-shown')
                        } else if(changeSlide == 4)
                        {
                            $main.classList.add('not-shown')
                            $slide1.classList.add('not-shown')
                            $slide2.classList.add('not-shown')
                            $slide3.classList.add('not-shown')
                            $slide4.classList.remove('not-shown')
                            $slide5.classList.add('not-shown')
                            $page.classList.remove('not-shown')
                        } else if(changeSlide == 5)
                        {
                            $main.classList.add('not-shown')
                            $slide1.classList.add('not-shown')
                            $slide2.classList.add('not-shown')
                            $slide3.classList.add('not-shown')
                            $slide4.classList.add('not-shown')
                            $slide5.classList.remove('not-shown')
                            $page.classList.remove('not-shown')
                        }
                    }, 500)
    
                    if(changeSlide < 0)
                    {
                        changeSlide = 0
                    }
                }
            }
        }

        //Change text in function of the transition
        if(changeSlide == 0)
        {
            $text1.classList.add('not-active')
            $text2.classList.add('not-active')
            $text3.classList.add('not-active')
            $text4.classList.add('not-active')
            $text5.classList.add('not-active')
        } else if(changeSlide == 1)
        {
            $text1.classList.remove('not-active')
            $text2.classList.add('not-active')
            $text3.classList.add('not-active')
            $text4.classList.add('not-active')
            $text5.classList.add('not-active')
        } else if(changeSlide == 2)
        {
            $text1.classList.add('not-active')
            $text2.classList.remove('not-active')
            $text3.classList.add('not-active')
            $text4.classList.add('not-active')
            $text5.classList.add('not-active')
        } else if(changeSlide == 3)
        {
            $text1.classList.add('not-active')
            $text2.classList.add('not-active')
            $text3.classList.remove('not-active')
            $text4.classList.add('not-active')
            $text5.classList.add('not-active')
        } else if(changeSlide == 4)
        {
            $text1.classList.add('not-active')
            $text2.classList.add('not-active')
            $text3.classList.add('not-active')
            $text4.classList.remove('not-active')
            $text5.classList.add('not-active')
        } else if(changeSlide == 5)
        {
            $text1.classList.add('not-active')
            $text2.classList.add('not-active')
            $text3.classList.add('not-active')
            $text4.classList.add('not-active')
            $text5.classList.remove('not-active')
        }

        //Delay for next scroll
        setTimeout(() =>
        {
            animationIsActive = false
        },
        1000)
    }
})