import "./App.css";
import React, {useState, useEffect} from "react";
import Weather from "./Components/weather";
import Search from "./Components/Search";
import { Dimmer, Loader } from 'semantic-ui-react';

function App() {

  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);
  const [data, setData] = useState([])

  useEffect(() => 
  {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(position => {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });

    await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${lon}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
    }
    fetchData();
  }, [lat, lon]);

  function handleCallBack(cityName)
  {
      const fetchCity = async() => {
        try {
          const response = await fetch(
            `${process.env.REACT_APP_API_URL}/weather/?q=${cityName}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
          );
          const result = await response.json();
          console.log(result);
          setData(result);
        } catch (error) {
          console.error("Error fetching city data:", error);
          
        }
      }
      fetchCity();
  }

  return (
      <div className="App css-selector">
        {(typeof data.main != 'undefined') ? (
          <div className="parts">
            <div className="searchbar">
              <Search parentCallback={handleCallBack}/>
            </div>
            <Weather weatherData={data} />
          </div>
        ) : (
          <div>
            <Dimmer active>
              <Loader>Loading..</Loader>
            </Dimmer>
          </div>
        )}
      </div>
  );
}

export default App;
