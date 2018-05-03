import React, { Component } from 'react';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Button,
  FormGroup,
  Input } from 'reactstrap';
  import {
      Link
    } from 'react-router-dom';

  const Hover = ({ onHover, children }) => (
    <div className="hover">
        <div className="hover__no-hover">{children}</div>
        <div className="hover__hover">{onHover}</div>
    </div>
  )

  function Category (props) {
    let subCategoryLength = props.categories.length;
    if(!subCategoryLength){
      return false
    }
    return (
      <div id="navbar__navitem--hover">
        <div className="row">
          <div className="col-sm-6">
            <ul id="navbar__navitem--category">
            {
              props.categories.map((aSubCategory, index) => {
                if(index === subCategoryLength - 1){
                  return false
                }
                return (
                  <li key={aSubCategory}>
                    <Link to={{ pathname: `/men/${aSubCategory}`, aSubCategory }}>{aSubCategory}</Link>
                  </li>
                )
              })
            }
            </ul>
          </div>
          <div className="col-sm-6" id="navbar__navitem--image">
            {
              props.categories.map((aSubCategory, index) => {
                if(index === subCategoryLength - 1){
                  return (
                    <a key={aSubCategory}>
                      <img src={aSubCategory} alt="category" />
                    </a>
                  )
                }
                return true;
              })
            }
          </div>
        </div>
      </div>
    )
  }

  class CustomNavbar extends Component {
    constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      const categories = [{
        "clothing": ["T-shirt", "casual shirts", "formal shirts", "suits", "jeans","Casual Trouser", "Formal Trouser", "Shorts", "Track Pants", "//cdn.aboutstatic.com/file/f92c68391d20355daf8d6883591b82b6?quality=90&progressive=1&width=137&height=229"],
        "Footwear": ["casual Shoes", "Sports Shoes", "Formal Shoes", "Floaters", "Flip Flops", "Socks", "//cdn.aboutstatic.com/file/05393b807c649d11b3aeda938604d951?quality=90&amp;progressive=1&amp;width=137&amp;height=229"],
        "Accessories": ["Watches & Wearables", "Sunglasses", "Bags", "Personal care", "Wallets & Belts", "//cdn.aboutstatic.com/file/8f7b53c337a6e0b83afc05a7eef14300?quality=90&progressive=1&width=137&height=229"],
        "SALE": [],
        "brands": ["JOOP!", "SCOTCH & SODA", "LEVIs", "ADIDAS ORIGINALS", "Urban Classics", "JACK WOLFSKIN", "LTB", "CHEAP MONDAY", "Only & Sons", "Marc O'Polo", "PUMA", "//cdn.aboutstatic.com/file/05393b807c649d11b3aeda938604d951?quality=90&amp;progressive=1&amp;width=137&amp;height=229"]
      }]
      return (
        <div id="navbar">
          <Navbar light expand="md">
            <Container>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="mr-auto" navbar>
                {
                  categories.map((aCatObj) => {
                    let returnObj = []
                    for (const key of Object.keys(aCatObj)) {
                        returnObj.push(
                          <NavItem key={key}>
                            <Hover onHover={<Category categories={aCatObj[key]}/>}>
                              <NavLink className={key === 'SALE' ? 'nav-link--sale' : ''}>{key}</NavLink>
                            </Hover>
                          </NavItem>
                        )
                    }
                    return returnObj
                  })
                }
              </Nav>
            </Collapse>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Input type="search" name="search" id="navbar__search" placeholder="search"/>
              <Button type="submit" id="navbar__search--button"><i className="fa fa-search"></i></Button>
            </FormGroup>
            </Container>
          </Navbar>
        </div>
      );
    }
  }

  export default CustomNavbar;
