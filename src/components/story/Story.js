import React, { Component } from 'react';
import {
  Container,
  Row,
  Col } from 'reactstrap';


function ImageLooper(props) {
  let image = props.images;
  return (
    <img className="story__detail--image-loop" width="100%" src={image} alt="André Hamann"/>
  )
}

function OutfitList() {

  let outfitsArray = [
    {
      image: '//cdn.aboutstatic.com/file/652b9734afa3dc9b2480262b6638b72f?quality=90&progressive=1&width=250&height=333',
      alt: 'Cool Grunge Style'
    },
    {
      image: '//cdn.aboutstatic.com/file/0c586c0d758251ea957106593c689255?quality=90&progressive=1&width=250&height=333',
      alt: 'Gray Leather Look'
    },
    {
      image: '//cdn.aboutstatic.com/file/d514e316bc78c6ec23b5004f0b40870c?quality=90&progressive=1&width=250&height=333',
      alt: 'New York City Style'
    },
    {
      image: '//cdn.aboutstatic.com/file/7ff6581046751063fa82d5cf3f6c0b72?quality=90&progressive=1&width=250&height=333',
      alt: 'Easy Sunday Style'
    },
    {
      image: '//cdn.aboutstatic.com/file/4e94207ba0905cc0137ca69625b1771d?quality=90&progressive=1&width=250&height=333',
      alt: 'London Look'
    },
    {
      image: '//cdn.aboutstatic.com/file/7c1c62fa23f3bcb59448676305b5fac4?quality=90&progressive=1&width=250&height=333',
      alt: 'Casual Denim Style'
    },
    {
      image: '//cdn.aboutstatic.com/file/bd5dd4753ef799a35c4c4a50109401fb?quality=90&progressive=1&width=250&height=333',
      alt: 'Classy Streetstyle'
    },
    {
      image: '//cdn.aboutstatic.com/file/33db9111e87192f5a6dd063c5a35e53d?quality=90&progressive=1&width=250&height=333',
      alt: 'Modern Street Look'
    },
    {
      image: '//cdn.aboutstatic.com/file/9f3b1baad2f2ff5df191e66baeee0727?quality=90&progressive=1&width=250&height=333',
      alt: 'Easy Knit Look'
    },
    {
      image: '//cdn.aboutstatic.com/file/3f3a814ec2ed59efc4e1670b97156e5b?quality=90&progressive=1&width=250&height=333',
      alt: 'Blue Denim Style'
    },
    {
      image: '//cdn.aboutstatic.com/file/d2fd9839bba720428b312c64adf9562a?quality=90&progressive=1&width=250&height=333',
      alt: 'Laid-back Afternoon Outfit'
    },
    {
      image: '//cdn.aboutstatic.com/file/6f2ceb50c8d09952c4922154540cfbe4?quality=90&progressive=1&width=250&height=333',
      alt: 'Casual Everyday Outfit'
    },
    {
      image: '//cdn.aboutstatic.com/file/f12a38f5fbb256399f5346e73463331f?quality=90&progressive=1&width=250&height=333',
      alt: 'Denim Days Look'
    },
    {
      image: '//cdn.aboutstatic.com/file/5ea0b3e0912bf0dff48b743a8ece335d?quality=90&progressive=1&width=250&height=333',
      alt: 'Rocker Boy Look'
    },
    {
      image: '//cdn.aboutstatic.com/file/f4e9256d4306397e80947669f3db85a9?quality=90&progressive=1&width=250&height=333',
      alt: 'Camouflage Lover Look'
    },
    {
      image: '//cdn.aboutstatic.com/file/7c95714270867950053639ea256352bd?quality=90&progressive=1&width=250&height=333',
      alt: 'Relaxed Afternoon Look'
    },
    {
      image: '//cdn.aboutstatic.com/file/89b7e1ab65d2255cb7e2f784f6587a9d?quality=90&progressive=1&width=250&height=333',
      alt: 'Suit Up Look'
    }
  ]

  return (
      outfitsArray.map((aObj) => {
        return(
          <Col xs='3' className="story__outfits--list" key={aObj.alt}>
            <section>
              <div>
                <img src={aObj.image} alt={aObj.alt} />
              </div>
              <div className="story__outfits--list-text text-center">
                <span>
                  {aObj.alt}
                </span>
              </div>
            </section>
          </Col>
        )
      })
  )
}

class Story extends Component {

  constructor(props) {
    super(props)
    this.state = {
      image : '//cdn.aboutstatic.com/file/f4e9256d4306397e80947669f3db85a9?bg=ffffff&quality=90&width=896'
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId)
  }

  componentDidMount() {
    const imageArray = [
      '//cdn.aboutstatic.com/file/bd5dd4753ef799a35c4c4a50109401fb?bg=ffffff&quality=90&width=896',
      '//cdn.aboutstatic.com/file/f12a38f5fbb256399f5346e73463331f?bg=ffffff&quality=90&width=896',
      '//cdn.aboutstatic.com/file/f4e9256d4306397e80947669f3db85a9?bg=ffffff&quality=90&width=896',
      '//cdn.aboutstatic.com/file/89b7e1ab65d2255cb7e2f784f6587a9d?bg=ffffff&quality=90&width=896',
      '//cdn.aboutstatic.com/file/7ff6581046751063fa82d5cf3f6c0b72?bg=ffffff&quality=90&width=896']
    let index = 0;
    let intervalId = setInterval((images) => {
      if(index === images.length){
        index = 0
      }

      this.setState({
        image: images[index]
      })
      index++;

    }, 1800, imageArray)
    this.setState({intervalId: intervalId});
  }

  render() {

    return (
      <Container id="story">
        <Row className="story__banner">
          <Col xs='12'>
            <section >
              <div>
                <img width="100%" className="story__banner--image" src="//cdn.aboutstatic.com/file/0adf47bdabb55b500539b7ac3d56064b?quality=90&amp;progressive=1&amp;width=1020&amp;height=510" alt="André Hamann"/>
              </div>
              <div>
                <h1 className="story__banner--text">
                  André Hamann
                </h1>
              </div>
            </section>
          </Col>
        </Row>
        <Row className="story__detail">
          <Col xs='6' className="story__detail--para">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
            </p>
          </Col>
          <Col xs='6'>
            <div>
              <ImageLooper images={this.state.image}/>
            </div>
          </Col>
        </Row>
        <Row className="story__outfits">
          <OutfitList />
        </Row>
      </Container>
    );
  }
}

export default Story;
