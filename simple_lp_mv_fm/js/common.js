$(function(){
  if ($("#input").val().length == 0) {
    $("#submit").prop("disabled", true);
  }
  $("#input").on("keydown keyup keypress change", function() {
    if ($(this).val().length < 2) {
      $("#submit").prop("disabled", true);
    } else {
      $("#submit").prop("disabled", false);
    }
  });
});