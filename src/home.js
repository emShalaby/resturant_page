export function homePage() {
  if (document.querySelector("#header"))
    document.querySelector("#header").remove();
  if (document.querySelector("#main")) document.querySelector("#main").remove();
  const content = document.querySelector("#content");
  const header = document.createElement("div");
  const title = document.createElement("h1");
  const main = document.createElement("div");

  header.id = "header";
  main.id = "main";

  title.innerText = "RESTURANT TITLE";

  header.appendChild(title);
  content.appendChild(header);
}
