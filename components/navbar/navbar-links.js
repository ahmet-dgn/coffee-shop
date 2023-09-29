import classes from "./navbar-links.module.css";

function NavbarLinks() {
  return (
    <ul className={classes.navbar_item_list}>
      <li>Home</li>
      <li>About Us</li>
      <li>Menu</li>
      <li>Contact Us</li>
    </ul>
  );
}

export default NavbarLinks;
