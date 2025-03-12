
//*先获取dom元素
const button = document.querySelector(".button");
const tip = document.querySelector(".tip");

button.onclick = function () {
    // 清除之前的提示信息
    tip.textContent = "";

    const personAccount = document.querySelector(".border1").value.trim();
    const password = document.querySelector(".border2").value;
    const personAccountReg = /^\d{10}$/;

    if (!personAccountReg.test(personAccount)) {
        alert("账号格式错误");
        tip.textContent = "账号格式错误";
        return;
    }

    // 发送 POST 请求到服务器进行验证
    axios.post("https://mihong.natappvip.cc/auth/token", {
        username: personAccount,
        password: password
    })
    .then(response => {
        console.log("登录成功:", response.data);
        alert("登录成功");
        tip.textContent = "登录成功";

        // 如果需要跳转到新页面
        window.open("http://127.0.0.1:3000/管理端/主页/man-main-page.html");
    })
    .catch(err => {
        console.error("登录失败:", err);
        alert("密码错误或者用户不存在");
        tip.textContent = "密码错误或者用户不存在";
    });
};
