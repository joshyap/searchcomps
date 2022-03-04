const bing = document.getElementById('bing');
const duck = document.getElementById('duck')
const google = document.getElementById('google')

const compareResults = () => {
    let searchTerm = document.getElementById('searchTerm').value;
    console.log(searchTerm);
    
    bing.setAttribute("src", "./src/bing.png");
    bing.setAttribute("height", "960");
    bing.setAttribute("width", "590");

    duck.setAttribute("src", "./src/duck.png");
    duck.setAttribute("height", "960");
    duck.setAttribute("width", "590");

    google.setAttribute("src", "./src/google.png");
    google.setAttribute("height", "960");
    google.setAttribute("width", "590");
    
}