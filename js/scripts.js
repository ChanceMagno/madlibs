$(document).ready(function() {
  $("#formOne").submit(function() {
    var person1Input = $("input#person1").val();
    var person2Input = $("input#person2").val();
    var animalInput= $("input#animal").val();
    var exclamationInput = $("input#exclamation").val();
    var verbInput = $("input#verb").val();
    var feelingInput = $("input#feeling").val();
    var videoGameInput = $("input#videoGame").val();

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".animal").text(animalInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".feeling").text(feelingInput);
    $(".videoGame").text(videoGameInput);
    $("#story").show();

    event.preventDefault();
  });
});
