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
  const bestSelling = document.createElement("div");
  const h3 = document.createElement("h3");
  const bestSellingItemsContainer = document.createElement("div");

  header.appendChild(title);
  content.appendChild(header);

  bestSelling.appendChild(h3);
  bestSelling.appendChild(bestSellingItemsContainer);

  main.appendChild(bestSelling);
  content.appendChild(main);

  header.id = "header";
  main.id = "main";
  bestSellingItemsContainer.id = "best-selling-items";
  bestSelling.id = "best-selling";

  title.innerText = "Menu";
  h3.textContent = "Best Selling";

  function createItem(img, price, name, description, sectionID) {
    const itemImage = new Image();
    const itemPrice = document.createElement("p");
    const itemName = document.createElement("h4");
    const itemDescription = document.createElement("p");
    const itemSection = document.querySelector("#" + sectionID);
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

  createItem(
    img0,
    "4$",
    "best meal ever",
    "best des ever",
    "best-selling-items",
    "item0"
  );
}
