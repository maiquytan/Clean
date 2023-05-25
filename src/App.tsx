import React,{useState,createContext, useContext} from 'react';
import { StatusBar } from 'react-native';
import { RootSiblingParent } from 'react-native-root-siblings';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import RootNavigator from 'src/navigation/RootNavigator';
import { persistor, store } from 'src/stores';
import { AppConsumer, AppProvider } from './AppContext';

export const ThemeContext = createContext<{ theme: string;setTheme: (theme: string) => void; toggleTheme: () => void }>({
  theme: 'light',
  toggleTheme: () => {},
  setTheme: () => {},
});

const App = (props: any) => {
  const [theme, setTheme] = useState('light');

  // Hàm để thay đổi theme
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  return (

    <RootSiblingParent>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeContext.Provider value={{ theme,setTheme, toggleTheme }}>
            <StatusBar barStyle={'dark-content'} backgroundColor="#e25c50" />
            <AppProvider {...props}>
              <AppConsumer>
                {funcs => {
                  global.props = { ...funcs };
                  return <RootNavigator {...funcs} />;
                }}
              </AppConsumer>
            </AppProvider>
          </ThemeContext.Provider>
        </PersistGate>
      </Provider>
    </RootSiblingParent>
  );
};

export default App;
