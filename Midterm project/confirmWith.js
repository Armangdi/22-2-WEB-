let account_num = "1234567890123456";
let account_pwd = "1234";
let balance;

let display = document.querySelector('.display_withdraw');
let _display_ = '';
let displayContent = '';
const buttons = document.querySelectorAll('button');


_display_ = sessionStorage.getItem(account_num+"c"); //input value
display.innerHTML = "$" + _display_ +"?";

buttons.forEach((button)=>{
    button.addEventListener('click', (e)=>{
      const target = e.target;
      const action = target.classList[0];
      const buttonContent = target.textContent;
      switch(action){
        case 'btn_yes_with':
                let cur = JSON.parse(sessionStorage.getItem(account_num))
                balance = cur[cur.length - 1].bal;
                balance = eval(balance + "-" + _display_); //deduction
                if(balance >= 0){
                  let date = new Date()
                  cur.push({'date': date.toLocaleString('ko-kr'), 'out':_display_, 'in':'0', 'bal':balance})
                  sessionStorage.setItem(account_num, JSON.stringify(cur));
                  displayContent = "";
                  location.href = './withdraw_complete.html';
                  break;
                }
                else{
                  alert("You cannot withdraw!");
                }
        case 'btn_no_with':
                location.href = './With.html';
                break;
        }
    })
})
