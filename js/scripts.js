

$(document).ready(function() {
  $("#formOne").submit(function() {
//     $("h1").click(function() {
//     alert("This is a header.");
//   });
//
//   $("p").click(function() {
//   alert("This is a paragraph.");
// });
//
// $("form").click(function() {
// alert("This is a header.");
// });
// var target =$(this).click();
// console.log(target);
// debugger;
// element.addEventListener("click", function(){
//
//   alert("Hello World!"); });

$("body").click(function(event) {
  var text =  event.target.nodeName;
  alert(text);
});


    var array = document.getElementsByTagName('label');
    var onlyForValues =[];
      for (i=0; i < array.length; i++) {
        onlyForValues [i] = array[i].getAttribute("for")
      };

      onlyForValues.forEach(function(output){
        var answer  = $("input#"+ output).val();
      $("." + output).text(answer);
    });


    $("#story").show();

    event.preventDefault();
  });
});
