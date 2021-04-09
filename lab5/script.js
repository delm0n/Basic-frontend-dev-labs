setTimeout(function() {
    $('#load').fadeOut('fast');
    }, 543);

let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let btn2 = document.getElementById("myBtn2");
let btn3 = document.getElementById("myBtn3");
let btn4 = document.getElementById("myBtn4");
let btn5 = document.getElementById("myBtnAll");
let span = document.getElementById("close");

let more1 = document.getElementById("myBtnMore1");
let more2 = document.getElementById("myBtnMore2");
let more3 = document.getElementById("myBtnMore3");

let nav1 =document.getElementById("nav1"),
nav2 =document.getElementById("nav2"),
nav3 =document.getElementById("nav3"),
nav4 =document.getElementById("nav4"),
nav5 =document.getElementById("nav5"),
nav6 =document.getElementById("nav6");

const mod = () => {
    modal.classList.remove('hidden');
    modal.classList.add('block');
    };

window.addEventListener('click', event => {if (event.target == modal) {
    modal.classList.remove('block');
    modal.classList.add('hidden');
  }});

btn.addEventListener('click', e => {mod()});
btn2.addEventListener('click', e => {mod()});
btn3.addEventListener('click', e => {mod()});
btn4.addEventListener('click', e => {mod()});
btn5.addEventListener('click', e => {mod()});
more1.addEventListener('click', e => {mod()});
more2.addEventListener('click', e => {mod()});
more3.addEventListener('click', e => {mod()});
nav1.addEventListener('click', e => {mod()});
nav2.addEventListener('click', e => {mod()});
nav3.addEventListener('click', e => {mod()});
nav4.addEventListener('click', e => {mod()});
nav5.addEventListener('click', e => {mod()});
nav6.addEventListener('click', e => {mod()});

span.addEventListener('click', event => {
    modal.classList.remove('block');
    modal.classList.add('hidden');
  });
