import CardNote from './CardNote';
import PropTypes from 'prop-types';

const NotesList = ({ notes }) => {
  return notes.length > 0 ? (
    <div className="notes-list">
      {notes.map((note) => (
        <CardNote note={note} key={note.id} />
      ))}
    </div>
  ) : (
    <div className="notes-list-empty">
      <p>Tidak Ada Catatan</p>
    </div>
  );
};

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NotesList;
