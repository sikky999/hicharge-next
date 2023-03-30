import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
type Props = {};

const Slider = (props: Props) => {
  return (
    <div>
      <Carousel>
        <div>
          <img
            src="https://images.mid-day.com/images/images/2022/may/EV-charging-stations-b_d.jpg"
            alt="image1"
          />
          <p className="legend">Image 1</p>
        </div>
        <div>
          <img
            src="https://www.startupauthority.in/wp-content/uploads/2022/07/how-to-open-electric-car-charging-station-in-India.jpg"
            alt="image2"
          />
          <p className="legend">Image 2</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
