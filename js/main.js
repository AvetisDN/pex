window.addEventListener('load', function(e){
    if(window.pageYOffset >= window.innerHeight*.3 || window.innerWidth < 992) {
        document.querySelector('.top-nav').classList.add('scrolled');
    } else {
        document.querySelector('.top-nav').classList.remove('scrolled');
    }
});
window.addEventListener('resize', function(e){
    if(window.pageYOffset >= window.innerHeight*.3 || window.innerWidth < 992) {
        document.querySelector('.top-nav').classList.add('scrolled');
    } else {
        document.querySelector('.top-nav').classList.remove('scrolled');
    }
});
window.addEventListener('scroll', function(e){
    if(window.pageYOffset >= window.innerHeight*.3 && window.innerWidth >= 992) {
        document.querySelector('.top-nav').classList.add('scrolled');
    } else if (window.innerWidth >= 992) {
        document.querySelector('.top-nav').classList.remove('scrolled');
    }
});
document.querySelector('#menu-burger').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.top-menu').classList.toggle('show');
});