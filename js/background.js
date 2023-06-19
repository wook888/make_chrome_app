const images = ["dog1.jpg", "dog2.jpg", "dog4.jpg", "cat1.jpeg", "cat2.png"];

const chosenImage = [Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
const rightBoxImage = document.querySelector("#rightBox");

bgImage.src = `img/${chosenImage}`;

rightBoxImage.style.backgroundImage = `url('img/${images[chosenImage]}')`;
