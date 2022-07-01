import { useState, useEffect } from "react";

export const useLocation = () => {
  const [locationError, setLocationError] = useState("");
  const [latlong, setLatlong] = useState(null);

  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    setLatlong(`${latitude}, ${longitude}`);
    setLocationError("");
  };
  const error = () => {
    setLocationError("Geolocation is not supported by your browser");
  };
  const handleTrack = () => {
    const geo = navigator.geolocation;
    if (!geo) {
      setLocationError("Geolocation is not supported by your browser");
    } else {
      // status.textContent = "Locating…";
      geo.getCurrentPosition(success, error);
    }
  };
  return latlong, locationError, handleTrack;
};
