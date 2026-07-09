const selectedMovie = localStorage.getItem("selectedMovie");
 const movie = window.movies.find(
    m => m.title === selectedMovie
 );
document.getElementById("player").src = movie.video;

document.getElementById("player").src =
movie.video;
