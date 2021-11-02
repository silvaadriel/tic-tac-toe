import React, { useState, useEffect } from 'react';
import { Text, Button } from 'react-native';

import { Players } from '../../components/Players';
import { Squares, Symbol } from '../../components/Squares';
import { WinnerModal } from '../../components/WinnerModal';

import { Container } from './styles';

const INITIAL_STATE: Symbol[] = [
  { value: '' },
  { value: '' },
  { value: '' },
  { value: '' },
  { value: '' },
  { value: '' },
  { value: '' },
  { value: '' },
  { value: '' }
];

export function TicTacToe() {
  const [whoPlays, setWhoPlays] = useState('X');
  const [winner, setWinner] = useState('');
  const [hasWinner, setHasWinner] = useState(false);
  const [symbols, setSymbols] = useState(INITIAL_STATE);

  useEffect(() => {
    verifyWinner();
  }, [symbols]);

  const verifyWinner = () => {
    for (let index = 0; index < symbols.length; index += 3) {
      if (symbols[index].value === symbols[index + 1].value && symbols[index].value === symbols[index + 2].value) {
        if (symbols[index].value) {
          setWinner(symbols[index].value);
          return setHasWinner(true);
        }
      }
    }

    if (symbols[0].value === symbols[3].value && symbols[0].value === symbols[6].value) {
      if (symbols[0].value) {
        setWinner(symbols[0].value);
        return setHasWinner(true);
      }
    }
    if (symbols[1].value === symbols[4].value && symbols[1].value === symbols[7].value) {
      if (symbols[1].value) {
        setWinner(symbols[1].value);
        return setHasWinner(true);
      }
    }
    if (symbols[2].value === symbols[5].value && symbols[2].value === symbols[8].value) {
      if (symbols[2].value) {
        setWinner(symbols[2].value);
        return setHasWinner(true);
      }
    }

    if (symbols[0].value === symbols[4].value && symbols[0].value === symbols[8].value) {
      if (symbols[0].value) {
        setWinner(symbols[0].value);
        return setHasWinner(true);
      }
    }
    if (symbols[2].value === symbols[4].value && symbols[2].value === symbols[6].value) {
      if (symbols[2].value) {
        setWinner(symbols[2].value);
        return setHasWinner(true);
      }
    }
    return '';
  };

  const handleOnPressSquare = (index) => {
    if (symbols[index].value === '') {
      const symbolsCopy = [...symbols];
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
  };

  return (
    <Container>
      <Text>Tic-Tac-Toe</Text>

      <Squares symbols={symbols} onPress={handleOnPressSquare} />

      <Players whoPlays={whoPlays} />

      <Button title='Restart' color='#777' onPress={handleOnPressRestartButton} />

      <WinnerModal showModal={hasWinner} winner={winner} onClose={handleCloseModal} />
    </Container>
  );
}
