import Image from "next/image";
import classes from "./navbar.module.css";
function Navbar() {
  return (
    <div className={classes.nabvar_layout}>
      <Image src="/images/logo.png" alt="Logo" width={114} height={55} />
    </div>
  );
}

export default Navbar;
