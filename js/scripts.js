$(document).ready(function() {
 $("form#main").submit(function(event) {
  var flavors =  ['Chai & Eye', 'Salted Caramel', 'Superberry Swirl'];
  for (var i=0; i <= flavors.length-1; i++) {
    $("#flav").append(flavors[i] + "<br>");
  }
  event.preventDefault();
  $("#hidden").show();
  });
}); 

//    var flavors =  ['Chai & Eye', 'Salted Caramel', 'Superberry Swirl'];
//    flavors.forEach(function(flavor) {
//    $("#flav").append(flavor + "<br>");
//    });
//    event.preventDefault();
//    $("#hidden").show();
//  });
  


//var index = 0
 // $("#main").click(function() {
    // var flavors = ['Chai & Eye', 'Salted Caramel', 'Superberry Swirl'];
    // var currentFlavor = flavors[index];
    // if (index < 3) {
    //   $("#flav").text(currentFlavor);
    //   index++
    // } else if (index === 3) {
    //   $("#flav").text("These are all the flavors I know");
    //   index++
    // } else {
    //   location.reload();
    // }
    // event.preventDefault();
    // });
    // $("#hidden").show();