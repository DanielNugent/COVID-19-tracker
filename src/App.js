import React, { useEffect, useState } from "react";
import axios from "axios";
import Wrapper from "./components/Wrapper";
import Map from "./components/Map";
import Sidebar from "./components/Sidebar";
import Modal from "./components/Modal";
export const DataContext = React.createContext();

export const App = () => {
  const [data, setData] = useState();
  const [selectedModal, setSelectedModal] = useState();
  useEffect(() => {
    const URL =
      "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php";
    axios
      .get(URL, {
        headers: { "x-rapidapi-key": process.env.REACT_APP_API_KEY }
      })
      .then(res => {
        const d = res.data.countries_stat;
        var result = d.map(country => {
          var arr = [];
          Object.keys(country).map(key => {
            return arr.push(country[key]);
          });
          return arr;
        });
        //  console.log(result);
        setData(result);
      })
      .catch(err => {
        //   console.log(err);
      });
  }, []);
  return (
    <DataContext.Provider
      value={{
        data: data,
        selectedModal: selectedModal,
        setSelectedModal: setSelectedModal
      }}
    >
      <Wrapper>
        <Sidebar />
        <Map />
        <Modal/>
      </Wrapper>
    </DataContext.Provider>
  );
};
