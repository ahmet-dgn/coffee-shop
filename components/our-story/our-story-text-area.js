import ContentTitle from "../ui/content-title";
import classes from "./our-story-text-area.module.css";

function OurStoryTextArea() {
  return (
    <div className={classes.our_text_area}>
      {" "}
      <ContentTitle>Our story</ContentTitle>
      <p className={classes.our_story_desc}>
        Nestled in a charming corner, 'Mornings Brew' unfurled its inviting
        aroma. A haven where strangers became friends, laptops birthed novels,
        and first glances kindled love stories. From dawn to dusk, it brewed
        more than coffee—it brewed moments of connection that warmed the soul.
      </p>
    </div>
  );
}

export default OurStoryTextArea;
