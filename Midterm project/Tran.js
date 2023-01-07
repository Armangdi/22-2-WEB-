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
else{
  var myArray = []
  myArray.push({'date': date.toLocaleString('ko-kr'), 'out':'0', 'in':'0', 'bal':'2000'}) //at first time
  sessionStorage.setItem(account_num, JSON.stringify(myArray)); //take information
}

let dot_clicked = false

let cur = JSON.parse(sessionStorage.getItem(account_num));
console.log(cur[cur.length - 1].bal)


buttons.forEach((button)=>{
    button.addEventListener('click', (e)=>{
      const target = e.target;
      const action = target.classList[0];
      const buttonContent = target.textContent;
      switch(action){
          case 'returnCard':
                  location.href = './main.html';
                  break;
          case 'back':
                  location.href = './menu.html';
                  display.innerHTML = "$0000.00";
                  break;
          case 'DEL' :
                  displayContent = displayContent.slice(0, -1);
                  display.innerHTML = displayContent;
                  if(displayContent.length == 0){
                    display.innerHTML ="$0000.00";
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

                  if(displayContent.includes('.')){
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
                  //sessionStorage.setItem(account_num+"c",displayContent);
                  let src = document.getElementById('src') //source account is
                  //let src_value = src.options[document.getElementById('src').selectedIndex].text;
                  let dst = document.getElementById('dst') //destination account is
                  //let dst_value = src.options[document.getElementById('dst').selectedIndex].text;

                  trans_list = []
                  trans_list.push({"src":src.value, "dst":dst.value, "cost":displayContent}) //organize the JSON file
                  sessionStorage.setItem("t", JSON.stringify(trans_list)) // input "t" 

                  location.href = './confirmTrans.html'

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
