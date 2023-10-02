import classes from "./menu-items.module.css";
import { filterByCategory } from "@/coffee-menu";
import MenuItem from "./menu-item";

function MenuItems(props) {
  const categoryBtnsName = props.itemCatName;
  const coffeeMenu = filterByCategory(categoryBtnsName);
  console.log(categoryBtnsName);
  return (
    <div className={classes.menu_items_area}>
      {coffeeMenu.map((event) => (
        <MenuItem
          key={event.id}
          title={event.title}
          category={event.category}
          price={event.price}
          img={event.img}
          desc={event.desc}
        />
      ))}
    </div>
  );
}

export default MenuItems;
