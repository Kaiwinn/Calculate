import {
  StyleSheet,
  Text,
  View,
  Switch,
  Alert,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {fontSizes, images, colors} from './constants';
import {ThemeContext} from './utilities/ThemeContext';
import Button from './components/Button';
import MyKeyboard from './components/MyKeyboard';

const App = () => {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView
        style={{
          flex: 1,
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: theme === 'light' ? '#f3f3f3' : '#000000',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: fontSizes.h3,
              color: theme === 'light' ? '#111' : '#ffffff',
            }}>
            Dark or Light
          </Text>
          <Switch
            trackColor={{false: '#d1ccd5', true: '#a9a4a4'}}
            thumbColor={theme === 'light' ? '#343434' : '#ffffff'}
            value={theme === 'light'}
            onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          />
          <MyKeyboard />
        </View>
      </SafeAreaView>
    </ThemeContext.Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
