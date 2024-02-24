import React from 'react';
import { NavBar, Card, Sphere, SkillList, Quote, TopButton, Contact } from '../components';
import { Canvas } from 'react-three-fiber';
import ProjectList from '../components/Projects/ProjectList';

const Projects = () => {
  return (
    <>
        <header>
            PROJECTS
            <NavBar pageName="Projects" />
        </header>
        <div className="main" style={{ background: '#0E0E0E' }}>
            <div className="container-md">  
                <ProjectList />
                <Contact />
            </div>
            <TopButton />
        </div>
    </>
  );
};

export default Projects;