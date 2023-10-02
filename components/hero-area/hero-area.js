import classes from "./hero-area.module.css";
import HeroAreaText from "./hero-area-text";
import Image from "next/image";
import Container from "../ui/container";

function HeroArea() {
  return (
    <section className={classes.hero_area_layout_bg}>
      <Container>
        <div className={classes.hero_area_layout}>
          <HeroAreaText />
          <Image
            className={classes.hero_image}
            src="/images/hero-area-image.png"
            alt="Coffee"
            width={652}
            height={561}
          />
        </div>
      </Container>
    </section>
  );
}

export default HeroArea;
