import React from 'react';
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
    let endpoint = event.target.endpoint.value === "fruits/" ? event.target.endpoint.value : "personal"
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
      <form className='row' onSubmit={this.handleSubmit}>
        <label className='col-sm-6 col-lg-2 col-form-label'>Search Database</label>
        <div className='col-sm-10 col-lg-2'>
          <input className='form-control' type="text" id='query' name='query'></input>
        </div>
        <label className='col-sm-6 col-lg-1 col-form-label'>Boost</label>
        <div className='col-sm-10 col-lg-1'>
          <input className='form-check-input' type='checkbox' id='boost' name='boost' value={this.state.boost} onClick={this.handleClick}></input>
        </div>
        <label className='col-sm-6 col-lg-2 col-form-label'>Number of Search Results</label>
        <div className='col-sm-10 col-lg-1'>
          <DropDown for="limit" />
        </div>
        <label className='col-sm-6 col-lg-1 col-form-label'>Endpoint</label>
        <div className='col-sm-10 col-lg-1'>
          <DropDown for="endpoint" />
        </div>
        <div className='col-sm-10 col-lg-1'>
          <Button variant="outline-primary" type='submit'>Search</Button>
        </div>
      </form>
    )
  }
}

export default SearchForm;