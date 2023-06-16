import React from 'react';
import { getArchivedNotes } from '../utils/local-data';
import NotesList from '../components/NotesList';

class ArchiveView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getArchivedNotes() || [],
      keyword: props.defaultKeyword || '',
    };
  }

  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title
        .toLowerCase()
        .includes(this.state.keyword.toLowerCase());
    });

    return (
      <div className="container">
        <NotesList notes={notes} />
      </div>
    );
  }
}

export default ArchiveView;
