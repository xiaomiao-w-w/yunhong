<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>;
"Use strict"
let input = document.querySelectorAll("input");
let add = document.querySelector(".add");
let main = document.querySelector(".main");
let value = input[0].value;
// 搜索
input[0].addEventListener("input", function () {
    if (value == "") return;
    else {
        axios.get("http://127.0.0.1:3000/search", {
            params: {
                value: value
            }
        }).then(function (response) {
            main.value = response.data;
        }).catch(function (error) {
            console.log(error);
        });
    }
});
// 时间
let time = document.querySelector(".time");
let day = document.querySelector(".day");
let year = document.querySelector(".year");
time.addEventListener("click", function () {
    day.innerHTML = new Date().getDate();
    year.innerHTML = new Date().getFullYear();
})
// 增加
let count = 0;
function Cycle(className, content) {
    document.querySelector(className).innerHTML += content;
}
add.addEventListener("click", function () {
    count++;
        Cycle(
          ".main",
          `<div class="time">
            <span class="day"></span>
            <span class="year"></span>
            </div>
            <input type="text">
            <button class="delete"></button>`
        );
    }
);
// 删除
let delete_ = document.querySelectorAll("delete");
delete_[count].addEventListener("click", function () {
    main[count].parentNode.remove();
});