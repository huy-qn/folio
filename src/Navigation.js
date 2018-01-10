import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="list bg-blue pa3 flex justify-end mb3">
      <li><Link className="link white mr3" to="/">Home</Link></li>
      <li><Link className="link white" to="/new">New</Link></li>
    </nav>
  );
};

export default Navigation;
