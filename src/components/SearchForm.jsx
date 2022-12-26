import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';

class SearchForm extends React.Component {
  render() {
    return(
      <Container className='mt-4'>
        <Container>
          <form>
            <Row>
              <Col>
                <label for="query">Search Database</label>
              </Col>
              <Col>
                <input type="text" id='query' name='query'></input>
              </Col>
              <Col>
                <label for="boost">Boost</label>
                <input type='checkbox' id='boost' name='boost'></input>
              </Col>
              <Col>
                <label for='limit'>Number of Search Results</label>
              </Col>
              <Col>
                <label>Endpoint</label>
              </Col>
              <Col>
                <Button variant="outline-primary">Search</Button>
              </Col>
            </Row>
          </form>
        </Container>
      </Container>
    )
  }
}

export default SearchForm;