import React from 'react';
import {StatusBar} from 'react-native';
import {RootSiblingParent} from 'react-native-root-siblings';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import RootNavigator from 'src/navigation/RootNavigator';
import {persistor, store} from 'src/stores';
import {AppConsumer, AppProvider} from './AppContext';

const App = (props: any) => {
  return (
    <RootSiblingParent>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <StatusBar barStyle={'dark-content'} backgroundColor="#e25c50" />
          <AppProvider {...props}>
            <AppConsumer>
              {funcs => {
                global.props = {...funcs};
                return <RootNavigator {...funcs} />;
              }}
            </AppConsumer>
          </AppProvider>
        </PersistGate>
      </Provider>
    </RootSiblingParent>
  );
};

export default App;
