import React from 'react';
import { useNavigate } from 'react-router-dom';
import { addNote } from '../utils/local-data';
import PropTypes from 'prop-types';

const NoteInputFormWrapper = () => {
  const navigate = useNavigate();

  const onSubmitHandler = (e, state) => {
    e.preventDefault();

    addNote(state);

    navigate('/');
  };

  return <NoteInputForm onSubmitHandler={onSubmitHandler} />;
};

class NoteInputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    };

    this.onTitleChangedHandler = this.onTitleChangedHandler.bind(this);
    this.onBodyChangedHandler = this.onBodyChangedHandler.bind(this);
  }

  onTitleChangedHandler(e) {
    this.setState(() => {
      return {
        title: e.target.value,
      };
    });
  }

  onBodyChangedHandler(e) {
    this.setState(() => {
      return {
        body: e.target.value,
      };
    });
  }

  render() {
    return (
      <form
        className="add-new-page__input"
        onSubmit={(e) => this.props.onSubmitHandler(e, this.state)}
      >
        <input
          type="text"
          placeholder="Input Title here..."
          onChange={this.onTitleChangedHandler}
          required
        />
        <textarea
          cols="30"
          rows="10"
          placeholder="Input Body Here..."
          onChange={this.onBodyChangedHandler}
          required
        ></textarea>
        <button>Add Note</button>
      </form>
    );
  }
}
NoteInputForm.propTypes = {
  onSubmitHandler: PropTypes.func.isRequired,
};

export default NoteInputFormWrapper;
