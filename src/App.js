import './App.css';
import React from 'react';
import Header from './components/Header.jsx'
import SearchForm from './components/SearchForm';
import Container from 'react-bootstrap/Container';

class App extends React.Component{
  callAPI (e) {
    console.log(e);
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Container className='mt-4'>
          <SearchForm />
        </Container>
      </div>
    );
  }
}

export default App;
