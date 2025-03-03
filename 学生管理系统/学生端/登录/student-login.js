button.onclick=function(){
    const personmess=document.getElementsByClassName("border1").value;
    const password=document.getElementsByClassName("border2").value;
    const personmessreg=/^\d{10}$/;
    const user = [{                   
        personmess: '2024006365',
        password: '33333'
    },
    {  
        personmess: '2024007777',
        password: '11111'
    },
    {   
        personmess: '2024006666',
        password: '222222'
    },
    ]
    if(!personmess.test(personmess)){
        tip.textContent="账号格式错误";
        return;
    }
    const message=user.find(u=>u.personmess===personmess&&u.password===password);
    if(message){
        tip.innerHTML=`登录成功`
    }
    else{
        tip.textContent="密码错误或者用户不存在"
}
}