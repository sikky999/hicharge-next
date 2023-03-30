'use client';
import Image from 'next/image';
import { Inter } from '@next/font/google';

import Services from './components/Services';
import About from './components/About';
import Clients from './components/Clients';
import OurPortfolio from './components/OurPortfolio';
import Slider from './components/Slider';
import Testimonial from './components/Testimonial';
import Calltoaction from './components/Calltoaction';
import OurTeam from './components/OurTeam';
import ContactUs from './components/ContactUs';
import React from 'react';
import YoutubeModal from './components/YoutubeModal';
import Link from 'next/link';
import Header from './components/Header';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [image, setimage] = React.useState('');
  const [open, setopen] = React.useState(true);

  React.useEffect(() => {
    _getLogo();
  }, []);

  const _getLogo = async () => {
    console.log('get image');
    fetch('https://hicharge.in/admin/wp-json/wp/v2/media')
      .then((response) => response.json())
      .then((data) => setimage(data[0].x_featured_media_original))
      .catch((err) => console.error(err));
  };

  const _handleClose = async () => {
    setopen(!open);
  };

  return (
    <main>
      <section id="topbar" className="d-flex align-items-center">
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope d-flex align-items-center">
              <a href="mailto:info@hicharge.in">info@hicharge.in</a>
            </i>
            <i className="bi bi-phone d-flex align-items-center ms-4">
              <span>+91 7249096655</span>
            </i>
          </div>
          <div className="social-links d-none d-md-flex align-items-center">
            <a
              href="https://twitter.com/ChargeHi"
              target="blank"
              className="twitter"
            >
              <i className="bi bi-twitter"></i>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100086421133649"
              target="blank"
              className="facebook"
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/explore/tags/hicharge/?hl=en"
              target="blank"
              className="instagram"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/hichargestations"
              target="blank"
              className="linkedin"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </section>
      <YoutubeModal />
      {/* <Modal
        open={open}
        onClose={_handleClose}

        // aria-labelledby="modal-modal-title"
        // aria-describedby="modal-modal-description"
      >
        <div>
          <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={onPlayerReady} />
        </div>
      </Modal> */}
      <Header />

      <Slider />

      <About />

      <Services />
      <Clients />
      <OurPortfolio />
      <Testimonial />
      <Calltoaction />
      {/* <OurTeam /> */}
      <ContactUs />
    </main>
  );
}
