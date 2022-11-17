
let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function () {
    let progressHeight =  (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}

window.sr = ScrollReveal()

sr.reveal('.navbar', {
duration: 2000,
origin: 'bottom'
});

sr.reveal('.first', {
duration: 2000,
origin: 'left',
distance: '100px',
delay: 500
});

sr.reveal('.second', {
duration: 2000,
origin: 'bottom',
distance: '100px',
delay: 500
});

sr.reveal('.third', {
duration: 2000,
origin: 'bottom',
distance: '100px',
delay: 500
});

sr.reveal('.hero', {
duration: 2000,
origin: 'right',
distance: '100px',

});

sr.reveal('.tombol2', {
duration: 2000,
origin: 'left',
distance: '100px',
delay: 500
});

sr.reveal('.sosmed img', {
duration: 2000,
origin: 'bottom',
distance: '100px',
delay: 500
});

sr.reveal('.title', {
duration: 2000,
origin: 'left',
distance: '100px',
delay: 300
});

sr.reveal('.ourservice-img', {
duration: 2000,
origin: 'bottom',
distance: '100px',
delay: 500
});

sr.reveal('.deskripsi1', {
duration: 2000,
origin: 'left',
distance: '100px',
delay: 500
});

sr.reveal('.deskripsi2', {
duration: 2000,
origin: 'bottom',
distance: '100px',
delay: 700
});

sr.reveal('.tombol3', {
duration: 2000,
origin: 'right',
distance: '50px',
delay: 1000
});

sr.reveal('.title2', {
duration: 2000,
origin: 'right',
distance: '100px',
delay: 500
});

sr.reveal('.gallery1', {
duration: 2000,
origin: 'right',
distance: '100px',
delay: 500
});

sr.reveal('.gallery2', {
duration: 2000,
origin: 'left',
distance: '100px',
delay: 500
});

sr.reveal('.gallery3', {
duration: 2000,
origin: 'right',
distance: '100px',
delay: 500
});

sr.reveal('.tool-text', {
duration: 2000,
origin: 'bottom',
distance: '100px',
delay: 500
});

sr.reveal('.tools1', {
duration: 2000,
origin: 'left',
distance: '100px',
delay: 300
});

sr.reveal('.tools2', {
duration: 2000,
origin: 'right',
distance: '100px',
delay: 300
});

sr.reveal('.ukuran', {
duration: 2000,
origin: 'bottom',
distance: '100px',
delay: 300
});

$('.navbar-nav .nav-link').click(function(){
$('.navbar-nav .nav-link').removeClass('active');
$(this).addClass('active');
});



