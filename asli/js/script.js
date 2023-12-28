// memperlakukan toggle pada class active (di dalam css)
const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
}



// membuat agar bisa meng klik di luar sidebar untuk menghilangkan sidebar toogle
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function (e) { 
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) { 
        navbarNav.classList.remove('active');
    }
})