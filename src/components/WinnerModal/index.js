import React from 'react';
import { Button } from 'react-native';

import { Container, ContentText, ModalContainer, Title } from './styles';

export function WinnerModal({ showModal, onClose, winner }) {
  return (
    showModal && (
      <Container>
        <ModalContainer>
          <Title>Winner</Title>
          <ContentText>"{winner}" player won the match!</ContentText>
          <Button title='Play Again' onPress={onClose} />
        </ModalContainer>
      </Container>
    )
  );
}
