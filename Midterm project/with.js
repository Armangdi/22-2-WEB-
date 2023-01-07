let account_num = "1234567890123456";
let account_pwd = "1234";
let balance;
let chance = 5;

let display = document.querySelector('.display');
let display_con = document.querySelector('.display_confirm');
let _display_ = '';
let displayContent = '';
const buttons = document.querySelectorAll('button');

let date = new Date()


function on100(){ //up arrow 100
  displayContent = eval(displayContent + "+" +"100")
  display.innerHTML = displayContent;
}

function on20(){ //up arrow 20
  displayContent = eval(displayContent + "+" +"20")
  display.innerHTML = displayContent;
}

function on20d(){ // down arrow 20
  displayContent = eval(displayContent + "-" +"20")
  if(displayContent < 0){
    displayContent = "0";
  }
  display.innerHTML = displayContent;

}

function on100d(){ // down arrow 100
  displayContent = eval(displayContent + "-" +"100")
  if(displayContent < 0){
    displayContent = "0";
  }
  display.innerHTML = displayContent;
}

buttons.forEach((button)=>{
    button.addEventListener('click', (e)=>{
      const target = e.target;
      const action = target.classList[0];
      const buttonContent = target.textContent;
      switch(action){
          case 'with_back':
                  location.href = './menu.html';
                  display.innerHTML = "$0000.00";
                  break;

          case 'number_with':
                  sessionStorage.setItem(account_num+"c",e.target.textContent);
                  location.href = './confirmWith.html'
                  break;

          case 'with_enter' :
                  sessionStorage.setItem(account_num+"c",displayContent);
                  location.href = './confirmWith.html'
                  break;

        }
    })
})
