const techLeftSection = document.getElementById('tech-left')
const techRightSection = document.getElementById('tech-right')
async function _grabFirstThreeTechContent() {
    try {
        const response = await fetch('https://bloggo-be9c7-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json?orderBy="$key"&startAt="0"&endAt="2"')
        const data = await response.json()
        _generateTechLeftContets(data)
        _generateTechRightContent(data) 
    }
    catch(error) {
        console.log(error)
    }
    
}

_grabFirstThreeTechContent()

function _generateTechLeftContets(techBlogArr) {
    techLeftSection.innerHTML = `  <div class="tech-left-article">
                                    <div class="tech-left-article__image">
                                        <img src="${techBlogArr[0].image_link}" alt=""/>
                                        <div class="tech-left-article__image__desc">
                                            <p>Views: <span>${techBlogArr[0].views}</span></p>
                                            <p>Likes: <span>${techBlogArr[0].likes}</span></p>
                                        </div>
                                    </div>
                                    
                                    <div class="tech-left-article__content">
                                        <h2 class="tech-left-article__content__title">${techBlogArr[0].title}</h2>
                                        <p class="tech-left-article__content__desc">${techBlogArr[0].description}</p>
                                        <div class="tech-left-btns">
                                            <div class="tech-left-btns__viewBtn">
                                                <a href="./view.html?id=1">View full blog</a>
                                            </div>
                                            <button class="tech-left-btns__shareBtn">
                                                <p>Share</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="tech-left-article">
                                    <div class="tech-left-article__image">
                                        <img src="${techBlogArr[1].image_link}" alt=""/>
                                        <div class="tech-left-article__image__desc">
                                            <p>Views: <span>${techBlogArr[1].views}</span></p>
                                            <p>Likes: <span>${techBlogArr[1].likes}</span></p>
                                        </div>
                                    </div>
                                    
                                    <div class="tech-left-article__content">
                                        <h2 class="tech-left-article__content__title">${techBlogArr[1].title}</h2>
                                        <p class="tech-left-article__content__desc">${techBlogArr[1].description}</p>
                                        <div class="tech-left-btns">
                                            <div class="tech-left-btns__viewBtn">
                                                <a href="./view.html?id=2">View full blog</a>
                                            </div>
                                            <button class="tech-left-btns__shareBtn">
                                                <p>Share</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>`
}

function _generateTechRightContent(techBlogArr) {
    techRightSection.innerHTML = `  <div class="tech-right-article">
                                        <div class="tech-right-article__image">
                                            <img src="${techBlogArr[2].image_link}" alt=""/>
                                            <div class="tech-right-article__image__desc">
                                                <p>Views: <span>${techBlogArr[2].views}</span></p>
                                                <p>Likes: <span>${techBlogArr[2].likes}</span></p>
                                            </div>
                                        </div>
                                        
                                        <div class="tech-right-article__content">
                                            <h2 class="tech-right-article__content__title">${techBlogArr[2].title}</h2>
                                            <p class="tech-right-article__content__desc">${techBlogArr[2].description}</p>
                                            <div class="tech-right-btns">
                                                <div class="tech-right-btns__viewBtn">
                                                    <a href="./view.html?id=3">View full blog</a>
                                                </div>
                                                <button class="tech-right-btns__shareBtn">
                                                    <p>Share</p>
                                                </button>
                                            </div>
                                        </div>
                                    </div>`
}