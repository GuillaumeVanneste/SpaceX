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