import React, { useState, useEffect } from "react";

function GeolocationExample() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [country, setCountry] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setLatitude(latitude);
          setLongitude(longitude);

          try {
            // Use a reverse geocoding service to get country information
            const response = await fetch(
              `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=AIzaSyDVcItkNpisD6dRjK4tpWy5bKEt07PDI6c`
            );
            console.log("<><>", response);
            if (response.ok) {
              const data = await response.json();
              if (data.results.length > 0) {
                const countryName = data.results[0].components.country;
                setCountry(countryName);
              }
            }
          } catch (error) {
            console.error("Error getting country information:", error.message);
          }
        },
        (error) => {
          console.error("Error getting geolocation:", error.message);
        }
      );
    } else {
      console.error("Geolocation is not available in this browser.");
    }
  }, []);

  return (
    <div>
      <h1>Geolocation Example</h1>
      {latitude && longitude ? (
        <div>
          <p>
            Latitude: {latitude}, Longitude: {longitude}
          </p>
          {country && <p>Country: {country}</p>}
        </div>
      ) : (
        <p>Fetching geolocation...</p>
      )}
    </div>
  );
}

export default GeolocationExample;
