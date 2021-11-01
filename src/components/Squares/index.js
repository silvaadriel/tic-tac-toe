import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';

import { Container, Symbol, SymbolSquare } from './styles';

export function Squares({ symbols, onPress }) {
  return (
    <Container>
      {symbols.map((symbol, index) => (
        <TouchableWithoutFeedback onPress={() => onPress(index)} key={index}>
          <SymbolSquare>
            <Symbol>{symbol.value}</Symbol>
          </SymbolSquare>
        </TouchableWithoutFeedback>
      ))}
    </Container>
  );
}
