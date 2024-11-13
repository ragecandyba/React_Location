import React, { useEffect, useState } from "react";

function GetCurrentAddress() {
  const [add, setAdd] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;

      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setAdd(data.address));
    });
  }, []);

  return (
    <>
      {console.log("add", add)}
      <p>City : {add.city}</p>
      <p>Country :{add.country}</p>
      <p>Post Code:{add.postcode}</p>
      <p>State: {add.state}</p>
    </>
  );
}

export default GetCurrentAddress;
