import classes from "./hero-area.module.css";
import HeroAreaText from "./hero-area-text";
import Image from "next/image";

function HeroArea() {
  return (
    <div className={classes.hero_area_layout_bg}>
      <div className={`${classes.hero_area_layout} ${classes.container}`}>
        <HeroAreaText />
        <Image
          src="/images/hero-area-image.png"
          alt="Coffee"
          width={652}
          height={561}
        />
      </div>
    </div>
  );
}

export default HeroArea;
