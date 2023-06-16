import { BiArchiveIn, BiArchiveOut } from 'react-icons/bi';
import PropTypes from 'prop-types';

const ArchiveButton = ({ id, archived, onClickHandler }) => {
  return (
    <>
      {archived ? (
        <BiArchiveOut
          className="action"
          size={40}
          color="red"
          onClick={() => onClickHandler(id, archived)}
        />
      ) : (
        <BiArchiveIn
          className="action"
          size={40}
          color="blue"
          onClick={() => onClickHandler(id, archived)}
        />
      )}
    </>
  );
};
ArchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};

export default ArchiveButton;
