import React from 'react';

import {Text,StyleSheet,View,Button} from "react-native";

const HomeScreen = ({navigation}) => {
    return (<View>
                <Text style={styles.text}>Hello</Text>
                <Button
                    onPress = {()=> navigation.navigate("Components")}
                    title="Goto components demo"
                />
                <Button
                    onPress = {()=> navigation.navigate("List")}
                    title= "Goto list demo"
                />
                <Button
                    onPress = {()=> navigation.navigate("Images")}
                    title= "Goto image demo"
                />
            </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 50,
    },
});

export default HomeScreen;
