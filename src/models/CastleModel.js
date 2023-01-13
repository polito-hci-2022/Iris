import React, { StrictMode, Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import castle from './glbFile/castle.glb'

function Castle() {
  const gltf = useLoader(GLTFLoader, castle)
  
  return <primitive object={gltf.scene} position={[0,0,0]} scale={1} />
}

function Box() {
  return (
    <mesh scale={1}>
      <meshStandardMaterial attach="material" transparent opacity={0.5} />
    </mesh>
  )
}


function CastleModel({position}) {
      return (
        <>
        <div style={{   
            width:'100%',
            height: 400, 
            position: 'absolute'
            }}>
        <Canvas camera={{position: position}} >
            <ambientLight intensity={0.5} />
            <spotLight intensity={0.8} position={[300, 300, 400]} />
            <Suspense fallback={null}><Castle /></Suspense>
          </Canvas>                                                 
        </div>
        </>
      );
}


export default CastleModel;