import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Loginform from '../loginform/loginform';
import Signupform from '../singup/signupform';
import Homeimg from '../images/homeimage.png';

import './login.css';

function Login() {
  const [key, setKey] = useState('login');

  return (
    <div className="container">
      <div className="row" style={{ textAlign: 'left' }}>
        <div className="col-md-8 col-sm-12">
          <div>
            <h1>Explore your <span className='hob'>hobby</span> or <span className='pas'>passion</span></h1>
            <p>Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
            </p>
            <p>If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products, services, or events. Hop on your hobbyhorse and enjoy the ride.</p>
            <img className="homeimag" src={Homeimg} alt="" />
          </div>
        </div>

        <div className="col-md-4 col-sm-12" style={{ marginTop: '60px' }}>
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            <Tab eventKey="login" title="Login">
              <div className='loginform'>
                <Loginform />
              </div>
            </Tab>
            <Tab eventKey="profile" title="Signup">
              <div><Signupform /></div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default Login;
