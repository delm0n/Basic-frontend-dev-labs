setTimeout(function() {
    $('#load').fadeOut('fast');
    }, 543);

let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let btn2 = document.getElementById("myBtn2");
let btn3 = document.getElementById("myBtn3");
let btn4 = document.getElementById("myBtn4");
let span = document.getElementById("close");

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


span.addEventListener('click', event => {
    modal.classList.remove('block');
    modal.classList.add('hidden');
  });
