import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { AudioListener, AudioLoader, AudioAnalyser } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import vertexShader from './vertexShader.glsl.js';
import fragmentShader from './fragmentShader.glsl.js';

const VisualizerComponent = () => {
    const mountRef = useRef();
    const listenerRef = useRef(new AudioListener());
    const soundRef = useRef(new THREE.Audio(listenerRef.current));
    const analyserRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    // Uniforms for shader
  const uniformsRef = useRef({
    u_time: { value: 0.0 },
    u_frequency: { value: 0.0 },
    u_red: { value: parseInt("00", 16) }, // R: 0
    u_green: { value: parseInt("78", 16) }, // G: 120
    u_blue: { value: parseInt("cf", 16) }, // B: 207
  });

  

    // Function to start and stop the audio
    const startAudio = () => {
        if (listenerRef.current.context.state === 'suspended') {
            listenerRef.current.context.resume();
        }
        if (isPlaying) {
            soundRef.current.pause();
        } else {
            soundRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
      // Scene setup
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
      camera.position.z = 15;
  
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
      renderer.setClearColor(new THREE.Color(0xffffff));
      mountRef.current.appendChild(renderer.domElement);
  
      // Material and mesh setup
      const material = new THREE.ShaderMaterial({
          uniforms: uniformsRef.current,
          vertexShader,
          fragmentShader,
          wireframe: true,
      });
  
      const geometry = new THREE.IcosahedronGeometry(4, 30);
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
  
      // Bloom effect
      const renderScene = new RenderPass(scene, camera);
      const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
      const composer = new EffectComposer(renderer);
      composer.addPass(renderScene);
      composer.addPass(bloomPass);
  
      // OrbitControls for interactivity
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
  
      // Animation loop
      const animate = () => {
          requestAnimationFrame(animate);
          controls.update();
          uniformsRef.current.u_time.value += 0.05;
          if (analyserRef.current) {
              uniformsRef.current.u_frequency.value = analyserRef.current.getAverageFrequency();
          }
          composer.render();
      };
  
      // Load audio and set up analyser
      camera.add(listenerRef.current);
      const audioLoader = new AudioLoader();
      const audioPath = '/Beats.mp3';
      audioLoader.load(audioPath, (buffer) => {
        soundRef.current.setBuffer(buffer);
        soundRef.current.setLoop(true);
        soundRef.current.play();
        analyserRef.current = new AudioAnalyser(soundRef.current, 128);
    });
  
      // Start rendering
      animate();
  
      // Clean up on unmount
      return () => {
        soundRef.current.pause();
        if (mountRef.current) {
            mountRef.current.removeChild(renderer.domElement);
        }
    };
}, []);

    return (
      <div className='flex flex-row'>
          <div className="visualizer-wrapper" style={{ width: '100%', height: '100vh' }}>
              <div ref={mountRef} className="visualizer" style={{ width: '100%', height: '100%' }}></div>
          </div>
      </div>
  );  
};

export default VisualizerComponent;
