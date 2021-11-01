import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function Players({ whoPlays }) {
  return (
    <View style={styles.players}>
      <View>
        <Text style={[styles.symbol, whoPlays === 'X' ? styles.symbolGreen : '']}>X</Text>
      </View>
      <View>
        <Text style={[styles.symbol, whoPlays === 'O' ? styles.symbolGreen : '']}>O</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  players: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  symbol: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 48
  },
  symbolGreen: {
    color: 'green'
  }
});
