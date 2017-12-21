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