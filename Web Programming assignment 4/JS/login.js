let heads = document.getElementsByClassName("tab-head")[0].getElementsByTagName("div");
for (let i = 0; i < 2; i++) {
  heads[i].addEventListener("click", function() {
    document.getElementsByClassName("tab-head")[0].getElementsByClassName("active")[0].classList.remove("active");
    heads[i].classList.add("active");

    document.getElementsByClassName("tab-below")[0].getElementsByClassName("active")[0].classList.remove("active");
    document.getElementsByClassName("tab-below")[0].getElementsByClassName("tab-body")[i].classList.add("active");
  });
}

let login_eval = false;
let login_pval = false;


let fval = false;
let lval = false;
let gval = false;
let eval = false;
let pval = false;
let cval = false;

$(document).ready(function() {
  //$('.in > img').animate({opacity:'1'});
  $('.tab-head').click(function(e){
    if($(e.target).hasClass('active')){
      $("#signed").css("display", "none");
      $('.tab-below > div.active').fadeOut(200);
      setTimeout(function(){
        $('.tab-below > div.active').fadeIn(800);
      },200);

    }
  });

  $('#btn-sign').click(function(){
    let fname = $('#in21').val();
    let lname = $('#in22').val();
    let email = $('#in24').val();
    let pw = $('#in25').val();
    let cpw = $('#in26').val();

    //blank condition
    if(fname==""){
      $(".invalid21").css("opacity", 1);
      $(".invalid21").text("Please enter your first name!");
      $(".in21").css("border-color", "red");
      fval=false;
    }
    if(lname==""){
      $(".invalid22").css("opacity", 1);
      $(".in22").css("border-color", "red");
      $(".invalid22").text("Please enter your last name!");
      lval=false;
    }
    if(email==""){
      $(".invalid24").css("opacity", 1);
      $(".in24").css("border-color", "red");
      $(".invalid24").text("Please enter your email!");
      eval=false;
    }
    if(pw==""){
      $(".invalid25").css("opacity", 1);
      $(".in25").css("border-color", "red");
      $(".invalid25").css("width", "180px");
      $(".invalid25").text("Please enter your password!");
      pval=false;
    }
    if(cpw==""){
      $(".invalid26").css("opacity", 1);
      $(".in26").css("border-color", "red");
      $(".invalid26").text("Please re-enter your password!");
      cval=false;
    }
    if($("input[type=radio][name=male]:checked").is(':checked')){
      $(".invalid23").css("opacity", 0);
      $("#ch23").css("opacity", 1);
      gval=true;
    }
    else{
      $(".invalid23").css("opacity", 1);
      $("#ch23").css("opacity", 0);
      gval=false;
    }

    //validation check
    if(fval&&lval&&gval&&eval&&pval&&cval){

      let email = $("#in24").val();
      let pw_ = $("#in25").val();
      let ids = sessionStorage.getItem(email);


      if(!ids){
        sessionStorage.setItem(email, pw_);
        $(".tab-below > div").css("display", "none");
        $("#signed").css("display", "block");
        $("#signed").css("opacity", "1");
        $("#ch21, #ch22, #ch23, #ch24, #ch25, #ch26").css("opacity", "0");
        $("#in21, #in22, #in23, #in24, #in25, #in26").val("");
        $('input[type=radio][name=male]').prop('checked', false);
      }



    }


  });

  $('#btn-login').click(function(){
    let email = $('#in11').val();
    let pw_= $('#in12').val();

    if(email==""){
      $(".invalid11").css("opacity", 1);
      $(".in11").css("border-color", "red");
      $("#ch11").css("opacity", 0);
    }
    if(pw_==""){
      $(".invalid12").css("opacity", 1);
      $(".in12").css("border-color", "red");
      $("#ch12").css("opacity", 0);
    }

    if(login_eval&&login_pval){
      let ids = sessionStorage.getItem(email);

      if((ids) && (ids == pw_)){
        $(".tab-below > div, .tab-head >div").css("display", "none");
        $("#logged").css("display", "block");
        $("#logged").css("opacity", "1");
      }
      else{
        $("#login_text").text("Credential do not match!");
        $("#login_text").css("color", "red");
      }
    }



  });

  $('#in11').on("change keyup paste",function(){ //email check
    let email = $('#in11').val();
    let regex=/([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if(email==""){//null check
      $(".invalid11").css("opacity", 1);
      $(".invalid11").text("Please enter your email!");
      $(".in11").css("border-color", "red");
      $("#ch11").css("opacity", 0);
      login_eval=false;
    }
    else{
      if(!regex.test(email)){
        $(".invalid11").css("opacity", 1);
        $(".invalid11").text("Your email address is invalid!");
        $(".in11").css("border-color", "red");
        $("#ch11").css("opacity", 0);
        login_eval=false;
      }
      else{
        $(".invalid11").css("opacity", 0);
        $(".in11").css("border-color", "white");
        $("#ch11").css("opacity", 1);
        login_eval=true;
      }
    }


  });

  $('#in12').on("change keyup paste",function(){ //password check
      let login_pw = $('#in12').val();

      if(login_pw==""){//null check
        $(".invalid12").css("opacity", 1);
        $(".invalid12").css("width", "180px");
        $(".invalid12").text("Please enter your password!");
        $(".in12").css("border-color", "red");
        $("#ch12").css("opacity", 0);
        login_pval=false;
      }
      else{
        $(".invalid12").css("opacity", 0);
        $(".in12").css("border-color", "white");
        $(".invalid12").css("width", "180px");
        $("#ch12").css("opacity", 1);
        login_pval=true;
      }
    });

  $('#in21').on("change keyup paste",function(){ //first name check
    let fname = $('#in21').val();
    let pattern_cap = /[A-Z]/;
    let pattern_num = /[0-9]/;
    let pattern_eng = /[a-zA-Z]/;
    let pattern_spc = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;
    let pattern_kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

    if(fname==""){//null check
      $(".invalid21").css("opacity", 1);
      $(".invalid21").text("Please enter your first name!");
      $(".in21").css("border-color", "red");
      $("#ch21").css("opacity", 0);
      fval=false;
    }
    else{
      if(!pattern_cap.test(fname[0])){//cap check
        $(".invalid21").css("opacity", 1);
        $(".invalid21").text("First name should start with a capital letter!");
        $(".in21").css("border-color", "red");
        $("#ch21").css("opacity", 0);
        fval=false;
      }
      else{//num & etc check
        if(!(pattern_eng.test(fname))||pattern_num.test(fname)||pattern_spc.test(fname)
      ||pattern_kor.test(fname)){
          $(".invalid21").css("opacity", 1);
          $(".invalid21").text("First name is only ENGLISH!");
          $(".in21").css("border-color", "red");
          $("#ch21").css("opacity", 0);
          fval=false;
        }
        else{
          $(".invalid21").css("opacity", 0);
          $(".in21").css("border-color", "white");
          $("#ch21").css("opacity", 1);
          fval=true;
        }
      }
    }

  });

  $('#in22').on("change keyup paste",function(){ //last name check
    let lname = $('#in22').val();
    let pattern_cap = /[A-Z]/;
    let pattern_num = /[0-9]/;
    let pattern_eng = /[a-zA-Z]/;
    let pattern_spc = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;
    let pattern_kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

    if(lname==""){//null check
      $(".invalid22").css("opacity", 1);
      $(".invalid22").text("Please enter your last name!");
      $(".in22").css("border-color", "red");
      $("#ch22").css("opacity", 0);
      lval=false;
    }
    else{
      if(!pattern_cap.test(lname[0])){//cap check
        $(".invalid22").css("opacity", 1);
        $(".invalid22").text("Last name should start with a capital letter!");
        $(".in22").css("border-color", "red");
        $("#ch22").css("opacity", 0);
        lval=false;
      }
      else{//num & etc check
        if(!(pattern_eng.test(lname))||pattern_num.test(lname)||pattern_spc.test(lname)
      ||pattern_kor.test(lname)){
          $(".invalid22").css("opacity", 1);
          $(".invalid22").text("Last name is only ENGLISH!");
          $(".in22").css("border-color", "red");
          $("#ch22").css("opacity", 0);
          lval=false;
        }
        else{
          $(".invalid22").css("opacity", 0);
          $(".in22").css("border-color", "white");
          $("#ch22").css("opacity", 1);
          lval=true;
        }
      }
    }

  });

  $('#in24').on("change keyup paste",function(){ //email check
    let email = $('#in24').val();
    let regex=/([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if(email==""){//null check
      $(".invalid24").css("opacity", 1);
      $(".invalid24").text("Please enter your email!");
      $(".in24").css("border-color", "red");
      $("#ch24").css("opacity", 0);
      eval=false;
    }
    else{
      if(!regex.test(email)){
        $(".invalid24").css("opacity", 1);
        $(".invalid24").text("Your email address is invalid!");
        $(".in24").css("border-color", "red");
        $("#ch24").css("opacity", 0);
        eval=false;
      }
      else{
        let ids = sessionStorage.getItem(email);
        if(!ids){
          $(".invalid24").css("opacity", 0);
          $(".in24").css("border-color", "white");
          $("#ch24").css("opacity", 1);
          eval=true;
        }
        else{
          $(".invalid24").css("opacity", 1);
          $(".invalid24").text("Your email is exist!");
          $(".in24").css("border-color", "red");
          $("#ch24").css("opacity", 0);
          eval=false;
        }

      }
    }


  });

  let pw;
  $('#in25').on("change keyup paste",function(){ //password check
      pw = $('#in25').val();
      let regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/;

      if(pw==""){//null check
        $(".invalid25").css("opacity", 1);
        $(".invalid25").css("width", "180px");
        $(".invalid25").text("Please enter your password!");
        $(".in25").css("border-color", "red");
        $("#ch25").css("opacity", 0);
        pval=false;
      }
      else{
        if(regex.test(pw)){
          $(".invalid25").css("opacity", 0);
          $(".in25").css("border-color", "white");
          $(".invalid25").css("width", "180px");
          $("#ch25").css("opacity", 1);
          pval=true;

          //confirm checking
          let cpw = $('#in26').val();
          if(cpw.length>=1 && (cpw != pw)){
            $(".invalid26").css("opacity", 1);
            $(".invalid26").css("width", "170px");
            $(".invalid26").text("Password does not match!");
            $(".in26").css("border-color", "red");
            $("#ch26").css("opacity", 0);
            cval=false;
          }
        }
        else{
          $(".invalid25").css("opacity", 1);
          $(".invalid25").css("width", "400px");
          $(".invalid25").text("Requirement: at least 6 characters, one capital letter, one lowercase letter, at least one digit, and one special character!");
          $(".in25").css("border-color", "red");
          $("#ch25").css("opacity", 0);
          pval=false;
        }
      }



    });

  $('#in26').on("change keyup paste",function(){ //confirm password check
      let cpw = $('#in26').val();

      if(cpw==""){//null check
        $(".invalid26").css("opacity", 1);
        $(".invalid26").css("width", "195px");
        $(".invalid26").text("Please re-enter your password!");
        $(".in26").css("border-color", "red");
        $("#ch26").css("opacity", 0);
        cval=false;
      }
      else{
        if(pw == cpw){
          $(".invalid26").css("opacity", 0);
          $(".in26").css("border-color", "white");
          $(".invalid26").css("width", "180px");
          $("#ch26").css("opacity", 1);
          cval=true;
        }
        else{
          $(".invalid26").css("opacity", 1);
          $(".invalid26").css("width", "170px");
          $(".invalid26").text("Password does not match!");
          $(".in26").css("border-color", "red");
          $("#ch26").css("opacity", 0);
          cval=false;
        }
      }


    });

  $('input[type=radio][name=male]').change(function(){ //gender check
    if($("input[type=radio][name=male]:checked").is(':checked')){
      $(".invalid23").css("opacity", 0);
      $("#ch23").css("opacity", 1);
      gval=true;
    }
    else{
      $(".invalid23").css("opacity", 1);
      $("#ch23").css("opacity", 0);
      gval=false;
    }
  });


});
