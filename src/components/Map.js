import React, { useState, useContext } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import Stats from "./Stats";
import coords from "../coords";
import marker from "../toxic.svg";
import { DataContext } from "../App";

const Map = () => {
  const data = useContext(DataContext);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [viewport, setViewport] = useState({
    width: "100%",
    height: 960,
    latitude: 20,
    longitude: 0,
    zoom: 3
  });
  const getCoords = country => {
    var res = [0, 0];
    coords.map(c => {
      if (c.name.localeCompare(country) === 0) {
        res = [c.latitude, c.longitude];
      }
    });
    return res;
  };
  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={setViewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAP_KEY}
      minZoom={3}
      maxZoom={7}
    >
      {data && data.map((country, key) => {
        return (
          <Marker
            key={key}
            latitude={getCoords(country[0])[0]}
            longitude={getCoords(country[0])[1]}
          >
            <button
              onClick={e => {
                e.preventDefault();
                setSelectedCountry(country);
              }}
            >
              <img style={{ width: 10, height: 10 }} src={marker} alt="" />
            </button>
          </Marker>
        );
      })}
      {selectedCountry ? (
        <Popup
          latitude={getCoords(selectedCountry[0])[0]}
          longitude={getCoords(selectedCountry[0])[1]}
          onClose={() => {
            setSelectedCountry(null);
          }}
          anchor="top"
        >
          <Stats country={selectedCountry} />
        </Popup>
      ) : null}
    </ReactMapGL>
  );
};
export default Map;
