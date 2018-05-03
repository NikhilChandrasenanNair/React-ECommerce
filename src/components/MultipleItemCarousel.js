import React from 'react';
import AliceCarousel from 'react-alice-carousel';

class MultipleItemCarousel extends React.Component {

  onSlideChange(e) {

  }

  onSlideChanged(e) {

  }

  render() {
    const responsive = {
      1024: {
        items: 3
      }
    };

    return (
      <div id="carousel">
        <div className="multipleItemCarousel">
          <AliceCarousel
            duration={400}
            startIndex = {1}
            fadeOutAnimation={true}
            mouseDragEnabled={true}
            responsive={responsive}
            autoPlayDirection="rtl"
            autoPlayActionDisabled={true}
            onSlideChange={this.onSlideChange}
            onSlideChanged={this.onSlideChanged}
          >
            <img src="//cdn.aboutstatic.com/file/6b67ad43c71877a39dcb0fcc04a82486?quality=90&progressive=1&width=280" className="yours-custom-class" alt=""/>
            <img src="//cdn.aboutstatic.com/file/44a89b0810728e55b4624bc446222b5a?quality=90&progressive=1&width=280" className="yours-custom-class" alt=""/>
            <img src="//cdn.aboutstatic.com/file/eff6266b5f0d01f5d179fc0833e49961?quality=90&progressive=1&width=280" className="yours-custom-class" alt=""/>
            <img src="//cdn.aboutstatic.com/file/787b776375de53e07e0bb48952624859?quality=90&progressive=1&width=280" className="yours-custom-class" alt=""/>
            <img src="//cdn.aboutstatic.com/file/cc4fc73b33c0e02f18b9ea6a91eecf86?quality=90&progressive=1&width=280" className="yours-custom-class" alt=""/>
            <img src="//cdn.aboutstatic.com/file/781ab23f88aa813aed0428358d26fb6c?quality=90&progressive=1&width=280" className="yours-custom-class" alt=""/>
          </AliceCarousel>
        </div>
      </div>
    );
  }
}


export default MultipleItemCarousel;
