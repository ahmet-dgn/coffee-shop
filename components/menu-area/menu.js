import classes from "./menu.module.css";
import Container from "../ui/container";
import ContentTitle from "../ui/content-title";
import CategoryBtns from "./menu-category-btns";
import MenuItems from "./menu-items";
import React, { useState } from "react";

function Menu() {
  const [isCatName, setCatName] = useState("all");
  function categoryBtnClickHandler(category) {
    setCatName(category);
  }

  return (
    <section className={classes.menu_area} id="menu">
      <Container>
        <div className={classes.menu_area_layout}>
          <ContentTitle>
            <span className={classes.menu_title}>Our menu</span>
          </ContentTitle>
          <div className={classes.content_title_decoration}></div>
          <CategoryBtns catBtns={categoryBtnClickHandler} />
          <MenuItems itemCatName={isCatName} />
        </div>{" "}
      </Container>
    </section>
  );
}

export default Menu;
