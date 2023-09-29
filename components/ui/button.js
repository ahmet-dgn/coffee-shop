import classes from "./button.module.css";

function Button({ children }) {
  return (
    <button className={`${classes.btn} ${classes.btn_primary}`}>
      {children}
    </button>
  );
}

export default Button;
