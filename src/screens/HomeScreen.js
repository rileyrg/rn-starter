import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = () => {
    return <View>
               <Text style={styles.text}>Hello</Text>
               <Button
                   onPress = {()=> console.log("button pressed")}
                   title = "Got to components demo"
               />
           </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
  },
});

export default HomeScreen;
