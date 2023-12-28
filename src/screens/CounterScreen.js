import React,{useReducer} from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';

const reducer = (state,action) =>{
    console.log("in reducer",state);
    return {...state, counter: state.counter+action.amount};
};

const CounterScreen = () => {
    const [state,dispatch] = useReducer(reducer,{counter:0});
    const {counter} = state;
    return    (
        <View>
            <Button title="Increase" onPress = {()=> {
                dispatch({amount:1});
            }}/>
            <Button title="Decrease" onPress = {()=> {
                dispatch({amount:-1});
            }}/>
            <Text>Current count: {counter}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default CounterScreen;
