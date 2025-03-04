 var xhr = new XMLHttpRequest();
 xhr.open('GET', 'YOUR_BACKEND_API_URL', true); // 输入接口网址
 xhr.setRequestHeader('Content - type', 'application/json');
 xhr.onreadystatechange = function () {
     if (xhr.readyState === 4 && xhr.status === 200) {
         var data = xhr.responseText;
         document.getElementById('text').innerHTML = data;
     }
 };
 xhr.send();