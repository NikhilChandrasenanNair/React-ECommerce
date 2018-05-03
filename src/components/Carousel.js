import React, { Component } from 'react';
import {
  Link } from 'react-router-dom';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: '//cdn.aboutstatic.com/file/834c1ff1c3573759c3a3f7947cd4916e?quality=90&progressive=1&width=2000',
    altText: 'André Hamann',
    caption: 'André Hamann'
  },
  {
    src: '//cdn.aboutstatic.com/file/43c8d7a99420f264b62397b6a21a6637?quality=90&progressive=1&width=2000',
    altText: 'Festival Fever',
    caption: 'Festival Fever'
  },
  {
    src: '//cdn.aboutstatic.com/file/3429a06a52a5b8f426a8a015aa99f61c?quality=90&progressive=1&width=2000',
    altText: 'Swimwear',
    caption: 'Swimwear'
  }
];

class CarouselBanner extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <Link href='/' to={`/story/${item.caption}`}>
            <img src={item.src} alt={item.altText} />
          </Link>
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default CarouselBanner;
