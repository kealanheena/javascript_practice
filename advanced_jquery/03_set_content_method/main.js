$(document).ready(function() {
  $("#btn1").click(function() {
    $("#test1").text(function(i, origText) {
      return `Old text: ${origText} New text: JQuery Rocks! (index: ${i} )`;
    });
  });
  $("#btn2").click(function() {
    $("#test2").html(function(i, origText) {
      return `Old HTML: ${origText} New HTML: <strong>JQuery Rocks!</strong> (index: ${i} )`;
    });
  });
});