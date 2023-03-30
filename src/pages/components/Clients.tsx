import React from 'react';
import Image from 'next/image';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

type Props = {};

const myLoader = ({}) => {
  return 'https://example.com';
};
const images = [
  {
    thumbnail: {
      uri: 'https://www.tata.com/content/dam/tata/images/home-page/desktop/logo_card_desktop_362x362.jpg',
    },
  },
  {
    thumbnail: {
      uri: 'https://www.tata.com/content/dam/tata/images/home-page/desktop/logo_card_desktop_362x362.jpg',
    },
  },
  {
    thumbnail: {
      uri: 'https://www.tata.com/content/dam/tata/images/home-page/desktop/logo_card_desktop_362x362.jpg',
    },
  },
  {
    thumbnail: {
      uri: 'https://www.tata.com/content/dam/tata/images/home-page/desktop/logo_card_desktop_362x362.jpg',
    },
  },
  {
    thumbnail: {
      uri: 'https://www.tata.com/content/dam/tata/images/home-page/desktop/logo_card_desktop_362x362.jpg',
    },
  },
  {
    thumbnail: {
      uri: 'https://www.tata.com/content/dam/tata/images/home-page/desktop/logo_card_desktop_362x362.jpg',
    },
  },
  {
    thumbnail: {
      uri: 'https://www.tata.com/content/dam/tata/images/home-page/desktop/logo_card_desktop_362x362.jpg',
    },
  },
  {
    thumbnail: {
      uri: 'https://www.tata.com/content/dam/tata/images/home-page/desktop/logo_card_desktop_362x362.jpg',
    },
  },
];

const Clients = (props: Props) => {
  return (
    <section id="clients">
      <div className="container">
        <div className="section-header">
          <h2>Clients</h2>
          <p>
            Hicharge could offer charging solutions for businesses, including
            workplace charging stations and fleet management solutions.
            Businesses could use Hicharge&apos;s services to attract EV-driving
            employees, improve their sustainability profile, and provide added
            value to their customers.
          </p>
        </div>

        <ImageList
          sx={{
            gridAutoFlow: 'column',
            gridTemplateColumns:
              'repeat(auto-fill,minmax(160px,1fr)) !important',
            gridAutoColumns: 'minmax(160px, 1fr)',
          }}
        >
          {images.map((image, index) => (
            <ImageListItem key={index}>
              <Image
                height={200}
                width={200}
                objectFit="contain"
                src={image.thumbnail.uri}
                alt={image.thumbnail.uri}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </section>
  );
};

export default Clients;
