import React from 'react';
import AliceCarousel from 'react-alice-carousel';

class Popular extends React.Component {

  onSlideChange(e) {

  }

  onSlideChanged(e) {

  }

  render() {
    const responsive = {
      1024: {
        items: 5
      }
    };

    return (
      <div id="popular">
        <div className="popular-multipleItemCarousel">
          <h3 className="text-center">#Trending now</h3>
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
            <figure>
              <img src="https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/13/_100978453.jpg?q=45&fit=fill&fm=jpg&pr=2&h=408&w=266" className="" alt="Vince Camuto"/>
              <figcaption className="popular__image--caption text-center">
                <div>Vince Camuto</div>
                <div>INR 4000.00</div>
              </figcaption>

            </figure>
            <figure>
              <img src="https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/10/_101656530.jpg?q=45&fit=fill&fm=jpg&pr=2&h=408&w=266" className="" alt="Barefoot Dreams®"/>
              <figcaption className="popular__image--caption text-center">
                <div>Barefoot Dreams®</div>
                <div>INR 8400.00</div>
              </figcaption>
            </figure>
            <figure>
              <img src="https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/18/_12381938.jpg?q=45&fit=fill&fm=jpg&pr=2&h=408&w=266" className="" alt="Nordstrom Men's Shop"/>
              <figcaption className="popular__image--caption text-center">
                <div>Nordstrom Men's Shop</div>
                <div>INR 16400.00</div>
              </figcaption>
            </figure>
            <figure>
              <img src="https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/10/_9724830.jpg?q=45&fit=fill&fm=jpg&pr=2&h=408&w=266" className="" alt="Bonobos"/>
              <figcaption className="popular__image--caption text-center">
                <div>Bonobos</div>
                <div>INR 12900.00</div>
              </figcaption>
            </figure>
            <figure>
              <img src="https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/8/_103048648.jpg?q=45&fit=fill&fm=jpg&pr=2&h=408&w=266" className="" alt="James Perse"/>
              <figcaption className="popular__image--caption text-center">
                <div>James Perse</div>
                <div>INR 7800.00</div>
              </figcaption>
            </figure>
            <figure>
              <img src="https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/0/_100925680.jpg?q=45&fit=fill&fm=jpg&pr=2&h=408&w=266" className="" alt="Hudson Jeans"/>
              <figcaption className="popular__image--caption text-center">
                <div>Hudson Jeans</div>
                <div>INR 12400.00</div>
              </figcaption>
            </figure>

          </AliceCarousel>
        </div>
      </div>
    );
  }
}


export default Popular;
