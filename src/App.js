import './App.css';
import React from 'react';
import Header from './components/Header.jsx'
import SearchForm from './components/SearchForm';
import Container from 'react-bootstrap/Container';

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      API : "http://localhost:8000"
    };
    this.callAPI = this.callAPI.bind(this);
  }
  callAPI (e) {
    let link = `${this.state.API}${e}`;
    console.log(link.toString());
    fetch(link, {
      method  : 'GET',
      headers : {
        'Content-Type': 'application/json'
      } 
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Container className='mt-4'>
          <SearchForm callAPI={this.callAPI}/>
        </Container>
      </div>
    );
  }
}

export default App;
