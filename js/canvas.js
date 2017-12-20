const $canvas = document.querySelector('canvas')
const context = $canvas.getContext('2d')

const stars = [] // Create array for stars

const createStars = () =>
{
    stars.splice(0, 100) // Clean stars
    for(let i = 0; i < 100; i++)
    {
        const star = {} // Create a star
        star.x = Math.random() * $canvas.width
        star.y = Math.random() * $canvas.height
        star.radius = Math.random() * 1.2
        star.color = `rgba(255, 255, 255, ${Math.random()}`
    
        stars.push(star) // Push the star in the stars array
    }
}

// Resize function to get the dimension of the window
const resize = () =>
{
    $canvas.width = window.innerWidth
    $canvas.height = window.innerHeight
    createStars() // Create new star on rezise
}

// Listen to the rezise event on the window -> launch resize function if the window is resizing
window.addEventListener('resize', resize)
resize()

// Updating the position of each star
const updateStars = () =>
{
    for(const star of stars)
    {
        star.x += 0.2
        if(star.x > $canvas.width) // When a star is outside of the window
        {
            star.x = 0 // Return in the window
        }
    }
}

const drawStars = () =>
{
    for(const star of stars)
    {
        context.beginPath()
        context.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        context.fillStyle = star.color
        context.fill()
    }
}

// Clear canvas
const clear = () =>
{
    context.clearRect(0, 0, $canvas.width, $canvas.height)
}

const loop = () =>
{
    requestAnimationFrame(loop) 

    updateStars()
    clear()
    drawStars()
}

loop()
createStars()