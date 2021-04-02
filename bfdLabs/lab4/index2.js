let username = undefined;

let boller = false;
const button = document.getElementById('btn');
const buttonF = document.getElementById('btn2');

const button1 = document.getElementById('btnmap');
const button2 = document.getElementById('btnmore');
const button3 = document.getElementById('btnmap1');
const button4 = document.getElementById('btnmap2');
const button5 = document.getElementById('btnmap3');
const button6 = document.getElementById('btnmap4');
const button7 = document.getElementById('btnmap5');
const button8 = document.getElementById('btnmap6');
const button9 = document.getElementById('btnmap7');
const button10 = document.getElementById('btnmap8');

const button11 = document.getElementById('btnmore1');
const button12 = document.getElementById('btnmore2');
const button13 = document.getElementById('btnmore3');
const button14 = document.getElementById('btnmore4');
const button15 = document.getElementById('btnmore5');
const button16 = document.getElementById('btnmore6');
const button17 = document.getElementById('btnmore7');
const button18 = document.getElementById('btnmore8');


const NameMess =() =>{
    if (boller === false)
    {
        username = prompt('Введите имя', username);
        if (username == undefined || username=='') {
            alert('Введите имя!')
        }
        else{
        alert('Я это сделал, а ' + username +  ' тебе от меня совет: “ Поступай правильно — поступай в ВятГУ!”.')
        boller = true; }
    }
    else {
        alert('Я это сделал, а ' + username +  ' тебе от меня совет: “ Поступай правильно — поступай в ВятГУ!”.')
    }
    }
    
    
    button.addEventListener('click', e =>{
        NameMess();
    })
    button1.addEventListener('click', e =>{
        NameMess();
    })
    buttonF.addEventListener('click', e =>{
        NameMess();
    })
    button2.addEventListener('click', e =>{
        NameMess();
    })
    button3.addEventListener('click', e =>{
        NameMess();
    })
    button4.addEventListener('click', e =>{
        NameMess();
    })
    button5.addEventListener('click', e =>{
        NameMess();
    })
    button6.addEventListener('click', e =>{
        NameMess();
    })
    button7.addEventListener('click', e =>{
        NameMess();
    })
    button8.addEventListener('click', e =>{
        NameMess();
    })
    button9.addEventListener('click', e =>{
        NameMess();
    })
    button10.addEventListener('click', e =>{
        NameMess();
    })
    button11.addEventListener('click', e =>{
        NameMess();
    })
    button12.addEventListener('click', e =>{
        NameMess();
    })
    button13.addEventListener('click', e =>{
        NameMess();
    })
    button14.addEventListener('click', e =>{
        NameMess();
    })
    button15.addEventListener('click', e =>{
        NameMess();
    })
    button16.addEventListener('click', e =>{
        NameMess();
    })
    button17.addEventListener('click', e =>{
        NameMess();
    })
    button18.addEventListener('click', e =>{
        NameMess();
    })