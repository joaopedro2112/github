
const primary_video = document.querySelector('.video-primary')
const photo_plan = document.querySelector('.photo-plan')
const secondary_video = document.querySelector('.video-secondary')

const text_primary = document.querySelector('.text-primary')
const text_plan = document.querySelector('.text-plan')
const text_secondary = document.querySelector('.text-secondary')
function hideAll() {
    primary_video.style.display = 'none'
    photo_plan.style.display = 'none'
    secondary_video.style.display = 'none'
    text_primary.style.backgroundColor = 'transparent'
    text_primary.style.border = 'none'
    text_primary.style.padding = '0'
    text_primary.style.borderRadius = '0'
    text_plan.style.backgroundColor = 'transparent'
    text_plan.style.border = 'none'
    text_plan.style.padding = '0'
    text_plan.style.borderRadius = '0'
    text_secondary.style.backgroundColor = 'transparent'
    text_secondary.style.border = 'none'
    text_secondary.style.padding = '0'
    text_secondary.style.borderRadius = '0'
}
text_primary.onclick = function primary_video_function() {

    hideAll()
    primary_video.style.display = 'block'
    text_primary.style.backgroundColor = '#ffffff1d'
    text_primary.style.border = '1px solid white'
    text_primary.style.padding = '10px 40px'
    text_primary.style.borderRadius = '30px'

}
text_plan.onclick = function photo_plan_function() {

    hideAll()
    secondary_video.style.display = 'block'
    

    text_plan.style.backgroundColor = '#ffffff1d'
    text_plan.style.border = '1px solid white'
    text_plan.style.padding = '10px 40px'
    text_plan.style.borderRadius = '30px'

}
text_secondary.onclick = function secondary_video_function() {

    hideAll()

    photo_plan.style.display = 'block'
    text_secondary.style.backgroundColor = '#ffffff1d'
    text_secondary.style.border = '1px solid white'
    text_secondary.style.padding = '10px 40px'
    text_secondary.style.borderRadius = '30px'

}

