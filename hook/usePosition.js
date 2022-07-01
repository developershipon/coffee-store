import { useState, useEffect } from "react";

export const usePosition = (getLocation) => {
  const [position, setPosition] = useState("");
  const [error, setError] = useState("");
  const [isfind, setIsfind] = useState(false);

  const success = ({ coords }) => {
    setIsfind(false);
    const latitude = coords.latitude;
    const longitude = coords.longitude;
    setPosition({ latitude, longitude });
    setError("");
  };

  const onError = (error) => {
    setIsfind(false);
    setPosition("");
    setError(error.message);
  };

  useEffect(() => {
    const geo = navigator.geolocation;
    setIsfind(true);
    if (!geo) {
      setError("Geolocation is not supported by your browser");
      setIsfind(true);
    } else {
      // status.textContent = "Locating…";
      geo.getCurrentPosition(success, onError);
    }
  }, [getLocation]);

  return { position, error, isfind };
};
