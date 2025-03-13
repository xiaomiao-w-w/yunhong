const button = document.querySelector(".button");
let isValid = true;

button.onclick = function () {
    const personAccount = document.querySelector(".border1").value;
    const password = document.querySelector(".border2").value;
    const confirm = document.querySelector(".border3").value;
    const personAccountReg = /^\d{10}$/;
    const personAccountError = document.querySelector(".personAccountError");
    const passwordError = document.querySelector(".passwordError");
    const confirmError = document.querySelector(".confirmError");

    if (!personAccountReg.test(personAccount)) {
        alert("账号格式错误");
        personAccountError.textContent = "账号格式错误";
        return;
    }

    if (password === "") {
        passwordError.textContent = "密码不能为空";
        isValid = false;
    } else if (password.length < 6) {
        passwordError.textContent = "密码长度至少为6位";
        isValid = false;
    }

    if (confirm === "") {
        confirmError.textContent = "确认密码不能为空";
        isValid = false;
    } else if (password !== confirm) {
        confirmError.textContent = "两次输入的密码不一致";
        isValid = false;
    }

    if (isValid) {
        alert("注册成功");
        window.open("./学生管理系统/学生端/主页/stu-main-page.html");
    }
};
