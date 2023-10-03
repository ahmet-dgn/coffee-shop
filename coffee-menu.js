const menu = [
  {
    id: 1,
    title: "Espresso",
    category: "coffee",
    price: 4.99,
    img: "/images/menu-images/espresso.png",
    desc: `Water, Brewed Espresso.`,
  },
  {
    id: 2,
    title: "Latte",
    category: "coffee",
    price: 6.99,
    img: "/images/menu-images/latte.png",
    desc: `Espresso and steamed milk. `,
  },
  {
    id: 3,
    title: "Cappuccino",
    category: "coffee",
    price: 6.99,
    img: "/images/menu-images/cappuccino.png",
    desc: `Espresso and steamed milk topped with a deep layer of foam. `,
  },
  {
    id: 4,
    title: "Turkey Bacon, Egg & Cheddar Mini",
    category: "breakfast",
    price: 8.99,
    img: "/images/menu-images/turkey-bacon-egg-cheddar-mini.png",
    desc: `Turkey bacon, cheddar cheese, and a cage-free egg on toasted ciabatta.`,
  },
  {
    id: 5,
    title: "Lumberjack",
    category: "breakfast",
    price: 8.99,
    img: "/images/menu-images/lumberjack.png",
    desc: `Cherrywood smoked ham, bacon, cheddar cheese and two cage-free fried eggs with peppered cream cheese on a hash brown bagel.`,
  },
  {
    id: 6,
    title: "Chicken Chorizo Burrito",
    category: "breakfast",
    price: 8.99,
    img: "/images/menu-images/chicken-chorizo-burrito.png",
    desc: `Chicken chorizo, Swiss & jack cheese, cage-free scrambled eggs, diced potatoes & green chiles, wrapped in a red pepper tortilla.`,
  },
  {
    id: 7,
    title: "Blueberry Almond Oatmeal",
    category: "oatmeal",
    price: 8.5,
    img: "/images/menu-images/blueberry-almond-oatmeal.png",
    desc: `Filling and cozy whole grain oats topped with blueberries and honey-roasted almonds.`,
  },
  {
    id: 8,
    title: "Classic Oatmeal",
    category: "oatmeal",
    price: 7.3,
    img: "/images/menu-images/classic-oatmeal.png",
    desc: `A filling, hearty blend of whole grain oats.`,
  },
  {
    id: 9,
    title: "Maple Brown Sugar Oatmeal",
    category: "oatmeal",
    price: 8.99,
    img: "/images/menu-images/maple-brown-sugar-oatmeal.png",
    desc: `Whole grain oats with maple syrup; topped with a crunchy maple brown sugar crumble.`,
  },
  {
    id: 10,
    title: "Blueberry Almond Overnight Oats",
    category: "provisions",
    price: 6.33,
    img: "/images/menu-images/blueberry-almond-overnight-oats.png",
    desc: `Overnight who grain oats topped with chia seeds, almond milk, blueberries, honey-roasted almonds and a hint of honey.`,
  },
  {
    id: 11,
    title: "Mango Coconut Chia Parfait",
    category: "provisions",
    price: 7.99,
    img: "/images/menu-images/mango-coconut-chia-parfait.png",
    desc: `A yogurt parfait with chia seeds, diced mango, dried coconut and a hint of honey.`,
  },
  {
    id: 12,
    title: "Mixed Berry Yogurt Parfait",
    category: "provisions",
    price: 8.99,
    img: "/images/menu-images/mixed-berry-yogurt-parfait.png",
    desc: `A yogurt parfait with strawberries, blueberries, and cinnamon almond granola.`,
  },
];

export function getAllMenu() {
  return menu;
}

export function filterByCategory(menuCategory) {
  const filteredData = menu.filter((item) => item.category === menuCategory);
  if (menuCategory === "all") {
    return getAllMenu();
  } else {
    return filteredData;
  }
}
