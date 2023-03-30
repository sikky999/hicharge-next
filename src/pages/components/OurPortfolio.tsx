import React from 'react';

type Props = {};

const OurPortfolio = (props: Props) => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-header">
          <h2>Our Portfolio</h2>
          <p>
            A well-crafted portfolio that showcases Hicharge&apos;s strengths
            and successes can help to build trust and confidence with potential
            customers, and differentiate the company from its competitors in the
            EV charging market.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">
                All
              </li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container">
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <img
              src="https://images.mid-day.com/images/images/2022/may/EV-charging-stations-b_d.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>App 1</h4>
              <p>App</p>
              <a
                href="https://www.talkingtrendo.com/wp-content/uploads/2021/08/Tata_Tigor_EV_charging.jpg"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link"
                title="App 1"
              >
                <i className="bx bx-plus"></i>
              </a>
              <a
                href="portfolio-details.html"
                className="details-link"
                title="More Details"
              >
                <i className="bx bx-link"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <img
              src="https://www.firstpost.com/wp-content/uploads/2021/12/hyundai-to-launch-six-electric-cars-in-india-by-2028.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Web 3</h4>
              <p>Web</p>
              <a
                href="https://images.hindustantimes.com/auto/img/2021/03/17/600x338/WhatsApp_Image_2021-02-10_at_15.31.09_1615966496207_1615966505598.jpeg"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link"
                title="Web 3"
              >
                <i className="bx bx-plus"></i>
              </a>
              <a
                href="portfolio-details.html"
                className="details-link"
                title="More Details"
              >
                <i className="bx bx-link"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <img
              src="https://cdni.autocarindia.com/ExtraImages/20210908101058_001B.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>App 2</h4>
              <p>App</p>
              <a
                href="https://thestartuplab.in/wp-content/uploads/2021/06/Factors-Driving-The-Growth-Of-Indian-Electric-Vehicle-Industry-In-2021.png"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link"
                title="App 2"
              >
                <i className="bx bx-plus"></i>
              </a>
              <a
                href="portfolio-details.html"
                className="details-link"
                title="More Details"
              >
                <i className="bx bx-link"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <img
              src="https://thestartuplab.in/wp-content/uploads/2021/06/Factors-Driving-The-Growth-Of-Indian-Electric-Vehicle-Industry-In-2021.png"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Card 2</h4>
              <p>Card</p>
              <a
                href="https://cdni.autocarindia.com/ExtraImages/20210908101058_001B.jpg"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link"
                title="Card 2"
              >
                <i className="bx bx-plus"></i>
              </a>
              <a
                href="portfolio-details.html"
                className="details-link"
                title="More Details"
              >
                <i className="bx bx-link"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <img
              src="https://img.theweek.in/content/dam/week/news/biz-tech/images/2019/12/19/Tata-Nexon-EV-Tata-Motors-Press.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Web 2</h4>
              <p>Web</p>
              <a
                href="https://cdni.autocarindia.com/ExtraImages/20210908101058_001B.jpg"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link"
                title="Web 2"
              >
                <i className="bx bx-plus"></i>
              </a>
              <a
                href="portfolio-details.html"
                className="details-link"
                title="More Details"
              >
                <i className="bx bx-link"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <img
              src="https://trak.in/wp-content/uploads/2022/07/Untitled-design-44-1280x720-1-1024x576-1024x576.jpeg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>App 3</h4>
              <p>App</p>
              <a
                href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMTgAAXbCRwm58zICIFJ1PPJY_-1O48ycF1A&usqp=CAU"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link"
                title="App 3"
              >
                <i className="bx bx-plus"></i>
              </a>
              <a
                href="portfolio-details.html"
                className="details-link"
                title="More Details"
              >
                <i className="bx bx-link"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <img
              src="https://gumlet.assettype.com/nationalherald%2F2021-03%2Fade0bd4c-3c08-4556-8e42-0e9b3b44d8b8%2FEV.jpg?rect=0%2C0%2C1200%2C675&auto=format%2Ccompress&fmt=webp&w=1200"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Card 1</h4>
              <p>Card</p>
              <a
                href="https://gumlet.assettype.com/nationalherald%2F2021-03%2Fade0bd4c-3c08-4556-8e42-0e9b3b44d8b8%2FEV.jpg?rect=0%2C0%2C1200%2C675&auto=format%2Ccompress&fmt=webp&w=1200"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link"
                title="Card 1"
              >
                <i className="bx bx-plus"></i>
              </a>
              <a
                href="portfolio-details.html"
                className="details-link"
                title="More Details"
              >
                <i className="bx bx-link"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <img
              src="https://imgd-ct.aeplcdn.com/664x374/n/cw/ec/120463/ocean-ev-exterior-left-front-three-quarter.jpeg?isig=0&q=75"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Card 3</h4>
              <p>Card</p>
              <a
                href="https://images.moneycontrol.com/static-mcnews/2021/03/Electric-vehicle_shutterstock_750610873-770x433.jpg?impolicy=website&width=770&height=431"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link"
                title="Card 3"
              >
                <i className="bx bx-plus"></i>
              </a>
              <a
                href="https://s01.sgp1.cdn.digitaloceanspaces.com/article/153723-kdnxffjgwf-1611302321.jpg"
                className="details-link"
                title="More Details"
              >
                <i className="bx bx-link"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <img
              src="https://images.hindustantimes.com/auto/img/2021/03/17/600x338/WhatsApp_Image_2021-02-10_at_15.31.09_1615966496207_1615966505598.jpeg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Web 3</h4>
              <p>Web</p>
              <a
                href="https://static.theprint.in/wp-content/uploads/2019/07/Kona-1.jpg"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link"
                title="Web 3"
              >
                <i className="bx bx-plus"></i>
              </a>
              <a
                href="https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=http%3A%2F%2Fcdni.autocarindia.com%2FNews%2FHyundai_Kona_2.jpg&c=0"
                className="details-link"
                title="More Details"
              >
                <i className="bx bx-link"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPortfolio;
