import React, { StrictMode, Suspense, useState } from 'react'
import * as ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import tiger from './castle.glb'
import styles from '../../styles'

function Castle() {
  const gltf = useLoader(GLTFLoader, tiger)
  
  return <primitive object={gltf.scene}  position={[25,0,0]} scale={1} />
}

function Box() {
  return (
    <mesh scale={1}>
      <meshStandardMaterial attach="material" transparent opacity={0.5} />
    </mesh>
  )
}


function CastleModelL({positio}) {
      return (
        <>
        <div style={{   
            width:'100%',
            height: 400, }}>
        <Canvas camera={{position: positio}} >
            <ambientLight intensity={0.5} />
            <spotLight intensity={0.8} position={[300, 300, 400]} />
            <Suspense fallback={null}><Castle /></Suspense>
          </Canvas>                                                 
        </div>
        </>
      );
}


export default CastleModelL;