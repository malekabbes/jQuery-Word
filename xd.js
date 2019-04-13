// FONT WEIGHT BOLD //
$(document).on("click", "#b", function() {
  var Weight = $("#rez").css("fontWeight");
  Weight.match(/[9*]/) == null
    ? $("#rez").css("font-weight", "900")
    : $("#rez").css("font-weight", "400");
});
// FONT STYLE //
$(document).on("click", "#i", function() {
  var style = $("#rez").css("font-style");
  style.match(/[i*]/) == null
    ? $("#rez").css("font-style", "italic")
    : $("#rez").css("font-style", "normal");
});

// underline //
$(document).on("click", "#u", function() {
  var decoration = $("#rez").css("text-decoration");
  decoration.match(/[u*]/) == null
    ? $("#rez").css("text-decoration", "underline")
    : $("#rez").css("text-decoration", "none");
}); /*condition ? true : false;
/* Fonts */
$(document).on("click", "#f", function() {
  var font = $(this).html();
  alert(font);
  $("#rez").css("font-family", font);
});
/* colors */
$(document).on("change", "#color", function() {
  alert($(this).val());
  $("#rez").css("color", $(this).val());
});
$(document).on("click", function() {
  var x = $("#text");
  var y = $("#rez");
  y.html(x.val());
});
/* SIZE CHANGER YAY */
$(document).on("change", "#s", function() {
  $("#rez").css("font-size", $(this).val() + "%");
});
