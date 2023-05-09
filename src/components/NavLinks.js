import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const NavLinks = (props) => {
  return (
    <motion.ul className="menu-items" transition={{ delay: 0.05 }}>
      <motion.li
        transition={{ delay: 0.05 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <NavLink to="/" className="active-links">
          Home
        </NavLink>
      </motion.li>
      <motion.li
        transition={{ delay: 0.2 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <NavLink to="/reservations" className="active-links">
          Reservations
        </NavLink>
      </motion.li>
    </motion.ul>
  );
};

export default NavLinks;
