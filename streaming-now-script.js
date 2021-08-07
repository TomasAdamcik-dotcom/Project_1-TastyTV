// CHANGE STREAMING BASED ON CURRENT TIME------------------------------
// STREAMING-NOW OBJECTS

const dexter = {
  title: "Dexter",
  description: "USA, (2008-2016) 45 min",
  genre: "Thriller / Mystery",
  image: "images/streaming-now/dexter.jfif"
};

const friends = {
  title: "Friends",
  description: "USA, (1994-2004) 22 min",
  genre: "Comedy / Romantic",
  image: "images/streaming-now/friends.jpg"
};

const himym = {
  title: "How I Met Your Mother",
  description: "USA, (2001-2011) 25 min",
  genre: "Comedy / Romantic",
  image: "images/streaming-now/himym.jfif"
};

const itCrowd = {
  title: "IT Crowd",
  description: "UK, (2005-2009) 25 min",
  genre: "Comedy",
  image: "images/streaming-now/it-crowd.jfif"
};

const poirot = {
  title: "Poirot",
  description: "UK, (1989-2013) 40 min",
  genre: "Crimi",
  image: "images/streaming-now/poirot.jfif"
};

const tbbt = {
  title: "The Big Bang Theory",
  description: "USA, (2008-2019) 25 min",
  genre: "Comedy",
  image: "images/streaming-now/tbbt.jfif"
};

// add streaming objects to array
let streamingNow = [dexter, friends, himym, itCrowd, poirot, tbbt];

// create queryselectors
const streamingTitle = document.querySelector("#streaming-title");
const streamingImage = document.querySelector("#streaming-image");
const streamingGenre = document.querySelector("#streaming-genre");
const streamingDescription = document.querySelector("#streaming-description");

window.addEventListener("load", () => {
  // get current time using Date and getTime
  let hour = new Date().getHours();

  // Select the right series according to current time
  if (hour === 0 || hour === 1 || hour === 12 || hour === 13) {
    streamingTitle.innerHTML = streamingNow[0].title;
    streamingGenre.innerHTML = streamingNow[0].genre;
    streamingDescription.innerHTML = streamingNow[0].description;
    streamingImage.src = streamingNow[0].image;
  } else if (hour === 2 || hour === 3 || hour === 14 || hour === 15) {
    streamingTitle.innerHTML = streamingNow[1].title;
    streamingGenre.innerHTML = streamingNow[1].genre;
    streamingDescription.innerHTML = streamingNow[1].description;
    streamingImage.src = streamingNow[1].image;
  } else if (hour === 4 || hour === 5 || hour === 16 || hour === 17) {
    streamingTitle.innerHTML = streamingNow[2].title;
    streamingGenre.innerHTML = streamingNow[2].genre;
    streamingDescription.innerHTML = streamingNow[2].description;
    streamingImage.src = streamingNow[2].image;
  } else if (hour === 6 || hour === 7 || hour === 18 || hour === 19) {
    streamingTitle.innerHTML = streamingNow[3].title;
    streamingGenre.innerHTML = streamingNow[3].genre;
    streamingDescription.innerHTML = streamingNow[3].description;
    streamingImage.src = streamingNow[3].image;
  } else if (hour === 8 || hour === 9 || hour === 20 || hour === 21) {
    streamingTitle.innerHTML = streamingNow[4].title;
    streamingGenre.innerHTML = streamingNow[4].genre;
    streamingDescription.innerHTML = streamingNow[4].description;
    streamingImage.src = streamingNow[4].image;
  } else {
    streamingTitle.innerHTML = streamingNow[5].title;
    streamingGenre.innerHTML = streamingNow[5].genre;
    streamingDescription.innerHTML = streamingNow[5].description;
    streamingImage.src = streamingNow[5].image;
  }
});
