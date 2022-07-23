import { useState, useEffect } from "react";
const useDeviceSize = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.pageYOffset);
  };

  useEffect(() => {
    // component is mounted and window is available
    handleWindowResize();

    window.addEventListener("scroll", handleWindowResize);
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener("scroll", handleWindowResize);
  }, []);

  return [width, height];
};

export default useDeviceSize;
