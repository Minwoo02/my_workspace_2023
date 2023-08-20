const nameBack = document.querySelector(".name-backgrounds");
const back = document.querySelector(".background");
const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector("#greeting");
const logout = document.querySelector(".logoutBtn");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault(); //브라우저 기본동작인 페이지 새로고침을 막아줌
  nameBack.classList.add(HIDDEN_CLASSNAME); //form 숨기기
  back.classList.remove(HIDDEN_CLASSNAME);
  const usernmae = loginInput.value;
  localStorage.setItem(USERNAME_KEY, usernmae);
  paintGreetings(usernmae);
}

const date = new Date();
const hours = date.getHours();

function paintGreetings(username) {
  document.title = `${username}'s Workspace`;
  if (5 <= hours && hours < 12) {
    greeting.innerText = `Good Morning, ${username}!`;
  } else if (12 <= hours && hours < 18) {
    greeting.innerText = `Good Afternoon, ${username}!`;
  } else if (18 <= hours && hours < 24) {
    greeting.innerText = `Good Evening, ${username}!`;
  } else {
    greeting.innerText = `Good Night, ${username}!`;
  }
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  nameBack.classList.remove(HIDDEN_CLASSNAME);
  back.classList.add(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}

function handleLogout() {
  localStorage.removeItem(USERNAME_KEY);
  localStorage.removeItem("todos");
  window.location.reload();
}

logout.addEventListener("click", handleLogout);
