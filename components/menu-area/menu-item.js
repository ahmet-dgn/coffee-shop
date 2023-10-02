import classes from "./menu-item.module.css";
import Image from "next/image";

function MenuItem(props) {
  const { title, price, img, desc } = props;
  return (
    <div className={classes.menu_item}>
      {" "}
      <Image
        className={classes.menu_item_image}
        src={img}
        alt="espresso"
        width={80}
        height={80}
      />
      <div className={classes.menu_item_text_area}>
        <div className={classes.menu_item_title_area}>
          <p className={classes.menu_item_title}>{title}</p>
          <p className={classes.menu_item_title_price}>{price}</p>
        </div>
        <p className={classes.menu_item_text_area_desc}>{desc}</p>
      </div>
    </div>
  );
}

export default MenuItem;
