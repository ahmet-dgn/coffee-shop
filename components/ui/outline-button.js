import classes from "./outline-button.module.css";

function OutlineButton({ children }) {
  return (
    <button className={`${classes.outline_btn} ${classes.outline_btn_primary}`}>
      {children}
    </button>
  );
}

export default OutlineButton;
