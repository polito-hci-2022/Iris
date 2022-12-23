import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Suspense } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Canvas } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei/core/useGLTF'


function Model() {
  const gltf = useGLTF('https://thinkuldeep.com/modelviewer/Astronaut.glb')
  return (<primitive object={gltf.scene} />)
}

const HomeScreen = ({navigation}) => { 
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <div>
            <Suspense>
              <Canvas>
                <ambientLight />
                <Model />
              </Canvas>
            </Suspense>
          </div>
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
