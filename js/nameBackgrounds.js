const nameImgList = [
  "밥먹기싫은흰둥이.gif",
  "밥먹는흰둥이.gif",
  "배부른흰둥이.gif",
  "졸린흰둥이.gif",
];
const nameBg = document.querySelector(".name-backgrounds");
const nameBgImage = document.createElement("img");

const chosenImg = nameImgList[Math.floor(Math.random() * nameImgList.length)]; //이미지 랜덤
nameBgImage.src = `img/${chosenImg}`; //이미지 경로

nameBg.prepend(nameBgImage);
