import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import DropDown from './DropDown';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state  = {
      boost: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick  = this.handleClick.bind(this);
  }
  
  handleSubmit (event) {
    let endpoint = event.target.endpoint.value;
    let query    = event.target.query.value;
    let limit    = event.target.limit.value;
    let boost    = this.state.boost;
    let APIQuery = `/${endpoint}?q=${query}&boost=${boost}&limit=${limit}`;
    event.preventDefault();
    this.props.callAPI(APIQuery);
  }

  handleClick (e) {
    this.setState({boost: !this.state.boost});
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
              <input type="text" id='query' name='query' ></input>
            </Col>
            <Col>
              <label>Boost</label>
              <input type='checkbox' id='boost' name='boost' value={this.state.boost} onClick={this.handleClick}></input>
            </Col>
            <Col>
              <label>Number of Search Results</label>
              <DropDown for="limit" />
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