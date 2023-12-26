import React,{useState} from 'react';
import { View, Text, StyleSheet,Button,FlatList } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ColorScreen = () => {
    const [colors,setColors] = useState([]);
    console.log(colors);
    return    (
        <View>
            <Button title="Add A Color" onPress = {()=> {
                setColors([...colors,randomRGB()]);
            }}/>
            <FlatList
                keyExtractor={(item)=>{item}} // a dirty hack : defo bettre idea to use an index here.
                data={colors}
                renderItem={({item})=>{
                    return <View style={{height:100,width:100,backgroundColor: item}}/>
                }}
            />
        </View>
    );
};

const randomRGB = () => {
    const red=Math.floor(Math.random()*256);
    const green=Math.floor(Math.random()*256);
    const blue=Math.floor(Math.random()*256);
    return `rgb(${red},${green},${blue})`;
};

const styles = StyleSheet.create({

});

export default ColorScreen;
