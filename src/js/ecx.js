let picofday = [
    'images/ecx2.jpg',
    'images/ecx3.jpg',
    'images/ecx4.jpg',
    'images/ecx5.jpg',
    'images/ecx6.jpg'
];
let date = new Date();
document.getElementById('ecx_logo').src = require('../../assets/ecxblack.svg');
document.getElementById('profile').src = picofday[Math.floor(Math.random() * picofday.length)];
