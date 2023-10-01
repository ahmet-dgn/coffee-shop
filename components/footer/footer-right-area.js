import classes from "./footer-right-area.module.css";
import Image from "next/image";
import Button from "../ui/button";

function FooterRightArea() {
  return (
    <div className={classes.footer_right_area}>
      {" "}
      <p className={classes.footer_right_area_title}>Contact info</p>
      <div className={classes.footer_right_area_adress_layout}>
        {" "}
        <Image
          src="/images/shop.svg"
          alt="Coffee Shop Icon"
          width={25}
          height={25}
        />
        <p className={classes.footer_right_area_adress}>
          608 Oakwood Avenue - New York
        </p>
      </div>
      <div className={classes.footer_right_area_adress_layout}>
        {" "}
        <Image
          src="/images/telephone.svg"
          alt="Telephone Icon"
          width={25}
          height={25}
        />
        <p className={classes.footer_right_area_adress}>212-624-3307</p>
      </div>
      <div className={classes.footer_right_area_adress_layout}>
        {" "}
        <Image
          src="/images/mailbox.svg"
          alt="Mailbox Icon"
          width={25}
          height={25}
        />
        <p className={classes.footer_right_area_adress}>info@caffeeshop.com</p>
      </div>
      <div className={classes.footer_right_area_adress_layout}>
        <Button> Get Location</Button>
      </div>
    </div>
  );
}

export default FooterRightArea;
