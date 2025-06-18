import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

/**
 * SetidureLogoAnimation - A 3D animated logo using Three.js
 * Features:
 * - Connected nodes forming the Setidure logo
 * - Smooth rotation animation
 * - Pulsating nodes with glow effects
 * - Responsive design
 * - Customizable colors and positions
 */
const SetidureLogoAnimation = ({ 
  width = '100%', 
  height = '400px',
  nodeColor = '#06b6d4', // cyan-500
  lineColor = '#0891b2', // cyan-600
  backgroundColor = 'transparent',
  animationSpeed = 0.005,
  nodeSize = 0.8,
  glowIntensity = 0.3
}) => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const animationIdRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasWebGL, setHasWebGL] = useState(true);

  // WebGL support detection
  const checkWebGLSupport = () => {
    try {
      const canvas = document.createElement('canvas');
      return !!(window.WebGLRenderingContext && 
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    } catch (e) {
      return false;
    }
  };

  useEffect(() => {
    // Check WebGL support first
    if (!checkWebGLSupport()) {
      setHasWebGL(false);
      setIsLoading(false);
      return;
    }

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75, 
      mountRef.current.clientWidth / mountRef.current.clientHeight, 
      0.1, 
      1000
    );
    camera.position.z = 15;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setClearColor(backgroundColor === 'transparent' ? 0x000000 : backgroundColor, backgroundColor === 'transparent' ? 0 : 1);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Logo node positions - Representing "SETIDURE" in an abstract connected form
    // These coordinates create a stylized representation of the company name
    const logoNodes = [
      // "S" formation
      { x: -8, y: 4, z: 0, id: 'S1' },
      { x: -6, y: 4, z: 1, id: 'S2' },
      { x: -6, y: 2, z: 0, id: 'S3' },
      { x: -8, y: 2, z: 1, id: 'S4' },
      { x: -8, y: 0, z: 0, id: 'S5' },
      { x: -6, y: 0, z: 1, id: 'S6' },
      
      // "E" formation
      { x: -4, y: 4, z: 0, id: 'E1' },
      { x: -4, y: 2, z: 1, id: 'E2' },
      { x: -4, y: 0, z: 0, id: 'E3' },
      { x: -2, y: 4, z: 1, id: 'E4' },
      { x: -2, y: 2, z: 0, id: 'E5' },
      { x: -2, y: 0, z: 1, id: 'E6' },
      
      // "T" formation
      { x: 0, y: 4, z: 0, id: 'T1' },
      { x: 1, y: 4, z: 1, id: 'T2' },
      { x: 2, y: 4, z: 0, id: 'T3' },
      { x: 1, y: 2, z: 1, id: 'T4' },
      { x: 1, y: 0, z: 0, id: 'T5' },
      
      // Central connecting nodes
      { x: 0, y: -2, z: 2, id: 'C1' },
      { x: 2, y: -2, z: 1, id: 'C2' },
      { x: 4, y: -2, z: 0, id: 'C3' },
      
      // "I" formation
      { x: 4, y: 2, z: 1, id: 'I1' },
      { x: 4, y: 0, z: 0, id: 'I2' },
      
      // "D" formation
      { x: 6, y: 4, z: 0, id: 'D1' },
      { x: 6, y: 2, z: 1, id: 'D2' },
      { x: 6, y: 0, z: 0, id: 'D3' },
      { x: 8, y: 3, z: 1, id: 'D4' },
      { x: 8, y: 1, z: 0, id: 'D5' },
    ];

    // Connection patterns - defines which nodes connect to which
    const connections = [
      // S connections
      ['S1', 'S2'], ['S2', 'S3'], ['S3', 'S4'], ['S4', 'S5'], ['S5', 'S6'],
      // E connections
      ['E1', 'E2'], ['E2', 'E3'], ['E1', 'E4'], ['E2', 'E5'], ['E3', 'E6'],
      // T connections
      ['T1', 'T2'], ['T2', 'T3'], ['T2', 'T4'], ['T4', 'T5'],
      // Cross connections for unified look
      ['S6', 'E1'], ['E6', 'T1'], ['T5', 'C1'], ['C1', 'C2'], ['C2', 'C3'],
      ['C3', 'I1'], ['I1', 'I2'], ['I2', 'D1'], ['D1', 'D2'], ['D2', 'D3'],
      ['D1', 'D4'], ['D4', 'D5'], ['D5', 'D3'],
      // Additional artistic connections
      ['S3', 'E2'], ['E5', 'T4'], ['T2', 'C1'], ['C2', 'I1'], ['D2', 'D4']
    ];

    // Create materials
    const nodeMaterial = new THREE.MeshPhongMaterial({ 
      color: nodeColor,
      shininess: 100,
      transparent: true,
      opacity: 0.9
    });

    const lineMaterial = new THREE.LineBasicMaterial({ 
      color: lineColor,
      transparent: true,
      opacity: 0.7,
      linewidth: 2
    });

    // Create node group for animation
    const nodeGroup = new THREE.Group();
    const lineGroup = new THREE.Group();
    
    // Store node meshes for easy access
    const nodeMeshes = {};
    const nodeMap = {};

    // Create nodes
    logoNodes.forEach((node, index) => {
      const geometry = new THREE.SphereGeometry(nodeSize, 16, 16);
      const mesh = new THREE.Mesh(geometry, nodeMaterial.clone());
      
      mesh.position.set(node.x, node.y, node.z);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      
      // Add subtle random movement to each node
      mesh.userData = {
        originalPosition: { x: node.x, y: node.y, z: node.z },
        phase: Math.random() * Math.PI * 2,
        amplitude: 0.1
      };
      
      nodeGroup.add(mesh);
      nodeMeshes[node.id] = mesh;
      nodeMap[node.id] = node;
    });

    // Create connections
    connections.forEach(([startId, endId]) => {
      const startNode = nodeMap[startId];
      const endNode = nodeMap[endId];
      
      if (startNode && endNode) {
        const points = [
          new THREE.Vector3(startNode.x, startNode.y, startNode.z),
          new THREE.Vector3(endNode.x, endNode.y, endNode.z)
        ];
        
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(geometry, lineMaterial.clone());
        lineGroup.add(line);
      }
    });

    // Add groups to scene
    scene.add(nodeGroup);
    scene.add(lineGroup);

    // Lighting setup
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(nodeColor, 0.8);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);

    // Point light for extra glow
    const pointLight = new THREE.PointLight(nodeColor, glowIntensity, 100);
    pointLight.position.set(0, 0, 10);
    scene.add(pointLight);

    // Animation variables
    let time = 0;

    // Animation loop
    const animate = () => {
      time += animationSpeed;
      
      // Rotate the entire logo
      nodeGroup.rotation.y = time * 0.5;
      lineGroup.rotation.y = time * 0.5;
      
      // Slight rotation on other axes for more dynamic movement
      nodeGroup.rotation.x = Math.sin(time * 0.3) * 0.1;
      lineGroup.rotation.x = Math.sin(time * 0.3) * 0.1;
      
      // Animate individual nodes with subtle movement and pulsing
      Object.values(nodeMeshes).forEach((mesh, index) => {
        const userData = mesh.userData;
        
        // Subtle floating animation
        mesh.position.y = userData.originalPosition.y + Math.sin(time * 2 + userData.phase) * userData.amplitude;
        
        // Pulsating effect
        const scale = 1 + Math.sin(time * 3 + userData.phase) * 0.1;
        mesh.scale.setScalar(scale);
        
        // Color variation for more dynamic look
        const colorVariation = 0.5 + Math.sin(time * 2 + userData.phase) * 0.2;
        mesh.material.opacity = 0.7 + colorVariation * 0.3;
      });

      // Animate light intensity
      pointLight.intensity = glowIntensity + Math.sin(time * 2) * 0.1;
      
      renderer.render(scene, camera);
      animationIdRef.current = requestAnimationFrame(animate);
    };

    // Start animation and hide loading
    animate();
    setTimeout(() => setIsLoading(false), 500);

    // Handle window resize
    const handleResize = () => {
      if (mountRef.current && renderer && camera) {
        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;
        
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose of geometries and materials
      scene.traverse((object) => {
        if (object.geometry) {
          object.geometry.dispose();
        }
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach(material => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
      
      renderer.dispose();
    };
  }, [width, height, nodeColor, lineColor, backgroundColor, animationSpeed, nodeSize, glowIntensity]);

  // Render fallback if WebGL is not supported
  if (!hasWebGL) {
    return (
      <div 
        style={{ 
          width, 
          height,
          background: backgroundColor === 'transparent' ? 'transparent' : backgroundColor,
          borderRadius: '1rem',
          overflow: 'hidden'
        }} 
        className="webgl-fallback"
      >
        <h3>Setidure Technologies</h3>
        <p>Your browser doesn't support WebGL. Please use a modern browser to view the 3D animation.</p>
      </div>
    );
  }

  return (
    <div 
      ref={mountRef} 
      style={{ 
        width, 
        height,
        background: backgroundColor === 'transparent' ? 'transparent' : backgroundColor,
        borderRadius: '1rem',
        overflow: 'hidden',
        position: 'relative'
      }} 
      className="three-js-container"
    >
      {isLoading && (
        <div className="three-js-loading">
          Loading 3D Animation
        </div>
      )}
    </div>
  );
};

export default SetidureLogoAnimation;