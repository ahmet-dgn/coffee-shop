import Image from "next/image";
import classes from "./navbar.module.css";
import NavbarLinks from "./navbar-links";
import Container from "../ui/container";

function Navbar() {
  return (
    <Container>
      <div className={classes.navbar_layout}>
        <Image src="/images/logo.png" alt="Logo" width={114} height={55} />
        <NavbarLinks />
      </div>
    </Container>
  );
}

export default Navbar;
