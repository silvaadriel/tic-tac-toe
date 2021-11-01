import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;

export const Symbol = styled.Text`
  color: ${(props) => props.color};
  font-size: 48px;
  margin-top: 20px;
  text-align: center;
`;
