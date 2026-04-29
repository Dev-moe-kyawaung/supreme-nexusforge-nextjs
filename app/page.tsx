'use client';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function NexusForge() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <main className="bg-zinc-950 text-white">
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      
      <Canvas className="absolute top-0 left-0 -z-10">
        <Float>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
        </Float>
      </Canvas>
    </main>
  );
}
