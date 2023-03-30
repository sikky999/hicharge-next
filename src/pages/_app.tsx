import React from 'react';

import '@/styles/globals.css';
// import './globals.css';
import './assets/vendor/aos/aos.css';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/boxicons/css/boxicons.min.css';
import './assets/vendor/glightbox/css/glightbox.min.css';
import './assets/vendor/swiper/swiper-bundle.min.css';
import './assets/css/style.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    require('./assets/vendor/bootstrap/js/bootstrap.min');
    require('./assets/js/main.js');
    require('./assets/vendor/bootstrap/js/bootstrap.js');
    require('./assets/vendor/bootstrap/js/bootstrap.min.js');
  }, []);
  return <Component {...pageProps} />;
}
