import React, { useRef, useState } from "react";
import { useFrame } from "react-three-fiber";
import {Edges} from "@react-three/drei"

const Sphere = (props) => {
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
      <meshStandardMaterial color={0x000000}/>
      <Edges color={0x34FEE3}/>
    </mesh>
  );
}

export default Sphere;