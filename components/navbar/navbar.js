import Image from "next/image";
import classes from "./navbar.module.css";
import NavbarLinks from "./navbar-links";
function Navbar() {
  return (
    <div className={`${classes.nabvar_layout} ${classes.container}`}>
      <Image src="/images/logo.png" alt="Logo" width={114} height={55} />
      <NavbarLinks />
    </div>
  );
}

export default Navbar;
