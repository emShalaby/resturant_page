export function labelsLoad(labelStr) {
  const content = document.querySelector("#content");
  const container = document.createElement("div");
  const home = document.createElement("div");
  const menu = document.createElement("div");
  const contacts = document.createElement("div");
  const containerObject = { home, menu, contacts };
  home.textContent = "home";
  menu.textContent = "menu";
  contacts.textContent = "contacts";

  container.appendChild(home);
  container.appendChild(menu);
  container.appendChild(contacts);

  content.appendChild(container);

  containerObject[labelStr].style.backgroundColor = "green";
}
