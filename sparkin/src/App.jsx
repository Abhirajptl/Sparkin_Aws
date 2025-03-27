import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { AppProvider } from './context/AppContext'; // Corrected import path
import { Header, AddAccountSection, ActionCategory, ButtonBar, AdditionalOptions } from './components'; // Corrected import path
import theme from './styles'; // Corrected import path

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>  {/* AppProvider should wrap the whole application */}
        <AppContainer>
          <Header />
          <Content>
            <AddAccountSection />
            <ActionsContainer>
              <ActionCategory
                title="Cost Saving Actions"
                actions={[
                  { label: 'Start - Stop Resources', name: 'startStopEC2' },
                  { label: 'EC2', name: 'startStopEC2_ec2' },
                  { label: 'RDS', name: 'startStopRDS' },
                  { label: 'Light Sail', name: 'startStopLightSail' },
                  { label: 'Amazon Neptune', name: 'startStopNeptune' },
                ]}
              />
              <ActionCategory
                title="Pause / Resume Resources"
                actions={[
                  { label: 'Pause Resume Resources', name: 'pauseResumeRedshift' },
                  { label: 'Redshift Clusters', name: 'pauseResumeRedshift_redshift' },
                  { label: 'Aurora Serverless V2', name: 'pauseResumeAurora' },
                ]}
              />
              <ActionCategory
                title="Resource Cleanup"
                actions={[
                  { label: 'Terminate EC2', name: 'terminateEC2' },
                  { label: 'Delete EBS Volume', name: 'deleteEBSVolume' },
                  { label: 'Delete EBS Snapshot', name: 'deleteEBSSnapshot' },
                  { label: 'Delete RDS', name: 'deleteRDS' },
                  { label: 'Delete RDS Snapshot', name: 'deleteRDSSnapshot' },
                ]}
              />
            </ActionsContainer>
            <AdditionalOptions />
            <ButtonBar /> {/* ButtonBar is now inside AppProvider */}
          </Content>
        </AppContainer>
      </AppProvider>
    </ThemeProvider>
  );
};

const AppContainer = styled.div`
  max-width: 800px;
  margin: 20px auto;
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Content = styled.div`
  /* No global styles here, more specific to component */
`;

const ActionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
`;

export default App;