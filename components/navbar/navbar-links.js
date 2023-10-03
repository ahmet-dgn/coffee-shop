import classes from "./navbar-links.module.css";
import React, { useState } from "react";
import { useEffect } from "react";

function NavbarLinks() {
  const [isSet, setStatus] = useState(false);
  const handleScroll = () => {
    setStatus(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const menuClickHandler = () => {
    setStatus(!isSet);
  };

  return (
    <>
      <img
        onClick={menuClickHandler}
        className={classes.mobile_menu_icon}
        src="/images/mobile-menu-icon.svg"
        alt="Mobile Menu"
        width={34}
        height={23}
      />
      <ul
        className={
          !isSet
            ? classes.navbar_item_list
            : `${classes.navbar_item_list} ${classes.navbar_mobile_menu_active}`
        }
      >
        <li className={classes.scroll_link}>
          <a href="/">Home</a>
        </li>
        <li className={classes.scroll_link}>
          <a href="#our_story">About Us</a>
        </li>
        <li className={classes.scroll_link}>
          <a href="#menu">Menu</a>
        </li>
        <li className={classes.scroll_link}>
          <a href="#contact">Contact Us</a>
        </li>
      </ul>
    </>
  );
}

export default NavbarLinks;
