export function homePage() {
  if (document.querySelector("#header"))
    document.querySelector("#header").remove();
  if (document.querySelector("#main")) document.querySelector("#main").remove();
  const content = document.querySelector("#content");
  const header = document.createElement("div");
  const title = document.createElement("h1");
  const main = document.createElement("div");
  const intro = document.createElement("div");
  const p = document.createElement("p");
  header.id = "header";
  main.id = "main";

  title.innerText = "SHAWARMA METER";

  p.innerHTML =
    "Shawarma Meter provides you delicious shawarma with competetive prices and amazing offers .<br>Order now for free delivery!";

  header.appendChild(title);
  content.appendChild(header);
  intro.appendChild(p);
  content.appendChild(p);
}
