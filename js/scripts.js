//business logic here:
function play(input) {

  var total = []
  for (var i = 1; i <= input; i += 1) {
    total.push(i);
    if ((i % 15) === 0) {
      total.pop(i)
      total.push("ping-pong");
    } else if ((i % 5) === 0) {
      total.pop(i)
      total.push("pong");
    } else if ((i % 3) === 0) {
      total.pop(i)
      total.push("ping");
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

    var list = result.map(function(item) {
      return ("<li>" + item + "</li>")
    })

    if (input > 0 && input <= 14) {
      $("#small").show();
    } else if (input > 14) {
      $("#big").show();
    } else if (input === 0) {
      $("#zero").show();
    } else if (isNaN(input)) {
      $("#nan").show();
    }

    $("ul#result").empty();
    $("ul#result").prepend(list);

  });
});
