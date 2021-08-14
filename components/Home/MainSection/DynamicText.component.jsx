import React from "react";
import Typewriter from "typewriter-effect";

//Type writer effect on text
function DynamicText() {
  return (
    <Typewriter
      options={{
        strings: ["Front end developer", "UI Designer"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default DynamicText;
