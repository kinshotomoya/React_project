// import React from 'react';
import React, { Component } from 'react';

// Reactの全てのcomponentに適応するってこと！
// class base conponent
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: 'sss' };
  }

    render() {
      return(
        <div>
          <input
            value={this.state.term}
            onChange={event => this.setState({ term: event.target.value })} />
        </div>
      );
    }
ss
}

// SearchBarを出力する
export default SearchBar;
