import PropTypes from 'prop-types';

const DeleteButton = ({ onDeleteHandler, id }) => {
  return (
    <button className="delete-button" onClick={() => onDeleteHandler(id)}>
      DADA
    </button>
  );
};

DeleteButton.propTypes = {
  onDeleteHandler: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default DeleteButton;
