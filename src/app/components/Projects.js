import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import { FaGithubSquare } from 'react-icons/fa'

import ArneQuinze from '../assets/images/Arne_quinze.png';
import BabyPlanner from '../assets/images/BabyPlanner.png';
import PgmPlatform from '../assets/images/PGM_Platform.png';
import ToDoApp from '../assets/images/To_do_app.png';

const items = [
  {
    src: BabyPlanner,
    altText: '1',
    title: 'BabyPlanner',
    description: 'I contributed in a team of 3 to a concept website/app to help women who just became a mother plan baby visits.',
    link: 'https://github.com/pgm-stefdebo3/BabyPlanner'
  },
  {
    src: PgmPlatform,
    altText: '2',
    title: 'Rock Werchter',
    description: 'To learn and apply the basics of React, GraphCMS and Apollo, I made a platform for PGM Artevelde.',
    link: 'https://github.com/pgm-stefdebo3/PGM4'
  },
  {
    src: ArneQuinze,
    altText: '3',
    title: 'Arne Quinze',
    description: 'I remade an existing website by Arne Quinze, An artist his disposition page.',
    link: 'https://github.com/pgmgent-atwork-1/atwork-1-project-1-pgm-stefdebo3'
  },
  {
    src: ToDoApp,
    altText: '4',
    title: 'To Do App',
    description: 'To learn the basics of RESTfull, i made a to do app with basic CRUD and authentication.',
    link: 'https://github.com/pgmgent-pgm-3/opdracht-1-just-do-it-pgm-stefdebo3'
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
          <CarouselCaption captionText={ item.description } captionHeader={item.title} />
          <a className='github__icon' href={item.link} target='_blank' rel="noreferrer"><FaGithubSquare/></a>
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