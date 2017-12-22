const drawStars = () =>
{
    for (const star of stars)
    {
        context.beginPath()
        context.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        context.fillStyle = star.color
        context.fill()
    }
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

// Create a function to draw flames
const drawFlames2 = () =>
{
    // Choose a flame color composite operation
    contextRocket2.globalCompositeOperation = 'screen'

    // Browse the flame array (first fire) and draw a flame in every passage
    for (const flame of flames6)
    {
        contextRocket2.beginPath()
        contextRocket2.arc(flame.x, flame.y, flame.radius * flame.life, Math.PI * 2, 0)
        contextRocket2.fillStyle = flame.color
        contextRocket2.fill()
    }

    // Browse the flame2 array (second fire) and draw a flame in every passage
    for (const flame2 of flames4)
    {
        contextRocket2.beginPath()
        contextRocket2.arc(flame2.x, flame2.y, flame2.radius * flame2.life, Math.PI * 2, 0)
        contextRocket2.fillStyle = flame2.color
        contextRocket2.fill()
    }

    // Browse the flame3 array (third fire) and draw a flame in every passage
    for (const flame3 of flames5)
    {
        contextRocket2.beginPath()
        contextRocket2.arc(flame3.x, flame3.y, flame3.radius * flame3.life, Math.PI * 2, 0)
        contextRocket2.fillStyle = flame3.color
        contextRocket2.fill()
    }
}

// Create a function to draw flames
const drawFlames3 = () =>
{
    // Choose a flame color composite operation
    contextRocket3.globalCompositeOperation = 'screen'

    // Browse the flame array (first fire) and draw a flame in every passage
    for (const flame of flames7)
    {
        contextRocket3.beginPath()
        contextRocket3.arc(flame.x, flame.y, flame.radius * flame.life, Math.PI * 2, 0)
        contextRocket3.fillStyle = flame.color
        contextRocket3.fill()
    }
    for (const flame2 of flames8)
    {
        // Browse the flame2 array (second fire) and draw a flame in every passage
        contextRocket3.beginPath()
        contextRocket3.arc(flame2.x, flame2.y, flame2.radius * flame2.life, Math.PI * 2, 0)
        contextRocket3.fillStyle = flame2.color
        contextRocket3.fill()
    }

    // Browse the flame3 array (third fire) and draw a flame in every passage
    for (const flame3 of flames9)
    {
        contextRocket3.beginPath()
        contextRocket3.arc(flame3.x, flame3.y, flame3.radius * flame3.life, Math.PI * 2, 0)
        contextRocket3.fillStyle = flame3.color
        contextRocket3.fill()
    }
}