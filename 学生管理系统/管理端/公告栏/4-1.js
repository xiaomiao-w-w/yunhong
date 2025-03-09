
"Use strict"
let input = document.querySelectorAll("input");
let add = document.querySelector(".add");
let main = document.querySelector(".main");
// 搜索
input[0].addEventListener("input", function () {
    let value = input[0].value;
    if (value == "") return;
    else {
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
            <span class="day"></span>
            <span class="year"></span>
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
axios.get("http://127.0.0.1:3000/time", {})
  .then(function (response) {
    document.querySelectorAll(".part").forEach((item, index) => {
      item.querySelector(".day").textContent = response.data.day;
      item.querySelector(".year").textContent = response.data.year;
    });
  })
  .catch(function (error) {
    console.log(error);
  });
// 设置新增部分的时间
  axios.get("http://127.0.0.1:3000/time", {})
    .then(function (response) {
      let lastPart = document.querySelector(".main .part:last-child");
      lastPart.querySelector(".day").textContent = response.data.day;
      lastPart.querySelector(".year").textContent = response.data.year;
    })
    .catch(function (error) {
      console.log(error);
    });
// 删除
main.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete")) {
    event.target.closest(".part").remove();
  }
});