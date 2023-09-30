import classes from "./menu-category-btns.module.css";
import OutlineButton from "../ui/outline-button";

function CategoryBtns() {
  return (
    <div className={classes.category_btns}>
      <OutlineButton>All</OutlineButton>
      <OutlineButton>Coffee</OutlineButton>
      <OutlineButton>Breakfast</OutlineButton>
      <OutlineButton>Oatmeal</OutlineButton>
      <OutlineButton>Provisions</OutlineButton>
    </div>
  );
}

export default CategoryBtns;
