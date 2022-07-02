import { useState } from "react";

export const useLocation = () => {
  const [latlong, setLatlong] = useState("");
  const [error, setError] = useState("");
  const [isfind, setIsfind] = useState(false);

  const success = ({ coords }) => {
    setIsfind(false);
    const latitude = coords.latitude;
    const longitude = coords.longitude;
    setLatlong({ latitude, longitude });
    setError("");
  };

  const onError = () => {
    setIsfind(false);
    setLatlong("");
    setError("Unable to retrieve your location");
  };

  const handleTrack = () => {
    const geo = navigator.geolocation;
    setIsfind(true);
    if (!geo) {
      setError("Geolocation is not supported by your browser");
      setIsfind(true);
    } else {
      // status.textContent = "Locating…";
      geo.getCurrentPosition(success, onError);
    }
  };

  return { latlong, error, isfind, handleTrack };
};
