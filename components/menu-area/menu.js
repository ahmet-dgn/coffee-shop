import classes from "./menu.module.css";
import Container from "../ui/container";
import ContentTitle from "../ui/content-title";
import CategoryBtns from "./menu-category-btns";
import MenuItems from "./menu-items";

function Menu() {
  return (
    <div className={classes.menu_area}>
      <Container>
        <div className={classes.menu_area_layout}>
          <ContentTitle>
            <span className={classes.menu_title}>Our menu</span>
            <div className={classes.content_title_decoration}></div>
          </ContentTitle>
          <CategoryBtns />
          <MenuItems />
        </div>{" "}
      </Container>
    </div>
  );
}

export default Menu;
