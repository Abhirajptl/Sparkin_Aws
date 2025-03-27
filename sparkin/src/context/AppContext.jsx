import React, { createContext, useReducer, useContext } from 'react';

// Initial State
const initialState = {
  accounts: [],
  selectedAccount: null,
  actions: {
    startStopEC2: false,
    startStopRDS: false,
    startStopLightSail: false,
    startStopNeptune: false,
    pauseResumeRedshift: false,
    pauseResumeAurora: false,
    terminateEC2: false,
    deleteEBSVolume: false,
    deleteEBSSnapshot: false,
    deleteRDS: false,
    deleteRDSSnapshot: false,
  },
  jamPolicy: false,
  linkAwsAccount: false,
};

// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_ACTION':
      return {
        ...state,
        actions: {
          ...state.actions,
          [action.payload.name]: !state.actions[action.payload.name],
        },
      };
    case 'TOGGLE_JAM_POLICY':
      return { ...state, jamPolicy: !state.jamPolicy };
    case 'TOGGLE_LINK_AWS_ACCOUNT':
      return { ...state, linkAwsAccount: !state.linkAwsAccount };
    case 'ADD_ACCOUNT':
      return {
        ...state,
        accounts: [...state.accounts, action.payload],
      };
    case 'SELECT_ACCOUNT':
      return {
        ...state,
        selectedAccount: action.payload,
      };
    default:
      return state;
  }
};

// Contexts
const AppStateContext = createContext();
const AppDispatchContext = createContext();

// Provider
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

// Custom Hooks
const useAppState = () => {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error('useAppState must be used within an AppProvider');
  }
  return context;
};

const useDispatch = () => {
  const context = useContext(AppDispatchContext);
  if (!context) {
    throw new Error('useDispatch must be used within an AppProvider');
  }
  return context;
};

export { AppProvider, useAppState, useDispatch };