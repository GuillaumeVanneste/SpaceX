const $nextButton = document.querySelector('.next-button')
const $previousButton = document.querySelector('.previous-button')
const $content = document.querySelector('.content')
let changeSlide = 0

let animationIsActive = false

const $page = document.querySelector('.page')
const $text1 = document.querySelector('.text1')
const $text2 = document.querySelector('.text2')
const $text3 = document.querySelector('.text3')
const $text4 = document.querySelector('.text4')
const $text5 = document.querySelector('.text5')

$nextButton.addEventListener('mousedown', () =>
{
    changeSlide += $content.offsetWidth
    scroll(changeSlide, 0)

    if(changeSlide > $content.offsetWidth * 4)
    {
        changeSlide = $content.offsetWidth * 4
    }
})

$previousButton.addEventListener('mousedown', () =>
{
    changeSlide -= $content.offsetWidth
    scroll(changeSlide, 0)

    if(changeSlide < 0)
    {
        changeSlide = 0
    }
})



document.addEventListener('mousewheel', (event) =>
{
    event.preventDefault()

    if(!animationIsActive)
    {
        animationIsActive = true

        //TRANSITIONS
        $page.classList.toggle('transition')

        // changing slides
        if(changeSlide == $content.offsetWidth * 4 && event.deltaY > 0)
        {        }
        else
        {
            $page.classList.toggle('transition')
            if(event.deltaY > 0)
            {
                changeSlide += $content.offsetWidth
                scroll(changeSlide, 0)
                if(changeSlide > $content.offsetWidth * 4)
                {
                    changeSlide = $content.offsetWidth * 4
                }
            }
        }
        if(changeSlide == 0 && event.deltaY < 0)
        {        }
        else
        {
            $page.classList.toggle('transition')
            if(event.deltaY < 0)
            {
                changeSlide -= $content.offsetWidth
                scroll(changeSlide, 0)
                if(changeSlide < 0)
                {
                    changeSlide = 0
                }
            }
        }

        //Change text
        if(changeSlide == 0)
        {
            $text1.classList.remove('not-active')
            $text2.classList.add('not-active')
            $text3.classList.add('not-active')
            $text4.classList.add('not-active')
            $text5.classList.add('not-active')
        }
        else if(changeSlide == $content.offsetWidth)
        {
            $text1.classList.add('not-active')
            $text2.classList.remove('not-active')
            $text3.classList.add('not-active')
            $text4.classList.add('not-active')
            $text5.classList.add('not-active')
        }
        else if(changeSlide == $content.offsetWidth * 2)
        {
            $text1.classList.add('not-active')
            $text2.classList.add('not-active')
            $text3.classList.remove('not-active')
            $text4.classList.add('not-active')
            $text5.classList.add('not-active')
        }
        else if(changeSlide == $content.offsetWidth * 3)
        {
            $text1.classList.add('not-active')
            $text2.classList.add('not-active')
            $text3.classList.add('not-active')
            $text4.classList.remove('not-active')
            $text5.classList.add('not-active')
        }
        else if(changeSlide == $content.offsetWidth * 4)
        {
            $text1.classList.add('not-active')
            $text2.classList.add('not-active')
            $text3.classList.add('not-active')
            $text4.classList.add('not-active')
            $text5.classList.remove('not-active')
        }

        //Delay for scrolling
        setTimeout(() =>
        {
            animationIsActive = false
        },
        1000)
    }
})



// $page.addEventListener('mousedown', () =>
// {
//     // $page.classList.toggle('transition')
//     // $text1.classList.toggle('not-active')
//     // $text2.classList.toggle('not-active')
//     // $text3.classList.toggle('not-active')
//     // $text4.classList.toggle('not-active')
//     // $text5.classList.toggle('not-active')

//     if(changeSlide == 0)
//     {
//         $text1.classList.remove('not-active')
//         $text2.classList.add('not-active')
//         $text3.classList.add('not-active')
//         $text4.classList.add('not-active')
//         $text5.classList.add('not-active')
//     }
//     else if(changeSlide == $content.offsetWidth)
//     {
//         $text1.classList.add('not-active')
//         $text2.classList.remove('not-active')
//         $text3.classList.add('not-active')
//         $text4.classList.add('not-active')
//         $text5.classList.add('not-active')
//     }
//     else if(changeSlide == $content.offsetWidth * 2)
//     {
//         $text1.classList.add('not-active')
//         $text2.classList.add('not-active')
//         $text3.classList.remove('not-active')
//         $text4.classList.add('not-active')
//         $text5.classList.add('not-active')
//     }
//     else if(changeSlide == $content.offsetWidth * 3)
//     {
//         $text1.classList.add('not-active')
//         $text2.classList.add('not-active')
//         $text3.classList.add('not-active')
//         $text4.classList.remove('not-active')
//         $text5.classList.add('not-active')
//     }
//     else if(changeSlide == $content.offsetWidth * 4)
//     {
//         $text1.classList.add('not-active')
//         $text2.classList.add('not-active')
//         $text3.classList.add('not-active')
//         $text4.classList.add('not-active')
//         $text5.classList.remove('not-active')
//     }
// })