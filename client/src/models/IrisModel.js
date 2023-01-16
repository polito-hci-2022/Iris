import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import tiger from './glbFile/tiger.glb'

function Tiger({scale}) {
  const gltf = useLoader(GLTFLoader, tiger)
  return <primitive object={gltf.scene} position={[0,-5,0]} scale={scale} />
}

function Box() {
  return (
    <mesh scale={5}>
      <boxGeometry attach="geometry" args={[500, 500, 500]} />
      <meshStandardMaterial attach="material" transparent opacity={0.5} />
    </mesh>
  )
}

function IrisModel({scale=1, position='absolute', top, bottom, left, right}) {
      const vertical = top ? {top:top}:{bottom:bottom}
      const horizontal = right ? {right:right}:{left:left}
      const partial_style = { 
        width:"50vw", 
        height:"35vh",  
        flexDirection: "vertical",
        position: position,
        zIndex: 999
      }
      const style = Object.assign({}, partial_style, vertical, horizontal)
      return (
        <>
        <div style={style}>
            <Canvas camera={{position: [0, 2, 15]}}> 
            <ambientLight intensity={0.5} />
            <spotLight intensity={0.8} position={[300, 300, 400]} />
            <Suspense fallback={<Box/>}><Tiger scale={scale}/></Suspense>
          </Canvas>                                                 
        </div>
        </>
      );
}

export default IrisModel;
