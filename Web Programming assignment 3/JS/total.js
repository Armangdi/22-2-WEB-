score = sessionStorage.getItem("score");
console.log(score);
$(document).ready(function() {
  $('.main_python').text("Total score : "+score);
  $('.btn_start').click(function(){
    location.href = 'quiz.html';
  });
});
