import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const GameOverScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text> Game Over Dude</Text>
            <Text> Number of rounds: {props.rounds}</Text>
            <Text> Guessed Numebr: {props.userNumber}</Text>

            <Button title="START GAME" onPress={props.newGame}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default GameOverScreen;