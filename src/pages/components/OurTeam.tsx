import React from 'react';

type Props = {};

const OurTeam = (props: Props) => {
  return (
    <section id="team">
      <div className="container">
        <div className="section-header">
          <h2>Our Team</h2>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="member">
              <div className="pic">
                <img src="assets/img/team-1.jpg" alt="" />
              </div>
              <div className="details">
                <h4>Walter White</h4>
                <span>Chief Executive Officer</span>
                <div className="social">
                  <a href="">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="member">
              <div className="pic">
                <img src="assets/img/team-2.jpg" alt="" />
              </div>
              <div className="details">
                <h4>Sarah Jhinson</h4>
                <span>Product Manager</span>
                <div className="social">
                  <a href="">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="member">
              <div className="pic">
                <img src="assets/img/team-3.jpg" alt="" />
              </div>
              <div className="details">
                <h4>William Anderson</h4>
                <span>CTO</span>
                <div className="social">
                  <a href="">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="member">
              <div className="pic">
                <img src="assets/img/team-4.jpg" alt="" />
              </div>
              <div className="details">
                <h4>Amanda Jepson</h4>
                <span>Accountant</span>
                <div className="social">
                  <a href="">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
