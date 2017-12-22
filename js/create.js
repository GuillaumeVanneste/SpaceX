const createStars = () =>
{
    stars.splice(0, 100)
    for (let i = 0; i < 100; i++)
    {
        const star = {}
        star.x = Math.random() * $canvas.width
        star.y = Math.random() * $canvas.height
        star.radius = Math.random() * 1.2
        star.color = `rgba(255, 255, 255, ${Math.random()}`

        stars.push(star)
    }
}

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

// Function pushing flames into transmitters
const createFlames2 = () =>
{
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
    flames6.push(flame)

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
    flames4.push(flame2)

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
    flames5.push(flame3)
}

// Function pushing flames into transmitters
const createFlames3 = () =>
{
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
    flames7.push(flame)

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
    flames8.push(flame2)

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
    flames9.push(flame3)
}