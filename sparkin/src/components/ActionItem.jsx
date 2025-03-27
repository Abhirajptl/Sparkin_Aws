import React from 'react';
import styled from 'styled-components';
import { useAppState, useDispatch } from '../context/AppContext'; // Corrected import path

const ActionItem = ({ label, name }) => {
  const { actions } = useAppState();
  const dispatch = useDispatch();
  const isChecked = actions[name];

  const handleChange = () => {
    dispatch({ type: 'TOGGLE_ACTION', payload: { name } });
  };

  return (
    <ActionItemContainer>
      <ActionCheckbox
        type="checkbox"
        id={name}
        checked={isChecked}
        onChange={handleChange}
      />
      <ActionLabel htmlFor={name}>{label}</ActionLabel>
    </ActionItemContainer>
  );
};

const ActionItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const ActionCheckbox = styled.input`
  margin-right: 8px;
`;

const ActionLabel = styled.label`
  font-size: 0.9em;
  color: #333;
`;

export default ActionItem;