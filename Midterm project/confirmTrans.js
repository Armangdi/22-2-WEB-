let account_num = "1234567890123456";
let account_pwd = "1234";
let balance;

let display = document.querySelector('.display_withdraw');
let _display_ = '';
let displayContent = '';
const buttons = document.querySelectorAll('button');

//Most of them are similar to confirmDepo
let list = [];
list = JSON.parse(sessionStorage.getItem("t")); //Loads the stored transaction.
display.innerHTML = "$" + list[0].cost; // {"src":"@", "dst":"@", "cost":"@"} <= JSON format
let src_text = document.getElementById("src_id");
src_text.innerHTML = list[0].src;
let dst_text = document.getElementById("dst_id");
dst_text.innerHTML = list[0].dst;
console.log(list[0].dst)

buttons.forEach((button)=>{
    button.addEventListener('click', (e)=>{
      const target = e.target;
      const action = target.classList[0];
      const buttonContent = target.textContent;
      switch(action){
        case 'btn_yes_with':
                let cur = JSON.parse(sessionStorage.getItem(list[0].src))
                balance = cur[cur.length - 1].bal;
                balance = eval(balance + "-" + list[0].cost); //Deduction calculation executed
                if(balance >= 0){
                  let date = new Date()
                  cur.push({'date': date.toLocaleString('ko-kr'), 'out':list[0].cost, 'in':'0', 'bal':balance}) //Save transaction with time
                  sessionStorage.setItem(account_num, JSON.stringify(cur));
                  displayContent = "";
                  location.href = './transfer_complete.html';
                  break;
                }
                else{ //remaining balance will be below zero.
                  alert("You cannot transfer!");
                }
        case 'btn_no_with':
                location.href = './Tran.html';
                break;
        }
    })
})
