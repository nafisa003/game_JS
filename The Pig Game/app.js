

var roundScore,score,activePlayer,gamePlaying,previous,dice1,dice2;

initialize_game();


  document.querySelector('.btn-roll').addEventListener('click' ,function()
  {
    if(gamePlaying){
       
        
      //1.random number
     dice1=Math.floor(Math.random()*6)+1; 
     dice2=Math.floor(Math.random()*6)+1; 
   
    //2.display result
    document.getElementById('dice-1').style.display='block';
    document.getElementById('dice-2').style.display='block';
  //diceDOM.style.display='block';
  document.getElementById('dice-1') .src='img/dice-'+ dice1+ '.png';
  document.getElementById('dice-2') .src='img/dice-'+ dice2+ '.png';

     


    //3.update currentscore only if the rolled number was not 1
   if(dice1!==1 && dice2!==1)
    {
      roundScore=roundScore+(dice1+dice2); //add to score
      document.querySelector('#current-' +activePlayer ).textContent=roundScore;
    }
    else
    {
      //next player's turn
     nextPlayer();
    }
  
  }
  });

  document.querySelector('.btn-hold').addEventListener('click', function()
  {  if(gamePlaying){
       //add roundScore to globalScore
      scores[activePlayer]+=roundScore;


       //update UI
      document.querySelector('#score-' + activePlayer).textContent=scores[activePlayer];
          
     


       //check for winner
       var fscore=document.querySelector('.final-score').value;
       var winscore;
       if(fscore)
       {
           winscore=fscore;
       }
       else{
           winscore=100;
       }
       if(scores[activePlayer]>=winscore)
       {
         document.querySelector('#name-'+ activePlayer).textContent="WINNER!!!";
         document.querySelector('.player-'+ activePlayer +'-panel').classList.remove('active');
         document.querySelector('.player-'+ activePlayer +'-panel').classList.add('winner');//winner class created in css
         document.getElementById('dice-1').style.display='none';
         document.getElementById('dice-2').style.display='none';
         gamePlaying=false;
       }
       else{
       //next player's turn
       nextPlayer();
       }
      }
  });

function nextPlayer()
{
  activePlayer=( activePlayer===0)?1:0;
     roundScore=0;
     document.getElementById('current-0').textContent='0';
     document.getElementById('current-1').textContent='0';

     document.querySelector('.player-0-panel').classList.toggle('active');
     document.querySelector('.player-1-panel').classList.toggle('active');
     document.getElementById('dice-1').style.display='none';
     document.getElementById('dice-2').style.display='none';
}
document.querySelector('.btn-new').addEventListener('click', initialize_game);
function initialize_game()
{
  scores=[0,0];
roundScore=0;
activePlayer=0;
gamePlaying=true;
 
 document.getElementById('dice-1').style.display='none';
 document.getElementById('dice-2').style.display='none';
 document.getElementById('score-0').textContent='0' ;
 document.getElementById('score-1').textContent='0' ;
 document.getElementById('current-0').textContent='0' ;
 document.getElementById('current-1').textContent='0' ;
 document.getElementById('name-0').textContent='Player 1';
 document.getElementById('name-1').textContent='Player 2';
 document.querySelector('.player-0-panel').classList.remove('winner');
 document.querySelector('.player-1-panel').classList.remove('winner');
 document.querySelector('.player-0-panel').classList.remove('active');
 document.querySelector('.player-1-panel').classList.remove('active');
 document.querySelector('.player-0-panel').classList.add('active');

}