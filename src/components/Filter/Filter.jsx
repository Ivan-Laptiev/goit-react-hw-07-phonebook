import React from 'react';
import { Container, InputName } from "./Filter.styled";

export const Filter = ({ value, onFilter }) => {
  return (
    <Container>
      Find contacts by name
      <InputName
        type="text"
        value={value}
        onChange={e => onFilter(e.currentTarget.value)}
      />
    </Container>
  );
};