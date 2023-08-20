const changeBtn = document.getElementById("change-img");
const saveBtn = document.getElementById("save");
const textInput = document.getElementById("text");
const fileInput = document.getElementById("file");
const modeBtn = document.getElementById("mode-btn");
const destroyBtn = document.getElementById("destroy-btn");
const eraserBtn = document.getElementById("eraser-btn");
const colorOptions = Array.from(
  document.getElementsByClassName("color-option")
); //Array.from을 이용해 배열로 생성
const color = document.querySelector("#color");
const lineWidth = document.querySelector("#line-width");
const canvas = document.querySelector("canvas"); //hmtl에서 canvas를 js로 불러옴
const ctx = canvas.getContext("2d"); //context는 캔버스에 그림그릴때 사용하는 붓

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;
canvas.width = CANVAS_WIDTH; //css 작성한 후, js에서도 작성
canvas.height = CANVAS_HEIGHT;

ctx.lineWidth = lineWidth.value;
ctx.lineCap = "round";
let isPainting = false;
let isFilling = false;

function onMove(event) {
  if (isPainting) {
    //4.마우스의 궤적을 lineTo로 그림
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.moveTo(event.offsetX, event.offsetY); //1.처음에는 공중에서 마우스의 좌표를 따라다님
}
function startPainting(event) {
  //2.마우스를 클릭하면 mousedown 이벤트가 발생함.
  isPainting = true; //3.isPainting 이 true가 됨
}
function cancelPainting(event) {
  //5.마우스를 떼면 mouseup 이벤트가 발생함.
  isPainting = false; //6.ispainting 이 false가 됨.
  ctx.beginPath(); //굵기가 변화하면, 새로운 경로를 설정해줘야 전의 그림이 영향받지않음.
}

function onLineWidthChange(event) {
  ctx.lineWidth = event.target.value;
}
function onColorChange(event) {
  ctx.strokeStyle = event.target.value; //선 색상
  ctx.fillStyle = event.target.value; //채우기 색상
}
function onColorClick(event) {
  const colorValue = event.target.dataset.color;
  ctx.strokeStyle = colorValue; //선 색상을 colorValue 값으로
  ctx.fillStyle = colorValue; //채우기 색상을 colorValue 값으로
  color.value = colorValue; //선택한 색상 input:color에 표시
}

function onModeClick() {
  if (isFilling) {
    isFilling = false;
    modeBtn.innerText = "🩸 색전체 채우기";
  } else {
    isFilling = true;
    modeBtn.innerText = "✏ 펜";
  }
}

function onCanvasClick() {
  if (isFilling) {
    //isFilling 이면
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); //그림판 영역을 채우기
  }
}

function onDestroyClick() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

function onEraserClick() {
  ctx.strokeStyle = "white";
  isFilling = false;
  modeBtn.innerText = "✏ 펜";
}

function onFileChange(event) {
  const file = event.target.files[0]; //input에 multiple 속성 추가하면 파일이 여러개이기 때문에 [0]
  const url = URL.createObjectURL(file); //브라우저 메모리에 있는 파일 URL
  const image = new Image(); //==document.createElement("img")
  image.src = url;
  image.onload = function () {
    ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    fileInput.value = null;
  };
}

function onDoubleClick(event) {
  const text = textInput.value;
  if (text !== "") {
    ctx.save(); //현재 상태를 저장(색상, 스타일 등)
    const text = textInput.value;
    ctx.lineWidth = 1;
    ctx.font = "68px serif";
    ctx.fillText(text, event.offsetX, event.offsetY);
    ctx.restore(); //저장했던 버전으로 되돌림
  }
}

function onSaveClick() {
  const url = canvas.toDataURL();
  const a = document.createElement("a");
  a.href = url;
  a.download = "myDrawing.png";
  a.click();
}

function onChangeClick() {
  const shinImgList = ["짱구얼굴.jfif", "짱구얼굴2.jpg", "짱구얼굴3.jfif"];
  const image = new Image(); //==document.createElement("img")

  const chosenShinImg =
    shinImgList[Math.floor(Math.random() * shinImgList.length)];

  image.src = `img/${chosenShinImg}`;
  image.onload = function () {
    ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    fileInput.value = null;
  };
}

canvas.addEventListener("dblclick", onDoubleClick);
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting); //그림판 영역에서 벗어난 마우스 버그 해결
canvas.addEventListener("click", onCanvasClick);

lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);

colorOptions.forEach((color) => color.addEventListener("click", onColorClick)); //모든 color에 addeventlistener를 해줌. 단, foreach는 배열일때만

modeBtn.addEventListener("click", onModeClick);
destroyBtn.addEventListener("click", onDestroyClick);
eraserBtn.addEventListener("click", onEraserClick);
fileInput.addEventListener("change", onFileChange);
saveBtn.addEventListener("click", onSaveClick);
changeBtn.addEventListener("click", onChangeClick);
