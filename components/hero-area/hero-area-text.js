import classes from "./hero-area-text.module.css";

function HeroAreaText() {
  return (
    <div className={classes.hero_text_area}>
      <p className={classes.hero_area_title}>
        Sip, Smile, <br />
        Repeat
      </p>
      <p className={classes.hero_area_desc}>
        For those who believe in the power of a perfectly brewed cup, we're here
        to make your mornings extraordinary.
      </p>
      <a className={classes.hero_area_btn} href="#menu">
        View Menu
      </a>
    </div>
  );
}

export default HeroAreaText;
