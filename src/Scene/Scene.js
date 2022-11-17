import {React, Suspense} from 'react';
import './Scene.css';
import { Canvas, extend  } from '@react-three/fiber';
import { Effects, OrbitControls, Stats } from '@react-three/drei';
import * as THREE from 'three';
import { UnrealBloomPass } from 'three-stdlib';

import Model from "../assets/Model.js";


extend({ UnrealBloomPass })

function Scene() {

    return (
        <div className="canvas-container">
            <Canvas >
                <color attach="background" args={['rgba(26, 0, 68, 1.0)']} />
                <pointLight position={[0,4,4]}/>
                <hemisphereLight intensity={0.3} position={[5, 10, 50]} />
                <OrbitControls />
                <Suspense fallback={null}>
                    <Model position={[0,-3.6,1.4]} rotation-y={Math.PI * -.5} rotation-x={Math.PI * .02}/>
                </Suspense>    
                <Effects disableGamma>  
                    <unrealBloomPass threshold={1} strength={0.5} radius={0.5}/>
                </Effects>
                <Stats />

            </Canvas>
            
        </div>
    )
};
  
export default Scene;