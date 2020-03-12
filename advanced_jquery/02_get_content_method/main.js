// $(document).ready(function() {
//   $("#btn1").click(function() {
//     alert(`Test: ${$("#test").text()}`)
//   });
//   $("#btn2").click(function() {
//     alert(`HTML: ${$("#test").html()}`);
//   });
// });

$(document).ready(function() {
  $("button").click(function() {
    alert(`Value: ${$("#test").val()}`)
  });
});