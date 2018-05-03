import React from 'react';
import {
  Button,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input } from 'reactstrap';

class Subscription extends React.Component {
  render() {
    return (
      <div id="email-subscription">
        <Container id="email-subscription--container">
          <Row>
            <Col sm={{ size: 'auto', offset: 4 }} id="email-subscription--inner">
              <Row>
                <Col id="email-subscription--label">
                  Find out first about discounts and updates
                </Col>
              </Row>
              <Form inline>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Input type="email" name="email" id="email-subscription--section" placeholder="something@idk.cool" />
                </FormGroup>
                <Button>Subscribe</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Subscription;
