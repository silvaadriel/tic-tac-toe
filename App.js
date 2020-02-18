import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Modal, TouchableHighlight } from 'react-native';

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
  const [winner, setWinner] = useState('');
  const [hasWinner, setHasWinner] = useState(false);
  const [symbols, setSymbols] = useState(INITIAL_STATE);

  useEffect(() => {
    verifyWinner();
  }, [symbols])

  const verifyWinner = () => {
    for (let index = 0; index < symbols.length; index += 3) {
      if (symbols[index].value === symbols[index + 1].value && symbols[index].value === symbols[index + 2].value) {
        if (symbols[index].value) {
          setWinner(symbols[index].value)
          return setHasWinner(true);
        }
      }
    }

    if (symbols[0].value === symbols[3].value && symbols[0].value === symbols[6].value) {
      if (symbols[0].value) {
        setWinner(symbols[0].value)
          return setHasWinner(true);
      }
    }
    if (symbols[1].value === symbols[4].value && symbols[1].value === symbols[7].value) {
      if (symbols[1].value) {
        setWinner(symbols[1].value)
          return setHasWinner(true);
      }
    }
    if (symbols[2].value === symbols[5].value && symbols[2].value === symbols[8].value) {
      if (symbols[2].value) {
        setWinner(symbols[2].value)
          return setHasWinner(true);
      }
    }

    if (symbols[0].value === symbols[4].value && symbols[0].value === symbols[8].value) {
      if (symbols[0].value) {
        setWinner(symbols[0].value)
        return setHasWinner(true);
      }
    }
    if (symbols[2].value === symbols[4].value && symbols[2].value === symbols[6].value) {
      if (symbols[2].value) {
        setWinner(symbols[2].value)
        return setHasWinner(true);
      }
    }
    return '';
  };

  const handleOnTouchStart = index => {
    if (symbols[index].value === '') {
      const symbolsCopy = [ ...symbols ];
      symbolsCopy[index] = { value: whoPlays };
      setSymbols(symbolsCopy);
      setWhoPlays(whoPlays === 'X' ? 'O' : 'X');
    }
  };

  const resetGame = () => {
    setSymbols(INITIAL_STATE);
    setWhoPlays('X');
    setWinner('');
    setHasWinner(false);
  };

  const handleOnPressRestartButton = () => {
    resetGame();
  };

  const handleCloseModal = () => {
    resetGame();
  }

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
      <View style={styles.players}>
        <View><Text style={[styles.symbol, whoPlays === 'X' ? styles.symbolGreen : '']}>X</Text></View>
        <View><Text style={[styles.symbol, whoPlays === 'O' ? styles.symbolGreen : '']}>O</Text></View>
      </View>
      <Button
        title="Restart"
        color="#777"
        onPress={handleOnPressRestartButton}
      />
      {
        hasWinner && (
          <View style={styles.modalContainer}>
            <View style={styles.modal}>
              <Text style={styles.modalTitle}>Winner</Text>
              <Text style={styles.modalContent}>"{ winner }" player won the match!</Text>
              <Button
                title="Play Again"
                onPress={handleCloseModal}
              />
            </View>
          </View>
        )
      }
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 300,
    width: 300,
  },
  symbolSquare: {
    height: 100,
    width: 100,
    backgroundColor: '#fff',
    borderWidth: 1,
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
    marginTop: 20,
    fontSize: 48,
  },
  symbolGreen: {
    color: 'green',
  },
  modalContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#0004',
  },
  modal: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '80%',
    height: 200,
    padding: 20,
    borderWidth: 1,
    borderColor: '#d6d7da',
    backgroundColor: '#fff',
  },
  modalTitle: {
    fontSize: 26,
    textAlign: 'center',
  },
  modalContent: {
    fontSize: 18,
    textAlign: 'center',
  }
});
