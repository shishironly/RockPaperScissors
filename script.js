// The rule is rock beats scissors, scissors beat paper and paper beats rock.

var you; // yourchoice
var yourScore=0;
var opponent; //opponentchoice
var opponentScore=0;

var choices=['rock', 'paper', 'scissors'];

window.onload=function(){
    for (let i=0;i<3;i++){

        // creates <img id='rock' src='rock.png'>. Similarly, for paper and scissors
        let choice=document.createElement('img');
        choice.id=choices[i];
        choice.src= choices[i]+ '.png';
        document.getElementById('choices').append(choice);    
        choice.addEventListener('click',selectChoice); 
    }
}

function selectChoice(){
    you= this.id; // returns the clicked item
    document.getElementById('your-choice').src= you + '.png';

    //random for opponent
    opponent=choices[Math.floor(Math.random()*3)];  // geneates number 0-2
    document.getElementById('opponent-choice').src=opponent +'.png'

    //check for winner
    if (you==opponent){
        yourScore+=1;
        opponentScore+=1;
    }
    else{
        if(you=='rock'){
            if(opponent=='scissors'){
                yourScore+=1;
            }
            else if(opponent=='paper'){
                opponentScore+=1;
            }
        }

        else if(you=='paper'){
            if(opponent=='rock'){
                yourScore+=1;
            }
            else if (opponent=='scissors'){
                opponentScore+=1;
            }
        }

        else if(you=='scissors'){
            if(opponent=='paper'){
                yourScore+=1;
            }
            else if (opponent=='rock'){
                opponentScore+=1;
            }
        }
    }

    document.getElementById('opponent-score').innerText=opponentScore;
document.getElementById('your-score').innerText=yourScore;

}

