import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { getActiveNotes } from '../utils/local-data';
import NotesList from '../components/NotesList';

class HomeView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes() || [],
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

export default HomeView;
