import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormCheck from 'react-bootstrap/FormCheck';

function Signupform() {
  return (
    <div className="loginform">
      <div>
        <Button className='loginbtn2 w-100 mb-2' variant="outline-secondary"><i className="bi bi-google" style={{ marginRight: '5px' }}></i> Continue with Google</Button>
        <Button className='loginbtn2 w-100' variant="outline-secondary"><i className="bi bi-facebook" style={{ marginRight: '5px' }}></i> Continue with Facebook</Button>
      </div>
      <div className="d-flex align-items-center mt-3">
        <div style={{ flex: 1, backgroundColor: "grey", height: "3px" }} />
        <p style={{ margin: "0 10px", fontWeight: "bold" }}>Or connect with</p>
        <div style={{ flex: 1, backgroundColor: "grey", height: "3px" }} />
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control className='email' type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control className='password' type="password" placeholder="Password" />
        </Form.Group>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <FormCheck
            type="checkbox"
            id="default-checkbox"
            label="Remember me"
            aria-label="option 1"
            style={{ marginRight: '40px', marginBottom: '0' }} // Increased margin
          />
          <span style={{ marginRight: '20px' }}></span>
          <i className="bi bi-lock-fill"></i>
          <span style={{ marginRight: '20px' }}></span> {/* Increased space between the lock icon and the link */}
          <a href="#" style={{ textDecoration: 'none', color: '#000' }}>Forgot Password</a>
        </div>
        <Button className='btnsubmit w-100' variant="primary" type="submit">
          Continue
        </Button>
      </Form>
    </div>
  );
}

export default Signupform;
