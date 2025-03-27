import React from 'react';
import styled from 'styled-components';
import ActionItem from './ActionItem'; // Corrected import path

const ActionCategory = ({ title, actions }) => (
  <ActionCategoryContainer>
    <ActionCategoryTitle>{title}</ActionCategoryTitle>
    <ActionList>
      {actions.map((action) => (
        <ActionItem key={action.name} label={action.label} name={action.name} />
      ))}
    </ActionList>
  </ActionCategoryContainer>
);

const ActionCategoryContainer = styled.div`
  background-color: #fff;
  padding: 15px;
  border-radius: 4px;
  border: 1px solid #ddd;
  margin-bottom: 20px;
`;

const ActionCategoryTitle = styled.h4`
  margin-top: 0;
  margin-bottom: 10px;
  color: #007bff;
`;

const ActionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default ActionCategory;
