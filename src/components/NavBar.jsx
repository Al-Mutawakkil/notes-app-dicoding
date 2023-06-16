import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }
  render() {
    return (
      <header>
        <nav className="navigation">
          <h1>
            <Link to="/">Notes</Link>
          </h1>
          <ul className="nav-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/archivednotes">Archived Notes</Link>
            </li>
            <li>
              <Link to="/addnote">Add Note</Link>
            </li>
          </ul>
          {/* <div className="nav-list-mobile">
            <ul
              className="nav-list-mobile-child"
              style={{ width: this.state.isOpen ? '70vw' : 0 }}
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/archivednotes">Archived Notes</Link>
              </li>
              <li>
                <Link to="/addnote">Add Note</Link>
              </li>
            </ul>
          </div> */}
        </nav>
      </header>
    );
  }
}

export default NavBar;
