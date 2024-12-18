// Escenario3D.js
import React from 'react';
import { OrbitControls } from '@react-three/drei';
import SeaHorseModel from '../../../modelos-3d/SeaHorseModel';
import { SeaFloorModel } from '../../../modelos-3d/SeaFloorModel';
import Cartel from '../../../modelos-3d/Cartel';

function Escenario3D() {
    return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />

            {/* Suelo marino más cerca del caballito de mar */}
            <SeaFloorModel position={[0, -1, 3]} scale={2} />
        </>
    );
}

export default Escenario3D;
