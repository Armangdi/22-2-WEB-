let seed = 0;
let question_list = ["Which one is NOT a legal variable name?", "What is a correct syntax to output \"Hello World\" in Python?",
"How do you insert COMMENTS in Python code?", "What is the correct syntax to output the type of a variable or object in Python?",
"What is the correct file extension for Python files?"]
let answer_list = [["_myvar", "Myvar", "my_var", "my-var"], ["print(\"Hello World\")","p(\"Hello World\")", "echo(\"Hello World\");", "echo \"Hello World\""],
["/*This is a comment*/", "#This is a comment", "//This is a comment", "None of the above"],["print(typeof(x))", "print(typeof x)", "print(typeOf(x))", "print(type(x))"],
[".pt", ".pyt", ".pyth", ".py"]]
let answer = [3, 0, 1, 0, 3]
let question_valid = []
let question_pick = []
let tmp = 0;



for(let i = 0; i < answer.length; i++){
  question_valid[i] = false;
}

for(let i = 0; i < 4; ){
  tmp = Math.floor(Math.random() * answer.length);
  if(question_valid[tmp] == false){
    question_pick[i] = tmp;
    question_valid[tmp] = true;
    i++;
  }
}

//initial setting


let cnt = 0;
let score = 0;
var cur_q = question_list[question_pick[cnt]];
var cur_alist = answer_list[question_pick[cnt]]
var cur_ans = answer[question_pick[cnt]];



function changeText(cnt){
  console.log(score);
  if(cnt == 4){ // It's time to go to the total screen
    sessionStorage.setItem("score", score);
    location.href = './total.html';
  }

  //change the question and answer automatically
  cur_q = question_list[question_pick[cnt]];
  cur_alist = answer_list[question_pick[cnt]]
  cur_ans = answer[question_pick[cnt]];

  $('.questions').text(cur_q);
  $('.ansA').text(cur_alist[0]);
  $('.ansB').text(cur_alist[1]);
  $('.ansC').text(cur_alist[2]);
  $('.ansD').text(cur_alist[3]);
  $('.questionStat').text(String("Question "+ (cnt+1) + "/4"));
  $("#progress").val(25*(cnt+1)); //progress value is (int) * 25
}


$(document).ready(function() {

  changeText(cnt);
  let click_ans;
  console.log("ANSWER " + answer)
  $('._A, .ansA').click(function(){
    click_ans = 0; // Pick A(== 0)
    if(click_ans != cur_ans){ //Wrong
      $('.ansA').css({
        background: '#f54248'
      });
      setTimeout(function(){ // set Timeout to show the changed color
        cnt++;
        $('.ansA').css({
          background: 'white'
        });
        changeText(cnt);
      }, 1000);
    }
    else{ //Right
      score++;
      $('.score').text(score);
      $('.ansA').css({
        background: '#03fc8c'
      });
      setTimeout(function(){
        cnt++;
        $('.ansA').css({
          background: 'white'
        });
        changeText(cnt);
      }, 1000);
    }
  });
  $('._B, .ansB').click(function(){
    click_ans = 1;
    if(click_ans != cur_ans){
      $('.ansB').css({
        background: '#f54248'
      });
      setTimeout(function(){
        cnt++;
        $('.ansB').css({
          background: 'white'
        });
        changeText(cnt);
      }, 1000);
    }
    else{
      score++;
      $('.score').text(score);
      $('.ansB').css({
        background: '#03fc8c'
      });
      setTimeout(function(){
        cnt++;
        $('.ansB').css({
          background: 'white'
        });
        changeText(cnt);
      }, 1000);
    }
  });
  $('._C, .ansC').click(function(){
    click_ans = 2;
    if(click_ans != cur_ans){
      $('.ansC').css({
        background: '#f54248'
      });
      setTimeout(function(){
        cnt++;
        $('.ansC').css({
          background: 'white'
        });
        changeText(cnt);
      }, 1000);
    }
    else{
      score++;
      $('.score').text(score);
      $('.ansC').css({
        background: '#03fc8c'
      });
      setTimeout(function(){
        cnt++;
        $('.ansC').css({
          background: 'white'
        });
        changeText(cnt);
      }, 1000);
    }
  });
  $('._D, .ansD').click(function(){
    click_ans = 3;
    if(click_ans != cur_ans){
      $('.ansD').css({
        background: '#f54248'
      });
      setTimeout(function(){
        cnt++;
        $('.ansD').css({
          background: 'white'
        });
        changeText(cnt);
      }, 1000);
    }
    else{
      score++;
      $('.score').text(score);
      $('.ansD').css({
        background: '#03fc8c'
      });
      setTimeout(function(){
        cnt++;
        $('.ansD').css({
          background: 'white'
        });
        changeText(cnt);
      }, 1000);
    }
  });





  // hover event
  $('.ansA').hover(function(e){
    $('._A').css("cursor", "pointer").css("box-shadow", "0px 0px 20px #009688");
    $('.ansA').css("cursor", "pointer").css("box-shadow", "0px 0px 20px #009688");

  }, function(e){
    $('._A').css("cursor", "default").css("box-shadow", "0px 0px 0px ");
    $('.ansA').css("cursor", "default").css("box-shadow", "0px 0px 0px ");
  });

  $('._A').hover(function(e){
    $('._A').css("cursor", "pointer").css("box-shadow", "0px 0px 20px #009688");
    $('.ansA').css("cursor", "pointer").css("box-shadow", "0px 0px 20px #009688");

  }, function(e){
    $('._A').css("cursor", "default").css("box-shadow", "0px 0px 0px ");
    $('.ansA').css("cursor", "default").css("box-shadow", "0px 0px 0px ");
  });

  $('.ansB').hover(function(e){
    $('._B').css("cursor", "pointer").css("box-shadow", "0px 0px 20px #009688");
    $('.ansB').css("cursor", "pointer").css("box-shadow", "0px 0px 20px #009688");

  }, function(e){
    $('._B').css("cursor", "default").css("box-shadow", "0px 0px 0px ");
    $('.ansB').css("cursor", "default").css("box-shadow", "0px 0px 0px ");
  });

  $('._B').hover(function(e){
    $('._B').css("cursor", "pointer").css("box-shadow", "0px 0px 20px #009688");
    $('.ansB').css("cursor", "pointer").css("box-shadow", "0px 0px 20px #009688");

  }, function(e){
    $('._B').css("cursor", "default").css("box-shadow", "0px 0px 0px ");
    $('.ansB').css("cursor", "default").css("box-shadow", "0px 0px 0px ");
  });


  $('.ansC').hover(function(e){
    $('._C').css("cursor", "pointer").css("box-shadow", "0px 0px 20px #009688");
    $('.ansC').css("cursor", "pointer").css("box-shadow", "0px 0px 20px #009688");

  }, function(e){
    $('._C').css("cursor", "default").css("box-shadow", "0px 0px 0px ");
    $('.ansC').css("cursor", "default").css("box-shadow", "0px 0px 0px ");
  });

  $('._C').hover(function(e){
    $('._C').css("cursor", "pointer").css("box-shadow", "0px 0px 20px #009688");
    $('.ansC').css("cursor", "pointer").css("box-shadow", "0px 0px 20px #009688");

  }, function(e){
    $('._C').css("cursor", "default").css("box-shadow", "0px 0px 0px ");
    $('.ansC').css("cursor", "default").css("box-shadow", "0px 0px 0px ");
  });

  $('.ansD').hover(function(e){
    $('._D').css("cursor", "pointer").css("box-shadow", "0px 0px 20px #009688");
    $('.ansD').css("cursor", "pointer").css("box-shadow", "0px 0px 20px #009688");

  }, function(e){
    $('._D').css("cursor", "default").css("box-shadow", "0px 0px 0px ");
    $('.ansD').css("cursor", "default").css("box-shadow", "0px 0px 0px ");
  });

  $('._D').hover(function(e){
    $('._D').css("cursor", "pointer").css("box-shadow", "0px 0px 20px #009688");
    $('.ansD').css("cursor", "pointer").css("box-shadow", "0px 0px 20px #009688");

  }, function(e){
    $('._D').css("cursor", "default").css("box-shadow", "0px 0px 0px ");
    $('.ansD').css("cursor", "default").css("box-shadow", "0px 0px 0px ");
  });






});
