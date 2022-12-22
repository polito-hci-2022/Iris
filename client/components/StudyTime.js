import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Translate from './Translate';

const StudyTime  = ({navigation}) => {  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Study Time</Text>
        <Button
            title="Translate"
            onPress={() => navigation.navigate('Translate')}
          />
          <Button
            title="The Backpack"
            onPress={() => navigation.navigate('Backpack')}
          />
          <Text>Test</Text>
          <Button
            title="Castle Test"
            onPress={() => navigation.navigate('CastleTest')}
          />
      </View>
    );
  }

export default StudyTime;
  