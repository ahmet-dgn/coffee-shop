import classes from "./footer-right-area.module.css";

function FooterRightArea() {
  return (
    <div className={classes.footer_right_area} id="contact">
      {" "}
      <p className={classes.footer_right_area_title}>Contact info</p>
      <div className={classes.footer_right_area_adress_layout}>
        {" "}
        <img
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
        <img
          src="/images/telephone.svg"
          alt="Telephone Icon"
          width={25}
          height={25}
        />
        <p className={classes.footer_right_area_adress}>212-624-3307</p>
      </div>
      <div className={classes.footer_right_area_adress_layout}>
        <img
          src="/images/mailbox.svg"
          alt="Mailbox Icon"
          width={25}
          height={25}
        />
        <p className={classes.footer_right_area_adress}>info@caffeeshop.com</p>
      </div>
      <div className={classes.footer_right_area_adress_layout}>
        <a
          className={classes.footer_btn}
          href="https://www.google.com/maps/search/608+Oakwood+Avenue+-+New+York/@40.6409952,-74.1275258,12z/data=!3m1!4b1?entry=ttu"
          target="_blank"
        >
          Get Location
        </a>
      </div>
    </div>
  );
}

export default FooterRightArea;
