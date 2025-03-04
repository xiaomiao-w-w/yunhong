const user = [
  {
    personAccount: "2024006365",
    password: "33333",
  },
  {
    personAccount: "2024007777",
    password: "11111",
  },
  {
    personAccount: "2024006666",
    password: "222222",
  },
];
//*先获取dom元素
const button = document.querySelector(".button");
const tip = document.querySelector(".tip");
button.onclick = function () {
  const personAccount = document.querySelector(".border1").value;
  const password = document.querySelector(".border2").value;
  const personAccountReg = /^\d{10}$/;

  if (!personAccountReg.test(personAccount)) {
    alert("账号格式错误");
    tip.textContent = "账号格式错误";
    return;
  }
  const message = user.find(
    (u) => u.personAccount === personAccount && u.password === password
  );
  if (message) {
    alert("登录成功");
    tip.innerHTML = `登录成功`;
    window.open("http://127.0.0.1:3000/学生管理系统/学生端/主页/stu-main-page.html");
  } else {
    alert("密码错误或者用户不存在");
    tip.textContent = "密码错误或者用户不存在";
  }
};
