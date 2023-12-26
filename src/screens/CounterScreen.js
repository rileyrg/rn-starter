import React from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const CounterScreen = () => {
    //todo: fix this
    let counter=0;
    return    (
        <View>
            <Button title="Increase" onPress = {()=> {
                counter++;
                console.log(counter);
            }}/>
            <Button title="Decrease" onPress = {()=> {
                counter--;
                console.log(counter);
            }}/>
            <Text>Current count: {counter}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default CounterScreen;
