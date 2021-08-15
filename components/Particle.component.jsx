import React, { Fragment } from "react";
import Particles from "react-particles-js";

function Particle() {
  return (
    <Fragment>
      <Particles
        params={{
          particles: {
            number: {
              value: 1000,
            },
            size: {
              value: 5,
            },
          },
          particles: {
            links: {
              color: "#ffffff",
              distance: 400,
              enable: false,
              opacity: 1,
              width: 1,
            },
            size: {
              value: 2,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 1,
              straight: false,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />
    </Fragment>
  );
}

export default Particle;
