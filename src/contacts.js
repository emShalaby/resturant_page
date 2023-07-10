export function contactsPage() {
  if (document.querySelector("#header"))
    document.querySelector("#header").remove();

  const content = document.querySelector("#content");
  const header = document.createElement("div");
  const title = document.createElement("h1");
  header.id = "header";

  title.innerText = "Contacts";

  header.appendChild(title);
  content.appendChild(header);
}
