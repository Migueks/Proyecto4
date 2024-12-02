import "./Header.css";
import data from "../../data/data";
const { title, links, imgs, themeDay, themeNight, education, experience } =
  data;
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import Button from "../Button/Button";

export const changeTheme = () => {
  const appDiv = document.getElementById("app");
  const headerTheme = document.getElementById("header");
  const themeButton = document.getElementById("themeButton");
  const buttonTheme = document.querySelectorAll(".change-button");
  const titleTheme = document.querySelectorAll(".titleNight");
  themeButton.addEventListener("click", () => {
    appDiv.classList.toggle("light");
    headerTheme.classList.toggle("light");
    buttonTheme.forEach((button) => {
      button.classList.toggle("buttonLight");
    });
    titleTheme.forEach((title) => {
      title.classList.toggle("titleLight");
    });
    changeThext();
  });
};

export const changeThext = () => {
  const themeButton = document.getElementById("themeButton");
  const logos1 = document.querySelectorAll(".logo1");
  const logos2 = document.querySelectorAll(".logo2");

  if (themeButton.innerHTML === themeNight) {
    themeButton.innerHTML = themeDay;
  } else {
    themeButton.innerHTML = themeNight;
  }

  logos1.forEach((logo) => {
    logo.style.display =
      logo.style.display === "block" || logo.style.display === ""
        ? "none"
        : "block";
  });

  logos2.forEach((logo) => {
    logo.style.display =
      logo.style.display === "none" || logo.style.display === ""
        ? "block"
        : "none";
  });
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
                        <a href="${
                          link.place
                        }" id="${link.name.toLowerCase()}-anchor">${
                      link.name
                    }</a>
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
                    <li class="logo-container">
                        <a href="${img.link}" target="_blank">
                            <img src="${img.src}" alt="${img.alt}" class="logo1"></img>
                            <img src="${img.src2}" alt="${img.alt}" class="logo2"></img>
                        </a>
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

document.addEventListener("DOMContentLoaded", () => {
  const experienceAnchor = document.getElementById("experience-anchor");
  const educationAnchor = document.getElementById("education-anchor");
  const button = document.getElementById("buttonChange");
  const contentExperience = document.getElementById("content");
  const contentEducation = document.getElementById("content2");

  experienceAnchor.addEventListener("click", () => {
    contentExperience.style.display = "block";
    contentEducation.style.display = "none";
    button.innerHTML = education;
  });

  educationAnchor.addEventListener("click", () => {
    contentExperience.style.display = "none";
    contentEducation.style.display = "block";
    button.innerHTML = experience;
  });
});
