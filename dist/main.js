(()=>{"use strict";!function e(t){document.querySelector("#labels-container")&&document.querySelector("#labels-container").remove(),"home"==t?function(){document.querySelector("#header")&&document.querySelector("#header").remove();const e=document.querySelector("#content"),t=document.createElement("div"),n=document.createElement("h1");t.id="header",n.innerText="RESTURANT TITLE",t.appendChild(n),e.appendChild(t)}():"menu"==t&&function(){document.querySelector("#header")&&document.querySelector("#header").remove();const e=document.querySelector("#content"),t=document.createElement("div"),n=document.createElement("h1");t.id="header",n.innerText="Menu",t.appendChild(n),e.appendChild(t)}();const n=document.querySelector("#content"),c=document.createElement("div"),o=document.createElement("div"),d=document.createElement("div"),r=document.createElement("div"),m={home:o,menu:d,contacts:r};c.id="labels-container",o.textContent="home",d.textContent="menu",r.textContent="contacts",c.appendChild(o),c.appendChild(d),c.appendChild(r),n.appendChild(c),m[t].style.backgroundColor="green",Object.keys(m).forEach((t=>m[t].addEventListener("click",(()=>{e(t)}))))}("home")})();