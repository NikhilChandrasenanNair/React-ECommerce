import React, { Component } from 'react';

class MustHave extends Component {
  render() {
    return (
      <div id="musthave">
        <h3 id="musthave--text" className="text-center">#Must Have</h3>
         <div className="musthave-container text-center">
            <ul>
              <li>
                <a href="">
                  <img src="https://n.nordstrommedia.com/id/93bc1cd2-4574-49fc-9c02-98c4220e6c5c.jpeg?w=308&amp;h=308" alt="Gift cards." />
                </a>
                <div className="musthave__image-text text-center">Gift cards</div>
              </li>
              <li>
                <a href="">
                  <img src="https://n.nordstrommedia.com/id/736723aa-163e-4555-a286-00ee3715e3a3.jpeg?w=308&amp;h=308" alt="Watches" />
                </a>
                <div className="musthave__image-text text-center">Watches</div>
              </li>
              <li>
                <a href="">
                  <img src="https://n.nordstrommedia.com/id/021cc2f1-be48-494b-a546-f8e20e3cce87.jpeg?w=308&amp;h=308" alt="Handbags" />
                </a>
                <div className="musthave__image-text text-center">Handbags</div>
              </li>
              <li>
                <a href="">
                  <img src="https://n.nordstrommedia.com/id/6acd6f61-abb9-4f51-a33f-8125cd027a20.jpeg?w=308&amp;h=308" alt="Fragrance" />
                </a>
                <div className="musthave__image-text text-center">Fragrance</div>
              </li>
            </ul>
            <div className="clr"></div>
         </div>
      </div>
    );
  }
}

export default MustHave;
