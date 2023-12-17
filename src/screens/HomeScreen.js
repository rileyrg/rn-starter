import React from "react";
import {
    Text,
    StyleSheet,
    View,
    Button,
    TouchableOpacity} from "react-native";

const HomeScreen = ({navigation}) => {
    return <View>
               <Text style={styles.text}>Hello</Text>
               <Button
                   onPress = {()=> navigation.navigate("Components")}
                   title = "Got to components demo"
               />
               <TouchableOpacity
                   onPress = {()=> navigation.navigate("List")}
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
