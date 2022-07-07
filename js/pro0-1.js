
let reset=$('#reset').hide();
$(document).ready(function () {

const possibleWins=[
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
    const restart=function () {
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
    if ($(this).html() === 'X' || $(this).html() === 'O') {
        return;
    } else if(playerOne == true) {
        $(this).html('X').addClass('X');
        var idArrayX = [];
        $('.X').each(function () {
            idArrayX.push(this.id);
            parseInt(idArrayX);
            id1 = idArrayX.join('');
            for(let i = 0; i < possibleWins.length; i++) {    
                let index = possibleWins[i];
                console.log(index)
                let posWin = index.join('');
                if(id1.includes(posWin[0]) && id1.includes(posWin[1]) && id1.includes(posWin[2])) {
                    winX1 += 1;
                    $('.win1').html(winX1);
                    $('#winnerOne').html("Player One wins!");
                    $('#winnerOne').show() ; 
                    $('.feeld').off('click', game());
                    restart();
                }
            }
        })
    } else if (playerOne === false) {
        $(this).html('O').addClass('O')
        let idArrayO = [];
        $('.O').each(function  () {
            idArrayO.push(this.id);
            parseInt(idArrayO);
            id2=idArrayO.join('');
            for(let i = 0; i< possibleWins.length; i++) {
                let index = possibleWins[i];
                let posWin = index.join('');
                if(id2.includes(posWin[0]) && id2.includes(posWin[1]) && id2.includes(posWin[2])) {
                    winX2 += 1;
                    $('.win2').html(winX2);
                    $('#winnerTwo').html("Player Two wins!");
                    $('#winnerTwo').show();
                    $('.feeld').off('click', game());
                    restart(); 
                    };
            };
        });       
    };
    const draw = function () {
        for(let i = 0 ; i < possibleWins.length; i++) { 
            let index = possibleWins[i];
            let posWin = index.join('');
            if(id1.includes(posWin[0]) && id1.includes(posWin[1]) && !id1.includes(posWin[2]) && id1.length+id2.length == 9 || id1.includes(posWin[0]) && !id1.includes(posWin[1]) && id1.includes(posWin[2]) && id1.length+id2.length == 9 ||!id1.includes(posWin[0]) && id1.includes(posWin[1]) && id1.includes(posWin[2]) && id1.length+id2.length == 9 || id2.includes(posWin[0]) && id2.includes(posWin[1]) && !id2.includes(posWin[2]) && id1.length+id2.length == 9 || id2.includes(posWin[0]) && !id2.includes(posWin[1]) && id2.includes(posWin[2]) && id1.length+id2.length == 9 || !id2.includes(posWin[0]) && id2.includes(posWin[1]) && id2.includes(posWin[2]) && id1.length+id2.length == 9) {
                $('#draw').html("It's a Draw, Play again!");
                $('#draw').show();
                restart();    
            };
        };
    };
    playerOne = !playerOne;
    draw();
});
};
game()
});
