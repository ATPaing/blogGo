const audio = document.getElementById('audio')

const banner = document.getElementById('banner')
const content_title = document.getElementById('content_title')
const content_card_img = document.getElementById('content_card_img')
const audio_player_img = document.getElementById('audio_player_img')
const audio_player_cover = document.getElementById('audio_player_cover')
const audio_current_time = document.getElementById('audio_current_time')
const audio_total_time = document.getElementById('audio_total_time')
const audio_indicator_btn = document.getElementById('audio_indicator_btn')
const content_views = document.getElementById('content_views')
const content_likes = document.getElementById('content_likes')
const content_card_description = document.getElementById('content_card_description')
const comments_replies = document.getElementById('comments_replies')

const prev_btn_wrapper = document.getElementById('prev_btn_wrapper')
const next_btn_wrapper = document.getElementById('next_btn_wrapper')

const next_btn = document.getElementById('next_btn')
const previous_btn = document.getElementById('previous_btn')
const heart_btn = document.getElementById('heart_btn')
const audio_state_btn = document.getElementById('audio_state_btn')

const id = _getTheValueFromURLSearchParam('id')

const randomNumber = Math.floor(Math.random() * 361);
banner.style.backgroundColor = `hsl(${randomNumber}, 62%, 55%)`;

async function _generateContent() {
    const id = _getTheValueFromURLSearchParam('id')

    const response = await fetch(`https://bloggo-be9c7-default-rtdb.asia-southeast1.firebasedatabase.app/posts/${parseInt(id) - 1}.json`)
    const data = await response.json()

    content_title.textContent = data.title
    content_card_img.src = data.image_link
    audio_player_img.src = data.image_link
    audio.src = data.voice_link
    audio_current_time.textContent = '--'
    audio_total_time.textContent = '--'
    content_views.textContent = `Views: ${data.views}` 
    content_likes.textContent = `Likes: ${data.likes}` 
    content_card_description.textContent = data.description 

    for (let i = 0; i < data.comments.length; i++){
        
        comments_replies.innerHTML += `<div class="comment-card">
                                <div class="comment-card__left">
                                    <a href="./profile.html" aria-label="view profile">
                                        <img src="../resources/images/avatars/avatar-placeholder.png" alt="" />
                                    </a>
                                    <p id="commenter_name">${data.comments[i].name}</p>
                                </div>
                                <p id="commenter_comment" class="comment-card__right">
                                ${data.comments[i].comment}
                                </p>
                            </div>`
    }

}

_generateContent()

function _managePreviousAndNextBtn() {
    console.log(previous_btn, next_btn)
    if (id === '1') {
        console.log('1 work')
        prev_btn_wrapper.classList.add('disabled')
        next_btn_wrapper.classList.remove('disabled')
    } else if(id === '60') {
        prev_btn_wrapper.classList.remove('disabled')
        next_btn_wrapper.classList.add('disabled') 
    }else {
        prev_btn_wrapper.classList.remove('disabled')
        next_btn_wrapper.classList.remove('disabled')
    }
}
_managePreviousAndNextBtn()

heart_btn.addEventListener('click', () => {
    heart_btn.classList.toggle('active')
    heart_btn.src = heart_btn.classList.contains('active') ? '../resources/images/filled-heart.png' : '../resources/images/empty_heart.png'
})


audio_state_btn.addEventListener('click', () => {
    audio_state_btn.classList.toggle('active')
    audio_player_cover.classList.toggle('rotate')
    audio_state_btn.src = audio_state_btn.classList.contains('active') ? '../resources/images/pause.png' : '../resources/images/play.png'
    audio_state_btn.classList.contains('active') ? audio.play() : audio.pause()
})

audio.ontimeupdate = updateCurrentTime


function updateAudioIndicator() {
    requestAnimationFrame(updateAudioIndicator);

    const playedPercentage = (audio.currentTime / audio.duration) * 100;
    
    audio_indicator_btn.style.width = `${playedPercentage}%`;
}

updateAudioIndicator();

audio.addEventListener('ended', () => {
    // Reset the audio
    audio.currentTime = 0; // Reset the playback position
    audio.pause(); // Pause the audio
    audio.load(); // Reload the audio source
    audio_current_time.textContent = '0:00' // reset current time 
    audio_player_cover.classList.remove('rotate')
    // reset button
    audio_state_btn.classList.remove('active')
    audio_state_btn.src = '../resources/images/play.png'
});

next_btn.addEventListener('click', () => {
    next_btn.href = `./view.html?id=${parseInt(id) + 1}`
})

previous_btn.addEventListener('click', () => {
    previous_btn.href = `./view.html?id=${parseInt(id) - 1}`

})

function updateCurrentTime() {
    const currentTime = formatTime(audio.currentTime)
    const totalTime = formatTime(audio.duration)
    audio_current_time.textContent = currentTime
    audio_total_time.textContent = totalTime
}

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function _getTheValueFromURLSearchParam(value) {
    // Get the search query from the URL
    const searchQuery = window.location.search;

    // Create a URLSearchParams object with the search query
    const queryParams = new URLSearchParams(searchQuery);

    // Get the value of the parameter query
    const queryValue = queryParams.get(value);

    return queryValue
}
