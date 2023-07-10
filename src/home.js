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
  const p2 = document.createElement("p");

  header.id = "header";
  main.id = "main";

  title.innerText = "Shawarma Corner ";

  p.innerHTML =
    "Shawarma Corner provides you delicious shawarma with competetive prices and amazing offers .<br>Order now for free delivery!";

  p2.innerHTML = "<b>OPEN 24/7</b> ";
  header.appendChild(title);
  content.appendChild(header);
  intro.appendChild(p);
  intro.appendChild(p2);
  main.appendChild(intro);
  content.appendChild(main);
}
