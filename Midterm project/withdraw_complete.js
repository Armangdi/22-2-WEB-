let account_num = "1234567890123456";
let account_pwd = "1234";

const buttons = document.querySelectorAll('button');

buttons.forEach((button)=>{
    button.addEventListener('click', (e)=>{
      const target = e.target;
      const action = target.classList[0];
      const buttonContent = target.textContent;
      switch(action){
        case 'btn_home_with':
                location.href = './menu.html';
                break;
        case 'btn_again_with':
                location.href = './With.html';
                break;
        case 'btn_return_with':
                location.href = './main.html';
                break;
        }
    })
})
