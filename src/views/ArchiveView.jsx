import React from 'react';
import { getArchivedNotes } from '../utils/local-data';
import NotesList from '../components/NotesList';
import PropTypes from 'prop-types';

class ArchiveView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getArchivedNotes() || [],
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

HomeView.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ArchiveView;
