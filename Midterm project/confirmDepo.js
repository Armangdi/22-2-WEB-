let account_num = "1234567890123456";
let account_pwd = "1234";
let balance;
let chance = 5;

let display = document.querySelector('.display');
let display_con = document.querySelector('.display_confirm');
let _display_ = '';
let displayContent = '';
const buttons = document.querySelectorAll('button');


_display_ = sessionStorage.getItem(account_num+"c");
display_con.innerHTML = "$" + _display_; //to display $

buttons.forEach((button)=>{
    button.addEventListener('click', (e)=>{
      const target = e.target;
      const action = target.classList[0];
      const buttonContent = target.textContent;
      switch(action){
        case 'btn_yes': //yes btn
                let cur = JSON.parse(sessionStorage.getItem(account_num)) //bring balance from sessionStorage into cur
                balance = cur[cur.length - 1].bal; //I take the last one
                balance = eval(balance + "+" + _display_); // calculate display $ and last balance
                let date = new Date()
                cur.push({'date': date.toLocaleString('ko-kr'), 'out':'0', 'in':_display_, 'bal':balance}) //push JSON format data into cur
                sessionStorage.setItem(account_num, JSON.stringify(cur)); //store JSON type (cur)
                displayContent = "";
                location.href = './inter_confirm.html';
                break;
        case 'btn_no':
                location.href = './menu.html';
                break;
        }
    })
})
