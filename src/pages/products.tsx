import React from 'react';
import Header from './components/Header';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Image from 'next/image';

type Props = {};

const Products = (props: Props) => {
  return (
    <div>
      <Header />
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
      >
        <Container>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            EV Charging Solutions and Services
          </Typography>
        </Container>
      </Box>
      <Box
        sx={{
          width: 300,
          height: 300,
          backgroundColor: 'primary.dark',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      />
      {/* <div>
          {' '}
          <Image
            width={900}
            height={500}
            // objectFit="contain"
            alt="long sleeved"
            // layout="fill"
            // objectFit="contain"
            src="https://images.pexels.com/photos/4529764/pexels-photo-4529764.jpeg"
          />{' '}
        </div> */}
    </div>
  );
};

export default Products;
{
  /* <div
          style={{
            width: 210,
            height: 210,
            // position: 'relative',
          }}
        >
          <Image
            // sizes="51vw"
            layout="responsive"
            objectFit="contain"
            // fill
            src="https://images.pexels.com/photos/4529764/pexels-photo-4529764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="About Us Page"
          />
        </div> */
}
