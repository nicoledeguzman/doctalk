import PhysicianApps from './PhysicianApps.js';
import OrganizationApps from './OrganizationApps.js';
import AppIdeas from './AppIdeas.js';
import Support from './Support.js';
import MedTraineeApps from './MedTraineeApps.js';
import About from './About.js';
import News from './News.js';
import Careers from './Careers.js';
import Partners from './Partners.js';
import Contact from './Contact.js';

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

        <main>
          <Switch>
            {/* links in header nav */}
            <Route path="/physician-apps">
              <PhysicianApps />
            </Route>
            <Route path="/app-ideas">
              <AppIdeas />
            </Route>
            <Route path="/support">
              <Support />
            </Route>
            <Route path="/organization-apps">
              <OrganizationApps />
            </Route>
            <Route path="/med-trainee-apps">
              <MedTraineeApps />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/news">
              <News />
            </Route>
            <Route path="/careers">
              <Careers />
            </Route>
            <Route path ="/partners">
              <Partners />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </main>

      </div>
    </ Router>
  );
}

export default App;
