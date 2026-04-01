const video = document.querySelector('.video')
let video_click = 1
video.onclick = function video_function() {
    if (video_click == 1) {
        video.style.transform = 'rotateY(-25deg) scale(0.9)'
        video_click = 2
    } else if (video_click == 2) {
        video.style.transform = 'rotateY(25deg) scale(0.9)'
        video_click = 3
    } else if (video_click == 3) {
        video.style.transform = 'rotateY(0) scale(1)'
        video_click = 1
    }
}
let btn_click = 1
const btn = document.querySelector('.submit')
btn.onclick = function btn_function() {
    if (btn_click == 1) {

        btn.style.backgroundColor = '#000'
        btn.style.transform = 'scale(0.9)'
        btn_click = 2

    } else if (btn_click == 2) {
        btn.style.backgroundColor = '#197D36'
        btn.style.transform = 'scale(1)'
        btn_click = 1
    }
}
const nav = document.querySelector('.nav')
window.addEventListener('scroll', function () {
    
    let position = window.scrollY;
    if (position >= 25) {
        nav.style.backgroundColor = '#0a0d19';

    }
    else {
        nav.style.backgroundColor = '#070942'

    }
})