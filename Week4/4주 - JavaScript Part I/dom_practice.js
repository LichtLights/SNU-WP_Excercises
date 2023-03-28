// DOM 조작하기
let statusNum = 1;
const myParagraph = document.getElementById("my-paragraph");

myParagraph.innerHTML = "This is a new paragraph.";
myParagraph.style.color = "red";

// 이벤트 처리 방법
const addButton = document.getElementById("add-button");

addButton.addEventListener("click", function () {
  const actionStatus = document.getElementById("action-status");

  let clickStatus = document.createElement("div");
  clickStatus.setAttribute("class", "status");
  clickStatus.innerHTML = String(statusNum) + ": Button clicked!";
  statusNum += 1;

  actionStatus.appendChild(clickStatus);
});

const delButton = document.getElementById("del-button");

delButton.addEventListener("click", function () {
  const status = document.getElementsByClassName("status");
  status[status.length - 1].remove();
  statusNum -= 1;
});

const clrButton = document.getElementById("clr-button");

clrButton.addEventListener("click", function () {
  const status = document.getElementsByClassName("status");
  for(i = status.length; i > 0; i--) {
    status[i].remove();
  }
  statusNum = 0;
});