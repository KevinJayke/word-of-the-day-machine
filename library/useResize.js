import { useEffect } from "react";

function useResize() {
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      const shape = document.getElementById("croissant");
      console.log(windowWidth);

      if (windowWidth < 775) {
        return shape.setAttribute("viewBox", "-500 400 600 800");
      } else if (windowWidth < 1320) {
        return shape.setAttribute("viewBox", "-350 400 600 800");
      } else {
        return shape.setAttribute("viewBox", "0 400 600 800");
      }
    };

    // Call the handleResize function immediately
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
}

export default useResize;
