import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
const ComponentsScreen = () => {
    const name = "Homer Simpson!"
    return <View>
        <Text style={styles.textTitle}>Getting started with react native.</Text>
        <Text style={styles.textName}>My name is {name}.</Text>
    </View>;
};

const styles = StyleSheet.create({
    textTitle: {
        fontSize: 45
    },
    textName: {
        fontSize: 20
    }
});

export default ComponentsScreen;
