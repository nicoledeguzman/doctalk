import Home from './components/Home.js';
import PhysicianApps from './components/PhysicianApps.js';
import OrganizationApps from './components/OrganizationApps.js';
import AppIdeas from './components/AppIdeas.js';
import Support from './components/Support.js';
import MedTraineeApps from './components/MedTraineeApps.js';
import About from './components/About.js';
import News from './components/News.js';
import Careers from './components/Careers.js';
import Partners from './components/Partners.js';
import Contact from './components/Contact.js';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService.js';
import CodeOfConduct from './components/CodeOfConduct';
import RequestDemo from './components/RequestDemo.js';

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
          <Link to="/"><img src={logo} alt="doctalk logo"/></Link>
          <nav className="header-nav">
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
            <Route exact path="/">
              <Home />
            </Route>
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
            {/* links in footer nav */}
            <Route path="/privacy-policy">
              <PrivacyPolicy />
            </Route>
            <Route path="/terms-of-service">
              <TermsOfService />
            </Route>
            <Route path="/code-of-conduct">
              <CodeOfConduct />
            </Route>
            <Route path="/request-demo">
              <RequestDemo />
            </Route>
          </Switch>
        </main>

        <footer>
          <nav className="footer-nav">
            <ul>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service">Terms of Service</Link></li>
              <li><Link to="/code-of-conduct">Code of Conduct</Link></li>
              <li><Link to="/request-demo">Request a Demo</Link></li>
            </ul>
          </nav>
        </footer>

      </div>
    </ Router>
  );
}

export default App;
