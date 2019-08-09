import React, { Component } from 'react';

import './Search.css';

class Search extends Component {
  
  render() {
    const {
    	children,
    	onChange,
    	value,
    	onSubmit,
    } = this.props;

	return (
    <div className='input-wrapper'>
      <form onSubmit={onSubmit}>
        <div className='input-form-wrapper'>
          <input 
            onChange={onChange}
            value={value}
            className='input-text'
          />
          <button className='search-btn' type='submit'> 
            {children}
          </button>
        </div>
      </form>
    </div>
	)
  }
}

export default Search;