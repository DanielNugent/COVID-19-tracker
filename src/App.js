import React, { useEffect, useState } from "react";
import axios from "axios";
import Map from './Map';

export default function App() {
  const [data, setData] = useState([[]]);
  useEffect(() => {
    const key = "d84b6847dcmshcfba0d992240a03p1c6d59jsne1a5ce972198";
    const URL =
      "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php";
    axios
      .get(URL, { headers: {"x-rapidapi-key": key }})
      .then(res => {
        const d = res.data.countries_stat;
        var result = d.map(country => {
           var arr = [];
           Object.keys(country).map(key => {
               arr.push(country[key]);
           })
           return arr;
        })
        console.log(result);
        setData(result);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <div style = {{margin: 10}}>
      <h1>Coronavirus Map Tracker</h1>
     {/*  {data && data[0].map((val, key) => {
            return <p key = {key}>{val}</p>
       })} */}
       <Map data = {data}/>
    </div>
  );
}