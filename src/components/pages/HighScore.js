import React, {useState, useEffect} from "react";
import axios from 'axios';

import "../../styles/highscore.scss"

const HighScore = () => {

  const [score, setScore] = useState('')

  const getHighScore = async () => {
    let scores = await axios.get('INSERT LINK TO API');
    scores = scores.data[0];
    setScore(scores.highScoreRetrieved);
    console.log('highScoreRetrieved', scores.highScoreRetrieved);
  }

  useEffect( () => {
    getHighScore();
  })

  return (
    <div className="targetSlides"> 
        <div className="block_holder">
            <h2 className="highscore">Current Highscores:</h2>
            <p>CreepCraft: {score}</p>
            <p>Creep Invasion:</p>
            <p>Other Game: </p>
        </div>
    </div>
  );
}

export default HighScore