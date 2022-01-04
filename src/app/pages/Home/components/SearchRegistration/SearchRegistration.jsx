import React from "react";
import "./SearchRegistration.scss";

const SearchRegistration = () => {
  const data = [
    {
      name: "Maria Silva",
      officie: "317 - Programador PL",
      time: "09:33 - 14:55 - 15:55",
    },
    {
      name: "Maria Silva",
      officie: "317 - Programador PL",
      time: "09:33 - 14:55 - 15:55",
    },
    {
      name: "Maria Silva",
      officie: "317 - Programador PL",
      time: "09:33 - 14:55 - 15:55",
    },
    {
      name: "Maria Silva",
      officie: "317 - Programador PL",
      time: "09:33 - 14:55 - 15:55",
    },
    {
      name: "Maria Silva",
      officie: "317 - Programador PL",
      time: "09:33 - 14:55 - 15:55",
    },
    {
      name: "Maria Silva",
      officie: "317 - Programador PL",
      time: "09:33 - 14:55 - 15:55",
    },
    {
      name: "Maria Silva",
      officie: "317 - Programador PL",
      time: "09:33 - 14:55 - 15:55",
    },
    {
      name: "Maria Silva",
      officie: "317 - Programador PL",
      time: "09:33 - 14:55 - 15:55",
    },
    {
      name: "Maria Silva",
      officie: "317 - Programador PL",
      time: "09:33 - 14:55 - 15:55",
    },
  ];

  return (
    <div className="SearchRegistration">
      <div className="card">
        <div className="input-group">
          <span className="input-group-text" id="basic-addon1">
            <i className="bi bi-search"></i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Pesquise por nome ou matricula"
          />
        </div>

        <ul className="data">
          {data.map((d, index) => (
            <li key={index}>
              <p>{d.name}</p>
              <p>{d.officie}</p>
              <p>
                <i className="bi bi-clock"></i>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchRegistration;
