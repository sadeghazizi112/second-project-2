var java = 0;
var csharp =0;
var css = 0;
var ruby = 0;

$(document).ready(function() {
  $(".question1").show();
  $(".q1next").click(function(){
    $(".question1").hide();
    $(".question2").show();

  });

  $(".q2next").click(function(){
    $(".question2").hide();
    $(".question3").show();

  });

  $(".q3next").click(function(){
    $(".question3").hide();
    $(".results").show();
    $(".submitform").show();
  });

  $("form#infoinput").submit(function(event) {
    var questionone = $("select#whatsortofjob").val();
    var questiontwo = $("select#teamornot").val();
    var questionthree = $("select#time").val();

if (questionone === 'outdoors') {
  java++;
  ruby++;
}

else if (questionone === 'indoors') {
  css++;
  csharp++;
}

if (questiontwo === 'I would like to work in a team.') {
  java++;
  ruby++;
}

else if (questionone === 'I would like to work by myself.') {
  css++;
  csharp++;
}

if (questionthree === 'I would like to work part-time.') {
  java++;
  ruby++;
}

else if (questionone === 'I would like to work full-time.') {
  css++;
  csharp++;
}

$('#resultdata').show();

console.log(java + " " + csharp);
console.log(css);

event.preventDefault();


$('.output').show();

  $(".css").append(css);
  $(".java").append(java);
  $(".ruby").append(ruby);
  $(".csharp").append(csharp);

$(".submitform").hide();
});
});
