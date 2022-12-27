import React from "react"
import Container from 'react-bootstrap/Container';


class Details extends React.Component {
  
  getIncomingLinks() {
    let links = [];
    for (let i = 0; i < this.props.data.incomingLinks.length; i++){
      links.push(
        <ul key={i}>
          <li>
            <a href={this.props.data.incomingLinks[i]}>{this.props.data.incomingLinks[i]}</a>
          </li>
        </ul>
      );
    }
    return links;
  }

  getOutgoingLinks() {
    let links = [];
    for (let i = 0; i < this.props.data.outgoingLinks.length; i++){
      links.push(
        <ul key={i}>
          <li>
            <a href={this.props.data.outgoingLinks[i]}>{this.props.data.outgoingLinks[i]}</a>
          </li>
        </ul>
      );
    }
    return links;
  }

  getWordOccurence() {
    let words    = [];
    for (let i   = 0; i < this.props.data.words.length; i++) {
      let word   = this.props.data.words[i].word;
      let occurs = this.props.data.words[i].occurs;
      words.push(
        <ul key={i}>
          <li>{word} : occurs {occurs} times</li>
        </ul>
      );
    }
    return words;
  }

  render() {
    return (
      <Container className="mt-4 text-start">
        <h3>{this.props.data.title}</h3>
        <table className="table">
          <tbody>
            <tr>
              <th>URL:</th>
              <td>
                <a href={this.props.data.url}>{this.props.data.url}</a>
              </td>
            </tr>
            <tr>
              <th>Incoming Links:</th>
              <td>
                {this.getIncomingLinks()}
              </td>
            </tr>
            <tr>
              <th>Outgoing Links:</th>
              <td>
                {this.getOutgoingLinks()}
              </td>
            </tr>
            <tr>
              <th>Word Occurences:</th>
              <td>
                {this.getWordOccurence()}
              </td>
            </tr>
          </tbody>
        </table>
      </Container>
    )
  }
}

export default Details;