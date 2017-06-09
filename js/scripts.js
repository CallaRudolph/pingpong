//business logic here:
function play(input) {

  var total = []
  for (var i = 1; i <= input; i += 1) {
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
    $(".pics").hide();
    $("ul#result").empty();

    if (input > 0 && input <= 14) {
      $("#small").show();
    } else if (input > 14) {
      $("#big").show();
    } else if (input === 0) {
      $("#zero").show();
    } else if (isNaN(input)) {
      $("#nan").show();
    }

    $("ul#result").prepend(result);
  });
});
