import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const options = {
    background: { color: { value: "#0b40bbff" } },
    fpsLimit: 60,
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" } },
      modes: { repulse: { distance: 100, duration: 0.4 } },
    },
    particles: {
      color: { value: "#22d3ee" },
      links: { enable: true, color: "#22d3ee" },
      move: { enable: true, speed: 2 },
      number: { value: 50 },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 4 } },
    },
  };

  return (
    <Particles
      id="tsparticles"
      options={options}
      init={loadSlim}
      className="absolute inset-0 -z-10"
    />
  );
}
