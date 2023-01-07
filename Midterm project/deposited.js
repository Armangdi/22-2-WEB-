let account_num = "1234567890123456";
let account_pwd = "1234";

const buttons = document.querySelectorAll('button');

buttons.forEach((button)=>{
    button.addEventListener('click', (e)=>{
      const target = e.target;
      const action = target.classList[0];
      const buttonContent = target.textContent;
      switch(action){
        case 'btn_home':
                location.href = './menu.html';
                break;
        case 'btn_again':
                location.href = './depo.html';
                break;
        case 'btn_return':
                location.href = './main.html';
                break;
        case 'btn_yes':
                location.href = './deposited.html';
                break;
        }
    })
})
