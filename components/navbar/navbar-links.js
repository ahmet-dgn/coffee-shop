import classes from "./navbar-links.module.css";
import React, { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

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
      <Image
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
          <Link href="/">Home</Link>
        </li>
        <li className={classes.scroll_link}>
          <Link href="#our_story">About Us</Link>
        </li>
        <li className={classes.scroll_link}>
          {" "}
          <Link href="#menu">Menu</Link>
        </li>
        <li className={classes.scroll_link}>
          {" "}
          <Link href="#contact">Contact Us</Link>
        </li>
      </ul>
    </>
  );
}

export default NavbarLinks;
