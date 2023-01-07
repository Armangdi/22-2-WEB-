let account_num = "1234567890123456";
let account_pwd = "1234";
let balance;
let chance = 5;

let display = document.querySelector('.display_bal');
let _display_ = '';
let displayContent = '';
const buttons = document.querySelectorAll('button');



let date = new Date()

var myArray = []


let cur = JSON.parse(sessionStorage.getItem(account_num))
balance = cur[cur.length - 1].bal; // the last one is a current one
display.innerHTML =  "Current Balance : $" + balance



buildTable(myArray)



function buildTable(data){
  var table = document.getElementById('myTable')

  for (var i = 0; i < cur.length; i++){ //build table
    var row = `<tr>
            <td>${cur[i].date}</td>
            <td>${cur[i].out}</td>
            <td>${cur[i].in}</td>
            <td>${cur[i].bal}</td>
          </tr>`
    table.innerHTML += row


  }
}

buttons.forEach((button)=>{
    button.addEventListener('click', (e)=>{
      const target = e.target;
      const action = target.classList[0];
      const buttonContent = target.textContent;
      switch(action){
          case 'back':
                  location.href = './menu.html';
                  break;
        }
    })
})
