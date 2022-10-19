import React from "react";
import cloud from "../src/images/cloud.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

function Weather() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const apiURL = `http://api.openweathermap.org/data/2.5/weather?q=${location},india&APPID=f20d0bc68a14a56c4ceb84e541191934`;
  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(apiURL).then((res) => {
        setData(res.data);
        console.log("response", res.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="">
      <div className="col-md-12">
        <div className="weatherbg">
          <h1 className="heading">Weather App</h1>
          <div className="d-grid gap-3 col-3 mt-4">
            <input
              type="text"
              className="form-control"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              placeholder="Enter Location"
              onKeyPress={searchLocation}
            />
          </div>

          <div className="col-md-12 text-center mt-5 d-flex justify-content-center">
            <div className="shadow rounded weatherresultbox">
              <img className="weathericon" src={cloud} />
              <h2 className="weathercity">{data.name}</h2>
              {data.main ? (
                <h2 className="weathercity">{data.main.temp.toFixed()} °F </h2>
              ) : null}
              <div className="weather-container">
                <div className="weathertemp">
                  <h6>Feel Like</h6>
                  {data.main ? <h6>{data.main.feels_like.toFixed()}</h6> : null}
                </div>
                <div className="weathertemp">
                  <h6>Humidity</h6>
                  {data.main ? <h6>{data.main.humidity.toFixed()}</h6> : null}
                </div>
                <div className="weathertemp">
                  <h6>wind Speed</h6>
                  {data.wind ? <h6>{data.wind.speed.toFixed()}</h6> : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Weather;
