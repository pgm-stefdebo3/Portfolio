import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import ArneQuinze from '../assets/images/Arne_quinze.png';
import RockWerchter from '../assets/images/Rock_Werchter.png';
import ToDoApp from '../assets/images/To_do_app.png';

const items = [
  {
    src: ArneQuinze,
    altText: '1',
    title: 'Arne Quinze',
    description: 'I remade an existing website by Arne Quinze, An artist his disposition page.'
  },
  {
    src: RockWerchter,
    altText: '2',
    title: 'Rock Werchter',
    description: 'I made an existing website discerning the festival called Rock Werchter.'
  },
  {
    src: ToDoApp,
    altText: '3',
    title: 'To Do App',
    description: 'To learn the basics of RESTfull, i made a to do app with basic CRUD and authentication.'
  }
];

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.description} captionHeader={item.title} />
        </CarouselItem>
      );
    });

    return (
      <div className='projects'>
        <h2>My <span className='text--important'>Projects</span></h2>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      </div>
    );
  }
}


export default Projects;