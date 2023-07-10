export function contactsPage() {
  if (document.querySelector("#header"))
    document.querySelector("#header").remove();
  if (document.querySelector("#main")) document.querySelector("#main").remove();

  const content = document.querySelector("#content");
  const header = document.createElement("div");
  const title = document.createElement("h1");
  const main = document.createElement("div");
  const h3 = document.createElement("h3");

  header.id = "header";
  main.id = "main";
  main.appendChild(h3);
  h3.textContent = "CONTACT US AT 055-555-555";

  title.innerText = "Contacts";

  header.appendChild(title);
  content.appendChild(header);
  content.appendChild(main);
}
