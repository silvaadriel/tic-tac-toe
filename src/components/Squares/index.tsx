import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';

import { Container, Symbol, SymbolSquare } from './styles';

export type Symbol = {
  value: string;
};

interface Props {
  onPress: (index: number) => void;
  symbols: Symbol[];
}

export function Squares({ symbols, onPress }: Props) {
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
