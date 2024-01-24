
let titleBtn =  document.querySelectorAll('.title__btn');

let popup =  document.querySelector('.pop__up');
let popupClose =  document.querySelector('.pop__up__close');
let popup1Btn =  document.querySelector('.pop__up__sign'); // кнопка в первом окне

let popupClose2 = document.querySelector('.pop__up__close2');
let popup2 =  document.querySelector('.pop__up__2');
let popup2Btn = document.querySelector('.pop__up__btn__2'); // кнопка во втром окне

if (titleBtn.length > 0) {
    for (let title__btn of titleBtn) {
        title__btn.onclick = function() {
            popup.style.display = 'block';
        }
    }
}

titleBtn.onclick = function() {
    popup.style.display = 'block';
}


popup1Btn.onclick = function() {
    popup.style.display = 'none'; // Закрываем первое всплывающее окно
    popup2.style.display = 'block'; // Открываем второе всплывающее окно
}

popup2Btn.onclick = function() {
    popup2.style.display = 'none'; // Закрываем первое всплывающее окно
    popup.style.display = 'block'; // Открываем второе всплывающее окно
}

popupClose.onclick = function() {
    popup.style.display = 'none';
}

popupClose2.onclick = function() {
    popup2.style.display = 'none';
}

// Обработчик клика для документа
document.addEventListener('click', function(event) {
    if (event.target == popup) {
        popup.style.display = 'none';
    }
    if (event.target == popup2) {
        popup2.style.display = 'none';
    }
});



