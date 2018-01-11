import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
  return (
    <nav className="bg-blue pa3 flex justify-end mb3">
      <Link className="link white mr3" to="/">Home</Link>
      {props.user ?
        <div>
          <Link className="link white mr3" to="/new">New</Link>
          <span className="link white" onClick={props.handleLogOut}>Log Out</span>
        </div>
        :
        <span className="link white" onClick={props.handleLogIn}>Login</span>
      }
    </nav>
  );
};

export default Navigation;

