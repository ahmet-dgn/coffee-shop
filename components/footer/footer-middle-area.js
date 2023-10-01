import classes from "./footer-middle-area.module.css";

function FooterMiddleArea() {
  return (
    <div className={classes.footer_middle_area}>
      <p className={classes.footer_middle_area_title}>Working times</p>
      <div className={classes.footer_middle_area_item}>
        <p className={classes.footer_middle_area_item_day}>Monday</p>
        <div className={classes.footer_middle_area_item_dashes}></div>
        <p className={classes.footer_middle_area_item_time}>7am - 6pm</p>
      </div>
      <div className={classes.footer_middle_area_item}>
        <p className={classes.footer_middle_area_item_day}>Tuesday</p>
        <div className={classes.footer_middle_area_item_dashes}></div>
        <p className={classes.footer_middle_area_item_time}>7am - 6pm</p>
      </div>
      <div className={classes.footer_middle_area_item}>
        <p className={classes.footer_middle_area_item_day}>Wednesday</p>
        <div className={classes.footer_middle_area_item_dashes}></div>
        <p className={classes.footer_middle_area_item_time}>7am - 6pm</p>
      </div>
      <div className={classes.footer_middle_area_item}>
        <p className={classes.footer_middle_area_item_day}>Thursday</p>
        <div className={classes.footer_middle_area_item_dashes}></div>
        <p className={classes.footer_middle_area_item_time}>7am - 6pm</p>
      </div>
      <div className={classes.footer_middle_area_item}>
        <p className={classes.footer_middle_area_item_day}>Friday</p>
        <div className={classes.footer_middle_area_item_dashes}></div>
        <p className={classes.footer_middle_area_item_time}>7am - 6pm</p>
      </div>
      <div className={classes.footer_middle_area_item}>
        <p className={classes.footer_middle_area_item_day}>Saturday</p>
        <div className={classes.footer_middle_area_item_dashes}></div>
        <p className={classes.footer_middle_area_item_time}>8am - 6pm</p>
      </div>
      <div className={classes.footer_middle_area_item}>
        <p className={classes.footer_middle_area_item_day}>Sunday</p>
        <div className={classes.footer_middle_area_item_dashes}></div>
        <p className={classes.footer_middle_area_item_time}>Close</p>
      </div>
    </div>
  );
}
export default FooterMiddleArea;
