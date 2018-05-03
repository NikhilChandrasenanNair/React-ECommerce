import React from 'react';
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem } from 'reactstrap';
  import {
      Link
    } from 'react-router-dom';

  function SubCategory (props) {
    let subCategoryLength = props.subcategories.length;
    if(!subCategoryLength){
      return false
    }
    return (
              props.subcategories.map((aSubCategory, index) => {
                if(index === subCategoryLength - 1){
                  return false
                }
                return (
                  <ListGroupItem key={aSubCategory} ><Link to={`/women/${aSubCategory}`}>{aSubCategory}</Link></ListGroupItem>
                )
              })

    )
  }

class Women extends React.Component {
  render() {
    let subCategories = [{
      "INDIAN & FUSION WEAR": ["Kurtas & Suits", "Kurtis & Tunics", "Leggings, Salwars & Churidars", "Skirts & Palazzos", "Sarees & Blouses","Dress Material", "Lehenga Choli", "Dupattas & Shawls"],
      "WESTERNWEAR": ["Dresses & Jumpsuits", "Tops, T-Shirts & Shirts", "Jeans & Jeggings", "Trousers & Capris", "Shorts & Skirts", "Shrugs", "Sweaters & Sweatshirts", "Jackets & Waistcoats", "Coats & Blazers"],
      "FOOTWEAR": ["Flats & Casual Shoes", "Heels", "Sports Shoes & Floaters"],
      "ACCESSORIES AND MORE": ["Watches & Wearables", "Sports & Active Wear", "Sunglasses & Frames", "Jewellery", "Cosmetics & Personal Care", "Fashion Accessories", "Luggage & Trolleys"]
    }]
    return (
      <Container id="women">
        <Row>
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
          <Col xs="9">
            <Row>
              <div>
                <img className="" width="100%" src="https://n.nordstrommedia.com/id/ff7a6051-32f1-4718-b46d-d88cc1bf2a8b.jpeg?w=1334&h=270" alt="Give a Little Wow: Mother's Day is Sunday, May 13."/>
              </div>
            </Row>
            <Row className="women__collection">
              <Col xs="6">
                <section>
                  <div>
                    <img className="" width="100%" src="https://n.nordstrommedia.com/id/7b0a261a-8d64-4d0b-b71e-53e340a0c54f.jpeg?w=650&h=650" alt="Spring's hottest shoes"/>
                  </div>
                  <div>
                    <h4>
                      Spring's Hottest Shoes
                    </h4>
                  </div>
                  <div>
                    <a href="/">
                      Shoes
                    </a>
                  </div>
                </section>
              </Col>
              <Col xs="6">
                <section>
                  <div>
                    <img className="" width="100%" src="https://n.nordstrommedia.com/id/2345f33c-a8fa-4781-ad5e-04df37eba372.jpeg?w=650&h=650" alt="Jewelry picks: delicate details and mixed metal."/>
                  </div>
                  <div>
                    <h4>
                      Jewelry Picks:
                    </h4>
                  </div>
                  <div>
                    <a href="/">
                      Jewelry
                    </a>
                  </div>
                </section>
              </Col>
            </Row>
            <Row className="women__collection--new-arrivals">
              <section>
                <div>
                  <img className="" width="100%" src="https://n.nordstrommedia.com/id/b0d2c0bb-043b-4acc-a359-7d57a6e1bdf1.jpeg?w=1334&h=470" alt="Style steals under $100."/>
                </div>
                <div className="women__collection--new-arrivals-text">
                  <h4 className="">
                    <p>
                      <strong>Style Steals Under $100
                        <br />
                      </strong>Warming Trends
                    </p>
                  </h4>
                  <div className="">
                    <div className="">
                      <ul className="">
                        <li className="">
                          <a href="" className="">
                            <span className="">Shoes</span>
                          </a>
                        </li>
                        <li className="">
                          <a href="" className="">
                            <span className="">Accessories</span>
                          </a>
                        </li>
                      </ul>
                    </div>
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
            </Row>
            <Row className="women__collection--top-picks">
              <Col xs="12">
              <section>
                <div>
                  <img width="100%" src="https://n.nordstrommedia.com/id/bf7ae208-3734-41a8-a1b6-14e5c8940b70.png?w=1334&h=218" alt="Our top denim picks for spring." />
                </div>
                <div className="women__collection--top-picks-text">
                  <h4 className="">
                    <p>
                      <strong>Our Top Denim Picks for Spring
                      </strong>
                    </p>
                  </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                </div>
              </section>
              </Col>
            </Row>
            <Row className="women__collection--top-picks-denim">
              <Col xs="6">
                <div>
                  <img className="" width="100%" src="https://n.nordstrommedia.com/id/024cde26-55ca-4c7c-be41-0875b75df589.jpeg?w=650&h=935" alt="Our top denim picks for spring."/>
                </div>
              </Col>
              <Col xs="6">
                <Row>
                  <Col xs="12" style={{"paddingBottom": 20 + 'px'}}>
                    <div>
                      <img className="" width="100%" src="https://n.nordstrommedia.com/id/c133c59b-c4f1-4d1c-b72f-07944a962ab7.jpeg?w=650&h=450" alt="Our top denim picks for spring."/>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12">
                    <div>
                      <img className="" width="100%" src="https://n.nordstrommedia.com/id/769df161-d458-41b4-ae14-6ad4e36e405d.jpeg?w=650&h=451" alt="Our top denim picks for spring."/>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}


export default Women;
