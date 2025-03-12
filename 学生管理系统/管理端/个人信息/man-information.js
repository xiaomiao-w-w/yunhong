var nav = document.querySelector(".nav");   
var lis = document.querySelectorAll(".nav ul li");
var user = document.querySelector(".banner .user");

if (user && nav) {
    user.addEventListener('mouseover', () => {
        nav.style.display = 'block';
    })
}

user.addEventListener('mouseout', (event) => {
    if (!nav.contains(event.relatedTarget)) {
        nav.style.display = 'none';
    }
    if (user.click) {
        nav.style.display = 'block';
    }
});

nav.addEventListener('mouseover', () => {
    nav.style.display = 'block';
});

nav.addEventListener('mouseout', () => {
    nav.style.display = 'none';
})

var pre = document.querySelector(".left");
