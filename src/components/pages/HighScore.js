import React, {useState, useEffect} from "react";

import axios from 'axios';



import "../../styles/highscore.scss"


const HighScore = () => {
  
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
  
  const [ccName, setCCName] = useState("Player 1")
  const [ccScore, setCCScore] = useState(0)

  const [ciName, setCIName] = useState("Player 2")  
  const [ciScore, setCIScore] = useState(0)

  const [ccmName, setCCMName] = useState("Player 3")  
  const [ccmScore, setCCMScore] = useState(0)

  const getHighScore = async () => {
    const updateCCName = (ccName) => {
      setCCName(ccName)
    }
    const updateCCScore = (ccScore) => {
      setCCScore(ccScore)
    }

    const updateCIName = (ciName) => {
      setCIName(ciName)
    }
    const updateCIScore = (ciScore) => {
      setCIScore(ciScore)
    }

    const updateCCMName = (ccmName) => {
      setCCMName(ccmName)
    }
    const updateCCMScore = (ccmScore) => {
      setCCMScore(ccmScore)
    }

    let getCIScores = await axios.get('https://creeptastic.herokuapp.com/api/v1/creep/5');
    // CREEP INVASION
    updateCIName(getCIScores.data.name)
    updateCIScore(getCIScores.data.highscores)
    
    let getCCScores = await axios.get('https://creeptastic.herokuapp.com/api/v1/creep/7');
    // CREEP CRAZE MAZE
    updateCCMName(getCCScores.data.name)
    updateCCMScore(getCCScores.data.highscores)

    let getCCMScores = await axios.get('https://creeptastic.herokuapp.com/api/v1/creep/6');
    // CREEPCRAFT
    updateCCName(getCCMScores.data.name)
    updateCCScore(getCCMScores.data.highscores)
    }

  useEffect( () => {
    getHighScore();
  })

// KEEP!!https://www.smashingmagazine.com/2020/06/rest-api-react-fetch-axios/

  return (
    <div className="targetSlides"> 
        <div className="block_holder">
            <h2 className="highscore">Current Highscores:</h2>
            <h4 id="ccSpace">CreepCraft: </h4>
            <div className="apiCCWrapper wrapper">
              <div className="playName">{ccName}</div>
              <div className="playScore">{ccScore}</div>
            </div>
            <h4>Creep Invasion:</h4>
            <div className="apiCIWrapper wrapper">
              <div className="playName">{ciName}</div>
              <div className="playScore">{ciScore}</div>
            </div>
            <h4 >Creep Craze Maze: </h4>
            <div className="apiCCMWrapper wrapper"id="ccmSpace">
              <div className="playName">{ccmName}</div>
              <div className="playScore">{ccmScore}</div>
            </div>
            
            <div id="button_wrap">
            <button onClick={getHighScore} className="bubbly" type="button">Update Scores</button>
            </div>
        </div>
    </div>
  );
}

export default HighScore