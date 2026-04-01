const emailMain = document.querySelector('.email-main');
const emailRegister = document.querySelector('.email');
const nicknameRegister = document.querySelector('.nickname');

if(emailMain){
    emailMain.addEventListener('input', () => {
        localStorage.setItem('email', emailMain.value);
    });
}

if(emailRegister){
    const emailSalvo = localStorage.getItem('email');
    if(emailSalvo){
        emailRegister.value = emailSalvo;
    }

    const nicknameSalvo = localStorage.getItem('nickname');
    if(nicknameSalvo && nicknameRegister){
        nicknameRegister.value = nicknameSalvo;
    }

    emailRegister.addEventListener('input', () => {
        localStorage.setItem('email', emailRegister.value);
    });

    if(nicknameRegister){
        nicknameRegister.addEventListener('input', () => {
            localStorage.setItem('nickname', nicknameRegister.value);
        });
    }
}