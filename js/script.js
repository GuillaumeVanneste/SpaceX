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
            }
            else if(changeSlide >= 1 )
            {
                $page.classList.toggle('transition')
            }
    
            // changing slides in function of the transition
            if(changeSlide != 5 || event.deltaY <= 0)
            {
                if(changeSlide > 0)
                {
                    $page.classList.toggle('transition')
                    console.log('toggle')
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
                        }
                        else if(changeSlide == 1)
                        {
                            $main.classList.add('not-shown')
                            $slide1.classList.remove('not-shown')
                            $slide2.classList.add('not-shown')
                            $slide3.classList.add('not-shown')
                            $slide4.classList.add('not-shown')
                            $slide5.classList.add('not-shown')
                            $page.classList.remove('not-shown')
                            
                        }
                        else if(changeSlide == 2)
                        {
                            $main.classList.add('not-shown')                        
                            $slide1.classList.add('not-shown')
                            $slide2.classList.remove('not-shown')
                            $slide3.classList.add('not-shown')
                            $slide4.classList.add('not-shown')
                            $slide5.classList.add('not-shown')
                            $page.classList.remove('not-shown')
                            
                        }
                        else if(changeSlide == 3)
                        {
                            $main.classList.add('not-shown')                        
                            $slide1.classList.add('not-shown')
                            $slide2.classList.add('not-shown')
                            $slide3.classList.remove('not-shown')
                            $slide4.classList.add('not-shown')
                            $slide5.classList.add('not-shown')
                            $page.classList.remove('not-shown')
                            
                        }
                        else if(changeSlide == 4)
                        {
                            $main.classList.add('not-shown')
                            $slide1.classList.add('not-shown')
                            $slide2.classList.add('not-shown')
                            $slide3.classList.add('not-shown')
                            $slide4.classList.remove('not-shown')
                            $slide5.classList.add('not-shown')
                            $page.classList.remove('not-shown')
                            
                        }
                        else if(changeSlide == 5)
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
                        }
                        else if(changeSlide == 1)
                        {
                            $main.classList.add('not-shown')
                            $slide1.classList.remove('not-shown')
                            $slide2.classList.add('not-shown')
                            $slide3.classList.add('not-shown')
                            $slide4.classList.add('not-shown')
                            $slide5.classList.add('not-shown')
                            $page.classList.remove('not-shown')                        
                        }
                        else if(changeSlide == 2)
                        {
                            $main.classList.add('not-shown')
                            $slide1.classList.add('not-shown')
                            $slide2.classList.remove('not-shown')
                            $slide3.classList.add('not-shown')
                            $slide4.classList.add('not-shown')
                            $slide5.classList.add('not-shown')
                            $page.classList.remove('not-shown')
                        }
                        else if(changeSlide == 3)
                        {
                            $main.classList.add('not-shown')
                            $slide1.classList.add('not-shown')
                            $slide2.classList.add('not-shown')
                            $slide3.classList.remove('not-shown')
                            $slide4.classList.add('not-shown')
                            $slide5.classList.add('not-shown')
                            $page.classList.remove('not-shown')
                        }
                        else if(changeSlide == 4)
                        {
                            $main.classList.add('not-shown')
                            $slide1.classList.add('not-shown')
                            $slide2.classList.add('not-shown')
                            $slide3.classList.add('not-shown')
                            $slide4.classList.remove('not-shown')
                            $slide5.classList.add('not-shown')
                            $page.classList.remove('not-shown')
                        }
                        else if(changeSlide == 5)
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
        }
        else if(changeSlide == 1)
        {
            $text1.classList.remove('not-active')
            $text2.classList.add('not-active')
            $text3.classList.add('not-active')
            $text4.classList.add('not-active')
            $text5.classList.add('not-active')
        }
        else if(changeSlide == 2)
        {
            $text1.classList.add('not-active')
            $text2.classList.remove('not-active')
            $text3.classList.add('not-active')
            $text4.classList.add('not-active')
            $text5.classList.add('not-active')
        }
        else if(changeSlide == 3)
        {
            $text1.classList.add('not-active')
            $text2.classList.add('not-active')
            $text3.classList.remove('not-active')
            $text4.classList.add('not-active')
            $text5.classList.add('not-active')
        }
        else if(changeSlide == 4)
        {
            $text1.classList.add('not-active')
            $text2.classList.add('not-active')
            $text3.classList.add('not-active')
            $text4.classList.remove('not-active')
            $text5.classList.add('not-active')
        }
        else if(changeSlide == 5)
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

/* Main page JS */

// Variables
const $progressBar = document.querySelector('.progressBar')
const $checkpoint1 = $progressBar.querySelector('.checkpoint-1')
const $checkpoint2 = $progressBar.querySelector('.checkpoint-2')
const $checkpoint3 = $progressBar.querySelector('.checkpoint-3')
const $checkpoint4 = $progressBar.querySelector('.checkpoint-4')
const $checkpoint5 = $progressBar.querySelector('.checkpoint-5')

const $equalizer = document.querySelector('.equalizer')

const $music = document.querySelector('audio')
$music.volume = 0.25

let playingMusic = true

// Listen to mouse down on the frist checkpoint on the progress bar
$checkpoint1.addEventListener('mousedown', () =>
{
    // Check the checkpoint cliced and all checkpoint before
    $checkpoint1.classList.add('isActive')
    $checkpoint2.classList.remove('isActive')
    $checkpoint3.classList.remove('isActive')
    $checkpoint4.classList.remove('isActive')
    $checkpoint5.classList.remove('isActive')
})

// Listen to mouse down on the second checkpoint on the progress bar
$checkpoint2.addEventListener('mousedown', () =>
{
    // Check the checkpoint cliced and all checkpoint before
    $checkpoint1.classList.add('isActive')
    $checkpoint2.classList.add('isActive')

    // Uncheck all checkpoint after the one cliced
    $checkpoint3.classList.remove('isActive')
    $checkpoint4.classList.remove('isActive')
    $checkpoint5.classList.remove('isActive')
})

// Listen to mouse down on the third checkpoint on the progress bar
$checkpoint3.addEventListener('mousedown', () =>
{
    // Check the checkpoint cliced and all checkpoint before
    $checkpoint1.classList.add('isActive')
    $checkpoint2.classList.add('isActive')
    $checkpoint3.classList.add('isActive')

    // Uncheck all checkpoint after the one cliced
    $checkpoint4.classList.remove('isActive')
    $checkpoint5.classList.remove('isActive')
})

// Listen to mouse down on the fourth checkpoint on the progress bar
$checkpoint4.addEventListener('mousedown', () =>
{
    // Check the checkpoint cliced and all checkpoint before
    $checkpoint1.classList.add('isActive')
    $checkpoint2.classList.add('isActive')
    $checkpoint3.classList.add('isActive')
    $checkpoint4.classList.add('isActive')

    // Uncheck all checkpoint after the one cliced
    $checkpoint5.classList.remove('isActive')
})

// Listen to mouse down on the fifth checkpoint on the progress bar
$checkpoint5.addEventListener('mousedown', () =>
{
    // Check the checkpoint cliced and all checkpoint before
    $checkpoint1.classList.add('isActive')
    $checkpoint2.classList.add('isActive')
    $checkpoint3.classList.add('isActive')
    $checkpoint4.classList.add('isActive')
    $checkpoint5.classList.add('isActive')
})

// Listen to mouse down on equalizer
$equalizer.addEventListener('mousedown', () =>
{
    // Pause or run the equalizer's animation
    $equalizer.classList.toggle('muted')
    
    // When the music is playing
    if(playingMusic)
    {
        $music.pause()
        playingMusic = false
    } else
    {
        $music.play()
        playingMusic = true
    }
})
/* End main JS */

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

/* Second flame */

/* Start rocket's JS */

// Create a canvas to draw rocket flames

const $canvasRocket2 = document.querySelector('.flames2')
const contextRocket2 = $canvasRocket2.getContext('2d')


// Function pushing flames into transmitters
const createFlames2 = () => {
    // Create the first fire object
    const flame = {}

    // Place the first fire source on canvas
    flame.x = $canvasRocket2.width / 2.6
    flame.y = $canvasRocket2.height

    // Create the first fire angle
    flame.angle = Math.random() * 0.2 + 9.1

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
    flame2.x = $canvasRocket2.width / 2
    flame2.y = $canvasRocket2.height

    // Create the second fire angle
    flame2.angle = Math.random() * 0.2 + 9.3

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
    flame3.x = $canvasRocket2.width / 1.61
    flame3.y = $canvasRocket2.height

    // Create the third fire angle
    flame3.angle = Math.random() * 0.2 + 9.5

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
const updateFlames2 = () => {
    // Create a counter for the first fire
    let i = 0

    // For every flame into the first fire, use angle and speed to update flames position
    for (const flame of flames) {
        // Update flames position using sinus, cosinus, angle and speed
        flame.x += Math.sin(flame.angle) * flame.speed
        flame.y += Math.cos(flame.angle) * flame.speed

        // Decrease the flames life points
        flame.life -= flame.lifeDelta

        // Change flame opacity using life points
        const flameOpacity = flame.life
        flame.color = `rgba(255, 170, 64, ${flameOpacity})`

        // Conditions for a flame to die
        if (flame.y < 0 || flame.y > $canvasRocket2.height || flame.life <= 0) {
            flames.splice(i, 1)
        }
        // Increment the first fire counter
        i++
    }

    // Create a counter for the second fire
    let j = 0

    // For every flame into the second fire, use angle and speed to update flames position
    for (const flame2 of flames2) {
        // Update flames position using sinus, cosinus, angle and speed
        flame2.x += Math.sin(flame2.angle) * flame2.speed
        flame2.y += Math.cos(flame2.angle) * flame2.speed

        // Decrease the flames life points
        flame2.life -= flame2.lifeDelta

        // Change flame opacity using life points
        const flameOpacity = flame2.life
        flame2.color = `rgba(255, 170, 64, ${flameOpacity})`

        // Conditions for a flame to die
        if (flame2.y < 0 || flame2.y > $canvasRocket2.height || flame2.life <= 0) {
            flames2.splice(j, 1)
        }
        // Increment the second fire counter
        j++
    }

    // Create a counter for the third fire
    let k = 0

    // For every flame into the third fire, use angle and speed to update flames position
    for (const flame3 of flames3) {
        // Update flames position using sinus, cosinus, angle and speed
        flame3.x += Math.sin(flame3.angle) * flame3.speed
        flame3.y += Math.cos(flame3.angle) * flame3.speed

        // Decrease the flames life points
        flame3.life -= flame3.lifeDelta

        // Change flame opacity using life points
        const flameOpacity = flame3.life
        flame3.color = `rgba(255, 170, 64, ${flameOpacity})`

        // Conditions for a flame to die
        if (flame3.y < 0 || flame3.y > $canvasRocket2.height || flame3.life <= 0) {
            flames3.splice(k, 1)
        }
        // Increment the third fire counter
        k++
    }
}

// Using clearRect to clear canvas
const clearFlames2 = () => {
    contextRocket2.clearRect(0, 0, $canvasRocket2.width, $canvasRocket2.height)
}

// Create a function to draw flames
const drawFlames2 = () => {
    // Choose a flame color composite operation
    contextRocket2.globalCompositeOperation = 'screen'

    // Browse the flame array (first fire) and draw a flame in every passage
    for (const flame of flames) {
        contextRocket2.beginPath()
        contextRocket2.arc(flame.x, flame.y, flame.radius * flame.life, Math.PI * 2, 0)
        contextRocket2.fillStyle = flame.color
        contextRocket2.fill()
    }

    // Browse the flame2 array (second fire) and draw a flame in every passage
    for (const flame2 of flames2) {
        contextRocket2.beginPath()
        contextRocket2.arc(flame2.x, flame2.y, flame2.radius * flame2.life, Math.PI * 2, 0)
        contextRocket2.fillStyle = flame2.color
        contextRocket2.fill()
    }

    // Browse the flame3 array (third fire) and draw a flame in every passage
    for (const flame3 of flames3) {
        contextRocket2.beginPath()
        contextRocket2.arc(flame3.x, flame3.y, flame3.radius * flame3.life, Math.PI * 2, 0)
        contextRocket2.fillStyle = flame3.color
        contextRocket2.fill()
    }
}

// Create a loop to call other functions
const loopRocket2 = () => {
    window.requestAnimationFrame(loopRocket2)

    // Use the first flame counter to draw 10 flames per frame
    for (let i = 0; i < 10; i++) {
        createFlames2()
    }

    // Use the second flame counter to draw 10 flames per frame
    for (let j = 0; j < 10; j++) {
        createFlames2()
    }

    // Use the third flame counter to draw 10 flames per frame
    for (let k = 0; k < 10; k++) {
        createFlames2()
    }

    // Call functions
    createFlames2()
    updateFlames2()
    clearFlames2()
    drawFlames2()
}

// Call the loop function
loopRocket2()

/* End rocket's end */


/* Start 3rd fire JS */

// Create a canvas to draw rocket flames

const $canvasRocket3 = document.querySelector('.flames3')
const contextRocket3 = $canvasRocket3.getContext('2d')


// Function pushing flames into transmitters
const createFlames3 = () => {
    // Create the first fire object
    const flame = {}

    // Place the first fire source on canvas
    flame.x = $canvasRocket3.width / 2.6
    flame.y = $canvasRocket3.height

    // Create the first fire angle
    flame.angle = Math.random() * 0.2 + 9.1

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
    flame2.x = $canvasRocket3.width / 2
    flame2.y = $canvasRocket3.height

    // Create the second fire angle
    flame2.angle = Math.random() * 0.2 + 9.3

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
    flame3.x = $canvasRocket3.width / 1.61
    flame3.y = $canvasRocket3.height

    // Create the third fire angle
    flame3.angle = Math.random() * 0.2 + 9.5

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
const updateFlames3 = () => {
    // Create a counter for the first fire
    let i = 0

    // For every flame into the first fire, use angle and speed to update flames position
    for (const flame of flames) {
        // Update flames position using sinus, cosinus, angle and speed
        flame.x += Math.sin(flame.angle) * flame.speed
        flame.y += Math.cos(flame.angle) * flame.speed

        // Decrease the flames life points
        flame.life -= flame.lifeDelta

        // Change flame opacity using life points
        const flameOpacity = flame.life
        flame.color = `rgba(255, 170, 64, ${flameOpacity})`

        // Conditions for a flame to die
        if (flame.y < 0 || flame.y > $canvasRocket3.height || flame.life <= 0) {
            flames.splice(i, 1)
        }
        // Increment the first fire counter
        i++
    }

    // Create a counter for the second fire
    let j = 0

    // For every flame into the second fire, use angle and speed to update flames position
    for (const flame2 of flames2) {
        // Update flames position using sinus, cosinus, angle and speed
        flame2.x += Math.sin(flame2.angle) * flame2.speed
        flame2.y += Math.cos(flame2.angle) * flame2.speed

        // Decrease the flames life points
        flame2.life -= flame2.lifeDelta

        // Change flame opacity using life points
        const flameOpacity = flame2.life
        flame2.color = `rgba(255, 170, 64, ${flameOpacity})`

        // Conditions for a flame to die
        if (flame2.y < 0 || flame2.y > $canvasRocket3.height || flame2.life <= 0) {
            flames2.splice(j, 1)
        }
        // Increment the second fire counter
        j++
    }

    // Create a counter for the third fire
    let k = 0

    // For every flame into the third fire, use angle and speed to update flames position
    for (const flame3 of flames3) {
        // Update flames position using sinus, cosinus, angle and speed
        flame3.x += Math.sin(flame3.angle) * flame3.speed
        flame3.y += Math.cos(flame3.angle) * flame3.speed

        // Decrease the flames life points
        flame3.life -= flame3.lifeDelta

        // Change flame opacity using life points
        const flameOpacity = flame3.life
        flame3.color = `rgba(255, 170, 64, ${flameOpacity})`

        // Conditions for a flame to die
        if (flame3.y < 0 || flame3.y > $canvasRocket3.height || flame3.life <= 0) {
            flames3.splice(k, 1)
        }
        // Increment the third fire counter
        k++
    }
}

// Using clearRect to clear canvas
const clearFlames3 = () => {
    contextRocket3.clearRect(0, 0, $canvasRocket3.width, $canvasRocket3.height)
}

// Create a function to draw flames
const drawFlames3 = () => {
    // Choose a flame color composite operation
    contextRocket3.globalCompositeOperation = 'screen'

    // Browse the flame array (first fire) and draw a flame in every passage
    for (const flame of flames) {
        contextRocket3.beginPath()
        contextRocket3.arc(flame.x, flame.y, flame.radius * flame.life, Math.PI * 2, 0)
        contextRocket3.fillStyle = flame.color
        contextRocket3.fill()
    }
    for (const flame2 of flames2) {
        // Browse the flame2 array (second fire) and draw a flame in every passage
        contextRocket3.beginPath()
        contextRocket3.arc(flame2.x, flame2.y, flame2.radius * flame2.life, Math.PI * 2, 0)
        contextRocket3.fillStyle = flame2.color
        contextRocket3.fill()
    }

    // Browse the flame3 array (third fire) and draw a flame in every passage
    for (const flame3 of flames3) {
        contextRocket3.beginPath()
        contextRocket3.arc(flame3.x, flame3.y, flame3.radius * flame3.life, Math.PI * 2, 0)
        contextRocket3.fillStyle = flame3.color
        contextRocket3.fill()
    }
}

// Create a loop to call other functions
const loopRocket3 = () => {
    window.requestAnimationFrame(loopRocket3)

    // Use the first flame counter to draw 10 flames per frame
    for (let i = 0; i < 10; i++) {
        createFlames3()
    }

    // Use the second flame counter to draw 10 flames per frame
    for (let j = 0; j < 10; j++) {
        createFlames3()
    }

    // Use the third flame counter to draw 10 flames per frame
    for (let k = 0; k < 10; k++) {
        createFlames3()
    }

    // Call functions
    createFlames3()
    updateFlames3()
    clearFlames3()
    drawFlames3()
}

// Call the loop function
loopRocket3()

/* End 3rd fire end */

