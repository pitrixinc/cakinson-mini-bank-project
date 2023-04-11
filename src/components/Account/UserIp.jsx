import React, { useEffect, useState } from "react";

function UserIp() {
  const [ipAddress, setIpAddress] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [flagUrl, setFlagUrl] = useState("");

  useEffect(() => {
    fetch("https://api.ipgeolocation.io/ipgeo?apiKey=b44b38aa748e446f881128d1afa43579")
      .then((response) => response.json())
      .then((data) => {
        setIpAddress(data.ip);
        setCountryCode(data.country_code2.toLowerCase());
        setFlagUrl(`https://flagcdn.com/w80/${data.country_code2.toLowerCase()}.png`);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="flex items-center">
      <p>Your IP address: <span className="font-semibold tracking-tight text-green-900 dark:text-green"> {ipAddress} </span> </p>
      <img src={flagUrl} alt={`National flag of ${countryCode}`} class="w-10 h-auto ml-1 mr-2 sm:w-8 md:w-12" />
    </div>
  );
}

export default UserIp;