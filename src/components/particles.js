import React from "react"
import { Particles as ReactParticles } from "react-particles-js"

const particlesParams = {
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ff7500",
    },
    shape: {
      type: "circle",
    },
    size: {
      value: 3,
    },
    opacity: {
      value: 0.2,
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ff7500",
      opacity: 0.4,
      width: 1,
    },
  },
}

const Particles = () => {
  return (
    <ReactParticles
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        backgroundColor: "#eaeaea",
      }}
      params={particlesParams}
    />
  )
}

export default Particles
