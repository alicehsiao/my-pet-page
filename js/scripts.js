$(document).ready(function() {
  $("button#to-dark").click(function() {
    $("body").removeClass();
    $("body").addClass("darktheme");
  });
  $("button#back-to-light").click(function() {
    $("body").removeClass();
    $("body").addClass("lighttheme");
  });
});
