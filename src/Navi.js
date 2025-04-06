import React from 'react';
import { Link } from 'react-router-dom';

const Navi = ({search,setSearch}) => {
  return (
    <nav className="navigation">
      <form className="searchForm" onSubmit={(e)=>e.preventDefault()}>
        <input 
          type="text" 
          id="search"
          placeholder="Search..." 
          value={search}
          onChange={(e)=> setSearch(e.target.value)}
        />
      </form>
      <ul className="flex space-x-6 text-blue-500 font-medium">
        <li><Link to="/">Home</Link></li>
        <li><Link to="post">Post</Link></li>
        <li><Link to="about">About</Link></li>
      </ul>
    </nav>
  );
};

export default Navi;

