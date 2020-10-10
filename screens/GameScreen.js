import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Text, Button, Alert } from 'react-native';
import Card from '../components/Card';
import NumberContainer from '../components/NumberaContainer';


const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    if (randomNumber === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return randomNumber;
    }
}

const GameScreen = (props) => {

    const [currentGuess, setCurrentGuess] =  useState(generateRandomBetween.bind(this, 1, 100, props.userChoice));

    // const [rounds, setRounds] = useEffect(0);

    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    // const { userChoice, onGameOver } = props;

    // useEffect(() => {
    //     if (currentGuess === props.userChoice) {
    //         props.onGameOver(this, rounds);
    //     }
    // }, [currentGuess, props.userChoice, props.onGameOver])

    const nextGuessHandler = (direction) => {
        if ((direction === 'lower' && currentGuess < props.userChoice)
            || (direction === 'higher' && currentGuess > props.userChoice)) {
            Alert.alert("Don't cheat", "You know this is",
                [{
                    text: 'Sorry',
                    style: 'cancel'

                }])
            return;    
        }
        if (direction === 'lower') {
            currentHigh.current = currentGuess;

        } else {
            currentLow.current = currentGuess;
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        // setRounds(curRounds => curRounds + 1);
    }

    return (
        <View style={styles.screen}>
            <Text>
                Oponnent's Guess
            </Text>
            <NumberContainer>
                {currentGuess}
            </NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="LOWER" onPress={nextGuessHandler.bind(this, 'lower')}>

                </Button>
                <Button title="HIGHER" onPress={nextGuessHandler.bind(this, 'higher')} >
                </Button>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 15,
        alignItems: 'center',

    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20,
        width: 300,
        maxWidth: '80%'
    }
});

export default GameScreen;