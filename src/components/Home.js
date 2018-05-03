import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import CustomNavbar from './Navbar';
import Header from './Header';
import Main from './Main';
import Men from './category/Men';
import Women from './category/Women';
import Children from './category/Children';
import PLP from './plp/Plp';
import Story from './story/Story';
import Footer from './Footer';

class Home extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <CustomNavbar />
          <Switch>
            <Route exact path='/' component={Main} />
            <Route exact path='/men' component={Men} />
            <Route path='/men/' component={PLP} />
            <Route path='/story/' component={Story} />
            <Route exact path='/women' component={Women} />
            <Route exact path='/children' component={Children} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default Home;
