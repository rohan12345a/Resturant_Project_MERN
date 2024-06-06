import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col>
            <p>@ 2024 Blue Origin. All rights reserved.</p>
          </Col>
          <Col>
            <ul className="list-unstyled">
              <li><a>
                Terms of Services</a></li>
              <li><a>
                Privacy Policy</a></li>
              <li>
                <a href="https://www.linkedin.com/in/rohan-saraswat-a70a2b225/">
                  <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

