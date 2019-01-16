$(document).ready(function() {
  $("#lightbutton").click(function()  {
    $("body").removeClass();
    $("body").addClass("lighttheme");
    $(".lightcard").show();
    $(".darkcard").hide();
  });
  $("#darkbutton").click(function()  {
    $("body").removeClass();
    $("body").addClass("darktheme");
    $(".darkcard").show();
    $(".lightcard").hide();
  });
  $("#firstcard").click(function()  {
    $("#firstquestion").slideToggle();
    $("#firstanswer").slideToggle();
  });
  $("#secondcard").click(function()  {
    $("#secondquestion").slideToggle();
    $("#secondanswer").slideToggle();
  });
  $("#thirdcard").click(function()  {
    $("#thirdquestion").slideToggle();
    $("#thirdanswer").slideToggle();
  });
  $("#fourthcard").click(function()  {
    $("#fourthquestion").slideToggle();
    $("#fourthanswer").slideToggle();
  });
  $("#fifthcard").click(function()  {
    $("#fifthquestion").slideToggle();
    $("#fifthanswer").slideToggle();
  });
  $("#sixthcard").click(function()  {
    $("#sixthquestion").slideToggle();
    $("#sixthanswer").slideToggle();
  });
  $("#seventhcard").click(function()  {
    $("#seventhquestion").slideToggle();
    $("#seventhanswer").slideToggle();
  });
  $("#eighthcard").click(function()  {
    $("#eighthquestion").slideToggle();
    $("#eighthanswer").slideToggle();
  });
});
