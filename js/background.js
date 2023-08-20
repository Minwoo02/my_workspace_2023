const imagesList = [
  "짱구집.png",
  "짱구배경.jpg",
  "짱구배경2.jpg",
  "짱구배경3.jpg",
  "짱구배경4.gif",
  "짱구잠옷디자인2.jpeg",
  "여름배경짱구.jpg",
];
const bg = document.querySelector(".background");
const bgImage = document.createElement("img");

const chosenImage = imagesList[Math.floor(Math.random() * imagesList.length)]; //이미지 랜덤
bgImage.src = `img/${chosenImage}`; //이미지 경로

bg.prepend(bgImage);
