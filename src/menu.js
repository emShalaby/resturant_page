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
  header.id = "header";
  main.id = "main";

  title.innerText = "Menu";
  h3.textContent = "Best Selling";
  bestSelling.appendChild(h3);
  header.appendChild(title);
  content.appendChild(header);
  main.appendChild(bestSelling);
  content.appendChild(main);
}
