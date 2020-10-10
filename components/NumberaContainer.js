import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Colors from '../constants/colors';

const NumberContainer = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>
                {props.children}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth : 2,
        borderColor: Colors.primary,
        padding: 10,
        borderRadius: 15,
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    number: {
        color: Colors.accent,
        fontSize: 28,
        fontWeight: "bold"
    }

});

export default NumberContainer;