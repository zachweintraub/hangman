$(function(){
  var words = ['pizza','invader', 'jacket', 'computer', 'watermelon', 'epicodus', 'lasagna', 'beer', 'vodka', 'beautiful', 'tetris', 'halo', 'scrabble']
  var phrase = words[parseInt(Math.random()*words.length)];
  console.log(phrase);
  var phraseArray = phrase.split('');
  var guessedLetter;
  var phraseLength = phraseArray.length;
  var picNumber = 1;
  $('#word-length').append('<p>this word has ' + phraseArray.length + ' letters.</p>')
  for(var i = 0; i < phraseLength; i++) {
    $('#answer-blanks').append('<p id="letter' + i + '">_</p>');
  }
  $('button').click(function(){
    guessedLetter = $('#guess-input').val().toLowerCase();
    $('#guess-input').val('');
    if(phrase.includes(guessedLetter)) {
      for(var i = 0; i < phraseLength; i++) {
      if(guessedLetter == phraseArray[i]) {
        $('#letter'+i).text(phraseArray[i]);
      }
    }} else {
      if(picNumber==6){
        $('#'+picNumber).remove();
        picNumber++;
        $('#images').append('<img id="' + picNumber + '" src="img/hangman' + picNumber +'.jpg">');
          if(confirm('YOU LOSE! the answer was "' + phrase + '". play again?')){
            location.reload();
          }
      }
      $('#'+picNumber).remove();
      picNumber++;
      $('#images').append('<img id="' + picNumber + '" src="img/hangman' + picNumber +'.jpg">');




  }

  });







});
