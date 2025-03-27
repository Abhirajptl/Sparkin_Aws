import React from 'react';
import styled from 'styled-components';
import { useAppState, useDispatch } from '../context/AppContext'; // Corrected import path

const AdditionalOptions = () => {
  const { jamPolicy, linkAwsAccount } = useAppState();
  const dispatch = useDispatch();

  const handleJamPolicyChange = () => {
    dispatch({ type: 'TOGGLE_JAM_POLICY' });
  };

  const handleLinkAwsAccountChange = () => {
    dispatch({ type: 'TOGGLE_LINK_AWS_ACCOUNT' });
  };

  return (
    <AdditionalOptionsContainer>
      <Option>
        <OptionCheckbox
          type="checkbox"
          checked={jamPolicy}
          onChange={handleJamPolicyChange}
        />
        <OptionLabel>Apply JAM Policy</OptionLabel>
      </Option>
      <Option>
        <OptionCheckbox
          type="checkbox"
          checked={linkAwsAccount}
          onChange={handleLinkAwsAccountChange}
        />
        <OptionLabel>Link AWS Account</OptionLabel>
      </Option>
    </AdditionalOptionsContainer>
  );
};

const AdditionalOptionsContainer = styled.div`
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f8f9fa;
`;

const Option = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

const OptionCheckbox = styled.input`
  margin-right: 8px;
`;

const OptionLabel = styled.label`
  font-size: 0.9em;
  color: #333;
`;

export default AdditionalOptions;