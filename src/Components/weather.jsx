import React from "react";
import "./styles.css";
import moment from "moment";

export default function Weather({weatherData})
{
    return (
        <div className="main">
                <p className = "header">{weatherData.name}</p>
                <div className="flex">
                    <p className="temp">{Math.round(weatherData.main.temp)} &deg;C</p>
                    <img className="icon" src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt="Icon representing current weather status"/>
                </div>

                <div className="flex2">
                    <p>Feels Like: {weatherData.main.feels_like}&deg;C</p>
                    <p>{weatherData.weather[0].description}</p>
                </div>
                
                <div className="data">
                    <p>Humidity: {weatherData.main.humidity}%</p>
                    <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString("en-IN")}</p>
                    <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString("en-IN")}</p>
                </div>
                
                <div className="flex2">
                    <p>{moment().format('dddd')}</p>
                    <p>{moment().format("ll")}</p>
                </div>
                
        </div>
    );
} 