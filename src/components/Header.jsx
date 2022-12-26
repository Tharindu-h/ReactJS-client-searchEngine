import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';

class Header extends React.Component {
  render() {
    return(
      <header className='site-header'>
        <Navbar bg='dark' variant='dark'>
          <Container>
            <Navbar.Brand href='/'>Search Engine</Navbar.Brand>
          </Container>
        </Navbar>
      </header>
    )
  }
}

export default Header;