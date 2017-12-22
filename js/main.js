/* Main page JS */

const $loader = document.querySelector('.loadingScreen')
const $value = $loader.querySelector('.value')
let value = 0

const loadingCountdown = () =>
{
    if(value < 100)
    {
        value++
        $value.textContent = value
        loading = false
    } else 
    {
        $loader.classList.add('loaded')
        loaded = true
    }
    console.log(loading)
}

window.setInterval(loadingCountdown, 1)


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



const $equalizer = document.querySelector('.equalizer')

const $music = document.querySelector('audio')
$music.volume = 0.25

let playingMusic = true

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

const resize = () =>
{
    $canvas.width = window.innerWidth
    $canvas.height = window.innerHeight
    createStars()
}

window.addEventListener('resize', resize)
resize()

const clearStars = () =>
{
    context.clearRect(0, 0, $canvas.width, $canvas.height)
}

const loopStars = () =>
{
    requestAnimationFrame(loopStars)

    updateStars()
    clearStars()
    drawStars()
}

loopStars()
createStars()

/* End script for Stars */

/* Start rocket's JS */ 

// Create a canvas to draw rocket flames

const $canvasRocket = document.querySelector('.flames')
const contextRocket = $canvasRocket.getContext('2d')

// Create 3 flames transmitters
const flames = []
const flames2 = []
const flames3 = []

// Using clearRect to clear canvas
const clearFlames = () =>
{
    contextRocket.clearRect(0, 0, $canvasRocket.width, $canvasRocket.height)
}

// Create a loop to call other functions
let rocketAnimationOne = false

const loopRocket = () => 
{
    window.requestAnimationFrame(loopRocket)
        
    if(changeSlide != 3)
    {
        rocketAnimationOne = false
    } else 
    {
        rocketAnimationOne = true
    }
    
    if(rocketAnimationOne)
    {// Use the first flame counter to draw 10 flames per frame
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
        createFlames()
    }
    // Call functions
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

const flames6 = []
const flames4 = []
const flames5 = []


// Using clearRect to clear canvas
const clearFlames2 = () =>
{
    contextRocket2.clearRect(0, 0, $canvasRocket2.width, $canvasRocket2.height)
}



// Create a loop to call other functions
let rocketAnimationTwo = false
const loopRocket2 = () =>
{
    window.requestAnimationFrame(loopRocket2)
    
    // Use the first flame counter to draw 10 flames per frame
    if(changeSlide != 1)
    {
        rocketAnimationTwo = false
    } else 
    {
        rocketAnimationTwo = true
    }
    
    if(rocketAnimationTwo)
    {
        for (let i = 0; i < 10; i++)
        {
            createFlames2()
        }

        // Use the second flame counter to draw 10 flames per frame
        for (let j = 0; j < 10; j++)
        {
            createFlames2()
        }

        // Use the third flame counter to draw 10 flames per frame
        for (let k = 0; k < 10; k++)
        {
            createFlames2()
        }
    }
    // Call functions
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

const flames7 = []
const flames8 = []
const flames9 = []


// Using clearRect to clear canvas
const clearFlames3 = () =>
{
    contextRocket3.clearRect(0, 0, $canvasRocket3.width, $canvasRocket3.height)
}

// Create a loop to call other functions
let rocketAnimationThree = false

const loopRocket3 = () => {
    window.requestAnimationFrame(loopRocket3)
        // Use the first flame counter to draw 10 flames per frame
        if(changeSlide != 2)
        {
            rocketAnimationThree = false
        } else 
        {
            rocketAnimationThree = true
        }
        if(rocketAnimationThree)
        {
            for (let i = 0; i < 10; i++)
            {
                createFlames3()
            }
        
            // Use the second flame counter to draw 10 flames per frame
            for (let j = 0; j < 10; j++)
            {
                createFlames3()
            }
        
            // Use the third flame counter to draw 10 flames per frame
            for (let k = 0; k < 10; k++)
            {
                createFlames3()
            }
        }
    // Call functions
    updateFlames3()
    clearFlames3()
    drawFlames3()
}

// Call the loop function  
loopRocket3()

/* End 3rd fire end */