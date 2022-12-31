import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import tiger from './tiger.glb'
import styles from '../../styles'

function Tiger() {
  const gltf = useLoader(GLTFLoader, tiger)
  return <primitive object={gltf.scene} position={[0,-5,0]} scale={4} />
}

function Box() {
  return (
    <mesh scale={5}>
      <boxGeometry attach="geometry" args={[500, 500, 500]} />
      <meshStandardMaterial attach="material" transparent opacity={0.5} />
    </mesh>
  )
}


function Model() {
      return (
        <>
        <div style={{
            width:"50vw", 
            height:"35vh",  
            position: 'absolute',
            bottom: 10,
            right: 20}}>
            <Canvas camera={{position: [0, 2, 15]}}>
            <ambientLight intensity={0.5} />
            <spotLight intensity={0.8} position={[300, 300, 400]} />
            <Suspense fallback={<Box/>}><Tiger /></Suspense>
          </Canvas>                                                 
        </div>
        </>
      );
}

export default Model;