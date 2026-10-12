
let gameCards = document.querySelectorAll(".gameCard");
let NumOfMove=document.querySelector("#NumOfMove");
let NumOfMatched=document.querySelector("#NumOfMatched");
let ResetBtn=document.querySelector("#resetBtn");

let emojis = [
    "🍎", "🍎",
    "🐱", "🐱",
    "🚀", "🚀",
    "❤️", "❤️",
    "🌸", "🌸",
    "⚽", "⚽",
    "🎵", "🎵",
    "🐼", "🐼"
];

let position = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let MatchingArray=[];
let FirstClick=null;
let secClick=null;
let count=0;
let score=0;
let move=0;

function printEmojis() {

    for (let i = 0; i < 16; i++) {

        let randIndex = Math.floor(Math.random() * emojis.length);
        let randEmoji = emojis[randIndex];

        let randPositionIndex = Math.floor(Math.random() * position.length);
        let randCard = position[randPositionIndex];

        gameCards[randCard].dataset.emoji = randEmoji;

        position.splice(randPositionIndex, 1);
        emojis.splice(randIndex, 1);
    }

    gameCards.forEach(function(card,index) {
    card.addEventListener("click", function() {
        card.textContent = card.dataset.emoji;
        card.style.backgroundColor = "#dad9d9";

        if(FirstClick===null){
                FirstClick=index;
                count++;
        }
        else{
            secClick=index;
            count++;
        }

        if(count===2){
           
            if(gameCards[FirstClick].dataset.emoji===gameCards[secClick].dataset.emoji){
                 score++;
                 NumOfMatched.textContent=score;
                 
            }
            FirstClick = null;
            secClick = null;
            count=0;
        }
     
          move++;
        NumOfMove.textContent=`${move}`;
        setTimeout(function() {
            card.textContent = "?";
            card.style.backgroundColor = " #2f6343";
        }, 1000);
    });
});
}

printEmojis();

ResetBtn.addEventListener("click",function(){
 move=0;
 score=0;
 NumOfMove.textContent=`${move}`;
 NumOfMatched.textContent=score;
});

