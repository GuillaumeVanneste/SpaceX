const updateStars = () =>
{
    for (const star of stars)
    {
        star.x += 0.2
        if (star.x > $canvas.width)
        {
            star.x = 0
        }
    }
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

// Create a function to update flames position and delete them using life points and opacity
const updateFlames2 = () =>
{
    // Create a counter for the first fire
    let i = 0

    // For every flame into the first fire, use angle and speed to update flames position
    for (const flame of flames6)
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
        if (flame.y < 0 || flame.y > $canvasRocket2.height || flame.life <= 0)
        {
            flames6.splice(i, 1)
        }
        // Increment the first fire counter
        i++
    }

    // Create a counter for the second fire
    let j = 0

    // For every flame into the second fire, use angle and speed to update flames position
    for (const flame2 of flames4)
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
        if (flame2.y < 0 || flame2.y > $canvasRocket2.height || flame2.life <= 0)
        {
            flames4.splice(j, 1)
        }
        // Increment the second fire counter
        j++
    }

    // Create a counter for the third fire
    let k = 0

    // For every flame into the third fire, use angle and speed to update flames position
    for (const flame3 of flames5)
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
        if (flame3.y < 0 || flame3.y > $canvasRocket2.height || flame3.life <= 0)
        {
            flames5.splice(k, 1)
        }
        // Increment the third fire counter
        k++
    }
}

// Create a function to update flames position and delete them using life points and opacity
const updateFlames3 = () =>
{
    // Create a counter for the first fire
    let i = 0

    // For every flame into the first fire, use angle and speed to update flames position
    for (const flame of flames7)
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
        if (flame.y < 0 || flame.y > $canvasRocket3.height || flame.life <= 0)
        {
            flames7.splice(i, 1)
        }
        // Increment the first fire counter
        i++
    }

    // Create a counter for the second fire
    let j = 0

    // For every flame into the second fire, use angle and speed to update flames position
    for (const flame2 of flames8)
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
        if (flame2.y < 0 || flame2.y > $canvasRocket3.height || flame2.life <= 0)
        {
            flames8.splice(j, 1)
        }
        // Increment the second fire counter
        j++
    }

    // Create a counter for the third fire
    let k = 0

    // For every flame into the third fire, use angle and speed to update flames position
    for (const flame3 of flames9)
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
        if (flame3.y < 0 || flame3.y > $canvasRocket3.height || flame3.life <= 0)
        {
            flames9.splice(k, 1)
        }
        // Increment the third fire counter
        k++
    }
}