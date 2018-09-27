//define functions here

$(document).ready(function(){
  getIt();
  frameIt();
});

function getIt() {
  $('h1').on("click", function() {
    alert("Hey!");
  });
}

function frameIt() {
  $("img").on('load', function() {
    $("img").addClass('tasty');
  });
}
