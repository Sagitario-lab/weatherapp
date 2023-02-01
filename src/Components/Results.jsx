import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export function Results({language, setLanguage}) {
  const [locations, setLocations] = useState();
  const [units, setUnits] = useState("imperial");
  
  const { location } = useParams();
  const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=7a0c21b7df4624da5266eb34d56dd7a4&units=${units}`;

  const changeImperial = (e) => {
    setUnits("imperial");
  };

  const changeMetric = (e) => {
    setUnits("metric");
  };

  const languajeHandler = (e) => {
    const language = e.target.value;
    setLanguage(language);
  };

  useEffect(() => {
    axios.get(endpoint).then((res) => {
      setLocations(res.data);
    
    });
  }, [units, location]);

  return (
    <>
      {locations && (
        <div className='general-cont'>
          {language === "en" ? (
            <>
              <div>
                <select name='language' onChange={languajeHandler}>
                  <option value={"es"}>Español</option>
                  <option value={"en"}>English</option>
                </select>
              </div>

              <div className='cont-buttons'>
                <button onClick={changeImperial} className='button'>
                  Imperial
                </button>
                <button onClick={changeMetric} className='button btn1'>
                  Metric
                </button>
              </div>

              <div className='location-data'>
                <div>
                  Location: {locations.name}, {locations.sys.country}
                </div>
              </div>

              <div className='data-gen-cont'>
                <div className='data-cont-1'>
                  <div className='data'>
                    <div>Max: </div>
                    <div>
                      {units === "imperial" ? (
                        <>{locations.main.temp_max} °F</>
                      ) : (
                        <>{locations.main.temp_max} °C</>
                      )}
                    </div>
                  </div>
                  <div className='data'>
                    <div>Min:</div>
                    <div>
                      {units === "imperial" ? (
                        <>{locations.main.temp_min} °F</>
                      ) : (
                        <>{locations.main.temp_min} °C</>
                      )}
                    </div>
                  </div>
                  <div className='data'>
                    <div>Temperature:</div>
                    <div>
                      {units === "imperial" ? (
                        <>{locations.main.temp} °F</>
                      ) : (
                        <>{locations.main.temp} °C</>
                      )}
                    </div>
                  </div>
                  <div className='data'>
                    <div>Feels like:</div>
                    <div>
                      {units === "imperial" ? (
                        <>{locations.main.feels_like} °F</>
                      ) : (
                        <>{locations.main.feels_like} °C</>
                      )}
                    </div>
                  </div>
                </div>

                <div className='data-cont-2'>
                  <div className='data'>
                    <div>Clouds:</div>
                    <div>{locations.clouds.all}%</div>
                  </div>
                  <div className='data'>
                    <div>Visibility:</div>
                    <div>{locations.visibility} m</div>
                  </div>
                  <div className='data'>
                    <div>Weather:</div>
                    {locations.weather.map((info, indx) => {
                      return <div key={indx}>{info.description}</div>;
                    })}
                  </div>
                  <div className='data'>
                    <div>Wind:</div>
                    <div>{locations.wind.speed} m/s</div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div>
                <select name='language' onChange={languajeHandler}>
                  <option value={"es"}>Español</option>
                  <option value={"en"}>English</option>
                </select>
              </div>

              <div className='cont-buttons'>
                <button onClick={changeImperial} className='button'>
                  Imperial
                </button>
                <button onClick={changeMetric} className='button btn1'>
                  Metrico
                </button>
              </div>

              <div className='location-data'>
                <div>
                  Ubicación: {locations.name}, {locations.sys.country}
                </div>
              </div>

              <div className='data-gen-cont'>
                <div className='data-cont-1'>
                  <div className='data'>
                    <div>Máxima: </div>
                    <div>
                      {units === "imperial" ? (
                        <>{locations.main.temp_max} °F</>
                      ) : (
                        <>{locations.main.temp_max} °C</>
                      )}
                    </div>
                  </div>
                  <div className='data'>
                    <div>Mínima:</div>
                    <div>
                      {units === "imperial" ? (
                        <>{locations.main.temp_min} °F</>
                      ) : (
                        <>{locations.main.temp_min} °C</>
                      )}
                    </div>
                  </div>
                  <div className='data'>
                    <div>Temperatura:</div>
                    <div>
                      {units === "imperial" ? (
                        <>{locations.main.temp} °F</>
                      ) : (
                        <>{locations.main.temp} °C</>
                      )}
                    </div>
                  </div>
                  <div className='data'>
                    <div>Sensación térmica:</div>
                    <div>
                      {units === "imperial" ? (
                        <>{locations.main.feels_like} °F</>
                      ) : (
                        <>{locations.main.feels_like} °C</>
                      )}
                    </div>
                  </div>
                </div>

                <div className='data-cont-2'>
                  <div className='data'>
                    <div>Nubosidad:</div>
                    <div>{locations.clouds.all}%</div>
                  </div>
                  <div className='data'>
                    <div>Visibilidad:</div>
                    <div>{locations.visibility} m</div>
                  </div>
                  <div className='data'>
                    <div>Clima:</div>
                    {locations.weather.map((info, indx) => {
                      return <div key={indx}>{info.description}</div>;
                    })}
                  </div>
                  <div className='data'>
                    <div>Viento:</div>
                    <div>{locations.wind.speed} m/s</div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {!locations && (
        <div className='enable-location'>
          ¡Please, enable your location to know the weather!
        </div>
      )}
    </>
  );
}

export default Results;
