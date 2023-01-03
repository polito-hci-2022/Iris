import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import rabbit from './glbFile/rabbit.glb'

function Rabbit() {
  const gltf = useLoader(GLTFLoader, rabbit)
  return <primitive object={gltf.scene} position={[0,-5,0]} scale={3} />
}

function Box() {
  return (
    <mesh scale={5}>
      <boxGeometry attach="geometry" args={[500, 500, 500]} />
      <meshStandardMaterial attach="material" transparent opacity={0.5} />
    </mesh>
  )
}


function RabbitModel() {
      return (
        <>
        <div style={{
            width:"50vw", 
            height:"45vh",  
            flexDirection: "vertical",
            position: 'absolute',
            bottom: 10,
            left: 20,
            zIndex: 999}}>
            <Canvas camera={{position: [0, 2, 15]}}>
            <ambientLight intensity={0.5} />
            <spotLight intensity={0.8} position={[300, 300, 400]} />
            <Suspense fallback={<Box/>}><Rabbit /></Suspense>
          </Canvas>                                                 
        </div>
        </>
      );
}

export default RabbitModel;