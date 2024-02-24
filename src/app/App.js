import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { NavBar, Card, Sphere, SkillList, Quote, TopButton, Projects, Contact } from './components';
import { Canvas } from "react-three-fiber";

function App() {
  return (
    <div className="App">
        <header>
            <NavBar/>
        </header>
        <div className='main' style={{
        background: '#0E0E0E'
        }}>
          <div className='main__intro  container-md'>
            <div className='intro--left'>
              <div className='card--1'>
                <Card toastHeader={"User"} 
                toastBody={<>
                  <p>firstName :  <span className='text--important'>"Stef" ,</span></p>
                  <p>lastName :  <span className='text--important'>"De Boeck" ,</span></p>
                  <p>email :  "stef.db@hotmail.com" ,</p>
                  <p>age : 23</p>
                </>}/>
              </div>
              <div className='card--2 offset-md-2'>
                <Card toastHeader={"UserMeta"} toastBody={<>
                <p>occupation :  <span className='text--important'>"Back-End Developer" ,</span></p>
                <p>hobbies: ["Coding", "Fitness", "Climbing"] ,</p>
                </>}/>
              </div>
            </div>
            <div className='intro--right desktop-only'>
              <Canvas>
              <Sphere/>
              </Canvas>
            </div>
          </div>
          <div id='about_me'>
          </div>
          <div className='main__content  container-md'>
            <div className='description'>
              <h2 className='description__title'>About Me</h2>
              <p className='description__text'>Hello world, I am Stef De Boeck.</p>
              <p className='description__text'>And I aspire to be a Senior Full-stack Developer!</p>
            </div>
            <h2>My <span className='text--secondary'>Skills</span></h2>
          <SkillList/>
          <Quote/>
          <div id="projects"></div>
          <Projects/>
          <Contact/>
          </div>
        <TopButton/>
        </div>
    </div>
  );
}

export default App;
