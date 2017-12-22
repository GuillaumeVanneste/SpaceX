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

// Variables
const $progressBar = document.querySelector('.progressBar')
const $checkpoint1 = $progressBar.querySelector('.checkpoint-1')
const $checkpoint2 = $progressBar.querySelector('.checkpoint-2')
const $checkpoint3 = $progressBar.querySelector('.checkpoint-3')
const $checkpoint4 = $progressBar.querySelector('.checkpoint-4')
const $checkpoint5 = $progressBar.querySelector('.checkpoint-5')

// Listen to mouse down on the frist checkpoint on the progress bar
$checkpoint1.addEventListener('mousedown', () =>
{
    changeSlide = 1
    $page.classList.add('transition')

    // Check the checkpoint cliced and all checkpoint before
    $checkpoint1.classList.add('isActive')
    $checkpoint2.classList.remove('isActive')
    $checkpoint3.classList.remove('isActive')
    $checkpoint4.classList.remove('isActive')
    $checkpoint5.classList.remove('isActive')

    $main.classList.add('not-shown')
    $slide1.classList.remove('not-shown')
    $slide2.classList.add('not-shown')
    $slide3.classList.add('not-shown')
    $slide4.classList.add('not-shown')
    $slide5.classList.add('not-shown')
    $page.classList.remove('not-shown')

    $text1.classList.remove('not-active')
    $text2.classList.add('not-active')
    $text3.classList.add('not-active')
    $text4.classList.add('not-active')
    $text5.classList.add('not-active')
})

// Listen to mouse down on the second checkpoint on the progress bar
$checkpoint2.addEventListener('mousedown', () =>
{
    changeSlide = 2
    $page.classList.remove('transition')

    // Check the checkpoint cliced and all checkpoint before
    $checkpoint1.classList.add('isActive')
    $checkpoint2.classList.add('isActive')
    $checkpoint3.classList.remove('isActive')
    $checkpoint4.classList.remove('isActive')
    $checkpoint5.classList.remove('isActive')

    $main.classList.add('not-shown')
    $slide1.classList.add('not-shown')
    $slide2.classList.remove('not-shown')
    $slide3.classList.add('not-shown')
    $slide4.classList.add('not-shown')
    $slide5.classList.add('not-shown')
    $page.classList.remove('not-shown')

    $text1.classList.add('not-active')
    $text2.classList.remove('not-active')
    $text3.classList.add('not-active')
    $text4.classList.add('not-active')
    $text5.classList.add('not-active')
})

// Listen to mouse down on the third checkpoint on the progress bar
$checkpoint3.addEventListener('mousedown', () =>
{
    changeSlide = 3
    $page.classList.add('transition')

    // Check the checkpoint cliced and all checkpoint before
    $checkpoint1.classList.add('isActive')
    $checkpoint2.classList.add('isActive')
    $checkpoint3.classList.add('isActive')
    $checkpoint4.classList.remove('isActive')
    $checkpoint5.classList.remove('isActive')

    $main.classList.add('not-shown')
    $slide1.classList.add('not-shown')
    $slide2.classList.add('not-shown')
    $slide3.classList.remove('not-shown')
    $slide4.classList.add('not-shown')
    $slide5.classList.add('not-shown')
    $page.classList.remove('not-shown')

    $text1.classList.add('not-active')
    $text2.classList.add('not-active')
    $text3.classList.remove('not-active')
    $text4.classList.add('not-active')
    $text5.classList.add('not-active')
})

// Listen to mouse down on the fourth checkpoint on the progress bar
$checkpoint4.addEventListener('mousedown', () =>
{
    changeSlide = 4
    $page.classList.remove('transition')

    // Check the checkpoint cliced and all checkpoint before
    $checkpoint1.classList.add('isActive')
    $checkpoint2.classList.add('isActive')
    $checkpoint3.classList.add('isActive')
    $checkpoint4.classList.add('isActive')
    $checkpoint5.classList.remove('isActive')

    $main.classList.add('not-shown')
    $slide1.classList.add('not-shown')
    $slide2.classList.add('not-shown')
    $slide3.classList.add('not-shown')
    $slide4.classList.remove('not-shown')
    $slide5.classList.add('not-shown')
    $page.classList.remove('not-shown')

    $text1.classList.add('not-active')
    $text2.classList.add('not-active')
    $text3.classList.add('not-active')
    $text4.classList.remove('not-active')
    $text5.classList.add('not-active')
})

// Listen to mouse down on the fifth checkpoint on the progress bar
$checkpoint5.addEventListener('mousedown', () =>
{
    changeSlide = 5
    $page.classList.add('transition')

    // Check the checkpoint cliced and all checkpoint before
    $checkpoint1.classList.add('isActive')
    $checkpoint2.classList.add('isActive')
    $checkpoint3.classList.add('isActive')
    $checkpoint4.classList.add('isActive')
    $checkpoint5.classList.add('isActive')

    $main.classList.add('not-shown')
    $slide1.classList.add('not-shown')
    $slide2.classList.add('not-shown')
    $slide3.classList.add('not-shown')
    $slide4.classList.add('not-shown')
    $slide5.classList.remove('not-shown')
    $page.classList.remove('not-shown')

    $text1.classList.add('not-active')
    $text2.classList.add('not-active')
    $text3.classList.add('not-active')
    $text4.classList.add('not-active')
    $text5.classList.remove('not-active')
})
