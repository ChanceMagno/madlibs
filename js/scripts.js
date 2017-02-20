$(document).ready(function() {
  $("#formOne").submit(function() {
    var array = document.getElementsByTagName('label');
    var onlyForValues =[];
      for (i=0; i < array.length; i++) {
        onlyForValues [i] = array[i].getAttribute("for")
      };
      debugger;

      onlyForValues.forEach(function(output){
        var answer  = $("input#"+ output).val();
      $("." + output).text(answer);
      })

    // [0].getAttribute("for");
    // console.log(array);

    // var person1Input = $("input#person1").val();
    // var person2Input = $("input#person2").val();
    // var animalInput= $("input#animal").val();
    // var exclamationInput = $("input#exclamation").val();
    // var verbInput = $("input#verb").val();
    // var feelingInput = $("input#feeling").val();
    // var videoGameInput = $("input#videoGame").val();
    //
    // $(".person1").text(person1Input);
    // $(".person2").text(person2Input);
    // $(".animal").text(animalInput);
    // $(".exclamation").text(exclamationInput);
    // $(".verb").text(verbInput);
    // $(".feeling").text(feelingInput);
    // $(".videoGame").text(videoGameInput);
    $("#story").show();

    event.preventDefault();
  });
});
