import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { NavBar, Card, Box } from './components';
import { Canvas } from "react-three-fiber";


function App() {


  return (
    <div className="App">
        <header>
            <NavBar/>
        </header>
        <div className='main' style={{
        background: '#555'
        }}>
          <div className='main__intro'>
            <div className='intro--left'>
              <div className='card--1'>
                <Card toastHeader={"User"} 
                toastBody={<>
                  <p>firstName :  <span className='text--important'>"Stef" ,</span></p>
                  <p>lastName :  <span className='text--important'>"De Boeck" ,</span></p>
                  <p>email :  "stef.db@hotmail.com" ,</p>
                </>}/>
              </div>
              <div className='card--2'>
                <Card toastHeader={"UserMeta"} toastBody={<>
                <p>occupation :  <span className='text--important'>"Back-End Developer" ,</span></p>
                <p>hobbies: ["Coding", "Fitness", "Climbing"] ,</p>
                </>}/>
              </div>
            </div>
            <div className='intro--right'>
              <Canvas>
              <Box/>
              </Canvas>
            </div>
          </div>

        </div>
    </div>
  );
}

export default App;
