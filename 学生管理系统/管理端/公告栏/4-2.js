<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>;
("Use strict");
let news = document.querySelector(".news-content");
let developments = document.querySelector(".developments-content");
let models = document.querySelector(".models-content");
news.addEventListener(function(){
    axios({
        method: 'get',
        url: "http://jsonplaceholder.typicode.com/posts"
    }).then(function (response) {
        console.log(response);
        news.innerHTML = response.data[0].body;
    }).catch(function (error) {
        console.log(error);
    }).finally(function () {
    })
})
developments.addEventListener(function () {
  axios({
    method: "get",
    url: "http://jsonplaceholder.typicode.com/posts",
  })
    .then(function (response) {
      console.log(response);
      developments.innerHTML = response.data[0].body;
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {});
});
models.addEventListener(function () {
  axios({
    method: "get",
    url: "http://jsonplaceholder.typicode.com/posts",
  })
    .then(function (response) {
      console.log(response);
      models.innerHTML = response.data[0].body;
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {});
});