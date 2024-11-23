import "./Header.css";
import data from "../../data/data";
const { title, links, imgs, themeDay, themeNight } = data;

export const changeTheme = () => {
  const appDiv = document.getElementById("app");
  const headerTheme = document.getElementById("header");
  const themeButton = document.getElementById("themeButton");
  themeButton.addEventListener("click", () => {
    appDiv.classList.toggle("light");
    headerTheme.classList.toggle("light");
    changeThext();
  });
};

export const changeThext = () => {
  const themeButton = document.getElementById("themeButton");
  const logo1 = document.getElementById("logo1");
  const logo2 = document.getElementById("logo2");
  if (themeButton.innerHTML === themeNight) {
    themeButton.innerHTML = themeDay;
  } else {
    themeButton.innerHTML = themeNight;
  }

  if (logo1.style.display === "block" || logo1.style.display === "") {
    logo1.style.display = "none";
    logo2.style.display = "block";
  } else {
    logo1.style.display = "block";
    logo2.style.display = "none";
  }
};

export const Header = () => {
  return `
    <header id="header">
        <a href="/"><h1>${title}</h1></a>
        <nav>
            <ul class="links">
                ${links
                  .map(
                    (link) => `
                    <li>
                        <a href="${link.place}">${link.name}</a>
                    </li>    
                `
                  )
                  .join("")}
            </ul>
        </nav>
        <button id="themeButton" class="themeButton">${themeNight}</button>
        <nav>
            <ul class="images">
                ${imgs
                  .map(
                    (img) => `
                    <li id="li">
                        <a href="${img.link}" target="_blank"><img src="${img.src}" alt="${img.alt}" id="logo1" class="logo1"></img></a>
                        <a href="${img.link}" target="_blank"><img src="${img.src2}" alt="${img.alt}" id="logo2" class="logo2"></img></a>
                    </li>
                  `
                  )
                  .join("")}
            </ul>
        </nav>
    </header>
     <hr />
    `;
};
