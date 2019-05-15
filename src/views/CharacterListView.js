import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getCharacters } from "../actions";
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getCharacters()
  }

  render() {
    if (this.props.isLoading) {
      <h3>Characters are loading!</h3>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
  characters: state.charsReducer.characters,
  error: state.charsReducer.error,
  isLoading: state.charsReducer.isLoading
  }
};

export default connect(
  mapStateToProps,
  {getCharacters}
)(CharacterListView)
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean


