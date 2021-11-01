import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';

export function Squares({ symbols, onPress }) {
  return (
    <View style={styles.square}>
      {symbols.map((symbol, index) => (
        <TouchableWithoutFeedback onPress={() => onPress(index)} key={index}>
          <View style={styles.symbolSquare}>
            <Text style={styles.symbol}>{symbol.value}</Text>
          </View>
        </TouchableWithoutFeedback>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  square: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 300,
    width: 300
  },
  symbolSquare: {
    height: 100,
    width: 100,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#d6d7da'
  },
  symbol: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 48
  }
});
