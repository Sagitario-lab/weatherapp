import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Css/Menu.css";


export function Menu() {
  const [coords, setCoords] = useState();
  const [units, setUnits] = useState("imperial");
  const [language, setLanguage] = useState("es");

  const languajeHandler = (e) => {
    const language = e.target.value;
    setLanguage(language);
  };

  const changeImperial = (e) => {
    setUnits("imperial");
  };

  const changeMetric = (e) => {
    setUnits("metric");
  };



  useEffect(() => {
    const success = (data) => {
      const lat = data.coords.latitude;

      const lon = data.coords.longitude;

      const endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7a0c21b7df4624da5266eb34d56dd7a4&units=${units}`;

      axios.get(endpoint).then((res) => {
        setCoords(res.data);
      });
    };

    navigator.geolocation.getCurrentPosition(success);
  }, [units]);

  

  return (
    <>
      <div>
        {coords && (
          <div className="general-cont">
            {language === "en" ? (
              <>
                <div>
                  <span>
                    Languaje
                  </span>
                  <select name="language" onChange={languajeHandler} >
                    <option value={"es"}>Español</option>
                    <option value={"en"}>English</option>
                  </select>
                </div>

                <div className="cont-buttons">
                  <button onClick={changeImperial} className="button">Imperial</button>
                  <button onClick={changeMetric} className="button btn1">Metric</button>
                </div>

                <div className="location-data">
                  <div>
                    Location: {coords.name}, {coords.sys.country}
                  </div>
                </div>

                <div className="data-gen-cont">
                  <div className="data-cont-1">
                    <div className="data">
                      <div>Max: </div>
                      <div>
                        {units === "imperial" ? (
                          <>{coords.main.temp_max} °F</>
                        ) : (
                          <>{coords.main.temp_max} °C</>
                        )}
                      </div>
                    </div>
                    <div className="data">
                      <div>Min:</div>
                      <div>
                        {units === "imperial" ? (
                          <>{coords.main.temp_min} °F</>
                        ) : (
                          <>{coords.main.temp_min} °C</>
                        )}
                      </div>
                    </div>
                    <div className="data">
                      <div>Temperature:</div>
                      <div>
                        {units === "imperial" ? (
                          <>{coords.main.temp} °F</>
                        ) : (
                          <>{coords.main.temp} °C</>
                        )}
                      </div>
                    </div>
                    <div className="data">
                      <div>Feels like:</div>
                      <div>
                        {units === "imperial" ? (
                          <>{coords.main.feels_like} °F</>
                        ) : (
                          <>{coords.main.feels_like} °C</>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="data-cont-2">
                    <div className="data">
                      <div>Clouds:</div>
                      <div>{coords.clouds.all}%</div>
                    </div>
                    <div className="data">
                      <div>Visibility:</div>
                      <div>{coords.visibility} m</div>
                    </div>
                    <div className="data">
                      <div>Weather:</div>
                      {coords.weather.map((info,indx) => {
                        return <div key={indx}>{info.description}</div>;
                      })}
                    </div>
                    <div className="data">
                      <div>Wind:</div>
                      <div>{coords.wind.speed} m/s</div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div>
                  <select name="language" onChange={languajeHandler} >
                    <option value={"es"}>Español</option>
                    <option value={"en"}>English</option>
                  </select>
                </div>

                <div className="cont-buttons">
                  <button onClick={changeImperial} className="button">Imperial</button>
                  <button onClick={changeMetric} className="button btn1">Metric</button>
                </div>

                <div className="location-data">
                  <div>
                    Ubicación: {coords.name}, {coords.sys.country}
                  </div>
                </div>

                <div className="data-gen-cont">
                  <div className="data-cont-1">
                    <div className="data">
                      <div>Máxima: </div>
                      <div>
                        {units === "imperial" ? (
                          <>{coords.main.temp_max} °F</>
                        ) : (
                          <>{coords.main.temp_max} °C</>
                        )}
                      </div>
                    </div>
                    <div className="data">
                      <div>Mínima:</div>
                      <div>
                        {units === "imperial" ? (
                          <>{coords.main.temp_min} °F</>
                        ) : (
                          <>{coords.main.temp_min} °C</>
                        )}
                      </div>
                    </div>
                    <div className="data">
                      <div>Temperatura:</div>
                      <div>
                        {units === "imperial" ? (
                          <>{coords.main.temp} °F</>
                        ) : (
                          <>{coords.main.temp} °C</>
                        )}
                      </div>
                    </div>
                    <div className="data">
                      <div>Sensación térmica:</div>
                      <div>
                        {units === "imperial" ? (
                          <>{coords.main.feels_like} °F</>
                        ) : (
                          <>{coords.main.feels_like} °C</>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="data-cont-2">
                    <div className="data">
                      <div>Nubosidad:</div>
                      <div>{coords.clouds.all}%</div>
                    </div>
                    <div className="data">
                      <div>Visibilidad:</div>
                      <div>{coords.visibility} m</div>
                    </div>
                    <div className="data">
                      <div>Clima:</div>
                      {coords.weather.map((info,indx) => {
                        return <div key={indx}>{info.description}</div>;
                      })}
                    </div>
                    <div className="data">
                      <div>Viento:</div>
                      <div>{coords.wind.speed} m/s</div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        {!coords && (<div className="enable-location">¡Please, enable your location to know the weather!</div>)}
      </div>
    </>
  );
}

export default Menu;
