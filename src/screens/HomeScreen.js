import React from "react";
import {
    Text,
    StyleSheet,
    View,
    Button,
    TouchableOpacity} from "react-native";

const HomeScreen = () => {
    return <View>
               <Text style={styles.text}>Hello</Text>
               <Button
                   onPress = {()=> console.log("button pressed")}
                   title = "Got to components demo"
               />
               <TouchableOpacity
                   onPress = {()=> console.log("list pressed")}
               >
                   <Text>Goto List Demo</Text>
                   <Text>Goto List Demo</Text>
                   <Text>Goto List Demo</Text>
               </TouchableOpacity>
           </View>
};

const styles = StyleSheet.create({
    text: {
        fontSize: 50,
    },
});

export default HomeScreen;
