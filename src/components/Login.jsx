import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Loginform from './Loginform.jsx';
import Signupform from './Signupform';
import Homeimg from '../images/homeimage.png';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function Login() {
  const [key, setKey] = useState('login');

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8">
          <div className="side1">
            <h1>Explore your <span className='text-primary'>hobby</span> or <span className='text-muted'>passion</span></h1>
            <p className="text-secondary">Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…</p>
            <p className="text-secondary">If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products, services, or events. Hop on your hobbyhorse and enjoy the ride.</p>
            <img className="img-fluid homeimag" src={Homeimg} alt="" />
          </div>
        </div>

        <div className="col-md-4">
          <div className="login-container bg-light p-4">
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3"
            >
              <Tab eventKey="login" title="Login">
                <Loginform />
              </Tab>
              <Tab eventKey="profile" title="Signup">
                <Signupform />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
