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
  const itemContainer1 = document.createElement("div");

  bestSelling.appendChild(h3);
  bestSelling.appendChild(itemContainer1);
  header.appendChild(title);
  content.appendChild(header);
  main.appendChild(bestSelling);
  content.appendChild(main);

  header.id = "header";
  main.id = "main";
  itemContainer1.id = "best-selling";

  title.innerText = "Menu";
  h3.textContent = "Best Selling";

  for (let i = 0; i < 2; i++) {
    const div = document.createElement("div");
    div.classList.add("menu-item");
    div.id = "item" + i;
    itemContainer1.appendChild(div);
  }
  const item0 = document.querySelector("#item0");
  const item1 = document.querySelector("#item1");
}
