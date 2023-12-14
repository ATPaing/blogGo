const jsLeftSection = document.getElementById('js-left')
const jsRightSection = document.getElementById('js-right')
async function _grabFirstJSTechContent() {
    try {
        const response = await fetch('https://bloggo-be9c7-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json?orderBy="$key"&startAt="51"&endAt="53"')
        const data = await response.json()
        _generateJSLeftContets(data)
        _generateJSRightContent(data) 
    }
    catch(error) {
        console.log(error)
    }
    
}

_grabFirstJSTechContent()

function _generateJSLeftContets(jsBlogArr) {
    jsLeftSection.innerHTML = `  <div class="js-left-article">
                                    <div class="js-left-article__image">
                                        <img src="${jsBlogArr[51].image_link}" alt=""/>
                                        <div class="js-left-article__image__desc">
                                            <p>Views: <span>${jsBlogArr[51].views}</span></p>
                                            <p>Likes: <span>${jsBlogArr[51].likes}</span></p>
                                        </div>
                                    </div>
                                    
                                    <div class="js-left-article__content">
                                        <h2 class="js-left-article__content__title">${jsBlogArr[51].title}</h2>
                                        <p class="js-left-article__content__desc">${jsBlogArr[51].description}</p>
                                        <div class="js-left-btns">
                                            <div class="js-left-btns__viewBtn">
                                                <a href="./view.html?id=52">View full blog</a>
                                            </div>
                                            <button class="js-left-btns__shareBtn">
                                                <p>Share</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="js-left-article">
                                    <div class="js-left-article__image">
                                        <img src="${jsBlogArr[52].image_link}" alt=""/>
                                        <div class="js-left-article__image__desc">
                                            <p>Views: <span>${jsBlogArr[52].views}</span></p>
                                            <p>Likes: <span>${jsBlogArr[52].likes}</span></p>
                                        </div>
                                    </div>
                                    
                                    <div class="js-left-article__content">
                                        <h2 class="js-left-article__content__title">${jsBlogArr[52].title}</h2>
                                        <p class="js-left-article__content__desc">${jsBlogArr[52].description}</p>
                                        <div class="js-left-btns">
                                            <div class="js-left-btns__viewBtn">
                                                <a href="./view.html?id=53">View full blog</a>
                                            </div>
                                            <button class="js-left-btns__shareBtn">
                                                <p>Share</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>`
}

function _generateJSRightContent(jsBlogArr) {
    jsRightSection.innerHTML = `  <div class="js-right-article">
                                        <div class="js-right-article__image">
                                            <img src="${jsBlogArr[53].image_link}" alt=""/>
                                            <div class="js-right-article__image__desc">
                                                <p>Views: <span>${jsBlogArr[53].views}</span></p>
                                                <p>Likes: <span>${jsBlogArr[53].likes}</span></p>
                                            </div>
                                        </div>
                                        
                                        <div class="js-right-article__content">
                                            <h2 class="js-right-article__content__title">${jsBlogArr[53].title}</h2>
                                            <p class="js-right-article__content__desc">${jsBlogArr[53].description}</p>
                                            <div class="js-right-btns">
                                                <div class="js-right-btns__viewBtn">
                                                    <a href="./view.html?id=54">View full blog</a>
                                                </div>
                                                <button class="js-right-btns__shareBtn">
                                                    <p>Share</p>
                                                </button>
                                            </div>
                                        </div>
                                    </div>`
}