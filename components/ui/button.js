import classes from "./button.module.css";

function Button() {
  return (
    <button className={`${classes.btn} ${classes.btn_primary}`}>
      View Menu
    </button>
  );
}

export default Button;
