        var xhr = new XMLHttpRequest();
       xhr.open('GET', 'YOUR_BACKEND_API_URL', true);   // 输入接口网址
       xhr.setRequestHeader('Content - type', 'application/json');
       xhr.onreadystatechange = function () {
           if (xhr.readyState === 4 && xhr.status === 200) {
               var data = JSON.parse(xhr.responseText);
               document.getElementById('text1').innerHTML = data.text1;
               document.getElementById('text2').innerHTML = data.text2;
               document.getElementById('text3').innerHTML = data.text3;
               document.getElementById('text4').innerHTML = data.text4;
           }
       };
       xhr.send();