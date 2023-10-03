import classes from "./navbar.module.css";
import NavbarLinks from "./navbar-links";
import Container from "../ui/container";

function Navbar() {
  return (
    <Container>
      <nav className={classes.navbar_layout}>
        <a href="/" className={classes.navbar_logo}>
          <img src="/images/logo.svg" alt="Logo" width={114} height={55} />
        </a>

        <NavbarLinks />
      </nav>
    </Container>
  );
}

export default Navbar;
