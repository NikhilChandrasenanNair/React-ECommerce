import React from 'react';
import {
  Container,
  Row,
  Col,
  FormGroup,
  Input } from 'reactstrap';
import {
  } from 'react-router-dom';

function ProductList(props) {

  let currentSubCategory = props.currentSubCategory.toLowerCase();

  return (
      props.productList.map((aProdCat) => {
        let returnObj = []
        for (const key of Object.keys(aProdCat)) {
          if(key.toLowerCase() === currentSubCategory){
            returnObj.push(
              aProdCat[key].map((aProd) => {
                return(
                  <Col xs="3" className="plp__product" key={aProd.id}>
                    <section className="plp__product--section">
                      <div className="product-detail">
                        <img width="100%" src={aProd.image} alt={aProd.alt} className="plp__product--image" />
                        <div className="plp__product--name text-center">
                          <span>{aProd.productName}</span>
                        </div>
                        <div className="plp__product--price text-center">
                          <span>{aProd.currency}{aProd.price}</span>
                        </div>
                      </div>
                      <div className="product-actions">
                        <span className="product-actionsButton product-wishlist text-center">
                          <span>save</span>
                        </span>
                        <span className="product-actionsButton product-addToBag text-center">
                          <span>Add to bag</span>
                        </span>
                      </div>
                    </section>
                  </Col>
                )
              })
            )
          }
        }
        return returnObj
      })
  )
}

function SubCategoryLength(props) {
  let currentSubCategory = props.currentSubCategory
  let currentSubCategoryLength = props.productList[0][currentSubCategory.toLowerCase()].length

  return (
    <span className="plp__currentSubCategoryLength">
      - {currentSubCategoryLength} items
    </span>
  )
}

class PLP extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      aSubCategory: '',
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      aSubCategory: nextProps.location.aSubCategory
    }
  }

  render() {
    let productList = [
      {
  	    "t-shirt": [
  	        {
  	          productName: 'ether',
  	          price: '39',
  	          brand: 'ether',
  	          sizes: ['s', 'm', 'l', 'xl'],
  	          color: ['Green'],
  	          discount: '',
  	          image: 'https://assets.myntassets.com/h_240,q_90,w_180/v1/assets/images/1190726/2016/3/3/11456988325696-ether-Men-Tshirts-3311456988325199-1_mini.jpg',
  	          id: '1190726',
  	          currency: '$',
  	          alt: 'ETHER Green Melange T-shirt'
  	        },
  	        {
  	          productName: 'difference of opinion',
  	          price: '49',
  	          brand: 'difference of opinion',
  	          sizes: ['s', 'm', 'l', 'xl', 'xxl'],
  	          color: ['Navy'],
  	          discount: '',
  	          image: 'https://assets.myntassets.com/h_240,q_90,w_180/v1/assets/images/1678080/2017/11/7/11510035544392-Difference-of-Opinion-Navy-Printed-T-shirt-4871510035544044-1_mini.jpg',
  	          id: '1678080',
  	          currency: '$',
  	          alt: 'Difference of Opinion Navy Printed T-shirt'
  	        },
  	        {
  	          productName: 'Moda Rapido',
  	          price: '44',
  	          brand: 'Moda Rapido',
  	          sizes: ['s', 'm', 'l', 'xl'],
  	          color: ['White'],
  	          discount: '',
  	          image: 'https://assets.myntassets.com/h_240,q_90,w_180/v1/assets/images/1173329/2016/2/1/11454312413498-Moda-Rapido-White-Printed-Sleeveless-T-shirt-3341454312413021-1_mini.jpg',
  	          id: '1173329',
  	          currency: '$',
  	          alt: 'Moda Rapido White & Navy Printed Sleeveless T-shirt'
  	        },
  	        {
  	          productName: 'Roadster',
  	          price: '44',
  	          brand: 'Roadster',
  	          sizes: ['s', 'm', 'l', 'xl'],
  	          color: ['Blue'],
  	          discount: '',
  	          image: 'https://assets.myntassets.com/h_240,q_90,w_180/v1/assets/images/1996754/2018/2/8/11518091309940-Roadster-Men-Blue-Solid-Round-Neck-T-shirt-1121518091309749-1_mini.jpg',
  	          id: '1996754',
  	          currency: '$',
  	          alt: 'Roadster Men Blue Solid Round Neck T-shirt'
  	        },
  	        {
  	          productName: 'Antony Morato',
  	          price: '36',
  	          brand: 'Antony Morato',
  	          sizes: ['s', 'm', 'l', 'xl'],
  	          color: ['Black'],
  	          discount: '',
  	          image: 'https://assets.myntassets.com/h_240,q_90,w_180/v1/assets/images/2507539/2018/3/5/11520235445688-Antony-Morato-Men-Tshirts-2521520235445517-1_mini.jpg',
  	          id: '2507539',
  	          currency: '$',
  	          alt: 'Antony Morato Men Black Solid Round Neck T-shirt'
  	        },
  	        {
  	          productName: 'Roadster',
  	          price: '63',
  	          brand: 'Roadster',
  	          sizes: ['s', 'm', 'l', 'xl'],
  	          color: ['Grey'],
  	          discount: '',
  	          image: 'https://assets.myntassets.com/h_240,q_90,w_180/v1/assets/images/2169166/2018/1/31/11517395903130-Roadster-Men-Grey-Melange-Solid-Round-Neck-T-shirt-7291517395902945-1_mini.jpg',
  	          id: '2169166',
  	          currency: '$',
  	          alt: 'Roadster Men Grey Melange Solid Round Neck T-shirt'
  	        },
  	        {
  	          productName: '2GO',
  	          price: '39',
  	          brand: '2GO',
  	          sizes: ['s', 'm', 'l', 'xl'],
  	          color: ['Grey'],
  	          discount: '',
  	          image: 'https://assets.myntassets.com/h_240,q_90,w_180/v1/assets/images/1726529/2017/2/8/11486548515962-2GO-Men-Grey-Melange-Self-design-Round-Neck-T-Shirt-2531486548515757-1_mini.jpg',
  	          id: '1726529',
  	          currency: '$',
  	          alt: '2GO Bold Grey GO Dry workout half sleeves T-shirt'
  	        },
            {
  	          productName: 'ether',
  	          price: '49',
  	          brand: 'ether',
  	          sizes: ['s', 'm', 'l', 'xl'],
  	          color: ['Blue'],
  	          discount: '',
  	          image: 'https://assets.myntassets.com/h_240,q_90,w_180/v1/assets/images/1704565/2017/12/18/11513575078555-ether-Men-Navy-Blue-Striped-Round-Neck-T-Shirt-7151513575078345-1_mini.jpg',
  	          id: '1704565',
  	          currency: '$',
  	          alt: 'ether Men Navy Blue Striped Round Neck T-Shirt'
  	        },
  	        {
  	          productName: 'difference of opinion',
  	          price: '54',
  	          brand: 'difference of opinion',
  	          sizes: ['s', 'm', 'l', 'xl', 'xxl'],
  	          color: ['White'],
  	          discount: '',
  	          image: 'https://assets.myntassets.com/h_240,q_90,w_180/v1/assets/images/1714119/2017/11/7/11510035749133-Difference-of-Opinion-Men-White--Blue-Striped-Round-Neck-T-shirt-651510035748876-1_mini.jpg',
  	          id: '1678081',
  	          currency: '$',
  	          alt: 'Difference of Opinion Men White & Blue Striped Round Neck T-shirt'
  	        },
  	        {
  	          productName: 'Mast & Harbour',
  	          price: '59',
  	          brand: 'Mast & Harbour',
  	          sizes: ['s', 'm', 'l', 'xl'],
  	          color: ['Maroon'],
  	          discount: '',
  	          image: 'https://assets.myntassets.com/h_240,q_90,w_180/v1/assets/images/3082387/2018/4/12/11523515363161-Mast--Harbour-Men-Tshirts-7751523515362997-1_mini.jpg',
  	          id: '3082387',
  	          currency: '$',
  	          alt: 'Mast & Harbour Men Maroon Solid Round Neck T-shirt'
  	        },
  	        {
  	          productName: 'esprit',
  	          price: '14',
  	          brand: 'esprit',
  	          sizes: ['s', 'm', 'l', 'xl'],
  	          color: ['Blue'],
  	          discount: '',
  	          image: 'https://assets.myntassets.com/h_240,q_90,w_180/v1/assets/images/2530251/2018/3/21/11521612571391-ESPRIT-Men-Tshirts-8771521612571185-1_mini.jpg',
  	          id: '2530251',
  	          currency: '$',
  	          alt: 'ESPRIT Men Blue Solid Polo Collar T-shirt'
  	        },
            {
  	          productName: 'Roadster',
  	          price: '63',
  	          brand: 'Roadster',
  	          sizes: ['s', 'm', 'l', 'xl'],
  	          color: ['Green'],
  	          discount: '',
  	          image: 'https://assets.myntassets.com/h_240,q_90,w_180/v1/assets/images/1996773/2018/2/8/11518089793781-Roadster-Men-Green-Solid-Henley-Neck-T-shirt-5671518089793552-1_mini.jpg',
  	          id: '1996773',
  	          currency: '$',
  	          alt: 'Roadster Men Green Solid Henley Neck T-shirt'
  	        }
  	    ],

    		"casual shirts": [
    			{
    				productName: 'highlander',
    				price: '64',
    				brand: 'highlander',
    				sizes: ['s', 'm', 'l', 'xl'],
    				color: ['Blue'],
    				discount: '',
    				image: 'https://assets.myntassets.com/h_240,q_90,w_180/v1/assets/images/2006852/2018/4/3/11522753460014-HIGHLANDER-Men-Blue--White-Slim-Fit-Checked-Casual-Shirt-2811522753459810-1_mini.jpg',
    				id: '2006852',
    				currency: '$',
    				alt: 'HIGHLANDER Men Blue & White Slim Fit Checked Casual Shirt'
    			},
    			{
    				productName: 'Moda Rapido',
    				price: '11',
    				brand: 'Moda Rapido',
    				sizes: ['s', 'm', 'l', 'xl'],
    				color: ['White'],
    				discount: '',
    				image: 'https://assets.myntassets.com/h_240,q_90,w_180/v1/assets/images/2434747/2018/4/24/11524558706784-Moda-Rapido-Men-Blue--White-Regular-Fit-Checked-Casual-Shirt-8641524558706374-1_mini.jpg',
    				id: '2434747',
    				currency: '$',
    				alt: 'Moda Rapido Men Blue & White Regular Fit Checked Casual Shirt'
    			},
    			{
    				productName: 'french connection',
    				price: '99',
    				brand: 'french connection',
    				sizes: ['s', 'm', 'l', 'xl'],
    				color: ['Purple'],
    				discount: '',
    				image: 'https://assets.myntassets.com/h_240,q_90,w_180/v1/assets/images/2298029/2017/12/14/11513249509255-French-Connection-Men-Pink-Slim-Fit-Solid-Casual-Shirt-8371513249509094-1_mini.jpg',
    				id: '2298029',
    				currency: '$',
    				alt: 'French Connection Men Purple Slim Fit Solid Casual Shirt'
    			},
          {
    				productName: 'Gant',
    				price: '69',
    				brand: 'Gant',
    				sizes: ['s', 'm', 'l', 'xl'],
    				color: ['Blue'],
    				discount: '',
    				image: 'https://assets.myntassets.com/h_240,q_90,w_180/v1/assets/images/4443491/2018/4/2/11522668365474-na-2061522668365268-1_mini.jpg',
    				id: '4443491',
    				currency: '$',
    				alt: 'GANT Men Blue Classic Regular Fit Solid Casual Shirt'
    			},
          {
    				productName: 'Highlander',
    				price: '54',
    				brand: 'Highlander',
    				sizes: ['s', 'm', 'l', 'xl'],
    				color: ['White'],
    				discount: '',
    				image: 'https://assets.myntassets.com/h_240,q_90,w_180/v1/assets/images/1272502/2018/2/5/11517823086440-Highlander-White-Slim-Fit-Casual-Shirt-161517823086304-1_mini.jpg',
    				id: '1272502',
    				currency: '$',
    				alt: 'Highlander White Slim Fit Casual Shirt'
    			},
          {
    				productName: 'Campus Sutra',
    				price: '55',
    				brand: 'Campus Sutra',
    				sizes: ['s', 'm', 'l', 'xl'],
    				color: ['White'],
    				discount: '',
    				image: 'https://assets.myntassets.com/h_240,q_90,w_180/v1/assets/images/1925969/2017/5/25/11495714485673-Campus-Sutra-Men-Blue-Standard-Regular-Fit-Self-Design-Casual-Shirt-7401495714485381-1_mini.jpg',
    				id: '1925969',
    				currency: '$',
    				alt: 'Campus Sutra Men Blue Standard Regular Fit Self Design Casual Shirt'
    			},
          {
    				productName: 'Ecko Unltd',
    				price: '91',
    				brand: 'Ecko Unltd',
    				sizes: ['s', 'm', 'l', 'xl'],
    				color: ['Burgundy'],
    				discount: '',
    				image: 'https://assets.myntassets.com/h_240,q_90,w_180/v1/assets/images/4884249/2018/4/17/11523959666235-Ecko-Unltd-Men-Burgundy-Slim-Fit-Solid-Casual-Shirt-1751523959666101-1_mini.jpg',
    				id: '4884249',
    				currency: '$',
    				alt: 'Ecko Unltd Men Burgundy Slim Fit Solid Casual Shirt'
    			},
          {
    				productName: 'Highlander',
    				price: '54',
    				brand: 'Highlander',
    				sizes: ['s', 'm', 'l', 'xl'],
    				color: ['Olive Green'],
    				discount: '',
    				image: 'https://assets.myntassets.com/h_240,q_90,w_180/v1/assets/images/2454221/2018/4/3/11522748293171-HIGHLANDER-Men-Olive-Green-Slim-Fit-Solid-Casual-Shirt-2301522748292977-1_mini.jpg',
    				id: '2454221',
    				currency: '$',
    				alt: 'HIGHLANDER Men Olive Green Slim Fit Solid Casual Shirt'
    			},
          {
    				productName: 'WROGN',
    				price: '15',
    				brand: 'WROGN',
    				sizes: ['s', 'm', 'l', 'xl'],
    				color: ['Rust Red'],
    				discount: '',
    				image: 'https://assets.myntassets.com/h_240,q_90,w_180/v1/assets/images/1536597/2016/12/26/11482741978700-WROGN-Men-Shirts-2971482741978241-1_mini.jpg',
    				id: '1536597',
    				currency: '$',
    				alt: 'WROGN Men Rust Red Solid Linen Casual Shirt'
    			},
          {
    				productName: 'Timberland',
    				price: '24',
    				brand: 'Timberland',
    				sizes: ['s', 'm', 'l', 'xl'],
    				color: ['Red'],
    				discount: '',
    				image: 'https://assets.myntassets.com/h_240,q_90,w_180/v1/assets/images/2331791/2018/1/2/11514891316515-Timberland-Men-Red--White-Regular-Fit-Checked-Casual-Shirt-5521514891316387-1_mini.jpg',
    				id: '2331791',
    				currency: '$',
    				alt: 'Timberland Men Red & White Slim Fit Checked Casual Shirt'
    			}
    		]
      }
    ]
    return (
      <Container id="plp">
        <Row>
          <Col xs="9">
            <Row>
              <Col xs="12" className="plp__subcategory--heading">
                <Row>
                  <Col xs="9">
                    <div className="plp__currentSubCategory">
                      <span className="plp__currentSubCategoryName">
                        {this.state.aSubCategory}
                      </span>
                      <SubCategoryLength productList={productList} currentSubCategory={this.state.aSubCategory} />
                    </div>
                  </Col>
                  <Col xs="3">
                    <FormGroup>
                      <Input type="select" name="select" id="plp__filter">
                        <option>Popularity</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
              </Col>
              <ProductList productList={productList} currentSubCategory={this.state.aSubCategory} />
            </Row>
          </Col>

          <Col xs="3">

          </Col>
        </Row>
      </Container>
    );
  }
}

export default PLP;
