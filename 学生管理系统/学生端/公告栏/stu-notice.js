let notice = document.querySelector('.box2')
axios.get("http://127.0.0.1:3000/time")
  .then(function (response) {
    response.data.forEach((item) => {
      notice.innerHTML += `<div class="box2-1">
                <div class="border1">
                        <div class="time">${item.date}</div>
                    </div>
                    <div class="border2">${item.content}</div>
            </div>
                `
    })
  })
  .catch(function (error) {
    console.log(error);
  });