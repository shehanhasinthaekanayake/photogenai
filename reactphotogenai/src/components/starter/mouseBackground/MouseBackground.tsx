import { component$, useVisibleTask$, useSignal } from '@builder.io/qwik';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass.js';

const imageUrls = [
  'https://carousel-slider.uiinitiative.com/images/guardians-of-the-galaxy.jpg',
  // Add more image URLs here
];

export const MouseBackground = component$(() => {
  const containerRef = useSignal<Element>();

  useVisibleTask$(() => {
    if (!containerRef.value) return;

    // Set up scene with darker background
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x080808); // Very dark background
    scene.fog = new THREE.Fog(0x080808, 8, 15); // Add fog for depth and darkness

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true,
      logarithmicDepthBuffer: true  // Add this to improve depth precision
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.value.appendChild(renderer.domElement);

    // Position camera first
    camera.position.z = 8; // Move camera back slightly
    camera.rotation.x = 0; // Set X rotation to 0 for flat view
    camera.rotation.z = 0; // Set Z rotation to 0 for flat view

    // Define image size
    const imageSize = {
      width: 4.0,
      height: 3.0
    };

    // Calculate grid dimensions
    const aspectRatio = window.innerWidth / window.innerHeight;
    const gridSize = { 
      x: Math.ceil(aspectRatio * 3), 
      y: 12 
    };
    
    // Define spacing with explicit gap
    const gap = 0.1; // Explicit gap size between images
    const spacing = { 
      x: imageSize.width + gap, // Add gap to image width
      y: imageSize.height + gap  // Add gap to image height
    };

    // Calculate center offset
    const centerOffset = {
      x: ((gridSize.x - 1) * spacing.x) / 2,
      y: ((gridSize.y - 1) * spacing.y) / 2
    };

    // Create rounded rectangle shape for the card
    const roundedRectShape = new THREE.Shape();
    const radius = 0.15; // Reduced from default for subtler corners
    const width = imageSize.width;
    const height = imageSize.height;
    
    roundedRectShape.moveTo(-width/2 + radius, -height/2);
    roundedRectShape.lineTo(width/2 - radius, -height/2);
    roundedRectShape.quadraticCurveTo(width/2, -height/2, width/2, -height/2 + radius);
    roundedRectShape.lineTo(width/2, height/2 - radius);
    roundedRectShape.quadraticCurveTo(width/2, height/2, width/2 - radius, height/2);
    roundedRectShape.lineTo(-width/2 + radius, height/2);
    roundedRectShape.quadraticCurveTo(-width/2, height/2, -width/2, height/2 - radius);
    roundedRectShape.lineTo(-width/2, -height/2 + radius);
    roundedRectShape.quadraticCurveTo(-width/2, -height/2, -width/2 + radius, -height/2);

    // Create image grid
    const textureLoader = new THREE.TextureLoader();
    const images: THREE.Mesh[] = [];

    // Create dark overlay material
    const overlayMaterial = new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.4, // Adjust for desired darkness
      side: THREE.DoubleSide
    });

    // Add this function to get a random image URL
    const getRandomImageUrl = () => {
      return imageUrls[Math.floor(Math.random() * imageUrls.length)];
    };

    // When creating each card in the grid
    // for (let row = 0; row < gridSize.y; row++) {
    //   for (let col = 0; col < gridSize.x; col++) {
    //     const texture = textureLoader.load(getRandomImageUrl());
    //     texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
    //     texture.minFilter = THREE.LinearFilter;
    //     texture.generateMipmaps = false;

    //     // Adjust texture mapping
    //     texture.offset.set(0, 0);
    //     texture.repeat.set(1, 1);
    //     texture.center.set(0.5, 0.5);

    //     const geometry = new THREE.ShapeGeometry(roundedRectShape);
        
    //     // Properly map UVs to prevent bleeding
    //     const uvAttribute = geometry.attributes.uv;
    //     const positions = geometry.attributes.position;
        
    //     for (let i = 0; i < positions.count; i++) {
    //       const x = positions.getX(i);
    //       const y = positions.getY(i);
          
    //       // Map position coordinates to UV space (0 to 1)
    //       const u = (x + width/2) / width;
    //       const v = (y + height/2) / height;
          
    //       uvAttribute.setXY(i, u, v);
    //     }

    //     // Create the image with darker settings
    //     const imagePlane = new THREE.Mesh(
    //       geometry,
    //       new THREE.MeshBasicMaterial({
    //         map: texture,
    //         transparent: true,
    //         opacity: 0.75,
    //         side: THREE.DoubleSide,
    //         depthTest: true,          // Enable depth testing
    //         depthWrite: true          // Enable depth writing
    //       })
    //     );
    //     imagePlane.renderOrder = 0;   // Base render order

    //     // Create dark overlay
    //     const overlay = new THREE.Mesh(geometry, overlayMaterial);
    //     overlay.renderOrder = 1;      // Ensure overlay renders after image
        
    //     // Position elements
    //     const xPos = (col * spacing.x) - centerOffset.x;
    //     const yPos = (row * spacing.y) - centerOffset.y;
        
    //     imagePlane.position.set(xPos, yPos, 2);
    //     overlay.position.set(xPos, yPos, 2 + 0.01);
        
    //     // Add to scene
    //     scene.add(imagePlane);
    //     scene.add(overlay);
    //     cards.push({
    //       image: imagePlane,
    //       overlay,
    //       animation: {
    //         scale: 1,
    //         rotationX: 0,
    //         rotationY: 0
    //       }
    //     });
    //   }
    // }

    // Adjust lighting for darker atmosphere
    const ambientLight = new THREE.AmbientLight(0x111111, 0.5); // Reduced intensity
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x333333, 0.5, 10);
    pointLight.position.set(0, 0, 5);
    scene.add(pointLight);

    // Set renderer background and properties
    renderer.setClearColor(0x000000, 1); // Pure black background
    renderer.toneMappingExposure = 1.5; // Adjust exposure

    // Create static noise shader
    const noiseShader = {
      uniforms: {
        opacity: { value: 0.08 } // Reduced opacity for subtler grain
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float opacity;
        varying vec2 vUv;
        
        float random(vec2 st) {
          return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
        }
        
        void main() {
          vec2 st = gl_FragCoord.xy * 0.003; // Adjust grain size
          float noise = random(st);
          gl_FragColor = vec4(vec3(noise * opacity), 1.0);
        }
      `
    };

    // Create static noise overlay
    const noiseGeometry = new THREE.PlaneGeometry(50, 50);
    const noiseMaterial = new THREE.ShaderMaterial({
      uniforms: noiseShader.uniforms,
      vertexShader: noiseShader.vertexShader,
      fragmentShader: noiseShader.fragmentShader,
      transparent: true,
      blending: THREE.AdditiveBlending
    });

    const noiseOverlay = new THREE.Mesh(noiseGeometry, noiseMaterial);
    noiseOverlay.position.z = 2;
    scene.add(noiseOverlay);

    // Set up post-processing
    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    const filmPass = new FilmPass(
      0.15,
      false
    );
    composer.addPass(filmPass);

    // Add time variable before the animation loop
    let time = 0;

    const scrollSpeed = 0.005;
    const resetPosition = ((gridSize.y - 1) * spacing.y) / 2 + spacing.y * 2;
    const startPosition = -resetPosition;

    // Add these constants before the grid creation
    const hoverAnimation = {
      scale: 1.1,
      rotationX: 0.1,
      rotationY: 0.1,
      duration: 0.3
    };

    // Add mouse interaction handling after the grid creation
    // window.addEventListener('mousemove', handleMouseMove);

    // Add these variables before the animation loop
    const visibleBuffer = 1; // Number of extra rows to keep above/below viewport
    const totalRows = gridSize.y + visibleBuffer * 2;
    
    // Add these helper functions before the animation loop
    // const getCardsInRow = (y: number) => {
    //   return cards.filter(card => Math.abs(card.image.position.y - y) < 0.01);
    // };

    // const getRowPositions = () => {
    //   return [...new Set(cards.map(card => card.image.position.y))].sort((a, b) => a - b);
    // };

    // Modify the stars creation code
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xFFFFFF,
      size: 0.05,
      transparent: true,
      opacity: 0.8,
    });

    const starsCount = 3000;
    const starsVertices = new Float32Array(starsCount * 3);
    const maxDistance = 100;

    // Create stars with z-depth distribution
    for (let i = 0; i < starsCount * 3; i += 3) {
      starsVertices[i] = (Math.random() - 0.5) * 100;     // x
      starsVertices[i + 1] = (Math.random() - 0.5) * 100; // y
      starsVertices[i + 2] = Math.random() * maxDistance - maxDistance; // z between -100 and 0
    }

    starsGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(starsVertices, 3)
    );

    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Add these constants near other animation constants
    const zStartPosition = -20;    // Start further back
    const zEndPosition = 2;        // Keep same end position
    const zSpeed = 0.04;          // Slightly faster z movement

    // Modify the animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.005;

      // Update stars positions
      const positions = stars.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        // Move z position towards camera
        positions[i + 2] += 0.03;

        // Reset star to back when it gets too close
        if (positions[i + 2] > 20) {
          positions[i] = (Math.random() - 0.5) * 100;     // Random x
          positions[i + 1] = (Math.random() - 0.5) * 100; // Random y
          positions[i + 2] = -maxDistance;                 // Reset to far back
        }
      }
      stars.geometry.attributes.position.needsUpdate = true;

      // Remove the previous star rotation
      // stars.rotation.y += 0.0001;
      // stars.rotation.x += 0.0002;

      // Keep camera at fixed rotation
      camera.rotation.x = 0; // Ensure X rotation is 0
      camera.rotation.z = 0; // Ensure Z rotation is 0

      // Get all unique row positions
      // const rowPositions = getRowPositions();

      // Check if top row needs recycling
      // const topRowY = Math.max(...rowPositions);
      // if (topRowY > resetPosition) {
      //   const bottomRowY = Math.min(...rowPositions);
      //   const newY = bottomRowY - spacing.y;
          
      //   // Get all cards in the top row
      //   const topRowCards = getCardsInRow(topRowY);
          
      //   // Move entire row to bottom and update textures
      //   topRowCards.forEach(card => {
      //     // Update positions
      //     card.image.position.y = newY;
      //     card.overlay.position.y = newY;
      //     // Reset Z position when recycling
      //     card.image.position.z = zStartPosition;
      //     card.overlay.position.z = zStartPosition + 0.01;
          
      //     // Load new random image
      //     const texture = textureLoader.load(getRandomImageUrl());
      //     texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
      //     texture.minFilter = THREE.LinearFilter;
      //     texture.generateMipmaps = false;
      //     (card.image.material as THREE.MeshBasicMaterial).map = texture;
      //   });
      // }

      // Update all cards positions
      // cards.forEach(({ image, overlay }) => {
      //   // Apply scroll movement
      //   image.position.y += scrollSpeed;
      //   overlay.position.y += scrollSpeed;
      // });

      composer.render();
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      const newAspectRatio = window.innerWidth / window.innerHeight;
      camera.aspect = newAspectRatio;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.value?.removeChild(renderer.domElement);
    };
  });

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
    />
  );
});
