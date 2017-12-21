const $content = document.querySelector('.content')
let changeSlide = 0

let animationIsActive = false

const $page = document.querySelector('.page')
const $text1 = document.querySelector('.text1')
const $text2 = document.querySelector('.text2')
const $text3 = document.querySelector('.text3')
const $text4 = document.querySelector('.text4')
const $text5 = document.querySelector('.text5')
const welcomePage = document.querySelector('.welcome-page')
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
        $page.classList.toggle('transition')

        // changing slides in function of the transition
        if(changeSlide != 4 || event.deltaY <= 0)
        {
            $page.classList.toggle('transition')
            if(event.deltaY > 0)
            {
                changeSlide++
                setTimeout(() =>
                {
                    if(changeSlide == 0)
                    {
                        $slide1.classList.remove('not-shown')
                        $slide2.classList.add('not-shown')
                        $slide3.classList.add('not-shown')
                        $slide4.classList.add('not-shown')
                        $slide5.classList.add('not-shown')
                    }
                    else if(changeSlide == 1)
                    {
                        $slide1.classList.add('not-shown')
                        $slide2.classList.remove('not-shown')
                        $slide3.classList.add('not-shown')
                        $slide4.classList.add('not-shown')
                        $slide5.classList.add('not-shown')
                    }
                    else if(changeSlide == 2)
                    {
                        $slide1.classList.add('not-shown')
                        $slide2.classList.add('not-shown')
                        $slide3.classList.remove('not-shown')
                        $slide4.classList.add('not-shown')
                        $slide5.classList.add('not-shown')
                    }
                    else if(changeSlide == 3)
                    {
                        $slide1.classList.add('not-shown')
                        $slide2.classList.add('not-shown')
                        $slide3.classList.add('not-shown')
                        $slide4.classList.remove('not-shown')
                        $slide5.classList.add('not-shown')
                    }
                    else if(changeSlide == 4)
                    {
                        $slide1.classList.add('not-shown')
                        $slide2.classList.add('not-shown')
                        $slide3.classList.add('not-shown')
                        $slide4.classList.add('not-shown')
                        $slide5.classList.remove('not-shown')
                    }
                }, 500)

                if(changeSlide > 4)
                {
                    changeSlide = 4
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
                        $slide1.classList.remove('not-shown')
                        $slide2.classList.add('not-shown')
                        $slide3.classList.add('not-shown')
                        $slide4.classList.add('not-shown')
                        $slide5.classList.add('not-shown')
                    }
                    else if(changeSlide == 1)
                    {
                        $slide1.classList.add('not-shown')
                        $slide2.classList.remove('not-shown')
                        $slide3.classList.add('not-shown')
                        $slide4.classList.add('not-shown')
                        $slide5.classList.add('not-shown')
                    }
                    else if(changeSlide == 2)
                    {
                        $slide1.classList.add('not-shown')
                        $slide2.classList.add('not-shown')
                        $slide3.classList.remove('not-shown')
                        $slide4.classList.add('not-shown')
                        $slide5.classList.add('not-shown')
                    }
                    else if(changeSlide == 3)
                    {
                        $slide1.classList.add('not-shown')
                        $slide2.classList.add('not-shown')
                        $slide3.classList.add('not-shown')
                        $slide4.classList.remove('not-shown')
                        $slide5.classList.add('not-shown')
                    }
                    else if(changeSlide == 4)
                    {
                        $slide1.classList.add('not-shown')
                        $slide2.classList.add('not-shown')
                        $slide3.classList.add('not-shown')
                        $slide4.classList.add('not-shown')
                        $slide5.classList.remove('not-shown')
                    }
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
        else if(changeSlide == 1)
        {
            $text1.classList.add('not-active')
            $text2.classList.remove('not-active')
            $text3.classList.add('not-active')
            $text4.classList.add('not-active')
            $text5.classList.add('not-active')
        }
        else if(changeSlide == 2)
        {
            $text1.classList.add('not-active')
            $text2.classList.add('not-active')
            $text3.classList.remove('not-active')
            $text4.classList.add('not-active')
            $text5.classList.add('not-active')
        }
        else if(changeSlide == 3)
        {
            $text1.classList.add('not-active')
            $text2.classList.add('not-active')
            $text3.classList.add('not-active')
            $text4.classList.remove('not-active')
            $text5.classList.add('not-active')
        }
        else if(changeSlide == 4)
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

    // Animation for 2nd slide
    if(changeSlide == 1)
    {
        setTimeout(() =>
        {
        $rocketReactor.classList.remove('start-rocket-reactor')
        $rocketReactor.classList.add('end-rocket-reactor')
        }, 1000)
    }
    else
    {
        $rocketReactor.classList.remove('end-rocket-reactor')
        $rocketReactor.classList.add('start-rocket-reactor')
    }
})

/* Start welcome page JS */
// const $progressBar = document.querySelector('.progressBar')
// const $checkpoint1 = $progressBar.querySelector('.checkpoint-1')
// const $checkpoint2 = $progressBar.querySelector('.checkpoint-2')
// const $checkpoint3 = $progressBar.querySelector('.checkpoint-3')
// const $checkpoint4 = $progressBar.querySelector('.checkpoint-4')
// const $checkpoint5 = $progressBar.querySelector('.checkpoint-5')

// const $equalizer = document.querySelector('.equalizer')
// const $music = document.querySelector('audio')

// let playingMusic = true

// $checkpoint1.addEventListener('mousedown', () =>
// {
//     $checkpoint1.classList.add('isActive')
//     $checkpoint2.classList.remove('isActive')
//     $checkpoint3.classList.remove('isActive')
//     $checkpoint4.classList.remove('isActive')
//     $checkpoint5.classList.remove('isActive')
// })

// $checkpoint2.addEventListener('mousedown', () =>
// {
//     $checkpoint1.classList.add('isActive')
//     $checkpoint2.classList.add('isActive')
//     $checkpoint3.classList.remove('isActive')
//     $checkpoint4.classList.remove('isActive')
//     $checkpoint5.classList.remove('isActive')
// })

// $checkpoint3.addEventListener('mousedown', () =>
// {
//     $checkpoint1.classList.add('isActive')
//     $checkpoint2.classList.add('isActive')
//     $checkpoint3.classList.add('isActive')
//     $checkpoint4.classList.remove('isActive')
//     $checkpoint5.classList.remove('isActive')
// })

// $checkpoint4.addEventListener('mousedown', () =>
// {
//     $checkpoint1.classList.add('isActive')
//     $checkpoint2.classList.add('isActive')
//     $checkpoint3.classList.add('isActive')
//     $checkpoint4.classList.add('isActive')
//     $checkpoint5.classList.remove('isActive')
// })

// $checkpoint5.addEventListener('mousedown', () =>
// {
//     $checkpoint1.classList.add('isActive')
//     $checkpoint2.classList.add('isActive')
//     $checkpoint3.classList.add('isActive')
//     $checkpoint4.classList.add('isActive')
//     $checkpoint5.classList.add('isActive')
// })

// $equalizer.addEventListener('mousedown', () =>
// {
//     $equalizer.classList.toggle('muted')
//     if(playingMusic)
//     {
//         $music.pause()
//         playingMusic = false
//     } else
//     {
//         $music.play()
//     }
// })
/* End welcome page JS */

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
// const $tlTimeline = document.querySelector('.tl-timeline')
// const $tlRocket = document.querySelector('.tl-rocket')
// const timelineWidth = $tlTimeline.offsetWidth

// document.addEventListener('mousewheel', () => 
// {
//     if(changeSlide == 0)
//     {
//         $tlRocket.style.transform = `translate(20px, -33px)`
//     }
//     else if(changeSlide == 1)
//     {
//         $tlRocket.style.transform = `translate(${timelineWidth * 0.25 - 20}px, -33px)`
//     }
//     else if(changeSlide == 2)
//     {
//         $tlRocket.style.transform = `translate(${timelineWidth * 0.5 - 20}px, -33px)`
//     }
//     else if(changeSlide == 3)
//     {
//         $tlRocket.style.transform = `translate(${timelineWidth * 0.75 - 20}px, -33px)`
//     }
//     else
//     {
//         $tlRocket.style.transform = `translate(${timelineWidth - 20}px, -33px)`
//     }

// })
/* end timeline */

/* Start rocket's JS */ 

// Create a canvas to draw rocket flames

const $canvasRocket = document.querySelector('.flames')
const contextRocket = $canvasRocket.getContext('2d')

// Create 3 flames transmitters
const flames = []
const flames2 = []
const flames3 = []

// Function pushing flames into transmitters
const createFlames = () => 
{
    // Create the first fire object
    const flame = {}
    
    // Place the first fire source on canvas
    flame.x = $canvasRocket.width / 2.6
    flame.y = $canvasRocket.height

    // Create the first fire angle
    flame.angle = Math.random()*0.2 + 9.1

    // Choose the first fire color
    flame.color = `rgba(255,170,64,0.8)`

    // Choose the flames radius
    flame.radius = Math.random() * 15

    // Create flames speed and life points
    flame.speed = 9
    flame.life = 1

    // Choose the life points decreasing speed using a random setting
    flame.lifeDelta = 0.1 + 0.1 * Math.random()

    // Push flames into the first flame transmitter
    flames.push(flame)

    // Create the second fire object
    const flame2 = {}

    // Place the second fire source on canvas
    flame2.x = $canvasRocket.width / 2
    flame2.y = $canvasRocket.height
    
    // Create the second fire angle
    flame2.angle = Math.random()*0.2 + 9.3
    
    // Choose the second fire color
    flame2.color = `rgba(255,170,64,0.8)`
    
    // Choose the flames radius
    flame2.radius = Math.random() * 15
    
    // Create flames speed and life points
    flame2.speed = 9
    flame2.life = 1

    // Choose the life points decreasing speed using a random setting
    flame2.lifeDelta = 0.1 + 0.1 * Math.random()
    
    // Push flames into the second flame transmitter
    flames2.push(flame2)
    
    // Create the third fire object
    const flame3 = {}

    // Place the third fire source on canvas
    flame3.x = $canvasRocket.width / 1.61
    flame3.y = $canvasRocket.height
        
    // Create the third fire angle
    flame3.angle = Math.random()*0.2 + 9.5
        
    // Choose the third fire color
    flame3.color = `rgba(255,170,64,0.8)`
        
    // Choose the flames radius
    flame3.radius = Math.random() * 15
        
    // Create flames speed and life points
    flame3.speed = 9
    flame3.life = 1

    // Choose the life points decreasing speed using a random setting
    flame3.lifeDelta = 0.1 + 0.1 * Math.random()
        
    // Push flames into the third flame transmitter
    flames3.push(flame3) 
}

// Create a function to update flames position and delete them using life points and opacity
const updateFlames = () => 
{
    // Create a counter for the first fire
    let i = 0

    // For every flame into the first fire, use angle and speed to update flames position
    for(const flame of flames)
    {
        // Update flames position using sinus, cosinus, angle and speed
        flame.x += Math.sin(flame.angle) * flame.speed
        flame.y += Math.cos(flame.angle) * flame.speed

        // Decrease the flames life points
        flame.life -= flame.lifeDelta

        // Change flame opacity using life points
        const flameOpacity = flame.life
        flame.color = `rgba(255, 170, 64, ${flameOpacity})`

        // Conditions for a flame to die
        if(flame.y < 0 || flame.y > $canvasRocket.height || flame.life <= 0)
        {
            flames.splice(i, 1)
        }
        // Increment the first fire counter
        i++
    }

    // Create a counter for the second fire
    let j = 0

    // For every flame into the second fire, use angle and speed to update flames position
    for(const flame2 of flames2)
    {
        // Update flames position using sinus, cosinus, angle and speed
        flame2.x += Math.sin(flame2.angle) * flame2.speed
        flame2.y += Math.cos(flame2.angle) * flame2.speed

        // Decrease the flames life points
        flame2.life -= flame2.lifeDelta

        // Change flame opacity using life points
        const flameOpacity = flame2.life
        flame2.color = `rgba(255, 170, 64, ${flameOpacity})`

        // Conditions for a flame to die
        if(flame2.y < 0 || flame2.y > $canvasRocket.height || flame2.life <= 0)
        {
            flames2.splice(j, 1)
        }
        // Increment the second fire counter
        j++
    }

    // Create a counter for the third fire
    let k = 0

    // For every flame into the third fire, use angle and speed to update flames position
    for(const flame3 of flames3)
    {
        // Update flames position using sinus, cosinus, angle and speed
        flame3.x += Math.sin(flame3.angle) * flame3.speed
        flame3.y += Math.cos(flame3.angle) * flame3.speed

        // Decrease the flames life points
        flame3.life -= flame3.lifeDelta

        // Change flame opacity using life points
        const flameOpacity = flame3.life
        flame3.color = `rgba(255, 170, 64, ${flameOpacity})`

        // Conditions for a flame to die
        if(flame3.y < 0 || flame3.y > $canvasRocket.height || flame3.life <= 0)
        {
            flames3.splice(k, 1)
        }
        // Increment the third fire counter
        k++
    }
}

// Using clearRect to clear canvas
const clearFlames = () => 
{
    contextRocket.clearRect(0, 0, $canvasRocket.width, $canvasRocket.height)
}

// Create a function to draw flames
const drawFlames = () => 
{
    // Choose a flame color composite operation
    contextRocket.globalCompositeOperation = 'screen'
    
    // Browse the flame array (first fire) and draw a flame in every passage
    for(const flame of flames)
    {
        contextRocket.beginPath()
        contextRocket.arc(flame.x, flame.y, flame.radius * flame.life, Math.PI*2, 0)
        contextRocket.fillStyle = flame.color
        contextRocket.fill()
    }

    // Browse the flame2 array (second fire) and draw a flame in every passage
    for(const flame2 of flames2)
    {
        contextRocket.beginPath()
        contextRocket.arc(flame2.x, flame2.y, flame2.radius * flame2.life, Math.PI*2, 0)
        contextRocket.fillStyle = flame2.color
        contextRocket.fill()
    }

    // Browse the flame3 array (third fire) and draw a flame in every passage
    for(const flame3 of flames3)
    {
        contextRocket.beginPath()
        contextRocket.arc(flame3.x, flame3.y, flame3.radius * flame3.life, Math.PI*2, 0)
        contextRocket.fillStyle = flame3.color
        contextRocket.fill()
    }
}

// Create a loop to call other functions
const loopRocket = () => 
{
    window.requestAnimationFrame(loopRocket)

    // Use the first flame counter to draw 10 flames per frame
    for(let i = 0; i < 10; i++)
    {
        createFlames()
    }

    // Use the second flame counter to draw 10 flames per frame
    for(let j = 0; j < 10; j++)
    {
        createFlames()
    }

    // Use the third flame counter to draw 10 flames per frame
    for(let k = 0; k < 10; k++)
    {
        createFlames()
    }
    
    // Call functions
    createFlames()
    updateFlames()
    clearFlames()
    drawFlames()  
}
    
// Call the loop function
loopRocket()

/* End rocket's end */