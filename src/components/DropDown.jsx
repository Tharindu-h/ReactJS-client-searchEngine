import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    let isEndpoint = this.props.for === "endpoint";
    this.state = isEndpoint ? {value: 'fruits/'} : {value : 10};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  render() {
    let menuItems = [];
    if (this.props.for === "endpoint") {
      menuItems.push(<option value={"fruits/"} key={"fruits/"}>Fruits/</option>);
      menuItems.push(<option value={"manpages/"} key={"manpages/"}>ManPages/</option>);
      return (
        <Form.Select value={this.state.value} onChange={this.handleChange} name="endpoint">
          {menuItems}
        </Form.Select>
      )
    }
    else if (this.props.for === "numResults") {
      for (let item = 1; item < 51; item++) {
        if (item == 10) {
          menuItems.push(<option value={item} key={item}>{item}</option>);
          continue;
        }
        menuItems.push(<option value={item} key={item}>{item}</option>);
      }
      return (
        <Form.Select value={this.state.value} onChange={this.handleChange} name="numResults">
          {menuItems}
        </Form.Select>
      )
    }
  }
}


export default DropDown;