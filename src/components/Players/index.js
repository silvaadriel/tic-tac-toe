import React from 'react';
import { View } from 'react-native';

import { Container, Symbol } from './styles';

export function Players({ whoPlays }) {
  const getSymbolColor = (symbol) => (whoPlays === symbol ? 'green' : '');

  return (
    <Container>
      <View>
        <Symbol color={getSymbolColor('X')}>X</Symbol>
      </View>
      <View>
        <Symbol color={getSymbolColor('O')}>O</Symbol>
      </View>
    </Container>
  );
}
