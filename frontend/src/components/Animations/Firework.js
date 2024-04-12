import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFireflyPreset } from "tsparticles-preset-firefly";

const Firework = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFireflyPreset(engine);
  }, []);

  const particlesConfig = {
    preset: "firefly",
    background: {
      color: {
        value: "#16161d",
      },
    },
  };
  return <Particles options={particlesConfig} init={particlesInit} />;
};

export default Firework;
