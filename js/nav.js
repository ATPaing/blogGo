const techNav = document.getElementById('tech_nav')
const movieNav = document.getElementById('movie_nav')

function _takeToCategoryPage(type) {

    // Get the current URL
    const currentUrl = window.location.href;

    // Get the base URL (without the file name)
    const baseUrl = currentUrl.substring(0, currentUrl.lastIndexOf('/'));

    // Construct the new URL
    const newUrl = `${baseUrl}/category.html?type=${type}`;

    // Change the URL
    window.location.href = newUrl;
}


techNav.addEventListener('click', () => {
    _takeToCategoryPage('technology');
});

movieNav.addEventListener('click', () => {
    _takeToCategoryPage('movie');
});
