import React, { Component } from "react";
import "./Myteam.scss";

class Myteam extends Component {
  render() {
    return (
      <div className="Myteam">
        <ul className="list-group list-group-flush">
          <li>
            <div className="card equipe">
              <div className="row ">
                <div className="col-2">
                  <i className="bi bi-people-fill"></i>
                </div>
                <div className="col-8">
                  <strong>Equipe</strong>
                </div>
                <div className="col-2">
                  <strong>18</strong>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="card presentes">
              <div className="row ">
                <div className="col-2">
                  <i className="bi bi-arrow-up-right"></i>
                </div>
                <div className="col-8">Presentes</div>
                <div className="col-2">
                  <strong>12</strong>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="card ausentes">
              <div className="row ">
                <div className="col-2">
                  <i className="bi bi-arrow-down-left"></i>
                </div>
                <div className="col-8">Ausentes</div>
                <div className="col-2">
                  <strong>6</strong>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="card prorrogando">
              <div className="row ">
                <div className="col-2">
                  <i className="bi bi-clock"></i>
                </div>
                <div className="col-8">Prorrogando jornada</div>
                <div className="col-2">
                  <strong>0</strong>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="card ferias">
              <div className="row ">
                <div className="col-2">
                <i className="bi bi-sun"></i>
                </div>
                <div className="col-8">Férias</div>
                <div className="col-2">
                  <strong>1</strong>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="card afastados">
              <div className="row ">
                <div className="col-2">
                <i className="bi bi-activity"></i>
                </div>
                <div className="col-8">Afastados</div>
                <div className="col-2">
                  <strong>0</strong>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Myteam;
