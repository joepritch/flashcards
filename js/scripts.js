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
});
