import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from "../components/ColorCounter.js";

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    console.log(red);

    const checkColorValue = (colorValue) => {
        if (colorValue > 255)
            return 255;
        else if (colorValue <= 0)
            return 0;
        else
            return color;
    }


    return (
        <View>
            <ColorCounter
                onIncrease={() => setRed(checkColorValue(red + COLOR_INCREMENT))}
                onDecrease={() => setRed(checkColorValue(red - COLOR_INCREMENT))}
                color="Red" />
            <ColorCounter
                onIncrease={() =>  setGreen(checkColorValue(green + COLOR_INCREMENT)) }
                onDecrease={() =>  setGreen(checkColorValue(green - COLOR_INCREMENT)) }
                color="Green" />
            <ColorCounter
                onIncrease={() => setBlue(checkColorValue(blue + COLOR_INCREMENT)) }
                onDecrease={() => setBlue(checkColorValue(blue - COLOR_INCREMENT)) }
                color="Blue" />
            <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red},${green},${blue})` }} />
        </View>
    );
};


const styles = StyleSheet.create({

});

export default SquareScreen;
