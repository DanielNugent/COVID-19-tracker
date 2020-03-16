import React, { useContext } from "react";
import { DataContext } from "../App";

const Sidebar = () => {
  const data = useContext(DataContext);
  return (
    <>
      <div className="sidebar">
        <h3 className="side-title">Coronavirus cases</h3>
        <ul className="side-list">
          {data.data ? (
            data.data.map((country, key) => {
              return (
                <li key={key} onClick = {() => data.setSelectedModal(country)}>
                  {key+1} {'   '} {country[0]} : {country[1]}{" "}
                  {country[6] !== '0' && <span>+{country[6]}</span>}
                </li>
              );
            })
          ) : (
            <li>loading...</li>
          )}
        </ul>
      </div>
    </>
  );
};
export default Sidebar;
