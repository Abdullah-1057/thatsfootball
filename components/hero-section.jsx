"use client"

import { Suspense, useRef, useState, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Text, OrbitControls } from "@react-three/drei"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Play, Users, User } from "lucide-react"
import * as THREE from "three"

// 3D Text Component with stadium lighting effects
function FloatingText() {
  const textRef = useRef()
  const ballRef = useRef()
  const { viewport } = useThree()

  useFrame((state) => {
    if (textRef.current) {
      // Slow orbit animation
      textRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
      textRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
    }

    if (ballRef.current) {
      // Subtle ball spin
      ballRef.current.rotation.x += 0.01
      ballRef.current.rotation.y += 0.015
    }
  })

  return (
    <group>
      {/* Main 3D Text */}
      <Text
        ref={textRef}
        fontSize={viewport.width > 10 ? 2.5 : 1.8}
        maxWidth={viewport.width}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign="center"
        anchorX="center"
        anchorY="middle"
        position={[0, 0.5, 0]}
      >
        THAT'S FOOTBALL!
        <meshStandardMaterial
          color="#00ffcc"
          emissive="#00ffcc"
          emissiveIntensity={0.3}
          roughness={0.1}
          metalness={0.8}
        />
      </Text>

      {/* Floating Football */}
      <mesh ref={ballRef} position={[3, -1, 1]} scale={0.3}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#00bcd4"
          emissiveIntensity={0.1}
          roughness={0.3}
          metalness={0.1}
        />
      </mesh>

      <pointLight position={[-5, 5, 2]} intensity={1} color="#00ffcc" />
      <pointLight position={[5, 5, 2]} intensity={1} color="#00bcd4" />
      <pointLight position={[0, -5, 5]} intensity={0.5} color="#00ff88" />

      {/* Ambient stadium atmosphere */}
      <ambientLight intensity={0.2} color="#4a1a5c" />
    </group>
  )
}

// Stadium Environment Background
function StadiumEnvironment() {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <mesh ref={meshRef} scale={50}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshBasicMaterial side={THREE.BackSide} color="#1a0d2e" transparent opacity={0.8} />
    </mesh>
  )
}

// Mouse Parallax Controller
function MouseParallax() {
  const { camera } = useThree()

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1
      const y = -(event.clientY / window.innerHeight) * 2 + 1

      // Subtle camera movement within bounds
      camera.position.x = x * 0.5
      camera.position.y = y * 0.3
      camera.lookAt(0, 0, 0)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [camera])

  return null
}

// WebGL Detection Hook
function useWebGLSupport() {
  const [isSupported, setIsSupported] = useState(true)

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas")
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
      setIsSupported(!!gl)
    } catch (e) {
      setIsSupported(false)
    }
  }, [])

  return isSupported
}

// Fallback Hero Component
function HeroFallback() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0d2e] via-[#2d1b3d] to-[#1a0d2e]" />

      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#00bcd4]/30 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-[#00ffcc]/30 rounded-full blur-lg animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-[#00ff88]/30 rounded-full blur-md animate-pulse delay-2000" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-sans font-bold text-4xl md:text-6xl lg:text-7xl mb-6 stadium-glow"
          style={{ color: "#00ffcc" }}
        >
          THAT'S FOOTBALL!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          Bold takes, honest opinions, and the passion that makes football beautiful.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button size="lg" className="stadium-glow" style={{ backgroundColor: "#00bcd4" }}>
            <Play className="mr-2 h-5 w-5" />
            Latest Posts
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="stadium-glow border-[#00bcd4] text-[#00bcd4] hover:bg-[#00bcd4] hover:text-[#1a0d2e] bg-transparent"
          >
            <Users className="mr-2 h-5 w-5" />
            Watch Clips
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className="stadium-glow bg-[#00ffcc]/20 text-[#00ffcc] hover:bg-[#00ffcc] hover:text-[#1a0d2e]"
          >
            <User className="mr-2 h-5 w-5" />
            Join Community
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

// Main Hero Section Component
export function HeroSection() {
  const webGLSupported = useWebGLSupport()
  const [showFallback, setShowFallback] = useState(false)

  // Show fallback if WebGL not supported or on low-power devices
  useEffect(() => {
    const isLowPower = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4
    if (!webGLSupported || isLowPower) {
      setShowFallback(true)
    }
  }, [webGLSupported])

  if (showFallback) {
    return <HeroFallback />
  }

  return (
    <section className="relative h-screen overflow-hidden" aria-label="Hero section">
      {/* Semantic heading for accessibility */}
      <h1 className="sr-only">That's Football - Premium Football Content by Mark Goldbridge</h1>

      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        className="absolute inset-0"
        aria-hidden="true"
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping
          gl.toneMappingExposure = 1.2
        }}
      >
        <Suspense fallback={null}>
          <StadiumEnvironment />
          <FloatingText />
          <MouseParallax />

          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} autoRotate autoRotateSpeed={0.5} />
        </Suspense>
      </Canvas>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center px-4">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Bold takes, honest opinions, and the passion that makes football beautiful.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button size="lg" className="stadium-glow" style={{ backgroundColor: "#00bcd4" }}>
              <Play className="mr-2 h-5 w-5" />
              Latest Posts
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="stadium-glow border-[#00bcd4] text-[#00bcd4] hover:bg-[#00bcd4] hover:text-[#1a0d2e] bg-transparent"
            >
              <Users className="mr-2 h-5 w-5" />
              Watch Clips
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="stadium-glow bg-[#00ffcc]/20 text-[#00ffcc] hover:bg-[#00ffcc] hover:text-[#1a0d2e]"
            >
              <User className="mr-2 h-5 w-5" />
              Join Community
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a0d2e]/80 via-transparent to-transparent pointer-events-none" />
    </section>
  )
}
