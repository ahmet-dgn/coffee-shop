import classes from "./footer-left-area.module.css";
import Image from "next/image";

function FooterLeftArea() {
  return (
    <div className={classes.footer_left_area}>
      <Image src="/images/logo.png" alt="Coffee Logo" width={114} height={55} />
      <p className={classes.footer_left_area_about_us}>
        From our cup to yours, may your days be filled with warmth, laughter,
        and the lingering taste of memories brewed to perfection.
      </p>
      <div className={classes.footer_left_area_scoial_icons}>
        <Image
          className={classes.footer_left_area_scoial_icon}
          src="/images/facebook.svg"
          alt="Coffee Shop Facebook"
          width={25}
          height={25}
        />
        <Image
          className={classes.footer_left_area_scoial_icon}
          src="/images/tiktok.svg"
          alt="Coffee Shop Tiktok"
          width={25}
          height={25}
        />
        <Image
          className={classes.footer_left_area_scoial_icon}
          src="/images/twitter.svg"
          alt="Coffee Shop Twitter"
          width={25}
          height={25}
        />
        <Image
          className={classes.footer_left_area_scoial_icon}
          src="/images/youtube.png"
          alt="Coffee Shop Youtube"
          width={25}
          height={25}
        />
      </div>
    </div>
  );
}

export default FooterLeftArea;
