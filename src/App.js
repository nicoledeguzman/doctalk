import './App.css';
import logo from './logo-doctalk.png';

import { 
  BrowserRouter as Router, 
  Route, 
  Link,
  Switch 
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <img src={logo} alt="doctalk logo"/>
          <nav>
            <button className="menu">nav</button>
            <ul>
              <li><p>Physicians</p>
                <ul class="sub-menu">
                  <li><Link to="/physician-apps">Applications</Link></li>
                  <li><Link to="/app-ideas">Application Ideas</Link></li>
                  <li><Link to="/support">Support</Link></li>
                </ul>
              </li>
              <li><p>Organizations</p>
                <ul class="sub-menu">
                  <li><Link to="/organization-apps">Applications</Link></li>
                  <li><Link to="/app-ideas">Application Ideas</Link></li>
                  <li><Link to="/support">Support</Link></li>
                </ul>
              </li>
              <li><p>Medical Trainees</p>
                <ul class="sub-menu">
                  <li><Link to="/med-trainee-apps">Applications</Link></li>
                </ul>
              </li>
              <li><p>Company</p>
                <ul class="sub-menu">
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/news">News</Link></li>
                  <li><Link to="/careers">Careers</Link></li>
                  <li><Link to="/partners">Partners</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                </ul>
              </li>
            </ul>
          </nav>
          <a href="">Log In</a>
        </header>
      </div>
    </ Router>
  );
}

export default App;
