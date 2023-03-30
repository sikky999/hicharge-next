'use client';
import React from 'react';
import Image from 'next/image';

type Props = {};

const About = (props: Props) => {
  const [image, setimage] = React.useState('');

  React.useEffect(() => {
    _getImage();
  }, []);

  const _getImage = async () => {
    console.log('get image');
    fetch('https://hicharge.in/admin/wp-json/wp/v2/media?parent=12')
      .then((response) => response.json())
      .then((data) => setimage(data[0].x_featured_media_original))
      .catch((err) => console.error(err));
  };

  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 about-img">
            <div
              style={{ width: '100%', height: '100%', position: 'relative' }}
            >
              <Image
                src={image}
                layout="fill"
                objectFit="contain"
                // width={201}
                // height={51}
                alt="About Us Page"
              />
            </div>
          </div>

          <div className="col-lg-6 content">
            <h2>Hi-charge is a Pioneer in EV Lounge Ecosystem in India</h2>
            <h3>
              Hi-charge is established with well defined mission to provide
              access to fast EV charging through renewable energy.
            </h3>

            <ul>
              <li>
                <i className="bi bi-check-circle"></i> Experience the whole new
                way of EV charging with Hi-charge, the pioneer in EV lounge in
                India.
              </li>
              <li>
                <i className="bi bi-check-circle"></i> Duis aute irure dolor in
                reprehenderit in voluptate velit.
              </li>
              ˀ
              <li>
                <i className="bi bi-check-circle"></i> Ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate trideta storacalaperda mastiro dolore
                eu fugiat nulla pariatur.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
