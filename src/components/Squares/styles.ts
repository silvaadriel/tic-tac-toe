import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  height: 300px;
  width: 300px;
`;

export const SymbolSquare = styled.View`
  background-color: #fff;
  border-color: #d6d7da;
  border-width: 1px;
  width: 100px;
  height: 100px;
`;

export const Symbol = styled.Text`
  font-size: 48px;
  margin-top: 20px;
  text-align: center;
`;
