import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeScreen = ({navigation}) => {  
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Button
            title="Study"
            onPress={() => navigation.navigate('StudyTime')}
          />
          <Button
            title="Play"
            onPress={() => navigation.navigate('Play')}
          />
        </View>
      );
  }


export default HomeScreen;
