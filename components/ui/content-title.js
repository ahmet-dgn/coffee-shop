import classes from "./content-title.module.css";
function ContentTitle({ children }) {
  return (
    <div className={classes.content_title_area}>
      <p className={classes.content_title}>{children}</p>
    </div>
  );
}

export default ContentTitle;
