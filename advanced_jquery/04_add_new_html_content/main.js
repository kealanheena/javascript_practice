// function appendText() {
//   var txt1 = "<p>Text.</p>"; // Create text with HTML
//   var txt2 = $("<p></p>").text("Text. "); // Create text with JQuery
//   var txt3 = document.createElement("p");
//   txt3.innerHTML = "Text. "; // Create text with the DOM
//   $("body").append(txt1, txt2, txt3); // Append new elements
// }

$(document).ready(function() {
  $("#btn1").click(function() {
    $("img").before("<b>Before</b>");
  });

  $("#btn2").click(function() {
    $("img").after("<i>After</i>")
  });
});