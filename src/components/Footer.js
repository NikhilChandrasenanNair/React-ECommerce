import React, { Component } from 'react';
import {
  Container,
  Row } from 'reactstrap';

class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <Container>
          <Row>
              <footer>
               <div className="footer-container">
                    <div className="footer-content">
                      <div className="left-wrapper">
                        <ul>
                          <li className="first myaccount">
                            <a href="">My Account</a>
                          </li>
                          <li>
                            <a href="">Terms of Use</a>
                          </li>
                          <li>
                            <a href="">Careers</a>
                          </li>
                        </ul>
                      </div>
                    </div>
               </div>
              </footer>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Footer;
