import Container from "../ui/container";
import Image from "next/image";
import classes from "./our-stroy.module.css";
import OurStoryTextArea from "./our-story-text-area";

function OurStory() {
  return (
    <Container>
      <section className={classes.our_story_area} id="our_story">
        <Image
          className={classes.our_story_image}
          src="/images/our-story-image.png"
          alt="Coffee"
          width={572}
          height={426}
        />
        <OurStoryTextArea />
      </section>
    </Container>
  );
}

export default OurStory;
