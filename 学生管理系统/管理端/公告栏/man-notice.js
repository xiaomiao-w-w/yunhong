let input = document.querySelectorAll("input");
let add = document.querySelector(".add");
let main = document.querySelector(".main");
// 搜索
input[0].addEventListener("input", function () {
  let value = input[0].value;
  if (value == "") return;
  else {
    console.log('input事件')
    axios.get("http://127.0.0.1:3000/search", {
      params: {
        value: value
      }
    }).then(function (response) {
      main.innerHTML = response.data;
    }).catch(function (error) {
      console.log(error);
    });
  }
});
// 增加
let count = 0;
function Cycle(className, content) {
  document.querySelector(className).innerHTML += content;
}
add.addEventListener("click", function () {
  count++;
  Cycle(
    ".main",
    `<div class="part">
          <div class="time">
            <span class="day">${setDate()}</span>
            <span class="year">${setTime()}</span>
            </div>
            <input type="text" class="news">
            <button class="delete"></button>
            </div>
            `
  );
});
// 初始化时间
let time = document.querySelectorAll(".time");
let day = document.querySelectorAll(".day");
let year = document.querySelectorAll(".year");
let news = document.querySelectorAll(".news");
axios.get("http://127.0.0.1:3000/time")
  .then(function (response) {
    response.data.forEach((item) => {
      count++;
      Cycle(
        ".main",
        `<div class="part">
        <div class="time">
          <span class="day">${item.date}</span>
          <span class="year">${item.time}</span>
          </div>
          <input type="text" class="news" value='${item.content}'>
          <button class="delete"></button>
          </div>
          `
      );
    })
  })
  .catch(function (error) {
    console.log(error);
  });
// 设置新增部分的时间
// axios.get("http://127.0.0.1:3000/time", {})
//   .then(function (response) {
//     let lastPart = document.querySelector(".main .part:last-child");
//     lastPart.querySelector(".day").textContent = response.data.day;
//     lastPart.querySelector(".year").textContent = response.data.year;
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
function setDate() {
  let now = new Date();
  let day = now.getDate();
  if (day < 10) day = '0' + day.toString()
  let month = now.getMonth() + 1;
  let year = now.getFullYear();
  let hour = now.getHours();
  return `${year}-0${month}-${day}`
}
function setTime() {
  let now = new Date();
  let hour = now.getHours();
  if (hour < 10) hour = '0' + hour.toString()
  let minute = now.getMinutes();
  if (minute < 10) minute = '0' + minute.toString()
  return `${hour}:${minute}`
}
// 删除
main.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete")) {
    event.target.closest(".part").remove();
  }
});