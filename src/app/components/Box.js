import React, { useRef, useState, useMemo, setState } from "react";
import { useFrame } from "react-three-fiber";
import {Edges} from "@react-three/drei"
import { MeshStandardMaterial } from "three";

const Box = (props) => {
  const mesh = useRef();
  const [state, setState] = useState({isHovered: false, isActive: false});

  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });
  
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={[2, 2, 2]}
      onClick={(e) => setState({...state, isActive: !state.isActive, })}
      onPointerOver={(e) => setState({...state, isHovered: true})}
      onPointerOut={(e) => setState({...state, isHovered: false})}>
      <octahedronBufferGeometry args={[1, 3]} />
      <meshStandardMaterial color={0x34FEE3}/>
      <Edges color={0x34FEE3}/>
    </mesh>
  );
}

export default Box;