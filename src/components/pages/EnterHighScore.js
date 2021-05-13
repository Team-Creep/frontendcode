import React, { useState } from "react";
import axios from 'axios'


import "../../styles/highscore.scss"
import "../../styles/hs_form.scss"

function EnterHighScore(props) {
  const [enterGame, setEnteredGame] = useState(props.enterGame || "");
  const [playerName, setPlayerName] = useState(props.playerName || "");
  const [enterScore, setEnteredScore] = useState(props.enterScore || 0);

  function formSubmit() {
    props.addScore({
      enterGame,
      playerName,
      enterScore
    });

    // const res = await axios.put('https://creeptastic.herokuapp.com/api/v1/creep/put', {name: '', highscore: ''} )


  }


//   setNewHighScore = async (e) => { 
//     e.preventDefault();
//     const sendIt = 'https://creeptastic.herokuapp.com/api/v1/creep';
//     try {
//         await axios.put(`${sendIt}`, {name: this.state.name, highscore: this.state.highscore, gameplayed: this.state.gamename }); 
//     } catch(error){
//         console.log(error);

//     }
// }





  return (
    <div className="targetSlides"> 
        <div className="block_holder">
        <h2 className="hs_title">Beat a high score? Let us know!</h2>
            <div className="formWrapper">
            <form id="EnterHighScore">
                <div className="formChildren">

                <div className="gameFormImpOne">
                <label for="gamePlay">Which game did you play: </label>
                    <select name="gamePlay" value={enterGame} form="EnterHighScore" onChange={e => {setEnteredGame(e.target.value);}} required> 
                    <option value="" disabled selected>Pick a Game</option>
                    <option value="creepcraft">Creepcraft</option>
                    <option value="creepinvaders">Creep Invaders</option>
                    <option value="creepcrazemaze">Creep Craze Maze</option>
                    </select>
                </div>

                <div className="gameFormImpTwo">
                    <label for="playName">Enter your name (Up to 10 letters): </label>
                        <input name="playName" value={playerName} form="EnterHighScore" maxLength="10" onChange={e => {setPlayerName(e.target.value);}}
                        type="text" required> 
                        </input>
                </div>

                <div className="gameFormImpThree">
                    <label for="scoreNumb">Enter your high score: </label>
                        <input name="scoreNumb" value={enterScore} form="EnterHighScore" onChange={e => {setEnteredScore(e.target.value);}}
                        type="text" required> 
                        </input>
                </div>

                {/* //submit button       */}
                <button onClick={formSubmit} className="button" type="button">Submit</button>
                </div>
            </form>
            </div>
        </div>
    </div>
  );
}

export default EnterHighScore;


