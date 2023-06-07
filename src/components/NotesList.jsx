import CardNote from './CardNote';
import PropTypes from 'prop-types';

const NotesList = ({ notes }) => {
  return (
    <div className="notes-list">
      {notes.length > 0 ? (
        notes.map((note) => <CardNote note={note} />)
      ) : (
        <p className="not-found-message">Tidak Ada Catatan</p>
      )}
    </div>
  );
};

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NotesList;
