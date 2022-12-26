import './App.css';
import React from 'react';
import Header from './components/Header.jsx'
import SearchForm from './components/SearchForm';
import Container from 'react-bootstrap/Container';
import Result from './components/Result';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      API : "http://localhost:8000",
      results : [],
    };
    this.callAPI = this.callAPI.bind(this);
  }

  getDetails(id) {
    //TO_DO
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
      .then((data) => {
        let res = [];
        let endpoint = link.split('/')[3].split('?')[0];
        for (let i = 0; i < data.length; i++) {
          if (i === 0) {
            res.push(<h4 className='mt-4 text-start'>Search Results</h4>)
          }
          let result = <Result data={data[i]} endpoint={endpoint}/>;
          res.push(result);
        }
        this.setState({
          results : res
        });
      });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Container className='mt-4'>
          <Container>
            <SearchForm callAPI={this.callAPI}/>
            {this.state.results}
          </Container>
        </Container>
      </div>
    );
  }
};

export default App;
