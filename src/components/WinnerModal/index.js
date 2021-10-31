import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export function WinnerModal({ showModal, onClose, winner }) {
  return (
    showModal && (
      <View style={styles.modalContainer}>
        <View style={styles.modal}>
          <Text style={styles.modalTitle}>Winner</Text>
          <Text style={styles.modalContent}>"{winner}" player won the match!</Text>
          <Button title='Play Again' onPress={onClose} />
        </View>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#0004'
  },
  modal: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '80%',
    height: 200,
    padding: 20,
    borderWidth: 1,
    borderColor: '#d6d7da',
    backgroundColor: '#fff'
  },
  modalTitle: {
    fontSize: 26,
    textAlign: 'center'
  },
  modalContent: {
    fontSize: 18,
    textAlign: 'center'
  }
});
