function showTime() {
  const now = new Date(); // 获取当前时间
  const year = now.getFullYear(); // 年
  const month = now.getMonth() + 1; // 月（getMonth() 返回的是从 0 开始的索引，所以要加 1）
  const date = now.getDate(); // 日
  const hours = now.getHours(); // 小时
  const minutes = now.getMinutes(); // 分钟
  

  // 格式化时间，确保两位数显示
  const formattedTime = `${month.toString().padStart(2, '0')}-${date.toString().padStart(2, '0')} 
  ${year}`;

  // 获取所有 .time 元素并设置时间
  document.querySelectorAll('.time').forEach(element => {
      element.innerText = formattedTime;
  });
}

// 每秒更新时间
setInterval(showTime, 1000);
// 初始调用一次，立即显示时间
showTime();
