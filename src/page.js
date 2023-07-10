import { homePage } from "./home";
import { menuPage } from "./menu.js";
import { contactsPage } from "./contacts.js";

export function pageLoad(labelStr) {
  if (document.querySelector("#labels-container"))
    document.querySelector("#labels-container").remove();

  const content = document.querySelector("#content");
  const container = document.createElement("div");
  const home = document.createElement("div");
  const menu = document.createElement("div");
  const contacts = document.createElement("div");
  const containerObject = { home, menu, contacts };

  container.id = "labels-container";
  home.textContent = "home";
  menu.textContent = "menu";
  contacts.textContent = "contacts";

  container.appendChild(home);
  container.appendChild(menu);
  container.appendChild(contacts);

  content.appendChild(container);

  containerObject[labelStr].style.backgroundColor = "green";

  Object.keys(containerObject).forEach((e) =>
    containerObject[e].addEventListener(
      "click",
      () => {
        pageLoad(e);
      },
      { once: true }
    )
  );
  if (labelStr == "home") homePage();
  else if (labelStr == "menu") menuPage();
  else if (labelStr == "contacts") contactsPage();
}
