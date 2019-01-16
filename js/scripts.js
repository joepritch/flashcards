$(document).ready(function() {
  $("#themechange").click(function()  {
    $("body").removeClass();
    $("body").addClass("lighttheme");
    $("#lightcard").show();
    $("#darkcard").hide();
  });
});
