import React, { useContext } from 'react';
import Completed from '../../components/achievements/Completed';
import Clicker from '../../components/clicker/Clicker';
import GameData from '../../components/gameData/GameData';
import LevelAnimation from '../../components/levelAnimation/LevelAnimation';
import ScoresDisplay from '../../components/scoresDisplay/ScoresDisplay';
import { OptionContext } from '../../context/OptionContext';

function Main() {
  const { toggleLevelComplete, setToggleLevelComplete } =
    useContext(OptionContext);

  return (
    <main className='main__game'>
      <ScoresDisplay />
      {toggleLevelComplete ? <Completed /> : <Clicker />}
      <GameData />
      <LevelAnimation />
    </main>
  );
}

export default Main;
