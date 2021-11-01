// hover function
const navHover = (items) => {
    items.forEach((link) => {
        link.addEventListener("mouseenter", function () {
            if (!link.classList.contains("nav-active")) {
                this.classList.add("border-expand");
            }
        });

        link.addEventListener("mouseleave", function () {
            this.classList.replace("border-expand", "border-collapse");

            setTimeout(() => {
                this.classList.remove("border-collapse");
            }, 180);
        });
    });
}

navHover(document.querySelectorAll(".navbar-link"));
navHover(document.querySelectorAll(".menu-item"));

// components
// card
const moviesCard = (movies) => {
    let cards = "";
    movies.forEach(movie => {
        cards += `<div class="card">
                    <div class="card-img">
                        <img src="${movie.Poster}"
                            alt="poster">
                        <span class="ratings">6.6</span>
                    </div>
                    <p class="year-category">2015 / Fiction, Drama</p>
                    <h1 class="title">${movie.Title}</h1>
                </div>`
    });
    document.getElementById("movies-data").innerHTML = cards;
}

// API
const getAPI = (url) => {
    return fetch(url)
        .then(response => {
            if (!response.status == 200) {
                throw alert(response.status);
            }

            return response.json();

        })
        .then(response => {
            if (response.Response === "False") {
                throw alert(response.Error);
            }

            return response.Search;
        });
}

const getMovies = () => {
    const menuItem = document.querySelector(".movies .nav-menu");

    menuItem.addEventListener("click", async function (e) {
        e.preventDefault();

        // active indicator
        const listMenu = document.querySelectorAll(".menu-item");
        listMenu.forEach(menu => {
            if (menu.classList.contains("nav-active")) {
                menu.classList.remove("nav-active");
            }
        });

        // fetch data when menu clicked
        const activeClass = e.target.parentElement.classList;
        const menuTitle = e.target.innerText.toLowerCase();
        if (menuTitle == "avengers") {
            activeClass.add("nav-active");

            try {
                moviesData = await getAPI("http://www.omdbapi.com/?apikey=666c83eb&s=avengers");
                moviesCard(moviesData);
            } catch (err) {
                console.log(err);
            }
        }
        if (menuTitle == "harry potter") {
            activeClass.add("nav-active");

            try {
                moviesData = await getAPI("http://www.omdbapi.com/?apikey=666c83eb&s=harry potter");
                moviesCard(moviesData);
            } catch (err) {
                console.log(err);
            }
        }


    });
}

window.addEventListener("DOMContentLoaded", getMovies);