import React, { useEffect, useState } from "react";
import { dateInFull } from "../../../../functions/dateInFull";

const MyPoint = () => {
  const [hrs, setHrs] = useState([]);
  const [min, setMin] = useState([]);
  const [sec, setSec] = useState([]);

  const date = () => {
    var data = new Date();
    var dia = String(data.getDate()).padStart(2, "0");
    var mes = String(data.getMonth() + 1).padStart(2, "0");
    var ano = data.getFullYear();

    return dia + " de " + dateInFull(mes) + " de " + ano;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      setHrs(date.getHours());
      setMin(date.getMinutes());
      setSec(date.getSeconds());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="MyPoint">
      <div className="card">
        <div className="row justify-content-around">
          <div className="col-6">
            <h4>Meu Ponto</h4>
          </div>
          <div className="col-6">
            <div className="d-flex justify-content-end">
              <i className="bi bi-archive"></i>
            </div>
          </div>
          <div>
            <p className="text-center">Fulano de Tal</p>
            <p className="text-center">367 - Coordenador de Programação Sr</p>
            <p className="text-center">
              <strong>{date()}</strong>
            </p>
            <h4 className="text-center">
              {hrs}:{min}:{sec}
            </h4>
            <div className="d-flex justify-content-center">
              <button className="btn btn-primary">Marcar ponto</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyPoint;
