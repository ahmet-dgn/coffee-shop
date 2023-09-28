import classes from "./outline-button.module.css";

function OutlineButton() {
  return (
    <button className={`${classes.outline_btn} ${classes.outline_btn_primary}`}>
      Coffee
    </button>
  );
}

export default OutlineButton;
