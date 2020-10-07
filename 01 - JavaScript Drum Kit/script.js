"use strict"
function playSound({keyCode}) {
    const $audio = document.querySelector(`audio[data-key="${keyCode}"]`)
    const $key = document.querySelector(`div[data-key="${keyCode}"]`)
    if (!$key) return
    $key.classList.add("playing")
    $audio.currentTime = 0
    $audio.play()
    // setTimeout(() => {
    //     $key.classList.remove("playing")
    // }, 100)
}

const $keys = document.querySelectorAll('.key')
document.addEventListener("keydown", playSound)
$keys.forEach($key => {
    $key.addEventListener('transitionend', (e) => {
        $key.classList.remove('playing')
    })
})
