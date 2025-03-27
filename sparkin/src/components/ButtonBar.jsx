import React from 'react';
import styled from 'styled-components';
import { useAppState } from '../context/AppContext'; // Corrected import path

const ButtonBar = () => {
  const state = useAppState(); // Get the entire state
  const selectedActions = Object.entries(state.actions) // Access state.actions
    .filter(([, value]) => value)
    .map(([key]) => key);

  const handleNext = () => {
    if (selectedActions.length > 0) {
      alert(`Selected actions: ${selectedActions.join(', ')}.  (Next action would be to execute these)`);
    } else {
      alert('Please select at least one action.');
    }
  };

  return (
    <ButtonBarContainer>
      <BackButton onClick={() => alert('Navigate Back')}>Back</BackButton>
      <NextButton onClick={handleNext}>Next</NextButton>
    </ButtonBarContainer>
  );
};

const ButtonBarContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const BackButton = styled(Button)`
  background-color: #6c757d;
  color: white;

  &:hover {
    background-color: #495057;
  }
`;

const NextButton = styled(Button)`
  background-color: #28a745;
  color: white;

  &:hover {
    background-color: #1e7e34;
  }
`;

export default ButtonBar;
