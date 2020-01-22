$(document).ready(function() {
  var index = 0
  $("#main").click(function() {
    var flavors = ['Naked Vanilla', 'Salted Caramel', 'Super Berry Swirl'];
    var currentFlavor = flavors[index];
    if (index < 3) {
      $("#flav").text(currentFlavor);
      index++
    } else if (index === 3) {
      $("#flav").text("These are all the flavors I know");
      index++
    } else {
      location.reload();
    }
    event.preventDefault();
    });
    $("#hidden").show();
  
});