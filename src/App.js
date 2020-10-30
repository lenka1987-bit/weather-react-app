
import Forecast from "./Forecast";
import "./index.css";

function App(props) {
  return (
    <div className="App">
      <div className="border-frame">
        <form id="search-engine">
          <input
            className="city-input"
            type="text"
            placeholder="Type a city..."
          />
          <input className="btn btn-primary" type="submit" value="SEARCH" />
        </form>
        <ul>
          <li className="city-heading">{props.city}</li>
          <li>Friday, 15:40</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <ul>
              <li>
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="weather-icon"
                  className="weather-icon"
                />

                <span className="temperature">26</span>
                <button className="units celsius active">
                  °C|
                </button>
                <button id="fahrenheit-unit" className="units fahrenheit">
                  ℉
                </button>
              </li>
              <li id="description" className="weather-description"></li>
            </ul>
          </div>
          <div className="col-6">
            <ul className="right-column">
              <li>Sunrise: 06:40</li>
              <li>Sunset: 18:44</li>
              <li>Humidity: 55%</li>
              <li>Wind: 4 m/s</li>
            </ul>
          </div>
        </div>
        <h3>3 HOURS FORECAST:</h3>
        <div className="forecast-frame">
          <div className="row">
            <Forecast />
            <Forecast />
            <Forecast />
            <Forecast />
            <Forecast />
          </div>
        </div>
      </div>
        <small><a href="https://github.com/lenka1987-bit/weather-react-app" target="_blank">Open-source code </a> by Lenka Doubravova</small>
    </div>
  );
}

export default App;
