import { createGlobalStyle } from 'styled-components';

const theme = {
  colors: {
    primary: '#007bff',
    secondary: '#28a745',
    secondaryDark: '#1e7e34',
    success: '#28a745',
    successDark: '#1e7e34',
    danger: '#dc3545',
    dangerDark: '#a71d2a',
    warning: '#ffc107',
    warningDark: '#d39e00',
    info: '#17a2b8',
    infoDark: '#117a8b',
    lightGrey: '#f8f9fa',
    grey: '#6c757d',
    greyDark: '#495057',
    border: '#dee2e6',
    text: '#333',
    heading: '#222',
    background: '#e9ecef',
    white: '#fff',
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
  },
  borderRadius: '4px',
};

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

export default theme;
