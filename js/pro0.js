let reset=$('#reset').hide();
$(document).ready(function () {

const possibleWins=[  // possible win divs in numbers
    ['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'],
    ['1', '4', '7'], ['2', '5', '8'], ['3', '6', '9'],
    ['1', '5', '9'], ['3', '5', '7']
];

let playerOne=true;
let id1='';
let id2='';
let reset=$('input[name=reset]').hide();
let winX1=parseInt($('.win1').html());
let winX2=parseInt($('.win2').html());

function game(){
$('.feeld').on('click', function () {
    const restart=function () { // function to restart the game and hide/show h2
        reset.show();
        $('#reset').on('click',function () {
            $('.feeld').removeClass('X O').empty();
            reset.hide();
            $('.feeld').on('click', game());
            $('#draw').hide();
            $('#winnerOne').hide();
            $('#winnerTwo').hide();  
        })
    }
    if ($(this).html() === 'X' || $(this).html() === 'O') { // if the div was clicked, return; > so no div can be double clicked 
        return;
    } else if(playerOne == true) {
        $(this).html('X').addClass('X');  // add classes to the clicked div for the winner compare
        var idArrayX = [];
        $('.X').each(function () {  // put winners choice in to an array and turn it to a string to compare with win options
            idArrayX.push(this.id);
            parseInt(idArrayX);
            id1 = idArrayX.join('');
            for(let i = 0; i < possibleWins.length; i++) {    // loop through possible wins
                let index = possibleWins[i];
                let posWin = index.join('');
                if(id1.includes(posWin[0]) && id1.includes(posWin[1]) && id1.includes(posWin[2])) {    // check if players selection includes all 3 of the possible win's
                    winX1 += 1;
                    $('.win1').html(winX1); // update the score 
                    $('#winnerOne').html("Player One wins!");
                    $('#winnerOne').show() ; 
                    $('.feeld').off('click', game());
                    restart();
                };
            };
        }) 
    } else if (playerOne === false) {
        $(this).html('O').addClass('O') // add classes to the clicked div for the winner compare
        let idArrayO = [];
        $('.O').each(function  () {  // put winners choice in to an array and turn it to a string to compare with win options
            idArrayO.push(this.id);
            parseInt(idArrayO);
            id2=idArrayO.join('');
            for(let i = 0; i< possibleWins.length; i++) { // loop through possible wins
                let index = possibleWins[i];
                let posWin = index.join(''); // turn array to string 
                if(id2.includes(posWin[0]) && id2.includes(posWin[1]) && id2.includes(posWin[2])) {   // check if players selection includes all 3 of the possible win's
                    winX2 += 1;
                    $('.win2').html(winX2);// update the score 
                    $('#winnerTwo').html("Player Two wins!");
                    $('#winnerTwo').show();
                    $('.feeld').off('click', game());
                    restart(); 
                };
            };
        });      
    } ;
    const draw = function () {
        if($('#winnerOne, #winnerTwo').is(':visible')) {
            return; // if a there is a winner, return, otherwise it's a draw
        } else if( id1.length+id2.length == 9) {
                $('#draw').html("It's a Draw, Play again!");
                $('#draw').show();
                restart();    
            };
    };
    playerOne = !playerOne; // change players, after click boolean changes from true to 
    draw();
});
};
game()
});
