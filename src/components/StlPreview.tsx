import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useMemo, useRef } from "react";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import { MathUtils, Mesh, PerspectiveCamera, Vector3 } from "three";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";

function ModelMesh({
  url,
  controlsRef,
}: {
  url: string;
  controlsRef: React.RefObject<OrbitControlsImpl | null>;
}) {
  const baseGeometry = useLoader(STLLoader, url);
  const meshRef = useRef<Mesh>(null);
  const { camera } = useThree();

  const { geometry, scale, scaledRadius } = useMemo(() => {
    const nextGeometry = baseGeometry.clone();
    nextGeometry.center();
    nextGeometry.computeVertexNormals();
    nextGeometry.computeBoundingBox();
    nextGeometry.computeBoundingSphere();

    const size = new Vector3();
    nextGeometry.boundingBox?.getSize(size);
    const maxDimension = Math.max(size.x, size.y, size.z) || 1;
    const radius = nextGeometry.boundingSphere?.radius ?? maxDimension * 0.5;
    const nextScale = 2.5 / maxDimension;

    return {
      geometry: nextGeometry,
      scale: nextScale,
      scaledRadius: radius * nextScale,
    };
  }, [baseGeometry]);

  useEffect(() => {
    const perspectiveCamera = camera as PerspectiveCamera;
    const fovInRadians = MathUtils.degToRad(perspectiveCamera.fov);
    const fitDistance = (scaledRadius / Math.tan(fovInRadians / 2)) * 1.45;

    perspectiveCamera.position.set(
      fitDistance * 0.42,
      fitDistance * 0.18,
      fitDistance,
    );
    perspectiveCamera.near = Math.max(fitDistance / 100, 0.1);
    perspectiveCamera.far = fitDistance * 10;
    perspectiveCamera.updateProjectionMatrix();

    if (controlsRef.current) {
      controlsRef.current.target.set(0, 0, 0);
      controlsRef.current.minDistance = fitDistance * 0.6;
      controlsRef.current.maxDistance = fitDistance * 2.4;
      controlsRef.current.update();
    } else {
      perspectiveCamera.lookAt(0, 0, 0);
    }
  }, [camera, controlsRef, scaledRadius]);

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

function LoaderFallback({ text }: { text: string }) {
  return <div className="viewer-status">{text}</div>;
}

export default function StlPreview({
  url,
  loadingText,
  emptyText,
  stepText,
}: {
  url?: string;
  loadingText: string;
  emptyText: string;
  stepText: string;
}) {
  const controlsRef = useRef<OrbitControlsImpl | null>(null);

  if (!url) {
    return (
      <div className="viewer-empty">
        <p>{emptyText}</p>
        <span>{stepText}</span>
      </div>
    );
  }

  return (
    <div className="viewer-shell">
      <Suspense fallback={<LoaderFallback text={loadingText} />}>
        <Canvas camera={{ position: [0, 0.1, 3.4], fov: 42 }}>
          <color attach="background" args={["#edf2f7"]} />
          <ambientLight intensity={1.4} />
          <directionalLight position={[4, 5, 4]} intensity={2.2} />
          <directionalLight position={[-3, 2, -4]} intensity={0.8} />
          <ModelMesh url={url} controlsRef={controlsRef} />
          <OrbitControls
            ref={controlsRef}
            autoRotate={false}
            enablePan={false}
            target={[0, 0, 0]}
          />
        </Canvas>
      </Suspense>
    </div>
  );
}
