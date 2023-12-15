import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        {name: "Friend1",age:1},
        {name: "Friend2",age:2},
        {name: "Friend3",age:3},
        {name: "Friend4",age:4},
        {name: "Friend5",age:5},
        {name: "Friend6",age:6},
        {name: "Friend7",age:7},
        {name: "Friend8",age:8},
        {name: "Friend9",age:9},
    ];

    return (<FlatList
                //horizontal
                vertical
                showsHorizontalScrollIndicator={false}
                keyExtractor={friend => friend.name}
                data={friends}
                renderItem={({ item }) => {
                    return <Text style={styles.textStyle}>
                               Name: {item.name}, age: {item.age}
                           </Text>;
                }}
    />
    );
};

const styles = StyleSheet.create({
    textStyle:{
        marginVertical: 10
    }
});

export default ListScreen;
