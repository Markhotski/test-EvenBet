import { useEffect, useState } from "react";

export default function useCoordinates(id: any) {
  const [coordinates, setCoordinates] = useState(document.getElementById(id)?.getBoundingClientRect());

  useEffect(() => {
    const onResize = () => {
      setCoordinates(document.getElementById(id)?.getBoundingClientRect());
    }

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    }
  }, []);
  
  return coordinates;
}