const $content = document.querySelector('.content')
let changeSlide = 0

let animationIsActive = false

const $page = document.querySelector('.page')
const $text1 = document.querySelector('.text1')
const $text2 = document.querySelector('.text2')
const $text3 = document.querySelector('.text3')
const $text4 = document.querySelector('.text4')
const $text5 = document.querySelector('.text5')

document.addEventListener('mousewheel', (event) =>
{
    event.preventDefault()

    if(!animationIsActive)
    {
        animationIsActive = true

        //TRANSITIONS
        $page.classList.toggle('transition')

        // changing slides in function of the transition
        if(changeSlide == $content.offsetWidth * 4 && event.deltaY > 0)
        {        }
        else
        {
            $page.classList.toggle('transition')
            if(event.deltaY > 0)
            {
                changeSlide += $content.offsetWidth
                setTimeout(() =>
                {
                    scroll(changeSlide, 0)
                }, 500)

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
                setTimeout(() =>
                {
                    scroll(changeSlide, 0)
                }, 500)

                if(changeSlide < 0)
                {
                    changeSlide = 0
                }
            }
        }

        //Change text in function of the transition
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

        //Delay for next scroll
        setTimeout(() =>
        {
            animationIsActive = false
        },
        1000)
    }
})


/* Script for Earth */

const $canvas = document.querySelector('canvas')
const context = $canvas.getContext('2d')

const stars = []

const createStars = () => {
    stars.splice(0, 100)
    for (let i = 0; i < 100; i++) {
        const star = {}
        star.x = Math.random() * $canvas.width
        star.y = Math.random() * $canvas.height
        star.radius = Math.random() * 1.2
        star.color = `rgba(255, 255, 255, ${Math.random()}`

        stars.push(star)
    }
}

const resize = () => {
    $canvas.width = window.innerWidth
    $canvas.height = window.innerHeight
    createStars()
}

window.addEventListener('resize', resize)
resize()

const updateStars = () => {
    for (const star of stars) {
        star.x += 0.2
        if (star.x > $canvas.width) {
            star.x = 0
        }
    }
}

const drawStars = () => {
    for (const star of stars) {
        context.beginPath()
        context.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        context.fillStyle = star.color
        context.fill()
    }
}

const clear = () => {
    context.clearRect(0, 0, $canvas.width, $canvas.height)
}

const loop = () => {
    requestAnimationFrame(loop)

    updateStars()
    clear()
    drawStars()
}

loop()
createStars()

/* End script JS */