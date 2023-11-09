import React, {useEffect} from 'react';
import First from './src/screens/2- Start pages/first/First';
import Second from './src/screens/2- Start pages/second/Second';
import Third from './src/screens/2- Start pages/third/Third';
import SplashScreen from 'react-native-splash-screen';
import SignIn from './src/screens/3- Authentication pages/SignIn';
import SettingsCenter from './src/screens/3- Authentication pages/SettingsCenter';
import SignUp from './src/screens/3- Authentication pages/SignUp';
import Home from './src/screens/4- Home/Home';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      {/* <First /> */}
      {/* <Second /> */}
      {/* <Third /> */}
      {/* <SignIn /> */}
      {/* <SettingsCenter /> */}
      {/* <SignUp /> */}
      <Home />
    </>
  );
};

export default App;
