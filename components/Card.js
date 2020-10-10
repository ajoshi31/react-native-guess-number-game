import React from 'react';

import { View, StyleSheet } from 'react-native';

const Card = (props) => {
    return (
        <View style={{ ...styles.card, ...props.style }}>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 20,
        borderRadius: 10,
        // Shadow property only work in ios and for andorid use evevation
        shadowColor: 'black',
        shadowRadius: 5,
        shadowOpacity: 0.26,
        shadowOffset: {
            width: 0,
            height: 2
        },
        elevation: 1,
        backgroundColor: 'white',
    }
});

export default Card;