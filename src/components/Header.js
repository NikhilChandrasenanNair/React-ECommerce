import React, { Component } from 'react';
import {
  NavLink
} from 'react-router-dom';
import ModalComponent from './Modal';
import {
  Container,
  Row,
  Col,
  Nav,
  NavbarBrand,
  NavItem } from 'reactstrap';


class Header extends Component {

  render() {
    return (
      <div id="header">
        <Nav>
          <Container>
            <Row>
              <Col sm="4" id="header__category-links">
                <NavItem >
                  <NavLink to={{pathname: '/women'}} activeClassName="active-nav">Women</NavLink>
                </NavItem>
                <NavItem >
                  <NavLink to={{pathname: '/men'}}  activeClassName="active-nav">Men</NavLink>
                </NavItem>
                <NavItem className="not-active">
                  <NavLink to={{pathname: '/children'}} >Children</NavLink>
                </NavItem>
              </Col>
              <Col sm="4" className="text-center" id="header__brand-logo">
                <NavbarBrand href="/">My E-Commerce</NavbarBrand>
              </Col>
              <Col sm="4" id="header__wishlist">
                <Row>
                  <Col sm="3" className="text-center ml-auto" id="header__wishlist--signup">
                    <ModalComponent />
                  </Col>
                  <Col sm="2" className="text-center" id="header__wishlist--cart-icon">
                    <i className="fa fa-heart-o" aria-hidden="true"></i>
                  </Col>
                  <Col sm="2" className="text-center" id="header__wishlist--shopping-icon">
                    <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Nav>
      </div>
    );
  }
}

export default Header;
