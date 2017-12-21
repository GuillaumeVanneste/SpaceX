const $progressBar = document.querySelector('.progressBar')
const $checkpoint1 = $progressBar.querySelector('.checkpoint-1')
const $checkpoint2 = $progressBar.querySelector('.checkpoint-2')
const $checkpoint3 = $progressBar.querySelector('.checkpoint-3')
const $checkpoint4 = $progressBar.querySelector('.checkpoint-4')
const $checkpoint5 = $progressBar.querySelector('.checkpoint-5')

const $equalizer = document.querySelector('.equalizer')
const $music = document.querySelector('audio')

let playingMusic = true

$checkpoint1.addEventListener('mousedown', () =>
{
    $checkpoint1.classList.add('isActive')
    $checkpoint2.classList.remove('isActive')
    $checkpoint3.classList.remove('isActive')
    $checkpoint4.classList.remove('isActive')
    $checkpoint5.classList.remove('isActive')
})

$checkpoint2.addEventListener('mousedown', () =>
{
    $checkpoint1.classList.add('isActive')
    $checkpoint2.classList.add('isActive')
    $checkpoint3.classList.remove('isActive')
    $checkpoint4.classList.remove('isActive')
    $checkpoint5.classList.remove('isActive')
})

$checkpoint3.addEventListener('mousedown', () =>
{
    $checkpoint1.classList.add('isActive')
    $checkpoint2.classList.add('isActive')
    $checkpoint3.classList.add('isActive')
    $checkpoint4.classList.remove('isActive')
    $checkpoint5.classList.remove('isActive')
})

$checkpoint4.addEventListener('mousedown', () =>
{
    $checkpoint1.classList.add('isActive')
    $checkpoint2.classList.add('isActive')
    $checkpoint3.classList.add('isActive')
    $checkpoint4.classList.add('isActive')
    $checkpoint5.classList.remove('isActive')
})

$checkpoint5.addEventListener('mousedown', () =>
{
    $checkpoint1.classList.add('isActive')
    $checkpoint2.classList.add('isActive')
    $checkpoint3.classList.add('isActive')
    $checkpoint4.classList.add('isActive')
    $checkpoint5.classList.add('isActive')
})

$equalizer.addEventListener('mousedown', () =>
{
    $equalizer.classList.toggle('muted')
    if(playingMusic)
    {
        $music.pause()
        playingMusic = false
    } else
    {
        $music.play()
    }
})