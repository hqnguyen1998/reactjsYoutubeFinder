import React, { Component } from 'react';

class SearchBar extends Component {
  state = { text: '' };

  handleInputOnChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.text);
  };

  render() {
    return (
      <div className='search-bar ui segment'>
        <form onSubmit={this.handleSubmit} className='ui form'>
          <div className='field'>
            <label htmlFor='search'>Video Search</label>
            <input
              type='text'
              value={this.state.text}
              placeholder='Search'
              id='search'
              onChange={this.handleInputOnChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
