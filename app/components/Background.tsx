'use client'

// packages
import { loadFull } from "tsparticles"
import Particles from "react-particles"
import { useCallback } from "react"
import { Engine } from "tsparticles-engine"

export default function ParticlesComponent(props: { id: string }) {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine)
  }, [])

  return (
    <section>
      <Particles
        
        init={particlesInit}

        options={{
          fpsLimit: 60,
          background: {
            color: "#111827"
          },
          interactivity: {
            events: {
              resize: true
            },
          },
          fullScreen: {
            enable: true,
            zIndex: -1
          },
          particles: {
            color: { value: "#ffffff" },
            move: {
              direction: "none",
              enable: true,
              outModes: "out",
              random: false,
              speed: 0.3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800
              },
              value: 400
            },
            opacity: {
              value: {
                min: 0,
                max: 0.5
              }
            },
            shape: {
              type: "circle"
            },
            size: {
              value: { min: .5, max: 3 }
            }
          }
        }}
      />
    </section>
  )
}