// create objects of all books and add to collection array
const ahs = {
  title: "American Horror Story",
  description: "Drama, USA, 45 min",
  paragraph:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat rem, reprehenderit, aperiam laborum dicta optio corporis dolorem, fuga ad tempore sequi. Officiis enim distinctio natus eaque delectus fuga sequi iure.",
  poster: "images/posters/american-horror-stories-poster.JPG"
};

const atypical = {
  title: "Atypical",
  description: "Drama, USA, 45 min",
  paragraph:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat rem, reprehenderit, aperiam laborum dicta optio corporis dolorem, fuga ad tempore sequi. Officiis enim distinctio natus eaque delectus fuga sequi iure.",
  poster: "images/posters/atypical-poster.JPG"
};

const got = {
  title: "Game of Thrones",
  description: "Thriller, UK, 40 min",
  paragraph:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat rem, reprehenderit, aperiam laborum dicta optio corporis dolorem, fuga ad tempore sequi. Officiis enim distinctio natus eaque delectus fuga sequi iure.",
  poster: "images/posters/game-of-thrones-poster.JPG"
};

const loki = {
  title: "Loki",
  description: "Action, USA, 40 min",
  paragraph:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat rem, reprehenderit, aperiam laborum dicta optio corporis dolorem, fuga ad tempore sequi. Officiis enim distinctio natus eaque delectus fuga sequi iure.",
  poster: "images/posters/loki-poster.JPG"
};

const manifest = {
  title: "Manifest",
  description: "Mystery/Drama, USA, 40 min",
  paragraph:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat rem, reprehenderit, aperiam laborum dicta optio corporis dolorem, fuga ad tempore sequi. Officiis enim distinctio natus eaque delectus fuga sequi iure.",
  poster: "images/posters/manifest-poster.JPG"
};

const ram = {
  title: "Rick and Morty",
  description: "Comedy/Cartoon, USA, 20 min",
  paragraph:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat rem, reprehenderit, aperiam laborum dicta optio corporis dolorem, fuga ad tempore sequi. Officiis enim distinctio natus eaque delectus fuga sequi iure.",
  poster: "images/posters/rick-and-morty-poster.JPG"
};

const sl = {
  title: "Sex Life",
  description: "Comedy, USA, 30 min",
  paragraph:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat rem, reprehenderit, aperiam laborum dicta optio corporis dolorem, fuga ad tempore sequi. Officiis enim distinctio natus eaque delectus fuga sequi iure.",
  poster: "images/posters/sex-life-poster.JPG"
};

const ts = {
  title: "The Sopranos",
  description: "Comedy, USA/Italy, 50 min",
  paragraph:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat rem, reprehenderit, aperiam laborum dicta optio corporis dolorem, fuga ad tempore sequi. Officiis enim distinctio natus eaque delectus fuga sequi iure.",
  poster: "images/posters/the-sopranos-poster.JPG"
};

const vr = {
  title: "Virgin River",
  description: "Drama, USA, 45 min",
  paragraph:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat rem, reprehenderit, aperiam laborum dicta optio corporis dolorem, fuga ad tempore sequi. Officiis enim distinctio natus eaque delectus fuga sequi iure.",
  poster: "images/posters/virgin-river-poster.JPG"
};

const wd = {
  title: "Walking Dead",
  description: "Thriller/Action, USA, 40 min",
  paragraph:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat rem, reprehenderit, aperiam laborum dicta optio corporis dolorem, fuga ad tempore sequi. Officiis enim distinctio natus eaque delectus fuga sequi iure.",
  poster: "images/posters/walking-dead-poster.JPG"
};

const wl = {
  title: "White Lotus",
  description: "Family, USA, 30 min",
  paragraph:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat rem, reprehenderit, aperiam laborum dicta optio corporis dolorem, fuga ad tempore sequi. Officiis enim distinctio natus eaque delectus fuga sequi iure.",
  poster: "images/posters/white-lotus-poster.JPG"
};

let allSeries = [ahs, atypical, got, loki, manifest, ram, sl, ts, vr, wd, wl];

// create queryselectors for registration form
const submitBtn = document.querySelector("#registration-form-submit");
const userInput = document.querySelector("#registration-form-input");

// selectors for recomended card
const recCardTitle = document.querySelector("#recomended-title");
const recCardDesc = document.querySelector("#recomended-description");
const recCardPara = document.querySelector("#recomended-paragraph");
const recCardPoster = document.querySelector("#recomended-poster");

// EVENT LISTENER FOR RECOMMENDATIONS
submitBtn.addEventListener("click", (e) => {
  let input = userInput.value.trim();

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input) === false) {
    alert("Please enter a valid email address.");
  } else {
    // if input is not empty, generate random number from 1 to 11
    //  and change to variable nth
    let nth = Math.floor(Math.random() * allSeries.length);
    // assign details to card
    recCardTitle.innerHTML = allSeries[nth].title;
    recCardDesc.innerHTML = allSeries[nth].description;
    recCardPara.innerHTML = allSeries[nth].paragraph;
    recCardPoster.src = allSeries[nth].poster;
    // make card visible
    document.querySelector("#suggested-show").style.display = "flex";

    // remove text from input field
    userInput.style.display = "none";
    submitBtn.value = "Please give me another suggestion.";
    e.preventDefault();
  }
});
