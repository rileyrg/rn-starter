import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { friendid:1,name: "Friend" },
        { friendid:2,name: "Friend" },
        { friendid:3,name: "Friend" },
        { friendid:4,name: "Friend" },
        { friendid:5,name: "Friend" },
        { friendid:6,name: "Friend" },
        { friendid:7,name: "Friend" },
        { friendid:8,name: "Friend" },
        { friendid:9,name: "Friend" },
    ];

    return (<FlatList
        data={friends}
        renderItem={({ item }) => {
            return <Text>Name: "{item.name}{item.friendid}"</Text>;
        }}
        keyExtractor={item => item.friendid}
    />
    );
};

const styles = StyleSheet.create({
});

export default ListScreen;
