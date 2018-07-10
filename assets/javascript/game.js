   
//if i want a button press for setting back image i enable below funtion
    //function myFunction() {}
   document.getElementById("game").style.backgroundImage = "url('http://psychicgallerywoodlandhills.com/communities/8/000/002/002/158//images/11585131.jpg')";


    // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
    var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v"
    ,"w","x","y","z"];
   

 // Creating variables to hold the number of wins, losses, and ties. They start at 0.
    var wins = 0;
    var tries = 10;
    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "assets/Evil.mp3");
    var audioElement2 = document.createElement("audio");
    audioElement2.setAttribute("src", "assets/tada.mp3");
   
    
    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

      // Determines which key was pressed.
      var userGuess = event.key;

      // Randomly chooses a choice from the options array. This is the Computer's guess.
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

      if ((userGuess) === (computerGuess) ){
        wins++;
      }else{tries--;}
    
      if(tries < 0)  {   
    audioElement.play();
    alert("Sorry try again hopefully you put more effort next time!");
    document.location.reload();
                    }
                    else if (wins === 1) {
                      audioElement2.play()
                        alert("YOU WIN,you sneaky cheater!");
                        document.location.reload();
                        }
                        //needs more order and able to printtt
                        $(document).ready(function() {
    $("#random-number").append(userGuess);

});
  
  
  
    







     var html =
        "<p> be a psychic and guess my letter </p>" +
          "<p>You chose: " + userGuess + "</p>" +
          "<p>The computer chose: " + computerGuess + "</p>" +
          "<p>wins: " + wins + "</p>" +
          "<p>tries left: " + tries + "</p>";
      
          
      
      document.querySelector("#game").innerHTML = html;

      // Alerts the key the user pressed (userGuess).
     // alert("User guess: " + userGuess);

      // Alerts the Computer's guess. mexicomine
     // alert("Computer guess: " + computerGuess);


    };

