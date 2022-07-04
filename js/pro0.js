$(document).ready(function(){
    
    
    // Your app must:
    // * **Switch turns** between X and O (or whichever markers you select)
    // * **Visually display which side won** if a player gets three in a row or show a draw/"cat’s game" if neither wins
    // * **Include separate HTML / CSS / JavaScript files**
    // * Stick with **KISS (Keep It Simple Stupid)** and **DRY (Don't Repeat Yourself)** principles
    // * Use **Javascript** for **DOM manipulation**
    // * **Deploy your game online**, where the rest of the world can access it
    // * Use **semantic markup** for HTML and CSS (adhere to best practices)
    

const possibleWins=[
    ["A1", "A2", "A3"], ["B1", "B2", "B3"], ["C1", "C2", "C3"],
    ["A1", "B1"]
]

  $('.feeld').on('click', function(){
      function turns(){
          switch(player){
            case 1: 
              $('.feeld').html('.playerOne').html("X");
              break;
            case 2:
                $('.feeld').html('.playerTwo').html("O");
          }
      }
       turns($('.playerOne'), $('.playerTwo'))
  })





})