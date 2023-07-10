import img0 from "./chicken-pita-sandwich.png";
import img1 from "./chicken-sajbox.png";
export function menuPage() {
  if (document.querySelector("#header"))
    document.querySelector("#header").remove();
  if (document.querySelector("#main")) document.querySelector("#main").remove();

  const content = document.querySelector("#content");
  const header = document.createElement("div");
  const title = document.createElement("h1");
  const main = document.createElement("div");

  title.textContent = "Menu";
  main.id = "main";
  header.id = "header";
  header.appendChild(title);
  content.appendChild(header);
  content.appendChild(main);

  function createSection(ID, title) {
    const section = document.createElement("div");
    const h3 = document.createElement("h3");
    const sectionItemsContainer = document.createElement("div");
    section.appendChild(h3);
    section.appendChild(sectionItemsContainer);
    section.id = ID;
    section.classList.add("section");
    sectionItemsContainer.id = ID + "-items";
    sectionItemsContainer.classList.add("section-items-container");
    main.appendChild(section);
    h3.textContent = title;
  }

  function createItem(img, price, name, description, sectionItemsContainerID) {
    const itemImage = new Image();
    const itemPrice = document.createElement("p");
    const itemName = document.createElement("h4");
    const itemDescription = document.createElement("p");
    const itemSection = document.querySelector("#" + sectionItemsContainerID);
    const text = document.createElement("div");
    const item = document.createElement("div");
    item.classList.add("menu-item");
    itemPrice.textContent = price;
    itemPrice.classList.add("price");
    itemName.textContent = name;
    itemDescription.textContent = description;
    itemImage.src = img;

    item.appendChild(itemImage);
    item.appendChild(text);
    item.appendChild(itemPrice);

    text.appendChild(itemName);
    text.appendChild(itemDescription);
    itemSection.appendChild(item);
  }

  createSection("best-selling", "Best Selling");
  createSection("shawarma", "Shawarma");
  createItem(
    img0,
    "3$",
    "Chicken Shawarma In Pita Bread Sandwich",
    "Chicken shawerma, pickles, French fries and garlic mustard sauce served in pita bread",
    "best-selling-items"
  );
  createItem(
    img1,
    "5$",
    "Chicken Shawarma In Saj Box",
    "Chicken shawarma in saj bread cut in 6 pieces, served with French fries and drink, enough for 1 person",
    "best-selling-items"
  );
}
