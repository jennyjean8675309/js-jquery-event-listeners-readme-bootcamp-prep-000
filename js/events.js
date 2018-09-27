//define functions here

$(document).ready(function(){
  getIt();
  frameIt();
});

function getIt() {
  $('p').on('click', function() {
    alert("Hey!");
  });
}

function frameIt() {
  $("img").on('load', function() {
    $("img").addClass('tasty');
  });
}

function pressIt() {
  $('form #typing').on('keydown', function(key) {
    if (key.which === 71) {
      alert ('g was pressed');
    }
  });
}

function submitIt() {
  $('form #typing').on('submit', function() {
    alert ("Your form is going to be submitted now.")
  });
}
