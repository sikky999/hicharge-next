import React from 'react';

type Props = {};

const Services = (props: Props) => {
  return (
    <section id="services">
      <div className="container">
        <div className="section-header">
          <h2>Services</h2>
          <p>
            here are some services that Hicharge, an EV charging company, could
            potentially offer:
          </p>
        </div>

        <div className="row gy-4">
          <div className="col-lg-6">
            <div className="box">
              <div className="icon">
                <i className="bi bi-briefcase"></i>
              </div>
              <h4 className="title">
                <a href="">EV Charging Consulting Services </a>
              </h4>
              <p className="description">
                Hicharge could provide consulting services to businesses and
                municipalities looking to implement EV charging infrastructure,
                including feasibility studies, site selection, and design and
                installation recommendations.
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="box">
              <div className="icon">
                <i className="bi bi-card-checklist"></i>
              </div>
              <h4 className="title">
                <a href="">Public EV Charging Stations</a>
              </h4>
              <p className="description">
                Hicharge could install and maintain public EV charging stations
                in various locations, such as parking lots, rest areas, and
                public spaces.
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="box">
              <div className="icon">
                <i className="bi bi-bar-chart"></i>
              </div>
              <h4 className="title">
                <a href="">Residential EV Charging Solutions</a>
              </h4>
              <p className="description">
                Hicharge could provide and install home charging solutions for
                EV owners, including Level 2 chargers, wall-mounted chargers,
                and portable chargers.
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="box">
              <div className="icon">
                <i className="bi bi-binoculars"></i>
              </div>
              <h4 className="title">
                <a href="">Commercial EV Charging Solutions</a>
              </h4>
              <p className="description">
                Hicharge could offer charging solutions for businesses and
                organizations, such as fleet management solutions, workplace
                charging stations, and hospitality charging solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
