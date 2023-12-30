import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewOneStyle}/>
      <View style={styles.viewTwoStyle}/>
      <View style={styles.viewThreeStyle}/>
    </View>
  );

}

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
    borderColor: 'black',
    height: 200,
    display:'flex',
    justifyContent:'space-between',
    flexDirection:'row',
  },
  viewOneStyle: {
    borderWidth: 1,
    borderColor: 'black',
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
  viewTwoStyle: {
    borderWidth: 1,
    borderColor: 'black',
    width: 50,
    height: 50,
    backgroundColor: 'green',
    marginTop:50
  },
  viewThreeStyle: {
    borderWidth: 1,
    borderColor: 'black',
    width: 50,
    height: 50,
    backgroundColor: 'blue',
  }
});

export default BoxScreen;
