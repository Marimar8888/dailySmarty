import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Logo from './logo';
import RecentPosts from './recentPosts';
import SearchBar from './searchBar';


class Home extends Component {

  handleSearchBarSubmit(query) {
    console.log('trying to handle submit for query', query);
    this.props.fetchPostsWithQuery(query);
    this.props.history.push('/results');
  }

  render() {
    return (
      <div>
        <div>
          <Logo />
          <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)} />
          <RecentPosts />
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(Home);
