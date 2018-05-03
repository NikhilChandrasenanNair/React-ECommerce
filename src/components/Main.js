import React, { Component } from 'react';
import CarouselBanner from './Carousel';
import MultipleItemCarousel from './MultipleItemCarousel';
import MustHave from './MustHave';
import Promotion from './Promotion';
import Popular from './Popular';
import Subscription from './Subscription';

class Main extends Component {
  render() {
    return (
        <div id="main">
          <CarouselBanner />
          <MultipleItemCarousel />
          <MustHave />
          <Promotion />
          <Popular />
          <Subscription />
        </div>
    );
  }
}

export default Main;
