
const rightBtn = document.querySelector(".right");
const leftBtn = document.querySelector(".left");


let currentMovie = 0 ;
function updateHero(){
    
document.getElementById("hero-img").src=movies[currentMovie].image;



};
document
.querySelector(".right")
.addEventListener("click",()=>{
    clearInterval(autoSlide);

    currentMovie++;
    if(currentMovie >= movies.length){
        currentMovie=0;
    }
    updateHero();
} );

document
.querySelector(".left")
.addEventListener("click",()=>{
    clearInterval(autoSlide);
    currentMovie--;
    if(currentMovie < 0){
        currentMovie = movies.length - 1;
    }

    updateHero();

});

function updateHero(){
    const hero = document.getElementById("hero-img");
    hero.classList.add("fade");

    setTimeout(()=>{
        hero.src = movies[currentMovie].image;
        document.getElementById("hero-title").innerHTML =
        movies[currentMovie].title;
        document.getElementById("hero-discription").textContent=
        movies[currentMovie].description;

        document.getElementById("hero-genre").textContent =
        movies[currentMovie].genre.join(" • ");
        hero.classList.remove("fade");

    },350);
}

let autoSlide = setInterval(() => {
    currentMovie++;
    if(currentMovie >= movies.length){
        currentMovie = 0;
    }
window.addEventListener("load", () => {
    updateHero();

    setInterval(() => {
        nextHero();
    }, 5000);
});

const bollywood = movies.filter(
    movie => movie.genre.includes( "Bollywood")

);
const bollywoodRow = document.getElementById("Bollywood");

bollywood.forEach(
    movie =>{
        bollywoodRow.innerHTML += `
        <div class="movie" data-title="${movie.title}">
                <img src="${movie.image}">
                <div class="movie-title">${movie.title}</div>
    </div>
`;
    });

const nextButtons = document.querySelectorAll(".next");


nextButtons.forEach(button => {    
     button.addEventListener("click",() =>{
        const row = button.parentElement.querySelector(".movie-row");

         row.scrollBy({
            left:"900",
            behavior:"smooth"
         })
        })
    })
    const prevButtons = document.querySelectorAll(".prev");


prevButtons.forEach(button => {    
     button.addEventListener("click",() =>{
        const row = button.parentElement.querySelector(".movie-row");

         row.scrollBy({
            left:"-900",
            behavior:"smooth"
         })
        })
    })

const hollywoodRow = document.getElementById("Hollywood");
const hollywood = movies.filter(
    movie => movie.genre.includes( "Hollywood")
);
hollywood.forEach(
    movie =>{
        hollywoodRow.innerHTML += `
        <div class="movie" data-title="${movie.title}">
                <img src="${movie.image}" >
                <div class="movie-title">${movie.title}</div>
    </div>
`;
    });

const seriesRow = document.getElementById("web-series");
const series = movies.filter(
    movie => movie.genre.includes("Web Series")
);
series.forEach(
    movie =>{
        seriesRow.innerHTML += `
        <div class="movie" data-title="${movie.title}">
                <img src="${movie.image}" >
                <div class="movie-title">${movie.title}</div>
    </div>
`;
    });
    movies.sort(() => Math.random() - 0.5);

const sci = document.getElementById("sci-fi");
const scifi = movies.filter(
    movie => movie.genre.includes("sci-fi")
);
scifi.forEach(
    movie =>{
        sci.innerHTML += `
        <div class="movie" data-title="${movie.title}">
                <img src="${movie.image}" >
                 <div class="movie-title">${movie.title}</div>
    </div>
`;
    });
    movies.sort(() => Math.random() - 0.5);

const actionRow = document.getElementById("action");
const action = movies.filter(
    movie => movie.genre.includes("Action")
);
action.forEach(
    movie =>{
        actionRow.innerHTML += `
        <div class="movie" data-title="${movie.title}">
                <img src="${movie.image}" >
                <div class="movie-title">${movie.title}</div>
    </div>
`;
    });
    movies.sort(() => Math.random() - 0.5);

const dramaRow = document.getElementById("drama");
const drama = movies.filter(
    movie => movie.genre.includes("drama")
);
drama.forEach(
    movie =>{
        dramaRow.innerHTML += `
        <div class="movie" data-title="${movie.title}">
                <img src="${movie.image}" >
                <div class="movie-title">${movie.title}</div>
    </div>
`;
    });
    movies.sort(() => Math.random() - 0.5);





    const searchBox = document.getElementById("searchBox");
    const hero = document.getElementById("hero");
    const allSliders = document.getElementById("allSliders");
    const searchResults = document.getElementById("searchResults");

    searchBox.addEventListener("input",()=>{
        const searchText = searchBox.value.trim().toLowerCase();
        if(searchText=== ""){
            hero.style.display = "";
            allSliders.style.display = "";
            searchResults.style.display="none";

            return;
        }
        hero.style.display = "none";
        allSliders.style.display = "none";
        searchResults.style.display = "block";
        
        const filteredMovies = movies.filter(movie =>
            movie.title.toLowerCase().includes(searchText)
        );
        console.log(filteredMovies);

            searchResults.innerHTML = "";

    filteredMovies.forEach(movie => {
  
            searchResults.innerHTML += `
    
            <div class="movie">
                <img src="${movie.image}">
                <h3 class="title">${movie.title}</h3>
            </div>
            
    
        
        `;
    

        })
    })
document.addEventListener("click",(e) =>{
    const card = e.target.closest(".movie");
    if(!card) return;
    localStorage.setItem(
        "selectedMovie",
        card.dataset.title
    );
    window.location.href = "watch.html"
});
const watchBtn = document.getElementById("watch-btn");

watchBtn.addEventListener("click", () =>{
    localStorage.setItem(
        "selectedMovie",
        movies[currentMovie].title
        
    );
    window.location.href = "watch.html";

});
updateHero();
