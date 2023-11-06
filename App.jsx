import React, {useEffect} from 'react';
import WelcomePage from './src/screens/1- Welcome/Welcome';
import First from './src/screens/2- Start pages/first/First';
import Second from './src/screens/2- Start pages/second/Second';
import Third from './src/screens/2- Start pages/third/Third';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      {/* <WelcomePage /> */}
      <First />
      {/* <Second /> */}
      {/* <Third /> */}
    </>
  );
};

export default App;
