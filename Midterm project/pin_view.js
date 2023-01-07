let account_num = "1234567890123456";
let account_pwd = "1234";
let chance = 5;

let display = document.querySelector('.display_pin');
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
                  displayContent = displayContent.slice(0, -1);
                  _display_ = _display_.slice(0, -1);
                  display.innerHTML = _display_;
                  break;
          case 'ENT' :
                  if(account_pwd == displayContent){
                    location.href = './menu.html';
                  }
                  else{
                    if(chance > 1){ //If there is a chance left
                      chance--;
                      alert("Incorrect PIN. You have " + chance + " attempts left!");
                    }
                    else{ // no chance!
                      alert("You don't have any more chances!");
                      location.href = './main.html';
                    }
                    display.innerHTML = "Enter PIN";
                    displayContent = "";
                    _display_ = "";
                  }
                  break;
          case 'number':
                  displayContent += e.target.textContent;
                  _display_ += "*"
                  display.innerHTML = _display_;
                  break;
          case 'returnCard':
                  location.href = './main.html';
                  break;
        }
    })
})
