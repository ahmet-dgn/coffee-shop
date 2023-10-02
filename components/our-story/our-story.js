import Container from "../ui/container";
import Image from "next/image";
import classes from "./our-stroy.module.css";
import OurStoryTextArea from "./our-story-text-area";

function OurStory() {
  return (
    <Container>
      <div className={classes.our_story_area}>
        <Image
          className={classes.our_story_image}
          src="/images/our-story-image.png"
          alt="Coffee"
          width={572}
          height={426}
        />
        <OurStoryTextArea />
      </div>
    </Container>
  );
}

export default OurStory;
