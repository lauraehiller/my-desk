import {React, Suspense, useState} from 'react';
import './Scene.css';
import { Canvas } from '@react-three/fiber';
import { Stats, PerspectiveCamera, Preload, BakeShadows } from '@react-three/drei';
import * as THREE from 'three';
import Model from "../assets/Model.js";

function Scene() {
    let light = [-9.8,2.3,-11.5];
    const [target] = useState(() => new THREE.Object3D())
    return (
        <div className="canvas-container">
            <Canvas aspect={1} >
                <PerspectiveCamera makeDefault fov={50} near={0.1} far={100}/>
                <color attach="background" args={['black']} />
                <spotLight
                    position={light}
                    castShadow
                    target={target}
                    penumbra={1.0}
                    radiusTop={0.4}
                    radiusBottom={20}
                    distance={80}
                    angle={0.25}
                    attenuation={20}
                    anglePower={5}
                    intensity={3}
                    opacity={0.2}
                />
                <primitive object={target} position={[-9.6,-4,-12]} />
                <hemisphereLight intensity={0.6} position={[0,5,-10]} />
                <Suspense fallback={null}>
                    <Model position={[0,-4.0,-12]} rotation-y={Math.PI * -.5} rotation-x={Math.PI * 0.03}/>
                </Suspense>    
                <Stats />
                <BakeShadows />
                <Preload all />
            </Canvas>
            
        </div>
    )
};
  
export default Scene;