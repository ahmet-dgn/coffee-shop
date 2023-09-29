import classes from "./hero-area-text.module.css";
import Button from "../ui/button";

function HeroAreaText() {
  return (
    <div>
      <p className={classes.hero_area_title}>
        Sip, Smile, <br />
        Repeat
      </p>
      <p className={classes.hero_area_desc}>
        For those who believe in the power of a perfectly brewed cup, we're here
        to make your mornings extraordinary.
      </p>
      <Button />
    </div>
  );
}

export default HeroAreaText;
