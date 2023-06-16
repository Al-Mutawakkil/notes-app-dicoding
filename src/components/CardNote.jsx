import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../utils';

const CardNote = ({ note }) => {
  return (
    <Link to={`/notes/${note.id}`} className="note-item">
      <div>
        <p className="note-item__title">{note.title}</p>
        <p className="note-item__createdAt">
          {showFormattedDate(note.createdAt)}
        </p>
        <p className="note-item__body">{note.body}</p>
      </div>
    </Link>
  );
};

CardNote.propTypes = {
  note: PropTypes.object.isRequired,
};

export default CardNote;
