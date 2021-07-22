import menu from "./menu.js";

const categories = ["All", ...new Set(menu.map(menu => menu.category))];

const section = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

btnContainer.innerHTML  = categories.map((category) => {
  return `<button class="btn btn-outline-dark btn-item" data-id=${category}>${category}</button>`}).join("");

const categoryList = () => {
  const filterBtns = document.querySelectorAll(".btn-item");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter((menuItem) => {
        if (menuItem.category === category) {
          return menuItem;
        }});
      category === "All" ? menuList(menu) : menuList(menuCategory);
    });
  });
};

const menuList = (menuItems) => {
  let displayMenu = menuItems.map((item) => {
    return `<div class="menu-items col-lg-6 col-sm-12">
              <img src=${item.img} alt=${item.title} class="photo"/>
              <div class="menu-info">
                <div class="menu-title">
                  <h4>${item.title}</h4>
                  <h4 class="price">${item.price}</h4>
                </div>
                <div class="menu-text">${item.desc}</div>
              </div>
            </div>`;
          });
  section.innerHTML = displayMenu.join("");
};

menuList(menu);
categoryList();