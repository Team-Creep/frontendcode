import React, { useState } from "react";
import axios from 'axios'


import "../../styles/highscore.scss"
import "../../styles/hs_form.scss"

function EnterHighScore(props) {
    const [enterGame, setEnterGame] = useState(0);
    const [playerName, setPlayerName] = useState("");
    const [enterScore, setEnterScore] = useState(0);

    const formSubmit = async (e)=> {
       await axios.patch(`https://creeptastic.herokuapp.com/api/v1/creep/${enterGame}`,{name: playerName, highscores: enterScore});       
       console.log("Request success")

       const animateButton = function(e) {  
        e.target.classList.remove('animate');
        e.target.classList.add('animate');
        setTimeout(function(){
          e.target.classList.remove('animate');
        },700);
      };
      let bubblyButtons = document.getElementsByClassName("bubbly");
      for (let i = 0; i < bubblyButtons.length; i++) {
        bubblyButtons[i].addEventListener('click', animateButton, false);
      }

       }

  return (
    <div className="targetSlides"> 
        <div className="block_holder">
        <h2 className="hs_title">Beat a high score? Let us know!</h2>
            <div className="formWrapper">
            <form id="EnterHighScore">
                <div className="formChildren">

                <div className="gameFormImpOne">
                <label for="gamePlay">Which game did you play: </label>
                    <select name="gamePlay" value={enterGame} form="EnterHighScore" onChange={e => {setEnterGame(e.target.value);
                    console.log("ENTERED", enterGame)
                    }} required> 
                    
                    <option value="0" disabled selected>Pick a Game</option>
                    <option value="6">Creepcraft</option>
                    <option value="5">Creep Invaders</option>
                    <option value="7">Creep Craze Maze</option>
                    </select>
                </div>

                <div className="gameFormImpTwo">
                    <label for="playName">Enter your name (Up to 10 letters): </label>
                        <input name="playName" value={playerName} form="EnterHighScore" maxLength="10" onChange={e => {setPlayerName(e.target.value)
                        console.log("NAME", playerName)
                        ;}}
                        type="text" required> 
                        </input>
                </div>

                <div className="gameFormImpThree">
                    <label for="scoreNumb">Enter your high score: </label>
                        <input name="scoreNumb" value={enterScore} form="EnterHighScore" onChange={e => {setEnterScore(e.target.value)
                        console.log("SCORE", enterScore)
                        ;}}
                        type="text" required> 
                        </input>
                </div>

                {/* SUBMIT */}
                <button onClick={formSubmit} className="bubbly" type="button">Submit</button>
                </div>
            </form>
            </div>
        </div>
    </div>
  );
}

export default EnterHighScore;


