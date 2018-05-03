import React from 'react';
import {
  Container,
  Row,
  Col } from 'reactstrap';
import {
    Link
  } from 'react-router-dom';

function ProductList(props) {

  let currentSubCategory = props.currentSubCategory.toLowerCase();
  let productList = [
    {
	    "t-shirt": [
	        {
	          productName: 'ether',
	          price: '399',
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
	          price: '494',
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
	          price: '449',
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
	          price: '449',
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
	          price: '3699',
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
	          price: '639',
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
	          price: '399',
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
	          price: '499',
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
	          price: '549',
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
	          price: '599',
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
	          productName: 'Roadster',
	          price: '639',
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
				price: '649',
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
				price: '1199',
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
				price: '999',
				brand: 'french connection',
				sizes: ['s', 'm', 'l', 'xl'],
				color: ['Purple'],
				discount: '',
				image: 'https://assets.myntassets.com/h_240,q_90,w_180/v1/assets/images/2298029/2017/12/14/11513249509255-French-Connection-Men-Pink-Slim-Fit-Solid-Casual-Shirt-8371513249509094-1_mini.jpg',
				id: '2298029',
				currency: '$',
				alt: 'French Connection Men Purple Slim Fit Solid Casual Shirt'
			}
		]
    }
  ]
  return (
      productList.map((aProdCat) => {
        let returnObj = []
        for (const key of Object.keys(aProdCat)) {
          if(key.toLowerCase() === currentSubCategory){
            returnObj.push(
              aProdCat[key].map((aProd) => {
                return(
                  <Col xs="3" className="plp__product" key={aProd.id}>
                    <section>
                      <div className="plp__product--image">
                        <img src={aProd.image} alt={aProd.alt} />
                      </div>
                      <div className="plp__product--name">
                        <span>{aProd.productName}</span>
                      </div>
                      <div className="plp__product--price">
                        <span>{aProd.currency}{aProd.price}</span>
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

class PLP extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      aSubCategory: ''
    }
  }


  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      aSubCategory: nextProps.location.aSubCategory
    }
  }

  render() {

    return (
      <Container id="plp">
        <Row>
          <Col xs="3">

          </Col>
          <Col xs="9">
            <Row>
              <ProductList currentSubCategory={this.state.aSubCategory}/>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}


export default PLP;
