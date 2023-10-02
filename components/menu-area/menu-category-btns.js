import classes from "./menu-category-btns.module.css";

function CategoryBtns(props) {
  function catBtnHandler(btn) {
    props.catBtns(btn);
  }
  return (
    <div className={classes.category_btns}>
      <button
        onClick={() => catBtnHandler("all")}
        className={`${classes.outline_btn} ${classes.outline_btn_primary}`}
      >
        All
      </button>
      <button
        onClick={() => catBtnHandler("coffee")}
        className={`${classes.outline_btn} ${classes.outline_btn_primary}`}
      >
        Coffee
      </button>
      <button
        onClick={() => catBtnHandler("breakfast")}
        className={`${classes.outline_btn} ${classes.outline_btn_primary}`}
      >
        Breakfast
      </button>
      <button
        onClick={() => catBtnHandler("oatmeal")}
        className={`${classes.outline_btn} ${classes.outline_btn_primary}`}
      >
        Oatmeal
      </button>
      <button
        onClick={() => catBtnHandler("provisions")}
        className={`${classes.outline_btn} ${classes.outline_btn_primary}`}
      >
        Provisions
      </button>
    </div>
  );
}

export default CategoryBtns;
