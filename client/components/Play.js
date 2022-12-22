import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Play  = ({navigation}) => {  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Play</Text>
        <Text>Games</Text>
        <Button
            title="Memory"
            onPress={() => navigation.navigate('Memory')}
          />
        <Text>Stories</Text>
        <Button
            title="The Castle"
            onPress={() => navigation.navigate('CastleStory')}
          />
      </View>
    );
  }

export default Play;