import React, {Component} from 'react';
import {connect} from 'react-redux';
import 'genre-screen.css';

class GenreScreen extends Components(){
  render(){
    return(
      <h1>Genres will be here</h1>
    );
  }
}

function mapStateToProps(state){
  return {};
}
export default connect(mapStateToProps)(GenreScreen);
