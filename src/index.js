import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route } from 'react-router-dom'
import App from './app/App'
import { Home, Projects } from './app/pages';

import './app/App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter basename="/Portfolio">
        <Routes>
            <Route element={<App />}>
                <Route path="/" element={<Home />} />
                <Route path="/Projects" element={<Projects />} />
            </Route>
        </Routes>
    </BrowserRouter>
);
