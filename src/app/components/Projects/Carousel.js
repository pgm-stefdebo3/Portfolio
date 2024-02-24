import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = ({ project }) => {
    console.log(project);
  return (
    <Carousel>
      {project.src.map((image, index) => (
        <div key={index}>
          <img src={image} alt={project.title + ' ' + index} />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;