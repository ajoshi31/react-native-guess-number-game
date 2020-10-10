import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import GameOverScreen from './screens/GameOverScreen';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  }

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }

  const gameOverHandler = (numOfRounds) => {
    setGuessRounds(numOfRounds)
  }

  let content = <StartGameScreen onStartGame={startGameHandler} ></StartGameScreen>;
  if(userNumber && guessRounds <= 0){
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} ></GameScreen>;
  } else if( guessRounds > 0){
    content = <GameOverScreen  rounds={guessRounds} userNumber={userNumber} newGame={configureNewGameHandler} />
  }

  return (
    <View style = {styles.screen} >
      <Header title="Guess a n number"></Header>
      {content} 
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
