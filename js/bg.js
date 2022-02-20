const images = [
  "bg_01.jpeg",
  "bg_02.jpeg",
  "bg_03.jpeg",
  "bg_04.jpeg",
  "bg_05.jpeg",
  "bg_06.jpeg",
  "bg_07.jpeg"
];
const chosenImage = images[Math.floor(Math.random() * images.length)];
document.body.style.backgroundImage = `url('img/${chosenImage}')`;
