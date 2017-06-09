//business logic here:
function play(input) {

  if (isNaN(input)) {
    $("#NaN").show();
  }

  var total = []
  for (var i = 1; i <= input; i += 1) {
    $("#NaN").hide();
    total.push("<li>" + i + "</li>");
    if ((i % 15) === 0) {
      total.pop(i)
      total.push("<li>" + "ping-pong" + "</li>");
    } else if ((i % 5) === 0) {
      total.pop(i)
      total.push("<li>" + "pong" + "</li>");
    } else if ((i % 3) === 0) {
      total.pop(i)
      total.push("<li>" + "ping" + "</li>");
    }
  }
  return total
}
var $li = $('.items li');

for (var i = 0; i < $li.length; i+=3)
    $li.slice(i, i+3).wrapAll('<li><ul></ul></li>');
// user interface here:
$(document).ready(function() {
  $("form#pingpong").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("input#number").val());
    var result = play(input);
    $("ul#result").empty();
    $("ul#result").prepend(result);
  });
});
