var words = ['pizza','spaghetti', 'gnocchi', 'taco', 'watermelon', 'burrito', 'lasagna', 'risotto', 'quesadilla', 'teriyaki', 'sushi', 'macaroni', 'dragonfruit', 'falafel', 'hummus', 'curry', 'cheeseburger', 'meatloaf', 'sundae', 'tiramisu', 'croissant', 'muffin', 'ceviche', 'fondue', 'bratwurst', 'sausauge', 'omlette', 'dumpling', 'pierogi']
var phrase = words[parseInt(Math.random()*words.length)];
console.log(phrase);
var phraseArray = phrase.split('');
var guessedLetter;
var phraseLength = phraseArray.length;
var picNumber = 1;
var correctLetters = 0;
var wordInProgress = '';
var badLetters = '';

$(function(){
  $('#word-length').append('<p>this word has ' + phraseLength + ' letters.</p>')
  for(var i = 0; i < phraseLength; i++) {
    wordInProgress = wordInProgress.concat('_');
    $('#answer').text(wordInProgress);
  }
  $('button').click(function(){
    guessedLetter = $('#guess-input').val().toLowerCase().charAt(0);
    $('#guess-input').val('');
    if(phrase.includes(guessedLetter)) {
      for(var i = 0; i < phraseLength; i++) {
      if(guessedLetter == phraseArray[i]) {
        console.log('got it right');
        wordInProgress = wordInProgress.substr(0, i) + guessedLetter + wordInProgress.substr(i + 1);
        $('#answer').text(wordInProgress);
        correctLetters++;
      }
      }
      if(correctLetters == phraseLength) {
        setTimeout(function(){if(confirm('YOU WIN! play again?')){
          location.reload();
        }}, 500);
      }
    } else {

      $('#'+picNumber).remove();
      picNumber++;
      $('#images').append('<img id="' + picNumber + '" src="img/hangman' + picNumber +'.jpg">');
      badLetters = badLetters.concat(guessedLetter);
      $('#bad-letters').text(badLetters);
      if(picNumber==7){
        setTimeout(function(){
          if(confirm('YOU LOSE! The answer was "' + phrase + '" - wanna try again?')){
            location.reload();
          }
        }, 1000)}
      }
    });
  });
