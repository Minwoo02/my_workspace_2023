const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"; //localStorage key 값 변수명

let toDos = []; // toDos가 업데이트 가능하도록 let으로 (if문에서 toDos를 다시 새로 가리키기 떄문), 3-2

function saveToDos() {
  //4
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //toDos를 string형태로 저장
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  //----------------
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //li.id가 toDo.id에 없는것만 걸러서 toDos array에 넣어라
  saveToDos(); //localstorage에 저장하는 함수실행
}

function paintToDo(newTodo) {
  //3-2
  const li = document.createElement("li");
  li.id = newTodo.id; //각각의 li에 id값을 id로 줌

  const span = document.createElement("span");
  span.innerText = newTodo.text;

  const button = document.createElement("button");
  button.innerText = "❌";

  button.addEventListener("click", deleteToDo);

  li.appendChild(span); //li안에 span넣기
  li.appendChild(button); //li안에 button넣기
  toDoList.appendChild(li);
}

function handleToDoSubmit(e) {
  //2
  e.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = ""; //submit 되면 input 안에 값 지워주기
  const newTodoObj = {
    text: newTodo,
    id: Date.now(), //delete할때 li를 id로 구분하기 위함
  };
  toDos.push(newTodoObj); //toDos array로 push
  paintToDo(newTodoObj);
  saveToDos(); //localstorage에 저장하는 함수실행
}

toDoForm.addEventListener("submit", handleToDoSubmit); //1

const savedToDos = localStorage.getItem(TODOS_KEY); //localstorage에 value값 가져오기

if (savedToDos !== null) {
  //새로고침해도 localstorage 값을 가져오기 위함
  const parsedToDos = JSON.parse(savedToDos); //string이었던 value값을 다시 array로
  toDos = parsedToDos; // 기존에 TODOS_KEY를 가져와서 toDos에 복원
  parsedToDos.forEach(paintToDo); //paintToDo 에서 array의 각각의 값에 대해 함수 paintToDo를 실행
}
