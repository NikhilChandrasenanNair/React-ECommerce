import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Button,
  Input } from 'reactstrap';

export default class SignUp extends Component {
  render() {
    return (
      <Form id="signup">
        <FormGroup>
          <Label for="signup__email" hidden>Email</Label>
          <Input type="email" name="email" id="signup__email" placeholder="Email" autoComplete="email"/>
        </FormGroup>
        {' '}
        <FormGroup>
          <Label for="signup__password" hidden>Password</Label>
          <Input type="password" name="password" id="signup__password" placeholder="Password" autoComplete="off"/>
        </FormGroup>
        {' '}
        <FormGroup>
          <Label for="signup__re-enter-password" hidden>Re-Enter Password</Label>
          <Input type="password" name="password" id="signup__re-enter-password" placeholder="Re-Enter Password" autoComplete="off"/>
        </FormGroup>
        {' '}
        <Button>Submit</Button>
      </Form>
    );
  }
}
