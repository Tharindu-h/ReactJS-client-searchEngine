import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import DropDown from './DropDown';

class SearchForm extends React.Component {
  handleSubmit (event) {
    console.log(event.target.query.value);
    console.log(event.target.endpoint.value);
    event.preventDefault();
  }

  render() {
    return(
      <Container>
        <form onSubmit={this.handleSubmit}>
          <Row>
            <Col>
              <label>Search Database</label>
            </Col>
            <Col>
              <input type="text" id='query' name='query' required></input>
            </Col>
            <Col>
              <label>Boost</label>
              <input type='checkbox' id='boost' name='boost'></input>
            </Col>
            <Col>
              <label>Number of Search Results</label>
              <DropDown for="numResults" />
            </Col>
            <Col>
              <label>Endpoint</label>
              <DropDown for="endpoint" />
            </Col>
            <Col>
              <Button variant="outline-primary" type='submit'>Search</Button>
            </Col>
          </Row>
        </form>
      </Container>
    )
  }
}

export default SearchForm;