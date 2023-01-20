import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import castle from './glbFile/castle.glb'

function Castle() {
  const gltf = useLoader(GLTFLoader, castle)
  
  return <primitive object={gltf.scene} position={[0,0,0]} scale={1} />
}

function CastleModel({position}) {
      return (
        <div style={{   
            width:'100%',
            height: 400, 
            position: 'absolute',
            top: 0,
            left: 0
            }}>
        <Canvas camera={{position: position}} >
            <ambientLight intensity={0.5} />
            <spotLight intensity={0.8} position={[300, 300, 400]} />
            <Suspense fallback={null}><Castle /></Suspense>
          </Canvas>                                                 
        </div>
      );
}


export default CastleModel;