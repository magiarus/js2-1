function validEmail() {
    const pattern = /^[A-Za-z0-9][A-Za-z0-9\.-_]*[A-Za-z0-9]*@([A-Za-z0-9]+([A-Za-z0-9-]*[A-Za-z0-9]+)*\.)+[A-Za-z]*$/ //регулярка для почты
    const inpEmail = document.getElementById('email').value; //содержимое инпута
    const valid = inpEmail.match(pattern); //проверка на правильность написания почты, иными словами на валидность
    const message = document.getElementById('message-err'); //нашли блок где описывается ошибка
    if (valid) {                                    //если валидно, выводим аллерт
        alert('Вы зарегестрированы')
        message.style.display = 'none';
    } else {                                       //в противном случае выводим ошибку 
        message.style.display = 'block';
        message.innerHTML = 'Некорректный формат почты';
        console.log(message)
    }
}

submit.addEventListener('click', function () {
    validEmail()
})