import React from 'react';
import styled from 'styled-components';

const Header = () => (
  <HeaderContainer>
    <HeaderTitle>Add Account - 2</HeaderTitle>
  </HeaderContainer>
);

const HeaderContainer = styled.div`
  text-align: left;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
`;

const HeaderTitle = styled.h2`
  color: #222;
  margin-bottom: 5px;
`;

export default Header;