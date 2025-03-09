"use strict";

let news = document.querySelector(".news-content");
let developments = document.querySelector(".developments-content");
let models = document.querySelector(".models-content");

// 发起一次请求获取数据
axios({
  method: "get",
  url: "http://jsonplaceholder.typicode.com/posts",
})
  .then(function (response) {
    if (response.data.length >= 3) {
      // 分配数据到不同的 DOM 元素
      news.innerHTML = response.data[0].body;
      developments.innerHTML = response.data[1].body;
      models.innerHTML = response.data[2].body;
    } else {
      news.innerHTML = "数据不足，请稍后再试。";
      developments.innerHTML = "数据不足，请稍后再试。";
      models.innerHTML = "数据不足，请稍后再试。";
    }
  })
  .catch(function (error) {
    console.error(error);
    news.innerHTML = "加载失败，请稍后再试。";
    developments.innerHTML = "加载失败，请稍后再试。";
    models.innerHTML = "加载失败，请稍后再试。";
  });
