// import React from 'react';
import React, { Component } from 'react';

// Reactの全てのcomponentに適応するってこと！
// class base conponent
class SearchBar extends Component {
  constructor(props) {
    console.log(props)
    super(props);

    this.state = { term: '' };
  }

    render() {
      return(
        <div className="search_bar">
          <input
            className="search_bar_input"
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)} />
        </div>
      );
    }

    onInputChange(term) {
      this.setState({term});
      this.props.onSearchTermChange(term);
    }


}

// SearchBarを出力する
export default SearchBar;
