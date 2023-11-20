import React from 'react';
import { Carousel } from 'react-bootstrap';


function MyCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/image/b3.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First Slide Label</h3>
          <p>Some content for the first slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/image/b4.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second Slide Label</h3>
          <p>Some content for the second slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* Add more Carousel.Items for additional slides */}
    </Carousel>
  );
}

export default MyCarousel;
