import React, { useState } from 'react';
import { FaSistrix } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';

const Navbar = ({ handleShow }) => {
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  return (
    <div className="headerWrap">
      <Container>
        <div className="contentWrap">
          <div>
            <h2 className="logo">LOGO</h2>
          </div>
          <div className="inputwrap">
            <input
              type="text"
              placeholder="Search by Title or Brand"
              className="searchInput"
              value={search}
              onChange={handleChange}
            />
            <FaSistrix className="search-icon" />
          </div>
          <div>
            <button className="add-product" onClick={handleShow}>
              Add Product
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
