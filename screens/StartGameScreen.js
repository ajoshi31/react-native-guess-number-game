import React, { useState } from 'react';
import {
    View, Text, StyleSheet, Keyboard, Button, TouchableWithoutFeedback, Alert
} from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import NumberContainer from '../components/NumberaContainer';
import colors from '../constants/colors';

const StartGameScreen = (props) => {

    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState('');

    const numberInputHandler = (input) => {
        setEnteredValue(input.replace(/[^0-9]/g, ''))
    }

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);

    }

    const confirmInputHandler = () => {
        const choosenNumber = parseInt(enteredValue, 10);
        if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
            Alert.alert('Invalid numebr', 'Number has to be between 1 and 99',
                [{
                    text: 'Okay',
                    style: 'destructive',
                    onPress: resetInputHandler
                }])
            return;
        }
        setConfirmed(true);
        setSelectedNumber(choosenNumber)
        setEnteredValue('');
        Keyboard.dismiss();
    }

    let confirmedOutput;
    if (confirmed) {
        confirmedOutput = (
            <Card style={styles.summaryContainer}>
                <Text>Choosed Number </Text>
                <NumberContainer>
                    {selectedNumber}
                </NumberContainer>
                <Button title="START GAME" onPress={props.onStartGame.bind(this, selectedNumber)}></Button>
            </Card>
        )
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.screen} >
                <Text style={styles.title}>Start a new game</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a number</Text>
                    <Input
                        blurOnSubmit autoCpatalize='none'
                        autoCorrect={false} keyboardType='number-pad' maxLength={2}
                        style={styles.input}
                        onChangeText={numberInputHandler}
                        value={enteredValue} />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button} >
                            <Button title="RESET" onPress={resetInputHandler} color={colors.accent} ></Button>
                        </View>
                        <View style={styles.button} >
                            <Button title="CONFIRM" onPress={confirmInputHandler} color={colors.primary}></Button>
                        </View>

                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>

    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        marginVertical: 10,
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'

    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        width: 100
    },
    input: {
        width: 50,
        textAlign: 'center'
    },
    summaryContainer: {
        marginTop: 30,
        alignItems: 'center'
    }
});


export default StartGameScreen