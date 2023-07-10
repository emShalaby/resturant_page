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

  header.id = "header";
  main.id = "main";
  itemContainer1.id = "best-selling";

  title.innerText = "Menu";
  h3.textContent = "Best Selling";

  bestSelling.appendChild(h3);
  for (let i = 0; i < 2; i++) {
    const div = document.createElement("div");
    div.classList.add("menu-item");
    itemContainer1.appendChild(div);
  }
  bestSelling.appendChild(itemContainer1);
  header.appendChild(title);
  content.appendChild(header);
  main.appendChild(bestSelling);
  content.appendChild(main);
}
