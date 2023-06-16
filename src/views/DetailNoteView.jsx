import { useNavigate, useParams } from 'react-router-dom';
import {
  deleteNote,
  unarchiveNote,
  archiveNote,
  getNote,
} from '../utils/local-data';
import React from 'react';
import { showFormattedDate } from '../utils';
import DeleteButton from '../components/DeleteButton';
import ArchiveButton from '../components/ArchiveButton';

const DetailNoteViewWrapper = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const onDeleteHandler = (id) => {
    deleteNote(id);
    navigate('/');
  };

  const onArchiveHandler = (id, archived) => {
    if (archived) {
      unarchiveNote(id);
      console.log('UNARCHIVED');
    } else {
      archiveNote(id);
      console.log('ARCHIVED');
    }

    navigate('/');
  };

  return (
    <DetailNoteView
      id={id}
      onDeleteHandler={onDeleteHandler}
      onArchiveHandler={onArchiveHandler}
    />
  );
};

class DetailNoteView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(this.props.id),
    };
  }

  render() {
    return (
      <div className="detail-page">
        <h1 className="detail-page__title">{this.state.note.title}</h1>
        <p className="detail-page__createdAt">
          {showFormattedDate(this.state.note.createdAt)}
        </p>
        <p className="detail-page__body">{this.state.note.body}</p>
        <div className="detail-page__action">
          <DeleteButton
            id={this.state.note.id}
            onDeleteHandler={this.props.onDeleteHandler}
          />
          <ArchiveButton
            id={this.state.note.id}
            archived={this.state.note.archived}
            onClickHandler={this.props.onArchiveHandler}
          />
        </div>
      </div>
    );
  }
}
export default DetailNoteViewWrapper;
