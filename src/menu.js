import img0 from "./chicken-pita-sandwich.png";
import img1 from "./chicken-sajbox.png";
import img2 from "./beef-shawarma-pita.png";
import img3 from "./chicken-shawarma-fattah.png";
import img4 from "./beef-shawarma-fattah.png";
import img5 from "./chicken-shawarma-samoun.png";
import img6 from "./beef-shawarma-samoun.png";
import img7 from "./img-placeholder.svg";
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
  createSection("extra", "Extra");
  createItem(
    img0,
    "$3",
    "Chicken Shawarma In Pita Bread Sandwich",
    "Chicken shawerma, pickles, French fries and garlic mustard sauce served in pita bread",
    "best-selling-items"
  );
  createItem(
    img1,
    "$5",
    "Chicken Shawarma In Saj Box",
    "Chicken shawarma in saj bread cut in 6 pieces, served with French fries and drink, enough for 1 person",
    "best-selling-items"
  );
  createItem(
    img2,
    "$3",
    "Beef Shawarma In Pita Bread Sandwich",
    "Sliced ​​meat shawerma mixed with tahini, tomatoes, pickles, parsley, onions and served in pita bread",
    "shawarma-items"
  );
  createItem(
    img3,
    "Price on Selection",
    "Chicken Shawarma Fattah",
    "Chicken Shawarma Fattah",
    "shawarma-items"
  );
  createItem(
    img4,
    "Price on Selection",
    "Beef Shawarma Fattah",
    "Beef Shawarma Fattah",
    "shawarma-items"
  );
  createItem(
    img5,
    "$6",
    "Chicken Shawarma in Samoun Bread",
    "Chicken shawerma, romaine lettuce, pickles and garlic sauce",
    "shawarma-items"
  );
  createItem(
    img6,
    "$7",
    "Beef Shawarma in Samoun Bread",
    "Beef Shawarma, tomatoes, romaine lettuce, pickles and tahina sauce",
    "shawarma-items"
  );
  createItem(img7, "$0.50", " Small garlic cup", "", "extra-items");
  createItem(img7, "$0.50", " Small garlic cup mexican", "", "extra-items");
  createItem(img7, "$0.50", " Small cup tahina", "", "extra-items");
  createItem(img7, "$0.75", " Big garlic cup", "", "extra-items");
  createItem(img7, "$0.75", " Big garlic cup mexican", "", "extra-items");
  createItem(img7, "$0.75", " Big cup tahina", "", "extra-items");
}
