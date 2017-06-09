//business logic here:
function play(input) {

  if (isNaN(input)) {
    $("#zero").hide();
    $("#big").hide();
    $("#small").hide();
    $("#nan").show();
  }
  console.log(input);

  if (input > 0 && input <= 14) {
    $("#zero").hide();
    $("#big").hide();
    $("#small").show();
  } else if (input > 14) {
    $("#zero").hide();
    $("#small").hide();
    $("#big").show();
  } else if (input === 0) {
    $("#big").hide();
    $("#small").hide();
    $("#zero").show();
  }

  var total = []
  for (var i = 1; i <= input; i += 1) {
    $("#nan").hide();
    // var answer = ["<li>" + i + "</li>"]
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

// user interface here:
$(document).ready(function() {
  $("form#pingpong").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("input#number").val());
    var result = play(input);
    $("#bean").hide();
    $("ul#result").empty();
    $("ul#result").prepend(result);
  });
});
