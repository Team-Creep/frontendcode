import React, {useState, useEffect} from "react";

import axios from 'axios';



import "../../styles/highscore.scss"
// import { act } from "react-dom/test-utils";

const HighScore = () => {

  const [ccName, setCCName] = useState("Player 1")
  const [ccScore, setCCScore] = useState(77)

  const [ciName, setCIName] = useState("Player 2")  
  const [ciScore, setCIScore] = useState(88)

  const [ccmName, setCCMName] = useState("Player 3")  
  const [ccmScore, setCCMScore] = useState(99)

  const getHighScore = async () => {
    let getScores = await axios.get('https://creeptastic.herokuapp.com/api/v1/creep');
    // Creepcraft
    let nameOne = getScores.data[0].name;
    let scoreOne = getScores.data[0].highscores;
    let gameOne = getScores.data[0].gamename;
    let oneConcat = {nameOne, scoreOne, gameOne}

    // Creep craze maze
    let nameTwo = getScores.data[1].name;
    let scoreTwo = getScores.data[1].highscores;
    let gameTwo = getScores.data[1].gamename;
    let twoConcat = {nameTwo, scoreTwo, gameTwo}

    // Creep invasion
    let nameThree = getScores.data[2].name;
    let scoreThree = getScores.data[2].highscores;
    let gameThree = getScores.data[2].gamename;
    let threeConcat = {nameThree, scoreThree, gameThree}  
    
    
    console.log("HERE", oneConcat, twoConcat, threeConcat)
    // let nameTwo = getScores.data[1].name;
    // let scoreTwo = getScores.data[1].highScore;
    // let nameThree = getScores.data[2].name;
    // let scoreThree = getScores.data[2].highScore;

    // const updateNames = (nameOne, nameTwo, nameThree, scoreOne, scoreTwo, scoreThree) => {
    //   setCCName = nameOne;
    //   setCCScore = scoreOne;

    //   setCCMName
      
    // }

    }






    // fetch('https://creeptastic.herokuapp.com/api/v1/creep')
    //   .then(response => response.json())
    //   .then(data => console.log(data));

  // }

  useEffect( () => {
    getHighScore();
  })

// KEEP!!https://www.smashingmagazine.com/2020/06/rest-api-react-fetch-axios/
  // axios({
  //   method: 'get',
  //   url: 'https://creeptastic.herokuapp.com/api/v1/creep',
  // })
  // .then(data => {
  //   console.log('Please be a name and score: ', data.data[0].name, data.data[0].highscores);
  // });









  return (
    <div className="targetSlides"> 
        <div className="block_holder">
            <h2 className="highscore">Current Highscores:</h2>
            <h4>CreepCraft: </h4>
            <div className="apiCCWrapper wrapper">
              <div className="playName">{ccName}</div>
              <div className="playScore">{ccScore}</div>
            </div>
            <h4>Creep Invasion:</h4>
            <div className="apiCIWrapper wrapper">
              <div className="playName">{ciName}</div>
              <div className="playScore">{ciScore}</div>
            </div>
            <h4>Creep Craze Maze: </h4>
            <div className="apiCCMWrapper wrapper">
              <div className="playName">{ccmName}</div>
              <div className="playScore">{ccmScore}</div>
            </div>
        </div>
    </div>
  );
}

export default HighScore