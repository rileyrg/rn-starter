//https://www.udemy.com/course/the-complete-react-native-and-redux-course/learn/lecture/15706932#notes
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>
        BoxScreen
      </Text>
    </View>
  );

}

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black'
  },
  textStyle: {
    borderWidth: 1,
    borderColor: 'red',
    margin:10,
  }
});

export default BoxScreen;
