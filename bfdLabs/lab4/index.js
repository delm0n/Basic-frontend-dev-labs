let username = undefined;

let boller = false;
const button = document.getElementById('btn')
const button1 = document.getElementById('btn1')
const button2 = document.getElementById('btn2')
const button3 = document.getElementById('btn3')
const button4 = document.getElementById('btn4')

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
button2.addEventListener('click', e =>{
    NameMess();
})
button3.addEventListener('click', e =>{
    NameMess();
})
button4.addEventListener('click', e =>{
    NameMess();
})