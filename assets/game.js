
    
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    // user choice array
    var guessesSoFar = []; 
    //button option array
    var comChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 
    
    document.onkeyup = function(event) {
       //stores user guess
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); 
       //computer picks random
        var comGuess = comChoices[Math.floor(Math.random()*comChoices.length)]; 
       //pushes user guess to the guesses so far
        guessesSoFar.push(userGuess); 
        
        if (userGuess == comGuess) {
            wins++;
            alert('You win!');
            //resets the guesses back to 9
            guessesLeft = 9; 
            //takes everything from guessesSoFar array so the guesses arent visible                                                                                                                              
            guessesSoFar.length = 0; 
        }
        else if (guessesLeft == 0){
            losses++;
            alert('You lose!');
            guessesLeft = 9;
            guessesSoFar.length = 0;
        }
        
        else if (userGuess !== comGuess){
            //guesses left decreases  
            guessesLeft--; 
        }  
        // Displays the responses on screen    
        var html = "<h1>The Psychic Game</h1>" + "<br>" +
        "<p>Wins: " + 
        wins + "<br>" +
        "</p>" + "<p>Losses: " +  
        losses + "<br>" +
        "</p>" + "<p>Guesses left: " + 
        guessesLeft + "<br>" +
        "</p>" + "<p>Your guesses so far: " + 
        guessesSoFar +
        "</p>"
        ;

        document.querySelector('#game').innerHTML = html;
    }