import React from "react";

export default function Forecast() {
  return (
    <div className="col-2">
      <ul>
        <li>17:00</li>
        <li>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="weather-icon"
            className="icon-forecast"
          />
        </li>
        <li>
          <strong>20°C</strong>
        </li>
      </ul>
    </div>
  );
}
