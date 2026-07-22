"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  MeshTransmissionMaterial,
  Sphere,
} from "@react-three/drei";

import { EffectComposer, Bloom } from "@react-three/postprocessing";

import { useRef } from "react";
import * as THREE from "three";


function Core() {

  const core = useRef<THREE.Mesh>(null);
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);


  useFrame((state) => {

    const t = state.clock.getElapsedTime();


    if (core.current) {

      core.current.rotation.y = t * 0.15;

      core.current.position.y =
        Math.sin(t * 0.8) * 0.08;

    }


    if (ring1.current) {

      ring1.current.rotation.z =
        t * 0.25;

    }


    if (ring2.current) {

      ring2.current.rotation.z =
        -t * 0.18;

    }

  });



  return (

    <group>


      {/* Glass AI Core */}

      <Sphere
        ref={core}
        args={[1.15, 128, 128]}
      >

        <MeshTransmissionMaterial

          thickness={1.8}

          roughness={0.08}

          transmission={1}

          chromaticAberration={0.04}

          anisotropy={0.3}

          color="#D6B25E"

        />

      </Sphere>



      {/* Inner golden energy */}

      <Sphere args={[0.45, 64, 64]}>

        <meshStandardMaterial

          color="#D6B25E"

          emissive="#D6B25E"

          emissiveIntensity={3}

        />

      </Sphere>



      {/* Energy ring 1 */}

      <mesh ref={ring1}>

        <torusGeometry
          args={[1.55,0.012,32,256]}
        />

        <meshBasicMaterial

          color="#D6B25E"

          transparent

          opacity={0.7}

        />

      </mesh>



      {/* Energy ring 2 */}

      <mesh ref={ring2}>

        <torusGeometry
          args={[1.85,0.008,32,256]}
        />

        <meshBasicMaterial

          color="#F4F1EA"

          transparent

          opacity={0.25}

        />

      </mesh>


    </group>

  );

}



export function EonSymbol() {


  return (

    <div className="
      h-[520px]
      w-[520px]
    ">


      <Canvas

        camera={{
          position:[0,0,5],
          fov:45
        }}

      >


        <ambientLight intensity={0.5}/>


        <pointLight

          position={[3,3,3]}

          intensity={8}

          color="#D6B25E"

        />


        <Float

          speed={2}

          rotationIntensity={0.4}

          floatIntensity={0.3}

        >

          <Core />

        </Float>



        <Environment preset="city"/>


        <EffectComposer>

          <Bloom

            intensity={1.5}

            luminanceThreshold={0}

            luminanceSmoothing={0.8}

          />

        </EffectComposer>


      </Canvas>


    </div>

  );

}