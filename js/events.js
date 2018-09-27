//define functions here

$(document).ready(function(){
  getIt();
});

function getIt() {
  $('p').on("click", function(clickh) {
    alert("Hey!");
  });
}
