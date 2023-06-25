import React from 'react';
import { getActiveNotes } from '../utils/local-data';
import NotesList from '../components/NotesList';
import PropTypes from 'prop-types';

class HomeView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes() || [],
    };
  }

  render() {
    return (
      <div className="container">
        <NotesList notes={this.state.notes} />
      </div>
    );
  }
}

export default HomeView;
