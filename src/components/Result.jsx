import React from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

class Result extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      API : `http://localhost:8000/${this.props.endpoint}/${this.props.data._id}`
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.getDetails(this.state.API);
    e.preventDefault();
  }

  render() {
    return (
      <Container className="mt-2 text-start">
        <Card>
          <Card.Body>
            <h3 className="card-title">{this.props.data.title}</h3>
            <p className="card-text">Page Rank Score - {this.props.data.pageRank}</p>
            <a className="card-title" href={this.props.data.url}>Go to page</a>
            <a className="card-body" href="#" onClick={this.handleClick}>See Page Information</a>
          </Card.Body>
        </Card>
      </Container>
    )
  }
};

export default Result;