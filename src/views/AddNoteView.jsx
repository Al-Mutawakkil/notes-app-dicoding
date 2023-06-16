import NoteInputFormWrapper from '../components/NoteInputForm';
import React from 'react';
class AddNoteView extends React.Component {
  render() {
    return (
      <div className="add-new-page__container">
        <h1>Add New Note</h1>
        <NoteInputFormWrapper />
      </div>
    );
  }
}
export default AddNoteView;
