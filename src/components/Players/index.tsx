import React from 'react';
import { View } from 'react-native';

import { Container, Symbol } from './styles';

interface Props {
  whoPlays: string;
}

export function Players({ whoPlays }: Props) {
  const getSymbolColor = (symbol: string) => (whoPlays === symbol ? 'green' : '');

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
