import { useEffect } from "react";

function useResize(id, small, medium, big) {
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      const shape = document.getElementById(id);

      if (windowWidth < 775) {
        return shape.setAttribute("viewBox", small);
      } else if (windowWidth < 1320) {
        return shape.setAttribute("viewBox", medium);
      } else {
        return shape.setAttribute("viewBox", big);
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
  }, [id, small, medium, big]);
}

export default useResize;
