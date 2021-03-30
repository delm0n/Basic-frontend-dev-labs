let username = undefined;

let boller = false;
const button = document.getElementById('btn')
const button1 = document.getElementById('btn1')
// const buttons = document.querySelectorAll("#btn")

button.addEventListener('click', e =>{
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

button1.addEventListener('click', e =>{
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
