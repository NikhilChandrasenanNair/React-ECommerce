import React from 'react';
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem } from 'reactstrap';
import {
    NavLink
  } from 'react-router-dom';

  function SubCategory (props) {
    let subCategoryLength = props.subcategories.length;
    if(!subCategoryLength){
      return false
    }
    return (
            props.subcategories.map((aSubCategory, index) => {
              return (
                <ListGroupItem key={aSubCategory} >
                  <NavLink to={{ pathname: `/men/${aSubCategory}`, aSubCategory }}>{aSubCategory}</NavLink>
                </ListGroupItem>
              )
            })
    )
  }

class Men extends React.Component {
  render() {
    let subCategories = [{
      "clothing": ["T-shirt", "casual shirts", "formal shirts", "suits", "jeans","Casual Trouser", "Formal Trouser", "Shorts", "Track Pants"],
      "Footwear": ["casual Shoes", "Sports Shoes", "Formal Shoes", "Floaters", "Flip Flops", "Socks"],
      "Accessories": ["Watches & Wearables", "Sunglasses", "Bags", "Personal care", "Wallets & Belts"]
    }]
    return (
      <Container id="men">
        <Row>
          <Col xs="9">
            <div className="men__collection">
              <img className="men__collection--image" width="100%" src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_1.0/assets/images/retaillabs/2018/4/27/11524849701012-Flying-Machine-Desktop-Slideshow-May-2018.jpg" alt="Flying-Machine"/>
            </div>
            <Row className="men__collection">
              <Col xs="12" className="men__collection--banner">
                <div className="men__collection--container">
                  <h4 className="men__collection--title">#FEATURED</h4>
                  <h4 className="men__collection--subtitle">Sunny days and sizzling looks are here again!</h4>
                </div>
              </Col>
              <Col xs="4">
                <section>
                  <div>
                    <img className="" width="100%" src="https://n.nordstrommedia.com/id/924ccdd1-d391-4dda-a73e-068cf0a786e3.jpeg?w=422&h=422" alt="Work-to-weekend essentials."/>
                  </div>
                  <div>
                    <span>
                      Work-to-Weekend Essentials
                    </span>
                  </div>
                  <div>
                    <a href="/">
                      Clothing
                    </a>
                  </div>
                </section>
              </Col>
              <Col xs="4">
                <section>
                  <div>
                    <img className="" width="100%" src="https://n.nordstrommedia.com/id/59d46bdc-25de-4673-8e32-4ac1b5846a08.jpeg?w=422&h=422" alt="New season updates from Cole Haan and more."/>
                  </div>
                  <div>
                    <span>
                      New Season Updates from Cole Haan & More
                    </span>
                  </div>
                  <div>
                    <a href="/">
                      Shoes
                    </a>
                  </div>
                </section>
              </Col>
              <Col xs="4">
                <section>
                  <div>
                    <img className="" width="100%" src="https://n.nordstrommedia.com/id/65f0c039-d830-4ee5-961b-53bf9095ac9c.jpeg?w=422&h=422" alt="Everything under the sun."/>
                  </div>
                  <div>
                    <span>
                      Everything Under the Sun
                    </span>
                  </div>
                  <div>
                    <a href="/">
                      Accessories
                    </a>
                  </div>
                </section>
              </Col>
            </Row>
            <div className="men__collection--new-arrivals">
              <section>
                <div>
                  <img className="" width="100%" src="https://n.nordstrommedia.com/id/3a707062-9577-4bf4-80d7-3ff482260de3.jpeg?w=1334&h=600" alt="New arrivals, warming trends."/>
                </div>
                <div className="men__collection--new-arrivals-text">
                  <h4 className="">
                    <p>
                      <strong>New Arrivals:
                        <br />
                      </strong>Warming Trends
                    </p>
                  </h4>
                  <div className="">
                    <p className="men__collection--new-arrivals-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                  <div className="">
                    <ul className="">
                      <li className="">
                        <a href="/" className="">
                          <span className="">
                            All Men
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
            <div className="men__collection--new-arrivals">
              <div>
                <img width="100%" src="https://n.nordstrommedia.com/id/09ab5ad2-1d86-458c-8be9-46475a9e5081.jpeg?w=1334&amp;h=250" alt="See what's new in big and tall." />
              </div>
            </div>
          </Col>
          <Col xs="3">
            <ListGroup>
              {
                subCategories.map((aSubCatObj) => {
                  let returnObj = []
                  for (const key of Object.keys(aSubCatObj)) {
                      returnObj.push(
                        <div className="filters" key={key}>
                          <ListGroupItem disabled>{key}</ListGroupItem>
                          <SubCategory subcategories={aSubCatObj[key]}/>
                        </div>
                      )
                  }
                  return returnObj
                })
              }
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}


export default Men;
