"use client";

import { useEffect } from "react";

function Shadow() {
  useEffect(() => {
    const handleResize = () => {
      const frameHeight = document.getElementById("frame").offsetHeight;
      const shadowElement = document.getElementById("shadow");
      shadowElement.setAttribute("height", frameHeight);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="-z-10 absolute inset-y-0 -left-20 opacity-25 scale-y-95 mix-blend-multiply">
      <svg
        id="shadow"
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="0"
        preserveAspectRatio="none"
        viewBox="0 0 40 100">
        <mask id="my-mask">
          <rect fill="white" x="0" y="0" width="40" height="100" />
          <ellipse cy="50" rx="30" ry="55"></ellipse>
        </mask>
        <rect
          mask="url(#my-mask)"
          x="0"
          y="0"
          width="40"
          height="100"
          fill="#7E7E7E"
        />
      </svg>
    </div>
  );
}

export default Shadow;
