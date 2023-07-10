export function homePage() {
  const content = document.querySelector("#content");
  const header = document.createElement("div");
  const title = document.createElement("h1");

  title.innerText = "RESTURANT TITLE";

  header.appendChild(title);
  content.appendChild(header);
}
