const menubtn = document.getElementById('menu'),
sumbit = document.getElementById('btn'),
button = document.getElementById('btn2');
let username = undefined;
let boller = false;

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

menubtn.addEventListener('click', e =>{
    NameMess();
});

sumbit.addEventListener('click', e =>{
    NameMess();
});

button.addEventListener('click', e =>{
    NameMess();
});