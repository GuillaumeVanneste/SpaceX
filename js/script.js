const $canvasSpace = document.querySelector('.spaceCanvas')
const contextSpace = $canvasSpace.getContext('2d')


const stars = []

const createStars = () => {
    stars.splice(0, 100)
    for (let i = 0; i < 100; i++) {
        const star = {}
        star.x = Math.random() * $canvasSpace.width
        star.y = Math.random() * $canvasSpace.height
        star.radius = Math.random() * 1.2
        star.color = `rgba(255, 255, 255, ${Math.random()}`

        stars.push(star)
    }
}

const resizeStars = () => {
    $canvasSpace.width = window.innerWidth
    $canvasSpace.height = window.innerHeight
    createStars()
}

window.addEventListener('resize', resizeStars)
resizeStars()

const updateStars = () => {
    for (const star of stars) {
        star.x += 0.2
        if (star.x > $canvasSpace.width) {
            star.x = 0
        }
    }
}

const drawStars = () => {
    for (const star of stars) {
        contextSpace.beginPath()
        contextSpace.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        contextSpace.fillStyle = star.color
        contextSpace.fill()
    }
}

const clearStars = () => {
    contextSpace.clearRect(0, 0, $canvasSpace.width, $canvasSpace.height)
}

const loopStars = () => {
    requestAnimationFrame(loopStars)

    updateStars()
    clearStars()
    drawStars()
}

loopStars()
createStars()

document.addEventListener('mousewheel', (event) => {
    event.preventDefault()

})


/* ROCKET PART*/
// Create a canvas to draw rocket flames

const $canvas = document.querySelector('.flamesCanvas')
const context = $canvas.getContext('2d')

// Resize canvas
const resize = () => {
    $canvas.style.width = `80%`
    $canvas.style.height = `60%`
}

window.addEventListener('resize', resize)
resize()

// Create 3 flames transmitters
const flames = []
const flames2 = []
const flames3 = []

// Function pushing flames into transmitters
const createFlames = () => {
    // Create the first fire object
    const flame = {}

    // Place the first fire source on canvas
    flame.x = $canvas.width / 2.6
    flame.y = $canvas.height

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
    flame2.x = $canvas.width / 2
    flame2.y = $canvas.height

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
    flame3.x = $canvas.width / 1.61
    flame3.y = $canvas.height

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
const updateFlames = () => {
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
        if (flame.y < 0 || flame.y > $canvas.height || flame.life <= 0) {
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
        if (flame2.y < 0 || flame2.y > $canvas.height || flame2.life <= 0) {
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
        if (flame3.y < 0 || flame3.y > $canvas.height || flame3.life <= 0) {
            flames3.splice(k, 1)
        }
        // Increment the third fire counter
        k++
    }
}

// Using clearRect to clear canvas
const clearFlames = () => {
    context.clearRect(0, 0, $canvas.width, $canvas.height)
}

// Create a function to draw flames
const drawFlames = () => {
    // Choose a flame color composite operation
    context.globalCompositeOperation = 'screen'

    // Browse the flame array (first fire) and draw a flame in every passage
    for (const flame of flames) {
        context.beginPath()
        context.arc(flame.x, flame.y, flame.radius * flame.life, Math.PI * 2, 0)
        context.fillStyle = flame.color
        context.fill()
    }

    // Browse the flame2 array (second fire) and draw a flame in every passage
    for (const flame2 of flames2) {
        context.beginPath()
        context.arc(flame2.x, flame2.y, flame2.radius * flame2.life, Math.PI * 2, 0)
        context.fillStyle = flame2.color
        context.fill()
    }

    // Browse the flame3 array (third fire) and draw a flame in every passage
    for (const flame3 of flames3) {
        context.beginPath()
        context.arc(flame3.x, flame3.y, flame3.radius * flame3.life, Math.PI * 2, 0)
        context.fillStyle = flame3.color
        context.fill()
    }
}

// Create a loop to call other functions
const loopRocket = () => {
    window.requestAnimationFrame(loopRocket)

    // Use the first flame counter to draw 10 flames per frame
    for (let i = 0; i < 10; i++) {
        createFlames()
    }

    // Use the second flame counter to draw 10 flames per frame
    for (let j = 0; j < 10; j++) {
        createFlames()
    }

    // Use the third flame counter to draw 10 flames per frame
    for (let k = 0; k < 10; k++) {
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