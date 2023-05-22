import React, { useState } from "react";
import Navbar from './Navbar';
import HeaderModal from './HeaderModal';

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Navbar handleShow={handleShow}/>
      <HeaderModal show={show} handleClose={handleClose}/>
    </div>
  );
}
export default Header;