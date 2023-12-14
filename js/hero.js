const hero_section = document.getElementById('hero')
const hero_content = document.getElementById('hero_content')
const carousel_indicators = document.getElementsByClassName('carousel_indicator')

const hero0Btn = document.getElementById('hero_0_btn')

let slideIndex = 0
let myInterval 

const contents = [
    {
        title_first: 'Unlock the Power of',
        title_second: 'through Blogs',
        span: 'Technology',
        description: 'Explore a vast collection of technology-focused blogs and articles that delve into the realms of innovation, gadgets, AI, and more. Expand your tech horizons and stay up-to-date with the ever-evolving digital landscape.',
        btnText: 'Start your tech journey',
        type: 'technology'
    },
    {
        title_first: 'Enter the Cinematic Universe: Discover the Magic of',
        title_second: '',
        span: 'Movies',
        description: 'Step into the captivating world of movies. From classic masterpieces to the latest blockbusters, our platform is your go-to destination for insightful articles, reviews, and behind-the-scenes glimpses. Get ready to indulge in your passion for cinema.',
        btnText: 'Discover the World of Films',
        type: 'movie'
    },
    {
        title_first: 'Not sure of what to',
        title_second: '?',
        span: 'learn',
        description: 'Prepare for a delightful voyage into the unknown. Our platform is your gateway to serendipitous discoveries. With every click, you\'ll be transported to a new corner of our content universe, where surprises await at every turn.',
        btnText: 'Unlock the Surprise',
    }
]



for (let i = 0; i < carousel_indicators.length; i++){
    carousel_indicators[i].addEventListener('click', () => {
        clearInterval(myInterval)
        slideIndex = i
        _rotateCarouselEvery7Seconds()
        _removeCarouselActiveAll()
        carousel_indicators[i].classList.add('carousel_indicator_active')
        hero_section.style.backgroundImage = `url("../resources/images/hero/hero_${i}.jpg")`
        if (i === 0 || i === 1) {
            hero_content.innerHTML = `  <h1 class="hero_content_${i}_h1 slide_effect">${contents[i].title_first} <span class="hero_content_${i}_span"> ${contents[i].span}</span> ${contents[i].title_second}</h1>
                                        <p class="hero_content_${i}_desc slide_effect">${contents[i].description} </p>
                                        <div id="hero_${i}_btn" class="hero_content_${i}_btn slide_effect">
                                            <a href="./category.html?type=${contents[i].type}" onclick="_takeToCategoryPageForCarousel(event, ${i})">${contents[i].btnText}</a>
                                        </div>
                                    `
        } else if (i === 2) {
            const type = ['technology','movie','html','css','js']
            let randomNumber = Math.floor(Math.random() * 5);
            hero_content.innerHTML = `  <h1 class="hero_content_${i}_h1 slide_effect">${contents[i].title_first} <span class="hero_content_${i}_span">${contents[i].span}</span> ${contents[i].title_second}</h1>
                                        <p class="hero_content_${i}_desc slide_effect">${contents[i].description} </p>
                                        <div id="hero_${i}_btn" class="hero_content_${i}_btn slide_effect">
                                            <a href="./category.html?type=${type[randomNumber]}" onclick="_takeToCategoryPageForCarousel(event,${randomNumber})">${contents[i].btnText}</a>
                                        </div>
                                    `
        }

    })
}

function _removeCarouselActiveAll() {
    for (let i = 0; i < carousel_indicators.length; i++){
        carousel_indicators[i].classList.remove('carousel_indicator_active')
    }
}

function _rotateCarouselEvery7Seconds() {
    const type = ['technology', 'movie', 'html', 'css', 'js']
    myInterval = setInterval(() => {

        slideIndex++
        if (slideIndex > 2) {
            slideIndex = 0
        }
        _removeCarouselActiveAll()
        carousel_indicators[slideIndex].classList.add('carousel_indicator_active')
        hero_section.style.backgroundImage = `url("../resources/images/hero/hero_${slideIndex}.jpg")`
        if (slideIndex === 0 || slideIndex === 1) {
            hero_content.innerHTML = `  <h1 class="hero_content_${slideIndex}_h1 slide_effect">${contents[slideIndex].title_first} <span class="hero_content_${slideIndex}_span">${contents[slideIndex].span}</span> ${contents[slideIndex].title_second}</h1>
                                        <p class="hero_content_${slideIndex}_desc slide_effect">${contents[slideIndex].description} </p>
                                        <div id="hero_${slideIndex}_btn" class="hero_content_${slideIndex}_btn slide_effect">
                                            <a href="./category.html?type=${type[slideIndex]}" onclick="_takeToCategoryPageForCarousel(event, ${slideIndex})">${contents[slideIndex].btnText}</a>
                                        </div>
                                    `
        } else if (slideIndex === 2) {
            let randomNumber = Math.floor(Math.random() * 5);
            hero_content.innerHTML = `  <h1 class="hero_content_${slideIndex}_h1 slide_effect">${contents[slideIndex].title_first} <span class="hero_content_${slideIndex}_span">${contents[slideIndex].span}</span> ${contents[slideIndex].title_second}</h1>
                                        <p class="hero_content_${slideIndex}_desc slide_effect">${contents[slideIndex].description} </p>
                                        <div id="hero_${slideIndex}_btn" class="hero_content_${slideIndex}_btn slide_effect">
                                            <a href="./category.html?type=${type[randomNumber]}" onclick="_takeToCategoryPageForCarousel(event,${randomNumber})">${contents[slideIndex].btnText}</a>
                                        </div>
                                    `
        }
        
    },7000)
}
_rotateCarouselEvery7Seconds()  

function _takeToCategoryPage() {
    // Get the current URL
    const currentUrl = window.location.href;

    // Get the base URL (without the file name)
    const baseUrl = currentUrl.substring(0, currentUrl.lastIndexOf('/'));

    // Construct the new URL
    const newUrl = `${baseUrl}/category.html?type=technology`;

    // Change the URL
    window.location.href = newUrl;

}



hero0Btn.addEventListener('click', _takeToCategoryPage)

function _takeToCategoryPageForCarousel(e, index) {
    console.log(e)
    e.stopPropagation()

    const categories = ['technology','movie', 'html', 'css', 'js']
    // Get the current URL
    const currentUrl = window.location.href;

    // Get the base URL (without the file name)
    const baseUrl = currentUrl.substring(0, currentUrl.lastIndexOf('/'));

    // Construct the new URL
    const newUrl = `${baseUrl}/category.html?type=${categories[index]}`;

    // Change the URL
    window.location.href = newUrl;

}

