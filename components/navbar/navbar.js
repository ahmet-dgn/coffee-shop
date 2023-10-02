import Image from "next/image";
import classes from "./navbar.module.css";
import NavbarLinks from "./navbar-links";
import Container from "../ui/container";

function Navbar() {
  return (
    <Container>
      <div className={classes.navbar_layout}>
        <Image src="/images/logo.png" alt="Logo" width={114} height={55} />
        <Image
          className={classes.mobile_menu_icon}
          src="/images/mobile-menu-icon.svg"
          alt="Mobile Menu"
          width={34}
          height={23}
        />
        <NavbarLinks />
      </div>
    </Container>
  );
}

export default Navbar;
