$(document).ready(function() {
  $("#lightbutton").click(function()  {
    $("body").removeClass();
    $("body").addClass("lighttheme");
    $("#lightcard").toggle();
    $("#darkcard").toggle();
  });
  $("#darkbutton").click(function()  {
    $("body").removeClass();
    $("body").addClass("darktheme");
    $("#lightcard").toggle();
    $("#darkcard").toggle();
  });
});
