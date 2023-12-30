import React from "react";
import "./services.css";

const Services = () => {
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Service</h2>
      <span className="section__subtitle">What I Offer</span>
      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"> </i>
            <h3 className="services__title">Frontend Development</h3>
          </div>
        </div>
        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"> </i>
            <h3 className="services__title">Mobile App Development</h3>
          </div>
        </div>
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"> </i>
            <h3 className="services__title">Data Engineer</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
