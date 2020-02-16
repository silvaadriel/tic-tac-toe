import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const INITIAL_STATE = [
  { value: '' },
  { value: '' },
  { value: '' },
  { value: '' },
  { value: '' },
  { value: '' },
  { value: '' },
  { value: '' },
  { value: '' },
];

export default function App() {
  const [whoPlays, setWhoPlays] = useState('X');
  const [symbols, setSymbols] = useState(INITIAL_STATE);

  const handleOnTouchStart = index => {
    if (symbols[index].value === '') {
      const symbolsCopy = [ ...symbols ];
      symbolsCopy[index] = { value: whoPlays };
      setSymbols(symbolsCopy);
      setWhoPlays(whoPlays === 'X' ? 'O' : 'X');
    }
  };

  const handleOnPressRestartButton = () => {
    setSymbols(INITIAL_STATE);
    setWhoPlays('X');
  };

  return (
    <View style={styles.container}>
        <Text>Tic-Tac-Toe</Text>
        <View style={styles.square}>
          {
            symbols.map((symbol, index) => (
              <View style={styles.symbolSquare} onTouchStart={() => handleOnTouchStart(index)} key={index}>
                <Text style={styles.symbol}>{ symbol.value }</Text>
              </View>
            ))
          }
        </View>
        <Button
          title="Restart"
          color="#777"
          onPress={handleOnPressRestartButton}
        />
        <View style={styles.players}>
          <View><Text style={[styles.symbol, whoPlays === 'X' ? styles.symbolGreen : '']}>X</Text></View>
          <View><Text style={[styles.symbol, whoPlays === 'O' ? styles.symbolGreen : '']}>O</Text></View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  square: {
    display: 'flex',
    flexWrap: 'wrap',
    height: '300px',
    width: '300px',
  },
  symbolSquare: {
    height: '100px',
    width: '100px',
    backgroundColor: '#fff',
    borderWidth: '1px',
    borderColor: '#d6d7da',
  },
  players: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  symbol: {
    textAlign: 'center',
    marginTop: '20px',
    fontSize: '3rem',
  },
  symbolGreen: {
    color: 'green',
  }
});
