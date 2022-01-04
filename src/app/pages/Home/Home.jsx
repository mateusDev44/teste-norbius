import React, { Component } from "react";
import MyPoint from "./components/MyPoint/MyPoint";
import Myteam from "./components/Myteam/Myteam";
import SearchRegistration from "./components/SearchRegistration/SearchRegistration";
import "./Home.scss";

class Home extends Component {
  render() {
    return (
      <div className="Home container">
        <div className="row">
          <div className="col-lg-4 col-md-12">
            <h4 className="mt-4">
              <strong style={{ color: "#a9a9a9" }}> Bem vindo(a),</strong> Xxxxx
            </h4>
            <p style={{ color: "#a9a9a9", fontSize: "12px" }}>
              Último acesso em 12/11/2021 as 16:39
            </p>
          </div>
          <div className="col-lg-8 col-md-12">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="card">
                  <p>Departamento</p>
                  <p>Todos os departamentos</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="card">
                  <p>Período</p>
                  <p>21/10/2021 a 20/11/2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-12">
            <Myteam />
          </div>
          <div className="col-lg-4 col-md-12">
            <SearchRegistration />
          </div>
          <div className="col-lg-4 col-md-12">
            <MyPoint />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
