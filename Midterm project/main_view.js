let account_num = "1234567890123456";
let account_pwd = "1234";

let display = document.querySelector('.display');
let _display_ = '';
let displayContent = '';
const buttons = document.querySelectorAll('button');

buttons.forEach((button)=>{
    button.addEventListener('click', (e)=>{
      const target = e.target;
      const action = target.classList[0];
      const buttonContent = target.textContent;
      switch(action){
          case 'DEL' :
                  displayContent = displayContent.slice(0, -1); //delete last char
                  _display_ = _display_.slice(0, -1);
                  display.innerHTML = _display_;
                  break;
          case 'ENT' :
                  if(account_num == displayContent){ //valid
                    location.href = './pin_view.html';
                  }
                  else{
                    alert("The account number does not exist!"); //not valid
                  }
                  break;
          case 'number':
                  displayContent += e.target.textContent;
                  _display_ += "*" //encapsulation
                  display.innerHTML = _display_;
                  break;
        }
    })
})
