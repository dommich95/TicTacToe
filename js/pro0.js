$(document).ready(function(){

const possibleWins=[
    ['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'],
    ['1', '4', '7'], ['2', '5', '8'], ['3', '6', '9'],
    ['1', '5', '9'], ['7', '5', '3']
];

let playerOne=true;

$('.feeld').on('click', function(e){
       
    if ($(this).html()=="X" || $(this).html() =="O"){
        return;
    }else if(playerOne== true){
        $(this).html("X").addClass("X")
        var idArrayX = [];
        $('.X').each(function () {
        idArrayX.push(this.id);
        parseInt(idArrayX)
        var id1=idArrayX.join('')
        console.log(id1)
        for(let i=0;i<possibleWins.length;i++){
            let index= possibleWins[i];
            let posWin=index.join('');
            if(id1==posWin){
                $('.win1').html(+1)
        }}
    })
        }else if(playerOne== false){
            $(this).html("O").addClass("O")
            var idArrayO = [];
            $('.O').each(function () {
            idArrayO.push(this.id);
            parseInt(idArrayO)
            var id2=idArrayO.join('')
            console.log(id2)

       for(let i=0;i<possibleWins.length;i++){
        let index= possibleWins[i];
        let posWin=index.join('');
        // console.log(posWin)
        if(id2==posWin){
            $('.win2').html(+1)
        }} 
     });
    };
     
     playerOne= !playerOne;
     
     
})

//   const winner= function(){
//     index=[];
//     var idArrayX = [];
//     $('.X').each(function () {
//         idArrayX.push(this.id);
//         console.log(idArrayX)
//     });
//      var idArrayO = [];
//     $('.O').each(function () {
//         idArrayO.push(this.id);
//         console.log(idArrayO)
//     });

//     for(let i=0;i<possibleWins.length;i++){
//         let index= possibleWins[i];
//         if(index==idArrayX){
//             alert ('X wins')
//         }else if( index===idArrayO){
//             alert('O wins')
//     }
// }}
// winner()




})