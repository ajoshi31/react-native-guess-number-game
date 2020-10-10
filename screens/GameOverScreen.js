import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const GameOverScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text> Game Over Dude</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems : 'center'
    }
});

export default GameOverScreen;