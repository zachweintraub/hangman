$(function(){

  var phrase = 'pizza';
  var phraseArray = phrase.split('');
  var guessedLetter;
  var phraseLength = phraseArray.length;
  var picNumber = 1;
  for(var i = 0; i < phraseLength; i++) {
    $('#answer-blanks').append('<p id="letter' + i + '">' + phraseArray[i]+'</p>');
  }
  $('button').click(function(){
    guessedLetter = $('#guess-input').val().toLowerCase();
    $('#guess-input').val('');
    if(phrase.includes(guessedLetter)) {
      for(var i = 0; i < phraseLength; i++) {
      if(guessedLetter === phraseArray[i]) {
        $('#letter'+i).addClass('letter');
      }
    }} else {
      $('#'+picNumber).remove();
      picNumber++;
      $('#images').append('<img id="' + picNumber + '" src="img/hangman' + picNumber +'.jpg">');



  }

  });







});
