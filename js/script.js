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
        if(changeSlide != $content.offsetWidth * 4 || event.deltaY <= 0)
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

        if(changeSlide != 0 || event.deltaY >= 0)
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


/* Script for Stars */

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

const clearStars = () => {
    context.clearRect(0, 0, $canvas.width, $canvas.height)
}

const loopStars = () => {
    requestAnimationFrame(loopStars)

    updateStars()
    clearStars()
    drawStars()
}

loopStars()
createStars()

/* End script Earth */

/* start timeline */
const $tlTimeline = document.querySelector('.tl-timeline')
const $tlRocket = document.querySelector('.tl-rocket')
const timelineWidth = $tlTimeline.offsetWidth

document.addEventListener('mousewheel', () => 
{
    if(changeSlide == 0)
    {
        $tlRocket.style.transform = `translate(20px, -33px)`
    }
    else if(changeSlide == $content.offsetWidth)
    {
        $tlRocket.style.transform = `translate(${timelineWidth * 0.25 - 20}px, -33px)`
    }
    else if(changeSlide == $content.offsetWidth * 2)
    {
        $tlRocket.style.transform = `translate(${timelineWidth * 0.5 - 20}px, -33px)`
    }
    else if(changeSlide == $content.offsetWidth * 3)
    {
        $tlRocket.style.transform = `translate(${timelineWidth * 0.75 - 20}px, -33px)`
    }
    else
    {
        $tlRocket.style.transform = `translate(${timelineWidth - 20}px, -33px)`
    }

})
/* end timeline */

/* Start rocket's JS */ 

// Draw flames

const $canvasRocket = document.querySelector('.canvas-rocket')
const contextRocket = $canvasRocket.getContext('2d')

// const resize = () => {
//     $canvasRocket.style.width = `80%`
//     $canvasRocket.style.height = `30%`
// }

// window.addEventListener('resize', resize)
// resize()

const flames = []

const createFlames = () => {
    const flame = {}
    flame.x = $canvasRocket.width / 2
    flame.y = $canvasRocket.height

    flame.angle = Math.random()*0.2 + 9.3

    flame.color = `rgba(255,170,64,0.8)`

    flame.radius = Math.random() * 10

    flame.speed = 1
    flame.life = 1
    flame.lifeDelta = 0.005 + 0.005 * Math.random()

    flames.push(flame)
}

const updateFlames = () => {
    let i = 0
    for(const flame of flames){
        flame.x += Math.sin(flame.angle) * flame.speed
        flame.y += Math.cos(flame.angle) * flame.speed

        flame.life -= flame.lifeDelta

        const flameOpacity = flame.life
        flame.color = `rgba(255, 170, 64, ${flameOpacity})`

        if(flame.y < 0 || flame.y > $canvasRocket.height || flame.life <= 0){
            flames.splice(i, 1)
        }
        i++
    }
}

const clearRocket = () => {
    contextRocket.clearRect(0, 0, $canvasRocket.width, $canvasRocket.height)
}

const drawFlames = () => {
    
        contextRocket.globalCompositeOperation = 'lighter'
    
        // on parcoure le tableau particles et a chaque passage on crée une particule
        for(const flame of flames){
            contextRocket.beginPath()
            contextRocket.arc(flame.x, flame.y, flame.radius * flame.life, Math.PI*2, 0)
            contextRocket.fillStyle = flame.color
            contextRocket.fill()
        }
    }

    let rocketAnimation = false
    // document.addEventListener('mousewheel', () =>
    // {
    //     if(changeSlide != $content.offsetWidth * 2)
    //     {
    //         rocketAnimation = false
    //     }
    //     else 
    //     {
    //         rocketAnimation = true
    //     }

    //     if(rocketAnimation)
    //     {
    //         loopRocket()
    //     }
    // })

    const loopRocket = () => {
        window.requestAnimationFrame(loopRocket)
    
        // pour créer 2 particules à chaque frame
        if(changeSlide == $content.offsetWidth * 2)
        {
            rocketAnimation = true
        }
        else 
        {
            rocketAnimation = false
        }

        if(rocketAnimation)
        {
            for(let i = 0; i < 2; i++){
                createFlames()
            }
        }

        updateFlames()
        clearRocket()
        drawFlames()
        // console.log(flames)
    }

    loopRocket()
    

    

    /* End rocket's JS */