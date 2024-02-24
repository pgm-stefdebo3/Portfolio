import React from 'react';
import { NavBar, Card, Sphere, SkillList, Quote, TopButton,  Contact } from '../components';
import { Canvas } from 'react-three-fiber';

const Home = () => {
    const birthDate = new Date('1998-08-19');
    const currentDate = new Date();
    const age = Math.floor((currentDate - birthDate) / (365.25 * 24 * 60 * 60 * 1000));

  return (
    <>
      <header>
        <NavBar pageName="Home" />
      </header>
      <div className="main" style={{ background: '#0E0E0E' }}>
        <div className="main__intro container-md">
          <div className="intro--left">
            <div className="card--1">
              <Card
                toastHeader="User"
                toastBody={
                  <>
                    <p>firstName: <span className="text--important">"Stef",</span></p>
                    <p>lastName: <span className="text--important">"De Boeck",</span></p>
                    <p>email: "stefdeboeck7@gmail.com",</p>
                    <p>age: {age}</p>
                  </>
                }
              />
            </div>
            <div className="card--2 offset-md-2">
              <Card
                toastHeader="UserMeta"
                toastBody={
                  <>
                    <p>occupation: <span className="text--important">"Back-End Developer",</span></p>
                    <p>hobbies: ["Coding", "Fitness", "Climbing"],</p>
                  </>
                }
              />
            </div>
          </div>
          <div className="intro--right desktop-only">
            <Canvas>
              <Sphere />
            </Canvas>
          </div>
        </div>
        <div className="main__content container-md">
          <div className="main__description">
            <h2 className="description__title">About Me</h2>
            <p className="description__text">Hello world, I am Stef De Boeck.</p>
            <p className="description__text">And I aspire to be a Senior Full-stack Developer!</p>
          </div>
          <h2>My <span className="text--secondary">Skills</span></h2>
          <SkillList />
          <Quote />
          <Contact />
        </div>
        <TopButton />
      </div>
    </>
  );
};

export default Home;