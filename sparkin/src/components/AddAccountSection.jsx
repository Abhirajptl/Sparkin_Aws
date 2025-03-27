import React, { useState } from 'react';
import styled from 'styled-components';
import { useAppState, useDispatch } from '../context/AppContext'; // Corrected import path

const AddAccountSection = () => {
  const [accountIdentifier, setAccountIdentifier] = useState('');
  const dispatch = useDispatch();

  const handleAddAccount = () => {
    if (accountIdentifier.trim()) {
      dispatch({
        type: 'ADD_ACCOUNT',
        payload: { id: accountIdentifier, name: `Account ${accountIdentifier}` },
      });
      setAccountIdentifier('');
    } else {
      alert('Please enter an account identifier.');
    }
  };

  return (
    <AddAccountSectionContainer>
      <AddAccountSectionTitle>Add Account</AddAccountSectionTitle>
      <AddAccountInputGroup>
        <AddAccountInput
          type="text"
          placeholder="AWS Account ID or ARN"
          value={accountIdentifier}
          onChange={(e) => setAccountIdentifier(e.target.value)}
        />
        <AddAccountButton onClick={handleAddAccount}>
          Add Account
        </AddAccountButton>
      </AddAccountInputGroup>
    </AddAccountSectionContainer>
  );
};

const AddAccountSectionContainer = styled.div`
  background-color: #f8f9fa;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 4px;
  border: 1px solid #ddd;
`;

const AddAccountSectionTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 10px;
  color: #007bff;
`;

const AddAccountInputGroup = styled.div`
  display: flex;
  align-items: center;
`;

const AddAccountInput = styled.input`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 10px;
  flex-grow: 1;
`;

const AddAccountButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 15px;
  cursor: pointer;
`;

export default AddAccountSection;