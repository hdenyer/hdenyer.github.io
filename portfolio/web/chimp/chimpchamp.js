var butts = ['butt1', 'butt2', 'butt3', 'butt4', 'butt5', 'butt6', 'butt7', 'butt8', 'butt9']


//Reset button

function resetButts() {
  chimpTurn = true;
  playerTurn = true;
  
  butts.forEach(function(buttonId) {
    var input = document.getElementById(buttonId)
    input.disabled = false;
    input.value = '';
    input.style.backgroundImage = 'url(pics/leafy.png)';
  });
}


//2-Player mode

var chimpTurn = true;

function square1() {

  var input = document.getElementById("butt1");
  
  if (chimpTurn === true) {
    input.style.backgroundImage = "url(pics/o.png)";
    input.disabled = true;
    input.value = "o";
    chimpTurn = false;
    
    var audio = new Audio('sounds/monkey/chimpsound.mp3');
      audio.play();
  }
  else {
    input.style.backgroundImage = "url(pics/x.png)";
    input.disabled = true;
    input.value = "x";
    chimpTurn = true;
  }
}

function square2() {

  var input = document.getElementById("butt2");
  
  if (chimpTurn === true) {
    input.style.backgroundImage = "url(pics/o.png)";
    input.disabled = true;
    input.value = "o";
    chimpTurn = false;
    
    var audio = new Audio('sounds/monkey/chimpsound.mp3');
      audio.play();
  }
  else {
    input.style.backgroundImage = "url(pics/x.png)";
    input.disabled = true;
    input.value = "x";
    chimpTurn = true;
  }
}

function square3() {

  var input = document.getElementById("butt3");
  
  if (chimpTurn === true) {
    input.style.backgroundImage = "url(pics/o.png)";
    input.disabled = true;
    input.value = "o";
    chimpTurn = false;
    
    var audio = new Audio('sounds/monkey/chimpsound.mp3');
      audio.play();
  }
  else {
    input.style.backgroundImage = "url(pics/x.png)";
    input.disabled = true;
    input.value = "x";
    chimpTurn = true;
  }
}

function square4() {

  var input = document.getElementById("butt4");
  
  if (chimpTurn === true) {
    input.style.backgroundImage = "url(pics/o.png)";
    input.disabled = true;
    input.value = "o";
    chimpTurn = false;
    
    var audio = new Audio('sounds/monkey/chimpsound.mp3');
      audio.play();
  }
  else {
    input.style.backgroundImage = "url(pics/x.png)";
    input.disabled = true;
    input.value = "x";
    chimpTurn = true;
  }
}

function square5() {

  var input = document.getElementById("butt5");
  
  if (chimpTurn === true) {
    input.style.backgroundImage = "url(pics/o.png)";
    input.disabled = true;
    input.value = "o";
    chimpTurn = false;
    
    var audio = new Audio('sounds/monkey/chimpsound.mp3');
      audio.play();
  }
  else {
    input.style.backgroundImage = "url(pics/x.png)";
    input.disabled = true;
    input.value = "x";
    chimpTurn = true;
  }
}

function square6() {

  var input = document.getElementById("butt6");
  
  if (chimpTurn === true) {
    input.style.backgroundImage = "url(pics/o.png)";
    input.disabled = true;
    input.value = "o";
    chimpTurn = false;
    
    var audio = new Audio('sounds/monkey/chimpsound.mp3');
      audio.play();
  }
  else {
    input.style.backgroundImage = "url(pics/x.png)";
    input.disabled = true;
    input.value = "x";
    chimpTurn = true;
  }
}

function square7() {

  var input = document.getElementById("butt7");
  
  if (chimpTurn === true) {
    input.style.backgroundImage = "url(pics/o.png)";
    input.disabled = true;
    input.value = "o";
    chimpTurn = false;
    
    var audio = new Audio('sounds/monkey/chimpsound.mp3');
      audio.play();
  }
  else {
    input.style.backgroundImage = "url(pics/x.png)";
    input.disabled = true;
    input.value = "x";
    chimpTurn = true;
  }
}

function square8() {

  var input = document.getElementById("butt8");
  
  if (chimpTurn === true) {
    input.style.backgroundImage = "url(pics/o.png)";
    input.disabled = true;
    input.value = "o";
    chimpTurn = false;
    
    var audio = new Audio('sounds/monkey/chimpsound.mp3');
      audio.play();
  }
  else {
    input.style.backgroundImage = "url(pics/x.png)";
    input.disabled = true;
    input.value = "x";
    chimpTurn = true;
  }
}

function square9() {

  var input = document.getElementById("butt9");
  
  if (chimpTurn === true) {
    input.style.backgroundImage = "url(pics/o.png)";
    input.disabled = true;
    input.value = "o";
    chimpTurn = false;
    
    var audio = new Audio('sounds/monkey/chimpsound.mp3');
      audio.play();
  }
  else {
    input.style.backgroundImage = "url(pics/x.png)";
    input.disabled = true;
    input.value = "x";
    chimpTurn = true;
  }
}


//VS computer mode

var playerTurn = true;

function square1C() {

  var input = document.getElementById("butt1");
  
  if (playerTurn === true) {
    input.style.backgroundImage = "url(pics/o.png)";
    input.disabled = true;
    input.value = "o";
    playerTurn = false;
    
    var audio = new Audio('sounds/monkey/chimpsound.mp3');
      audio.play();
    
    computerMove();
  }
}

function square2C() {

  var input = document.getElementById("butt2");
  
  if (playerTurn === true) {
    input.style.backgroundImage = "url(pics/o.png)";
    input.disabled = true;
    input.value = "o";
    playerTurn = false;
    
    var audio = new Audio('sounds/monkey/chimpsound.mp3');
      audio.play();
    
    computerMove();
  }
}

function square3C() {

  var input = document.getElementById("butt3");
  
  if (playerTurn === true) {
    input.style.backgroundImage = "url(pics/o.png)";
    input.disabled = true;
    input.value = "o";
    playerTurn = false;
    
    var audio = new Audio('sounds/monkey/chimpsound.mp3');
      audio.play();
    
    computerMove();
  }
}

function square4C() {

  var input = document.getElementById("butt4");
  
  if (playerTurn === true) {
    input.style.backgroundImage = "url(pics/o.png)";
    input.disabled = true;
    input.value = "o";
    playerTurn = false;
    
    var audio = new Audio('sounds/monkey/chimpsound.mp3');
      audio.play();
    
    computerMove();
  }
}

function square5C() {

  var input = document.getElementById("butt5");
  
  if (playerTurn === true) {
    input.style.backgroundImage = "url(pics/o.png)";
    input.disabled = true;
    input.value = "o";
    playerTurn = false;
    
    var audio = new Audio('sounds/monkey/chimpsound.mp3');
      audio.play();
    
    computerMove();
  }
}

function square6C() {

  var input = document.getElementById("butt6");
  
  if (playerTurn === true) {
    input.style.backgroundImage = "url(pics/o.png)";
    input.disabled = true;
    input.value = "o";
    playerTurn = false;
    
    var audio = new Audio('sounds/monkey/chimpsound.mp3');
      audio.play();
    
    computerMove();
  }
}

function square7C() {

  var input = document.getElementById("butt7");
  
  if (playerTurn === true) {
    input.style.backgroundImage = "url(pics/o.png)";
    input.disabled = true;
    input.value = "o";
    playerTurn = false;
    
    var audio = new Audio('sounds/monkey/chimpsound.mp3');
      audio.play();
    
    computerMove();
  }
}

function square8C() {

  var input = document.getElementById("butt8");
  
  if (playerTurn === true) {
    input.style.backgroundImage = "url(pics/o.png)";
    input.disabled = true;
    input.value = "o";
    playerTurn = false;
    
    var audio = new Audio('sounds/monkey/chimpsound.mp3');
      audio.play();
    
    computerMove();
  }
}

function square9C() {

  var input = document.getElementById("butt9");
  
  if (playerTurn === true) {
    input.style.backgroundImage = "url(pics/o.png)";
    input.disabled = true;
    input.value = "o";
    playerTurn = false;
    
    var audio = new Audio('sounds/monkey/chimpsound.mp3');
      audio.play();
    
    computerMove();
  }
}


//Computer's brain

function computerMove() {
  setTimeout(function() {

  var sq1, sq2, sq3, sq4, sq5, sq6, sq7, sq8, sq9;
  sq1 = document.getElementById("butt1").value;
  sq2 = document.getElementById("butt2").value;
  sq3 = document.getElementById("butt3").value;
  sq4 = document.getElementById("butt4").value;
  sq5 = document.getElementById("butt5").value;
  sq6 = document.getElementById("butt6").value;
  sq7 = document.getElementById("butt7").value;
  sq8 = document.getElementById("butt8").value;
  sq9 = document.getElementById("butt9").value;

  
//Possible win moves
  
  if ((sq1 === 'x') && (sq2 === 'x') && (sq3 === '')) {
    var input = document.getElementById("butt3");
    input.style.backgroundImage = "url(pics/x.png)";
    input.disabled = true;
    input.value = "x";
  }
  else if ((sq1 === '') && (sq2 === 'x') && (sq3 === 'x')) {
    var input = document.getElementById("butt1");
    input.style.backgroundImage = "url(pics/x.png)";
    input.disabled = true;
    input.value = "x";
  }
  else if ((sq1 === '') && (sq4 === 'x') && (sq7 === 'x')) {
    var input = document.getElementById("butt1");
    input.style.backgroundImage = "url(pics/x.png)";
    input.disabled = true;
    input.value = "x";
  }  
  else if ((sq1 === 'x') && (sq4 === 'x') && (sq7 === '')) {
    var input = document.getElementById("butt7");
    input.style.backgroundImage = "url(pics/x.png)";
    input.disabled = true;
    input.value = "x";
  }  
  else if ((sq1 === 'x') && (sq5 === 'x') && (sq9 === '')) {
    var input = document.getElementById("butt9");
    input.style.backgroundImage = "url(pics/x.png)";
    input.disabled = true;
    input.value = "x";
  }  
  else if ((sq1 === '') && (sq5 === 'x') && (sq9 === 'x')) {
    var input = document.getElementById("butt1");
    input.style.backgroundImage = "url(pics/x.png)";
    input.disabled = true;
    input.value = "x";
  }  
  else if ((sq2 === 'x') && (sq5 === 'x') && (sq8 === '')) {
    var input = document.getElementById("butt8");
    input.style.backgroundImage = "url(pics/x.png)";
    input.disabled = true;
    input.value = "x";
  }  
  else if ((sq2 === '') && (sq5 === 'x') && (sq8 === 'x')) {
    var input = document.getElementById("butt2");
    input.style.backgroundImage = "url(pics/x.png)";
    input.disabled = true;
    input.value = "x";
  }  
  else if ((sq4 === 'x') && (sq5 === 'x') && (sq6 === '')) {
    var input = document.getElementById("butt6");
    input.style.backgroundImage = "url(pics/x.png)";
    input.disabled = true;
    input.value = "x";
  }  
  else if ((sq4 === '') && (sq5 === 'x') && (sq6 === 'x')) {
    var input = document.getElementById("butt4");
    input.style.backgroundImage = "url(pics/x.png)";
    input.disabled = true;
    input.value = "x";
  }  
  else if ((sq9 === 'x') && (sq8 === 'x') && (sq7 === '')) {
    var input = document.getElementById("butt7");
    input.style.backgroundImage = "url(pics/x.png)";
    input.disabled = true;
    input.value = "x";
  }  
  else if ((sq9 === '') && (sq8 === 'x') && (sq7 === 'x')) {
    var input = document.getElementById("butt9");
    input.style.backgroundImage = "url(pics/x.png)";
    input.disabled = true;
    input.value = "x";
  }  
  else if ((sq9 === 'x') && (sq6 === 'x') && (sq3 === '')) {
    var input = document.getElementById("butt3");
    input.style.backgroundImage = "url(pics/x.png)";
    input.disabled = true;
    input.value = "x";
  }  
  else if ((sq9 === '') && (sq6 === 'x') && (sq3 === 'x')) {
    var input = document.getElementById("butt9");
    input.style.backgroundImage = "url(pics/x.png)";
    input.disabled = true;
    input.value = "x";
  }  
  else if ((sq7 === 'x') && (sq5 === 'x') && (sq3 === '')) {
    var input = document.getElementById("butt3");
    input.style.backgroundImage = "url(pics/x.png)";
    input.disabled = true;
    input.value = "x";
  }  
  else if ((sq7 === '') && (sq5 === 'x') && (sq3 === 'x')) {
    var input = document.getElementById("butt7");
    input.style.backgroundImage = "url(pics/x.png)";
    input.disabled = true;
    input.value = "x";
  }  

//Prevent loss moves

  else if ((sq1 === 'o') && (sq2 === 'o') && (sq3 === '')) {
    var input = document.getElementById("butt3");
    input.style.backgroundImage = "url(pics/x.png)";
    input.disabled = true;
    input.value = "x";
  }
  else if ((sq1 === '') && (sq2 === 'o') && (sq3 === 'o')) {
    var input = document.getElementById("butt1");
    input.style.backgroundImage = "url(pics/x.png)";
    input.disabled = true;
    input.value = "x";
  }
  else if ((sq1 === '') && (sq4 === 'o') && (sq7 === 'o')) {
    var input = document.getElementById("butt1");
    input.style.backgroundImage = "url(pics/x.png)";
    input.disabled = true;
    input.value = "x";
  }  
  else if ((sq1 === 'o') && (sq4 === 'o') && (sq7 === '')) {
    var input = document.getElementById("butt7");
    input.style.backgroundImage = "url(pics/x.png)";
    input.disabled = true;
    input.value = "x";
  }  
  else if ((sq1 === 'o') && (sq5 === 'o') && (sq9 === '')) {
    var input = document.getElementById("butt9");
    input.style.backgroundImage = "url(pics/x.png)";
    input.disabled = true;
    input.value = "x";
  }  
  else if ((sq1 === '') && (sq5 === 'o') && (sq9 === 'o')) {
    var input = document.getElementById("butt1");
    input.style.backgroundImage = "url(pics/x.png)";
    input.disabled = true;
    input.value = "x";
  }  
  else if ((sq2 === 'o') && (sq5 === 'o') && (sq8 === '')) {
    var input = document.getElementById("butt8");
    input.style.backgroundImage = "url(pics/x.png)";
    input.disabled = true;
    input.value = "x";
  }  
  else if ((sq2 === '') && (sq5 === 'o') && (sq8 === 'o')) {
    var input = document.getElementById("butt2");
    input.style.backgroundImage = "url(pics/x.png)";
    input.disabled = true;
    input.value = "x";
  }  
  else if ((sq4 === 'o') && (sq5 === 'o') && (sq6 === '')) {
    var input = document.getElementById("butt6");
    input.style.backgroundImage = "url(pics/x.png)";
    input.disabled = true;
    input.value = "x";
  }  
  else if ((sq4 === '') && (sq5 === 'o') && (sq6 === 'o')) {
    var input = document.getElementById("butt4");
    input.style.backgroundImage = "url(pics/x.png)";
    input.disabled = true;
    input.value = "x";
  }  
  else if ((sq9 === 'o') && (sq8 === 'o') && (sq7 === '')) {
    var input = document.getElementById("butt7");
    input.style.backgroundImage = "url(pics/x.png)";
    input.disabled = true;
    input.value = "x";
  }  
  else if ((sq9 === '') && (sq8 === 'o') && (sq7 === 'o')) {
    var input = document.getElementById("butt9");
    input.style.backgroundImage = "url(pics/x.png)";
    input.disabled = true;
    input.value = "x";
  }  
  else if ((sq9 === 'o') && (sq6 === 'o') && (sq3 === '')) {
    var input = document.getElementById("butt3");
    input.style.backgroundImage = "url(pics/x.png)";
    input.disabled = true;
    input.value = "x";
  }  
  else if ((sq9 === '') && (sq6 === 'o') && (sq3 === 'o')) {
    var input = document.getElementById("butt9");
    input.style.backgroundImage = "url(pics/x.png)";
    input.disabled = true;
    input.value = "x";
  }  
  else if ((sq7 === 'o') && (sq5 === 'o') && (sq3 === '')) {
    var input = document.getElementById("butt3");
    input.style.backgroundImage = "url(pics/x.png)";
    input.disabled = true;
    input.value = "x";
  }  
  else if ((sq7 === '') && (sq5 === 'o') && (sq3 === 'o')) {
    var input = document.getElementById("butt7");
    input.style.backgroundImage = "url(pics/x.png)";
    input.disabled = true;
    input.value = "x";
  }  

//Make a random move

  else {
    const inputs = document.querySelectorAll('input[type="button"]');
    const randomEmptySquare = randomMove(inputs)

    if (randomEmptySquare) {
      randomEmptySquare.style.backgroundImage = "url(pics/x.png)";
      randomEmptySquare.disabled = true;
      randomEmptySquare.value = "x";
    }
  }

  checkWin();
  playerTurn = true;
    
  }, 500);
}
        
function randomMove(inputs) {
  const emptyInputs = Array.from(inputs).filter(input => input.value === '');

  if (emptyInputs.length > 0) {
    const randomIndex = Math.floor(Math.random() * emptyInputs.length);

    return emptyInputs[randomIndex];
  }
}



function checkWin() {
  
  var sq1, sq2, sq3, sq4, sq5, sq6, sq7, sq8, sq9;
  sq1 = document.getElementById("butt1").value;
  sq2 = document.getElementById("butt2").value;
  sq3 = document.getElementById("butt3").value;
  sq4 = document.getElementById("butt4").value;
  sq5 = document.getElementById("butt5").value;
  sq6 = document.getElementById("butt6").value;
  sq7 = document.getElementById("butt7").value;
  sq8 = document.getElementById("butt8").value;
  sq9 = document.getElementById("butt9").value;

  if (
    (sq1 === 'x') && (sq2 === 'x') && (sq3 === 'x') ||
    (sq1 === 'x') && (sq4 === 'x') && (sq7 === 'x') ||
    (sq1 === 'x') && (sq5 === 'x') && (sq9 === 'x') ||
    (sq2 === 'x') && (sq5 === 'x') && (sq8 === 'x') ||
    (sq4 === 'x') && (sq5 === 'x') && (sq6 === 'x') ||
    (sq9 === 'x') && (sq8 === 'x') && (sq7 === 'x') ||
    (sq9 === 'x') && (sq6 === 'x') && (sq3 === 'x') ||
    (sq7 === 'x') && (sq5 === 'x') && (sq3 === 'x')) {

    //Preventing player moves after game ends
    document.getElementById('butt1').disabled = true;
    document.getElementById('butt2').disabled = true;
    document.getElementById('butt3').disabled = true;
    document.getElementById('butt4').disabled = true;
    document.getElementById('butt5').disabled = true;
    document.getElementById('butt6').disabled = true;
    document.getElementById('butt7').disabled = true;
    document.getElementById('butt8').disabled = true;
    document.getElementById('butt9').disabled = true;
    
    window.alert('Banana wins!');
    
  }
  else if (
    (sq1 === 'o') && (sq2 === 'o') && (sq3 === 'o') ||
    (sq1 === 'o') && (sq4 === 'o') && (sq7 === 'o') ||
    (sq1 === 'o') && (sq5 === 'o') && (sq9 === 'o') ||
    (sq2 === 'o') && (sq5 === 'o') && (sq8 === 'o') ||
    (sq4 === 'o') && (sq5 === 'o') && (sq6 === 'o') ||
    (sq9 === 'o') && (sq8 === 'o') && (sq7 === 'o') ||
    (sq9 === 'o') && (sq6 === 'o') && (sq3 === 'o') ||
    (sq7 === 'o') && (sq5 === 'o') && (sq3 === 'o')) {

    document.getElementById('butt1').disabled = true;
    document.getElementById('butt2').disabled = true;
    document.getElementById('butt3').disabled = true;
    document.getElementById('butt4').disabled = true;
    document.getElementById('butt5').disabled = true;
    document.getElementById('butt6').disabled = true;
    document.getElementById('butt7').disabled = true;
    document.getElementById('butt8').disabled = true;
    document.getElementById('butt9').disabled = true;
    
    window.alert('Chimp wins!');
    
    }
  else if (
    (sq1 == 'x' || sq1 == 'o') && (sq2 == 'x' || sq2 == 'o') && 
    (sq3 == 'x' || sq3 == 'o') && (sq4 == 'x' || sq4 == 'o') && 
    (sq5 == 'x' || sq5 == 'o') && (sq6 == 'x' || sq6 == 'o') && 
    (sq7 == 'x' || sq7 == 'o') && (sq8 == 'x' || sq8 == 'o') && 
    (sq9 == 'x' || sq9 == 'o')) {

    document.getElementById('butt1').disabled = true;
    document.getElementById('butt2').disabled = true;
    document.getElementById('butt3').disabled = true;
    document.getElementById('butt4').disabled = true;
    document.getElementById('butt5').disabled = true;
    document.getElementById('butt6').disabled = true;
    document.getElementById('butt7').disabled = true;
    document.getElementById('butt8').disabled = true;
    document.getElementById('butt9').disabled = true;
    
    window.alert("It's a tie!")
  }
}