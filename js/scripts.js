//business logic here:

function play(input) {
  var total = []

  for (var i = 1; i <= input; i += 1) {
    console.log(total)
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
    // var fifteen = false;
    // console.log(fifteen)
    // if ((input[i] % 15) === 0) {
    //   fifteen = true;
    // } else {


// user interface here:
$(document).ready(function() {
  $("form#pingpong").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("input#number").val());
    var result = play(input);

    // console.log(input)
    $("ul#result").empty();
    $("ul#result").prepend(result);
  });
});
