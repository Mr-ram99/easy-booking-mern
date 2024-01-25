import React from 'react';
import { Carousel, Image } from 'antd';
import image from '../../assets/carousel-1.jpg';
import image2 from '../../assets/carousel-2.jpg';

const MovieCarousel = () => (
  <Carousel autoplay style={{ marginBottom: '16px' }}>
    <Image
      src={image}
      width='100%'
      height={300}
      preview={false}
    />
    <Image
      src={image2}
      width='100%'
      height={300}
      preview={false}
    />
    <Image
      src={image}
      width='100%'
      height={300}
      preview={false}
    />
    <Image
      src={image2}
      width='100%'
      height={300}
      preview={false}
    />
  </Carousel>
);
export default MovieCarousel;