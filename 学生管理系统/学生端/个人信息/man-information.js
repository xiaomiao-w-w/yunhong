let info = document.querySelector('.info')
axios.get('http://localhost:3000/info').then((res) => {
    let data = res.data
    console.log(data)
    info.innerHTML = `<div class="info1">
            <div class="name">
                <label>姓名：</label>
                <input type="text" name="name" value="${data.name}">
            </div>
            <div class="sex">
                <label>性别：</label>
                <input type="text" name="sex" value='${data.gender}'>
            </div>
            <div class="xq">
                <label>校区：</label>
                <input type="text" name="campus" value="${data.campus}">
            </div>
            <div class="zzmm">
                <label>政治面貌：</label>
                <input type="text" name="politicalStatus" value="${data.politicalStatus}">
            </div>
            <div class="email">
                <label>邮箱：</label>
                <input type="text" name="email" value="${data.email}">
            </div>
        </div>
        <div class="info2">
            <div class="mz">
                <label>民族：</label>
                <input type="text" name="ethnicity" value="${data.ethnicity}">
            </div>
            <div class="phone">
                <label>电话：</label>
                <input type="text" name="phone" value="${data.phone}">
            </div>
            <div class="vx">
                <label>微信：</label>
                <input type="text" name="wechat" value="${data.wechat}">
            </div>
            <div class="qq">
                <label>QQ号：</label>
                <input type="text" name="qq" value="${data.qq}">
            </div>
        </div>`
}) 
let changeInfo = document.querySelector('.changeInfo')
let changePwd = document.querySelector('.changePwd')
let loginOut = document.querySelector('.loginOut')
let deleteAccount = document.querySelector('.deleteAccount')
loginOut.addEventListener('click',()=>{
//删除token
})