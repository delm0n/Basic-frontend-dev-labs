let username = undefined;

let boller = false;
const buttons = document.getElementById('btn')

buttons.addEventListener('click', e =>{
    if (boller === false)
{
    username = prompt('Введите имя', username);
    alert('Я это сделал, а ' + username +  ' тебе от меня совет: “ Поступай правильно — поступай в ВятГУ!”.')
    boller = true;
}
else {
    alert('Я это сделал, а ' + username +  ' тебе от меня совет: “ Поступай правильно — поступай в ВятГУ!”.')
}
})