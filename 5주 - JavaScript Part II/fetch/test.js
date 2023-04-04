let postData;

// 정보를 비동기로 가져옴. response를 json형식으로 만들고(비동기) 출력하는 코드
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    postData = data;
});


const postURL = "https://jsonplaceholder.typicode.com/todos";

fetch(postURL, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(postData),   // body를 넣을 때는 string으로 변환해야 됨.
})
  .then((response) => response.json())
  .then((data) => console.log(data));

  // test2와 다르게 결과가 제대로 안 나옴.
  // 기다리지 않고 바로 실행하다 보니까 postData가 없는 상태로 실행.