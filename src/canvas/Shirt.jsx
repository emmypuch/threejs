// eslint-disable-next-line no-unused-vars
import React from 'react';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from '@react-three/drei';

import state from '../store'

const Shirt = () => {
    const snap = useSnapshot(state);
    const { nodes, materials } = useGLTF('/shirt_baked.glb');

    const logoTexture = useTexture(snap.logoDecal);
    const fullTexture = useTexture(snap.fullDecal)

  return (
    <group>
        <mesh 
        // eslint-disable-next-line react/no-unknown-property
        castShadow
        // eslint-disable-next-line react/no-unknown-property
        geometry={nodes.T_Shirt_male.geometry}
        // eslint-disable-next-line react/no-unknown-property
        material={materials.lambert1}
        // eslint-disable-next-line react/no-unknown-property
        material-roughness={1}
        // eslint-disable-next-line react/no-unknown-property
        dispose={null}
        >
            
        </mesh>
    </group>
  )
}

export default Shirt