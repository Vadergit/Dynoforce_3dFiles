import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import { Mesh, Vector3 } from "three";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";

function ModelMesh({ url }: { url: string }) {
  const baseGeometry = useLoader(STLLoader, url);
  const meshRef = useRef<Mesh>(null);

  const { geometry, scale } = useMemo(() => {
    const nextGeometry = baseGeometry.clone();
    nextGeometry.center();
    nextGeometry.computeVertexNormals();
    nextGeometry.computeBoundingBox();

    const size = new Vector3();
    nextGeometry.boundingBox?.getSize(size);
    const maxDimension = Math.max(size.x, size.y, size.z) || 1;

    return {
      geometry: nextGeometry,
      scale: 2.5 / maxDimension,
    };
  }, [baseGeometry]);

  useFrame((_state, delta) => {
    if (!meshRef.current) {
      return;
    }
    meshRef.current.rotation.y += delta * 0.22;
  });

  return (
    <mesh ref={meshRef} geometry={geometry} scale={scale}>
      <meshStandardMaterial
        color="#f4b53f"
        metalness={0.12}
        roughness={0.28}
      />
    </mesh>
  );
}

function LoaderFallback() {
  return <div className="viewer-status">STL wird geladen...</div>;
}

export default function StlPreview({ url }: { url?: string }) {
  if (!url) {
    return (
      <div className="viewer-empty">
        <p>Fuer dieses Modell ist noch keine STL-Vorschau hinterlegt.</p>
        <span>STEP-Dateien bleiben trotzdem direkt downloadbar.</span>
      </div>
    );
  }

  return (
    <div className="viewer-shell">
      <Suspense fallback={<LoaderFallback />}>
        <Canvas camera={{ position: [0, 0.9, 3.6], fov: 42 }}>
          <color attach="background" args={["#edf2f7"]} />
          <ambientLight intensity={1.4} />
          <directionalLight position={[4, 5, 4]} intensity={2.2} />
          <directionalLight position={[-3, 2, -4]} intensity={0.8} />
          <ModelMesh url={url} />
          <OrbitControls
            autoRotate={false}
            enablePan={false}
            minDistance={2}
            maxDistance={7}
          />
        </Canvas>
      </Suspense>
    </div>
  );
}
