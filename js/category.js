const categoryContents = document.getElementById('categoryContents')
const categoryTitle = document.getElementById('category_title')
const categoryWrapper = document.getElementById('categoryWrapper')
const root = document.querySelector(':root')

const categoryInfo = [
    {
        type: 'technology',
        startIndex: 0,
        endIndex: 13,
    },
    {
        type: 'movie',
        startIndex: 14,
        endIndex: 23
    },
    {
        type: 'html',
        startIndex: 24,
        endIndex: 35
    },
    {
        type: 'css',
        startIndex: 36,
        endIndex: 50
    },
    {
        type: 'js',
        startIndex: 51,
        endIndex: 59
    }
]


async function _getBlogsFromFirebase() {
    const type = _getTheValueFromURLSearchParam('type')
    if (type === 'technology') {
        try {
            root.style.setProperty('--category-bg-clr', 'linear-gradient(179.62deg, #9DD3FA 6.45%, #73A2E9 99.67%)')
            root.style.setProperty('--category-btn-clr', '#2196F3')
            root.style.setProperty('--category-title-clr', 'rgb(17, 117, 156)')
            categoryTitle.textContent = 'Tech Blogs!'
            const response = await fetch(`https://bloggo-be9c7-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json?orderBy="$key"&startAt="${categoryInfo[0].startIndex}"&endAt="${categoryInfo[0].endIndex}"`)
            const data = await response.json()
            for (let i = 0; i < categoryInfo[0].endIndex + 1; i++){
                categoryContents.innerHTML += `<div class="blog-card">
                                                    <img src="${data[i].image_link}" alt="">
                                                    <div class="like_view">
                                                        <p>Views: ${data[i].views}</p>
                                                        <p>Likes: ${data[i].likes}</p>
                                                    </div>
                                                    <h3>${data[i].title}</h3>
                                                    <p>${data[i].description}</p>
                                                    <div class="expand_btn">
                                                        <a href="./view.html?id=${data[i].id}">Expand</a>
                                                    </div>
                                                </div>
                                                `
            }
        }
        catch(error) {
            console.log(error)
        }
    } else if(type === 'movie'){
        try {
            root.style.setProperty('--category-bg-clr', 'linear-gradient(179.62deg, #E38B8B 6.45%, #BF6666 99.67%) ')
            root.style.setProperty('--category-btn-clr', '#fa4545')
            root.style.setProperty('--category-title-clr', '#e72828')
            categoryTitle.textContent = 'Movie Blogs!'
            const response = await fetch(`https://bloggo-be9c7-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json?orderBy="$key"&startAt="${categoryInfo[1].startIndex}"&endAt="${categoryInfo[1].endIndex}"`)
            const data = await response.json()
            for (let i = categoryInfo[1].startIndex; i < categoryInfo[1].endIndex + 1; i++){
                categoryContents.innerHTML += `<div class="blog-card">
                                                    <img src="${data[i].image_link}" alt="">
                                                    <div class="like_view">
                                                        <p>Views: ${data[i].views}</p>
                                                        <p>Likes: ${data[i].likes}</p>
                                                    </div>
                                                    <h3>${data[i].title}</h3>
                                                    <p>${data[i].description}</p>
                                                    <div class="expand_btn">
                                                        <a href="./view.html?id=${data[i].id}">Expand</a>
                                                    </div>
                                                </div>
                                                `
            }
        }
        catch(error) {
            console.log(error)
        }
    } else if (type === 'html') {
        try {
            root.style.setProperty('--category-bg-clr', 'linear-gradient(179.62deg, #fabf9d 6.45%, #ce7613 99.67%)')
            root.style.setProperty('--category-btn-clr', '#e48417')
            root.style.setProperty('--category-title-clr', '#f06529')
            categoryTitle.textContent = 'HTML Blogs!'
            const response = await fetch(`https://bloggo-be9c7-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json?orderBy="$key"&startAt="${categoryInfo[2].startIndex}"&endAt="${categoryInfo[2].endIndex}"`)
            const data = await response.json()
            for (let i = categoryInfo[2].startIndex; i < categoryInfo[2].endIndex + 1; i++){
                const blogCard = document.createElement('div');
                blogCard.classList.add('blog-card');

                const image = document.createElement('img');
                image.src = data[i].image_link;
                image.alt = '';

                const likeView = document.createElement('div');
                likeView.classList.add('like_view');
                likeView.innerHTML = `
                    <p>Views: ${data[i].views}</p>
                    <p>Likes: ${data[i].likes}</p>
                `;

                const title = document.createElement('h3');
                title.textContent = data[i].title;

                const description = document.createElement('p');
                description.textContent = data[i].description;

                const expandBtn = document.createElement('div');
                expandBtn.classList.add('expand_btn');
                expandBtn.innerHTML = `<a href="./view.html?id=${data[i].id}">Expand</a>`

                blogCard.appendChild(image);
                blogCard.appendChild(likeView);
                blogCard.appendChild(title);
                blogCard.appendChild(description);
                blogCard.appendChild(expandBtn);

                categoryContents.appendChild(blogCard);
            }
        }
        catch(error) {
            console.log(error)
        }
    } else if (type === 'css') {
        try {
            root.style.setProperty('--category-bg-clr', 'linear-gradient(179.62deg, #678EB3 6.45%, #2C3FA7 99.67%)')
            root.style.setProperty('--category-btn-clr', '#ce17df')
            root.style.setProperty('--category-title-clr', '#ce17df')
            categoryTitle.textContent = 'CSS Blogs!'
            const response = await fetch(`https://bloggo-be9c7-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json?orderBy="$key"&startAt="${categoryInfo[3].startIndex}"&endAt="${categoryInfo[3].endIndex}"`)
            const data = await response.json()
            for (let i = categoryInfo[3].startIndex; i < categoryInfo[3].endIndex + 1; i++){
                categoryContents.innerHTML += `<div class="blog-card">
                                                    <img src="${data[i].image_link}" alt="">
                                                    <div class="like_view">
                                                        <p>Views: ${data[i].views}</p>
                                                        <p>Likes: ${data[i].likes}</p>
                                                    </div>
                                                    <h3>${data[i].title}</h3>
                                                    <p>${data[i].description}</p>
                                                    <div class="expand_btn">
                                                        <a href="./view.html?id=${data[i].id}">Expand</a>
                                                    </div>
                                                </div>
                                                `
            }
        }
        catch (error) {
            console.log(error)
        }
    } else if (type === 'js') {
        try {
            root.style.setProperty('--category-bg-clr', 'linear-gradient(145.19deg, #F1D180 6.85%, #F9E0A0 45.69%, #E3C169 93.57%, #FFF2D1 93.57%, #DEAA23 93.57%)')
            root.style.setProperty('--category-btn-clr', '#f7b50f')
            root.style.setProperty('--category-title-clr', '#ffb700')
            categoryTitle.textContent = 'JS Blogs!'
            const response = await fetch(`https://bloggo-be9c7-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json?orderBy="$key"&startAt="${categoryInfo[4].startIndex}"&endAt="${categoryInfo[4].endIndex}"`)
            const data = await response.json()
            for (let i = categoryInfo[4].startIndex; i < categoryInfo[4].endIndex + 1; i++){
                categoryContents.innerHTML += `<div class="blog-card">
                                                    <img src="${data[i].image_link}" alt="">
                                                    <div class="like_view">
                                                        <p>Views: ${data[i].views}</p>
                                                        <p>Likes: ${data[i].likes}</p>
                                                    </div>
                                                    <h3>${data[i].title}</h3>
                                                    <p>${data[i].description}</p>
                                                    <div class="expand_btn">
                                                        <a href="./view.html?id=${data[i].id}">Expand</a>
                                                    </div>
                                                </div>
                                                `
            }
        }
        catch (error) {
            console.log(error)
        }
    }

}
_getBlogsFromFirebase()

function _getTheValueFromURLSearchParam(value) {
    // Get the search query from the URL
    const searchQuery = window.location.search;

    // Create a URLSearchParams object with the search query
    const queryParams = new URLSearchParams(searchQuery);

    // Get the value of the parameter query
    const queryValue = queryParams.get(value);

    return queryValue
}



