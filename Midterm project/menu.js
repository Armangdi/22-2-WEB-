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


if (account_num in sessionStorage){
}
else{ //insert initial array at the first time
  var myArray = []
  myArray.push({'date': date.toLocaleString('ko-kr'), 'out':'0', 'in':'0', 'bal':'2000'})
  sessionStorage.setItem(account_num, JSON.stringify(myArray));
}

let dot_clicked = false //dot clicked or not

let cur = JSON.parse(sessionStorage.getItem(account_num));
console.log(cur[cur.length - 1].bal) //current balance


buttons.forEach((button)=>{
    button.addEventListener('click', (e)=>{
      const target = e.target;
      const action = target.classList[0];
      const buttonContent = target.textContent;
      switch(action){
          case 'menuAcc':
                  location.href = './Acc.html';
                  break;
          case 'menuWith':
                  location.href = './With.html';
                  break;
          case 'menuDepo':
                  location.href = './Depo.html';
                  break;
          case 'menuTran':
                  location.href = './Tran.html';
                  break;
          case 'returnCard':
                  location.href = './main.html';
                  break;
          case 'back':
                  location.href = './menu.html';
                  display.innerHTML = "$0000.00";
                  break;
          case 'DEL' :
                  displayContent = displayContent.slice(0, -1); //delete last one
                  display.innerHTML = displayContent; //display deleted value
                  if(displayContent.length == 0){
                    display.innerHTML ="$0000.00";
                    if(dot_clicked){
                      dot_clicked = false
                    //  document.getElementById('dot_').setAttribute('disabled', 'false')
                      document.getElementById('dot_').setAttribute('style', 'background-color : #424242') //basic type
                      document.getElementById('dot_').addEventListener('mouseover', function(){
                      document.getElementById('dot_').setAttribute('style', 'background-color : #2b2b2b') //add hover action
                      } );
                      document.getElementById('dot_').addEventListener('mouseout', function(){
                      document.getElementById('dot_').setAttribute('style', 'background-color : #424242') //add mouseout action
                      } );
                    }
                  }
                  if(displayContent.search('.') >= 0){ // Dot is deleted
                  }
                  else{
                    if(dot_clicked){
                      dot_clicked = false
                    //  document.getElementById('dot_').setAttribute('disabled', 'false')
                      document.getElementById('dot_').setAttribute('style', 'background-color : #424242')
                      document.getElementById('dot_').addEventListener('mouseover', function(){
                      document.getElementById('dot_').setAttribute('style', 'background-color : #2b2b2b')
                      } );
                      document.getElementById('dot_').addEventListener('mouseout', function(){
                      document.getElementById('dot_').setAttribute('style', 'background-color : #424242')
                      } );
                    }
                  }
                  break;
          case 'depo_enter' :
                  sessionStorage.setItem(account_num+"c",displayContent);
                  location.href = './confirmDepo.html'
                  break;
          case 'DOT' :
                  if(!dot_clicked){
                    dot_clicked = true
                    //document.getElementById('dot_').setAttribute('disabled', 'true')
                    document.getElementById('dot_').setAttribute('style', 'background-color : #2b2b2b')
                    displayContent += e.target.textContent;
                    display.innerHTML = displayContent;
                  }

                  break;
          case 'number':
                  displayContent += e.target.textContent;
                  display.innerHTML = displayContent;
                  break;
        }
    })
})
