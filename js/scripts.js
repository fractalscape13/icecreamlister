$(document).ready(function() {
  var index = 0
  $("#main").click(function() {
    var flavors = ['Naked Vanilla', 'Salted Caramel', 'Super Berry Swirl'];
    var currentFlavor = flavors[index];
    if (index < 3) {
      $("#flav").append(currentFlavor + " <br>");
      index++
    } else if (index === 3) {
      $("#flav").prepend("These are all the flavors I know<br>" );
      index++
    } else {

    }
    event.preventDefault();
    });
    $("#hidden").show();
  
});