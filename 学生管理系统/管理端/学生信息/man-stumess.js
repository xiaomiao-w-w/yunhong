// 获取相关元素
const addStudentBtn = document.getElementById('addStudentBtn');
const viewChartBtn = document.getElementById('viewChartBtn');
const studentTableBody = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
const rightSection = document.querySelector('.right-section');

// 模拟添加学生数据到表格的函数
function addStudentToTable() {
    const student = {
        name: '张三',
        id: '2025001',
        direction: '数据科学',
        major: '计算机科学与技术'
    };
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const idCell = document.createElement('td');
    const directionCell = document.createElement('td');
    const majorCell = document.createElement('td');

    nameCell.textContent = student.name;
    idCell.textContent = student.id;
    directionCell.textContent = student.direction;
    majorCell.textContent = student.major;

    row.appendChild(nameCell);
    row.appendChild(idCell);
    row.appendChild(directionCell);
    row.appendChild(majorCell);

    studentTableBody.appendChild(row);
}

// “添加学生”按钮点击事件
addStudentBtn.addEventListener('click', addStudentToTable);

// “图标查看”按钮点击事件
viewChartBtn.addEventListener('click', function () {
    // 显示右边区域
    rightSection.style.display = 'block';

    // 饼状图数据
    const data = {
        labels: ['Java', 'CPU', '数据科学', 'C++', '其他'],
        datasets: [{
            label: '相关占比',
            data: [20, 30, 25, 15, 10],
            backgroundColor: ['red', 'orange', 'lightblue', 'lightcoral', 'lightgreen'],
            hoverOffset: 4
        }]
    };

    // 获取画布元素并创建图表实例
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: data
    });
});