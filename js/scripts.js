//business logic here:

function play(input) {
  var total = []
  for (var i = 1; i <= input; i += 1) {
    total.push("<li>" + i + "</li>");
  }
  return total
}

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
